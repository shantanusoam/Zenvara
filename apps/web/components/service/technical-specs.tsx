"use client"

import { Reveal } from "@/components/home/reveal"
import { SERVICE_SPECS } from "@/lib/service-content"

export function TechnicalSpecs() {
  return (
    <section className="bg-[#efefef] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="text-[15px] font-medium text-[var(--zen-accent)]">{SERVICE_SPECS.eyebrow}</p>
          <h2 className="mt-2 text-balance text-4xl font-medium text-[#0a0a0a] md:text-[56px] md:leading-[1.12]">
            {SERVICE_SPECS.title}
          </h2>
        </Reveal>

        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-[var(--zen-accent)] bg-white">
          <div className="flex flex-col">
            {SERVICE_SPECS.specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:gap-10 sm:px-10 sm:py-6 ${
                  i !== SERVICE_SPECS.specs.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="w-full sm:w-1/3">
                  <span className="font-semibold text-[var(--zen-accent)]">{spec.label}</span>
                </div>
                <div className="flex-1">
                  <span className="text-[#0a0a0a]">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
