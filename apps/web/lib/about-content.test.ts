import { describe, expect, it } from "vitest"
import {
  ABOUT_HERO,
  ABOUT_INTRO,
  ABOUT_STATS,
  TEAM,
  teamMemberCount,
  teamSocialKindsFor,
} from "./about-content"

describe("about-content", () => {
  it("defines hero title from Figma", () => {
    expect(ABOUT_HERO.title).toBe("About Us")
  })

  it("includes intro copy and CTA", () => {
    expect(ABOUT_INTRO.body).toContain("Delhi-NCR")
    expect(ABOUT_INTRO.cta).toBe("Our Services")
  })

  it("exposes three stat columns matching the home stats strip", () => {
    expect(ABOUT_STATS.stats).toHaveLength(3)
  })

  it("returns team size equal to member list length", () => {
    expect(teamMemberCount()).toBe(TEAM.members.length)
    expect(TEAM.members.length).toBeGreaterThanOrEqual(2)
  })

  it("lists four social slots per member for the Meet Our Team row", () => {
    for (const m of TEAM.members) {
      expect(teamSocialKindsFor(m)).toHaveLength(4)
    }
  })
})
