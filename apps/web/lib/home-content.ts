/** Copy and structure derived from Figma node 32:1143 (Home). */

export const SITE = {
  name: "Zenvara Energy",
  tagline: "Engineered Energy. Built for India.",
} as const

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "Our Blogs", href: "/#blog" },
] as const

export const HERO = {
  headline: "Engineered Energy. Built for India.",
  primaryCta: "Explore More",
  secondaryCta: "Get in Touch",
  videoNote:
    "Hero section will be a video",
} as const

export const WHO_WE_ARE = {
  eyebrow: "Who We are",
  title: "Powering India’s Energy Transition",
  body: `Zenvara Energy is a new-generation lithium-ion battery company built to power India’s clean energy transition.

We design, assemble, and supply high-cycle-life LFP battery packs for electric vehicles, inverter and UPS systems, telecom infrastructure, and grid-scale energy storage. Every pack that leaves our facility is engineered for safety, longevity, and real-world performance.`,
  cta: "About Us",
} as const

export const MISSION_VISION = {
  mission: {
    title: "Our Mission",
    body: "To accelerate India’s transition to clean energy by making high-performance lithium-ion battery packs accessible, affordable, and dependable for every business that needs them.",
  },
  vision: {
    title: "Our Vision",
    body: "To accelerate India’s transition to clean energy by making high-performance lithium-ion battery packs accessible, affordable, and dependable for every business that needs them.",
  },
} as const

export const STAT_STRIP = {
  headline: "Performance That Outlasts.",
  headline2: 'Efficiency That Delivers.',
  stats: [
    { value: ">3000", caption: "<b>Charge cycles</b> delivered reliably across applications" },
    {
      value: ">3 times",
      caption: "<b>Longer lifespan</b> compared to conventional lead-acid batteries",
    },
    {
      value: ">50%",
      caption: "<b>Weight reduction</b> for improved efficiency and performance",
    },
  ],
  sidebar: [
    { big: "3k+", label: "Cycle Life" },
    { big: "3x", label: "Than Lead-Acid Batteries" },
    { big: "50%", label: "Lighter than Traditional System" },
  ],
} as const

export const WHY_ZENVARA = {
  eyebrow: "Why Choose Zenvara",
  title: "Engineered Energy Solutions for Every Application",
  features: [
    {
      title: "LFP-First Chemistry",
      body: "We build exclusively with lithium iron phosphate cells ",
      bodyExpanded:
        "We build exclusively with lithium iron phosphate cells engineered for thermal stability, long cycle life, and safe high-current operation across electric mobility, telecom backup, and inverter applications.",
      icon: "/assets/lfp.svg",
      variant: "outline" as const,
    },
    {
      title: "3,000+ Cycle Life",
      body: "Our packs are rated for over 3,000 charge-",
      bodyExpanded:
        "Our packs are rated for over 3,000 charge-discharge cycles at 80% depth of discharge, delivering years of dependable service.",
      icon: "/assets/3000+cycle.svg",
      variant: "dark" as const,
    },
    {
      title: "Precision-Assembled in India",
      body: "Every battery is assembled, tested, and quality-",
      bodyExpanded:
        "Every battery is assembled, tested, and quality-checked in controlled conditions with traceable processes, so packs leave our line consistent, safe, and ready for demanding Indian operating environments.",
      icon: "/assets/precision.svg",
      variant: "accent" as const,
    },
    {
      title: "Intelligent BMS Integration",
      body: "Each pack ships with an advanced battery ",
      bodyExpanded:
        "Each pack ships with an advanced battery management system that monitors cell health, balances charging, and protects against over-current, over-temperature, and fault conditions in the field.",
      icon: "/assets/intelligent.png",
      variant: "accent" as const,
    },
    {
      title: "Scalable for Business",
      body: "From a single prototype pack to 1,000 units a ",
      bodyExpanded:
        "From a single prototype pack to 1,000 units a month, we scale production with repeatable assembly and testing so your roadmap stays on track as demand grows.",
      icon: "/assets/scalable.png",
      variant: "light" as const,
    },
    {
      title: "OEM & Channel Ready",
      body: "Whether you’re an EV manufacturer, an inverter ",
      bodyExpanded:
        "Whether you’re an EV manufacturer, an inverter brand going lithium, or a distributor building a new line, we support OEM programmes, labelling, and channel-friendly logistics.",
      icon: "/assets/oem.png",
      variant: "dark" as const,
    },
  ],
} as const

