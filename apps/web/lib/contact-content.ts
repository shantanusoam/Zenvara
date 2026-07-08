import type { ContactPageContent } from "./content-types"

export const CONTACT_PAGE = {
  hero: {
    title: "Contact Us",
    backgroundImage: "/assets/contact-us-banner.jpg",
  },
  contactInfo: {
    headline: "Get in Touch with",
    headlineAccent: "Zenvara Energy",
    location: "JU/901 Supertech, Sample Address",
    email: "info@zenvaraenergy.com",
    phone: "+91 98765 43210",
  },
  form: {
    eyebrow: "Contact Our Team",
    title: "Send Us a Message",
    namePlaceholder: "Name",
    phonePlaceholder: "Phone No.",
    emailPlaceholder: "Email",
    businessPlaceholder: "Business",
    messagePlaceholder: "Message",
    submitLabel: "Send Message",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112002.34380729709!2d77.12648785820311!3d28.6859345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1708513388720!5m2!1sen!2sin",
  seo: {
    metaTitle: "Contact Us | Zenvara",
    metaDescription:
      "Get in touch with Zenvara Energy for inquiries, support, and business opportunities.",
  },
} satisfies ContactPageContent
