# shadcn/ui monorepo template

This is a Next.js monorepo template with shadcn/ui.

## Zenvara web homepage

The `web` app homepage (`apps/web/app/page.tsx`) implements the Zenvara Energy landing layout from Figma, with section copy in `apps/web/lib/home-content.ts` and motion utilities in `apps/web/lib/motion-presets.ts`. The About page lives at `apps/web/app/about/page.tsx` with copy in `apps/web/lib/about-content.ts`. Run tests with `pnpm --filter web test`.

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
