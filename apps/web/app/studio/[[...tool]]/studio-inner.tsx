"use client"

import config from "@/sanity.config"
import { NextStudio } from "next-sanity/studio/client-component"

export default function StudioInner() {
  return <NextStudio config={config} />
}
