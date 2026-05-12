"use client"

import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/layout/site-footer"
import { DEFAULT_HOME_PAGE, DEFAULT_SITE_SETTINGS } from "@/lib/default-content"
import type { HomePageContent, SiteSettingsContent } from "@/lib/content-types"
import {
  MarketingCtaStrip,
  MarketingImpact,
  MarketingTestimonial,
} from "./marketing-blocks"
import { Reveal } from "./reveal"
import { SectionLayout } from "@/components/layout/section-layout"

type ZenvaraLowerSectionsProps = {
  content?: HomePageContent
  siteSettings?: SiteSettingsContent
}

export function ZenvaraLowerSections({
  content = DEFAULT_HOME_PAGE,
  siteSettings = DEFAULT_SITE_SETTINGS,
}: ZenvaraLowerSectionsProps) {
  const { blog, images, sustainability } = content

  return (
    <>
      <MarketingImpact impact={content.impact} image={images.impactImage} />
      <MarketingTestimonial
        testimonial={content.testimonial}
        image={images.testimonialImage}
      />

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src={images.sustainabilityImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/88" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 text-center md:px-10">
          <Reveal>
            <p className="text-lg font-medium text-[var(--zen-accent)]">
              {sustainability.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-balance text-[#0a0a0a] md:text-[56px]">
              {sustainability.title}
            </h2>
            <p className="mt-3 text-lg font-medium text-[var(--zen-accent)]">{SUSTAINABILITY.eyebrow}</p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sustainability.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="flex flex-col items-center rounded-2xl border border-[var(--zen-accent)]/25 bg-white/60 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--zen-accent)]/25 text-[var(--zen-accent)]">
                    ◆
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a]">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-lg leading-relaxed text-[#0a0a0a]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="flex justify-center sm:col-span-2">
              <Image src="/assets/badge.png" alt="Zenvara Badge" width={280} height={280} className="drop-shadow-xl" />
            </div>
          </div>

          {/* Desktop Layout (Radial Positioning) */}
          <div className="relative mt-16 hidden h-[650px] w-full lg:block">
            {/* Center Badge */}
            <div className="absolute left-1/2 top-[55%] z-10 -translate-x-1/2 -translate-y-1/2">
              <Reveal delay={0.3}>
                <Image src="/assets/badge.png" alt="Zenvara Badge" width={380} height={380} className="drop-shadow-2xl" />
              </Reveal>
            </div>

            {/* Future-Ready Systems (Top Center) */}
            <div className="absolute left-1/2 top-0 w-[340px] -translate-x-1/2">
              <Reveal delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  <Image src={SUSTAINABILITY.pillars[1].icon!} alt="" width={80} height={80} className="mb-4" />
                  <h3 className="text-xl font-bold text-[#0a0a0a]">{SUSTAINABILITY.pillars[1].title}</h3>
                  <p className="mt-2 leading-relaxed text-[#0a0a0a]">{SUSTAINABILITY.pillars[1].body}</p>
                </div>
              </Reveal>
            </div>

            {/* Reduced Emissions (Top Left) */}
            <div className="absolute left-[12%] top-[15%] w-[320px]">
              <Reveal delay={0.2}>
                <div className="flex flex-col items-center text-center">
                  <Image src={SUSTAINABILITY.pillars[0].icon!} alt="" width={80} height={80} className="mb-4" />
                  <h3 className="text-xl font-bold text-[#0a0a0a]">{SUSTAINABILITY.pillars[0].title}</h3>
                  <p className="mt-2 leading-relaxed text-[#0a0a0a]">{SUSTAINABILITY.pillars[0].body}</p>
                </div>
              </Reveal>
            </div>

            {/* Responsible Manufacturing (Bottom Left) */}
            <div className="absolute bottom-[5%] left-[5%] w-[320px]">
              <Reveal delay={0.3}>
                <div className="flex flex-col items-center text-center">
                  <Image src={SUSTAINABILITY.pillars[3].icon!} alt="" width={80} height={80} className="mb-4" />
                  <h3 className="text-xl font-bold text-[#0a0a0a]">{SUSTAINABILITY.pillars[3].title}</h3>
                  <p className="mt-2 leading-relaxed text-[#0a0a0a]">{SUSTAINABILITY.pillars[3].body}</p>
                </div>
              </Reveal>
            </div>

            {/* Long Lifecycle (Top Right) */}
            <div className="absolute right-[12%] top-[15%] w-[320px]">
              <Reveal delay={0.4}>
                <div className="flex flex-col items-center text-center">
                  <Image src={SUSTAINABILITY.pillars[2].icon!} alt="" width={80} height={80} className="mb-4" />
                  <h3 className="text-xl font-bold text-[#0a0a0a]">{SUSTAINABILITY.pillars[2].title}</h3>
                  <p className="mt-2 leading-relaxed text-[#0a0a0a]">{SUSTAINABILITY.pillars[2].body}</p>
                </div>
              </Reveal>
            </div>

            {/* Cleaner Energy Storage (Bottom Right) */}
            <div className="absolute bottom-[5%] right-[5%] w-[320px]">
              <Reveal delay={0.5}>
                <div className="flex flex-col items-center text-center">
                  <Image src={SUSTAINABILITY.pillars[4].icon!} alt="" width={80} height={80} className="mb-4" />
                  <h3 className="text-xl font-bold text-[#0a0a0a]">{SUSTAINABILITY.pillars[4].title}</h3>
                  <p className="mt-2 leading-relaxed text-[#0a0a0a]">{SUSTAINABILITY.pillars[4].body}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <MarketingImpact />


      <MarketingCtaStrip cta={content.cta} />

      <section id="blog" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 text-center md:px-10">
          <Reveal>
            <p className="text-lg font-medium text-[var(--zen-accent)]">
              {blog.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-balance text-[#0a0a0a] md:text-[56px] md:leading-tight">
              {blog.title}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blog.posts.map((post) => (
              <Reveal key={post.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-[#0b1f2a] text-left text-white">
                  <div className="aspect-[380/254] bg-[#16394a]" />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-semibold">{post.category}</h3>
                    <p className="mt-2 flex-1 text-lg leading-relaxed">
                      {post.title}
                    </p>
                    <Link
                      href="#"
                      className="mt-4 text-lg text-[var(--zen-accent)]"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionLayout>

      <SiteFooter siteSettings={siteSettings} />
    </>
  )
}