export const PRODUCTS = {
  eyebrow: "Our Products",
  title: "Powering the Future with ",
  cards: [
    {
      title: "2-Wheeler",
      body: "Compact, high-performance lithium batteries built for reliable urban mobility.",
    },
    {
      title: "3-Wheeler",
      body: "Purpose-built LFP batteries for durable 3-wheeler performance.",
    },
    {
      title: "Inverter / UPS",
      body: "Lightweight lithium inverter batteries with 3X life and zero maintenance.",
    },
    {
      title: "Solar",
      body: "Solar-optimised LFP packs for hybrid/off-grid systems, maximising energy storage.",
    },
    {
      title: "Telecom Batteries",
      body: "Reliable telecom backup, built for extremes with smart BMS.",
    },
    {
      title: "Energy Storage Systems (ESS)",
      body: "Modular energy storage systems designed for scalable commercial and grid-scale applications.",
    },
  ],
} as const

/**
 * Product carousel backgrounds — order matches {@link PRODUCTS}.cards
 * (`apps/web/public/assets/our_products`). Encoded for safe `url()` / src.
 */
export const PRODUCT_CARD_BACKGROUNDS = [
  `/assets/our_products/${encodeURIComponent("2-Wheeler.png")}`,
  `/assets/our_products/${encodeURIComponent("3-Wheeler.png")}`,
  `/assets/our_products/${encodeURIComponent("InverterUPS .png")}`,
  `/assets/our_products/${encodeURIComponent("solar.png")}`,
  `/assets/our_products/${encodeURIComponent("Telecom Batteries.png")}`,
  `/assets/our_products/${encodeURIComponent("(ESS).png")}`,
] as const

export const IMPACT = {
  eyebrow: "Impact & Sustainability",
  leftTitle: "Make a Difference for the Planet",
  words: ["Transformation", "Growth", "Opportunity"] as const,
  panels: [
    {
      title: "India’s Energy Shift",
      body: "India’s energy landscape is undergoing a major transformation, driven by policies like FAME-III and PLI incentives. Rising EV adoption and solar expansion are accelerating demand for reliable lithium-ion battery solutions across sectors.",
      image: "/assets/energy-storage.jpg",
    },
    {
      title: "Accelerating Clean Growth",
      body: "From two-wheelers to grid-scale storage, demand for LFP packs is scaling fast. Zenvara helps OEMs and distributors grow with dependable chemistry, predictable supply, and packs engineered for India’s operating conditions.",
      image: "/assets/expert1.jpg",
    },
    {
      title: "Opportunity Across Sectors",
      body: "Telecom backup, solar hybrids, inverter upgrades, and commercial ESS open new revenue lines for partners. We co-design solutions so businesses can capture opportunity in mobility and stationary storage alike.",
      image: "/assets/expert2.jpg",
    },
  ],
  right: {
    title: "India’s Energy Shift",
    body: "India’s energy landscape is undergoing a major transformation, driven by policies like FAME-III and PLI incentives. Rising EV adoption and solar expansion are accelerating demand for reliable lithium-ion battery solutions across sectors.",
  },
} as const

export const TESTIMONIAL = {
  eyebrow: "What Our Clients Say",
  title: "Real Experiences, Real Impact",
  quote:
    "“Zenvara delivers exactly what the market needs- safe, high-performance battery systems backed by strong engineering. The consistency in quality, attention to detail, and responsive support make them a reliable partner as we scale our operations.”",
  name: "Pankaj Sharma",
  role: "Industry",
} as const

