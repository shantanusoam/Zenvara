"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"

/** Fixed card height — inner animation only, no layout morph of the tile. */
const CARD_H = "h-[22rem] md:h-[23rem]"

export type WhyZenvaraFeatureCardProps = {
  title: string
  /** Short teaser at rest. */
  body: string
  /** Full copy on hover; defaults to `body` when omitted. */
  bodyExpanded?: string
  icon: string
  variantClass: string
}

/**
 * Why Zenvara grid card: fixed outer height; on hover the spacer collapses so the
 * title moves up toward the icon, and preview / expanded copy crossfades inside
 * a region that fills the remaining space (card box height stays constant).
 */
export function WhyZenvaraFeatureCard({
  title,
  body,
  bodyExpanded,
  icon,
  variantClass,
}: WhyZenvaraFeatureCardProps) {
  const reduce = useReducedMotion()
  const expanded = (bodyExpanded ?? body).trim()
  const preview = body.trim()

  if (reduce) {
    return (
      <article
        className={`flex ${CARD_H} flex-col overflow-hidden rounded-[20px] p-6 ${variantClass}`}
      >
        <div className="shrink-0">
          <Image src={icon} alt="" width={50} height={50} role="presentation" />
        </div>
        <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-y-auto">
          <h3 className="shrink-0 text-2xl leading-snug font-semibold">{title}</h3>
          <p className="mt-3 text-lg leading-relaxed opacity-95">{expanded}</p>
        </div>
      </article>
    )
  }

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 32 }}
      className={`group/card relative flex ${CARD_H} cursor-default flex-col overflow-hidden rounded-[20px] p-6 shadow-sm ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-md focus-within:shadow-md focus-within:outline-none ${variantClass}`}
      tabIndex={0}
    >
      <div className="relative z-10 shrink-0">
        <Image src={icon} alt="" width={50} height={50} role="presentation" />
      </div>

      <div
        className="min-h-[100px] shrink-0 transition-[min-height] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/card:min-h-0 group-focus-within/card:min-h-0 md:min-h-[140px]"
        aria-hidden
      />

      <h3 className="relative z-10 shrink-0 text-2xl leading-snug font-semibold">
        {title}
      </h3>

      <div className="relative z-10 mt-3 flex min-h-0 flex-1 flex-col">
        <div className="relative flex-1 min-h-[6rem]">
          <p className="absolute inset-0 overflow-y-auto text-lg leading-relaxed opacity-95 transition-opacity duration-500 ease-out group-hover/card:pointer-events-none group-hover/card:opacity-0 group-focus-within/card:pointer-events-none group-focus-within/card:opacity-0">
            {preview}
          </p>
          <p className="absolute inset-0 overflow-y-auto text-lg leading-relaxed opacity-0 transition-opacity duration-500 ease-out group-hover/card:opacity-100 group-focus-within/card:opacity-100">
            {expanded}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
