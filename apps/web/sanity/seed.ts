import { getCliClient } from "sanity/cli"
import {
  DEFAULT_ABOUT_PAGE,
  DEFAULT_CONTACT_PAGE,
  DEFAULT_HOME_PAGE,
  DEFAULT_SITE_SETTINGS,
} from "../lib/default-content"
import { DEFAULT_SERVICES } from "../lib/services-content"
import { uploadPublicImage } from "./seed-helpers"

const client = getCliClient()

type SeedDocument = {
  _id: string
  _type: string
  [key: string]: unknown
}

function cleanDocument(document: SeedDocument): SeedDocument {
  return JSON.parse(JSON.stringify(document)) as SeedDocument
}

async function buildHomePage(): Promise<SeedDocument> {
  const {
    hero,
    whoWeAre,
    missionVision,
    statStrip,
    whyZenvara,
    products,
    impact,
    showTestimonial,
    testimonial,
    testimonialSlides,
    sustainability,
    cta,
    blog,
    images,
    seo,
  } = DEFAULT_HOME_PAGE

  const productBackgrounds = await Promise.all(
    images.productBackgrounds.map((bg) => uploadPublicImage(client, bg))
  )

  const impactPanels = await Promise.all(
    (impact.panels ?? []).map(async (panel) => ({
      title: panel.title,
      body: panel.body,
      image: await uploadPublicImage(client, panel.image),
    }))
  )

  const blogPosts = await Promise.all(
    blog.posts.map(async (post) => ({
      category: post.category,
      title: post.title,
      image: await uploadPublicImage(client, post.image),
    }))
  )

  const sustainabilityPillars = await Promise.all(
    sustainability.pillars.map(async (pillar) => ({
      title: pillar.title,
      body: pillar.body,
      icon: await uploadPublicImage(client, pillar.icon),
    }))
  )

  return {
    _id: "homePage",
    _type: "homePage",
    hero,
    whoWeAre,
    missionVision,
    statStrip,
    whyZenvara,
    products,
    impact: {
      eyebrow: impact.eyebrow,
      leftTitle: impact.leftTitle,
      words: [...impact.words],
      right: impact.right,
      panels: impactPanels,
    },
    showTestimonial,
    testimonial,
    testimonialSlides: testimonialSlides.map((slide) => ({
      quote: slide.quote,
      name: slide.name,
      role: slide.role,
      image: slide.image,
      avatar: slide.avatar,
    })),
    sustainability: {
      eyebrow: sustainability.eyebrow,
      title: sustainability.title,
      pillars: sustainabilityPillars,
    },
    cta,
    blog: {
      eyebrow: blog.eyebrow,
      title: blog.title,
      posts: blogPosts,
    },
    images: {
      heroImage: await uploadPublicImage(client, images.heroImage),
      aboutImage: await uploadPublicImage(client, images.aboutImage),
      productBackgrounds: productBackgrounds.filter(Boolean),
      impactImage: await uploadPublicImage(client, images.impactImage),
      testimonialImage: await uploadPublicImage(client, images.testimonialImage),
      sustainabilityImage: await uploadPublicImage(
        client,
        images.sustainabilityImage
      ),
    },
    seo,
  }
}

async function buildAboutPage(): Promise<SeedDocument> {
  const { hero, intro, images, stats, team, seo } = DEFAULT_ABOUT_PAGE

  const members = await Promise.all(
    team.members.map(async (member) => ({
      name: member.name,
      role: member.role,
      image: await uploadPublicImage(client, member.image),
      socials: member.socials.map((social) => ({ ...social })),
    }))
  )

  return {
    _id: "aboutPage",
    _type: "aboutPage",
    hero: {
      title: hero.title,
      backgroundImage: await uploadPublicImage(client, images.heroBackground),
    },
    intro: {
      eyebrow: intro.eyebrow,
      title: intro.title,
      title2: intro.title2,
      title3: intro.title3,
      body: intro.body,
      cta: intro.cta,
      sideImage: await uploadPublicImage(client, images.sideImage),
    },
    wideImage: await uploadPublicImage(client, images.wideImage),
    stats,
    team: {
      eyebrow: team.eyebrow,
      title: team.title,
      members,
    },
    seo,
  }
}

async function buildContactPage(): Promise<SeedDocument> {
  const { hero, contactInfo, form, mapEmbedUrl, seo } = DEFAULT_CONTACT_PAGE

  return {
    _id: "contactPage",
    _type: "contactPage",
    hero: {
      title: hero.title,
      backgroundImage: await uploadPublicImage(client, hero.backgroundImage),
    },
    contactInfo,
    form,
    mapEmbedUrl,
    seo,
  }
}

async function buildServices(): Promise<SeedDocument[]> {
  return Promise.all(
    DEFAULT_SERVICES.map(async (service) => ({
      _id: `service-${service.slug}`,
      _type: "service",
      title: service.title.replace("\n", " "),
      slug: { _type: "slug", current: service.slug },
      sortOrder: service.sortOrder,
      shortDescription: service.shortDescription,
      cardImage: await uploadPublicImage(client, service.cardImage),
      hero: {
        eyebrow: service.hero.eyebrow,
        title: service.hero.title,
        description: service.hero.description,
        primaryCta: service.hero.primaryCta,
        secondaryCta: service.hero.secondaryCta,
        image: await uploadPublicImage(client, service.hero.image),
      },
      intro: {
        eyebrow: service.intro.eyebrow,
        title: service.intro.title,
        description: service.intro.description,
        image: await uploadPublicImage(client, service.intro.image),
      },
      specs: service.specs,
      faqs: service.faqs,
      cta: service.cta,
      seo: service.seo,
    }))
  )
}

const siteSettings: SeedDocument = {
  _id: "siteSettings",
  _type: "siteSettings",
  ...DEFAULT_SITE_SETTINGS,
}

const [homePage, aboutPage, contactPage, services] = await Promise.all([
  buildHomePage(),
  buildAboutPage(),
  buildContactPage(),
  buildServices(),
])

await Promise.all(
  [siteSettings, homePage, aboutPage, contactPage, ...services].map((document) =>
    client.createOrReplace(cleanDocument(document))
  )
)

console.log("Seeded Zenvara CMS content.")
