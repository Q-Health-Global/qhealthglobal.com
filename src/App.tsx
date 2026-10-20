import { Suspense, lazy, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import { BackToTop } from "@/components/layout/back-to-top"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { HomePage } from "@/pages/home"

const AboutPage = lazy(() =>
  import("@/pages/about").then((module) => ({ default: module.AboutPage }))
)
const SolutionsPage = lazy(() =>
  import("@/pages/solutions").then((module) => ({ default: module.SolutionsPage }))
)
const TechnologyPage = lazy(() =>
  import("@/pages/technology").then((module) => ({ default: module.TechnologyPage }))
)
const ImpactPage = lazy(() =>
  import("@/pages/impact").then((module) => ({ default: module.ImpactPage }))
)
const TeamPage = lazy(() =>
  import("@/pages/team").then((module) => ({ default: module.TeamPage }))
)
const ContactPage = lazy(() =>
  import("@/pages/contact").then((module) => ({ default: module.ContactPage }))
)
const PrivacyPage = lazy(() =>
  import("@/pages/privacy").then((module) => ({ default: module.PrivacyPage }))
)
const TermsPage = lazy(() =>
  import("@/pages/terms").then((module) => ({ default: module.TermsPage }))
)
const NotFoundPage = lazy(() =>
  import("@/pages/not-found").then((module) => ({ default: module.NotFoundPage }))
)

/** Resets scroll on route changes and honours in-page anchors. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }

    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = "auto"
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previous
  }, [pathname, hash])

  return null
}

function RouteFallback() {
  return (
    <div className="flex min-h-[55vh] items-center justify-center" role="status" aria-live="polite">
      <span className="sr-only">Loading page</span>
      <span className="h-1 w-24 animate-pulse rounded-full bg-[#d7e5f0]" aria-hidden="true" />
    </div>
  )
}

function PageRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#fcfdfe]">
      <SiteHeader />
      <ScrollManager />
      <main id="main" className="flex-1">
        <PageRoutes />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  )
}

export default App
