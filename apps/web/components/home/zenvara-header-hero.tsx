"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { SiteHeaderBar } from "@/components/layout/site-header-bar"
import { PillButton } from "@/components/layout/pill-button"
import { HERO } from "@/lib/home-content"
import { EASE_PREMIUM, revealHidden, revealVisible } from "@/lib/motion-presets"

const heroImage =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"

export function ZenvaraHeaderHero() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/70" />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(27,221,206,0.18),transparent_55%)]"
          aria-hidden
          initial={reduce ? undefined : { opacity: 0.4 }}
          animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,880px)] max-w-[1440px] flex-col px-5 pb-10 pt-6 md:px-10">
        <SiteHeaderBar active="Home" ctaLabel={HERO.secondaryCta} ctaHref="/#contact" />

        <div className="mt-auto flex max-w-2xl flex-col gap-8 pb-16 pt-24 md:pt-32">
          <motion.h1
            className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-[56px] lg:leading-[1.15]"
            initial={reduce ? false : revealHidden}
            animate={reduce ? false : revealVisible(1)}
            transition={{ ease: EASE_PREMIUM }}
          >
            {HERO.headline}
          </motion.h1>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: EASE_PREMIUM }}
          >
            <PillButton href="/#products">{HERO.primaryCta}</PillButton>
          </motion.div>
        </div>

        <p className="absolute bottom-4 left-1/2 hidden max-w-lg -translate-x-1/2 rounded-full bg-[var(--zen-accent)] px-4 py-2 text-center text-sm text-white md:block">
          {HERO.videoNote}
        </p>
      </div>
    </header>
  )
}
