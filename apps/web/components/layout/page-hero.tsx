"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { SiteHeaderBar } from "@/components/layout/site-header-bar"
import { EASE_PREMIUM, revealHidden, revealVisible } from "@/lib/motion-presets"
import type { SiteSettingsContent } from "@/lib/content-types"

type PageHeroProps = {
  title: string
  backgroundImage: string
  activeNavRoute: "Home" | "About Us" | "Products" | "Service" | "Case Studies" | "Contact"
  ctaLabel?: string
  ctaHref?: string
  siteSettings: SiteSettingsContent
}

export function PageHero({
  title,
  backgroundImage,
  activeNavRoute,
  ctaLabel,
  ctaHref,
  siteSettings,
}: PageHeroProps) {
  const reduce = useReducedMotion()

  return (
    <header className="relative min-h-[min(55svh,520px)] overflow-hidden bg-[#0a1620] text-white md:min-h-[480px]">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
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
      <div className="relative z-10 mx-auto flex min-h-[min(55svh,520px)] max-w-[1440px] flex-col px-5 pb-16 pt-6 md:min-h-[480px] md:px-10">
        <SiteHeaderBar
          active={activeNavRoute}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
          siteSettings={siteSettings}
        />
        <div className="flex flex-1 flex-col items-center justify-center pb-8 pt-10 text-center md:pt-4">
          <motion.h1
            className="text-balance text-4xl font-medium leading-tight text-white md:text-[56px] md:leading-[1.1]"
            initial={reduce ? false : revealHidden}
            animate={reduce ? false : revealVisible(0.9)}
            transition={{ ease: EASE_PREMIUM }}
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </header>
  )
}
