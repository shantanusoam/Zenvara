import { ServiceHero } from "@/components/service/service-hero"
import { SiteFooter } from "@/components/layout/site-footer"
import { TechnicalSpecs } from "@/components/service/technical-specs"
import { ServiceFaq } from "@/components/service/service-faq"
import { ServiceCta } from "@/components/service/service-cta"
import { ImageTextSection } from "@/components/layout/image-text-section"
import {
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "@/lib/default-content"
import type {
  HomePageContent,
  ServiceContent,
  SiteSettingsContent,
} from "@/lib/content-types"

type ZenvaraServicePageProps = {
  service: ServiceContent
  services?: Pick<ServiceContent, "slug" | "title">[]
  sharedMarketingContent?: HomePageContent
  siteSettings?: SiteSettingsContent
}

export function ZenvaraServicePage({
  service,
  services,
  sharedMarketingContent = DEFAULT_HOME_PAGE,
  siteSettings = DEFAULT_SITE_SETTINGS,
}: ZenvaraServicePageProps) {
  const { hero: homeHero } = sharedMarketingContent
  const introImage = service.intro.image ?? "/assets/about_us.png"

  return (
    <div className="zenvara-page bg-white font-[family-name:var(--font-open-sans)] text-[#0a0a0a] [--zen-accent:#1bddce] [&_h2]:font-[family-name:var(--font-inter)] [&_h3]:font-[family-name:var(--font-inter)]">
      <ServiceHero
        service={service}
        activeNavRoute="Products"
        ctaLabel={homeHero.secondaryCta ?? "Get in Touch"}
        ctaHref="/contact"
        siteSettings={siteSettings}
        services={services}
      />

      <ImageTextSection
        imageSrc={introImage}
        imagePosition="right"
        eyebrow={service.intro.eyebrow}
        title={service.intro.title}
        description={service.intro.description}
      />

      <TechnicalSpecs specs={service.specs} />

      <ServiceFaq faqs={service.faqs} />

      <ServiceCta cta={service.cta} />

      <SiteFooter siteSettings={siteSettings} services={services} />
    </div>
  )
}
