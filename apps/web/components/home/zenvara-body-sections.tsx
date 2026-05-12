"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { DEFAULT_HOME_PAGE } from "@/lib/default-content"
import type { HomePageContent } from "@/lib/content-types"
import {
  EASE_PREMIUM,
  revealHidden,
  revealVisible,
  staggerContainer,
} from "@/lib/motion-presets"
import { Reveal } from "./reveal"
import { SectionLayout } from "@/components/layout/section-layout"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const featureCardClass: Record<
  HomePageContent["whyZenvara"]["features"][number]["variant"],
  string
> = {
  accent:
    "border border-[var(--zen-accent)] bg-[var(--zen-accent)] text-[#0a0a0a]",
  dark: "bg-[#102a38] text-white",
  light: "border border-[var(--zen-accent)] bg-white text-[#0b1f2a]",
  outline: "border border-[var(--zen-accent)] bg-white/95 text-[#0a0a0a]",
}

type ZenvaraBodySectionsProps = {
  content?: HomePageContent
}

export function ZenvaraBodySections({
  content = DEFAULT_HOME_PAGE,
}: ZenvaraBodySectionsProps) {
  const reduce = useReducedMotion()
  const { images, missionVision, products, statStrip, whyZenvara, whoWeAre } =
    content

  return (
    <>
      <SectionLayout id="about" bgClass="bg-[#efefef]" containerClass="flex flex-col gap-16 md:gap-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-lg text-[#0a0a0a]">{whoWeAre.eyebrow}</p>
            <h2 className="mt-2 text-4xl font-semibold text-balance text-[#0a0a0a] md:text-[56px] md:leading-[1.12]">
              {whoWeAre.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed whitespace-pre-line text-[#0b1f2a]">
              {whoWeAre.body}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--zen-accent)] bg-[#0b1f2a] px-6 py-3 text-xl text-white"
            >
              {whoWeAre.cta}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--zen-accent)]" />
            </Link>
          </Reveal>
          <Reveal className="relative min-h-[280px] md:min-h-[360px]">
            <Image
              src={images.aboutImage}
              alt=""
              fill
              className="rounded-2xl object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1440px] gap-6 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-[1fr_217px] lg:items-start">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-2xl bg-[#0b1f2a] p-8 text-white">
              <p className="text-2xl font-medium">
                {missionVision.mission.title}
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                {missionVision.mission.body}
              </p>
            </Reveal>
            <Reveal className="rounded-2xl bg-[var(--zen-accent)] p-8 text-[#0a0a0a]">
              <p className="text-2xl font-medium">
                {missionVision.vision.title}
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                {missionVision.vision.body}
              </p>
            </Reveal>
          </div>
          <Reveal className="rounded-2xl bg-gradient-to-b from-[#0b1f2a] to-[#266a90] p-6 text-center text-white">
            {statStrip.sidebar.map((s) => (
              <div key={s.label} className="py-4">
                <p className="text-5xl font-bold">{s.big}</p>
                <p className="mt-2 text-lg">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

</SectionLayout>
<SectionLayout>

        <div>
          <Reveal>
            <h2 className="max-w-4xl text-4xl font-medium text-balance text-[#0a0a0a] md:text-[56px] md:leading-[1.15]">
              {statStrip.headline}
            </h2>
            <h2 className="max-w-4xl text-balance text-4xl font-medium text-[var(--zen-accent)] md:text-[56px] md:leading-[1.15]">
              {STAT_STRIP.headline2}
            </h2>
          </Reveal>
          {reduce ? (
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {statStrip.stats.map((s) => (
                <div key={s.value}>
                  <p className="text-5xl font-bold text-[#959595] md:text-[78px] md:leading-none">
                    {s.value}
                  </p>
                  <p className="mt-4 text-xl leading-relaxed text-[#0a0a0a]">
                    {s.caption}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              className="mt-10 grid gap-8 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer(0.12)}
            >
              {statStrip.stats.map((s) => (
                <motion.div
                  key={s.value}
                  variants={{
                    hidden: revealHidden,
                    visible: revealVisible(0.7),
                  }}
                >
                  <p className="text-5xl font-bold text-[#959595] md:text-[78px] md:leading-none">
                    {s.value}
                  </p>
                  <p className="mt-4 text-xl leading-relaxed text-[#0a0a0a]">
                    {s.caption}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
</SectionLayout>
<SectionLayout id="why-zenvara" bgClass="bg-[#efefef]" >

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          <div className="lg:w-56 shrink-0">
            <Reveal>
              <p className="text-lg font-medium text-[#0a0a0a]">
                {whyZenvara.eyebrow}
              </p>
            </Reveal>
          </div>
          <div className="flex-1 max-w-5xl">
            <Reveal>
              <h2 className="max-w-3xl text-right text-4xl font-medium text-balance text-[#0b1f2a] lg:text-[56px] lg:leading-[1.15]">
                {whyZenvara.title}
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyZenvara.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <motion.article
                  whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className={`flex min-h-[280px] flex-col justify-end rounded-[20px] p-6 ${featureCardClass[f.variant]}`}
                >
                  <h3 className="text-2xl leading-snug font-semibold">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed opacity-95">
                    {f.body}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionLayout>

      <section id="products" className="bg-[#efefef] pt-4 pb-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <p className="text-lg font-medium text-[#0b1f2a]">
                {products.eyebrow}
              </p>
            </Reveal>
            <Reveal>
              <h2 className="max-w-2xl text-4xl font-semibold text-balance text-[#0a0a0a] lg:text-right lg:text-[56px] lg:leading-[1.05]">
                {products.title}
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="mt-10 flex gap-5 overflow-x-auto pt-2 pr-5 pb-4 pl-5 [scrollbar-width:thin] md:pl-10">
          {products.cards.map((c, idx) => (
            <Reveal key={c.title} className="min-w-[min(100%,346px)] shrink-0">
              <motion.article
                className="relative flex h-[398px] w-[min(100%,346px)] flex-col justify-end overflow-hidden rounded-2xl bg-[#0b1f2a] p-6 text-white shadow-lg"
                whileHover={reduce ? undefined : { scale: 1.01 }}
                transition={{ duration: 0.35, ease: EASE_PREMIUM }}
              >
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    backgroundImage: `linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.95) 100%), url(${images.productBackgrounds[idx % images.productBackgrounds.length]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10">
                  <span className="mb-4 inline-flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#0b1f2a] text-sm font-medium text-[var(--zen-accent)]">
                    {idx + 1}
                  </span>
                  <h3 className="text-2xl font-medium">{c.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-white/95">
                    {c.body}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
