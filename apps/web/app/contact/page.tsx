import { ZenvaraContactPage } from "@/components/contact/zenvara-contact-page"
import {
  getContactPageContent,
  getHomePageContent,
  getSiteSettings,
} from "@/lib/sanity/content"
import { buildPageMetadata } from "@/lib/seo"

export async function generateMetadata() {
  const [content, siteSettings] = await Promise.all([
    getContactPageContent(),
    getSiteSettings(),
  ])

  return buildPageMetadata(content.seo, siteSettings)
}

export default async function ContactPage() {
  const [content, sharedMarketingContent, siteSettings] = await Promise.all([
    getContactPageContent(),
    getHomePageContent(),
    getSiteSettings(),
  ])

  return (
    <ZenvaraContactPage
      content={content}
      sharedMarketingContent={sharedMarketingContent}
      siteSettings={siteSettings}
    />
  )
}
