"use client"

import { animate, motion, useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { STAT_STRIP } from "@/lib/home-content"
import { Reveal } from "../home/reveal"
import { SectionLayout } from "../layout/section-layout"

/** Numeric targets for each stat row (matches STAT_STRIP.stats order). */
const STAT_NUMBERS = [
  { end: 3000, prefix: ">", suffix: "" },
  { end: 3, prefix: ">", suffix: " times" },
  { end: 50, prefix: ">", suffix: "%" },
] as const

function AnimatedStatNumber({
  end,
  prefix,
  suffix,
}: {
  end: number
  prefix: string
  suffix: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px", amount: 0.35 })
  const [value, setValue] = useState(reduce ? end : 0)

  useEffect(() => {
    if (reduce) {
      setValue(end)
      return
    }
    if (!inView) return

    const controls = animate(0, end, {
      duration: end >= 1000 ? 2.2 : 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(latest),
    })
    return () => controls.stop()
  }, [end, inView, reduce])

  const rounded = Math.round(value)

  return (
    <p
      ref={ref}
      className="text-5xl font-bold text-[#959595] tabular-nums md:text-[78px] md:leading-none"
    >
      {prefix}
      {rounded}
      {suffix}
    </p>
  )
}

const PerformanceOutlast = ({ bgClass }: { bgClass?: string }) => {
  return (
    <SectionLayout bgClass={bgClass}>
      <div>
        <Reveal>
          <h2 className="max-w-4xl text-balance text-4xl font-medium text-[#0a0a0a] md:text-[56px] md:leading-[1.15]">
            {STAT_STRIP.headline}
          </h2>
          <h2 className="max-w-4xl text-balance text-4xl font-medium text-[var(--zen-accent)] md:text-[56px] md:leading-[1.15]">
            {STAT_STRIP.headline2}
          </h2>
        </Reveal>

        <motion.div
          className="mt-10 grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          {STAT_STRIP.stats.map((s, i) => {
            const num = STAT_NUMBERS[i]!
            return (
              <motion.div
                key={s.value}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <AnimatedStatNumber
                  end={num.end}
                  prefix={num.prefix}
                  suffix={num.suffix}
                />
                <p
                  className="mt-4 text-xl leading-relaxed text-[#0a0a0a]"
                  dangerouslySetInnerHTML={{ __html: s.caption }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SectionLayout>
  )
}

export default PerformanceOutlast
