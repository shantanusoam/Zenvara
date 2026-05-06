import { describe, expect, it } from "vitest"
import { BLOG, countSections, PRODUCTS, WHY_ZENVARA } from "./home-content"

describe("home-content", () => {
  it("exposes six feature cards for Why Zenvara", () => {
    expect(WHY_ZENVARA.features).toHaveLength(6)
    expect(WHY_ZENVARA.features[0]?.title).toBeTruthy()
  })

  it("lists at least five product categories and three blog cards", () => {
    expect(PRODUCTS.cards.length).toBeGreaterThanOrEqual(5)
    expect(BLOG.posts).toHaveLength(3)
  })

  it("returns a positive section count", () => {
    expect(countSections()).toBeGreaterThan(0)
  })

  it("throws no structural errors when every feature has a known variant", () => {
    const allowed = new Set(["accent", "dark", "light", "outline"])
    for (const f of WHY_ZENVARA.features) {
      expect(allowed.has(f.variant)).toBe(true)
    }
  })
})
