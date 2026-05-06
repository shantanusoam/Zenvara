# Apple-Like Hyper Effect Prompt for the Renewable Energy Landing Page

## 1. Video Motion Analysis

**Source video:** `screenrecording-2026-05-03_19-07-26.mp4`  
**Format observed:** 2560 × 1440, 60 FPS, 17.35 seconds  
**Core visual theme:** premium renewable energy / solar-tech landing page with deep forest green, lime accent, off-white sections, rounded cards, solar imagery, badge cards, stats, testimonials, FAQ, CTA, and footer.

### What the current video is doing

The recording shows a continuous vertical scroll through a polished renewable-energy homepage. The existing experience already has a clean editorial layout, strong color contrast, card-based sections, and a premium green visual identity. Most of the transformation currently comes from the page scroll itself rather than heavy animation.

### Current transformation pattern

1. **Hero section**
   - Large solar panel background with a person in a hard hat.
   - Big headline: “Powering a Sustainable Future.”
   - Floating trust card and rounded call-to-action controls.
   - The hero has strong visual hierarchy but can feel more cinematic with parallax, light bloom, and layered depth.

2. **Intro / stats section**
   - Page moves into a bright off-white section.
   - Three core statistic cards appear with lime and dark-green accents.
   - Good opportunity for count-up numbers, card reveal, magnetic highlights, and liquid card expansion.

3. **Logo / partner strip**
   - Dark-green strip with multiple partner logos.
   - This can become a smooth infinite marquee with subtle glow trails and hover pauses.

4. **Services / solution cards**
   - Cards for solar panels, consulting, installation, and renewable solutions.
   - Strong card structure already exists, but the motion could be upgraded with layered card stacking, image parallax, 3D hover tilt, and soft glass reflections.

5. **Impact / difference section**
   - Dark-green storytelling area with words like “Footprint,” “Independence,” and “Communities.”
   - This is the best place for Apple-style scroll storytelling: words can lock in place, fade one by one, and drive synchronized image/card transformations.

6. **Testimonial section**
   - Off-white background with a split layout: quote on one side, solar worker image on the other.
   - This can feel more premium with a mask reveal, quote line-by-line animation, and a slow image push-in.

7. **FAQ and CTA**
   - FAQ accordions and a large CTA area.
   - FAQ can use fluid spring expansion and icon morphing.
   - CTA can become atmospheric with slow-moving gradient clouds and a glowing pill button.

8. **Footer**
   - Dark-green footer with newsletter form and structured links.
   - This can feel more complete with soft entrance choreography, cursor-reactive glow, and a final calm fade.

---

## 2. Desired Creative Direction

The new animation direction should feel like a **premium Apple product launch page**, but adapted to clean energy. Think:

- cinematic but not noisy;
- calm, expensive, smooth, and intentional;
- nature + technology combined;
- soft solar glow, glass, depth, and magnetic interactions;
- scroll-triggered storytelling rather than random motion;
- every element should feel like it is physically responding to the user.

The design should feel like **solar energy presented as a luxury technology product**.

---

## 3. Master Copy-Paste Prompt

Use this prompt in Cursor, Claude, v0, Lovable, Replit, Framer AI, or another AI builder to upgrade the page motion system.

