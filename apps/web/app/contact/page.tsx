import { ZenvaraContactPage } from "@/components/contact/zenvara-contact-page"
import { getHomePageContent, getSiteSettings } from "@/lib/sanity/content"
import { buildPageMetadata } from "@/lib/seo"

export async function generateMetadata() {
  const [siteSettings] = await Promise.all([
    getSiteSettings(),
  ])

  // Custom SEO for contact page since there's no specific sanity content for it yet
  return buildPageMetadata(
    {
      metaTitle: "Contact Us | Zenvara",
      metaDescription:
        "Get in touch with Zenvara Energy for inquiries, support, and business opportunities.",
    },
    siteSettings
  )
}

export default async function ContactPage() {
  const [sharedMarketingContent, siteSettings] = await Promise.all([
    getHomePageContent(),
    getSiteSettings(),
  ])

  return (
    <ZenvaraContactPage
      sharedMarketingContent={sharedMarketingContent}
      siteSettings={siteSettings}
    />
  )
}
