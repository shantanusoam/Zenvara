import { revalidatePath, revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

type SanityWebhookPayload = {
  _id?: string
  _type?: string
  slug?: string | { current?: string }
}

function payloadSlug(payload: SanityWebhookPayload): string | undefined {
  if (typeof payload.slug === "string") {
    return payload.slug
  }

  return payload.slug?.current
}

function revalidatePublicPages() {
  revalidatePath("/")
  revalidatePath("/about")
  revalidatePath("/contact")
  revalidatePath("/service")
}

function revalidateContentTag(tag: string) {
  revalidateTag(tag, "max")
}

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  const requestSecret =
    request.nextUrl.searchParams.get("secret") ??
    request.headers.get("x-sanity-revalidate-secret")

  if (!secret) {
    return NextResponse.json(
      { message: "Missing SANITY_REVALIDATE_SECRET" },
      { status: 500 }
    )
  }

  if (requestSecret !== secret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
  }

  let payload: SanityWebhookPayload = {}

  try {
    payload = (await request.json()) as SanityWebhookPayload
  } catch {
    payload = {}
  }

  const slug = payloadSlug(payload)

  switch (payload._type) {
    case "homePage":
      revalidateContentTag("homePage")
      revalidatePath("/")
      break
    case "service":
      revalidateContentTag("services")
      revalidatePath("/")
      revalidatePath("/service")
      if (slug) {
        revalidateContentTag(`service:${slug}`)
        revalidatePath(`/service/${slug}`)
      }
      break
    case "siteSettings":
      revalidateContentTag("siteSettings")
      revalidatePublicPages()
      break
    case "aboutPage":
      revalidateContentTag("aboutPage")
      revalidatePath("/about")
      break
    case "contactPage":
      revalidateContentTag("contactPage")
      revalidatePath("/contact")
      break
    default:
      revalidatePublicPages()
      revalidateContentTag("homePage")
      revalidateContentTag("services")
      revalidateContentTag("siteSettings")
  }

  return NextResponse.json({
    revalidated: true,
    type: payload._type ?? "unknown",
    slug: slug ?? null,
  })
}