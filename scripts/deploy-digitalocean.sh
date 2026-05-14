#!/usr/bin/env bash
set -Eeuo pipefail

REMOTE_USER="${REMOTE_USER:-root}"
REMOTE_HOST="${REMOTE_HOST:-168.144.92.215}"
APP_DIR="${APP_DIR:-/opt/zenvara}"
SERVICE_NAME="${SERVICE_NAME:-zenvara-web}"
INTERNAL_PORT="${INTERNAL_PORT:-3001}"
PUBLIC_PORT="${PUBLIC_PORT:-8004}"
SERVER_NAME="${SERVER_NAME:-$REMOTE_HOST}"
NODE_MAJOR="${NODE_MAJOR:-22}"
CLIENT_MAX_BODY_SIZE="${CLIENT_MAX_BODY_SIZE:-10M}"
BUILD_FILTER="${BUILD_FILTER:-web}"

REMOTE="${REMOTE_USER}@${REMOTE_HOST}"
ARCHIVE_NAME="zenvara-runtime.tar.gz"
REMOTE_ARCHIVE="/tmp/${ARCHIVE_NAME}"
LOCAL_ARCHIVE="$(mktemp -t zenvara-runtime.XXXXXX.tar.gz)"

cleanup() {
  rm -f "$LOCAL_ARCHIVE"
}
trap cleanup EXIT

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

quote_remote() {
  printf "%q" "$1"
}

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_ENV_FILE="$ROOT_DIR/apps/web/.env.production"
STANDALONE_DIR="$ROOT_DIR/apps/web/.next/standalone"
STATIC_DIR="$ROOT_DIR/apps/web/.next/static"
PUBLIC_DIR="$ROOT_DIR/apps/web/public"

cd "$ROOT_DIR"

require_cmd ssh
require_cmd scp
require_cmd tar
require_cmd node
require_cmd corepack

if [[ ! -f "$APP_ENV_FILE" ]]; then
  echo "Missing production env file: $APP_ENV_FILE" >&2
  exit 1
fi

echo "Preparing local build toolchain"
corepack enable
corepack prepare "pnpm@9.15.9" --activate

echo "Building standalone Next.js runtime locally"
pnpm install --frozen-lockfile --filter "${BUILD_FILTER}..."
pnpm --filter "$BUILD_FILTER" build

if [[ ! -d "$STANDALONE_DIR" ]]; then
  echo "Missing standalone build output: $STANDALONE_DIR" >&2
  exit 1
fi

if [[ ! -d "$STATIC_DIR" ]]; then
  echo "Missing static build output: $STATIC_DIR" >&2
  exit 1
fi

echo "Packaging runtime bundle from $ROOT_DIR"
tar \
  -C "$ROOT_DIR" \
  -czf "$LOCAL_ARCHIVE" \
  apps/web/.env.production \
  apps/web/public \
  apps/web/.next/static \
  apps/web/.next/standalone

echo "Uploading runtime bundle to $REMOTE:$REMOTE_ARCHIVE"
scp "$LOCAL_ARCHIVE" "$REMOTE:$REMOTE_ARCHIVE"

echo "Deploying runtime bundle on $REMOTE"
ssh "$REMOTE" \
  "APP_DIR=$(quote_remote "$APP_DIR") SERVICE_NAME=$(quote_remote "$SERVICE_NAME") INTERNAL_PORT=$(quote_remote "$INTERNAL_PORT") PUBLIC_PORT=$(quote_remote "$PUBLIC_PORT") SERVER_NAME=$(quote_remote "$SERVER_NAME") NODE_MAJOR=$(quote_remote "$NODE_MAJOR") CLIENT_MAX_BODY_SIZE=$(quote_remote "$CLIENT_MAX_BODY_SIZE") REMOTE_ARCHIVE=$(quote_remote "$REMOTE_ARCHIVE") bash -s" <<'REMOTE_SCRIPT'
set -Eeuo pipefail

if [[ "$(id -u)" -eq 0 ]]; then
  SUDO=""
else
  SUDO="sudo"
fi

