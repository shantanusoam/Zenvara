# Tasks

## Completed

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
