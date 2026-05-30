import { getCliClient } from "sanity/cli"
import {
  DEFAULT_ABOUT_PAGE,
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "../lib/default-content"
import { DEFAULT_SERVICES } from "../lib/services-content"

const client = getCliClient()

type SeedDocument = {
  _id: string
  _type: string
  [key: string]: unknown
}

function cleanDocument(document: SeedDocument): SeedDocument {
  return JSON.parse(JSON.stringify(document)) as SeedDocument
}

const siteSettings: SeedDocument = {
  _id: "siteSettings",
  _type: "siteSettings",
  ...DEFAULT_SITE_SETTINGS,
}

const homeContent: Record<string, unknown> = { ...DEFAULT_HOME_PAGE }
delete homeContent.images

const homePage: SeedDocument = {
  _id: "homePage",
  _type: "homePage",
  ...homeContent,
}

const aboutContent: Record<string, unknown> = { ...DEFAULT_ABOUT_PAGE }
delete aboutContent.images

const aboutPage: SeedDocument = {
  _id: "aboutPage",
  _type: "aboutPage",
  ...aboutContent,
  team: {
    ...DEFAULT_ABOUT_PAGE.team,
    members: DEFAULT_ABOUT_PAGE.team.members.map((member) => ({
      name: member.name,
      role: member.role,
      socials: member.socials,
    })),
  },
}

const services: SeedDocument[] = DEFAULT_SERVICES.map((service) => ({
  _id: `service-${service.slug}`,
  _type: "service",
  title: service.title.replace("\n", " "),
  slug: { _type: "slug", current: service.slug },
  sortOrder: service.sortOrder,
  shortDescription: service.shortDescription,
  hero: {
    eyebrow: service.hero.eyebrow,
    title: service.hero.title,
    description: service.hero.description,
    primaryCta: service.hero.primaryCta,
    secondaryCta: service.hero.secondaryCta,
  },
  intro: {
    eyebrow: service.intro.eyebrow,
    title: service.intro.title,
    description: service.intro.description,
  },
  specs: service.specs,
  faqs: service.faqs,
  cta: service.cta,
  seo: service.seo,
}))

await Promise.all(
  [siteSettings, homePage, aboutPage, ...services].map((document) =>
    client.createOrReplace(cleanDocument(document))
  )
)

console.log("Seeded Zenvara CMS content.")
