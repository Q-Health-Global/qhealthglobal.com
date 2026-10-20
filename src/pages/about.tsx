import { Check, Cpu, HeartPulse, Target, Users } from "lucide-react"

import heroImage from "@/assets/hero-doctor.webp"
import { PageMeta } from "@/components/page-meta"
import { CtaBand } from "@/components/sections/cta-band"
import { HeroMetaItem, PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"
import { Card } from "@/components/ui/card"
import { site } from "@/lib/site"

const principles = [
  {
    icon: Target,
    title: "Better decisions",
    description:
      "We quantify uncertainty instead of hiding it, so leaders can compare options on evidence rather than instinct.",
  },
  {
    icon: Users,
    title: "More efficient systems",
    description:
      "Higher utilisation of theatres, beds and people — with less disruption to the teams who deliver care.",
  },
  {
    icon: HeartPulse,
    title: "Improved patient outcomes",
    description:
      "From operations to treatment, every model is measured by the difference it makes at the point of care.",
  },
  {
    icon: Cpu,
    title: "Cutting-edge technology",
    description:
      "Quantum-inspired optimisation and applied AI, engineered for the constraints of real health systems.",
  },
]

const approach = [
  {
    step: "01",
    title: "Frame the decision",
    description:
      "We start with the choice a clinical or operational leader actually has to make — not with the data that happens to be available.",
  },
  {
    step: "02",
    title: "Model the uncertainty",
    description:
      "Hybrid optimisation and AI models are trained on your constraints, calibrated against your history and stress-tested against edge cases.",
  },
  {
    step: "03",
    title: "Deploy with clinicians",
    description:
      "Recommendations ship inside existing workflows, with human oversight, clear provenance and an audit trail for every decision.",
  },
]

const commitments = [
  "Decision-first, not dashboard-first",
  "Clinical safety and human oversight by design",
  "Built with health systems, not at them",
  "Transparent, auditable recommendations",
]

const milestones = [
  {
    year: "2024",
    title: "Research foundations",
    description:
      "Our founding team begins work on quantum-assisted scheduling with clinical operations partners in Singapore.",
  },
  {
    year: "2025",
    title: "Platform pilots",
    description:
      "The decision engine is piloted across operating-theatre scheduling and multidisciplinary cancer review.",
  },
  {
    year: "2026",
    title: "Q-Health Technologies",
    description:
      "The company is incorporated in Singapore to bring decision intelligence to health systems across the region.",
  },
]

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About | Q-Health Technologies"
        description="Q-Health Technologies is a Singapore company building the decision layer for modern healthcare with quantum computing, AI and health-system expertise."
        path="/about"
      />

      <PageHero
        eyebrow="About Q-Health"
        breadcrumb="About"
        title={<>We build the decision layer for modern healthcare.</>}
        description="Q-Health Technologies is a Singapore company combining quantum computing, artificial intelligence and health-system expertise to help institutions decide with confidence — under real-world uncertainty."
        meta={
          <>
            <HeroMetaItem label="Founded" value="2026, Singapore" />
            <HeroMetaItem label="UEN" value={site.uen} />
            <HeroMetaItem label="Focus" value="Quantum × AI × Healthcare" />
          </>
        }
      />

      <section className="py-16 lg:py-24">
        <div className="page-container grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our mission"
              title="Better decisions are the highest-leverage intervention in healthcare."
            />
            <div className="mt-6 space-y-5 text-[16px] leading-[28px] text-body">
              <p>
                Every day, clinicians and operational leaders make high-stakes choices with
                incomplete information: which theatre to open, which patient to prioritise,
                which pathway to start. The cost of a suboptimal decision is rarely visible
                on a single day — it accumulates across waiting lists, workforce strain and
                outcomes.
              </p>
              <p>
                We exist to make those decisions clearer. Our platform brings together
                operational and clinical data, constrained optimisation and explainable AI so
                teams can see the trade-offs, test the alternatives and act with confidence.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mist text-[#0a4285]">
                    <Check className="size-3" strokeWidth={2.6} />
                  </span>
                  <span className="text-[14.5px] leading-[22px] font-medium text-navy">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[20px] border border-[#eaf0f6] bg-white shadow-[0_30px_60px_-40px_rgba(13,45,85,0.35)]">
              <img
                src={heroImage}
                alt="Clinician reviewing patient information on a tablet"
                width={876}
                height={388}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover object-[62%_35%]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 w-[230px] rounded-[16px] border border-[#e6eef6] bg-white/95 p-5 shadow-[0_24px_50px_-30px_rgba(13,45,85,0.45)] backdrop-blur sm:left-8">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-sky uppercase">
                Our measure
              </p>
              <p className="mt-2 text-[15px] leading-[22px] font-semibold text-navy">
                Every model is judged by the decision it improves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eef3f8] bg-[#f8fbfd] py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="What guides us"
            title="Four commitments that shape every engagement."
            description="Our values are not posters on a wall — they are the criteria we use to design, evaluate and retire a model."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon
              return (
                <Card key={principle.title} className="p-6">
                  <span className="flex size-[52px] items-center justify-center rounded-full bg-mist text-[#0a4285]">
                    <Icon className="size-[26px]" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-[16.5px] leading-[23px] font-semibold text-navy">
                    {principle.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[23px] text-body">
                    {principle.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="Our approach"
            title="A method built for real-world constraints."
            description="We work alongside clinical and operational teams, from the first framing workshop to the point where a recommendation is trusted in daily use."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {approach.map((item) => (
              <div
                key={item.step}
                className="relative rounded-[16px] border border-[#eaf0f6] bg-white p-7"
              >
                <span className="text-[12px] font-semibold tracking-[0.18em] text-sky">
                  {item.step}
                </span>
                <h3 className="mt-4 text-[18px] leading-[25px] font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[24px] text-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="page-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Company" title="Registered in Singapore, built for the region." />
            <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {[
                { label: "Legal entity", value: "Q-HEALTH TECHNOLOGIES PTE. LTD." },
                { label: "UEN", value: site.uen },
                { label: "Incorporated", value: `${site.incorporated}, ${site.location}` },
                { label: "Contact", value: site.email },
              ].map((item) => (
                <div key={item.label} className="border-t border-[#e6edf5] pt-4">
                  <dt className="text-[11px] font-semibold tracking-[0.14em] text-[#5f7288] uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-[14.5px] leading-[22px] font-medium text-navy">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-[12px] font-semibold tracking-[0.155em] text-sky uppercase">
              Our journey
            </h2>
            <ol className="mt-6 space-y-8 border-l border-[#dde8f1] pl-8">
              {milestones.map((milestone) => (
                <li key={milestone.year} className="relative">
                  <span
                    aria-hidden
                    className="absolute top-1.5 -left-[37px] size-2.5 rounded-full border-2 border-white bg-sky shadow-[0_0_0_1px_#bcd9ea]"
                  />
                  <p className="text-[11.5px] font-semibold tracking-[0.16em] text-sky">
                    {milestone.year}
                  </p>
                  <h3 className="mt-1.5 text-[17px] font-semibold text-navy">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[24px] text-body">
                    {milestone.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
