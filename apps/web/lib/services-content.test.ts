import { describe, expect, it } from "vitest"
import { DEFAULT_SERVICES } from "./services-content"

describe("services-content specs display", () => {
  it("uses a table for 2-wheeler and 3-wheeler products", () => {
    const twoWheeler = DEFAULT_SERVICES.find((s) => s.slug === "2-wheeler")
    const threeWheeler = DEFAULT_SERVICES.find((s) => s.slug === "3-wheeler")

    expect(twoWheeler?.specs.display).toBe("table")
    expect(twoWheeler?.specs.tableRows).toHaveLength(4)
    expect(threeWheeler?.specs.display).toBe("table")
  })

  it("hides specs for ESS", () => {
    const ess = DEFAULT_SERVICES.find((s) => s.slug === "ess")
    expect(ess?.specs.display).toBe("hidden")
  })

  it("keeps metrics grid for inverter, solar, and telecom", () => {
    for (const slug of ["inverter-ups", "solar", "telecom-batteries"] as const) {
      const service = DEFAULT_SERVICES.find((s) => s.slug === slug)
      expect(service?.specs.display).toBe("metrics")
      expect(service?.specs.specs?.length).toBeGreaterThan(0)
    }
  })
})
