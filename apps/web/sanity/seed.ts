import { getCliClient } from "sanity/cli"
import {
  DEFAULT_ABOUT_PAGE,
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "../lib/default-content"

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

await Promise.all(
  [siteSettings, homePage, aboutPage].map((document) =>
    client.createOrReplace(cleanDocument(document))
  )
)

console.log("Seeded Zenvara CMS content.")
