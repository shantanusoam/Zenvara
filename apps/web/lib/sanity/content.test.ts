import { describe, expect, it } from "vitest"
import {
  DEFAULT_ABOUT_PAGE,
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "@/lib/default-content"
import {
  resolveAboutPageContent,
  resolveHomePageContent,
  resolveSiteSettingsContent,
} from "./content"

describe("sanity content resolvers", () => {
  it("uses CMS page fields when they are provided", () => {
    const content = resolveHomePageContent({
      hero: {
        headline: "CMS headline",
        primaryCta: "Explore",
        secondaryCta: "Contact",
        videoNote: "CMS video note",
      },
    })

    expect(content.hero.headline).toBe("CMS headline")
    expect(content.hero.primaryCta).toBe("Explore")
  })

  it("keeps default arrays when CMS arrays are empty", () => {
    const content = resolveHomePageContent({
      products: {
        eyebrow: "Products",
        title: "CMS products",
        cards: [],
      },
    })

    expect(content.products.title).toBe("CMS products")
    expect(content.products.cards).toHaveLength(
      DEFAULT_HOME_PAGE.products.cards.length
    )
  })

  it("falls back to local content when Sanity returns no document", () => {
    expect(resolveAboutPageContent(null)).toEqual(DEFAULT_ABOUT_PAGE)
    expect(resolveHomePageContent(undefined)).toEqual(DEFAULT_HOME_PAGE)
    expect(resolveSiteSettingsContent(null)).toEqual(DEFAULT_SITE_SETTINGS)
  })
})
