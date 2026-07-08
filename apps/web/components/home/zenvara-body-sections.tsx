"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import type { HomePageContent, ServiceContent } from "@/lib/content-types"
import { DEFAULT_HOME_PAGE } from "@/lib/default-content"
import { DEFAULT_SERVICES } from "@/lib/services-content"
import { Reveal } from "./reveal"
import { ImageTextSection } from "@/components/layout/image-text-section"
import { AnimatedCtaButton } from "@/components/layout/animated-cta-button"
import { SectionLayout } from "@/components/layout/section-layout"
import Slider from "react-slick"
import {
  Antenna,
  ArrowRight,
  Bike,
  Boxes,
  CarFront,
  ChevronLeft,
  ChevronRight,
  Plug,
  Sun,
  type LucideIcon,
} from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PerformanceOutlast from "../common/PerformanceOutlast"
import MissionVisionAnimated from "../common/MissionVisionAnimated"
import { WhyZenvaraFeatureCard } from "./why-zenvara-feature-card"


type FeatureVariant = HomePageContent["whyZenvara"]["features"][number]["variant"]

/** Lucide icons per product card index (matches default services order). */
const PRODUCT_CARD_ICONS = [Bike, CarFront, Plug, Sun, Antenna, Boxes] as const

const SERVICE_ICON_BY_SLUG: Record<string, LucideIcon> = {
  "2-wheeler": Bike,
  "3-wheeler": CarFront,
  "inverter-ups": Plug,
  solar: Sun,
  "telecom-batteries": Antenna,
  ess: Boxes,
}

type ZenvaraBodySectionsProps = {
  content?: HomePageContent
  services?: ServiceContent[]
}

const featureCardClass: Record<FeatureVariant, string> = {
  accent: "border border-[var(--zen-accent)] bg-[var(--zen-accent)] text-[#0a0a0a]",
  dark: "bg-[#102a38] text-white",
  light: "border border-[var(--zen-accent)] bg-white text-[#0b1f2a]",
  outline: "border border-[var(--zen-accent)] bg-white/95 text-[#0a0a0a]",
}

function slidesToShowForWidth(width: number) {
  if (width >= 1280) return 3.5
  if (width >= 1024) return 3
  if (width >= 768) return 2.2
  return 1
}

const productSliderBase = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1600,
  pauseOnHover: true,
  pauseOnFocus: true,
  cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  centerMode: false,
  variableWidth: false,
} as const

