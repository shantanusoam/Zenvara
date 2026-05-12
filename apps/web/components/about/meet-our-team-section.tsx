"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/home/reveal"
import { DEFAULT_ABOUT_PAGE } from "@/lib/default-content"
import type { AboutPageContent, TeamSocialKind } from "@/lib/content-types"
import { EASE_PREMIUM } from "@/lib/motion-presets"

/** Figma target: node 35:2535 (Meet our team). MCP read timed out; structure mirrors About frame team cards: ~402×428 portrait, name, role, social row. */

function SocialIcon({ kind }: { kind: TeamSocialKind }) {
  const className = "h-4 w-4 text-[var(--zen-accent)]"
  if (kind === "instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M12 7.2c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.15-4.8-4.8-4.8zm0 7.9c-1.71 0-3.1-1.39-3.1-3.1s1.39-3.1 3.1-3.1 3.1 1.39 3.1 3.1-1.39 3.1-3.1 3.1zm7.2-8.1c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1.5-1.1 1.1-1.1 1.1.5 1.1 1.1zm2.9 1.1c-.1-1.7-.5-3.2-1.8-4.5-1.3-1.3-2.8-1.7-4.5-1.8C14.9 2 14.4 2 12 2s-2.9 0-3.9.1c-1.7.1-3.2.5-4.5 1.8C2.3 5.2 1.9 6.7 1.8 8.4 1.7 9.4 1.7 9.9 1.7 12s0 2.6.1 3.6c.1 1.7.5 3.2 1.8 4.5 1.3 1.3 2.8 1.7 4.5 1.8 1 .1 1.5.1 3.9.1s2.9 0 3.9-.1c1.7-.1 3.2-.5 4.5-1.8 1.3-1.3 1.7-2.8 1.8-4.5.1-1 .1-1.5.1-3.9.1s-2.6 0-3.6-.1zM12 19c-1.9 0-2.1 0-2.9-.1-1.3-.1-2.1-.3-2.8-.6-.7-.3-1.3-.8-1.8-1.3s-1-1.1-1.3-1.8c-.3-.7-.5-1.5-.6-2.8C2 14.1 2 13.9 2 12s0-2.1.1-2.9c.1-1.3.3-2.1.6-2.8.3-.7.8-1.3 1.3-1.8s1.1-1 1.8-1.3c.7-.3 1.5-.5 2.8-.6C9.9 4 10.1 4 12 4s2.1 0 2.9.1c1.3.1 2.1.3 2.8.6.7.3 1.3.8 1.8 1.3s1 1.1 1.3 1.8c.3.7.5 1.5.6 2.8.1.8.1 1 .1 2.9s0 2.1-.1 2.9c-.1 1.3-.3 2.1-.6 2.8-.3.7-.8 1.3-1.3 1.8s-1.1 1-1.8 1.3c-.7.3-1.5.5-2.8.6-.8.1-1 .1-2.9.1z"
        />
      </svg>
    )
  }
  if (kind === "facebook") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.4H7.5v3.2h2.8V22h3.2z"
        />
      </svg>
    )
  }
  if (kind === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M6.5 8.5h-3V21h3V8.5zm-1.5-5C3.7 3.5 3 4.2 3 5s.7 1.5 1.5 1.5S6 5.8 6 5s-.7-1.5-1.5-1.5zM21 14.3c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3 1.7V8.5H11V21h3v-6.3c0-1.3.2-2.5 1.8-2.5 1.5 0 1.7 1.4 1.7 2.5V21h3v-6.7z"
        />
      </svg>
    )
  }
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  )
}

type MeetOurTeamSectionProps = {
  team?: AboutPageContent["team"]
}

export function MeetOurTeamSection({
  team = DEFAULT_ABOUT_PAGE.team,
}: MeetOurTeamSectionProps) {
  const reduce = useReducedMotion()

  return (
    <section className="bg-[#efefef] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="text-lg font-medium text-[var(--zen-accent)]">
            {team.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-medium text-balance text-[#0a0a0a] md:text-[56px] md:leading-[1.12]">
            {team.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:justify-items-center lg:mx-auto lg:max-w-[880px] lg:justify-items-stretch">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06}>
              <motion.article
                className="relative mx-auto w-full max-w-[402px] overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(11,31,42,0.08)] ring-1 ring-black/10"
                whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
                transition={{ duration: 0.45, ease: EASE_PREMIUM }}
              >
                <div className="relative aspect-[402/428] w-full bg-[#d9d9d9]">
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1280px) 402px, (min-width: 640px) 45vw, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {member.socials.map((s) => (
                      <Link
                        key={`${member.name}-${s.kind}`}
                        href={s.href}
                        className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#0b1f2a] text-white shadow-sm ring-1 ring-white/10 transition-colors hover:bg-[#102a38]"
                        aria-label={`${member.name} on ${s.kind}`}
                      >
                        <SocialIcon kind={s.kind} />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="px-5 pt-5 pb-6">
                  <p className="text-xl font-medium text-[#0a0a0a]">
                    {member.name}
                  </p>
                  <p className="mt-1 text-lg font-medium text-[var(--zen-accent)]">
                    {member.role}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
