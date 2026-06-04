import { ZenvaraHome } from "@/components/home/zenvara-home"
import {
  getHomePageContent,
  getServices,
  getSiteSettings,
} from "@/lib/sanity/content"
import { buildPageMetadata } from "@/lib/seo"

export const dynamic = "force-dynamic"

export async function generateMetadata() {
  const [content, siteSettings] = await Promise.all([
    getHomePageContent(),
    getSiteSettings(),
  ])

  return buildPageMetadata(content.seo, siteSettings)
}

export default async function Page() {
  const [content, siteSettings, services] = await Promise.all([
    getHomePageContent(),
    getSiteSettings(),
    getServices(),
  ])

  return (
    <ZenvaraHome
      content={content}
      siteSettings={siteSettings}
      services={services}
    />
  )
}
