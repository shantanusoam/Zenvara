"use client"

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DEFAULT_HOME_PAGE } from "@/lib/default-content"
import type { HomePageContent } from "@/lib/content-types"
import { EASE_PREMIUM } from "@/lib/motion-presets"
import { Reveal } from "./reveal"
import { AnimatedCtaButton } from "@/components/layout/animated-cta-button"

function impactPanels(impact: HomePageContent["impact"]) {
  if (impact.panels?.length) return impact.panels
  return impact.words.map((word, i) => ({
    title: i === 0 ? impact.right.title : word,
    body: i === 0 ? impact.right.body : impact.right.body,
    image: DEFAULT_HOME_PAGE.images.impactImage,
  }))
}

type MarketingImpactProps = {
  impact?: HomePageContent["impact"]
  image?: string
}

export function MarketingImpact({
  impact = DEFAULT_HOME_PAGE.impact,
  image = DEFAULT_HOME_PAGE.images.impactImage,
}: MarketingImpactProps) {
  const [activeImpact, setActiveImpact] = useState(0)
  const reduce = useReducedMotion()
  const panels = impactPanels(impact)
  const active = panels[activeImpact] ?? panels[0]!

  return (
    <section className="relative overflow-hidden bg-[#0b1f2a] py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_minmax(350px,450px)] md:px-10 lg:gap-16">
        <Reveal>
          <p className="text-lg font-medium text-[var(--zen-accent)]">
            {impact.eyebrow}
          </p>
        </Reveal>

        <div className="flex flex-col">
          <Reveal>
            <h2 className="max-w-md text-3xl leading-tight font-semibold md:text-[32px] lg:text-[40px]">
              {impact.leftTitle}
            </h2>
          </Reveal>

          <Reveal className="mt-16 lg:mt-32">
            <ul className="space-y-4">
              {impact.words.map((w, i) => (
                <li key={w} className="border-b  border-white/20 pb-4">
                  <button
                    type="button"
                    onClick={() => setActiveImpact(i)}
                    className={`text-left cursor-pointer text-4xl font-semibold transition-colors md:text-[56px] md:leading-tight ${
                      activeImpact === i
                        ? "text-[var(--zen-accent)]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {w}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="flex flex-col">
          <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-2xl lg:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.image ?? image}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                animate={reduce ? false : { opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE_PREMIUM }}
              >
                <Image
                  src={active.image ?? image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              className="pt-8"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            >
              <h3 className="text-2xl font-semibold text-white">{active.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-white/80">
                {active.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}

type MarketingTestimonialProps = {
  testimonial?: HomePageContent["testimonial"]
  image?: string
  testimonialSlides?: HomePageContent["testimonialSlides"]
}

const QUOTE_MARK_SRC = "/assets/home%20page/Quotationmark.svg"

type TestimonialSlideResolved = {
  quote: string
  name: string
  role: string
  avatar: string
}

function resolveTestimonialSlides(
  testimonial: HomePageContent["testimonial"],
  slides?: HomePageContent["testimonialSlides"]
): TestimonialSlideResolved[] {
  if (slides?.length) {
    return slides.map((s) => ({
      quote: s.quote,
      name: s.name,
      role: s.role,
      avatar: s.avatar ?? "/assets/expert1.jpg",
    }))
  }
  return [
    {
      quote: testimonial.quote,
      name: testimonial.name,
      role: testimonial.role,
      avatar: "/assets/expert1.jpg",
    },
  ]
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: "0%", opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
}

export function MarketingTestimonial({
  testimonial = DEFAULT_HOME_PAGE.testimonial,
  image = DEFAULT_HOME_PAGE.images.testimonialImage,
  testimonialSlides = DEFAULT_HOME_PAGE.testimonialSlides,
}: MarketingTestimonialProps) {
  const reduce = useReducedMotion()
  const slides = resolveTestimonialSlides(testimonial, testimonialSlides)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback(
    (delta: number) => {
      const n = slides.length
      if (n < 2) return
      setDirection(delta > 0 ? 1 : -1)
      setIndex((i) => (i + delta + n) % n)
    },
    [slides.length]
  )

  useEffect(() => {
    if (reduce || slides.length < 2) return
    const id = window.setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(id)
  }, [reduce, slides.length])

  const active = slides[index]!

  return (
    <section className="bg-[#efefef] py-16 md:py-0">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2 md:items-stretch md:gap-0">
        {/* Copy column */}
        <div className="relative order-2 flex flex-col justify-between px-5 py-12 md:order-1 md:px-10 md:py-16 lg:pr-12">
          <div>
            <p className="text-lg font-medium text-[var(--zen-accent)]">
              {testimonial.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-balance text-[#0a0a0a] md:text-[56px] md:leading-tight">
              {testimonial.title}
            </h2>
            <p className="mt-2 text-amber-500" aria-hidden>
              ★★★★★
            </p>
          </div>

          <div className="relative mt-8 min-h-[18rem] flex-1 overflow-hidden pr-12 md:min-h-[20rem] md:pr-16">
            {reduce ? (
              <div className="flex flex-col">
                <blockquote className="text-xl leading-relaxed text-[#0a0a0a]">
                  {active.quote}
                </blockquote>
                <div className="mt-10 flex items-end justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#102a38] ring-2 ring-white/80">
                      <Image
                        src={active.avatar}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg font-semibold text-[#0a0a0a]">
                        {active.name}
                      </p>
                      <p className="text-base text-[#0a0a0a]/75">{active.role}</p>
                    </div>
                  </div>
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0b1f2a] shadow-md ring-1 ring-black/15"
                    aria-hidden
                  >
                    <Image
                      src={QUOTE_MARK_SRC}
                      alt=""
                      width={28}
                      height={24}
                      className="h-6 w-7"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={`${active.name}-${index}`}
                  role="tabpanel"
                  aria-roledescription="slide"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                  className="absolute inset-x-0 top-0 flex flex-col"
                >
                  <blockquote className="text-xl leading-relaxed text-[#0a0a0a]">
                    {active.quote}
                  </blockquote>
                  <div className="mt-10 flex items-end justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#102a38] ring-2 ring-white/80">
                        <Image
                          src={active.avatar}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-lg font-semibold text-[#0a0a0a]">
                          {active.name}
                        </p>
                        <p className="text-base text-[#0a0a0a]/75">{active.role}</p>
                      </div>
                    </div>
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0b1f2a] shadow-md ring-1 ring-black/15"
                      aria-hidden
                    >
                      <Image
                        src={QUOTE_MARK_SRC}
                        alt=""
                        width={28}
                        height={24}
                        className="h-6 w-7"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {slides.length > 1 ? (
            <div className="absolute top-1/2 right-2 z-20 flex -translate-y-1/2 flex-col gap-1 md:right-4">
              <button
                type="button"
                className="rounded-full p-2 text-[#0a0a0a]/35 transition-colors hover:bg-black/5 hover:text-[#0a0a0a]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zen-accent)]"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
              >
                <ChevronLeft className="h-7 w-7 md:h-8 md:w-8" />
              </button>
              <button
                type="button"
                className="rounded-full p-2 text-[#0a0a0a]/35 transition-colors hover:bg-black/5 hover:text-[#0a0a0a]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zen-accent)]"
                aria-label="Next testimonial"
                onClick={() => go(1)}
              >
                <ChevronRight className="h-7 w-7 md:h-8 md:w-8" />
              </button>
            </div>
          ) : null}
        </div>

        {/* Photo column — fixed hero; copy auto-rotates on the left */}
        <div className="relative order-1 min-h-[280px] md:order-2 md:min-h-[min(100vh,560px)]">
          <div className="relative h-full min-h-[280px] md:absolute md:inset-0 md:min-h-0">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover md:rounded-none"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

type MarketingCtaStripProps = {
  cta?: HomePageContent["cta"]
}

export function MarketingCtaStrip({
  cta = DEFAULT_HOME_PAGE.cta,
}: MarketingCtaStripProps) {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[min(100svh,720px)] overflow-hidden text-white"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={reduce ? undefined : { y: imageY }}
      >
        <Image
          src="/assets/energy-storage.jpg"
          alt=""
          fill
          className="scale-110 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      <div className="relative z-10 flex min-h-[min(100svh,720px)] items-center py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal>
            <h2 className="max-w-3xl text-4xl font-semibold text-balance md:text-[56px] md:leading-tight">
              {cta.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/95">
              {cta.body}
            </p>
            <div className="mt-10">
              <AnimatedCtaButton href="#contact">{cta.button}</AnimatedCtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
