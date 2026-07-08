import { defineArrayMember, defineField, defineType } from "sanity"

const seoFields = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "canonicalUrl", title: "Canonical URL", type: "url" }),
    defineField({
      name: "noIndex",
      title: "Hide from search engines",
      type: "boolean",
      initialValue: false,
    }),
  ],
})

const statItem = defineType({
  name: "statItem",
  title: "Stat item",
  type: "object",
  fields: [
    defineField({
      name: "value",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
})

const missionVision = defineType({
  name: "missionVision",
  title: "Mission and vision",
  type: "object",
  fields: [
    defineField({
      name: "mission",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "body",
          type: "text",
          rows: 4,
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "vision",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "body",
          type: "text",
          rows: 4,
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
})

const teamSocial = defineType({
  name: "teamSocial",
  title: "Team social link",
  type: "object",
  fields: [
    defineField({
      name: "kind",
      type: "string",
      options: {
        list: [
          { title: "Instagram", value: "instagram" },
          { title: "Twitter/X", value: "twitter" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Facebook", value: "facebook" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
})

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Site name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "nav",
      title: "Navigation",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "href",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "footer",
      type: "object",
      fields: [
        defineField({ name: "blurb", type: "text", rows: 3 }),
        defineField({ name: "copyright", type: "string" }),
        defineField({
          name: "quickLinks",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "productLinks",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "contact",
          type: "object",
          fields: [
            defineField({ name: "emailLabel", type: "string" }),
            defineField({ name: "email", type: "email" }),
            defineField({ name: "locationLabel", type: "string" }),
            defineField({ name: "address", type: "text", rows: 3 }),
          ],
        }),
        defineField({ name: "newsletter", type: "string" }),
        defineField({
          name: "legal",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
})

const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({
          name: "tagline",
          title: "Hero tagline",
          type: "string",
        }),
        defineField({
          name: "headline",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "headline2",
          title: "Headline line 2",
          type: "string",
        }),
        defineField({
          name: "primaryCta",
          title: "Primary CTA",
          type: "string",
        }),
        defineField({
          name: "secondaryCta",
          title: "Header CTA",
          type: "string",
        }),
        defineField({ name: "videoNote", type: "string" }),
      ],
    }),
    defineField({
      name: "whoWeAre",
      title: "Who we are",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "body", type: "text", rows: 6 }),
        defineField({ name: "cta", title: "CTA", type: "string" }),
      ],
    }),
    defineField({ name: "missionVision", type: "missionVision" }),
    defineField({
      name: "statStrip",
      title: "Stats",
      type: "object",
      fields: [
        defineField({ name: "headline", type: "string" }),
        defineField({
          name: "headline2",
          title: "Accent headline",
          type: "string",
        }),
        defineField({
          name: "stats",
          type: "array",
          of: [defineArrayMember({ type: "statItem" })],
        }),
        defineField({
          name: "sidebar",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "big", type: "string" }),
                defineField({ name: "label", type: "string" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "whyZenvara",
      title: "Why Zenvara",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "features",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", type: "string" }),
                defineField({ name: "body", type: "text", rows: 3 }),
                defineField({
                  name: "bodyExpanded",
                  title: "Body (expanded on hover)",
                  type: "text",
                  rows: 5,
                }),
                defineField({
                  name: "icon",
                  title: "Icon",
                  type: "image",
                  description: "Square icon shown at the top of the card (SVG or PNG recommended).",
                  options: { hotspot: true },
                }),
                defineField({
                  name: "variant",
                  type: "string",
                  options: {
                    list: [
                      { title: "Accent", value: "accent" },
                      { title: "Dark", value: "dark" },
                      { title: "Light", value: "light" },
                      { title: "Outline", value: "outline" },
                    ],
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "products",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "cards",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", type: "string" }),
                defineField({ name: "body", type: "text", rows: 3 }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "impact",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "leftTitle", type: "string" }),
        defineField({
          name: "words",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "right",
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "body", type: "text", rows: 4 }),
          ],
        }),
        defineField({
          name: "panels",
          title: "Impact tab panels",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", type: "string" }),
                defineField({ name: "body", type: "text", rows: 4 }),
                defineField({
                  name: "image",
                  type: "image",
                  options: { hotspot: true },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "showTestimonial",
      title: "Show testimonial section",
      description:
        "When off, the client testimonial block is hidden on the home and about pages.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "testimonial",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "quote", type: "text", rows: 5 }),
        defineField({ name: "name", type: "string" }),
        defineField({ name: "role", type: "string" }),
      ],
    }),
    defineField({
      name: "testimonialSlides",
      title: "Testimonial carousel slides",
      description: "Optional. Each slide: quote, name, role, hero image URL, avatar URL.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "quote", type: "text", rows: 4 }),
            defineField({ name: "name", type: "string" }),
            defineField({ name: "role", type: "string" }),
            defineField({ name: "image", type: "string", title: "Hero image URL" }),
            defineField({
              name: "avatar",
              type: "string",
              title: "Avatar URL (optional)",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "sustainability",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "pillars",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", type: "string" }),
                defineField({ name: "body", type: "text", rows: 3 }),
                defineField({
                  name: "icon",
                  type: "image",
                  options: { hotspot: true },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "cta",
      title: "CTA strip",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
        defineField({ name: "button", type: "string" }),
      ],
    }),
    defineField({
      name: "blog",
      title: "Blog preview",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "posts",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "category", type: "string" }),
                defineField({ name: "title", type: "string" }),
                defineField({
                  name: "image",
                  type: "image",
                  options: { hotspot: true },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "images",
      type: "object",
      fields: [
        defineField({
          name: "heroImage",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "aboutImage",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "productBackgrounds",
          type: "array",
          of: [
            defineArrayMember({ type: "image", options: { hotspot: true } }),
          ],
        }),
        defineField({
          name: "impactImage",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "testimonialImage",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "sustainabilityImage",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
})

const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "backgroundImage",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "intro",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "title2", type: "string" }),
        defineField({ name: "title3", type: "string" }),
        defineField({ name: "body", type: "text", rows: 6 }),
        defineField({ name: "cta", title: "CTA", type: "string" }),
        defineField({
          name: "sideImage",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "wideImage",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "stats",
      type: "object",
      fields: [
        defineField({ name: "headline", type: "string" }),
        defineField({
          name: "stats",
          type: "array",
          of: [defineArrayMember({ type: "statItem" })],
        }),
      ],
    }),
    defineField({
      name: "team",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "members",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "name", type: "string" }),
                defineField({ name: "role", type: "string" }),
                defineField({
                  name: "image",
                  type: "image",
                  options: { hotspot: true },
                }),
                defineField({
                  name: "socials",
                  type: "array",
                  of: [defineArrayMember({ type: "teamSocial" })],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
})

const contactPage = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "backgroundImage",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "contactInfo",
      title: "Contact info panel",
      type: "object",
      fields: [
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "headlineAccent", type: "string" }),
        defineField({ name: "location", type: "text", rows: 2 }),
        defineField({ name: "email", type: "string" }),
        defineField({ name: "phone", type: "string" }),
        defineField({ name: "hours", type: "string" }),
      ],
    }),
    defineField({
      name: "form",
      title: "Contact form",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "namePlaceholder", type: "string" }),
        defineField({ name: "phonePlaceholder", type: "string" }),
        defineField({ name: "emailPlaceholder", type: "string" }),
        defineField({ name: "businessPlaceholder", type: "string" }),
        defineField({ name: "messagePlaceholder", type: "string" }),
        defineField({ name: "submitLabel", type: "string" }),
      ],
    }),
    defineField({ name: "mapEmbedUrl", title: "Google Maps embed URL", type: "url" }),
    defineField({ name: "seo", type: "seo" }),
  ],
})

const serviceSpecItem = defineType({
  name: "serviceSpecItem",
  title: "Specification row",
  type: "object",
  fields: [
    defineField({
      name: "label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "value",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
})

const serviceSpecTableRow = defineType({
  name: "serviceSpecTableRow",
  title: "Specification table row",
  type: "object",
  fields: [
    defineField({
      name: "batteryType",
      title: "Battery type",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "modelNo",
      title: "Model No.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "batteryCapacity",
      title: "Battery Capacity",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "range",
      title: "Range",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
})

const serviceFaqItem = defineType({
  name: "serviceFaqItem",
  title: "FAQ item",
  type: "object",
  fields: [
    defineField({
      name: "question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
})

const service = defineType({
  name: "service",
  title: "Service / Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order (home carousel)",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "shortDescription",
      title: "Short description (home card)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cardImage",
      title: "Card background image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "text", rows: 2 }),
        defineField({ name: "description", type: "text", rows: 4 }),
        defineField({ name: "primaryCta", type: "string" }),
        defineField({ name: "secondaryCta", type: "string" }),
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "intro",
      title: "Product overview",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 8 }),
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "specs",
      title: "Technical specifications",
      type: "object",
      fields: [
        defineField({
          name: "display",
          title: "Display mode",
          type: "string",
          options: {
            list: [
              { title: "Metrics grid", value: "metrics" },
              { title: "Table", value: "table" },
              { title: "Hidden", value: "hidden" },
            ],
            layout: "radio",
          },
          initialValue: "metrics",
        }),
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "specs",
          title: "Metrics",
          type: "array",
          of: [defineArrayMember({ type: "serviceSpecItem" })],
          hidden: ({ parent }) => parent?.display === "hidden" || parent?.display === "table",
        }),
        defineField({
          name: "tableRows",
          title: "Table rows",
          type: "array",
          of: [defineArrayMember({ type: "serviceSpecTableRow" })],
          hidden: ({ parent }) => parent?.display !== "table",
        }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "faqs",
          type: "array",
          of: [defineArrayMember({ type: "serviceFaqItem" })],
        }),
      ],
    }),
    defineField({
      name: "cta",
      title: "Bottom CTA",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "subtitle", type: "text", rows: 2 }),
        defineField({ name: "button", type: "string" }),
      ],
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: {
    select: { title: "title", subtitle: "shortDescription" },
  },
})

const blogPost = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({
      name: "coverImage",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({
      name: "body",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
})

export const schemaTypes = [
  seoFields,
  statItem,
  missionVision,
  teamSocial,
  serviceSpecItem,
  serviceSpecTableRow,
  serviceFaqItem,
  siteSettings,
  homePage,
  aboutPage,
  contactPage,
  service,
  blogPost,
]
