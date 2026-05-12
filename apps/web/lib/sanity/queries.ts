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
    hero{headline, primaryCta, secondaryCta, videoNote},
    whoWeAre{eyebrow, title, body, cta},
    missionVision{
      mission{title, body},
      vision{title, body}
    },
    statStrip{
      headline,
      stats[]{value, caption},
      sidebar[]{big, label}
    },
    whyZenvara{
      eyebrow,
      title,
      features[]{title, body, variant}
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
      right{title, body}
    },
    testimonial{eyebrow, title, quote, name, role},
    sustainability{
      eyebrow,
      title,
      pillars[]{title, body}
    },
    cta{title, body, button},
    blog{
      eyebrow,
      title,
      posts[]{category, title}
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

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]{
    hero{title},
    intro{eyebrow, title, body, cta},
    "images": {
      "heroBackground": hero.backgroundImage.asset->url,
      "sideImage": intro.sideImage.asset->url,
      "wideImage": wideImage.asset->url
    },
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
