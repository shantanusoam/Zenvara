"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { AnimatedCtaButton } from "./animated-cta-button"
import { DEFAULT_SITE_SETTINGS } from "@/lib/default-content"
import type { SiteSettingsContent } from "@/lib/content-types"

type SiteHeaderBarProps = {
  active: string
  ctaLabel: string
  ctaHref: string
  siteSettings?: SiteSettingsContent
}

export function SiteHeaderBar({
  active,
  ctaLabel,
  ctaHref,
  siteSettings = DEFAULT_SITE_SETTINGS,
}: SiteHeaderBarProps) {
  return (
    <div className="flex min-w-0 items-center justify-between gap-2 sm:gap-4">
      <Link
        href="/"
        className="relative z-20 block max-w-[min(52vw,148px)] shrink-0 sm:max-w-[180px] md:max-w-none"
      >
        <Image
          src="/assets/zenvara-logo.svg"
          alt="Zenvara Energy"
          width={180}
          height={48}
          className="h-12 w-auto sm:h-14 md:h-16 lg:h-20"
          priority
          sizes="(max-width: 640px) 148px, 180px"
        />
      </Link>
      <nav className="hidden items-center gap-8 text-xl lg:flex">
        {siteSettings.nav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-1.5 ${
              item.label === active
                ? "text-[var(--zen-accent)]"
                : "text-white/90 hover:text-[var(--zen-accent)]"
            }`}
          >
            {item.label}
            {item.label !== "Home" && (
              <ChevronDown className="h-5 w-5 opacity-80" />
            )}
          </Link>
        ))}
      </nav>
      <AnimatedCtaButton href={ctaHref} size="compact" className="shrink-0">
        <span className="truncate">{ctaLabel}</span>
      </AnimatedCtaButton>
    </div>
  )
}