case "$APP_DIR" in
  /opt/*|/srv/*|/var/www/*) ;;
  *)
    echo "Refusing to deploy outside /opt, /srv, or /var/www: $APP_DIR" >&2
    exit 1
    ;;
esac

install_node() {
  local current_major=""

  if command -v node >/dev/null 2>&1; then
    current_major="$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null || true)"
  fi

  if [[ "$current_major" == "$NODE_MAJOR" ]]; then
    return
  fi

  export DEBIAN_FRONTEND=noninteractive
  $SUDO apt-get update
  $SUDO apt-get install -y ca-certificates curl gnupg nginx
  $SUDO mkdir -p /etc/apt/keyrings

  if [[ ! -f /etc/apt/keyrings/nodesource.gpg ]]; then
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key \
      | $SUDO gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
  fi

  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_${NODE_MAJOR}.x nodistro main" \
    | $SUDO tee /etc/apt/sources.list.d/nodesource.list >/dev/null

  $SUDO apt-get update
  $SUDO apt-get install -y nodejs
}

echo "Installing runtime dependencies"
export DEBIAN_FRONTEND=noninteractive
$SUDO apt-get update
$SUDO apt-get install -y ca-certificates curl gnupg nginx
install_node

echo "Preparing app directory: $APP_DIR"
$SUDO mkdir -p "$APP_DIR"
$SUDO find "$APP_DIR" -mindepth 1 -maxdepth 1 -exec rm -rf {} +

echo "Unpacking runtime bundle"
$SUDO tar --no-same-owner -xzf "$REMOTE_ARCHIVE" -C "$APP_DIR"

# Next standalone runs from .../standalone/apps/web with cwd there; `public` must
# live beside server.js or local `/_next/image` and other public files 404.
STANDALONE_WEB="$APP_DIR/apps/web/.next/standalone/apps/web"
echo "Copying public/ into standalone runtime: $STANDALONE_WEB/public"
$SUDO rm -rf "$STANDALONE_WEB/public"
$SUDO cp -a "$APP_DIR/apps/web/public" "$STANDALONE_WEB/public"

echo "Writing systemd service"
$SUDO tee "/etc/systemd/system/${SERVICE_NAME}.service" >/dev/null <<EOF
[Unit]
Description=Zenvara Next.js web app
After=network.target

[Service]
User=root
Group=www-data
WorkingDirectory=$APP_DIR/apps/web/.next/standalone/apps/web
Environment=NODE_ENV=production
Environment=HOSTNAME=127.0.0.1
Environment=PORT=$INTERNAL_PORT
EnvironmentFile=$APP_DIR/apps/web/.next/standalone/apps/web/.env.production
ExecStart=/usr/bin/env node $APP_DIR/apps/web/.next/standalone/apps/web/server.js
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF

echo "Writing Nginx site"
$SUDO tee "/etc/nginx/sites-available/${SERVICE_NAME}" >/dev/null <<EOF
server {
    listen $PUBLIC_PORT;
    listen [::]:$PUBLIC_PORT;
    server_name $SERVER_NAME _;

    client_max_body_size $CLIENT_MAX_BODY_SIZE;

    location /_next/static/ {
        alias $APP_DIR/apps/web/.next/static/;
        access_log off;
        expires 30d;
    }

    location / {
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_redirect off;
        proxy_pass http://127.0.0.1:$INTERNAL_PORT;
    }
}
EOF

$SUDO ln -sf "/etc/nginx/sites-available/${SERVICE_NAME}" "/etc/nginx/sites-enabled/${SERVICE_NAME}"

echo "Restarting services"
$SUDO systemctl daemon-reload
$SUDO systemctl enable --now "$SERVICE_NAME"
$SUDO systemctl restart "$SERVICE_NAME"
$SUDO nginx -t
$SUDO systemctl enable --now nginx
$SUDO systemctl restart nginx

echo "Verifying deployment"
curl -fsSI "http://127.0.0.1:$INTERNAL_PORT" >/dev/null
curl -fsSI "http://127.0.0.1:$PUBLIC_PORT" >/dev/null
systemctl is-active --quiet "$SERVICE_NAME"
systemctl is-active --quiet nginx

echo "Deployment complete: http://$SERVER_NAME:$PUBLIC_PORT"
REMOTE_SCRIPT

echo "Checking public URL: http://${SERVER_NAME}:${PUBLIC_PORT}"
if command -v curl >/dev/null 2>&1; then
  if curl -fsSI "http://${SERVER_NAME}:${PUBLIC_PORT}" >/dev/null; then
    echo "Public URL responded successfully"
  else
    echo "Public URL check failed; deployment on the server completed, but DNS/firewall may need attention" >&2
  fi
fi

echo "Done: http://${SERVER_NAME}:${PUBLIC_PORT}"
