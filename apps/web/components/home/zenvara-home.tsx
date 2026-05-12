import { ZenvaraBodySections } from "./zenvara-body-sections"
import { ZenvaraHeaderHero } from "./zenvara-header-hero"
import { ZenvaraLowerSections } from "./zenvara-lower-sections"
import { ScrollProgress } from "./scroll-progress"
import { DEFAULT_HOME_PAGE, DEFAULT_SITE_SETTINGS } from "@/lib/default-content"
import type { HomePageContent, SiteSettingsContent } from "@/lib/content-types"

type ZenvaraHomeProps = {
  content?: HomePageContent
  siteSettings?: SiteSettingsContent
}

export function ZenvaraHome({
  content = DEFAULT_HOME_PAGE,
  siteSettings = DEFAULT_SITE_SETTINGS,
}: ZenvaraHomeProps) {
  return (
    <div className="zenvara-page bg-white font-[family-name:var(--font-open-sans)] text-[#0a0a0a] [--zen-accent:#1bddce] [&_h2]:font-[family-name:var(--font-inter)] [&_h3]:font-[family-name:var(--font-inter)]">
      <ScrollProgress />
      <ZenvaraHeaderHero
        hero={content.hero}
        heroImage={content.images.heroImage}
        siteSettings={siteSettings}
      />
      <ZenvaraBodySections />
      <ZenvaraLowerSections content={content} siteSettings={siteSettings} />
    </div>
  )
}
