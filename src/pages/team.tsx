import {
  Activity,
  ArrowRight,
  Atom,
  Building2,
  Code2,
  Mail,
  Stethoscope,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"

import { PageMeta } from "@/components/page-meta"
import { CtaBand } from "@/components/sections/cta-band"
import { HeroMetaItem, PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

const functions = [
  {
    icon: Stethoscope,
    title: "Clinical leadership",
    description:
      "Sets clinical safety standards, evidence policy and the guardrails every model has to satisfy before it reaches a clinician.",
    tags: ["Clinical safety", "Evidence"],
  },
  {
    icon: Code2,
    title: "Platform engineering",
    description:
      "Builds and operates the data, integration and deployment layers — inside your environment, under your controls.",
    tags: ["Data platform", "Integration"],
  },
  {
    icon: Atom,
    title: "Quantum research",
    description:
      "Develops the optimisation and sampling methods behind complex scheduling, rostering and capacity decisions.",
    tags: ["Optimisation", "Research"],
  },
  {
    icon: Building2,
    title: "Health system operations",
    description:
      "Translates theatre, workforce and capacity constraints into decision models that reflect how a hospital actually runs.",
    tags: ["Operations", "Capacity"],
  },
  {
    icon: Activity,
    title: "Clinical informatics",
    description:
      "Designs evaluation, measurement and reporting alongside hospital analytics and clinical governance teams.",
    tags: ["Evaluation", "Informatics"],
  },
  {
    icon: Users,
    title: "Partnerships & delivery",
    description:
      "Works with institutions from the first conversation through deployment, adoption and quarterly value review.",
    tags: ["Deployment", "Partnerships"],
  },
]

const advisoryAreas = [
  {
    discipline: "Clinical oncology",
    description:
      "Practising oncologists review pathway logic, patient-facing outputs and the boundaries of the recommendation.",
  },
  {
    discipline: "Health economics",
    description:
      "Health economists advise on value frameworks, evaluation design and the evidence strategy behind each claim.",
  },
  {
    discipline: "Quantum information",
    description:
      "Quantum researchers advise on solver strategy, hardware roadmaps and where classical methods remain the right choice.",
  },
]

export function TeamPage() {
  return (
    <>
      <PageMeta
        title="Our Team | Q-Health Technologies"
        description="How Q-Health is organised across clinical leadership, platform engineering, quantum research, health system operations, clinical informatics and partnerships."
        path="/team"
      />

      <PageHero
        eyebrow="Our Team"
        breadcrumb="Our Team"
        title="Clinicians, engineers and scientists in one room."
        description="Decision intelligence only works when operational reality, clinical evidence and engineering rigour sit at the same table. Our organisation is built around those disciplines — not around a single product team."
        meta={
          <>
            <HeroMetaItem label="Disciplines" value="Clinical, AI, quantum, operations" />
            <HeroMetaItem label="Based in" value={site.location} />
            <HeroMetaItem label="Working with" value="Health systems across APAC" />
          </>
        }
      />

      <section className="py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="How we are organised"
            title="Six functions, one accountable team."
            description="Every engagement is staffed across clinical, operational and technical functions, so a recommendation is never owned by a single discipline."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {functions.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-[18px] border border-[#eaf0f6] bg-white p-7"
                >
                  <span className="flex size-[54px] items-center justify-center rounded-full bg-mist text-[#0a4285]">
                    <Icon className="size-[25px]" strokeWidth={1.7} />
                  </span>
                  <h2 className="mt-5 text-[17px] leading-[24px] font-semibold text-navy">
                    {item.title}
                  </h2>
                  <p className="mt-2.5 flex-1 text-[14px] leading-[24px] text-body">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#f1f7fb] px-3 py-1 text-[11.5px] font-medium text-[#41546b]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[16px] border border-[#e6eef6] bg-[#f8fbfd] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="max-w-[720px] text-[14px] leading-[24px] text-body">
              <span className="font-semibold text-navy">A note on profiles.</span> We do not publish
              individual biographies. The people who would work with your institution are introduced
              during the first conversation, with their clinical and technical backgrounds.
            </p>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 text-[13.5px] font-semibold text-link transition-colors hover:text-brand"
            >
              Request an introduction
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eef3f8] bg-[#f8fbfd] py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="Advisory network"
            title="Expertise we borrow deliberately."
            description="Advisors are engaged per programme, not kept on a logo wall. Their role is to challenge the evidence base and keep the work close to clinical and academic practice."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {advisoryAreas.map((area) => (
              <div
                key={area.discipline}
                className="rounded-[16px] border border-[#eaf0f6] bg-white p-6"
              >
                <p className="text-[11px] font-semibold tracking-[0.14em] text-sky uppercase">
                  Advisory
                </p>
                <h3 className="mt-2 text-[16.5px] font-semibold text-navy">{area.discipline}</h3>
                <p className="mt-2.5 text-[13.5px] leading-[23px] text-body">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="page-container">
          <div className="grid items-center gap-8 rounded-[20px] border border-[#eaf0f6] bg-white p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.155em] text-sky uppercase">
                Join us
              </p>
              <h2 className="mt-3 text-[27px] leading-[35px] font-bold tracking-[-0.02em] text-navy sm:text-[31px] sm:leading-[39px]">
                We are hiring across research, engineering and clinical informatics.
              </h2>
              <p className="mt-4 max-w-[560px] text-[15px] leading-[26px] text-body">
                If you have worked inside a health system and want to make its decisions measurably
                better, we would like to hear from you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild className="h-[46px] px-6 text-[14px]">
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Careers at Q-Health")}`}
                >
                  Introduce yourself
                  <ArrowRight className="size-4" strokeWidth={2} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-[46px] border-[#b9cfe0] px-6 text-[14px]"
              >
                <Link to="/about">Read about Q-Health</Link>
              </Button>
            </div>
          </div>

          <p className="mt-6 flex items-center gap-2 text-[12.5px] text-[#5f7288]">
            <Mail className="size-3.5" strokeWidth={1.8} />
            Applications and enquiries: {site.email}
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Partner with us"
        title="Work with a team that understands the ward as well as the model."
        description="We collaborate with clinical, operational and analytics leaders on problems that matter to their institution."
      />
    </>
  )
}
