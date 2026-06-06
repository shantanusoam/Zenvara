"use client"

import Image from "next/image"
import Link from "next/link"
import { SiteHeaderBar } from "@/components/layout/site-header-bar"
import type { ServiceContent, SiteSettingsContent } from "@/lib/content-types"
import { Reveal } from "@/components/home/reveal"

type ServiceHeroProps = {
  service: ServiceContent
  activeNavRoute?: "Home" | "About Us" | "Products" | "Service" | "Case Studies" | "Contact"
  ctaLabel?: string
  ctaHref?: string
  siteSettings: SiteSettingsContent
  services?: Pick<ServiceContent, "slug" | "title">[]
}

export function ServiceHero({
  service,
  activeNavRoute = "Products",
  ctaLabel,
  ctaHref,
  siteSettings,
  services,
}: ServiceHeroProps) {
  const { hero } = service

  return (
    <header className="relative min-h-[min(80svh,800px)] bg-[#0a1620] text-white">
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col px-5 pb-16 pt-6 md:px-10">
        <SiteHeaderBar
          active={activeNavRoute}
          ctaLabel={ctaLabel ?? "Get in Touch"}
          ctaHref={ctaHref ?? "/contact"}
          siteSettings={siteSettings}
          services={services}
        />

        <div className="relative z-10">
          <HeroLayout hero={hero} serviceTitle={service.title} />
        </div>
      </div>
    </header>
  )
}

function HeroLayout({
  hero,
  serviceTitle,
}: {
  hero: ServiceContent["hero"]
  serviceTitle: string
}) {
  return (
    <div className="mt-12 flex flex-1 flex-col items-center justify-between gap-12 md:mt-20 lg:flex-row lg:gap-24">
      <div className="w-full max-w-xl lg:w-1/2">
        <Reveal>
          <p className="font-semibold text-[var(--zen-accent)]">{hero.eyebrow}</p>
          <h1 className="mt-4 whitespace-pre-line text-balance text-5xl font-medium leading-tight text-white md:text-[64px] md:leading-[1.15]">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--zen-accent)] px-8 py-3.5 font-medium text-[#0b1f2a] transition-all hover:scale-105 hover:bg-opacity-90"
            >
              {hero.primaryCta}
            </Link>
            {hero.secondaryCta && (
              <Link
                href="/contact"
                className="rounded-full border border-[var(--zen-accent)] bg-transparent px-8 py-3.5 font-medium text-white transition-all hover:bg-[rgba(27,221,206,0.1)]"
              >
                {hero.secondaryCta}
              </Link>
            )}
          </div>
        </Reveal>
      </div>

      <div className="w-full lg:w-1/2">
        <Reveal delay={0.2} className="relative mx-auto w-full max-w-[640px]">
          <div className="absolute -inset-1 rounded-2xl bg-[var(--zen-accent)] opacity-20 blur-2xl filter" />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[rgba(27,221,206,0.3)] shadow-[0_0_40px_rgba(27,221,206,0.15)]">
            <Image
              src={hero.image}
              alt={serviceTitle}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </div>
  )
}
