"use client"

import dynamic from "next/dynamic"

import { StudioSetup } from "@/components/studio/studio-setup"
import { isSanityConfigured } from "@/lib/sanity/env"

const StudioInner = dynamic(() => import("./studio-inner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-screen items-center justify-center bg-[#101112] text-sm text-white/70">
      Loading Zenvara CMS…
    </div>
  ),
})

export function StudioClient() {
  if (!isSanityConfigured) {
    return <StudioSetup />
  }

  return <StudioInner />
}
