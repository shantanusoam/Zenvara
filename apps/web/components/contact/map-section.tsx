"use client"

import { motion } from "motion/react"
import { DEFAULT_CONTACT_PAGE } from "@/lib/default-content"
import { EASE_PREMIUM, revealHidden, revealVisible } from "@/lib/motion-presets"

type MapSectionProps = {
  embedUrl?: string
}

export function MapSection({
  embedUrl = DEFAULT_CONTACT_PAGE.mapEmbedUrl,
}: MapSectionProps) {
  return (
    <motion.section
      initial={revealHidden}
      whileInView={revealVisible(0)}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ease: EASE_PREMIUM, duration: 0.8 }}
      className="w-full flex justify-center"
    >
      <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zenvara Energy Location"
          className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out"
        />
      </div>
    </motion.section>
  )
}
