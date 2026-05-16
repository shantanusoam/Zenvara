"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Reveal } from "@/components/home/reveal"
import { SERVICE_FAQS } from "@/lib/service-content"

export function ServiceFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="text-[15px] font-medium text-[var(--zen-accent)]">{SERVICE_FAQS.eyebrow}</p>
          <h2 className="mt-2 text-balance text-4xl font-medium text-[#0a0a0a] md:text-[56px] md:leading-[1.12]">
            {SERVICE_FAQS.title}
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {SERVICE_FAQS.faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className="cursor-pointer overflow-hidden rounded-xl border border-[var(--zen-accent)] bg-white px-6 py-5 transition-colors hover:bg-gray-50 md:px-8"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#0a0a0a]">{faq.question}</h3>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-base leading-relaxed text-[#4a4a4a]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
