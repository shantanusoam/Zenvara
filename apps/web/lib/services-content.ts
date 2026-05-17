import {
  PRODUCT_CARD_BACKGROUNDS,
  PRODUCTS,
} from "@/lib/home-content"
import {
  SERVICE_CTA,
  SERVICE_FAQS,
  SERVICE_HERO,
  SERVICE_INTRO,
  SERVICE_SPECS,
} from "@/lib/service-content"
import type { ServiceContent } from "@/lib/content-types"

const [, bg3w, bgInv, bgSolar, bgTelecom, bgEss] = PRODUCT_CARD_BACKGROUNDS

function cardFromProduct(
  index: number,
  slug: string,
  heroOverrides?: Partial<ServiceContent["hero"]>,
  introOverrides?: Partial<ServiceContent["intro"]>
): ServiceContent {
  const card = PRODUCTS.cards[index]!
  const cardImage = PRODUCT_CARD_BACKGROUNDS[index]!

  return {
    slug,
    title: card.title,
    shortDescription: card.body,
    cardImage,
    sortOrder: index,
    hero: {
      eyebrow: `${card.title} Battery Series`,
      title: card.title.replace(" / ", "\n"),
      description: card.body,
      primaryCta: SERVICE_HERO.primaryCta,
      secondaryCta: SERVICE_HERO.secondaryCta,
      image: cardImage,
      ...heroOverrides,
    },
    intro: {
      eyebrow: SERVICE_INTRO.eyebrow,
      title: SERVICE_INTRO.title,
      description: `${card.body}\n\n${SERVICE_INTRO.description.trim()}`,
      image: "/assets/about_us.png",
      ...introOverrides,
    },
    specs: {
      eyebrow: SERVICE_SPECS.eyebrow,
      title: SERVICE_SPECS.title,
      specs: [...SERVICE_SPECS.specs],
    },
    faqs: {
      eyebrow: SERVICE_FAQS.eyebrow,
      title: SERVICE_FAQS.title,
      faqs: SERVICE_FAQS.faqs.map((f) => ({ ...f })),
    },
    cta: { ...SERVICE_CTA },
    seo: {
      metaTitle: `${card.title} | Zenvara Energy`,
      metaDescription: card.body,
    },
  }
}

/** Default CMS fallbacks — order matches home product carousel. */
export const DEFAULT_SERVICES: ServiceContent[] = [
  cardFromProduct(0, "2-wheeler", {
    eyebrow: SERVICE_HERO.eyebrow,
    title: SERVICE_HERO.title,
    description: SERVICE_HERO.description,
    image: "/assets/scooter.jpg",
  }),
  cardFromProduct(1, "3-wheeler", { image: bg3w }),
  cardFromProduct(2, "inverter-ups", { image: bgInv }),
  cardFromProduct(3, "solar", { image: bgSolar }),
  cardFromProduct(4, "telecom-batteries", { image: bgTelecom }),
  cardFromProduct(5, "ess", {
    title: "Energy Storage\nSystems (ESS)",
    image: bgEss,
  }),
]

export function getDefaultServiceBySlug(slug: string): ServiceContent | undefined {
  return DEFAULT_SERVICES.find((s) => s.slug === slug)
}
