"use client"

import { Reveal } from "@/components/home/reveal"
import { SectionLayout } from "@/components/layout/section-layout"
import type { ServiceContent } from "@/lib/content-types"

type TechnicalSpecsProps = {
  specs: ServiceContent["specs"]
}

export function TechnicalSpecs({ specs }: TechnicalSpecsProps) {
  return (
    <SectionLayout bgClass="bg-white" containerClass="flex flex-col gap-10">
      <Reveal>
        <p className="text-lg font-medium text-[#0b1f2a]">{specs.eyebrow}</p>
        <h2 className="mt-2 text-balance text-4xl font-medium text-[#0b1f2a] md:text-[48px] md:leading-[1.15]">
          {specs.title}
        </h2>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {specs.specs.map((row, i) => (
          <Reveal key={`${row.label}-${i}`} delay={i * 0.04}>
            <div className="rounded-2xl border border-[#e5e7eb] bg-[#f8f9fa] px-6 py-5">
              <p className="text-sm font-medium text-[#6b7280]">{row.label}</p>
              <p className="mt-2 text-lg font-semibold text-[#0b1f2a]">{row.value}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionLayout>
  )
}
