"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa"
import { Reveal } from "@/components/home/reveal"
import { DEFAULT_SITE_SETTINGS } from "@/lib/default-content"
import type { ServiceContent, SiteSettingsContent } from "@/lib/content-types"

const quickHref: Record<string, string> = {
  Home: "/",
  "About Us": "/about",
  Products: "/#products",
  Blog: "/#blog",
  Contact: "/contact",
}

const footerSocialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Zenvara/61589091007090/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zenvaraenergy?igsh=MTk4cXF3bWV1N3N2NQ==",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@zenvaraenergy?si=pOR70Y6e15HzeDvz",
    icon: FaYoutube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zenvara-energy-681140408?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: FaLinkedinIn,
  },
] as const

const handcraftedBy = {
  label: "Invincible Web Solutions",
  href: "https://invinciblewebsolutions.com",
} as const

type SiteFooterProps = {
  siteSettings?: SiteSettingsContent
  services?: Pick<ServiceContent, "slug" | "title">[]
}

export function SiteFooter({
  siteSettings = DEFAULT_SITE_SETTINGS,
  services,
}: SiteFooterProps) {
  const { footer } = siteSettings
  const productLinks = services && services.length > 0
    ? services.map((service) => ({ label: service.title, href: `/service/${service.slug}` }))
    : footer.productLinks.map((label) => ({ label, href: "/#products" }))
  const footerEmail = footer.contact.email || "hello@zenvaraenergy.com"

  return (
    <footer
      id="contact"
      className="bg-[#102a38] pt-16 pb-12 text-white md:pt-20"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="lg:flex lg:flex-wrap lg:justify-around">
          <p className="max-w-lg text-3xl leading-snug font-semibold">
            {footer.newsletter}
          </p>
          <form
            className="flex w-full max-w-xl flex-col gap-2 rounded-3xl sm:rounded-full bg-white p-2 sm:flex-row sm:items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Email ID"
              className="min-h-[50px] flex-1 border-0 bg-transparent px-6 text-[#5a5a5a] placeholder:text-[#5a5a5a] focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="min-h-[50px] rounded-full bg-[var(--zen-accent)] px-8 text-lg font-medium text-[#0b1f2a]"
            >
              Subscribe Now
            </button>
          </form>
        </Reveal>
        <hr className="my-12 border-[#bbbbbb]/20" />
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1.5fr_1.5fr_2fr]">
          <div className="flex flex-col">
            <Image src="/assets/zenvara-logo.svg" alt="Zenvara Energy" width={180} height={40} className="mb-6" />
            <p className="max-w-xs text-base leading-relaxed text-white/90">{footer.blurb}</p>
            <div className="mt-8 flex items-center gap-4">
              {footerSocialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Icon className="h-5 w-5 text-[var(--zen-accent)]" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold">Quick Links</p>
            <ul className="mt-4 space-y-2 text-lg text-[var(--zen-accent)]">
              {footer.quickLinks.map((l) => (
                <li key={l}>
                  <Link href={quickHref[l] ?? "#"} className="hover:underline">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl font-semibold">Our Products</p>
            <ul className="mt-4 space-y-2 text-lg text-[var(--zen-accent)]">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl font-semibold">Contact Information</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/90">
              <Mail className="h-4 w-4 shrink-0 text-[var(--zen-accent)]" aria-hidden />
              {footer.contact.emailLabel}
            </p>
            <a className="text-xl hover:underline" href={`mailto:${footerEmail}`}>
              {footerEmail}
            </a>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/90">
              <MapPin className="h-4 w-4 shrink-0 text-[var(--zen-accent)]" aria-hidden />
              {footer.contact.locationLabel}
            </p>
            <p className="text-xl whitespace-pre-line">
              {footer.contact.address}
            </p>
          </div>
        </div>
        <hr className="my-10 border-[#bbbbbb]/40" />
        <div className="flex flex-col gap-4 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>{footer.copyright}</p>
            <p>
              Handcrafted by{" "}
              <a
                href={handcraftedBy.href}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[var(--zen-accent)] hover:underline"
              >
                {handcraftedBy.label}
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-[15px] font-semibold text-[var(--zen-accent)]">
            {footer.legal.map((l) => (
              <Link key={l} href="#">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}