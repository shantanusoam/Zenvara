import { ReactNode } from "react"
import Image from "next/image"
import { Reveal } from "@/components/home/reveal"
import { AnimatedCtaButton } from "@/components/layout/animated-cta-button"

export type ImageTextSectionProps = {
  imageSrc: string
  imagePosition?: "left" | "right"
  eyebrow?: ReactNode
  title: ReactNode
  description: ReactNode
  ctaLabel?: string
  ctaHref?: string
  containerClass?: string
}

export function ImageTextSection({
  imageSrc,
  imagePosition = "left",
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  containerClass = "py-16 md:py-20",
}: ImageTextSectionProps) {
  const contentNode = (
    <Reveal>
      {eyebrow && <p className="text-lg font-medium text-[#0a0a0a]">{eyebrow}</p>}
      <div className="mt-2 text-balance text-4xl font-medium text-[#0b1f2a] md:text-[56px] md:leading-[1.12]">
        {title}
      </div>
      <div className="mt-6 whitespace-pre-line text-lg leading-relaxed text-[#0b1f2a]">
        {description}
      </div>
      {ctaLabel && ctaHref && (
        <div className="mt-8">
          <AnimatedCtaButton href={ctaHref}>{ctaLabel}</AnimatedCtaButton>
        </div>
      )}
    </Reveal>
  )

  const imageNode = (
    <Reveal className="relative h-[280px] w-full md:h-[499px]">
      <Image
        src={imageSrc}
        alt=""
        fill
        className="rounded-[20px] object-cover"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </Reveal>
  )

  return (
    <section className={`mx-auto max-w-[1440px] px-5 md:px-10 ${containerClass}`}>
      <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-14">
        {imagePosition === "left" ? (
          <>
            {imageNode}
            <div>{contentNode}</div>
          </>
        ) : (
          <>
            <div className="order-2 md:order-1">{contentNode}</div>
            <div className="order-1 md:order-2">{imageNode}</div>
          </>
        )}
      </div>
    </section>
  )
}
