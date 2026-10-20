import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 640)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-5 bottom-5 z-40 flex size-11 items-center justify-center rounded-full border border-[#dbe5ef] bg-white/95 text-navy shadow-[0_16px_30px_-18px_rgba(7,33,73,0.45)] backdrop-blur transition-all duration-200 hover:border-[#b9cfe0] hover:text-link lg:right-8 lg:bottom-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp className="size-4" strokeWidth={2} />
    </button>
  )
}
