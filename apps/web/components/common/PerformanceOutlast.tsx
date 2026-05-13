import { STAT_STRIP } from "@/lib/home-content"
import { Reveal } from "../home/reveal"
import { SectionLayout } from "../layout/section-layout"
import {motion, useReducedMotion } from "motion/react"
import { revealHidden, revealVisible, staggerContainer } from "@/lib/motion-presets"

const PerformanceOutlast = ({bgClass}: {bgClass?: string}) => {
      const reduce = useReducedMotion()

  return (
    <>
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
    </>
  )
}

export default PerformanceOutlast