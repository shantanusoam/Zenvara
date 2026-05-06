"use client"

import Link from "next/link"
import { NAV, SITE } from "@/lib/home-content"
import { PillButton } from "./pill-button"

export type SiteNavActive = (typeof NAV)[number]["label"]

type SiteHeaderBarProps = {
  active: SiteNavActive
  ctaLabel: string
  ctaHref: string
}

export function SiteHeaderBar({ active, ctaLabel, ctaHref }: SiteHeaderBarProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Link href="/" className="font-semibold tracking-tight text-white">
        <span className="text-xl md:text-2xl">{SITE.name}</span>
      </Link>
      <nav className="hidden items-center gap-8 text-xl lg:flex">
        {NAV.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={
              item.label === active
                ? "text-[var(--zen-accent)]"
                : "text-white/90 hover:text-[var(--zen-accent)]"
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <PillButton variant="ghost" href={ctaHref}>
        {ctaLabel}
      </PillButton>
    </div>
  )
}
