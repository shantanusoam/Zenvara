import { groq } from "next-sanity"

const seoProjection = groq`
  metaTitle,
  metaDescription,
  "ogImage": ogImage.asset->url,
  canonicalUrl,
  noIndex
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    name,
    tagline,
    nav[]{label, href},
    footer{
      blurb,
      copyright,
      quickLinks,
      productLinks,
      contact{emailLabel, email, locationLabel, address},
      newsletter,
      legal
    },
    seo{${seoProjection}}
  }
`

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    hero{tagline, headline, primaryCta, secondaryCta, videoNote},
    whoWeAre{eyebrow, title, body, cta},
    missionVision{
      mission{title, body},
      vision{title, body}
    },
    statStrip{
      headline,
      headline2,
      stats[]{value, caption},
      sidebar[]{big, label}
    },
    whyZenvara{
      eyebrow,
      title,
      features[]{title, body, bodyExpanded, variant, "icon": icon.asset->url}
    },
    products{
      eyebrow,
      title,
      cards[]{title, body}
    },
    impact{
      eyebrow,
      leftTitle,
      words,
      right{title, body},
      panels[]{
        title,
        body,
        "image": image.asset->url
      }
    },
    showTestimonial,
    testimonial{eyebrow, title, quote, name, role},
    testimonialSlides[]{quote, name, role, image, avatar},
    sustainability{
      eyebrow,
      title,
      pillars[]{
        title,
        body,
        "icon": icon.asset->url
      }
    },
    cta{title, body, button},
    blog{
      eyebrow,
      title,
      posts[]{
        category,
        title,
        "image": image.asset->url
      }
    },
    "images": {
      "heroImage": images.heroImage.asset->url,
      "aboutImage": images.aboutImage.asset->url,
      "productBackgrounds": images.productBackgrounds[].asset->url,
      "impactImage": images.impactImage.asset->url,
      "testimonialImage": images.testimonialImage.asset->url,
      "sustainabilityImage": images.sustainabilityImage.asset->url
    },
    seo{${seoProjection}}
  }
`

const serviceProjection = groq`
  "slug": slug.current,
  title,
  shortDescription,
  sortOrder,
  "cardImage": cardImage.asset->url,
  hero{
    eyebrow,
    title,
    description,
    primaryCta,
    secondaryCta,
    "image": image.asset->url
  },
  intro{
    eyebrow,
    title,
    description,
    "image": image.asset->url
  },
  specs{
    eyebrow,
    title,
    specs[]{label, value}
  },
  faqs{
    eyebrow,
    title,
    faqs[]{question, answer}
  },
  cta{title, subtitle, button},
  seo{${seoProjection}}
`

export const servicesQuery = groq`
  *[_type == "service"] | order(sortOrder asc, title asc) {
    ${serviceProjection}
  }
`

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    ${serviceProjection}
  }
`

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]{
    hero{
      title,
      "backgroundImage": backgroundImage.asset->url
    },
    intro{
      eyebrow,
      title,
      title2,
      title3,
      body,
      cta,
      "sideImage": sideImage.asset->url
    },
    "wideImage": wideImage.asset->url,
    stats{
      headline,
      stats[]{value, caption}
    },
    team{
      eyebrow,
      title,
      members[]{
        name,
        role,
        "image": image.asset->url,
        socials[]{kind, href}
      }
    },
    seo{${seoProjection}}
  }
`

export const contactPageQuery = groq`
  *[_type == "contactPage"][0]{
    hero{
      title,
      "backgroundImage": backgroundImage.asset->url
    },
    contactInfo{
      headline,
      headlineAccent,
      location,
      email,
      phone,
      hours
    },
    form{
      eyebrow,
      title,
      namePlaceholder,
      phonePlaceholder,
      emailPlaceholder,
      businessPlaceholder,
      messagePlaceholder,
      submitLabel
    },
    mapEmbedUrl,
    seo{${seoProjection}}
  }
`
