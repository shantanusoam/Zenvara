"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { CTA, IMPACT, TESTIMONIAL } from "@/lib/home-content"
import { EASE_PREMIUM } from "@/lib/motion-presets"
import { Reveal } from "./reveal"
import { MoveUpRight } from "lucide-react"

const testimonialImage =
  "/assets/testimonials.png"

const impactImage =
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=900&q=80"

export function MarketingImpact() {
  const [activeImpact, setActiveImpact] = useState(0)

  return (
    <section className="relative overflow-hidden bg-[#0b1f2a] py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_minmax(350px,450px)] md:px-10 lg:gap-16">
        {/* Column 1: Eyebrow */}
        <Reveal>
          <p className="text-lg font-medium text-[var(--zen-accent)]">{IMPACT.eyebrow}</p>
        </Reveal>

        {/* Column 2: Title and Words */}
        <div className="flex flex-col">
          <Reveal>
            <h2 className="max-w-md text-3xl font-semibold md:text-[32px] lg:text-[40px] leading-tight">
              {IMPACT.leftTitle}
            </h2>
          </Reveal>
          
          <Reveal className="mt-16 lg:mt-32">
            <ul className="space-y-4">
              {IMPACT.words.map((w, i) => (
                <li key={w} className="border-b border-white/20 pb-4">
                  <button
                    type="button"
                    onClick={() => setActiveImpact(i)}
                    className={`text-left text-4xl font-semibold transition-colors md:text-[56px] md:leading-tight ${
                      activeImpact === i ? "text-[var(--zen-accent)]" : "text-white/90"
                    }`}
                  >
                    {w}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Column 3: Image and Text Card */}
        <Reveal className="flex flex-col">
          <div className="relative h-[280px] lg:h-[350px] w-full shrink-0">
            <Image
              src={impactImage}
              alt=""
              fill
              className="rounded-2xl object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
          <div className="pt-8">
            <h3 className="text-2xl font-semibold text-white">{IMPACT.right.title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-white/80">{IMPACT.right.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function MarketingTestimonial() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-[#efefef] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-10">
        <Reveal>
          <p className="text-lg font-medium text-[var(--zen-accent)]">{TESTIMONIAL.eyebrow}</p>
          <h2 className="mt-3 text-balance text-4xl font-semibold text-[#0a0a0a] md:text-[56px] md:leading-tight">
            {TESTIMONIAL.title}
          </h2>
          <p className="mt-2 text-amber-500">★★★★★</p>
          <blockquote className="mt-6 text-xl leading-relaxed text-[#0a0a0a]">
            {TESTIMONIAL.quote}
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-14 w-14 shrink-0 rounded-full bg-[#102a38]" />
            <div>
              <p className="text-lg font-semibold">{TESTIMONIAL.name}</p>
              <p className="text-lg text-[#0a0a0a]">{TESTIMONIAL.role}</p>
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
              src={testimonialImage}
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

export function MarketingCtaStrip() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-20 text-white md:py-28">
      <div className="absolute inset-0">
        <Image
          src="/assets/energy-storage.jpg"
          alt="Energy Storage System"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <h2 className="max-w-3xl text-balance text-4xl font-semibold md:text-[56px] md:leading-tight">
            {CTA.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/95">{CTA.body}</p>
          <motion.a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-[var(--zen-accent)] bg-[#0b1f2a]/40 px-6 py-3 text-xl backdrop-blur-sm"
            whileHover={reduce ? undefined : { scale: 1.025 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
          >
            {CTA.button}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--zen-accent)] text-[#0b1f2a]" >
              <MoveUpRight/>
            </span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
