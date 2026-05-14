/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 *
 * Studio must render only inside a Client Component: importing `sanity.config` in a Server
 * Component runs Sanity/Vite code during SSR and throws `ReferenceError: window is not defined`.
 */

import { StudioClient } from "./studio-client"

export const dynamic = "force-dynamic"

export { metadata, viewport } from "next-sanity/studio"

export default function StudioPage() {
  return <StudioClient />
}
