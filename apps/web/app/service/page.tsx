import { ServicesIndexPage } from "@/components/service/services-index-page"
import {
  getHomePageContent,
  getServices,
  getSiteSettings,
} from "@/lib/sanity/content"
import { buildPageMetadata } from "@/lib/seo"

export const dynamic = "force-dynamic"

export async function generateMetadata() {
  const siteSettings = await getSiteSettings()

  return buildPageMetadata(
    {
      metaTitle: "Services | Zenvara",
      metaDescription:
        "Explore Zenvara's advanced energy storage solutions and custom configurations tailored to power your fleet efficiently.",
    },
    siteSettings
  )
}

export default async function ServiceIndexPage() {
  const [services, siteSettings, homeContent] = await Promise.all([
    getServices(),
    getSiteSettings(),
    getHomePageContent(),
  ])

  return (
    <ServicesIndexPage
      services={services}
      siteSettings={siteSettings}
      homeContent={homeContent}
    />
  )
}
