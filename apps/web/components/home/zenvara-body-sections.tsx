"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import {
  PRODUCTS,
  PRODUCT_CARD_BACKGROUNDS,
  WHY_ZENVARA,
  WHO_WE_ARE,
} from "@/lib/home-content"
import { Reveal } from "./reveal"
import { AnimatedCtaButton } from "@/components/layout/animated-cta-button"
import { SectionLayout } from "@/components/layout/section-layout"
import Slider from "react-slick"
import {
  Antenna,
  ArrowRight,
  Bike,
  Boxes,
  CarFront,
  Plug,
  Sun,
  type LucideIcon,
} from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PerformanceOutlast from "../common/PerformanceOutlast"
import MissionVision from "../common/MissionVision"
import { WhyZenvaraFeatureCard } from "./why-zenvara-feature-card"

const aboutImage = "/assets/about_us.png"

/** Lucide icons per product card index (matches PRODUCTS.cards order). */
const PRODUCT_CARD_ICONS = [Bike, CarFront, Plug, Sun, Antenna, Boxes] as const

const featureCardClass: Record<
  (typeof WHY_ZENVARA.features)[number]["variant"],
  string
> = {
  accent: "border border-[var(--zen-accent)] bg-[var(--zen-accent)] text-[#0a0a0a]",
  dark: "bg-[#102a38] text-white",
  light: "border border-[var(--zen-accent)] bg-white text-[#0b1f2a]",
  outline: "border border-[var(--zen-accent)] bg-white/95 text-[#0a0a0a]",
}

const productSliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1600,
  pauseOnHover: true,
  pauseOnFocus: true,
  cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2.2, slidesToScroll: 1 },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: false,
      },
    },
  ],
}

export function ZenvaraBodySections() {
  const reduce = useReducedMotion()

  return (
    <>
      <SectionLayout
        id="about"
        bgClass="bg-[#efefef]"
        containerClass="flex flex-col gap-16 md:gap-24"
      >
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-lg text-[#0a0a0a]">{WHO_WE_ARE.eyebrow}</p>
            <h2 className="mt-2 text-4xl font-semibold text-balance text-[#0a0a0a] md:text-[56px] md:leading-[1.12]">
              {WHO_WE_ARE.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed whitespace-pre-line text-[#0b1f2a]">
              {WHO_WE_ARE.body}
            </p>
            <motion.div className="mt-8">
              <AnimatedCtaButton href="/about">{WHO_WE_ARE.cta}</AnimatedCtaButton>
            </motion.div>
          </Reveal>
          <Reveal className="relative min-h-[280px] md:min-h-[360px]">
            <Image
              src={aboutImage}
              alt=""
              fill
              className="rounded-2xl object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
        </div>
      </SectionLayout>

      <MissionVision />
      <PerformanceOutlast />
      <SectionLayout id="why-zenvara" bgClass="bg-[#efefef]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          <div className="shrink-0 lg:w-56">
            <Reveal>
              <p className="text-lg font-medium text-[#0a0a0a] lg:pt-3">
                {WHY_ZENVARA.eyebrow}
              </p>
            </Reveal>
          </div>
          <div className="max-w-5xl flex-1">
            <Reveal>
              <h2 className="text-4xl font-medium text-balance text-[#0b1f2a] lg:text-[56px] lg:leading-[1.15]">
                Engineered Energy Solutions
                <br className="hidden lg:block" /> for{" "}
                <span className="text-[var(--zen-accent)]">Every Application</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_ZENVARA.features.map((f, i) => (
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
          <div className="flex flex-col gap-4 w-full lg:flex-row lg:justify-between lg:items-start">
            <Reveal>
              <p className="text-lg lg:mr-24 flex-3 font-medium text-[#0b1f2a] lg:pt-2 lg:min-w-[180px] lg:max-w-[220px]">
                {PRODUCTS.eyebrow}
              </p>
            </Reveal>
            <Reveal className="flex-1 text-right">
              <h2 className="text-4xl font-medium text-balance text-left text-[#0b1f2a] lg:text-[56px] lg:leading-[1.15]">
                Powering the Future with{" "}
                <span className="pl-2 text-[var(--zen-accent)]">Renewable Energy</span> <br />
                Solutions
              </h2>
            </Reveal>
          </div>
     
        </div>
        <div className="products-carousel mt-8 pl-5 md:pl-10 lg:pl-20 lg:pr-20 [&_.slick-dots]:bottom-[-28px] [&_.slick-list]:overflow-visible md:[&_.slick-list]:overflow-hidden [&_.slick-slide]:h-auto [&_.slick-track]:flex [&_.slick-track]:items-stretch">
          <Slider {...productSliderSettings}>
            {PRODUCTS.cards.map((c, idx) => {
              const CardIcon = PRODUCT_CARD_ICONS[
                idx % PRODUCT_CARD_ICONS.length
              ] as LucideIcon
              const bg =
                PRODUCT_CARD_BACKGROUNDS[
                  idx % PRODUCT_CARD_BACKGROUNDS.length
                ]!
              return (
                <div key={c.title} className="px-2 md:px-3">
                  <article className="group/product-card relative flex min-h-[360px] w-full flex-col overflow-hidden rounded-[28px]  text-white md:min-h-[398px]">
                    <Image
                      src={bg}
                      alt={c.title}
                      fill
                      className=" transition-transform duration-500 ease-out "
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
                        {c.title}
                      </h3>
                      <p className="mt-3 max-w-prose text-base leading-relaxed font-normal text-white/90 md:text-lg">
                        {c.body}
                      </p>
                      <Link
                        href="/#contact"
                        aria-label={`Learn more about ${c.title}`}
                        className={`mt-4 inline-flex w-fit items-center gap-2 text-lg font-semibold text-[var(--zen-accent)] underline-offset-4 transition-all duration-300 ease-out hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zen-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f2a] ${
                          reduce
                            ? "translate-y-0 opacity-100"
                            : "pointer-events-none translate-y-2 opacity-0 group-hover/product-card:pointer-events-auto group-hover/product-card:translate-y-0 group-hover/product-card:opacity-100 group-focus-within/product-card:pointer-events-auto group-focus-within/product-card:translate-y-0 group-focus-within/product-card:opacity-100"
                        }`}
                      >
                        Learn more
                        <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
                      </Link>
                    </div>
                  </article>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}
