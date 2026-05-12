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
  PRODUCTS,
  SITE,
  STAT_STRIP,
  SUSTAINABILITY,
  TESTIMONIAL,
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
  },
  testimonial: TESTIMONIAL,
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
    heroImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
    aboutImage:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&q=80",
    productBackgrounds: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=70",
      "https://images.unsplash.com/photo-1620288627223-53302f4e41c2?w=800&q=70",
      "https://images.unsplash.com/photo-1509391366360?w=800&q=70",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=70",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=70",
    ],
    impactImage:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=900&q=80",
    testimonialImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    sustainabilityImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80",
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
