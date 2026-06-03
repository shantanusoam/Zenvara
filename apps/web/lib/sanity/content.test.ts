import { describe, expect, it } from "vitest"
import type { HomePageContent, ServiceContent } from "@/lib/content-types"
import {
  DEFAULT_ABOUT_PAGE,
  DEFAULT_CONTACT_PAGE,
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "@/lib/default-content"
import { DEFAULT_SERVICES } from "@/lib/services-content"
import {
  resolveAboutPageContent,
  resolveContactPageContent,
  resolveHomePageContent,
  resolveServiceContent,
  resolveServicesList,
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

  it("merges impact panels and blog images from CMS", () => {
    const content = resolveHomePageContent({
      impact: {
        panels: [{ title: "Panel", body: "Body", image: "https://cdn.test/panel.jpg" }],
      },
      blog: {
        posts: [{ category: "Cat", title: "Post", image: "https://cdn.test/blog.jpg" }],
      },
    } as Partial<HomePageContent>)

    expect(content.impact.panels?.[0]?.image).toBe("https://cdn.test/panel.jpg")
    expect(content.blog.posts[0]?.image).toBe("https://cdn.test/blog.jpg")
  })

  it("maps about page CMS image fields onto images", () => {
    const content = resolveAboutPageContent({
      hero: { title: "About", backgroundImage: "https://cdn.test/hero.jpg" },
      intro: {
        eyebrow: "Eyebrow",
        title: "Title",
        title2: "Energy",
        title3: "Shift",
        body: "Body",
        cta: "CTA",
        sideImage: "https://cdn.test/side.jpg",
      },
      wideImage: "https://cdn.test/wide.jpg",
    })

    expect(content.images.heroBackground).toBe("https://cdn.test/hero.jpg")
    expect(content.images.sideImage).toBe("https://cdn.test/side.jpg")
    expect(content.images.wideImage).toBe("https://cdn.test/wide.jpg")
    expect(content.intro.title2).toBe("Energy")
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

  it("resolves contact page content with hero background", () => {
    const content = resolveContactPageContent({
      hero: {
        title: "Reach us",
        backgroundImage: "https://cdn.test/contact-hero.jpg",
      },
    })

    expect(content.hero.title).toBe("Reach us")
    expect(content.hero.backgroundImage).toBe("https://cdn.test/contact-hero.jpg")
  })

  it("falls back to local content when Sanity returns no document", () => {
    expect(resolveAboutPageContent(null)).toEqual(DEFAULT_ABOUT_PAGE)
    expect(resolveHomePageContent(undefined)).toEqual(DEFAULT_HOME_PAGE)
    expect(resolveSiteSettingsContent(null)).toEqual(DEFAULT_SITE_SETTINGS)
    expect(resolveContactPageContent(null)).toEqual(DEFAULT_CONTACT_PAGE)
  })

  it("keeps an empty CMS services list empty", () => {
    expect(resolveServicesList([])).toEqual([])
  })

  it("can resolve CMS-only service slugs", () => {
    const fallback = DEFAULT_SERVICES[0]!
    const service = resolveServiceContent(
      {
        slug: "industrial-storage",
        title: "Industrial Storage",
        shortDescription: "High-density storage for industrial sites.",
        sortOrder: 12,
      },
      fallback
    )

    expect(service.slug).toBe("industrial-storage")
    expect(service.title).toBe("Industrial Storage")
    expect(service.shortDescription).toBe(
      "High-density storage for industrial sites."
    )
  })

  it("sorts and resolves CMS service lists without requiring default slugs", () => {
    const services = resolveServicesList([
      {
        slug: "z-service",
        title: "Z Service",
        shortDescription: "Second service.",
        sortOrder: 2,
      },
      {
        slug: "a-service",
        title: "A Service",
        shortDescription: "First service.",
        sortOrder: 1,
      },
    ] satisfies Partial<ServiceContent>[])

    expect(services.map((service) => service.slug)).toEqual([
      "a-service",
      "z-service",
    ])
  })
})