function useProductSliderSettings() {
  const [slidesToShow, setSlidesToShow] = useState(1)

  useEffect(() => {
    const update = () => setSlidesToShow(slidesToShowForWidth(window.innerWidth))
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return useMemo(
    () => ({
      ...productSliderBase,
      slidesToShow,
    }),
    [slidesToShow]
  )
}

export function ZenvaraBodySections({
  content = DEFAULT_HOME_PAGE,
  services = DEFAULT_SERVICES,
}: ZenvaraBodySectionsProps) {
  const reduce = useReducedMotion()
  const productSliderSettings = useProductSliderSettings()
  const productSliderRef = useRef<Slider | null>(null)
  const { founderMessage, missionVision, statStrip, whyZenvara, products, images } =
    content

  return (
    <>
      <SectionLayout
        id="about"
        bgClass="bg-[#efefef]"
        containerClass="flex flex-col gap-16 md:gap-24"
      >
        <ImageTextSection
          imageSrc={images.founderImage}
          imagePosition="right"
          title={founderMessage.title}
          description={founderMessage.body}
          ctaLabel={founderMessage.cta}
          ctaHref="/about"
        />
      </SectionLayout>

      <MissionVisionAnimated missionVision={missionVision} />
      <PerformanceOutlast
        headline={statStrip.headline}
        headline2={statStrip.headline2}
        stats={statStrip.stats}
      />
      <SectionLayout id="why-zenvara" bgClass="bg-[#efefef]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          <div className="shrink-0 lg:w-56">
            <Reveal>
              <p className="text-lg font-medium text-[#0a0a0a] lg:pt-3">
                {whyZenvara.eyebrow}
              </p>
            </Reveal>
          </div>
          <div className="max-w-5xl flex-1">
            <Reveal>
              <h2 className="text-4xl font-medium text-balance text-[#0b1f2a] lg:text-[56px] lg:leading-[1.15]">
                {whyZenvara.title}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyZenvara.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.05}>
                  <WhyZenvaraFeatureCard
                    title={f.title}
                    body={f.body}
                    bodyExpanded={f.bodyExpanded}
                    icon={f.icon}
                    variantClass={featureCardClass[f.variant]}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>

      <section id="products" className="overflow-hidden pt-4 pb-10 md:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
          <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <Reveal className="lg:max-w-[220px]">
              <p className="text-lg lg:mr-24 flex-3 font-medium text-[#0b1f2a] lg:min-w-[180px] lg:max-w-[220px]">
                {products.eyebrow}
              </p>
            </Reveal>
            <Reveal className="flex-1">
              <div className="flex flex-col gap-5 lg:items-end">
                <h2 className="text-left text-4xl font-medium text-balance text-[#0b1f2a] lg:text-[56px] lg:leading-[1.15]">
                  {products.title}
                </h2>
                {services.length > 1 ? (
                  <div className="flex items-center gap-3 self-start lg:self-end">
                    <button
                      type="button"
                      onClick={() => productSliderRef.current?.slickPrev()}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#0b1f2a]/12 bg-white text-[#0b1f2a]/65 shadow-sm transition-colors hover:border-[var(--zen-accent)] hover:text-[var(--zen-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zen-accent)]"
                      aria-label="Previous product"
                    >
                      <ChevronLeft className="h-6 w-6" aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={() => productSliderRef.current?.slickNext()}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#0b1f2a]/12 bg-white text-[#0b1f2a]/65 shadow-sm transition-colors hover:border-[var(--zen-accent)] hover:text-[var(--zen-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zen-accent)]"
                      aria-label="Next product"
                    >
                      <ChevronRight className="h-6 w-6" aria-hidden />
                    </button>
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
        <div className="products-carousel mt-8 pl-5 md:pl-10 lg:pl-20 lg:pr-20 [&_.slick-dots]:bottom-[-28px] [&_.slick-list]:overflow-hidden [&_.slick-slide>div]:h-full [&_.slick-slide]:h-auto [&_.slick-track]:!flex [&_.slick-track]:items-stretch">
          <Slider
            ref={productSliderRef}
            key={productSliderSettings.slidesToShow}
            {...productSliderSettings}
          >
            {services.map((service, idx) => {
              const CardIcon =
                SERVICE_ICON_BY_SLUG[service.slug] ??
                (PRODUCT_CARD_ICONS[idx % PRODUCT_CARD_ICONS.length] as LucideIcon)
              const bg = service.cardImage
              return (
                <div key={service.slug} className="px-2 md:px-3">
                  <Link
                    href={`/service/${service.slug}`}
                    aria-label={`View details for ${service.title}`}
                    className="group/product-card relative flex min-h-[360px] w-full flex-col overflow-hidden rounded-[28px] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zen-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white md:min-h-[398px]"
                  >
                    <Image
                      src={bg}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover/product-card:scale-105"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 32vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_0%,transparent_38%,rgba(8,15,22,0.55)_62%,rgba(6,10,14,0.92)_100%)]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      aria-hidden
                    />
                    <div className="absolute top-2 left-2 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#0b1f2a] shadow-inner ring-1 ring-white/10 md:top-3 md:left-3 md:h-16 md:w-16">
                      <CardIcon
                        className="h-7 w-7 text-[var(--zen-accent)] md:h-8 md:w-8"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    </div>
                    <div className="relative z-10 mt-auto flex flex-col px-6 pt-28 pb-8 md:px-7 md:pb-9">
                      <h3 className="text-2xl font-bold tracking-tight text-white md:text-[26px]">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-prose text-base leading-relaxed font-normal text-white/90 md:text-lg">
                        {service.shortDescription}
                      </p>
                      <span
                        className={`mt-4 inline-flex w-fit items-center gap-2 text-lg font-semibold text-[var(--zen-accent)] underline-offset-4 transition-all duration-300 ease-out group-hover/product-card:underline ${
                          reduce
                            ? "translate-y-0 opacity-100"
                            : "translate-y-0 opacity-100 md:translate-y-2 md:opacity-0 md:group-hover/product-card:translate-y-0 md:group-hover/product-card:opacity-100 md:group-focus-within/product-card:translate-y-0 md:group-focus-within/product-card:opacity-100"
                        }`}
                      >
                        Learn more
                        <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}
