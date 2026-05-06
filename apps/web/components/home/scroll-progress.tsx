"use client"

import { motion, useReducedMotion, useScroll } from "motion/react"

export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  if (reduce) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-[var(--zen-accent)] shadow-[0_0_12px_rgba(27,221,206,0.45)]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
      aria-hidden
    />
  )
}
