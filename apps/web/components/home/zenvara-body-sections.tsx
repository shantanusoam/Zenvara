"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import {
  MISSION_VISION,
  PRODUCTS,
  STAT_STRIP,
  WHY_ZENVARA,
  WHO_WE_ARE,
} from "@/lib/home-content"
import { EASE_PREMIUM, revealHidden, revealVisible, staggerContainer } from "@/lib/motion-presets"
import { Reveal } from "./reveal"
import { SectionLayout } from "@/components/layout/section-layout"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const aboutImage = "/assets/about_us.png";
const missionImage = "/assets/mission.png";
const visionImage = "/assets/vision.png";
const productBg = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70",
  "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=70",
  "https://images.unsplash.com/photo-1620288627223-53302f4e41c2?w=800&q=70",
  "https://images.unsplash.com/photo-1509391366360?w=800&q=70",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=70",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=70",
] as const

const featureCardClass: Record<
  (typeof WHY_ZENVARA.features)[number]["variant"],
  string
> = {
  accent: "border border-[var(--zen-accent)] bg-[var(--zen-accent)] text-[#0a0a0a]",
  dark: "bg-[#102a38] text-white",
  light: "border border-[var(--zen-accent)] bg-white text-[#0b1f2a]",
  outline: "border border-[var(--zen-accent)] bg-white/95 text-[#0a0a0a]",
}

export function ZenvaraBodySections() {
  const reduce = useReducedMotion()

  return (
    <>
      <SectionLayout id="about" bgClass="bg-[#efefef]" containerClass="flex flex-col gap-16 md:gap-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-lg text-[#0a0a0a]">{WHO_WE_ARE.eyebrow}</p>
            <h2 className="mt-2 text-balance text-4xl font-semibold text-[#0a0a0a] md:text-[56px] md:leading-[1.12]">
              {WHO_WE_ARE.title}
            </h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-[#0b1f2a]">
              {WHO_WE_ARE.body}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--zen-accent)] bg-[#0b1f2a] px-6 py-3 text-xl text-white"
            >
              {WHO_WE_ARE.cta}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--zen-accent)]" />
            </Link>
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
<SectionLayout>
  
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl bg-[#0b1f2a] p-8 text-white">
            <Image
              src={missionImage}
              alt="Mission"
              width={50}
              height={50}
            />
            <p className="text-2xl font-medium mt-4">{MISSION_VISION.mission.title}</p>
            <p className="mt-4 text-lg leading-relaxed">{MISSION_VISION.mission.body}</p>
          </Reveal>
          <Reveal className="rounded-2xl bg-[var(--zen-accent)] p-8 text-[#0a0a0a]">
            <Image
              src={visionImage}
              alt="Vision"
              width={50}
              height={50}
            />
            <p className="text-2xl font-medium mt-4">{MISSION_VISION.vision.title}</p>
            <p className="mt-4 text-lg leading-relaxed">{MISSION_VISION.vision.body}</p>
          </Reveal>
        </div>

</SectionLayout>
<SectionLayout>

        <div>
          <Reveal>
            <h2 className="max-w-4xl text-balance text-4xl font-medium text-[#0a0a0a] md:text-[56px] md:leading-[1.15]">
              {STAT_STRIP.headline}
            </h2>
            <h2 className="max-w-4xl text-balance text-4xl font-medium text-[var(--zen-accent)] md:text-[56px] md:leading-[1.15]">
              {STAT_STRIP.headline2}
            </h2>
          </Reveal>
          {reduce ? (
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {STAT_STRIP.stats.map((s) => (
                <div key={s.value}>
                  <p className="text-5xl font-bold text-[#959595] md:text-[78px] md:leading-none">
                    {s.value}
                  </p>
                  <p className="mt-4 text-xl leading-relaxed text-[#0a0a0a]" dangerouslySetInnerHTML={{ __html: s.caption }}/>
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
              {STAT_STRIP.stats.map((s) => (
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
                  <p className="mt-4 text-xl leading-relaxed text-[#0a0a0a]" dangerouslySetInnerHTML={{ __html: s.caption }}/>
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
              <p className="text-lg font-medium text-[#0a0a0a] lg:pt-3">{WHY_ZENVARA.eyebrow}</p>
            </Reveal>
          </div>
          <div className="flex-1 max-w-5xl">
            <Reveal>
              <h2 className="text-balance text-left text-4xl font-medium text-[#0b1f2a] lg:text-[56px] lg:leading-[1.15]">
                Engineered Energy Solutions<br className="hidden lg:block" /> for <span className="text-[var(--zen-accent)]">Every Application</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_ZENVARA.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.05}>
                  <motion.article
                    whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className={`flex min-h-[280px] flex-col justify-between rounded-[20px] p-6 ${featureCardClass[f.variant]}`}
                  >
                    <Image
                      src={f.icon}
                      alt={f.title}
                      width={50}
                      height={50}
                    />  
                    <div>
                      <h3 className="text-2xl font-semibold leading-snug">{f.title}</h3>
                      <p className="mt-3 text-lg leading-relaxed opacity-95">{f.body}</p>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>

      <section id="products" className=" pb-20 pt-4">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <p className="text-lg font-medium text-[#0b1f2a]">{PRODUCTS.eyebrow}</p>
            </Reveal>
            <Reveal>
              <h2 className="max-w-2xl text-balance text-4xl font-semibold text-[#0a0a0a] lg:text-right lg:text-[56px] lg:leading-[1.05]">
                {PRODUCTS.title}
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="mt-10 pb-12 pl-5 pr-5 pt-2 md:pl-10 lg:pl-20 lg:pr-20">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3.5}
            slidesToScroll={1}
            swipeToSlide={true}
            arrows={false}
            responsive={[
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
                settings: { slidesToShow: 1.5, slidesToScroll: 1 },
              },
              {
                breakpoint: 640,
                settings: { slidesToShow: 1.1, slidesToScroll: 1 },
              },
            ]}
          >
            {PRODUCTS.cards.map((c, idx) => (
              <div key={c.title} className="px-3">
                <Reveal>
                  <motion.article
                    className="relative flex h-[398px] w-full flex-col justify-end overflow-hidden rounded-2xl bg-[#0b1f2a] p-6 text-white shadow-lg"
                    whileHover={reduce ? undefined : { scale: 1.01 }}
                    transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                  >
                    <div
                      className="absolute inset-0 opacity-90"
                      style={{
                        backgroundImage: `linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.95) 100%), url(${productBg[idx % productBg.length]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="relative z-10">
                      <span className="mb-4 inline-flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#0b1f2a] text-sm font-medium text-[var(--zen-accent)]">
                        {idx + 1}
                      </span>
                      <h3 className="text-2xl font-medium">{c.title}</h3>
                      <p className="mt-2 text-lg leading-relaxed text-white/95">{c.body}</p>
                    </div>
                  </motion.article>
                </Reveal>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}
