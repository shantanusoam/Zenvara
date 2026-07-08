"use client"

import { Reveal } from "@/components/home/reveal"
import { SectionLayout } from "@/components/layout/section-layout"
import type { ServiceContent } from "@/lib/content-types"

type TechnicalSpecsProps = {
  specs: ServiceContent["specs"]
}

const TABLE_COLUMNS = [
  { key: "batteryType" as const, label: "Battery type" },
  { key: "modelNo" as const, label: "Model No." },
  { key: "batteryCapacity" as const, label: "Battery Capacity" },
  { key: "range" as const, label: "Range" },
]

function resolveDisplay(specs: ServiceContent["specs"]) {
  if (specs.display === "hidden") return "hidden"
  if (specs.display === "table" || (specs.tableRows?.length ?? 0) > 0) {
    return "table"
  }
  return "metrics"
}

export function TechnicalSpecs({ specs }: TechnicalSpecsProps) {
  const display = resolveDisplay(specs)

  if (display === "hidden") {
    return null
  }

  return (
    <SectionLayout bgClass="bg-white" containerClass="flex flex-col gap-10">
      <Reveal>
        <p className="text-lg font-medium text-[#0b1f2a]">{specs.eyebrow}</p>
        <h2 className="mt-2 text-balance text-4xl font-medium text-[#0b1f2a] md:text-[48px] md:leading-[1.15]">
          {specs.title}
        </h2>
      </Reveal>

      {display === "table" ? (
        <Reveal delay={0.06}>
          <div className="overflow-x-auto rounded-2xl border border-[#e5e7eb] bg-[#f8f9fa]">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#e5e7eb] bg-white">
                  {TABLE_COLUMNS.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold text-[#0b1f2a] md:px-6 md:text-base"
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(specs.tableRows ?? []).map((row, i) => (
                  <tr
                    key={`${row.modelNo}-${i}`}
                    className="border-b border-[#e5e7eb] last:border-b-0"
                  >
                    {TABLE_COLUMNS.map((column) => (
                      <td
                        key={column.key}
                        className="px-5 py-4 text-sm text-[#0b1f2a] md:px-6 md:text-base"
                      >
                        {row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(specs.specs ?? []).map((row, i) => (
            <Reveal key={`${row.label}-${i}`} delay={i * 0.04}>
              <div className="rounded-2xl border border-[#e5e7eb] bg-[#f8f9fa] px-6 py-5">
                <p className="text-sm font-medium text-[#6b7280]">{row.label}</p>
                <p className="mt-2 text-lg font-semibold text-[#0b1f2a]">{row.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </SectionLayout>
  )
}
