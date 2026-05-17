"use client"

import { motion } from "motion/react"
import { EASE_PREMIUM, revealVisible, revealHidden } from "@/lib/motion-presets"

export function MapSection() {
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112002.34380729709!2d77.12648785820311!3d28.6859345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1708513388720!5m2!1sen!2sin"
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
