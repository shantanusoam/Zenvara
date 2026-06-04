"use client"

import { MarketingCtaStrip } from "@/components/home/marketing-blocks"
import { PageHero } from "@/components/layout/page-hero"
import { SiteFooter } from "@/components/layout/site-footer"
import type { ContactPageContent, HomePageContent, ServiceContent, SiteSettingsContent } from "@/lib/content-types"
import { DEFAULT_CONTACT_PAGE, DEFAULT_HOME_PAGE, DEFAULT_SITE_SETTINGS } from "@/lib/default-content"
import { ContactFormSection } from "./contact-form-section"
import { MapSection } from "./map-section"

type ZenvaraContactPageProps = {
  content?: ContactPageContent
  sharedMarketingContent?: HomePageContent
  siteSettings?: SiteSettingsContent
  services?: Pick<ServiceContent, "slug" | "title">[]
}

export function ZenvaraContactPage({
  content = DEFAULT_CONTACT_PAGE,
  sharedMarketingContent = DEFAULT_HOME_PAGE,
  siteSettings = DEFAULT_SITE_SETTINGS,
  services,
}: ZenvaraContactPageProps) {
  const { cta, hero: homeHero } = sharedMarketingContent

  return (
    <div className="zenvara-page bg-white font-[family-name:var(--font-open-sans)] text-[#0a0a0a] [--zen-accent:#1bddce] [&_h2]:font-[family-name:var(--font-inter)] [&_h3]:font-[family-name:var(--font-inter)]">
      <PageHero
        title={content.hero.title}
        backgroundImage={content.hero.backgroundImage}
        activeNavRoute="Contact"
        ctaLabel={homeHero.secondaryCta}
        ctaHref="/contact"
        siteSettings={siteSettings}
        services={services}
      />

      <div className="w-full ">
        <div className="flex flex-col gap-16 py-16 md:gap-24 md:py-24 max-w-[1440px] mx-auto px-5 md:px-10">
          <MapSection embedUrl={content.mapEmbedUrl} />
        </div>
      </div>
      <div className="w-full bg-[#f4f4f5]">
        <div className="flex flex-col gap-16 py-16 md:gap-24 md:py-24 max-w-[1440px] mx-auto px-5 md:px-10">
          <ContactFormSection contactInfo={content.contactInfo} form={content.form} />
        </div>
      </div>

      <MarketingCtaStrip cta={cta} />
      <SiteFooter siteSettings={siteSettings} services={services} />
    </div>
  )
}
