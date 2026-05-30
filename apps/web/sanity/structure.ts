import type { StructureResolver } from "sanity/desk"

const singletonTypes = new Set(["siteSettings", "homePage", "aboutPage"])

const singletonItems = [
  { title: "Site settings", schemaType: "siteSettings", documentId: "siteSettings" },
  { title: "Home page", schemaType: "homePage", documentId: "homePage" },
  { title: "About page", schemaType: "aboutPage", documentId: "aboutPage" },
] as const

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Zenvara content")
    .items([
      S.listItem()
        .title("Site")
        .child(
          S.list()
            .title("Site")
            .items(
              singletonItems.map(({ title, schemaType, documentId }) =>
                S.listItem()
                  .title(title)
                  .id(documentId)
                  .child(
                    S.document().schemaType(schemaType).documentId(documentId)
                  )
              )
            )
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !singletonTypes.has(item.getId() ?? "")
      ),
    ])
