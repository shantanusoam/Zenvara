import { ServiceHero } from "@/components/service/service-hero"
import { SiteFooter } from "@/components/layout/site-footer"
import PerformanceOutlast from "@/components/common/PerformanceOutlast"
import { TechnicalSpecs } from "@/components/service/technical-specs"
import { ServiceFaq } from "@/components/service/service-faq"
import { ServiceCta } from "@/components/service/service-cta"
import { ImageTextSection } from "@/components/layout/image-text-section"
import { SERVICE_INTRO } from "@/lib/service-content"
import {
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "@/lib/default-content"
import type { HomePageContent, SiteSettingsContent } from "@/lib/content-types"

type ZenvaraServicePageProps = {
  sharedMarketingContent?: HomePageContent
  siteSettings?: SiteSettingsContent
}

export function ZenvaraServicePage({
  sharedMarketingContent = DEFAULT_HOME_PAGE,
  siteSettings = DEFAULT_SITE_SETTINGS,
}: ZenvaraServicePageProps) {
  const { hero: homeHero } = sharedMarketingContent

  return (
    <div className="zenvara-page bg-white font-[family-name:var(--font-open-sans)] text-[#0a0a0a] [--zen-accent:#1bddce] [&_h2]:font-[family-name:var(--font-inter)] [&_h3]:font-[family-name:var(--font-inter)]">
      <ServiceHero
        activeNavRoute="Service"
        ctaLabel={homeHero.secondaryCta}
        ctaHref="/#contact"
        siteSettings={siteSettings}
      />

      <ImageTextSection
        imageSrc="/assets/about_us.png"
        imagePosition="right"
        eyebrow={SERVICE_INTRO.eyebrow}
        title={SERVICE_INTRO.title}
        description={SERVICE_INTRO.description}
      />

      <PerformanceOutlast bgClass="bg-[#efefef]" />
      
      <TechnicalSpecs />
      
      <ServiceFaq />
      
      <ServiceCta />

      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
