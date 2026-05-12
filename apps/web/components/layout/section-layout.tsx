import { ReactNode } from "react"

interface SectionLayoutProps {
  children: ReactNode
  id?: string
  bgClass?: string
  className?: string
  containerClass?: string
}

export function SectionLayout({
  children,
  id,
  bgClass = "bg-white",
  className = "",
  containerClass = "",
}: SectionLayoutProps) {
  return (
    <section id={id} className={`py-4 md:py-8 ${bgClass} ${className}`}>
      <div className={`mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 ${containerClass}`}>
        {children}
      </div>
    </section>
  )
}
