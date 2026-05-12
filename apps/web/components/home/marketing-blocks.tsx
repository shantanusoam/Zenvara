"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { DEFAULT_HOME_PAGE } from "@/lib/default-content"
import type { HomePageContent } from "@/lib/content-types"
import { EASE_PREMIUM } from "@/lib/motion-presets"
import { Reveal } from "./reveal"
import { MoveUpRight } from "lucide-react"

type MarketingImpactProps = {
  impact?: HomePageContent["impact"]
  image?: string
}

export function MarketingImpact({
  impact = DEFAULT_HOME_PAGE.impact,
  image = DEFAULT_HOME_PAGE.images.impactImage,
}: MarketingImpactProps) {
  const [activeImpact, setActiveImpact] = useState(0)

  return (
    <section className="relative overflow-hidden bg-[#0b1f2a] py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_minmax(350px,450px)] md:px-10 lg:gap-16">
        {/* Column 1: Eyebrow */}
        <Reveal>
          <p className="text-lg font-medium text-[var(--zen-accent)]">
            {impact.eyebrow}
          </p>
          <h2 className="mt-4 max-w-md text-3xl font-semibold md:text-[32px]">
            {impact.leftTitle}
          </h2>
          <ul className="mt-10 space-y-4 border-t border-white/20 pt-6">
            {impact.words.map((w, i) => (
              <li key={w}>
                <button
                  type="button"
                  onClick={() => setActiveImpact(i)}
                  className={`text-left text-4xl font-semibold transition-colors md:text-[56px] md:leading-tight ${
                    activeImpact === i
                      ? "text-[var(--zen-accent)]"
                      : "text-white/90"
                  }`}
                >
                  {w}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="hidden lg:block" aria-hidden />
        <Reveal className="relative min-h-[320px] lg:min-h-[420px]">
          <Image
            src={image}
            alt=""
            fill
            className="rounded-2xl object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute right-0 bottom-0 left-0 p-6">
            <p className="text-2xl font-semibold">{impact.right.title}</p>
            <p className="mt-3 text-lg leading-relaxed text-white/95">
              {impact.right.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

type MarketingTestimonialProps = {
  testimonial?: HomePageContent["testimonial"]
  image?: string
}

export function MarketingTestimonial({
  testimonial = DEFAULT_HOME_PAGE.testimonial,
  image = DEFAULT_HOME_PAGE.images.testimonialImage,
}: MarketingTestimonialProps) {
  const reduce = useReducedMotion()

  return (
    <section className="bg-[#efefef] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-10">
        <Reveal>
          <p className="text-lg font-medium text-[var(--zen-accent)]">
            {testimonial.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-balance text-[#0a0a0a] md:text-[56px] md:leading-tight">
            {testimonial.title}
          </h2>
          <p className="mt-2 text-amber-500">★★★★★</p>
          <blockquote className="mt-6 text-xl leading-relaxed text-[#0a0a0a]">
            {testimonial.quote}
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-14 w-14 shrink-0 rounded-full bg-[#102a38]" />
            <div>
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-lg text-[#0a0a0a]">{testimonial.role}</p>
            </div>
          </div>
        </Reveal>
        <Reveal className="relative min-h-[300px] md:min-h-[400px]">
          <motion.div
            className="relative h-full min-h-[300px] overflow-hidden rounded-2xl md:min-h-[400px]"
            initial={reduce ? undefined : { clipPath: "inset(0 0 100% 0)" }}
            whileInView={reduce ? undefined : { clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE_PREMIUM }}
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </motion.div>
        </Reveal>
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

  return (
    <section className="relative py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[#0b1f2a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(27,221,206,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-semibold text-balance md:text-[56px] md:leading-tight">
            {cta.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/95">
            {cta.body}
          </p>
          <motion.a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-[var(--zen-accent)] bg-[#0b1f2a]/40 px-6 py-3 text-xl backdrop-blur-sm"
            whileHover={reduce ? undefined : { scale: 1.025 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
          >
            {cta.button}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--zen-accent)]" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
