import { PageMeta } from "@/components/page-meta"
import { HeroBlob } from "@/components/decor/hero-blob"
import { HeroSection } from "@/components/sections/hero-section"
import { SolutionsSection } from "@/components/sections/solutions-section"

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Q-Health Technologies | Decision Intelligence for Healthcare"
        description="Q-Health Technologies combines quantum computing, AI and healthcare analytics to help institutions make better decisions under uncertainty."
        path="/"
      />
      <div className="relative">
        <HeroBlob />
        <HeroSection />
        <SolutionsSection />
      </div>
    </>
  )
}
