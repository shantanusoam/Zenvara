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
      <header className="relative min-h-[min(55svh,520px)] overflow-hidden bg-[#0a1620] text-white md:min-h-[480px]">
        <div className="absolute inset-0">
          <Image
            src={images.heroBackground}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Radial gradient vignette to keep the center bright but edges dark for contrast */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[min(55svh,520px)] max-w-[1440px] flex-col px-5 pt-6 pb-16 md:min-h-[480px] md:px-10">
          <SiteHeaderBar
            active="About Us"
            ctaLabel={homeHero.secondaryCta}
            ctaHref="/#contact"
            siteSettings={siteSettings}
          />
          <div className="flex flex-1 flex-col items-center justify-center pt-10 pb-8 text-center md:pt-4">
            <motion.h1
              className="text-4xl leading-tight font-medium text-balance text-white md:text-[56px] md:leading-[1.1]"
              initial={reduce ? false : revealHidden}
              animate={reduce ? false : revealVisible(0.9)}
              transition={{ ease: EASE_PREMIUM }}
            >
              {hero.title}
            </motion.h1>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-2 md:items-start md:gap-14 md:px-10 md:py-20">
        <Reveal className="relative h-[280px] w-full md:h-[499px]">
          <Image
            src={images.sideImage}
            alt=""
            fill
            className="rounded-[20px] object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="text-lg font-medium text-[#0a0a0a]">
              {intro.eyebrow}
            </p>
            <h2 className="mt-2 text-4xl font-medium text-balance text-[#0b1f2a] md:text-[56px] md:leading-[1.12]">
              {intro.title}
            </h2>
            <h2 className="mt-2 font-medium text-balance text-[var(--zen-accent)] md:text-[56px] md:leading-[1.12]">
              {ABOUT_INTRO.title2}
              <span className="mt-2 font-medium text-balance text-[#0a0a0a] md:text-[56px] md:leading-[1.12]">
                {ABOUT_INTRO.title3}
              </span>
            </h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-[#0b1f2a]">
              {ABOUT_INTRO.body}
            </p>
            <div className="mt-8">
              <AnimatedCtaButton href="/#products">{intro.cta}</AnimatedCtaButton>
            </div>
          </Reveal>
        </div>
      </section>

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
