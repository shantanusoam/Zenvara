import {
  DEFAULT_ABOUT_PAGE,
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "@/lib/default-content"
import type {
  AboutPageContent,
  HomePageContent,
  SeoFields,
  SiteSettingsContent,
} from "@/lib/content-types"
import { sanityClient } from "./client"
import { isSanityConfigured } from "./env"
import { aboutPageQuery, homePageQuery, siteSettingsQuery } from "./queries"

const revalidate = 60

function arrayOrFallback<T>(value: T[] | undefined, fallback: T[]): T[] {
  return value && value.length > 0 ? value : fallback
}

function stringOrFallback(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim().length > 0 ? value : fallback
}

function mergeSeo(
  value: Partial<SeoFields> | undefined,
  fallback: SeoFields
): SeoFields {
  return {
    ...fallback,
    ...value,
  }
}

export function resolveSiteSettingsContent(
  value: Partial<SiteSettingsContent> | null | undefined
): SiteSettingsContent {
  if (!value) {
    return DEFAULT_SITE_SETTINGS
  }

  return {
    ...DEFAULT_SITE_SETTINGS,
    ...value,
    nav: arrayOrFallback(value.nav, DEFAULT_SITE_SETTINGS.nav),
    footer: {
      ...DEFAULT_SITE_SETTINGS.footer,
      ...value.footer,
      contact: {
        ...DEFAULT_SITE_SETTINGS.footer.contact,
        ...value.footer?.contact,
      },
      quickLinks: arrayOrFallback(
        value.footer?.quickLinks,
        DEFAULT_SITE_SETTINGS.footer.quickLinks
      ),
      productLinks: arrayOrFallback(
        value.footer?.productLinks,
        DEFAULT_SITE_SETTINGS.footer.productLinks
      ),
      legal: arrayOrFallback(
        value.footer?.legal,
        DEFAULT_SITE_SETTINGS.footer.legal
      ),
    },
    seo: mergeSeo(value.seo, DEFAULT_SITE_SETTINGS.seo),
  }
}

export function resolveHomePageContent(
  value: Partial<HomePageContent> | null | undefined
): HomePageContent {
  if (!value) {
    return DEFAULT_HOME_PAGE
  }

  return {
    ...DEFAULT_HOME_PAGE,
    ...value,
    hero: { ...DEFAULT_HOME_PAGE.hero, ...value.hero },
    whoWeAre: { ...DEFAULT_HOME_PAGE.whoWeAre, ...value.whoWeAre },
    missionVision: {
      mission: {
        ...DEFAULT_HOME_PAGE.missionVision.mission,
        ...value.missionVision?.mission,
      },
      vision: {
        ...DEFAULT_HOME_PAGE.missionVision.vision,
        ...value.missionVision?.vision,
      },
    },
    statStrip: {
      ...DEFAULT_HOME_PAGE.statStrip,
      ...value.statStrip,
      stats: arrayOrFallback(
        value.statStrip?.stats,
        DEFAULT_HOME_PAGE.statStrip.stats
      ),
      sidebar: arrayOrFallback(
        value.statStrip?.sidebar,
        DEFAULT_HOME_PAGE.statStrip.sidebar
      ),
    },
    whyZenvara: {
      ...DEFAULT_HOME_PAGE.whyZenvara,
      ...value.whyZenvara,
      features: arrayOrFallback(
        value.whyZenvara?.features,
        DEFAULT_HOME_PAGE.whyZenvara.features
      ),
    },
    products: {
      ...DEFAULT_HOME_PAGE.products,
      ...value.products,
      cards: arrayOrFallback(
        value.products?.cards,
        DEFAULT_HOME_PAGE.products.cards
      ),
    },
    impact: {
      ...DEFAULT_HOME_PAGE.impact,
      ...value.impact,
      words: arrayOrFallback(
        value.impact?.words,
        DEFAULT_HOME_PAGE.impact.words
      ),
      right: {
        ...DEFAULT_HOME_PAGE.impact.right,
        ...value.impact?.right,
      },
    },
    testimonial: { ...DEFAULT_HOME_PAGE.testimonial, ...value.testimonial },
    sustainability: {
      ...DEFAULT_HOME_PAGE.sustainability,
      ...value.sustainability,
      pillars: arrayOrFallback(
        value.sustainability?.pillars,
        DEFAULT_HOME_PAGE.sustainability.pillars
      ),
    },
    cta: { ...DEFAULT_HOME_PAGE.cta, ...value.cta },
    blog: {
      ...DEFAULT_HOME_PAGE.blog,
      ...value.blog,
      posts: arrayOrFallback(value.blog?.posts, DEFAULT_HOME_PAGE.blog.posts),
    },
    images: {
      ...DEFAULT_HOME_PAGE.images,
      ...value.images,
      heroImage: stringOrFallback(
        value.images?.heroImage,
        DEFAULT_HOME_PAGE.images.heroImage
      ),
      aboutImage: stringOrFallback(
        value.images?.aboutImage,
        DEFAULT_HOME_PAGE.images.aboutImage
      ),
      productBackgrounds: arrayOrFallback(
        value.images?.productBackgrounds?.filter(Boolean),
        DEFAULT_HOME_PAGE.images.productBackgrounds
      ),
      impactImage: stringOrFallback(
        value.images?.impactImage,
        DEFAULT_HOME_PAGE.images.impactImage
      ),
      testimonialImage: stringOrFallback(
        value.images?.testimonialImage,
        DEFAULT_HOME_PAGE.images.testimonialImage
      ),
      sustainabilityImage: stringOrFallback(
        value.images?.sustainabilityImage,
        DEFAULT_HOME_PAGE.images.sustainabilityImage
      ),
    },
    seo: mergeSeo(value.seo, DEFAULT_HOME_PAGE.seo),
  }
}

export function resolveAboutPageContent(
  value: Partial<AboutPageContent> | null | undefined
): AboutPageContent {
  if (!value) {
    return DEFAULT_ABOUT_PAGE
  }

  const members = arrayOrFallback(
    value.team?.members,
    DEFAULT_ABOUT_PAGE.team.members
  ).map((member, index) => {
    const fallbackMember =
      DEFAULT_ABOUT_PAGE.team.members[index] ??
      DEFAULT_ABOUT_PAGE.team.members[0]!

    return {
      ...fallbackMember,
      ...member,
      image: stringOrFallback(member.image, fallbackMember.image),
      socials: arrayOrFallback(member.socials, fallbackMember.socials),
    }
  })

  return {
    ...DEFAULT_ABOUT_PAGE,
    ...value,
    hero: { ...DEFAULT_ABOUT_PAGE.hero, ...value.hero },
    intro: { ...DEFAULT_ABOUT_PAGE.intro, ...value.intro },
    images: {
      ...DEFAULT_ABOUT_PAGE.images,
      ...value.images,
      heroBackground: stringOrFallback(
        value.images?.heroBackground,
        DEFAULT_ABOUT_PAGE.images.heroBackground
      ),
      sideImage: stringOrFallback(
        value.images?.sideImage,
        DEFAULT_ABOUT_PAGE.images.sideImage
      ),
      wideImage: stringOrFallback(
        value.images?.wideImage,
        DEFAULT_ABOUT_PAGE.images.wideImage
      ),
    },
    stats: {
      ...DEFAULT_ABOUT_PAGE.stats,
      ...value.stats,
      stats: arrayOrFallback(
        value.stats?.stats,
        DEFAULT_ABOUT_PAGE.stats.stats
      ),
    },
    team: {
      ...DEFAULT_ABOUT_PAGE.team,
      ...value.team,
      members,
    },
    seo: mergeSeo(value.seo, DEFAULT_ABOUT_PAGE.seo),
  }
}

async function fetchSanity<T>(query: string): Promise<T | null> {
  if (!isSanityConfigured) {
    return null
  }

  try {
    return await sanityClient.fetch<T | null>(
      query,
      {},
      { next: { revalidate } }
    )
  } catch {
    return null
  }
}

export async function getSiteSettings(): Promise<SiteSettingsContent> {
  return resolveSiteSettingsContent(
    await fetchSanity<Partial<SiteSettingsContent>>(siteSettingsQuery)
  )
}

export async function getHomePageContent(): Promise<HomePageContent> {
  return resolveHomePageContent(
    await fetchSanity<Partial<HomePageContent>>(homePageQuery)
  )
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
  return resolveAboutPageContent(
    await fetchSanity<Partial<AboutPageContent>>(aboutPageQuery)
  )
}
