export const SERVICE_HERO = {
  eyebrow: "2-Wheeler Battery Series",
  title: "2-Wheeler\nLithium Batteries",
  description:
    "Compact, high-performance LFP battery packs built for reliable urban mobility.",
  primaryCta: "Request Quote",
  secondaryCta: "Download Datasheet",
} as const

export const SERVICE_INTRO = {
  eyebrow: "Product Overview",
  title: "Built for Performance & Reliability",
  description:
    `Our 2-Wheeler lithium battery packs are engineered for the demands of urban mobility. Featuring advanced LFP chemistry, these batteries deliver exceptional cycle life, rapid charging capabilities, and consistent performance across varied conditions. 
    
    Designed with reliability at the core, each pack undergoes rigorous testing to ensure it meets the highest safety and performance standards. Whether for passenger vehicles, cargo loaders, or fleet operations, our batteries provide the power you can trust.`,
} as const

export const SERVICE_SPECS = {
  display: "metrics" as const,
  eyebrow: "Technical Specifications",
  title: "Detailed Performance Metrics",
  specs: [
    { label: "Voltage", value: "48V / 60" },
    { label: "Chemistry", value: "LFP (Lithium Iron Phosphate)" },
    { label: "Cycle Life", value: "3000+ Cycles" },
    { label: "Charging Time", value: "2-3 Hours (Fast Charge)" },
    { label: "Capacity", value: "30-60 Ah" },
    { label: "BMS", value: "Smart Integrated BMS" },
    { label: "Operating Temperature", value: "20°C to 60°C" },
    { label: "Weight", value: "Weight12-18 kg" },
    { label: "Dimension", value: "Custom Configurations" },
    { label: "Certification", value: "CE, UN38.3, ROHS" },
  ],
} as const

export const SERVICE_SPEC_TABLE_ROWS = [
  {
    batteryType: "LFP",
    modelNo: "ZV-2W-48-30",
    batteryCapacity: "30 Ah",
    range: "60–80 km",
  },
  {
    batteryType: "LFP",
    modelNo: "ZV-2W-48-40",
    batteryCapacity: "40 Ah",
    range: "80–100 km",
  },
  {
    batteryType: "LFP",
    modelNo: "ZV-2W-60-45",
    batteryCapacity: "45 Ah",
    range: "90–110 km",
  },
  {
    batteryType: "LFP",
    modelNo: "ZV-2W-60-55",
    batteryCapacity: "55 Ah",
    range: "110–130 km",
  },
] as const

export const SERVICE_FAQS = {
  eyebrow: "FAQ's",
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "What is the cycle life of zenvara batteries ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Et scelerisque sed orci ultricies vulputate. Purus tellus faucibus dignissim proin fusce pretium mattis. Sodales ultrices lacus libero consequat condimentum ut. Consectetur donec faucibus risus.",
    },
    {
      question: "What is the cycle life of zenvara batteries ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "What is the cycle life of zenvara batteries ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "What is the cycle life of zenvara batteries ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "What is the cycle life of zenvara batteries ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
  ],
} as const

export const SERVICE_CTA = {
  title: "Ready to Power Your Fleet?",
  subtitle: "Get in touch with our team to discuss your requirements",
  button: "Enquire Now",
} as const
