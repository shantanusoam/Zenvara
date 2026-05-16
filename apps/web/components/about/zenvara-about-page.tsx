"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { MeetOurTeamSection } from "@/components/about/meet-our-team-section"
import {
  MarketingCtaStrip,
  MarketingImpact,
  MarketingTestimonial,
} from "@/components/home/marketing-blocks"
import { Reveal } from "@/components/home/reveal"
import { ImageTextSection } from "@/components/layout/image-text-section"
import { PageHero } from "@/components/layout/page-hero"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeaderBar } from "@/components/layout/site-header-bar"
import { AnimatedCtaButton } from "@/components/layout/animated-cta-button"
import {
  ABOUT_HERO,
  ABOUT_INTRO,
  ABOUT_SIDE_IMAGE,
  ABOUT_STATS,
  ABOUT_WIDE_IMAGE,
} from "@/lib/about-content"
import { HERO, MISSION_VISION } from "@/lib/home-content"
import {
  DEFAULT_ABOUT_PAGE,
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "@/lib/default-content"
import type { AboutPageContent, HomePageContent, SiteSettingsContent } from "@/lib/content-types"
import { EASE_PREMIUM, revealHidden, revealVisible, staggerContainer } from "@/lib/motion-presets"

type ZenvaraAboutPageProps = {
  content?: AboutPageContent
  sharedMarketingContent?: HomePageContent
  siteSettings?: SiteSettingsContent
}
import PerformanceOutlast from "../common/PerformanceOutlast"
import MissionVision from "../common/MissionVision"

const aboutHeroBg =
    '/assets/about-us-banner.jpg'

export function ZenvaraAboutPage({
  content = DEFAULT_ABOUT_PAGE,
  sharedMarketingContent = DEFAULT_HOME_PAGE,
  siteSettings = DEFAULT_SITE_SETTINGS,
}: ZenvaraAboutPageProps) {
  const reduce = useReducedMotion()
  const { hero, images, intro, stats, team } = content
  const {
    cta,
    hero: homeHero,
    images: homeImages,
    impact,
    missionVision,
    testimonial,
  } = sharedMarketingContent

  return (
    <div className="zenvara-page bg-white font-[family-name:var(--font-open-sans)] text-[#0a0a0a] [--zen-accent:#1bddce] [&_h2]:font-[family-name:var(--font-inter)] [&_h3]:font-[family-name:var(--font-inter)]">
      <PageHero
        title={hero.title}
        backgroundImage={images.heroBackground}
        activeNavRoute="About Us"
        ctaLabel={homeHero.secondaryCta}
        ctaHref="/#contact"
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
            <span className="text-[var(--zen-accent)]">{ABOUT_INTRO.title2}</span>
            <span className="text-[#0a0a0a]">{ABOUT_INTRO.title3}</span>
          </>
        }
        description={ABOUT_INTRO.body}
        ctaLabel={intro.cta}
        ctaHref="/#products"
      />

      {/* <div className="relative aspect-[1440/630] w-full max-h-[70vh] min-h-[200px]">
        <Image src={ABOUT_WIDE_IMAGE} alt="" fill className="object-cover" sizes="100vw" priority={false} />
      </div> */}

     <PerformanceOutlast bgClass="bg-[#efefef]"/>

     <MissionVision />

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
