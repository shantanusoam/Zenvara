"use client"

import { MapPin, Mail, Phone, Clock } from "lucide-react"
import { FiArrowRight } from "react-icons/fi"
import { AnimatedCtaButton } from "../layout/animated-cta-button"

export function ContactFormSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">
      {/* Left Column: Contact Info */}
      <div className="w-full lg:w-[40%] bg-[#0a1620] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-10 leading-tight">
            Get in Touch with
            <br />
            <span className="text-[var(--zen-accent)]">Zenvara Energy</span>
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-[var(--zen-accent)] w-6 h-6 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                <p className="text-gray-300 text-sm md:text-base max-w-[250px]">
                  JU/901 Supertech, Sample Address
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-[var(--zen-accent)] w-6 h-6 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a href="mailto:info@zenvaraenergy.com" className="text-gray-300 text-sm md:text-base hover:text-white transition-colors">
                  info@zenvaraenergy.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[var(--zen-accent)] w-6 h-6 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone No.</h3>
                <a href="tel:+919876543210" className="text-gray-300 text-sm md:text-base hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-[var(--zen-accent)] w-6 h-6 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Mon-Sat 10am-7pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="w-full lg:w-[60%] bg-white p-8 md:p-12 rounded-3xl flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
          Contact Our Team
        </p>
        <h2 className="text-3xl md:text-5xl font-medium text-[#0a1620] mb-8">
          Send Us a Message
        </h2>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-[#f4f4f5] px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--zen-accent)] outline-none text-[#0a1620] placeholder:text-gray-400"
              required
            />
            <input
              type="tel"
              placeholder="Phone No."
              className="w-full bg-[#f4f4f5] px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--zen-accent)] outline-none text-[#0a1620] placeholder:text-gray-400"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#f4f4f5] px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--zen-accent)] outline-none text-[#0a1620] placeholder:text-gray-400"
              required
            />
            <input
              type="text"
              placeholder="Business"
              className="w-full bg-[#f4f4f5] px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--zen-accent)] outline-none text-[#0a1620] placeholder:text-gray-400"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full bg-[#f4f4f5] px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-[var(--zen-accent)] outline-none text-[#0a1620] placeholder:text-gray-400 resize-none"
            required
          ></textarea>

          <div className="mt-4">
            <AnimatedCtaButton
              href={'#contact'}
            >
              Send Message
              </AnimatedCtaButton>
         
          </div>
        </form>
      </div>
    </section>
  )
}
