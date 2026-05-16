import { ZenvaraHome } from "@/components/home/zenvara-home"
import { getHomePageContent, getSiteSettings } from "@/lib/sanity/content"
import { buildPageMetadata } from "@/lib/seo"

export async function generateMetadata() {
  const [content, siteSettings] = await Promise.all([
    getHomePageContent(),
    getSiteSettings(),
  ])

  return buildPageMetadata(content.seo, siteSettings)
}

export default async function Page() {
  const [content, siteSettings] = await Promise.all([
    getHomePageContent(),
    getSiteSettings(),
  ])

  return <ZenvaraHome content={content} siteSettings={siteSettings} />
}
