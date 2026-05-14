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
```

Useful commands:

```bash
pnpm --filter web cms:dev
pnpm --filter web cms:seed
```

The embedded Studio is available at `/studio` after Sanity is configured. If the project ID is missing, `/studio` shows the required environment variables instead of attempting to connect to a placeholder Sanity project. The CMS models include global site settings, home page content, about page content, blog posts, and reusable SEO fields used by Next.js `generateMetadata()`.

## Deploy to DigitalOcean

Run from the monorepo root:

```bash
./scripts/deploy-digitalocean.sh
```

The script deploys `apps/web` to `root@168.144.92.215` by default, installs a supported Node runtime on the droplet, builds the `web` workspace with `pnpm`, starts it with `systemd`, and publishes it through Nginx on port `8004`.

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
