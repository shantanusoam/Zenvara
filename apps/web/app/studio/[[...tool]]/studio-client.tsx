"use client"

import dynamic from "next/dynamic"

const StudioInner = dynamic(() => import("./studio-inner"), {
  ssr: false,
  loading: () => null,
})

export function StudioClient() {
  return <StudioInner />
}
