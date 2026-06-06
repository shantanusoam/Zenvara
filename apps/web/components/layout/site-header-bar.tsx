"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { AnimatedCtaButton } from "./animated-cta-button"
import { DEFAULT_SITE_SETTINGS } from "@/lib/default-content"
import { DEFAULT_SERVICES } from "@/lib/services-content"
import type { ServiceContent, SiteSettingsContent } from "@/lib/content-types"

type SiteHeaderBarProps = {
  active: string
  ctaLabel: string
  ctaHref: string
  siteSettings?: SiteSettingsContent
  services?: Pick<ServiceContent, "slug" | "title">[]
}

export function SiteHeaderBar({
  active,
  ctaLabel,
  ctaHref,
  siteSettings = DEFAULT_SITE_SETTINGS,
  services = DEFAULT_SERVICES,
}: SiteHeaderBarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-[200] px-5 py-3 text-white transition-all duration-300 md:px-10 ${
          isScrolled
            ? "bg-[#0a1620]/95 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md"
            : "bg-transparent shadow-none"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] min-w-0 items-center justify-between gap-2 sm:gap-4">
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
          <div className="ml-auto flex items-center gap-3 sm:gap-4 lg:gap-8">
            <nav className="hidden items-center justify-end gap-8 text-lg lg:flex xl:text-xl">
              {siteSettings.nav.map((item) => {
                const isActive = item.label === active
                const navClass = `flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? "text-[var(--zen-accent)]"
                    : "text-white/90 hover:text-[var(--zen-accent)]"
                }`

                if (item.label === "Products") {
                  return (
                    <div key={item.label} className="group relative">
                      <Link
                        href="/service"
                        className={navClass}
                        aria-haspopup="menu"
                      >
                        {item.label}
                        <ChevronDown className="h-5 w-5 opacity-80 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                      </Link>
                      <div
                        className="invisible pointer-events-none absolute right-0 top-full z-30 w-72 pt-4 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100"
                        role="menu"
                        aria-label="Products menu"
                      >
                        <div className="translate-y-2 rounded-[24px] border border-white/10 bg-[#0b1f2a]/95 p-2 shadow-[0_24px_64px_rgba(0,0,0,0.35)] backdrop-blur-md transition-transform duration-200 group-hover:translate-y-0 group-focus-within:translate-y-0">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/service/${service.slug}`}
                              className="flex rounded-[18px] px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/8 hover:text-[var(--zen-accent)] focus:bg-white/8 focus:text-[var(--zen-accent)] focus:outline-none"
                              role="menuitem"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <Link key={item.label} href={item.href} className={navClass}>
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <AnimatedCtaButton href={ctaHref} size="compact" className="shrink-0">
              <span className="truncate">{ctaLabel}</span>
            </AnimatedCtaButton>
          </div>
        </div>
      </div>
      <div className="h-[72px] sm:h-[80px] md:h-[88px] lg:h-[104px]" aria-hidden />
    </>
  )
}
