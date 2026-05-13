"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { NAV } from "@/lib/home-content"
import { PillButton } from "./pill-button"
import Image from "next/image"

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
        <Image src="/assets/zenvara-logo.svg" alt="Zenvara Energy" width={282} height={110} className="h-auto"  />
      </Link>
      <nav className="hidden items-center gap-8 text-xl lg:flex">
        {NAV.map((item) => (
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
            {item.label !== "Home" && <ChevronDown className="h-5 w-5 opacity-80" />}
          </Link>
        ))}
      </nav>
      <PillButton variant="ghost" href={ctaHref}>
        {ctaLabel}
      </PillButton>
    </div>
  )
}
