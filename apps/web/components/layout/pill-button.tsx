"use client"

import { MoveUpRight } from "lucide-react"
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react"
import { useRef } from "react"

type PillButtonProps = {
  children: React.ReactNode
  href: string
  variant?: "primary" | "ghost"
}

export function PillButton({ children, href, variant = "primary" }: PillButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 220, damping: 22 })
  const springY = useSpring(my, { stiffness: 220, damping: 22 })
  const rotateX = useTransform(springY, [-40, 40], [4, -4])
  const rotateY = useTransform(springX, [-40, 40], [-4, 4])

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set(e.clientX - (r.left + r.width / 2))
    my.set(e.clientY - (r.top + r.height / 2))
  }

  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  const base =
    "relative inline-flex items-center gap-3 rounded-full px-6 py-3 text-lg font-normal transition-shadow"

  const style = reduce ? undefined : { rotateX, rotateY, transformPerspective: 800 }

  if (variant === "ghost") {
    return (
      <motion.a
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={style}
        className={`${base} border border-[var(--zen-accent)] bg-[#0b1f2a] text-white shadow-[0_0_0_1px_rgba(27,221,206,0.35)]`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
        
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--zen-accent)] text-[#0b1f2a]" >
          <MoveUpRight className="w-6 h-6"/>  
        </span>
      </motion.a>
    )
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      className={`${base} border border-[var(--zen-accent)] bg-[#0b1f2a] text-white`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--zen-accent)]" >
        <MoveUpRight className="w-6 h-6 text-[#0b1f2a]"/>  
      </span> 
    </motion.a>
  )
}
