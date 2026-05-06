"use client"

import Link from "next/link"
import { FOOTER, SITE } from "@/lib/home-content"
import { Reveal } from "@/components/home/reveal"

const quickHref: Record<string, string> = {
  Home: "/",
  "About Us": "/about",
  Products: "/#products",
  Blog: "/#blog",
  Contact: "/#contact",
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#102a38] pb-12 pt-16 text-white md:pt-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="max-w-lg text-3xl font-semibold leading-snug">{FOOTER.newsletter}</p>
          <form
            className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Email ID"
              className="min-h-[65px] flex-1 rounded-full border-0 bg-white px-6 text-[#5a5a5a] placeholder:text-[#5a5a5a]"
            />
            <button
              type="submit"
              className="min-h-[46px] rounded-full bg-[var(--zen-accent)] px-10 text-xl text-[#0b1f2a]"
            >
              Subscribe Now
            </button>
          </form>
        </Reveal>
        <hr className="my-12 border-[#bbbbbb]/40" />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-white">{SITE.name}</p>
            <p className="mt-4 max-w-xs text-lg leading-relaxed text-white/90">{FOOTER.blurb}</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Quick Links</p>
            <ul className="mt-4 space-y-2 text-lg text-[var(--zen-accent)]">
              {FOOTER.quickLinks.map((l) => (
                <li key={l}>
                  <Link href={quickHref[l] ?? "#"}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl font-semibold">Our Products</p>
            <ul className="mt-4 space-y-2 text-lg text-[var(--zen-accent)]">
              {FOOTER.productLinks.map((l) => (
                <li key={l}>
                  <Link href="/#products">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl font-semibold">Contact Information</p>
            <p className="mt-4 text-sm text-white/90">{FOOTER.contact.emailLabel}</p>
            <p className="text-xl">{FOOTER.contact.email}</p>
            <p className="mt-4 text-sm text-white/90">{FOOTER.contact.locationLabel}</p>
            <p className="whitespace-pre-line text-xl">{FOOTER.contact.address}</p>
          </div>
        </div>
        <hr className="my-10 border-[#bbbbbb]/40" />
        <div className="flex flex-col gap-4 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
          <p>{FOOTER.copyright}</p>
          <div className="flex gap-6 text-[15px] font-semibold text-[var(--zen-accent)]">
            {FOOTER.legal.map((l) => (
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
