# Tasks

## Completed

- **2026-05-30** — Seed static marketing content into Sanity (asset upload from `public/`), wire home/about/contact components to CMS props, add contactPage singleton, expand schema/queries/resolvers.
- **2026-05-30** — Deploy script runs Sanity CMS setup (CORS for production URL + optional seed via `scripts/setup-sanity-cms.sh`); studio layout, singleton structure, expanded seed.
- **2026-05-15** — Home page feedback (desktop + mobile): header logo sizing + `AnimatedCtaButton` on Get in Touch (arrow straightens on hover); stats marquee auto-scroll; products carousel with brand images + step autoplay; Impact tabs (Transformation/Growth/Opportunity) swap copy + image; testimonial vertical scroll + `testimonials.png`; badges background/center position; CTA parallax background; blog card images; footer contact icons; mobile products white-space + compact header CTA.
- **2026-05-15** — Shared `AnimatedCtaButton`: fade-up entrance (optional `revealDelay`), horizontal expand + arrow rotate on hover; used on home hero and About intro CTA.
- **2026-05-14** — `meet-our-team-section.tsx`: use prop `team` instead of undefined `TEAM` for eyebrow, title, and members.
- **2026-05-14** — `site-footer.tsx`: add missing `next/image` and `react-icons` imports (`Fa*` / `FaXTwitter`) so social icons and logo resolve; add `react-icons` to `apps/web` dependencies.
- **2026-05-13** — Fix `/studio` Internal Server Error in production: avoid SSR of Sanity (`window is not defined`) by rendering Studio only in the client (`next/dynamic` + `ssr: false`), using `NextStudio` from `next-sanity/studio/client-component`, and `force-dynamic` on the studio page.
- **2026-05-13** — DigitalOcean deploy: copy `apps/web/public` into `.next/standalone/apps/web/public` after unpack so `next/image` and `/_next/image` resolve local assets; add `sharp` for production image optimization on Linux.
- **2026-05-12** — Home build and JSX fixes: `zenvara-lower-sections` blog `</section>` / `sustainability` props / duplicate eyebrow; sustainability radial icons (`SUSTAINABILITY_PILLAR_ICONS_FALLBACK`, optional `icon` on pillars); `zenvara-body-sections` drop missing `react-slick` imports, `statStrip.headline2`, `SectionLayout` indentation; `statStrip.headline2` in types, GROQ, Sanity schema; `ChevronDown` import in `site-header-bar`.
- **2026-05-09** — Add minimal Sanity CMS architecture for editable Zenvara marketing content and SEO, with local TypeScript content fallback, embedded Studio route, seed command, and setup docs.
- **2026-05-09** — Guard the embedded Sanity Studio route so missing CMS environment variables show setup instructions instead of calling the placeholder Sanity API.
- **2026-05-06** — Bind the local project to `https://github.com/shantanusoam/Zenvara.git` and push the current code.
- **2026-05-03** — Implement Zenvara marketing homepage from Figma (node `32:1143`) with Talk to Figma MCP channel `bn0boj6v`, matching copy/colors and Apple-like motion from `ZENVARA/apple_like_hyper_effect_prompt.md` (reveal, hero parallax glow, magnetic CTAs, scroll progress, testimonial mask reveal).
- **2026-05-03** — About Us page from Figma node `32:1444` at `/about` (hero, intro + “Our Services”, wide image, stats, mission/vision, leadership cards, impact → CTA → testimonial → shared footer); extracted `SiteHeaderBar`, `SiteFooter`, `PillButton`, and `marketing-blocks` for reuse with home.

## Discovered During Work

- Replace Unsplash placeholders with brand assets and hero video when available (`HERO.videoNote` in Figma).
- Consider Lenis + GSAP ScrollTrigger for longer pinned “impact” sequences per motion spec.
- Talk to Figma MCP `get_node_info` for node `35:2535` timed out; Meet Our Team UI was aligned to the existing About team pattern—re-fetch Figma when the plugin is stable to match `35:2535` pixel-perfect.
