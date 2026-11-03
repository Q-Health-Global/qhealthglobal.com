import { useEffect, useMemo, useRef, useState } from "react"
import { ArrowRight, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { cn } from "@/lib/utils"

type SearchEntry = {
  title: string
  description: string
  to: string
  group: string
}

const searchIndex: SearchEntry[] = [
  {
    title: "Home",
    description: "The decision intelligence engine for healthcare.",
    to: "/",
    group: "Page",
  },
  {
    title: "About Q-Health",
    description: "Who we are, our approach, focus areas, recognition and vision.",
    to: "/about",
    group: "Page",
  },
  {
    title: "Our Solutions",
    description: "Decision support for hospital operations and precision oncology.",
    to: "/solutions",
    group: "Page",
  },
  {
    title: "Hospital Operations",
    description: "Operating-theatre scheduling, utilisation and capacity planning.",
    to: "/solutions#hospital-operations",
    group: "Solution",
  },
  {
    title: "Precision Oncology",
    description: "Patient-specific risk and treatment pathway decision support.",
    to: "/solutions#precision-oncology",
    group: "Solution",
  },
  {
    title: "Technology",
    description: "The data, AI, quantum and governance stack behind the platform.",
    to: "/technology",
    group: "Page",
  },
  {
    title: "Impact",
    description: "Outcomes, evaluation approach and how we measure value.",
    to: "/impact",
    group: "Page",
  },
  {
    title: "Our Team",
    description: "How clinical, engineering and research functions work together.",
    to: "/team",
    group: "Page",
  },
  {
    title: "Contact",
    description: "Talk to the team at contact@qhealthglobal.com.",
    to: "/contact",
    group: "Page",
  },
  {
    title: "Careers",
    description: "Roles across research, engineering and clinical informatics.",
    to: "/team",
    group: "Team",
  },
  {
    title: "Responsible AI",
    description: "Model governance, bias testing and auditability.",
    to: "/technology",
    group: "Topic",
  },
  {
    title: "Evaluation & measurement",
    description: "Baselines, comparators and independent review.",
    to: "/impact",
    group: "Topic",
  },
  {
    title: "Recognition & partners",
    description: "RIKEN JHPC-Quantum Test User Program and our healthcare partner network.",
    to: "/about#recognition",
    group: "About",
  },
  {
    title: "Our vision",
    description: "Better decisions. Better care. Better lives.",
    to: "/about#vision",
    group: "About",
  },
  {
    title: "Privacy policy",
    description: "What this website collects and how it is used.",
    to: "/privacy",
    group: "Legal",
  },
  {
    title: "Terms of use",
    description: "The terms that apply to this website.",
    to: "/terms",
    group: "Legal",
  },
]

type SearchDialogProps = {
  onClose: () => void
}

export function SearchDialog({ onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return searchIndex.slice(0, 6)
    return searchIndex.filter((entry) =>
      `${entry.title} ${entry.description} ${entry.group}`.toLowerCase().includes(term)
    )
  }, [query])

  const active = results.length === 0 ? -1 : Math.min(activeIndex, results.length - 1)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
        return
      }
      if (event.key !== "Tab") return

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  function go(entry: SearchEntry | undefined) {
    if (!entry) return
    onClose()
    navigate(entry.to)
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex justify-center px-4 pt-[10vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search Q-Health"
    >
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 cursor-default bg-[#072149]/25 backdrop-blur-[3px]"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        className="relative w-full max-w-[560px] self-start overflow-hidden rounded-[18px] border border-[#e2ebf3] bg-white shadow-[0_40px_80px_-30px_rgba(7,33,73,0.45)]"
      >
        <div className="flex items-center gap-3 border-b border-[#eef3f8] px-5">
          <Search className="size-[18px] shrink-0 text-[#5f7288]" strokeWidth={1.8} />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setActiveIndex(0)
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") onClose()
              if (event.key === "ArrowDown") {
                event.preventDefault()
                setActiveIndex((index) => Math.min(index + 1, results.length - 1))
              }
              if (event.key === "ArrowUp") {
                event.preventDefault()
                setActiveIndex((index) => Math.max(index - 1, 0))
              }
              if (event.key === "Enter") {
                event.preventDefault()
                go(results[active])
              }
            }}
            placeholder="Search the site — solutions, technology, team…"
            aria-label="Search the site"
            className="h-[58px] w-full bg-transparent text-[15px] text-navy placeholder:text-[#6b7b8e] focus:outline-none"
          />
          <kbd className="hidden shrink-0 rounded border border-[#dbe5ef] px-1.5 py-0.5 text-[10px] font-semibold tracking-[0.08em] text-[#5f7288] sm:block">
            ESC
          </kbd>
        </div>

        <div className="max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-4 py-10 text-center text-[13.5px] text-[#5f7288]">
              No results for “{query}”. Try “solutions”, “impact” or “contact”.
            </p>
          ) : (
            <ul>
              {results.map((entry, index) => (
                <li key={`${entry.title}-${entry.to}`}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => go(entry)}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 rounded-[10px] px-4 py-3 text-left transition-colors",
                      index === active ? "bg-[#f1f8fd]" : "hover:bg-[#f7fbfd]"
                    )}
                  >
                    <span className="min-w-0">
                      <span className="block text-[14px] font-semibold text-navy">{entry.title}</span>
                      <span className="mt-0.5 block truncate text-[12.5px] text-body">
                        {entry.description}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-2">
                      <span className="text-[10.5px] font-semibold tracking-[0.1em] text-[#6b7b8e] uppercase">
                        {entry.group}
                      </span>
                      <ArrowRight className="size-3.5 text-[#6b7b8e]" strokeWidth={2} />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-[#eef3f8] px-5 py-2.5 text-[11px] text-[#6b7b8e]">
          <span>
            {results.length} result{results.length === 1 ? "" : "s"}
          </span>
          <span className="hidden sm:block">↑ ↓ to navigate · ↵ to open</span>
        </div>
      </div>
    </div>
  )
}