/** Carousel slides (left copy + right image stay in sync). Order matches home layout. */
export const TESTIMONIAL_SLIDES = [
  {
    quote: TESTIMONIAL.quote,
    name: TESTIMONIAL.name,
    role: TESTIMONIAL.role,
    image: "/assets/testimonials.png",
    avatar: "/assets/expert1.jpg",
  },
  {
    quote:
      "Working with Zenvara cut our field issues and shortened our validation cycle. Their engineering team stayed in lockstep with our QA asks as we ramped volume.",
    name: "Priya Nair",
    role: "Operations",
    image: "/assets/expert2.jpg",
    avatar: "/assets/expert2.jpg",
  },
  {
    quote:
      "For our solar plus storage pilots, Zenvara packs held efficiency under summer rooftop loads. That stability gave our procurement a clear go-for-rollout signal.",
    name: "Rahul Verma",
    role: "Infrastructure",
    image: "/assets/energy-storage.jpg",
    avatar: "/assets/expert1.jpg",
  },
] as const

export const SUSTAINABILITY = {
  eyebrow: "Powered By Zenvara",
  title: "Sustainable Energy",
  pillars: [
    { title: "Reduced Emissions", body: "Supports electric mobility and clean energy with lower carbon impact.", icon: "/assets/Reduced.svg" },
    { title: "Future-Ready Systems", body: "Built to support solar, EVs, and next-gen energy infrastructure.", icon: "/assets/Future ready.svg" },
    { title: "Long Lifecycle", body: "3,000+ charge cycles reduce waste and replacement frequency.", icon: "/assets/Long life.svg" },
    { title: "Responsible Manufacturing", body: "Made in India with reduced logistics impact and controlled production.", icon: "/assets/Responsible.svg" },
    { title: "Cleaner Energy Storage", body: "Efficient lithium storage supports renewable integration and reduces grid dependence.", icon: "/assets/Cleaner energy.svg" },
  ],
} as const

/** Icon paths by pillar index for radial layout when CMS content has no `icon`. */
export const SUSTAINABILITY_PILLAR_ICONS_FALLBACK = [
  ...SUSTAINABILITY.pillars.map((pillar) => pillar.icon),
] as [string, string, string, string, string]

export const CTA = {
  title: "Let’s Build India’s Energy Future Together.",
  body: "Whether you’re an EV manufacturer scaling production, an inverter brand going lithium, or a distributor building a new product line — we’re ready to talk.",
  button: "Enquire Now",
} as const

export const BLOG = {
  eyebrow: "Latest Blog Posts",
  title: "Stay Ahead with Energy & Battery Innovations",
  posts: [
    {
      category: "Lithium vs. Lead-Acid",
      title: "The Total Cost of Ownership Comparison Every Inverter Buyer Should See ",
      image: "/assets/energy-storage.jpg",
    },
    {
      category: "Inside a Battery Pack:",
      title: "What Actually Goes Into Assembling an LFP Module",
      image: "/assets/expert1.jpg",
    },
    {
      category: "Why LFP Is Winning the Indian Battery Market",
      title: "And What It Means for Your Business",
      image: "/assets/expert2.jpg",
    },
  ],
} as const

export const FOOTER = {
  blurb:
    "Compact, lightweight lithium-ion packs designed for India’s fast-growing electric ",
  copyright: "Zenvara Energy Power Limited © 2026. Engineered Energy. Built for India.",
  quickLinks: ["Home", "About Us", "Products", "Blog", "Contact"],
  productLinks: [
    "2-Wheeler Batteries",
    "3- Wheeler Batteries",
    "Inverter/UPS Batteries",
    "Solar Batteries",
    "Telecom Batteries",
    "Energy Storage Systems",
  ],
  contact: {
    emailLabel: "Email Address",
    email: "info@zenvaraenergy.com",
    locationLabel: "Our Location",
    address: "123 Dummy Address, \nDelhi NCR ",
  },
  newsletter: "Stay updated with latest innovations and news.",
  legal: ["Privacy Policy ", "Terms & Conditions"],
} as const

export function countSections(): number {
  return 12
}
