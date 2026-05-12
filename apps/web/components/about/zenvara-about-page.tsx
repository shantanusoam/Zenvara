"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { MeetOurTeamSection } from "@/components/about/meet-our-team-section"
import {
  MarketingCtaStrip,
  MarketingImpact,
  MarketingTestimonial,
} from "@/components/home/marketing-blocks"
import { Reveal } from "@/components/home/reveal"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeaderBar } from "@/components/layout/site-header-bar"
import { PillButton } from "@/components/layout/pill-button"
import {
  DEFAULT_ABOUT_PAGE,
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "@/lib/default-content"
import type {
  AboutPageContent,
  HomePageContent,
  SiteSettingsContent,
} from "@/lib/content-types"
import {
  EASE_PREMIUM,
  revealHidden,
  revealVisible,
  staggerContainer,
} from "@/lib/motion-presets"

type ZenvaraAboutPageProps = {
  content?: AboutPageContent
  sharedMarketingContent?: HomePageContent
  siteSettings?: SiteSettingsContent
}

export function ZenvaraAboutPage({
  content = DEFAULT_ABOUT_PAGE,
  sharedMarketingContent = DEFAULT_HOME_PAGE,
  siteSettings = DEFAULT_SITE_SETTINGS,
}: ZenvaraAboutPageProps) {
  const reduce = useReducedMotion()
  const { hero, images, intro, stats, team } = content
  const {
    cta,
    hero: homeHero,
    images: homeImages,
    impact,
    missionVision,
    testimonial,
  } = sharedMarketingContent

  return (
    <div className="zenvara-page bg-white font-[family-name:var(--font-open-sans)] text-[#0a0a0a] [--zen-accent:#1bddce] [&_h2]:font-[family-name:var(--font-inter)] [&_h3]:font-[family-name:var(--font-inter)]">
      <header className="relative min-h-[min(55svh,520px)] overflow-hidden bg-[#0a1620] text-white md:min-h-[480px]">
        <div className="absolute inset-0">
          <Image
            src={images.heroBackground}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/75" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[min(55svh,520px)] max-w-[1440px] flex-col px-5 pt-6 pb-16 md:min-h-[480px] md:px-10">
          <SiteHeaderBar
            active="About Us"
            ctaLabel={homeHero.secondaryCta}
            ctaHref="/#contact"
            siteSettings={siteSettings}
          />
          <div className="flex flex-1 flex-col items-center justify-center pt-10 pb-8 text-center md:pt-4">
            <motion.h1
              className="text-4xl leading-tight font-medium text-balance text-white md:text-[56px] md:leading-[1.1]"
              initial={reduce ? false : revealHidden}
              animate={reduce ? false : revealVisible(0.9)}
              transition={{ ease: EASE_PREMIUM }}
            >
              {hero.title}
            </motion.h1>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-2 md:items-start md:gap-14 md:px-10 md:py-20">
        <Reveal className="relative h-[280px] w-full md:h-[499px]">
          <Image
            src={images.sideImage}
            alt=""
            fill
            className="rounded-[20px] object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="text-lg font-medium text-[#0a0a0a]">
              {intro.eyebrow}
            </p>
            <h2 className="mt-2 text-4xl font-medium text-balance text-[#0b1f2a] md:text-[56px] md:leading-[1.12]">
              {intro.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed whitespace-pre-line text-[#0b1f2a]">
              {intro.body}
            </p>
            <div className="mt-8">
              <PillButton href="/#products">{intro.cta}</PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="relative aspect-[1440/630] max-h-[70vh] min-h-[200px] w-full">
        <Image
          src={images.wideImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>

      <section className="bg-[#efefef] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal>
            <h2 className="max-w-4xl text-4xl font-medium text-balance text-[#0a0a0a] md:text-[56px] md:leading-[1.15]">
              {stats.headline}
            </h2>
          </Reveal>
          {reduce ? (
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {stats.stats.map((s) => (
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
              {stats.stats.map((s) => (
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
      </section>

      <section className="bg-[#efefef] pt-4 pb-20">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-5 md:grid-cols-2 md:px-10">
          <Reveal className="rounded-2xl bg-[#0b1f2a] p-8 text-white">
            <p className="text-2xl font-medium">
              {missionVision.mission.title}
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              {missionVision.mission.body}
            </p>
          </Reveal>
          <Reveal className="rounded-2xl bg-[var(--zen-accent)] p-8 text-[#0a0a0a]">
            <p className="text-2xl font-medium">{missionVision.vision.title}</p>
            <p className="mt-4 text-lg leading-relaxed">
              {missionVision.vision.body}
            </p>
          </Reveal>
        </div>
      </section>

      <MeetOurTeamSection team={team} />

      <MarketingImpact impact={impact} image={homeImages.impactImage} />
      <MarketingCtaStrip cta={cta} />
      <MarketingTestimonial
        testimonial={testimonial}
        image={homeImages.testimonialImage}
      />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
