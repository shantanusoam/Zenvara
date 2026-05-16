"use client"

import { Reveal } from "@/components/home/reveal"
import { AnimatedCtaButton } from "@/components/layout/animated-cta-button"
import { SERVICE_CTA } from "@/lib/service-content"

export function ServiceCta() {
  return (
    <section className="bg-[#0b1f2a] py-20 text-white md:py-28">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center px-5 text-center md:px-10">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold md:text-[56px] md:leading-tight">
            {SERVICE_CTA.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80 md:mt-6">
            {SERVICE_CTA.subtitle}
          </p>
          <div className="mt-10 md:mt-12">
            <AnimatedCtaButton href="/#contact">
              {SERVICE_CTA.button}
            </AnimatedCtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
