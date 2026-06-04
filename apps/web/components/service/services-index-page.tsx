import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeaderBar } from "@/components/layout/site-header-bar"
import { SiteFooter } from "@/components/layout/site-footer"
import { Reveal } from "@/components/home/reveal"
import type { HomePageContent, ServiceContent, SiteSettingsContent } from "@/lib/content-types"

type ServicesIndexPageProps = {
  services: ServiceContent[]
  siteSettings: SiteSettingsContent
  homeContent: HomePageContent
}

export function ServicesIndexPage({
  services,
  siteSettings,
  homeContent,
}: ServicesIndexPageProps) {
  return (
    <div className="zenvara-page bg-white font-[family-name:var(--font-open-sans)] text-[#0a0a0a] [--zen-accent:#1bddce] [&_h2]:font-[family-name:var(--font-inter)]">
      <header className="bg-[#0a1620] pb-16 pt-6 text-white md:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SiteHeaderBar
            active="Products"
            ctaLabel={homeContent.hero.secondaryCta}
            ctaHref="/contact"
            siteSettings={siteSettings}
            services={services}
          />
          <Reveal className="mt-16 max-w-3xl">
            <p className="font-semibold text-[var(--zen-accent)]">Our Products</p>
            <h1 className="mt-4 text-5xl font-medium leading-tight md:text-[56px]">
              Energy solutions for every application
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Explore Zenvara&apos;s lithium battery packs for mobility, backup,
              telecom, solar, and grid-scale storage.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <Link
                href={`/service/${service.slug}`}
                className="group block overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-[#0b1f2a] text-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={service.cardImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1f2a] via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                  <p className="mt-2 text-base text-white/85">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-semibold text-[var(--zen-accent)]">
                    View details
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter siteSettings={siteSettings} services={services} />
    </div>
  )
}
