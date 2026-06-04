import { ZenvaraAboutPage } from "@/components/about/zenvara-about-page"
import {
  getAboutPageContent,
  getHomePageContent,
  getServices,
  getSiteSettings,
} from "@/lib/sanity/content"
import { buildPageMetadata } from "@/lib/seo"

export const dynamic = "force-dynamic"

export async function generateMetadata() {
  const [content, siteSettings] = await Promise.all([
    getAboutPageContent(),
    getSiteSettings(),
  ])

  return buildPageMetadata(content.seo, siteSettings)
}

export default async function AboutPage() {
  const [content, sharedMarketingContent, siteSettings, services] = await Promise.all([
    getAboutPageContent(),
    getHomePageContent(),
    getSiteSettings(),
    getServices(),
  ])

  return (
    <ZenvaraAboutPage
      content={content}
      sharedMarketingContent={sharedMarketingContent}
      siteSettings={siteSettings}
      services={services}
    />
  )
}
