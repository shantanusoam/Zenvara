import { ZenvaraBodySections } from "./zenvara-body-sections"
import { ZenvaraHeaderHero } from "./zenvara-header-hero"
import { ZenvaraLowerSections } from "./zenvara-lower-sections"
import { ScrollProgress } from "./scroll-progress"

export function ZenvaraHome() {
  return (
    <div className="zenvara-page bg-white font-[family-name:var(--font-open-sans)] text-[#0a0a0a] [--zen-accent:#1bddce] [&_h2]:font-[family-name:var(--font-inter)] [&_h3]:font-[family-name:var(--font-inter)]">
      <ScrollProgress />
      <ZenvaraHeaderHero />
      <ZenvaraBodySections />
      <ZenvaraLowerSections />
    </div>
  )
}
