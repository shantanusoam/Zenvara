import { existsSync } from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"

function resolvePublicPath(relativePath: string): string {
  const decoded = decodeURIComponent(relativePath.replace(/^\//, ""))
  return path.join(process.cwd(), "public", decoded)
}

describe("seed public asset paths", () => {
  it("resolves encoded public paths for local assets", () => {
    const resolved = resolvePublicPath(
      "/assets/home%20page/16339529_26_Ecology_concept%201.png"
    )
    expect(resolved).toContain("public/assets/home page/")
    expect(existsSync(resolved)).toBe(true)
  })

  it("resolves standard hero image path", () => {
    const resolved = resolvePublicPath("/assets/about_us.png")
    expect(existsSync(resolved)).toBe(true)
  })
})
