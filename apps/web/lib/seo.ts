import type { Metadata } from "next"
import type { SeoFields, SiteSettingsContent } from "./content-types"

export function buildPageMetadata(
  seo: SeoFields,
  siteSettings: SiteSettingsContent
): Metadata {
  const title = seo.metaTitle || siteSettings.seo.metaTitle
  const description = seo.metaDescription || siteSettings.seo.metaDescription
  const image = seo.ogImage || siteSettings.seo.ogImage

  return {
    title,
    description,
    alternates: seo.canonicalUrl ? { canonical: seo.canonicalUrl } : undefined,
    openGraph: {
      title,
      description,
      siteName: siteSettings.name,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
    robots: seo.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  }
}
