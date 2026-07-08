"use client"

import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/layout/site-footer"
import { DEFAULT_HOME_PAGE, DEFAULT_SITE_SETTINGS } from "@/lib/default-content"
import type { HomePageContent, ServiceContent, SiteSettingsContent } from "@/lib/content-types"
import {
  MarketingCtaStrip,
  MarketingImpact,
  MarketingTestimonial,
} from "./marketing-blocks"
import { Reveal } from "./reveal"
import { SUSTAINABILITY_PILLAR_ICONS_FALLBACK } from "@/lib/home-content"

/** Mobile 2×2 grid order (matches design); index 4 is centered below. */
const SUSTAINABILITY_MOBILE_GRID_ORDER = [0, 3, 1, 2] as const

type SustainabilityPillarProps = {
  pillar: HomePageContent["sustainability"]["pillars"][number]
  pillarIndex: number
  delay?: number
  className?: string
}

function SustainabilityPillar({
  pillar,
  pillarIndex,
  delay = 0,
  className,
}: SustainabilityPillarProps) {
  const iconSrc =
    pillar.icon ?? SUSTAINABILITY_PILLAR_ICONS_FALLBACK[pillarIndex] ?? ""

  return (
    <Reveal delay={delay} className={className}>
      <div className="flex flex-col items-center text-center">
        <Image
          src={iconSrc}
          alt=""
          width={80}
          height={80}
          className="mb-3 h-[72px] w-[72px] object-contain lg:mb-4 lg:h-20 lg:w-20"
        />
        <h3 className="text-base font-bold leading-snug text-[#0a0a0a] lg:text-xl">
          {pillar.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#5c5c5c] lg:text-base lg:text-[#0a0a0a]">
          {pillar.body}
        </p>
      </div>
    </Reveal>
  )
}

type ZenvaraLowerSectionsProps = {
  content?: HomePageContent
  siteSettings?: SiteSettingsContent
  services?: Pick<ServiceContent, "slug" | "title">[]
}

export function ZenvaraLowerSections({
  content = DEFAULT_HOME_PAGE,
  siteSettings = DEFAULT_SITE_SETTINGS,
  services,
}: ZenvaraLowerSectionsProps) {
  const { blog, images, sustainability, showTestimonial } = content

  return (
    <>
      {showTestimonial ? (
        <MarketingTestimonial
          testimonial={content.testimonial}
          image={images.testimonialImage}
          testimonialSlides={content.testimonialSlides}
        />
      ) : null}

      <section className="relative overflow-hidden pt-14 pb-4 md:pt-24 md:pb-8 bg-white">
        {/* Extend the video wrapper below the section boundary to crop out its built-in white space */}
        <div className="absolute inset-x-0 top-0 bottom-[-15%] md:bottom-[-25%]">
          <video
            src="/assets/suistanable-energy.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-top opacity-[0.35]"
          />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 pb-6 text-center md:px-10 md:pb-0">
          <Reveal>
            <h2 className="text-4xl font-semibold leading-tight text-balance text-[#0a0a0a] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
              {sustainability.title}
            </h2>
            <p className="mt-2 text-xl font-medium text-[var(--zen-accent)] md:mt-3 md:text-2xl lg:text-3xl">
              {sustainability.eyebrow}
            </p>
          </Reveal>

          {/* <Reveal className="mt-10">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/45 bg-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm">
              <div className="grid items-stretch lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
                <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-[340px]">
                  <Image
                    src={images.sustainabilityImage}
                    alt="Zenvara sustainability"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 52vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a1620]/70 via-[#0a1620]/25 to-transparent" />
                  <div className="absolute bottom-5 left-5 max-w-sm text-left text-white sm:bottom-6 sm:left-6">
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--zen-accent)]">
                      Powered by Zenvara
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-snug sm:text-2xl">
                      Battery systems built for cleaner energy adoption across mobility, backup, and storage.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4 p-6 text-left sm:p-8">
                  <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--zen-accent)]">
                    Cleaner systems
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight text-[#0a0a0a] sm:text-3xl">
                    Built for long life, lower waste, and future-ready performance.
                  </h3>
                  <p className="text-base leading-relaxed text-[#334155] sm:text-lg">
                    {sustainability.pillars.at(4)?.body ??
                      sustainability.pillars.at(1)?.body ??
                      "Efficient lithium storage supports renewable integration and reduces grid dependence."}
                  </p>
                </div>
              </div>
            </div>
          </Reveal> */}

          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:hidden">
            {SUSTAINABILITY_MOBILE_GRID_ORDER.map((pillarIndex, i) => {
              const pillar = sustainability.pillars[pillarIndex]
              if (!pillar) return null
              return (
                <SustainabilityPillar
                  key={pillar.title}
                  pillar={pillar}
                  pillarIndex={pillarIndex}
                  delay={i * 0.06}
                />
              )
            })}
            {sustainability.pillars[4] ? (
              <div className="col-span-2 flex justify-center px-2">
                <SustainabilityPillar
                  pillar={sustainability.pillars[4]}
                  pillarIndex={4}
                  delay={0.28}
                  className="max-w-[300px]"
                />
              </div>
            ) : null}
          </div>

          {/* Desktop: responsive absolute radial layout with center badge */}
          <div className="relative mt-12 xl:mt-16 hidden h-[600px] xl:h-[650px] w-full max-w-[1200px] mx-auto lg:block">
            {/* Center Badge */}
            <div className="absolute left-1/2 top-[52%] xl:top-[55%] z-10 -translate-x-1/2 -translate-y-1/2">
              <Reveal delay={0.3}>
                <Image src="/assets/badge.png" alt="Zenvara Badge" width={380} height={380} className="drop-shadow-2xl w-[260px] xl:w-[380px] h-auto" />
              </Reveal>
            </div>

            {/* Future-Ready Systems (Top Center) */}
            <div className="absolute left-1/2 top-0 w-[280px] xl:w-[340px] -translate-x-1/2">
              <Reveal delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={sustainability.pillars.at(1)?.icon ?? SUSTAINABILITY_PILLAR_ICONS_FALLBACK[1]}
                    alt="" width={80} height={80} className="mb-3 xl:mb-4 h-16 w-16 xl:h-20 xl:w-20 object-contain"
                  />
                  <h3 className="text-lg xl:text-xl font-bold text-[#0a0a0a]">
                    {sustainability.pillars.at(1)?.title ?? ""}
                  </h3>
                  <p className="mt-2 text-sm xl:text-base leading-relaxed text-[#0a0a0a]">
                    {sustainability.pillars.at(1)?.body ?? ""}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Reduced Emissions (Top Left) */}
            <div className="absolute left-0 xl:left-[4%] top-[15%] w-[260px] xl:w-[320px]">
              <Reveal delay={0.2}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={sustainability.pillars.at(0)?.icon ?? SUSTAINABILITY_PILLAR_ICONS_FALLBACK[0]}
                    alt="" width={80} height={80} className="mb-3 xl:mb-4 h-16 w-16 xl:h-20 xl:w-20 object-contain"
                  />
                  <h3 className="text-lg xl:text-xl font-bold text-[#0a0a0a]">
                    {sustainability.pillars.at(0)?.title ?? ""}
                  </h3>
                  <p className="mt-2 text-sm xl:text-base leading-relaxed text-[#0a0a0a]">
                    {sustainability.pillars.at(0)?.body ?? ""}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Long Lifecycle (Top Right) */}
            <div className="absolute right-0 xl:right-[4%] top-[15%] w-[260px] xl:w-[320px]">
              <Reveal delay={0.4}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={sustainability.pillars.at(2)?.icon ?? SUSTAINABILITY_PILLAR_ICONS_FALLBACK[2]}
                    alt="" width={80} height={80} className="mb-3 xl:mb-4 h-16 w-16 xl:h-20 xl:w-20 object-contain"
                  />
                  <h3 className="text-lg xl:text-xl font-bold text-[#0a0a0a]">
                    {sustainability.pillars.at(2)?.title ?? ""}
                  </h3>
                  <p className="mt-2 text-sm xl:text-base leading-relaxed text-[#0a0a0a]">
                    {sustainability.pillars.at(2)?.body ?? ""}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Responsible Manufacturing (Bottom Left) */}
            <div className="absolute bottom-[10%] xl:bottom-[15%] left-0 xl:left-[2%] w-[260px] xl:w-[320px]">
              <Reveal delay={0.3}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={sustainability.pillars.at(3)?.icon ?? SUSTAINABILITY_PILLAR_ICONS_FALLBACK[3]}
                    alt="" width={80} height={80} className="mb-3 xl:mb-4 h-16 w-16 xl:h-20 xl:w-20 object-contain"
                  />
                  <h3 className="text-lg xl:text-xl font-bold text-[#0a0a0a]">
                    {sustainability.pillars.at(3)?.title ?? ""}
                  </h3>
                  <p className="mt-2 text-sm xl:text-base leading-relaxed text-[#0a0a0a]">
                    {sustainability.pillars.at(3)?.body ?? ""}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Cleaner Energy Storage (Bottom Right) */}
            <div className="absolute bottom-[10%] xl:bottom-[15%] right-0 xl:right-[2%] w-[260px] xl:w-[320px]">
              <Reveal delay={0.5}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={sustainability.pillars.at(4)?.icon ?? SUSTAINABILITY_PILLAR_ICONS_FALLBACK[4]}
                    alt="" width={80} height={80} className="mb-3 xl:mb-4 h-16 w-16 xl:h-20 xl:w-20 object-contain"
                  />
                  <h3 className="text-lg xl:text-xl font-bold text-[#0a0a0a]">
                    {sustainability.pillars.at(4)?.title ?? ""}
                  </h3>
                  <p className="mt-2 text-sm xl:text-base leading-relaxed text-[#0a0a0a]">
                    {sustainability.pillars.at(4)?.body ?? ""}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <MarketingImpact impact={content.impact} image={images.impactImage} />
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
                  <div className="relative aspect-[380/254] bg-[#16394a]">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                    ) : null}
                  </div>
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
      </section>

      <SiteFooter siteSettings={siteSettings} services={services} />
    </>
  )
}
