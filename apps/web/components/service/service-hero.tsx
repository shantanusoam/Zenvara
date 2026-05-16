"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeaderBar } from "@/components/layout/site-header-bar"
import { EASE_PREMIUM, revealHidden, revealVisible } from "@/lib/motion-presets"
import { SERVICE_HERO } from "@/lib/service-content"
import type { SiteSettingsContent } from "@/lib/content-types"
import { Reveal } from "@/components/home/reveal"

type ServiceHeroProps = {
  activeNavRoute: "Home" | "About Us" | "Products" | "Service" | "Case Studies" | "Contact"
  ctaLabel?: string
  ctaHref?: string
  siteSettings: SiteSettingsContent
}

export function ServiceHero({
  activeNavRoute,
  ctaLabel,
  ctaHref,
  siteSettings,
}: ServiceHeroProps) {
  const reduce = useReducedMotion()

  return (
    <header className="relative min-h-[min(80svh,800px)] bg-[#0a1620] text-white">
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col px-5 pb-16 pt-6 md:px-10">
        <SiteHeaderBar
          active={activeNavRoute}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
          siteSettings={siteSettings}
        />

        <div className="mt-12 flex flex-1 flex-col items-center justify-between gap-12 md:mt-20 lg:flex-row lg:gap-24">
          {/* Left Side: Content */}
          <div className="w-full max-w-xl lg:w-1/2">
            <Reveal>
              <p className="font-semibold text-[var(--zen-accent)]">{SERVICE_HERO.eyebrow}</p>
              <h1 className="mt-4 whitespace-pre-line text-balance text-5xl font-medium leading-tight text-white md:text-[64px] md:leading-[1.15]">
                {SERVICE_HERO.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                {SERVICE_HERO.description}
              </p>
              
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="rounded-full bg-[var(--zen-accent)] px-8 py-3.5 font-medium text-[#0b1f2a] transition-all hover:bg-opacity-90 hover:scale-105"
                >
                  {SERVICE_HERO.primaryCta}
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-full border border-[var(--zen-accent)] bg-transparent px-8 py-3.5 font-medium text-white transition-all hover:bg-[rgba(27,221,206,0.1)]"
                >
                  {SERVICE_HERO.secondaryCta}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Image with Glow */}
          <div className="w-full lg:w-1/2">
            <Reveal delay={0.2} className="relative mx-auto w-full max-w-[640px]">
              {/* Cyan Glow Effect */}
              <div className="absolute -inset-1 rounded-2xl bg-[var(--zen-accent)] opacity-20 blur-2xl filter" />
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[rgba(27,221,206,0.3)] shadow-[0_0_40px_rgba(27,221,206,0.15)]">
                <Image
                  src="/assets/scooter.jpg"
                  alt="2-Wheeler Lithium Batteries"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </header>
  )
}