```md
You are an elite Apple-level interaction designer, creative developer, and motion systems architect. I have a renewable-energy / solar-tech landing page with a dark forest green, lime accent, and off-white editorial layout. The page includes a hero section, solar imagery, floating cards, stats, partner logos, service cards, impact storytelling, testimonials, FAQ, CTA, and footer.

Your task is to transform the website into a premium Apple-inspired scroll experience with cinematic motion, smooth transformation, natural depth, and elegant micro-interactions. The final result should feel like a high-end clean-energy product launch page: calm, futuristic, tactile, polished, and emotionally satisfying.

Do not make it noisy, gimmicky, or gaming-like. Make it feel expensive, minimal, intelligent, and alive.

## Core Motion Personality

The motion language should be:

- slow enough to feel premium;
- fast enough to feel responsive;
- physical, spring-based, and natural;
- scroll-synchronized where useful;
- layered with depth, blur, opacity, scale, masking, and parallax;
- consistent across the whole website;
- accessible with reduced-motion support.

Use these motion principles:

- Primary easing: cubic-bezier(0.16, 1, 0.3, 1)
- Secondary easing: cubic-bezier(0.22, 1, 0.36, 1)
- Micro-interaction duration: 180ms–320ms
- Section reveal duration: 700ms–1200ms
- Hero cinematic movement: 1200ms–1800ms
- Use spring physics for cards, accordions, and buttons
- Avoid linear movement except for marquees
- Never animate everything at once; choreograph in waves

## Global Experience Upgrade

Add a full-page premium motion system:

1. Smooth scrolling using Lenis or an equivalent smooth-scroll system.
2. Scroll-triggered section reveals using GSAP ScrollTrigger or Framer Motion whileInView.
3. A subtle global ambient background made of slow radial gradients in deep green, lime, and soft white.
4. Cursor-reactive glow on large cards and CTA areas.
5. Magnetic buttons that slightly pull toward the cursor.
6. A sticky translucent navigation bar with Apple-like glass blur.
7. Consistent card entrance animation: blur(16px) → blur(0), y: 56 → 0, opacity: 0 → 1, scale: 0.96 → 1.
8. Consistent image reveal animation using clip-path or mask reveal.
9. Soft scroll progress indicator, very minimal, using lime glow.
10. Respect prefers-reduced-motion and disable heavy parallax when enabled.

## Visual Style

Keep the existing green renewable-energy brand, but elevate it:

- Deep forest background: #102C25 or similar
- Rich dark green: #173D35
- Bright solar lime: #B7FF5A or similar
- Soft off-white: #F4F2EF
- Text dark: #101815
- Glass panels: rgba(255,255,255,0.08) with backdrop blur
- Borders: rgba(255,255,255,0.12) or rgba(20,60,50,0.14)
- Shadows: soft, large, diffused, never harsh
- Use subtle noise texture only if it improves depth

The page should feel like solar panels, sunlight, glass, and clean technology merged into one experience.

## Hero Section Animation

Upgrade the hero into a cinematic opening sequence.

On page load:

1. The background solar image starts slightly zoomed in at scale 1.08 and settles to 1.0.
2. Add a very subtle parallax layer: solar panels move slower than foreground content.
3. Add a soft solar light sweep from top-left to bottom-right across the hero image.
4. The logo/nav fades down from y:-16, opacity:0 to y:0, opacity:1.
5. The headline appears line by line:
   - Line 1 enters with y:42, opacity:0, blur:14px
   - Line 2 follows 120ms later
   - Line 3 follows 120ms later
   - Final state: y:0, opacity:1, blur:0
6. Highlight words like “Sustainable” or “Future” with a soft lime glow that fades in, not a hard neon effect.
7. The floating trust card rises from y:40, scale:0.92, opacity:0 to y:0, scale:1, opacity:1.
8. The CTA button should magnetically respond to cursor movement and create a tiny lime ripple on hover.
9. Add floating micro-particles like dust in sunlight, extremely subtle and slow.
10. As the user scrolls down, the hero headline should gently scale down and fade while the solar image moves upward slower than the content.

Make the hero feel like the reveal of a premium climate technology product.

## Hero Scroll Transformation

When scrolling out of the hero:

- Pin the hero for a short moment.
- Let the headline drift upward and dissolve into blur.
- Let the floating trust card transform into a smaller stat-like card before fading into the next section.
- The hero image should perform a soft masked wipe upward into the off-white section.
- The transition should feel continuous, not like a hard section jump.

## Stats Section

Animate the stats as if they are intelligent dashboard modules.

For each stat card:

1. Reveal with stagger: 0ms, 100ms, 200ms.
2. Animate number count-up once visible.
3. Add a very soft lime glow behind the active stat.
4. On hover, card lifts by 8px, scale 1.015, shadow expands, and border brightens.
5. Add a tiny animated sparkline or circular progress ring if appropriate.
6. The stat cards should feel like Apple Health / Apple Watch dashboard modules but for clean energy.

## Partner Logo Strip

Turn the partner logos into a premium infinite marquee:

- Slow horizontal movement.
- Pause slightly on hover.
- Add soft fade masks on left and right edges.
- Logos should be muted by default and become brighter on hover.
- Add a subtle lime underglow that follows the hovered logo.

## Service Cards Section

Transform the service cards into a high-end card stack experience.

Animation behavior:

1. Cards enter from below with blur and scale correction.
2. Images inside cards move with subtle internal parallax.
3. On hover:
   - card lifts;
   - image zooms from 1.0 to 1.06;
   - a soft diagonal light reflection passes over the card;
   - border becomes slightly brighter;
   - CTA arrow moves 4px to the right.
4. Cards should have a gentle 3D tilt based on cursor position, but keep it subtle: max rotateX/rotateY: 3deg.
5. Add a “magnetic card focus” effect: the closest hovered card becomes crisp, neighboring cards slightly dim by 4%.

The cards should feel physical, like premium glass-and-paper objects.

## Impact Storytelling Section

This should become the emotional center of the page.

Create an Apple-style pinned scroll sequence:

- Pin the section for 250vh–320vh.
- On the left, keep a large headline: “Making a Difference for the Planet.”
- On the center, animate the words:
  1. Footprint
  2. Independence
  3. Communities
- Each word should become active one at a time as the user scrolls.
- Active word: full opacity, lime accent, slight scale 1.04.
- Inactive words: opacity 0.32, scale 0.98.
- On the right, show a visual card that transforms for each word.

Transformation sequence:

1. Footprint:
   - show solar installation image;
   - add soft carbon-particle dots fading away;
   - animate a small “reduced emissions” card.
2. Independence:
   - morph into home/business energy visual;
   - add a subtle battery/energy line animation;
   - show an energy autonomy badge.
3. Communities:
   - morph into people/community visual;
   - add three small circular avatars or icons that gently orbit or connect with thin glowing lines.

The pinned sequence should feel like the page is explaining the product with cinematic clarity.

## Testimonial Section

Make the testimonial feel warm and human.

1. Reveal the image with a vertical mask wipe.
2. Add slow image push-in while visible: scale 1.0 → 1.04.
3. Animate the quote line-by-line, like a premium editorial article.
4. The quote mark icon should softly pop in with spring physics.
5. The customer avatar should slide in after the quote, not before.
6. Add a small ambient light gradient behind the image, matching the solar/lime color.

The motion should feel emotional, trustworthy, and calm.

## FAQ Section

Upgrade the FAQ accordion with fluid interactions.

For each question:

- Row hover: background gently brightens, x moves 3px.
- Icon morphs from plus to minus with rotation.
- Answer opens with spring height animation, opacity fade, and y: -6 → 0.
- Keep timing fast but soft: 220ms–360ms.
- Do not make the FAQ bounce excessively.

## CTA Section

The CTA should feel like the final product-launch moment.

1. Add a dark cinematic background image or gradient with slow moving cloud/solar atmosphere.
2. Headline enters with blur-to-sharp animation.
3. CTA button glows softly, as if charged by sunlight.
4. Add a tiny orbit of 3 customer avatars or dots beside the button.
5. On hover, button should:
   - scale to 1.025;
   - create a soft radial ripple;
   - arrow moves right;
   - background shifts slightly brighter.
6. The CTA should feel confident, clean, and decisive.

## Footer

Make the footer calm and polished:

- Newsletter input appears as a glass pill.
- Footer columns fade upward in staggered groups.
- Contact icons have small hover glows.
- Add a final soft green ambient gradient at the bottom of the page.
- Do not over-animate the footer; let it feel stable and complete.

## Advanced Micro-Interactions

Add these small premium details:

1. Magnetic buttons:
   - Button tracks cursor within 60px radius.
   - Text and icon move less than button background for layered depth.

2. Cursor glow on cards:
   - Use CSS variables `--mouse-x` and `--mouse-y`.
   - Add radial-gradient highlight that follows cursor.
   - Keep opacity low: 0.12–0.22.

3. Image light sweep:
   - On hover, add a diagonal pseudo-element moving across image.
   - Duration: 700ms.
   - Use opacity below 0.25.

4. Text reveal:
   - Split large headings into lines or words.
   - Animate with y, opacity, blur, and slight letter spacing correction.

5. Scroll progress:
   - Minimal vertical line or top bar.
   - Lime color with very soft glow.
   - Should feel like a product page progress indicator.

6. Background energy lines:
   - Thin SVG lines, barely visible.
   - Animate stroke-dashoffset slowly.
   - Use only in dark sections.

## Recommended Tech Implementation

Use this stack if coding:

- React / Next.js
- Tailwind CSS
- Framer Motion for component entrances and micro-interactions
- GSAP + ScrollTrigger for pinned storytelling sections
- Lenis for smooth scrolling
- CSS variables for mouse-position glow
- Optional: Three.js only if very lightweight; otherwise avoid heavy 3D

## Performance Rules

The final page must remain smooth and premium.

- Target 60 FPS.
- Use transform and opacity whenever possible.
- Avoid animating layout-heavy properties.
- Lazy-load images below the fold.
- Use `will-change` only on elements that actually animate.
- Compress images.
- Disable heavy parallax on mobile.
- Respect `prefers-reduced-motion`.
- Keep particle effects subtle and lightweight.

## Mobile Behavior

On mobile:

- Reduce parallax intensity by 60%.
- Disable complex 3D tilt.
- Keep scroll reveals but shorten travel distance.
- Do not pin sections for too long.
- Keep CTA and FAQ interactions simple and responsive.
- Prioritize readability and touch performance.

## Final Quality Bar

The final page should feel like:

- Apple product storytelling;
- premium solar technology;
- calm luxury;
- smooth glass and sunlight;
- high trust;
- clean energy with emotional warmth.

It should not feel like a generic animated template. Every motion should support the story: clean energy becoming simple, beautiful, and powerful.

Deliver the upgraded landing page with clean reusable components, a consistent motion system, and clearly named animation utilities.
```

