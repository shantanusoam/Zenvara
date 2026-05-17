"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/home/reveal"
import { SectionLayout } from "@/components/layout/section-layout"
import type { ServiceContent } from "@/lib/content-types"

type ServiceFaqProps = {
  faqs: ServiceContent["faqs"]
}

export function ServiceFaq({ faqs }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <SectionLayout bgClass="bg-[#efefef]" containerClass="flex flex-col gap-10">
      <Reveal>
        <p className="text-lg font-medium text-[#0b1f2a]">{faqs.eyebrow}</p>
        <h2 className="mt-2 text-balance text-4xl font-medium text-[#0b1f2a] md:text-[48px] md:leading-[1.15]">
          {faqs.title}
        </h2>
      </Reveal>
      <div className="flex flex-col gap-3">
        {faqs.faqs.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <Reveal key={`${item.question}-${i}`} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="text-lg font-semibold text-[#0b1f2a]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--zen-accent)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[#e5e7eb] px-6 pb-5 pt-2 text-base leading-relaxed text-[#374151]">
                    {item.answer}
                  </div>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </SectionLayout>
  )
}
