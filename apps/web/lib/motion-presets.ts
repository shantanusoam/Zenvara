/** Premium easing aligned with apple_like_hyper_effect_prompt.md */

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const
export const EASE_SOFT = [0.22, 1, 0.36, 1] as const

export const revealHidden = {
  opacity: 0,
  y: 40,
  scale: 0.98,
  filter: "blur(12px)",
} as const

export const revealVisible = (duration = 0.85) =>
  ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration, ease: EASE_PREMIUM },
  }) as const

export const staggerContainer = (stagger = 0.08) =>
  ({
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: 0.06 },
    },
  }) as const
