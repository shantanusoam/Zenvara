import { notFound } from "next/navigation"
import { ZenvaraServicePage } from "@/components/service/zenvara-service-page"
import {
  getHomePageContent,
  getServiceBySlug,
  getServiceSlugs,
  getSiteSettings,
} from "@/lib/sanity/content"
import { buildPageMetadata } from "@/lib/seo"

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const [service, siteSettings] = await Promise.all([
    getServiceBySlug(slug),
    getSiteSettings(),
  ])

  if (!service) {
    return { title: "Service not found" }
  }

  return buildPageMetadata(service.seo, siteSettings)
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const [service, siteSettings, homeContent] = await Promise.all([
    getServiceBySlug(slug),
    getSiteSettings(),
    getHomePageContent(),
  ])

  if (!service) {
    notFound()
  }

  return (
    <ZenvaraServicePage
      service={service}
      siteSettings={siteSettings}
      sharedMarketingContent={homeContent}
    />
  )
}
