import {
  DEFAULT_ABOUT_PAGE,
  DEFAULT_CONTACT_PAGE,
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "@/lib/default-content"
import type {
  AboutPageContent,
  ContactPageContent,
  HomePageContent,
  SeoFields,
  ServiceContent,
  SiteSettingsContent,
} from "@/lib/content-types"
import {
  DEFAULT_SERVICES,
  getDefaultServiceBySlug,
} from "@/lib/services-content"
import { sanityClient } from "./client"
import { isSanityConfigured } from "./env"
import {
  aboutPageQuery,
  contactPageQuery,
  homePageQuery,
  serviceBySlugQuery,
  servicesQuery,
  siteSettingsQuery,
} from "./queries"

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
      panels: arrayOrFallback(
        value.impact?.panels,
        DEFAULT_HOME_PAGE.impact.panels ?? []
      ).map((panel, index) => {
        const fallback =
          DEFAULT_HOME_PAGE.impact.panels?.[index] ??
          DEFAULT_HOME_PAGE.impact.panels?.[0]!
        return {
          ...fallback,
          ...panel,
          image: stringOrFallback(panel.image, fallback.image),
        }
      }),
      right: {
        ...DEFAULT_HOME_PAGE.impact.right,
        ...value.impact?.right,
      },
    },
    showTestimonial: value.showTestimonial === true,
    testimonial: { ...DEFAULT_HOME_PAGE.testimonial, ...value.testimonial },
    testimonialSlides: arrayOrFallback(
      value.testimonialSlides,
      DEFAULT_HOME_PAGE.testimonialSlides
    ),
    sustainability: {
      ...DEFAULT_HOME_PAGE.sustainability,
      ...value.sustainability,
      pillars: arrayOrFallback(
        value.sustainability?.pillars,
        DEFAULT_HOME_PAGE.sustainability.pillars
      ).map((pillar, index) => {
        const fallback = DEFAULT_HOME_PAGE.sustainability.pillars[index]!
        return {
          ...fallback,
          ...pillar,
          icon: stringOrFallback(pillar.icon, fallback.icon),
        }
      }),
    },
    cta: { ...DEFAULT_HOME_PAGE.cta, ...value.cta },
    blog: {
      ...DEFAULT_HOME_PAGE.blog,
      ...value.blog,
      posts: arrayOrFallback(value.blog?.posts, DEFAULT_HOME_PAGE.blog.posts).map(
        (post, index) => {
          const fallback = DEFAULT_HOME_PAGE.blog.posts[index]!
          return {
            ...fallback,
            ...post,
            image: stringOrFallback(post.image, fallback.image),
          }
        }
      ),
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
  value: Partial<AboutPageContent> & {
    hero?: Partial<AboutPageContent["hero"]> & { backgroundImage?: string }
    intro?: Partial<AboutPageContent["intro"]> & { sideImage?: string }
    wideImage?: string
  } | null | undefined
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
        value.images?.heroBackground ?? value.hero?.backgroundImage,
        DEFAULT_ABOUT_PAGE.images.heroBackground
      ),
      sideImage: stringOrFallback(
        value.images?.sideImage ?? value.intro?.sideImage,
        DEFAULT_ABOUT_PAGE.images.sideImage
      ),
      wideImage: stringOrFallback(
        value.images?.wideImage ?? value.wideImage,
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

export function resolveContactPageContent(
  value: Partial<ContactPageContent> & {
    hero?: Partial<ContactPageContent["hero"]> & { backgroundImage?: string }
  } | null | undefined
): ContactPageContent {
  if (!value) {
    return DEFAULT_CONTACT_PAGE
  }

  return {
    ...DEFAULT_CONTACT_PAGE,
    ...value,
    hero: {
      ...DEFAULT_CONTACT_PAGE.hero,
      ...value.hero,
      backgroundImage: stringOrFallback(
        value.hero?.backgroundImage,
        DEFAULT_CONTACT_PAGE.hero.backgroundImage
      ),
    },
    contactInfo: {
      ...DEFAULT_CONTACT_PAGE.contactInfo,
      ...value.contactInfo,
    },
    form: {
      ...DEFAULT_CONTACT_PAGE.form,
      ...value.form,
    },
    mapEmbedUrl: stringOrFallback(
      value.mapEmbedUrl,
      DEFAULT_CONTACT_PAGE.mapEmbedUrl
    ),
    seo: mergeSeo(value.seo, DEFAULT_CONTACT_PAGE.seo),
  }
}

async function fetchSanity<T>(
  query: string,
  params: Record<string, string> = {}
): Promise<T | null> {
  if (!isSanityConfigured) {
    return null
  }

  try {
    return await sanityClient.fetch<T | null>(query, params, {
      next: { revalidate },
    })
  } catch {
    return null
  }
}

export function resolveServiceContent(
  value: Partial<ServiceContent> | null | undefined,
  fallback: ServiceContent
): ServiceContent {
  if (!value?.slug) {
    return fallback
  }

  return {
    ...fallback,
    ...value,
    slug: value.slug,
    hero: {
      ...fallback.hero,
      ...value.hero,
      image: stringOrFallback(value.hero?.image, fallback.hero.image),
    },
    intro: {
      ...fallback.intro,
      ...value.intro,
      image: stringOrFallback(
        value.intro?.image,
        fallback.intro.image ?? "/assets/about_us.png"
      ),
    },
    specs: {
      ...fallback.specs,
      ...value.specs,
      specs: arrayOrFallback(value.specs?.specs, fallback.specs.specs),
    },
    faqs: {
      ...fallback.faqs,
      ...value.faqs,
      faqs: arrayOrFallback(value.faqs?.faqs, fallback.faqs.faqs),
    },
    cta: { ...fallback.cta, ...value.cta },
    cardImage: stringOrFallback(value.cardImage, fallback.cardImage),
    shortDescription: stringOrFallback(
      value.shortDescription,
      fallback.shortDescription
    ),
    title: stringOrFallback(value.title, fallback.title),
    sortOrder:
      typeof value.sortOrder === "number" ? value.sortOrder : fallback.sortOrder,
    seo: mergeSeo(value.seo, fallback.seo),
  }
}

function resolveServicesList(
  value: Partial<ServiceContent>[] | null | undefined
): ServiceContent[] {
  if (!value || value.length === 0) {
    return DEFAULT_SERVICES
  }

  return value
    .map((item, index) => {
      const fallback =
        getDefaultServiceBySlug(item.slug ?? "") ??
        DEFAULT_SERVICES[index] ??
        DEFAULT_SERVICES[0]!
      return resolveServiceContent(item, fallback)
    })
    .sort((a, b) => a.sortOrder - b.sortOrder)
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
    await fetchSanity<
      Partial<AboutPageContent> & {
        hero?: { backgroundImage?: string }
        intro?: { sideImage?: string }
        wideImage?: string
      }
    >(aboutPageQuery)
  )
}

export async function getContactPageContent(): Promise<ContactPageContent> {
  return resolveContactPageContent(
    await fetchSanity<Partial<ContactPageContent>>(contactPageQuery)
  )
}

export async function getServices(): Promise<ServiceContent[]> {
  return resolveServicesList(
    await fetchSanity<Partial<ServiceContent>[]>(servicesQuery)
  )
}

export async function getServiceBySlug(slug: string): Promise<ServiceContent | null> {
  const fallback = getDefaultServiceBySlug(slug)
  if (!fallback) {
    return null
  }

  const fromCms = await fetchSanity<Partial<ServiceContent>>(serviceBySlugQuery, {
    slug,
  })

  if (!fromCms) {
    return fallback
  }

  return resolveServiceContent(fromCms, fallback)
}

export async function getServiceSlugs(): Promise<string[]> {
  const services = await getServices()
  return services.map((s) => s.slug)
}
