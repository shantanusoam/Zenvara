#!/usr/bin/env bash
# Configure Sanity CORS for local + production URLs and optionally seed CMS content.
# Called from deploy-digitalocean.sh; can also be run manually from the repo root.
set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_ENV_FILE="${APP_ENV_FILE:-$ROOT_DIR/apps/web/.env.production}"
SERVER_NAME="${SERVER_NAME:-168.144.92.215}"
PUBLIC_PORT="${PUBLIC_PORT:-8004}"
PUBLIC_URL="${PUBLIC_URL:-}"
EXTRA_CORS_ORIGINS="${EXTRA_CORS_ORIGINS:-}"
CMS_SKIP="${CMS_SKIP:-0}"
CMS_SEED="${CMS_SEED:-1}"

read_env_var() {
  local key="$1"
  local file="$2"
  if [[ ! -f "$file" ]]; then
    return 0
  fi
  grep -E "^${key}=" "$file" | tail -1 | cut -d= -f2- | tr -d '\r' | sed -e 's/^"//' -e 's/"$//' -e "s/^'//" -e "s/'$//"
}

if [[ "$CMS_SKIP" == "1" ]]; then
  echo "Skipping Sanity CMS setup (CMS_SKIP=1)"
  exit 0
fi

if [[ ! -f "$APP_ENV_FILE" ]]; then
  echo "Skipping Sanity CMS setup: missing $APP_ENV_FILE"
  exit 0
fi

PROJECT_ID="$(read_env_var NEXT_PUBLIC_SANITY_PROJECT_ID "$APP_ENV_FILE")"
if [[ -z "$PROJECT_ID" ]]; then
  PROJECT_ID="${SANITY_PROJECT_ID:-}"
fi

if [[ -z "$PROJECT_ID" ]]; then
  echo "Skipping Sanity CMS setup: no NEXT_PUBLIC_SANITY_PROJECT_ID"
  exit 0
fi

export NEXT_PUBLIC_SANITY_PROJECT_ID="$PROJECT_ID"
export NEXT_PUBLIC_SANITY_DATASET="$(read_env_var NEXT_PUBLIC_SANITY_DATASET "$APP_ENV_FILE")"
export NEXT_PUBLIC_SANITY_DATASET="${NEXT_PUBLIC_SANITY_DATASET:-production}"
export NEXT_PUBLIC_SANITY_API_VERSION="$(read_env_var NEXT_PUBLIC_SANITY_API_VERSION "$APP_ENV_FILE")"
export NEXT_PUBLIC_SANITY_API_VERSION="${NEXT_PUBLIC_SANITY_API_VERSION:-2026-05-09}"

TOKEN_FROM_ENV="$(read_env_var SANITY_AUTH_TOKEN "$APP_ENV_FILE")"
if [[ -n "$TOKEN_FROM_ENV" ]]; then
  export SANITY_AUTH_TOKEN="$TOKEN_FROM_ENV"
fi

cd "$ROOT_DIR"
corepack enable >/dev/null 2>&1 || true
corepack prepare "pnpm@9.15.9" --activate >/dev/null 2>&1 || true

PRIMARY_SERVER_NAME="${SERVER_NAME%% *}"
if [[ -n "$PUBLIC_URL" ]]; then
  PRODUCTION_URL="$PUBLIC_URL"
elif [[ "$PUBLIC_PORT" == "80" ]]; then
  PRODUCTION_URL="http://${PRIMARY_SERVER_NAME}"
else
  PRODUCTION_URL="http://${PRIMARY_SERVER_NAME}:${PUBLIC_PORT}"
fi

add_cors_origin() {
  local origin="$1"
  echo "Sanity CORS: $origin"
  if pnpm --filter web exec sanity cors add "$origin" --credentials; then
    echo "  added"
  else
    echo "  skipped (may already exist)"
  fi
}

echo "Configuring Sanity CMS for project $PROJECT_ID"
add_cors_origin "http://localhost:3000"
add_cors_origin "http://127.0.0.1:3000"
add_cors_origin "$PRODUCTION_URL"
if [[ "$PRODUCTION_URL" == http://* && "$PUBLIC_PORT" == "80" ]]; then
  add_cors_origin "https://${PRIMARY_SERVER_NAME}"
fi
for origin in $EXTRA_CORS_ORIGINS; do
  add_cors_origin "$origin"
done

has_sanity_auth() {
  if [[ -n "${SANITY_AUTH_TOKEN:-}" ]]; then
    return 0
  fi
  if [[ -f "${HOME}/.config/sanity/config.json" ]] && grep -q '"token"' "${HOME}/.config/sanity/config.json" 2>/dev/null; then
    return 0
  fi
  return 1
}

if [[ "$CMS_SEED" != "1" ]]; then
  echo "Skipping CMS seed (CMS_SEED=$CMS_SEED)"
  exit 0
fi

if ! has_sanity_auth; then
  echo "Skipping CMS seed: run 'npx sanity login' once on this machine, or add SANITY_AUTH_TOKEN to apps/web/.env.production"
  exit 0
fi

echo "Seeding Sanity CMS content"
pnpm --filter web cms:seed
echo "Sanity CMS setup complete"
