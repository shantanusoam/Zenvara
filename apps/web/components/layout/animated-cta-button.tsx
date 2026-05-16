"use client"

import { MoveUpRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { EASE_PREMIUM } from "@/lib/motion-presets"
import { FiArrowRight } from "react-icons/fi"

const HOVER_TRANSITION = { duration: 0.95, ease: EASE_PREMIUM, type: "spring", stiffness: 350, damping: 22, } as const

const buttonVariants = {
  rest: {
    paddingLeft: 24,
    paddingRight: 6,
  },
  hover: {
    paddingLeft: 24,
    paddingRight: 6,
  },
} as const

const textVariants = {
  rest: { paddingRight: 0 },
  hover: { paddingRight: 16 },
} as const

const arrowVariants = {
  rest: { rotate: -45 },
  hover: { rotate: 0 },
} as const

type AnimatedCtaButtonProps = {
  children: React.ReactNode
  href: string
  className?: string
  /** Fade-up entrance delay (s). Omit when a parent Reveal already handles entrance. */
  revealDelay?: number
  /** Compact sizing for header nav CTAs on mobile/desktop. */
  size?: "default" | "compact"
}

const sizeStyles = {
  default: {
    button:
      "gap-3 py-1.5 text-xl pl-6 pr-1.5",
    arrow: "h-16 w-16",
    icon: "h-12 w-12",
  },
  compact: {
    button:
      "gap-2 py-1 pl-4 pr-1 text-sm sm:text-base max-w-[min(100%,220px)] sm:max-w-none",
    arrow: "h-9 w-9 sm:h-10 sm:w-10",
    icon: "h-5 w-5 sm:h-6 sm:w-6",
  },
} as const

export function AnimatedCtaButton({
  children,
  href,
  className = "",
  revealDelay,
  size = "default",
}: AnimatedCtaButtonProps) {
  const reduce = useReducedMotion()
  const styles = sizeStyles[size]

  const button = (
    <motion.a
      href={href}
      className={`relative inline-flex items-center overflow-hidden rounded-full border border-(--zen-accent) bg-[#0b1f2a] font-normal text-white hover:text-blue-300 ${styles.button} ${className}`}
      initial="rest"
      animate="rest"
      whileHover={reduce ? undefined : "hover"}
      variants={reduce ? undefined : buttonVariants}
      transition={HOVER_TRANSITION}
      whileTap={reduce ? undefined : { scale: 0.98 }}
    >
      <motion.span
        className="whitespace-nowrap"
        variants={reduce ? undefined : textVariants}
        transition={HOVER_TRANSITION}
      >
        {children}
      </motion.span>
      <motion.span
        className={`flex shrink-0 items-center justify-center rounded-full bg-(--zen-accent) ${styles.arrow}`}
        variants={reduce ? undefined : arrowVariants}
        transition={HOVER_TRANSITION}
      >
        <FiArrowRight className={`text-[#0b1f2a] ${styles.icon}`} aria-hidden />
      </motion.span>
    </motion.a>
  )

  if (revealDelay === undefined) {
    return button
  }

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={reduce ? false : { opacity: 1, y: 0 }}
      transition={{ delay: revealDelay, duration: 0.9, ease: EASE_PREMIUM }}
    >
      {button}
    </motion.div>
  )
}
