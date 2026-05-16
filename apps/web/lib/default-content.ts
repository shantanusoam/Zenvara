import {
  ABOUT_HERO,
  ABOUT_INTRO,
  ABOUT_SIDE_IMAGE,
  ABOUT_STATS,
  ABOUT_WIDE_IMAGE,
  TEAM,
} from "./about-content"
import {
  BLOG,
  CTA,
  FOOTER,
  HERO,
  IMPACT,
  MISSION_VISION,
  NAV,
  PRODUCT_CARD_BACKGROUNDS,
  PRODUCTS,
  SITE,
  STAT_STRIP,
  SUSTAINABILITY,
  TESTIMONIAL,
  TESTIMONIAL_SLIDES,
  WHY_ZENVARA,
  WHO_WE_ARE,
} from "./home-content"
import type {
  AboutPageContent,
  HomePageContent,
  SiteSettingsContent,
} from "./content-types"

export const DEFAULT_SITE_SETTINGS = {
  ...SITE,
  nav: [...NAV],
  footer: {
    ...FOOTER,
    quickLinks: [...FOOTER.quickLinks],
    productLinks: [...FOOTER.productLinks],
    legal: [...FOOTER.legal],
  },
  seo: {
    metaTitle: `${SITE.name} | ${SITE.tagline}`,
    metaDescription:
      "Zenvara Energy designs and supplies high-cycle-life LFP battery packs for mobility, backup power, telecom, and energy storage.",
  },
} satisfies SiteSettingsContent

export const DEFAULT_HOME_PAGE = {
  hero: HERO,
  whoWeAre: WHO_WE_ARE,
  missionVision: MISSION_VISION,
  statStrip: {
    ...STAT_STRIP,
    stats: [...STAT_STRIP.stats],
    sidebar: [...STAT_STRIP.sidebar],
  },
  whyZenvara: {
    ...WHY_ZENVARA,
    features: [...WHY_ZENVARA.features],
  },
  products: {
    ...PRODUCTS,
    cards: [...PRODUCTS.cards],
  },
  impact: {
    ...IMPACT,
    words: [...IMPACT.words],
    panels: [...IMPACT.panels],
  },
  testimonial: TESTIMONIAL,
  testimonialSlides: [...TESTIMONIAL_SLIDES],
  sustainability: {
    ...SUSTAINABILITY,
    pillars: [...SUSTAINABILITY.pillars],
  },
  cta: CTA,
  blog: {
    ...BLOG,
    posts: [...BLOG.posts],
  },
  images: {
    heroImage: "/assets/home page/hero_image.png",
    aboutImage: "/assets/about_us.png",
    productBackgrounds: [...PRODUCT_CARD_BACKGROUNDS],
    impactImage: IMPACT.panels[0]!.image,
    testimonialImage: "/assets/testimonials.png",
    sustainabilityImage:
      "/assets/home%20page/16339529_26_Ecology_concept%201.png",
  },
  seo: {
    metaTitle: `${SITE.name} | ${SITE.tagline}`,
    metaDescription:
      "High-performance lithium-ion LFP battery packs engineered in India for EVs, backup power, telecom, solar, and ESS applications.",
  },
} satisfies HomePageContent

export const DEFAULT_ABOUT_PAGE = {
  hero: ABOUT_HERO,
  intro: ABOUT_INTRO,
  images: {
    heroBackground:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=80",
    sideImage: ABOUT_SIDE_IMAGE,
    wideImage: ABOUT_WIDE_IMAGE,
  },
  stats: {
    ...ABOUT_STATS,
    stats: [...ABOUT_STATS.stats],
  },
  team: {
    ...TEAM,
    members: TEAM.members.map((member) => ({
      ...member,
      socials: [...member.socials],
    })),
  },
  seo: {
    metaTitle: `About ${SITE.name}`,
    metaDescription:
      "Learn about Zenvara Energy, a Delhi-NCR lithium-ion battery company building safe, reliable LFP packs for India's energy transition.",
  },
} satisfies AboutPageContent
