import { createReadStream, existsSync } from "node:fs"
import path from "node:path"
import { getCliClient } from "sanity/cli"

type SeedClient = ReturnType<typeof getCliClient>

export type SanityImageField = {
  _type: "image"
  asset: {
    _type: "reference"
    _ref: string
  }
}

const uploadCache = new Map<string, SanityImageField | null>()

function resolvePublicPath(relativePath: string): string {
  const decoded = decodeURIComponent(relativePath.replace(/^\//, ""))
  return path.join(process.cwd(), "public", decoded)
}

function guessContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase()
  switch (ext) {
    case ".png":
      return "image/png"
    case ".jpg":
    case ".jpeg":
      return "image/jpeg"
    case ".webp":
      return "image/webp"
    case ".svg":
      return "image/svg+xml"
    case ".gif":
      return "image/gif"
    default:
      return "application/octet-stream"
  }
}

export async function uploadPublicImage(
  client: SeedClient,
  relativePath: string | undefined
): Promise<SanityImageField | undefined> {
  if (!relativePath) {
    return undefined
  }

  const cacheKey = relativePath
  if (uploadCache.has(cacheKey)) {
    const cached = uploadCache.get(cacheKey)
    return cached ?? undefined
  }

  const filePath = resolvePublicPath(relativePath)
  if (!existsSync(filePath)) {
    console.warn(`Seed: missing public asset ${relativePath} (${filePath})`)
    uploadCache.set(cacheKey, null)
    return undefined
  }

  const filename = path.basename(filePath)
  const asset = await client.assets.upload("image", createReadStream(filePath), {
    filename,
    contentType: guessContentType(filePath),
  })

  const imageField: SanityImageField = {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  }

  uploadCache.set(cacheKey, imageField)
  return imageField
}

export function resetUploadCacheForTests() {
  uploadCache.clear()
}
