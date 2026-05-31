"use client"

import { MeetOurTeamSection } from "@/components/about/meet-our-team-section"
import {
  MarketingCtaStrip,
  MarketingImpact,
  MarketingTestimonial,
} from "@/components/home/marketing-blocks"
import { ImageTextSection } from "@/components/layout/image-text-section"
import { PageHero } from "@/components/layout/page-hero"
import { SiteFooter } from "@/components/layout/site-footer"
import {
  DEFAULT_ABOUT_PAGE,
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "@/lib/default-content"
import type { AboutPageContent, HomePageContent, SiteSettingsContent } from "@/lib/content-types"
import PerformanceOutlast from "../common/PerformanceOutlast"
import MissionVisionAnimated from "../common/MissionVisionAnimated"

type ZenvaraAboutPageProps = {
  content?: AboutPageContent
  sharedMarketingContent?: HomePageContent
  siteSettings?: SiteSettingsContent
}

export function ZenvaraAboutPage({
  content = DEFAULT_ABOUT_PAGE,
  sharedMarketingContent = DEFAULT_HOME_PAGE,
  siteSettings = DEFAULT_SITE_SETTINGS,
}: ZenvaraAboutPageProps) {
  const { hero, images, intro, stats, team } = content
  const {
    cta,
    hero: homeHero,
    images: homeImages,
    impact,
    missionVision,
    founderMessage,
    testimonial,
  } = sharedMarketingContent

  return (
    <div className="zenvara-page bg-white font-[family-name:var(--font-open-sans)] text-[#0a0a0a] [--zen-accent:#1bddce] [&_h2]:font-[family-name:var(--font-inter)] [&_h3]:font-[family-name:var(--font-inter)]">
      <PageHero
        title={hero.title}
        backgroundImage={images.heroBackground}
        activeNavRoute="About Us"
        ctaLabel={homeHero.secondaryCta}
        ctaHref="/contact"
        siteSettings={siteSettings}
      />

      <ImageTextSection
        imageSrc={images.sideImage}
        imagePosition="left"
        eyebrow={intro.eyebrow}
        title={
          <>
            {intro.title}
            <br />
            <span className="text-[var(--zen-accent)]">{intro.title2}</span>
            <span className="text-[#0a0a0a]">{intro.title3}</span>
          </>
        }
        description={intro.body}
        ctaLabel="Our Services"
        ctaHref="/#products"
      />

      <ImageTextSection
        imageSrc={homeImages.founderImage}
        imagePosition="right"
        title={founderMessage.title}
        description={founderMessage.body}
      />

      <PerformanceOutlast
        bgClass="bg-[#efefef]"
        headline={stats.headline}
        stats={stats.stats}
      />

      <MissionVisionAnimated missionVision={missionVision} />

      <MeetOurTeamSection team={team} />

      <MarketingImpact impact={impact} image={homeImages.impactImage} />
      <MarketingCtaStrip cta={cta} />
      <MarketingTestimonial
        testimonial={testimonial}
        image={homeImages.testimonialImage}
        testimonialSlides={sharedMarketingContent.testimonialSlides}
      />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
