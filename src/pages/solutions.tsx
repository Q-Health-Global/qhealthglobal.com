import {
  ArrowRight,
  CalendarRange,
  LineChart,
  Network,
  ShieldCheck,
  Stethoscope,
  Workflow,
} from "lucide-react"
import { Link } from "react-router-dom"

import cardOncology from "@/assets/card-oncology.webp"
import cardOperations from "@/assets/card-operations.webp"
import { PageMeta } from "@/components/page-meta"
import { CtaBand } from "@/components/sections/cta-band"
import { HeroMetaItem, PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    id: "hospital-operations",
    eyebrow: "Hospital Operations",
    title: "Optimizing Healthcare Operations",
    description:
      "Operating theatres, beds and specialist time are finite. We model the uncertainty in demand, case mix and staffing so schedulers can see the consequences of a plan before it is committed.",
    bullets: [
      "Operating-theatre scheduling under uncertainty",
      "Resource, workforce and capacity utilisation",
      "Scenario planning for demand surges and disruptions",
    ],
    image: cardOperations,
    imageAlt: "Operating theatre with surgical lights and equipment",
    reversed: false,
  },
  {
    id: "precision-oncology",
    eyebrow: "Precision Oncology",
    title: "Towards More Personalised Treatment",
    description:
      "Cancer decisions are rarely made once. We bring patient-specific risk, pathway evidence and multidisciplinary input into a single view, so tumour boards can discuss options rather than reconstruct them.",
    bullets: [
      "Patient-specific risk identification",
      "Treatment pathway comparison and sequencing",
      "Multidisciplinary team decision support",
    ],
    image: cardOncology,
    imageAlt: "Clinician reviewing a breast scan on a diagnostic display",
    reversed: true,
  },
]

const capabilities = [
  {
    icon: CalendarRange,
    title: "Forecasting & demand modelling",
    description:
      "Short and long-range demand models built on your referral, admission and scheduling history.",
  },
  {
    icon: Workflow,
    title: "Constraint-aware scheduling",
    description:
      "Optimisation that respects clinical rules, workforce agreements and theatre turnaround constraints.",
  },
  {
    icon: LineChart,
    title: "Scenario simulation",
    description:
      "Compare capacity, staffing and pathway options side by side before a change is made.",
  },
  {
    icon: Stethoscope,
    title: "Risk stratification",
    description:
      "Explainable risk signals that support prioritisation without replacing clinical judgement.",
  },
  {
    icon: Network,
    title: "Integration & interoperability",
    description:
      "Standards-based connectivity with electronic records, scheduling and analytics estates.",
  },
  {
    icon: ShieldCheck,
    title: "Decision governance",
    description:
      "Provenance, audit trails and human sign-off for every recommendation that reaches a clinician.",
  },
]

const engagement = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Two weeks with operational and clinical leads to agree the decision, the data and the measure of success.",
  },
  {
    step: "02",
    title: "Pilot design",
    description:
      "A scoped pilot with a baseline, a comparator and a pre-agreed evaluation plan.",
  },
  {
    step: "03",
    title: "Deployment",
    description:
      "Integration into existing workflows, clinician training and a staged go-live with support.",
  },
  {
    step: "04",
    title: "Scale & optimise",
    description:
      "Ongoing model monitoring, quarterly value reviews and expansion to adjacent decisions.",
  },
]

export function SolutionsPage() {
  return (
    <>
      <PageMeta
        title="Our Solutions | Q-Health Technologies"
        description="Decision intelligence for hospital operations and precision oncology: scheduling, capacity, risk and treatment pathway support."
        path="/solutions"
      />

      <PageHero
        eyebrow="Our Solutions"
        breadcrumb="Our Solutions"
        title="Decision support for the moments that matter most."
        description="Two flagship solutions, one decision platform. Each is configured to the constraints, data and governance of your institution — and measured on the outcomes it improves."
        actions={
          <>
            <Button asChild className="h-[46px] px-6 text-[14px]">
              <Link to="/contact">
                Talk to our team
                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-[46px] border-[#b9cfe0] px-6 text-[14px]"
            >
              <Link to="/technology">Explore the platform</Link>
            </Button>
          </>
        }
        meta={
          <>
            <HeroMetaItem label="Deployment" value="Cloud or on-premise" />
            <HeroMetaItem label="Integration" value="HL7 FHIR" />
            <HeroMetaItem label="Oversight" value="Human-in-the-loop" />
          </>
        }
      />

      <section className="py-16 lg:py-24">
        <div className="page-container space-y-16 lg:space-y-24">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              id={solution.id}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={solution.reversed ? "lg:order-2" : undefined}>
                <p className="text-[12px] font-semibold tracking-[0.155em] text-sky-bright uppercase">
                  {solution.eyebrow}
                </p>
                <h2 className="mt-3 text-[30px] leading-[37px] font-bold tracking-[-0.022em] text-navy sm:text-[34px] sm:leading-[41px]">
                  {solution.title}
                </h2>
                <p className="mt-4 text-[16px] leading-[28px] text-body">{solution.description}</p>

                <ul className="mt-7 space-y-3">
                  {solution.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-sky" />
                      <span className="text-[15px] leading-[26px] text-[#33445d]">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-[14.5px] font-semibold text-link transition-colors hover:text-brand"
                >
                  Discuss this solution
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </div>

              <div className={solution.reversed ? "lg:order-1" : undefined}>
                <div className="mx-auto w-full max-w-[410px] rounded-[22px] border border-[#eaf0f6] bg-[linear-gradient(140deg,#f2fafd,#ffffff)] p-3 shadow-[0_30px_60px_-46px_rgba(13,45,85,0.35)]">
                  <img
                    src={solution.image}
                    alt={solution.imageAlt}
                    width={292}
                    height={247}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full rounded-[14px] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eef3f8] bg-[#f8fbfd] py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="Platform capabilities"
            title="One engine, configured to your decisions."
            description="Capabilities are composed into a solution rather than sold as isolated tools — so the model, the workflow and the governance stay aligned."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon
              return (
                <div
                  key={capability.title}
                  className="rounded-[16px] border border-[#eaf0f6] bg-white p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-mist text-[#0a4285]">
                    <Icon className="size-[21px]" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-[16px] leading-[23px] font-semibold text-navy">
                    {capability.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[23px] text-body">
                    {capability.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="page-container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="How we work"
              title="A clear path from first conversation to measured impact."
            />
            <p className="max-w-[380px] text-[14.5px] leading-[25px] text-body">
              Most engagements begin with a focused pilot in one service line, then expand as
              evidence accumulates.
            </p>
          </div>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagement.map((item) => (
              <li
                key={item.step}
                className="rounded-[16px] border border-[#eaf0f6] bg-white p-6"
              >
                <span className="text-[12px] font-semibold tracking-[0.18em] text-sky">
                  {item.step}
                </span>
                <h3 className="mt-4 text-[16.5px] font-semibold text-navy">{item.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[23px] text-body">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        title="Which decision would you like to improve first?"
        description="Bring us a service line, a bottleneck or a question. We will show you what a decision model could look like in your environment."
      />
    </>
  )
}
