import { Building2, Gauge, HeartPulse, LineChart, ShieldCheck, Users } from "lucide-react"
import { Link } from "react-router-dom"

import { PageMeta } from "@/components/page-meta"
import { CtaBand } from "@/components/sections/cta-band"
import { HeroMetaItem, PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"
import { ArrowRight } from "lucide-react"

const metrics = [
  {
    value: "38%",
    label: "Reduction in scheduling time",
    detail: "From manual reconciliation to constraint-aware plans in a single view.",
  },
  {
    value: "+12",
    label: "Points of theatre utilisation",
    detail: "Additional session capacity released without extending operating hours.",
  },
  {
    value: "2.4×",
    label: "More scenarios evaluated",
    detail: "Teams compare more options before committing to a plan.",
  },
  {
    value: "100%",
    label: "Recommendations traceable",
    detail: "Every recommendation carries its inputs, model version and reviewer.",
  },
]

const pillars = [
  {
    icon: HeartPulse,
    title: "For patients",
    points: [
      "More consistent access to the right care setting",
      "Risk identified earlier in the pathway",
      "Fewer avoidable cancellations and delays",
    ],
  },
  {
    icon: Users,
    title: "For clinicians",
    points: [
      "Less time reconciling schedules and paperwork",
      "Clearer trade-offs at the point of decision",
      "Recommendations that respect clinical judgement",
    ],
  },
  {
    icon: Building2,
    title: "For health systems",
    points: [
      "Higher utilisation of constrained resources",
      "Capacity decisions grounded in evidence",
      "A defensible audit trail for every plan",
    ],
  },
]

const cases = [
  {
    tag: "Regional hospital network",
    title: "Operating-theatre scheduling",
    rows: [
      {
        label: "Context",
        value:
          "Fourteen theatres across three sites, with late-notice cancellations and manual schedule reconciliation each week.",
      },
      {
        label: "Approach",
        value:
          "A twelve-week pilot of constraint-aware scheduling, with a matched comparator and weekly operational review.",
      },
      {
        label: "Outcome",
        value:
          "Shorter scheduling cycles, more stable session allocation and a measurable reduction in avoidable cancellations.",
      },
    ],
  },
  {
    tag: "Specialist cancer centre",
    title: "Multidisciplinary decision support",
    rows: [
      {
        label: "Context",
        value:
          "A growing tumour-board caseload, with preparation time squeezed and pathway evidence spread across systems.",
      },
      {
        label: "Approach",
        value:
          "Decision support that assembles patient-specific risk and pathway evidence ahead of each multidisciplinary review.",
      },
      {
        label: "Outcome",
        value:
          "More time spent on discussion rather than reconstruction, with a consistent record of the rationale behind each plan.",
      },
    ],
  },
]

const measurement = [
  {
    icon: Gauge,
    title: "Baseline and comparator",
    description:
      "No evaluation starts without a pre-agreed baseline and a credible comparator — often the same team before deployment.",
  },
  {
    icon: LineChart,
    title: "Prospective evaluation",
    description:
      "Outcomes are captured during live use, not reconstructed after the fact, with the measures agreed in advance.",
  },
  {
    icon: Users,
    title: "Clinician-reported confidence",
    description:
      "We ask the people making the decision whether the recommendation helped, and track that over time.",
  },
  {
    icon: ShieldCheck,
    title: "Independent review",
    description:
      "Clinical governance and analytics teams review results before any external claim is made.",
  },
]

export function ImpactPage() {
  return (
    <>
      <PageMeta
        title="Impact | Q-Health Technologies"
        description="How decision intelligence changes outcomes for patients, clinicians and health systems — and how we measure it."
        path="/impact"
      />

      <PageHero
        eyebrow="Impact"
        breadcrumb="Impact"
        title="Better decisions, measured across the system."
        description="We measure impact where it matters: patient outcomes, clinician time, system capacity and the confidence behind every recommendation."
        meta={
          <>
            <HeroMetaItem label="Evaluation" value="Prospective, comparator-based" />
            <HeroMetaItem label="Oversight" value="Clinical governance review" />
            <HeroMetaItem label="Reporting" value="Quarterly value reviews" />
          </>
        }
      />

      <section className="py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="Selected outcomes"
            title="What changes when the decision improves."
            description="Figures below reflect outcomes observed in pilot deployments and are indicative only. Results depend on the institution, the data and the decision being supported."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[16px] border border-[#eaf0f6] bg-white p-6"
              >
                <p className="text-[40px] leading-[1] font-bold tracking-[-0.03em] text-navy">
                  {metric.value}
                </p>
                <p className="mt-3 text-[14.5px] leading-[22px] font-semibold text-navy">
                  {metric.label}
                </p>
                <p className="mt-2 text-[13px] leading-[21px] text-body">{metric.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[12px] leading-[20px] text-[#5f7288]">
            Illustrative outcomes from pilot deployments. Individual results vary and are subject
            to local evaluation.
          </p>
        </div>
      </section>

      <section className="border-y border-[#eef3f8] bg-[#f8fbfd] py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="Where impact lands"
            title="Three groups have to feel the difference."
            description="A decision that improves a dashboard but not the ward is not an improvement. We look for change at the point of care and in the system around it."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="rounded-[16px] border border-[#eaf0f6] bg-white p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-mist text-[#0a4285]">
                    <Icon className="size-[23px]" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 text-[17px] font-semibold text-navy">{pillar.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-sky" />
                        <span className="text-[14px] leading-[23px] text-body">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="In practice"
            title="Two engagements, two very different decisions."
            description="Names and figures are withheld; the pattern of the work is representative of how we deploy."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {cases.map((item) => (
              <article
                key={item.title}
                className="rounded-[18px] border border-[#eaf0f6] bg-white p-7"
              >
                <p className="text-[11.5px] font-semibold tracking-[0.15em] text-sky uppercase">
                  {item.tag}
                </p>
                <h3 className="mt-3 text-[21px] leading-[29px] font-semibold text-navy">
                  {item.title}
                </h3>
                <dl className="mt-6 space-y-4">
                  {item.rows.map((row) => (
                    <div key={row.label} className="border-t border-[#eef3f8] pt-4">
                      <dt className="text-[11px] font-semibold tracking-[0.14em] text-[#5f7288] uppercase">
                        {row.label}
                      </dt>
                      <dd className="mt-1.5 text-[14px] leading-[24px] text-body">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-link transition-colors hover:text-brand"
            >
              Discuss an evaluation for your institution
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="How we measure"
            title="Evidence before claims."
            description="Our evaluation approach is deliberately conservative. A result is only reported when it can survive review by the institution that produced it."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {measurement.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-[16px] border border-[#eaf0f6] bg-white p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-mist text-[#0a4285]">
                    <Icon className="size-[21px]" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-[15.5px] font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-[22px] text-body">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Evaluation"
        title="Start with a baseline, not a promise."
        description="We will help you define what success looks like and how it will be measured before a pilot begins."
      />
    </>
  )
}
