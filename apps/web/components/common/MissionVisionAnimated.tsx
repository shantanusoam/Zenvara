"use client"

import { motion } from "motion/react"
import Image from "next/image"
import type { MissionVisionContent } from "@/lib/content-types"
import { DEFAULT_HOME_PAGE } from "@/lib/default-content"

type MissionVisionAnimatedProps = {
  missionVision?: MissionVisionContent
}

export default function MissionVisionAnimated({
  missionVision = DEFAULT_HOME_PAGE.missionVision,
}: MissionVisionAnimatedProps) {
  return (
    <section className="bg-[#EBF5F8] py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full rounded-2xl overflow-hidden bg-transparent">
              <video
                src="/assets/mission-and-vision.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              className="absolute left-[39px] md:left-[43px] top-[60px] bottom-[60px] w-[2px] border-l-2 border-dashed border-[#102a38]/30 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            />

            <div className="flex flex-col relative z-10">
              <motion.div
                className="flex items-start gap-6 md:gap-8 pb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="shrink-0 w-[80px] h-[80px] md:w-[88px] md:h-[88px] rounded-full bg-[#102a38] flex items-center justify-center relative shadow-md">
                  <Image
                    src="/assets/vision2.svg"
                    alt="Vision"
                    width={40}
                    height={40}
                    className="md:w-12 md:h-12 w-10 h-10"
                  />
                </div>
                <div className="pt-2">
                  <span className="text-[var(--zen-accent)] font-bold tracking-wider uppercase text-lg">
                    Vision
                  </span>
                  <h3 className="text-[24px] md:text-3xl font-bold mt-2 text-[#0b1f2a] leading-tight">
                    {missionVision.vision.title}
                  </h3>
                  <p className="mt-4 text-[#0b1f2a]/80 text-base md:text-lg leading-relaxed">
                    {missionVision.vision.body}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-6 md:gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
              >
                <div className="shrink-0 w-[80px] h-[80px] md:w-[88px] md:h-[88px] rounded-full bg-[#102a38] flex items-center justify-center relative shadow-md">
                  <Image
                    src="/assets/mission.png"
                    alt="Mission"
                    width={40}
                    height={40}
                    className="md:w-12 md:h-12 w-10 h-10"
                  />
                </div>
                <div className="pt-2">
                  <span className="text-[var(--zen-accent)] font-bold tracking-wider uppercase text-lg">
                    Mission
                  </span>
                  <h3 className="text-[24px] md:text-3xl font-bold mt-2 text-[#0b1f2a] leading-tight">
                    {missionVision.mission.title}
                  </h3>
                  <p className="mt-4 text-[#0b1f2a]/80 text-base md:text-lg leading-relaxed">
                    {missionVision.mission.body}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
