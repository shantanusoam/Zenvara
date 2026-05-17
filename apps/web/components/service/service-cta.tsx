"use client"

import { Reveal } from "@/components/home/reveal"
import { AnimatedCtaButton } from "@/components/layout/animated-cta-button"
import type { ServiceContent } from "@/lib/content-types"

type ServiceCtaProps = {
  cta: ServiceContent["cta"]
}

export function ServiceCta({ cta }: ServiceCtaProps) {
  return (
    <section className="bg-[#0b1f2a] py-20 text-white md:py-28">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center px-5 text-center md:px-10">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold md:text-[56px] md:leading-tight">
            {cta.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80 md:mt-6">
            {cta.subtitle}
          </p>
          <div className="mt-10 md:mt-12">
            <AnimatedCtaButton href="/contact">{cta.button}</AnimatedCtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
