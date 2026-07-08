"use client"

import { motion, useReducedMotion } from "motion/react"
import { SiteHeaderBar } from "@/components/layout/site-header-bar"
import { AnimatedCtaButton } from "@/components/layout/animated-cta-button"
import { DEFAULT_HOME_PAGE, DEFAULT_SITE_SETTINGS } from "@/lib/default-content"
import type { HomePageContent, ServiceContent, SiteSettingsContent } from "@/lib/content-types"
import { EASE_PREMIUM, revealHidden, revealVisible } from "@/lib/motion-presets"

type ZenvaraHeaderHeroProps = {
  hero?: HomePageContent["hero"]
  heroImage?: string
  siteSettings?: SiteSettingsContent
  services?: Pick<ServiceContent, "slug" | "title">[]
}

export function ZenvaraHeaderHero({
  hero = DEFAULT_HOME_PAGE.hero,
  heroImage = DEFAULT_HOME_PAGE.images.heroImage,
  siteSettings = DEFAULT_SITE_SETTINGS,
  services,
}: ZenvaraHeaderHeroProps) {
  const reduce = useReducedMotion()
  const tagline = hero.tagline || siteSettings.tagline
  const showTagline =
    tagline.trim().length > 0 &&
    tagline !== hero.headline &&
    tagline !== hero.headline2

  return (
    <header className="relative min-h-[min(100svh,880px)] overflow-hidden bg-[#0a1620] text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover md:hidden"
          autoPlay={reduce !== true}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/assets/video/Zenvara_mobile.mp4" type="video/mp4" />
        </video>
        <video
          className="hidden h-full w-full object-cover md:block"
          autoPlay={reduce !== true}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/assets/video/Zenvara_desktop.mp4" type="video/mp4" />
        </video>
        {/* Slight gradient only at the very top to ensure navbar text remains readable against any image */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      <div className="relative flex min-h-[min(100svh,880px)] w-full flex-col px-5 pt-6 pb-10 md:px-10 lg:px-16 xl:px-20">
        <SiteHeaderBar
          active="Home"
          ctaLabel={hero.secondaryCta}
          ctaHref="/contact"
          siteSettings={siteSettings}
          services={services}
        />

        <div className="relative z-10 mt-auto flex w-full max-w-2xl flex-col gap-8 pt-24 pb-16 md:max-w-3xl md:pt-32 lg:max-w-4xl">
          {showTagline ? (
            <motion.p
              className="text-base font-semibold uppercase tracking-[0.16em] text-[var(--zen-accent)] md:text-lg"
              initial={reduce ? false : revealHidden}
              animate={reduce ? false : revealVisible(0.85)}
              transition={{ ease: EASE_PREMIUM }}
            >
              {tagline}
            </motion.p>
          ) : null}
          <motion.h1
            className="text-4xl leading-tight font-semibold tracking-tight text-balance md:text-5xl lg:text-[56px] lg:leading-[1.15]"
            initial={reduce ? false : revealHidden}
            animate={reduce ? false : revealVisible(1)}
            transition={{ ease: EASE_PREMIUM }}
          >
            <span className="block">{hero.headline}</span>
            {hero.headline2 ? (
              <span className="mt-1 block text-[var(--zen-accent)]">{hero.headline2}</span>
            ) : null}
          </motion.h1>
          <AnimatedCtaButton href="/#products" revealDelay={0.2}>
            {hero.primaryCta}
          </AnimatedCtaButton>
        </div>

        {/* <p className="absolute bottom-4 left-1/2 hidden max-w-lg -translate-x-1/2 rounded-full bg-[var(--zen-accent)] px-4 py-2 text-center text-sm text-white md:block">
          {hero.videoNote}
        </p> */}
      </div>
    </header>
  )
}
