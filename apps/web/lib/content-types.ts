export type SeoFields = {
  metaTitle: string
  metaDescription: string
  ogImage?: string
  canonicalUrl?: string
  noIndex?: boolean
}

export type NavItem = {
  label: string
  href: string
}

export type SiteSettingsContent = {
  name: string
  tagline: string
  nav: NavItem[]
  footer: {
    blurb: string
    copyright: string
    quickLinks: string[]
    productLinks: string[]
    contact: {
      emailLabel: string
      email: string
      locationLabel: string
      address: string
    }
    newsletter: string
    legal: string[]
  }
  seo: SeoFields
}

export type MissionVisionContent = {
  mission: {
    title: string
    body: string
  }
  vision: {
    title: string
    body: string
  }
}

export type StatItem = {
  value: string
  caption: string
}

export type HomePageContent = {
  hero: {
    headline: string
    primaryCta: string
    secondaryCta: string
    videoNote: string
  }
  whoWeAre: {
    eyebrow: string
    title: string
    body: string
    cta: string
  }
  missionVision: MissionVisionContent
  statStrip: {
    headline: string
    headline2: string
    stats: StatItem[]
    sidebar: {
      big: string
      label: string
    }[]
  }
  whyZenvara: {
    eyebrow: string
    title: string
    features: {
      title: string
      body: string
      bodyExpanded?: string
      icon?: string
      variant: "accent" | "dark" | "light" | "outline"
    }[]
  }
  products: {
    eyebrow: string
    title: string
    cards: {
      title: string
      body: string
    }[]
  }
  impact: {
    eyebrow: string
    leftTitle: string
    words: string[]
    panels?: {
      title: string
      body: string
      image: string
    }[]
    right: {
      title: string
      body: string
    }
  }
  testimonial: {
    eyebrow: string
    title: string
    quote: string
    name: string
    role: string
  }
  testimonialSlides: {
    quote: string
    name: string
    role: string
    image: string
    avatar?: string
  }[]
  sustainability: {
    eyebrow: string
    title: string
    pillars: {
      title: string
      body: string
      icon?: string
    }[]
  }
  cta: {
    title: string
    body: string
    button: string
  }
  blog: {
    eyebrow: string
    title: string
    posts: {
      category: string
      title: string
      image?: string
    }[]
  }
  images: {
    heroImage: string
    aboutImage: string
    productBackgrounds: string[]
    impactImage: string
    testimonialImage: string
    sustainabilityImage: string
  }
  seo: SeoFields
}

export type TeamSocialKind = "instagram" | "twitter" | "linkedin" | "facebook"

export type TeamMemberContent = {
  name: string
  role: string
  image: string
  socials: {
    kind: TeamSocialKind
    href: string
  }[]
}

export type AboutPageContent = {
  hero: {
    title: string
  }
  intro: {
    eyebrow: string
    title: string
    body: string
    cta: string
  }
  images: {
    heroBackground: string
    sideImage: string
    wideImage: string
  }
  stats: {
    headline: string
    stats: StatItem[]
  }
  team: {
    eyebrow: string
    title: string
    members: TeamMemberContent[]
  }
  seo: SeoFields
}