---

## 4. Shorter Prompt Version

Use this when you want a compact version for a builder with limited context.

```md
Upgrade this renewable-energy landing page into a premium Apple-inspired scroll experience. Keep the dark forest green, lime accent, off-white editorial layout, rounded cards, solar imagery, stats, service cards, testimonials, FAQ, CTA, and footer, but add a cinematic motion system.

Make the page feel like a luxury clean-energy product launch: smooth, calm, tactile, intelligent, and emotionally warm.

Add:
- Lenis-style smooth scrolling;
- sticky glass navigation;
- cinematic hero reveal with image parallax, headline line reveal, floating card entrance, and soft solar light sweep;
- scroll-synced hero-to-content transition with masked wipe;
- stat cards with count-up numbers and subtle glow;
- partner logo marquee with edge fade masks;
- service cards with staggered reveal, image parallax, soft 3D hover tilt, diagonal light sweep, and magnetic focus;
- pinned impact storytelling section where “Footprint,” “Independence,” and “Communities” activate one-by-one and transform the right-side visual card;
- testimonial section with mask-revealed image and line-by-line quote animation;
- FAQ accordion with fluid spring open/close;
- final CTA with atmospheric green gradient, glowing button, and soft ripple hover;
- calm animated footer with newsletter glass pill.

Use premium easing: cubic-bezier(0.16, 1, 0.3, 1). Use blur-to-sharp, opacity, y movement, scale, mask reveals, and subtle parallax. Avoid noisy effects. Support mobile and prefers-reduced-motion. Keep performance at 60 FPS.
```

