"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6"
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
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-md text-3xl font-semibold leading-snug lg:text-[40px] lg:leading-tight">{FOOTER.newsletter}</p>
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
            <Image src="/assets/badge.png" alt="Zenvara Energy" width={180} height={40} className="mb-6" />
            <p className="max-w-xs text-base leading-relaxed text-white/90">{FOOTER.blurb}</p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <FaInstagram className="h-5 w-5 text-[var(--zen-accent)]" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <FaFacebookF className="h-5 w-5 text-[var(--zen-accent)]" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <FaXTwitter className="h-5 w-5 text-[var(--zen-accent)]" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <FaLinkedinIn className="h-5 w-5 text-[var(--zen-accent)]" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <FaYoutube className="h-5 w-5 text-[var(--zen-accent)]" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold">Quick Links</p>
            <ul className="mt-6 space-y-3 text-base text-[var(--zen-accent)]">
              {FOOTER.quickLinks.map((l) => (
                <li key={l}>
                  <Link href={quickHref[l] ?? "#"} className="hover:underline">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl font-semibold">Our Products</p>
            <ul className="mt-6 space-y-3 text-base text-[var(--zen-accent)]">
              {FOOTER.productLinks.map((l) => (
                <li key={l}>
                  <Link href="/#products" className="hover:underline">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl font-semibold">Contact Information</p>
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Mail className="h-5 w-5 text-[var(--zen-accent)]" />
              </div>
              <div>
                <p className="text-sm text-white/90">{FOOTER.contact.emailLabel}</p>
                <p className="mt-1 text-lg">{FOOTER.contact.email}</p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin className="h-5 w-5 text-[var(--zen-accent)]" />
              </div>
              <div>
                <p className="text-sm text-white/90">{FOOTER.contact.locationLabel}</p>
                <p className="mt-1 whitespace-pre-line text-lg">{FOOTER.contact.address}</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-10 border-[#bbbbbb]/20" />
        <div className="flex flex-col gap-4 text-[13px] text-white/80 md:flex-row md:items-center md:justify-between">
          <p>{FOOTER.copyright}</p>
          <div className="flex gap-6 font-semibold text-[var(--zen-accent)]">
            {FOOTER.legal.map((l) => (
              <Link key={l} href="#" className="hover:underline">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
