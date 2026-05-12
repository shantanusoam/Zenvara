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
          name: "headline",
          type: "string",
          validation: (rule) => rule.required(),
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
      ],
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
  siteSettings,
  homePage,
  aboutPage,
  blogPost,
]