---

## 5. Motion System Cheat Sheet

### Easing

```css
--ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
--ease-soft-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-snap: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Reusable reveal motion

```js
const reveal = {
  hidden: {
    opacity: 0,
    y: 56,
    scale: 0.96,
    filter: "blur(16px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

### Premium hover behavior

```js
const premiumHover = {
  y: -8,
  scale: 1.015,
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 24,
  },
};
```

### Button micro-interaction

```js
const buttonTap = {
  scale: 0.97,
};

const buttonHover = {
  scale: 1.025,
  transition: {
    type: "spring",
    stiffness: 350,
    damping: 22,
  },
};
```

---

## 6. Extra Creative Effects To Add

### Solar Light Sweep

A diagonal light reflection moves across hero images and service cards. It should be subtle, like sunlight passing over glass.

### Energy Thread Lines

Thin animated SVG lines connect cards or icons in dark sections. Use very low opacity so they feel premium, not decorative clutter.

### Living Gradient Background

A slow radial gradient moves behind dark sections:

- deep green base;
- soft lime bloom near CTA;
- very faint blue-green atmospheric shadow.

### Card Depth Stack

Cards should not just fade in. They should feel like layers rising from the page:

- back cards start lower and smaller;
- front card resolves first;
- image movement is slightly slower than card movement.

### Text as Product Story

Large headings should animate as if being presented in a keynote:

- line one appears;
- supporting line follows;
- highlighted word softly glows;
- body copy enters last.

---

## 7. Best Final Direction

The strongest direction for this specific video is not to add random flashy effects. The page already has a premium renewable-energy foundation. The best improvement is to make the scroll feel like a **guided cinematic product story**:

1. Hero introduces the clean-energy vision.
2. Stats prove credibility.
3. Services show practical solutions.
4. Impact section creates emotion.
5. Testimonials build trust.
6. CTA closes with calm confidence.

The result should feel like **Apple presenting the future of solar energy**.
