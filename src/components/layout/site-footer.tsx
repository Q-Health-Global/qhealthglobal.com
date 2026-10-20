import { ArrowUp, Globe, Heart, Leaf, Mail, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

import { BulbIcon } from "@/components/icons/feature-icons"
import { site } from "@/lib/site"

import logoLight from "@/assets/q-health-logo-light.png"

const values = [
  {
    key: "deep-technology",
    icon: BulbIcon,
    label: (
      <>
        Deep
        <br />
        Technology
      </>
    ),
  },
  {
    key: "real-world-impact",
    icon: Heart,
    label: (
      <>
        Real-World
        <br />
        Impact
      </>
    ),
  },
  {
    key: "global-collaboration",
    icon: Globe,
    label: (
      <>
        Global
        <br />
        Collaboration
      </>
    ),
  },
  {
    key: "healthier-tomorrow",
    icon: Leaf,
    label: (
      <>
        A Healthier
        <br />
        Tomorrow
      </>
    ),
  },
]

const footerNavigation = [
  {
    title: "Solutions",
    links: [
      { label: "Hospital Operations", to: "/solutions#hospital-operations" },
      { label: "Precision Oncology", to: "/solutions#precision-oncology" },
      { label: "Platform capabilities", to: "/solutions" },
      { label: "Technology", to: "/technology" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Q-Health", to: "/about" },
      { label: "Our Team", to: "/team" },
      { label: "Impact", to: "/impact" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Careers", to: "/team" },
      { label: "FAQ", to: "/contact" },
      { label: "Privacy policy", to: "/privacy" },
      { label: "Terms of use", to: "/terms" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#072149] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 right-[-8%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(44,152,212,0.3),rgba(44,152,212,0)_70%)]" />
        <div className="absolute bottom-[-45%] left-[-6%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(44,152,212,0.14),rgba(44,152,212,0)_70%)]" />
      </div>

      {/* Brand + values strip */}
      <div className="relative border-b border-white/10 py-8 wide:h-[127px] wide:py-0">
        <div className="page-container flex h-full flex-col items-start gap-7 wide:flex-row wide:items-center wide:gap-0">
          <div className="flex shrink-0 items-center pl-[2px]">
            <img
              src={logoLight}
              alt="Q-Health"
              width={151}
              height={126}
              className="h-[64px] w-[70px] translate-x-[4px] select-none object-contain"
            />
            <span aria-hidden className="ml-[16px] h-[63px] w-px bg-white/15" />
            <div className="ml-[17px]">
              <p className="text-[12px] leading-none font-semibold tracking-[0.055em] text-white">
                Q-HEALTH TECHNOLOGIES PTE. LTD.
              </p>
              <p className="mt-[10px] text-[12px] leading-none text-white/65">UEN: 202619219R</p>
              <p className="mt-[5px] text-[12px] leading-none text-white/65">
                Incorporated on 30 April 2026, Singapore
              </p>
            </div>
          </div>

          <span
            aria-hidden
            className="mt-[-2px] mr-[44px] ml-[48px] hidden h-[63px] w-px shrink-0 bg-white/15 wide:block"
          />

          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 wide:flex wide:w-auto wide:min-w-0 wide:flex-1 wide:items-center wide:gap-[97px]">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.key} className="flex items-center">
                  <span className="flex size-[52px] shrink-0 items-center justify-center rounded-full bg-white/10 text-[#7cc7ee]">
                    <Icon className="size-[26px]" strokeWidth={1.7} />
                  </span>
                  <span className="ml-[22px] text-[13.4px] leading-[21px] text-white/75">
                    {value.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Site map + legal */}
      <div className="relative">
        <div className="page-container py-12 lg:py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">
            <div className="lg:max-w-[330px]">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-white/60 uppercase">
                Q-Health Technologies
              </p>
              <p className="mt-4 text-[14px] leading-[24px] text-white/60">
                Decision intelligence for healthcare — combining quantum computing, applied AI and
                clinical expertise to help institutions decide with confidence.
              </p>

              <a
                href={`mailto:${site.email}`}
                className="mt-5 inline-flex items-center gap-2.5 text-[14px] font-semibold text-white transition-colors hover:text-[#7cc7ee]"
              >
                <Mail className="size-4 text-[#7cc7ee]" strokeWidth={1.8} />
                {site.email}
              </a>

              <p className="mt-3 flex items-center gap-2.5 text-[13px] text-white/65">
                <MapPin className="size-4 text-[#7cc7ee]" strokeWidth={1.8} />
                {site.location} · UEN {site.uen}
              </p>
            </div>

            {footerNavigation.map((column) => (
              <nav key={column.title} aria-label={`Footer — ${column.title}`}>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-white/60 uppercase">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="-mx-2 inline-block rounded-md px-2 py-1.5 text-[13.5px] leading-[22px] text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] leading-[20px] text-white/60">
              © 2026 Q-HEALTH TECHNOLOGIES PTE. LTD. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/60">
              <Link to="/privacy" className="transition-colors hover:text-white">
                Privacy
              </Link>
              <Link to="/terms" className="transition-colors hover:text-white">
                Terms
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-white sm:hidden"
              >
                Email
              </a>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                Back to top
                <ArrowUp className="size-3.5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
