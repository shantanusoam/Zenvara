/** Copy from Figma node 32:1444 (About Us). */

export const ABOUT_HERO = {
  title: "About Us",
} as const

export const ABOUT_INTRO = {
  eyebrow: "About Zenvara",
  title: "Powering India’s Energy Transition",
  body: `Zenvara Energy is a Delhi-NCR based lithium-ion battery company built to power India’s clean energy transition.

We design, assemble, and supply high-cycle-life LFP battery packs for electric mobility, backup power, telecom infrastructure, and large-scale energy storage — engineered for safety, reliability, and consistent real-world performance.`,
  cta: "Our Services",
} as const

export const ABOUT_WIDE_IMAGE =
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&q=80" as const

export const ABOUT_SIDE_IMAGE =
  "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1000&q=80" as const

export const ABOUT_STATS = {
  headline: "Performance That Outlasts. Efficiency That Delivers.",
  stats: [
    { value: ">3000", caption: "Charge cycles delivered reliably across applications" },
    {
      value: ">3 times",
      caption: "Longer lifespan compared to conventional lead-acid batteries",
    },
    {
      value: ">50%",
      caption: "Weight reduction for improved efficiency and performance",
    },
  ],
} as const

export const TEAM_SOCIAL = ["instagram", "twitter", "linkedin", "facebook"] as const
export type TeamSocialKind = (typeof TEAM_SOCIAL)[number]

export type TeamMember = {
  name: string
  role: string
  image: string
  socials: readonly { kind: TeamSocialKind; href: string }[]
}

export const TEAM = {
  eyebrow: "Meet Our Team",
  title: "The Experts Behind the Innovation",
  members: [
    {
      name: "Adhyayan Gupta",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80",
      socials: [
        { kind: "instagram", href: "#" },
        { kind: "twitter", href: "#" },
        { kind: "linkedin", href: "#" },
        { kind: "facebook", href: "#" },
      ],
    },
    {
      name: "Shivansh Gupta",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&q=80",
      socials: [
        { kind: "instagram", href: "#" },
        { kind: "twitter", href: "#" },
        { kind: "linkedin", href: "#" },
        { kind: "facebook", href: "#" },
      ],
    },
  ] satisfies readonly TeamMember[],
} as const

export function teamMemberCount(): number {
  return TEAM.members.length
}

export function teamSocialKindsFor(member: TeamMember): TeamSocialKind[] {
  return member.socials.map((s) => s.kind)
}
