import { ZenvaraServicePage } from "@/components/service/zenvara-service-page"
import {
  getHomePageContent,
  getSiteSettings,
} from "@/lib/sanity/content"
import { buildPageMetadata } from "@/lib/seo"

export async function generateMetadata() {
  const siteSettings = await getSiteSettings()

  return buildPageMetadata(
    {
      metaTitle: "Services | Zenvara",
      metaDescription: "Explore Zenvara's advanced energy storage solutions and custom configurations tailored to power your fleet efficiently.",
    },
    siteSettings
  )
}

export default async function ServicePage() {
  const [sharedMarketingContent, siteSettings] = await Promise.all([
    getHomePageContent(),
    getSiteSettings(),
  ])

  return (
    <ZenvaraServicePage
      sharedMarketingContent={sharedMarketingContent}
      siteSettings={siteSettings}
    />
  )
}
