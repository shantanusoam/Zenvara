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
    <div className="flex items-center justify-between gap-3 sm:gap-4">
      <Link href="/" className="relative z-20 shrink-0">
        <Image
          src="/assets/zenvara-logo.svg"
          alt="Zenvara Energy"
          width={180}
          height={48}
          className="h-24 w-auto sm:h-24 md:h-24"
          priority
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
