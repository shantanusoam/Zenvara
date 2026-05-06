"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"
import { revealHidden, revealVisible } from "@/lib/motion-presets"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={revealHidden}
      whileInView={revealVisible(0.75)}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
