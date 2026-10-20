import {
  ArrowRight,
  Atom,
  BrainCircuit,
  Check,
  Database,
  Lock,
  Plug,
  ScrollText,
  ShieldCheck,
  UserCheck,
} from "lucide-react"
import { Link } from "react-router-dom"

import { PageMeta } from "@/components/page-meta"
import { CtaBand } from "@/components/sections/cta-band"
import { HeroMetaItem, PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"

const layers = [
  {
    step: "01",
    icon: Database,
    title: "Data foundation",
    description:
      "Standards-based ingestion, de-identification and quality controls across operational, workforce and clinical data. Nothing is modelled until it is understood.",
    points: ["HL7 FHIR and scheduling interfaces", "De-identification at the edge", "Data quality and lineage"],
  },
  {
    step: "02",
    icon: BrainCircuit,
    title: "Decision models",
    description:
      "Forecasting, risk and utilisation models that are versioned, explainable and calibrated against your institution's own history.",
    points: ["Demand and length-of-stay forecasting", "Patient-specific risk signals", "Explainability and drift monitoring"],
  },
  {
    step: "03",
    icon: Atom,
    title: "Quantum optimisation",
    description:
      "Hybrid quantum-classical solvers for combinatorial problems — theatre schedules, workforce rosters and capacity allocation — under real constraints.",
    points: ["Constraint-aware solvers", "Quantum-inspired and gate-based backends", "Scenario sampling at scale"],
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Governance & assurance",
    description:
      "Every recommendation carries its provenance. Human oversight, audit trails and a clinical safety case are part of the product, not an afterthought.",
    points: ["Human-in-the-loop sign-off", "Immutable decision logs", "Clinical safety and model review"],
  },
]

const enterprise = [
  {
    icon: Lock,
    title: "Security & privacy",
    description:
      "Role-based access, encryption in transit and at rest, and deployment options that keep sensitive data inside your estate.",
  },
  {
    icon: Plug,
    title: "Interoperability",
    description:
      "Standards-based integration with electronic records, scheduling systems and existing analytics platforms.",
  },
  {
    icon: ScrollText,
    title: "Auditability",
    description:
      "Every input, model version and recommendation is recorded, so decisions can be reviewed and defended.",
  },
  {
    icon: UserCheck,
    title: "Human oversight",
    description:
      "The clinician or operator remains the decision-maker. The platform makes the trade-offs visible — it does not remove judgement.",
  },
]

const responsible = [
  "Models are evaluated against clinical and operational outcomes, not proxy metrics alone.",
  "Bias testing is part of every release cycle, with subgroup reporting where data allows.",
  "Recommendations are always attributable to a model version, a dataset and a reviewer.",
  "We publish model limitations alongside model performance.",
]

export function TechnologyPage() {
  return (
    <>
      <PageMeta
        title="Technology | Q-Health Technologies"
        description="A decision stack combining classical AI, quantum optimisation and clinical governance, deployable inside your environment."
        path="/technology"
      />

      <PageHero
        eyebrow="Technology"
        breadcrumb="Technology"
        title="Quantum × AI × Healthcare, engineered for trust."
        description="A decision stack that combines classical AI, quantum-inspired optimisation and clinical governance — deployable inside your environment, with your data staying under your control."
        actions={
          <>
            <Button asChild className="h-[46px] px-6 text-[14px]">
              <Link to="/contact">
                Request a technical briefing
                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-[46px] border-[#b9cfe0] px-6 text-[14px]"
            >
              <Link to="/solutions">See the solutions</Link>
            </Button>
          </>
        }
        meta={
          <>
            <HeroMetaItem label="Deployment" value="Cloud, VPC or on-premise" />
            <HeroMetaItem label="Standards" value="HL7 FHIR" />
            <HeroMetaItem label="Design" value="Human-in-the-loop" />
          </>
        }
      />

      <section className="py-16 lg:py-24">
        <div className="page-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="The stack"
              title="Four layers, one accountable decision."
              description="Each layer is independently useful and jointly governed. Together they turn raw operational data into a recommendation a clinical team can act on."
            />
            <div className="mt-8 hidden rounded-[16px] border border-[#eaf0f6] bg-[#f8fbfd] p-6 lg:block">
              <p className="text-[13px] leading-[23px] text-body">
                <span className="font-semibold text-navy">Deployment note:</span> the platform can
                run entirely inside a health system's network, with no patient data leaving the
                estate.
              </p>
            </div>
          </div>

          <ol className="space-y-5">
            {layers.map((layer) => {
              const Icon = layer.icon
              return (
                <li
                  key={layer.step}
                  className="rounded-[18px] border border-[#eaf0f6] bg-white p-6 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mist text-[#0a4285]">
                      <Icon className="size-[23px]" strokeWidth={1.7} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-[18px] leading-[25px] font-semibold text-navy">
                          {layer.title}
                        </h3>
                        <span className="text-[11.5px] font-semibold tracking-[0.18em] text-[#9db0c2]">
                          {layer.step}
                        </span>
                      </div>
                      <p className="mt-2.5 text-[14.5px] leading-[24px] text-body">
                        {layer.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                        {layer.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-2 text-[12.5px] font-medium text-[#4a5d75]"
                          >
                            <span className="size-1 rounded-full bg-sky" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="border-y border-[#eef3f8] bg-[#f8fbfd] py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="Built for the enterprise"
            title="The controls your institution already expects."
            description="Health systems adopt technology slowly for good reasons. The platform is designed to satisfy those reasons before it asks for trust."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {enterprise.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-[16px] border border-[#eaf0f6] bg-white p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-mist text-[#0a4285]">
                    <Icon className="size-[21px]" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-[16px] font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-[23px] text-body">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="page-container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Responsible AI"
              title="Confidence has to be earned, and shown."
              description="We treat model governance as a clinical responsibility. That means documenting what a model cannot do, as carefully as what it can."
            />
            <ul className="mt-8 space-y-4">
              {responsible.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mist text-[#0a4285]">
                    <Check className="size-3" strokeWidth={2.6} />
                  </span>
                  <span className="text-[14.5px] leading-[24px] text-[#33445d]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative overflow-hidden rounded-[20px] border border-[#e6eef6] bg-[#08244b] p-8 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-16 size-[280px] rounded-full bg-[radial-gradient(circle,rgba(44,152,212,0.55),rgba(44,152,212,0))]"
            />
            <blockquote className="relative">
              <p className="text-[19px] leading-[31px] font-medium text-white">
                “A recommendation is only useful if the person receiving it can see why — and
                disagree well.”
              </p>
              <figcaption className="mt-6 border-t border-white/15 pt-5 text-[13px] leading-[22px] text-white/65">
                Design principle · Q-Health decision platform
              </figcaption>
            </blockquote>
          </figure>
        </div>
      </section>

      <CtaBand
        eyebrow="Technical briefing"
        title="See how the stack would fit your estate."
        description="We can walk through the architecture, security posture and integration approach with your technology and clinical governance teams."
      />
    </>
  )
}
