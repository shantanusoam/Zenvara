"use client"

import Image from "next/image"
import Link from "next/link"
import { BLOG, SUSTAINABILITY } from "@/lib/home-content"
import { SiteFooter } from "@/components/layout/site-footer"
import { MarketingCtaStrip, MarketingImpact, MarketingTestimonial } from "./marketing-blocks"
import { Reveal } from "./reveal"

const sustainabilityBg =
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80"

export function ZenvaraLowerSections() {
  return (
    <>
      <MarketingImpact />
      <MarketingTestimonial />

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0">
          <Image src={sustainabilityBg} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-white/88" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 text-center md:px-10">
          <Reveal>
            <p className="text-lg font-medium text-[var(--zen-accent)]">{SUSTAINABILITY.eyebrow}</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold text-[#0a0a0a] md:text-[56px]">
              {SUSTAINABILITY.title}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SUSTAINABILITY.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="flex flex-col items-center rounded-2xl border border-[var(--zen-accent)]/25 bg-white/60 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--zen-accent)]/25 text-[var(--zen-accent)]">
                    ◆
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a]">{p.title}</h3>
                  <p className="mt-3 max-w-xs text-lg leading-relaxed text-[#0a0a0a]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MarketingCtaStrip />

      <section id="blog" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 text-center md:px-10">
          <Reveal>
            <p className="text-lg font-medium text-[var(--zen-accent)]">{BLOG.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-[#0a0a0a] md:text-[56px] md:leading-tight">
              {BLOG.title}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BLOG.posts.map((post) => (
              <Reveal key={post.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-[#0b1f2a] text-left text-white">
                  <div className="aspect-[380/254] bg-[#16394a]" />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-semibold">{post.category}</h3>
                    <p className="mt-2 flex-1 text-lg leading-relaxed">{post.title}</p>
                    <Link href="#" className="mt-4 text-lg text-[var(--zen-accent)]">
                      Read More
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
