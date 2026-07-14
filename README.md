# shadcn/ui monorepo template

This is a Next.js monorepo template with shadcn/ui.

## Zenvara web homepage

The `web` app homepage (`apps/web/app/page.tsx`) implements the Zenvara Energy landing layout from Figma, with local fallback copy in `apps/web/lib/home-content.ts` and motion utilities in `apps/web/lib/motion-presets.ts`. The About page lives at `apps/web/app/about/page.tsx` with fallback copy in `apps/web/lib/about-content.ts`. Run tests with `pnpm --filter web test`.

## CMS and SEO

The site uses Sanity CMS for editable marketing content and SEO, while keeping the section layouts in Next.js. If Sanity environment variables are missing, the app falls back to the local TypeScript content so development and static delivery still work.

Copy `apps/web/.env.example` to `apps/web/.env.local` and set:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-09
SANITY_REVALIDATE_SECRET=long-random-secret
```

Useful commands:

```bash
pnpm --filter web cms:dev
pnpm --filter web cms:seed
```

The embedded Studio is available at `/studio` after Sanity is configured. If the project ID is missing, `/studio` shows the required environment variables instead of attempting to connect to a placeholder Sanity project. The CMS models include global site settings, home page content, about page content, services/products, blog posts, and reusable SEO fields used by Next.js `generateMetadata()`.

Website queries bypass Sanity's API CDN and are not cached by Next.js, so published Studio edits are read by the live site on the next request. In production, services/products are controlled by Sanity: adding a service document publishes a new service, and deleting a service removes it from the home carousel, service index, and detail route after deploy/runtime refresh.

### Admin / CMS minimum setup

Deploy runs CMS setup automatically (`scripts/setup-sanity-cms.sh`):

- Adds Sanity CORS for localhost and your production URL (`http://SERVER_NAME:PUBLIC_PORT`)
- Seeds starter content when authenticated

Before the first deploy, either:

```bash
cd apps/web && npx sanity login
```

Or add a write token to `apps/web/.env.production`:

```bash
SANITY_AUTH_TOKEN=your-sanity-api-token-with-editor-permissions
```

Then deploy as usual — no separate `cms:cors` / `cms:seed` step needed:

```bash
./scripts/deploy-digitalocean.sh
```

Skip CMS steps on a redeploy with `CMS_SKIP=1`, or CORS-only with `CMS_SEED=0`.

Production admin URL: `http://168.144.92.215:8004/studio`. Published edits in the CMS are fetched by the marketing site on the next request.

Optional: to explicitly refresh any cached route output after clicking **Publish** in Studio, create a Sanity webhook that calls:

```bash
http://168.144.92.215:8004/api/revalidate?secret=SANITY_REVALIDATE_SECRET
```

Trigger it for create, update, publish, and delete events on `homePage`, `siteSettings`, `aboutPage`, `contactPage`, and `service`. Include `_type`, `_id`, and `slug` in the webhook payload; for service documents, the slug lets Next.js refresh `/service/<slug>` precisely.

### Verify seeded content

After deploy or `pnpm --filter web cms:seed`:

1. Open `/studio` → **Site** → Home / About / Contact / Site settings
2. Confirm **Services** lists 6 product documents
3. Edit home hero headline in Studio → publish → reload `/` and confirm the change appears on the live site
4. Add or delete a service document → publish → confirm `/`, `/service`, and `/service/<slug>` reflect the change
5. If seed skipped, run `npx sanity login` or set `SANITY_AUTH_TOKEN` in `apps/web/.env.production`, then redeploy

### Edit or hide Technical Specifications (per product)

In `/studio` → **Service / Product** → open a product (e.g. 2-Wheeler):

1. Scroll to **Technical specifications**
2. Set **Section visibility**:
   - **Show as specification table** — edit **Specification table rows** (Battery type, Model No., Capacity, Range)
   - **Show as metrics cards** — edit label/value metrics
   - **Hide section (not shown on this product)** — removes the entire specs block from that product page
3. Publish, then reload `/service/<slug>`

Re-seed (`pnpm --filter web cms:seed` or redeploy without `CMS_SEED=0`) if older service documents are missing `display` / `tableRows` fields.

## Deploy to DigitalOcean

Run from the monorepo root:

```bash
./scripts/deploy-digitalocean.sh
```

The script deploys `apps/web` to `root@168.144.92.215` by default, installs a supported Node runtime on the droplet, builds the `web` workspace with `pnpm`, starts it with `systemd`, and publishes it through Nginx on port `8004`. It also configures Sanity CORS for the production URL and seeds CMS content when `sanity login` or `SANITY_AUTH_TOKEN` is available locally.

Pass Sanity values inline when deploying:

```bash
SANITY_PROJECT_ID=your-project-id \
SANITY_DATASET=production \
SANITY_API_VERSION=2026-05-09 \
./scripts/deploy-digitalocean.sh
```

If `SANITY_PROJECT_ID` is omitted, the script preserves an existing `apps/web/.env.production` on the server. On a first deploy without that value, it writes a placeholder env file and exits so you can populate it before rerunning.

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```
