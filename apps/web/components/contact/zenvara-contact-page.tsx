"use client"

import { MarketingCtaStrip } from "@/components/home/marketing-blocks"
import { PageHero } from "@/components/layout/page-hero"
import { SiteFooter } from "@/components/layout/site-footer"
import { MapSection } from "@/components/contact/map-section"
import type { HomePageContent, SiteSettingsContent } from "@/lib/content-types"
import { DEFAULT_HOME_PAGE, DEFAULT_SITE_SETTINGS } from "@/lib/default-content"
import { ContactFormSection } from "./contact-form-section"

type ZenvaraContactPageProps = {
  sharedMarketingContent?: HomePageContent
  siteSettings?: SiteSettingsContent
}

const contactHeroBg = '/assets/contact-us-banner.jpg'

export function ZenvaraContactPage({
  sharedMarketingContent = DEFAULT_HOME_PAGE,
  siteSettings = DEFAULT_SITE_SETTINGS,
}: ZenvaraContactPageProps) {
  const { cta, hero: homeHero } = sharedMarketingContent

  return (
    <div className="zenvara-page bg-white font-[family-name:var(--font-open-sans)] text-[#0a0a0a] [--zen-accent:#1bddce] [&_h2]:font-[family-name:var(--font-inter)] [&_h3]:font-[family-name:var(--font-inter)]">
      <PageHero
        title="Contact Us"
        backgroundImage={contactHeroBg}
        activeNavRoute="Contact"
        ctaLabel={homeHero.secondaryCta}
        ctaHref="/contact"
        siteSettings={siteSettings}
      />

      <div className="w-full ">
        <div className="flex flex-col gap-16 py-16 md:gap-24 md:py-24 max-w-[1440px] mx-auto px-5 md:px-10">
          <MapSection />
        </div>
      </div>
      <div className="w-full bg-[#f4f4f5]">
        <div className="flex flex-col gap-16 py-16 md:gap-24 md:py-24 max-w-[1440px] mx-auto px-5 md:px-10">
          <ContactFormSection />
        </div>
      </div>

      <MarketingCtaStrip cta={cta} />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
