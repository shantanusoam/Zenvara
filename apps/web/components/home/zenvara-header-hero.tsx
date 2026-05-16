"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { SiteHeaderBar } from "@/components/layout/site-header-bar"
import { AnimatedCtaButton } from "@/components/layout/animated-cta-button"
import { DEFAULT_HOME_PAGE, DEFAULT_SITE_SETTINGS } from "@/lib/default-content"
import type { HomePageContent, SiteSettingsContent } from "@/lib/content-types"
import { EASE_PREMIUM, revealHidden, revealVisible } from "@/lib/motion-presets"

type ZenvaraHeaderHeroProps = {
  hero?: HomePageContent["hero"]
  heroImage?: string
  siteSettings?: SiteSettingsContent
}

export function ZenvaraHeaderHero({
  hero = DEFAULT_HOME_PAGE.hero,
  heroImage = DEFAULT_HOME_PAGE.images.heroImage,
  siteSettings = DEFAULT_SITE_SETTINGS,
}: ZenvaraHeaderHeroProps) {
  const reduce = useReducedMotion()

  return (
    <header className="relative min-h-[min(100svh,880px)] overflow-hidden bg-[#0a1620] text-white">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Slight gradient only at the very top to ensure navbar text remains readable against any image */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,880px)] max-w-[1440px] flex-col px-5 pt-6 pb-10 md:px-10">
        <SiteHeaderBar
          active="Home"
          ctaLabel={hero.secondaryCta}
          ctaHref="/#contact"
          siteSettings={siteSettings}
        />

        <div className="mt-auto flex max-w-2xl flex-col gap-8 pt-24 pb-16 md:pt-32">
          <motion.h1
            className="text-4xl leading-tight font-semibold tracking-tight text-balance md:text-5xl lg:text-[56px] lg:leading-[1.15]"
            initial={reduce ? false : revealHidden}
            animate={reduce ? false : revealVisible(1)}
            transition={{ ease: EASE_PREMIUM }}
          >
            {hero.headline}
          </motion.h1>
          <AnimatedCtaButton href="/#products" revealDelay={0.2}>
            {hero.primaryCta}
          </AnimatedCtaButton>
        </div>

        <p className="absolute bottom-4 left-1/2 hidden max-w-lg -translate-x-1/2 rounded-full bg-[var(--zen-accent)] px-4 py-2 text-center text-sm text-white md:block">
          {hero.videoNote}
        </p>
      </div>
    </header>
  )
}
