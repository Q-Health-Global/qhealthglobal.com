import type { ReactNode } from "react"

import { PageMeta } from "@/components/page-meta"
import { HeroMetaItem, PageHero } from "@/components/sections/page-hero"
import { site } from "@/lib/site"

export type LegalSection = {
  id: string
  title: string
  content: ReactNode
}

type LegalPageProps = {
  metaTitle: string
  path: string
  title: string
  description: string
  updated: string
  sections: LegalSection[]
}

export function LegalPage({
  metaTitle,
  path,
  title,
  description,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageMeta title={metaTitle} description={description} path={path} />

      <PageHero
        eyebrow="Legal"
        breadcrumb={title}
        title={title}
        description={description}
        meta={<HeroMetaItem label="Last updated" value={updated} />}
      />

      <section className="py-14 lg:py-20">
        <div className="page-container grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#5f7288] uppercase">
              On this page
            </p>
            <ul className="mt-4 space-y-1.5">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-block rounded-md py-1 text-[12.5px] leading-[20px] text-[#4a5d75] transition-colors hover:text-link"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[14px] border border-[#e6eef6] bg-[#f8fbfd] p-4">
              <p className="text-[12px] leading-[20px] text-body">Questions about this page?</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block text-[12.5px] font-semibold break-words text-link hover:underline"
              >
                {site.email}
              </a>
            </div>
          </nav>

          <div className="max-w-[760px] space-y-9">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-[20px] leading-[28px] font-semibold text-navy">
                  {index + 1}. {section.title}
                </h2>
                <div className="mt-3 space-y-4 text-[15px] leading-[27px] text-body">
                  {section.content}
                </div>
              </section>
            ))}

            <p className="border-t border-[#eef3f8] pt-6 text-[12.5px] leading-[21px] text-[#64748b]">
              This page was last reviewed on {updated}. For any question about it, write to{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-link hover:underline">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
