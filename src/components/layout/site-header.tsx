import { useEffect, useState } from "react"
import { ArrowRight, Menu, Search, X } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

import logo from "@/assets/q-health-logo.png"
import { SearchDialog } from "@/components/search-dialog"
import { Button } from "@/components/ui/button"
import { navigation } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setSearchOpen((open) => !open)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled
          ? "shadow-[0_1px_0_0_#eef3f8,0_14px_30px_-26px_rgba(7,33,73,0.45)]"
          : "shadow-none"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-5 focus:py-2.5 focus:text-[13px] focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <div className="page-container flex h-[76px] items-center lg:h-[104px]">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label="Q-Health Technologies home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Q-Health"
            width={151}
            height={126}
            className="h-[50px] w-[55px] -translate-x-px translate-y-0.5 select-none object-fill mix-blend-multiply lg:h-[64px] lg:w-[70px]"
          />
          <span
            aria-hidden
            className="ml-[18px] hidden h-[52px] w-px bg-[#c9d4df] sm:block lg:ml-[31px]"
          />
          <span className="ml-[14px] flex flex-col sm:ml-[21px]">
            <span className="text-[17px] leading-none font-bold tracking-[0.03em] text-navy lg:text-[21.6px]">
              Q-HEALTH
            </span>
            <span className="mt-[7px] text-[9.5px] leading-none font-semibold tracking-[0.138em] text-[#55647b] lg:mt-[8px] lg:text-[13px]">
              TECHNOLOGIES PTE. LTD.
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="ml-[40px] hidden items-center gap-[24px] xl:flex wide:ml-[84px] wide:gap-[35px]"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative py-2 text-[13.5px] font-medium whitespace-nowrap transition-colors",
                  isActive ? "text-[#14539f]" : "text-[#1b2c4a] hover:text-[#14539f]"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive ? (
                    <span
                      aria-hidden
                      className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-[#1a5bad]"
                    />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-[24px] sm:gap-[32px] wide:gap-[42px]">
          <button
            type="button"
            aria-label="Search the site"
            aria-haspopup="dialog"
            onClick={() => setSearchOpen(true)}
            className="hidden text-navy transition-colors hover:text-link sm:block"
          >
            <Search className="size-[21px]" strokeWidth={1.8} />
          </button>

          <Button
            asChild
            className="hidden h-[47px] w-[170px] gap-[10px] px-0 text-[14.2px] sm:inline-flex"
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </Button>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-navy transition-colors hover:text-link xl:hidden"
          >
            {menuOpen ? (
              <X className="size-6" strokeWidth={1.8} />
            ) : (
              <Menu className="size-6" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "absolute inset-x-0 top-full origin-top border-t border-hairline bg-white shadow-[0_24px_40px_-32px_rgba(10,35,66,0.4)] transition-all duration-200 xl:hidden",
          menuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="page-container flex flex-col gap-1 py-4">
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false)
              setSearchOpen(true)
            }}
            className="mb-1 flex items-center gap-3 rounded-lg px-3 py-3 text-left text-[15px] font-medium text-[#1b2c4a] transition-colors hover:bg-mist/50 hover:text-[#14539f]"
          >
            <Search className="size-[18px]" strokeWidth={1.8} />
            Search the site
          </button>
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-3 text-[15px] font-medium transition-colors",
                  isActive
                    ? "bg-mist/60 text-[#14539f]"
                    : "text-[#1b2c4a] hover:bg-mist/50 hover:text-[#14539f]"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild className="mt-3 h-12 w-full">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Get in Touch
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </Button>
        </nav>
      </div>

      {searchOpen ? <SearchDialog onClose={() => setSearchOpen(false)} /> : null}
    </header>
  )
}
