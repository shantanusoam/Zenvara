"use client"

import { MapPin, Mail, Phone, Clock } from "lucide-react"
import type { ContactPageContent } from "@/lib/content-types"
import { DEFAULT_CONTACT_PAGE } from "@/lib/default-content"
import { AnimatedCtaButton } from "../layout/animated-cta-button"

type ContactFormSectionProps = {
  contactInfo?: ContactPageContent["contactInfo"]
  form?: ContactPageContent["form"]
}

export function ContactFormSection({
  contactInfo = DEFAULT_CONTACT_PAGE.contactInfo,
  form = DEFAULT_CONTACT_PAGE.form,
}: ContactFormSectionProps) {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">
      <div className="w-full lg:w-[40%] bg-[#0a1620] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-10 leading-tight">
            {contactInfo.headline}
            <br />
            <span className="text-[var(--zen-accent)]">{contactInfo.headlineAccent}</span>
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-[var(--zen-accent)] w-6 h-6 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                <p className="text-gray-300 text-sm md:text-base max-w-[250px]">
                  {contactInfo.location}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-[var(--zen-accent)] w-6 h-6 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 text-sm md:text-base hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[var(--zen-accent)] w-6 h-6 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone No.</h3>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-gray-300 text-sm md:text-base hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-[var(--zen-accent)] w-6 h-6 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                <p className="text-gray-300 text-sm md:text-base">{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[60%] bg-white p-8 md:p-12 rounded-3xl flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
          {form.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-medium text-[#0a1620] mb-8">{form.title}</h2>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={form.namePlaceholder}
              className="w-full bg-[#f4f4f5] px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--zen-accent)] outline-none text-[#0a1620] placeholder:text-gray-400"
              required
            />
            <input
              type="tel"
              placeholder={form.phonePlaceholder}
              className="w-full bg-[#f4f4f5] px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--zen-accent)] outline-none text-[#0a1620] placeholder:text-gray-400"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder={form.emailPlaceholder}
              className="w-full bg-[#f4f4f5] px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--zen-accent)] outline-none text-[#0a1620] placeholder:text-gray-400"
              required
            />
            <input
              type="text"
              placeholder={form.businessPlaceholder}
              className="w-full bg-[#f4f4f5] px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--zen-accent)] outline-none text-[#0a1620] placeholder:text-gray-400"
            />
          </div>

          <textarea
            placeholder={form.messagePlaceholder}
            rows={5}
            className="w-full bg-[#f4f4f5] px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--zen-accent)] outline-none text-[#0a1620] placeholder:text-gray-400 resize-none"
            required
          ></textarea>

          <div className="mt-4">
            <AnimatedCtaButton href="contact">{form.submitLabel}</AnimatedCtaButton>
          </div>
        </form>
      </div>
    </section>
  )
}
