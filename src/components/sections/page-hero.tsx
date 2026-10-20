import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  breadcrumb: string
  actions?: ReactNode
  meta?: ReactNode
  children?: ReactNode
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  actions,
  meta,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#eef3f8] bg-[#fcfdfe]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 right-[-12%] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(44,152,212,0.18),rgba(44,152,212,0)_68%)] blur-[2px]" />
        <div className="absolute top-24 right-[18%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(35,170,243,0.12),rgba(35,170,243,0)_70%)]" />
        <div className="absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(44,152,212,0.08),rgba(44,152,212,0)_70%)]" />
      </div>

      <div className="page-container relative pt-10 pb-12 lg:pt-14 lg:pb-16">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-[#5f7288] uppercase"
        >
          <Link to="/" className="transition-colors hover:text-navy">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-[#a9b6c6]" strokeWidth={2} />
          <span aria-current="page" className="text-[#33445d]">
            {breadcrumb}
          </span>
        </nav>

        <p className="mt-9 text-[12px] font-semibold tracking-[0.155em] text-sky uppercase">
          {eyebrow}
        </p>

        <h1 className="mt-4 max-w-[880px] text-[36px] leading-[43px] font-bold tracking-[-0.025em] text-navy sm:text-[44px] sm:leading-[51px] lg:text-[52px] lg:leading-[59px]">
          {title}
        </h1>

        <p className="mt-5 max-w-[660px] text-[16.5px] leading-[28px] text-body sm:text-[17.5px] sm:leading-[29px]">
          {description}
        </p>

        {actions ? <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div> : null}

        {meta ? (
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#e6edf5] pt-6">
            {meta}
          </div>
        ) : null}

        {children}
      </div>
    </section>
  )
}

type HeroMetaItemProps = {
  icon?: ReactNode
  label: string
  value: string
}

export function HeroMetaItem({ icon, label, value }: HeroMetaItemProps) {
  return (
    <div className="flex items-center gap-2.5">
      {icon ? <span className="text-sky">{icon}</span> : null}
      <span className="text-[11px] font-semibold tracking-[0.12em] text-[#5f7288] uppercase">
        {label}
      </span>
      <span className="text-[13.5px] font-medium text-navy">{value}</span>
    </div>
  )
}
