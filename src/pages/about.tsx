import {
  ArrowRight,
  Atom,
  Award,
  Boxes,
  BrainCircuit,
  Building2,
  Check,
  Globe,
  HeartPulse,
  LineChart,
  MapPin,
  Quote,
  Route,
  Server,
  Sigma,
  Stethoscope,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"

import heroImage from "@/assets/hero-doctor.webp"
import { PageMeta } from "@/components/page-meta"
import { CtaBand } from "@/components/sections/cta-band"
import { HeroMetaItem, PageHero } from "@/components/sections/page-hero"
import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"

const capabilities = [
  { icon: Sigma, title: "Advanced mathematics", detail: "Optimisation, probability and decision theory" },
  { icon: BrainCircuit, title: "Artificial intelligence", detail: "Learning, forecasting and decision models" },
  { icon: Server, title: "High-performance computing", detail: "Large-scale simulation and scenario analysis" },
  { icon: Atom, title: "Quantum technologies", detail: "Quantum and quantum-inspired solvers" },
  { icon: Stethoscope, title: "Healthcare expertise", detail: "Clinical, operational and nursing practice" },
]

const focusAreas = [
  {
    number: "01",
    icon: Route,
    title: "Healthcare logistics",
    description:
      "Optimising patient flows, resource allocation, scheduling and care coordination to reduce delays and improve access to care.",
    tags: ["Patient flow", "Scheduling"],
  },
  {
    number: "02",
    icon: LineChart,
    title: "Healthcare operations research",
    description:
      "Supporting complex, multi-objective and multi-period decisions that balance operational efficiency, resilience, safety and quality of care.",
    tags: ["Multi-objective", "Multi-period"],
  },
  {
    number: "03",
    icon: Boxes,
    title: "Healthcare digital twins",
    description:
      "Developing computational representations of healthcare systems, clinical pathways and patient journeys to simulate scenarios, evaluate interventions and support adaptive decision-making before changes are implemented in practice.",
    tags: ["Digital twins", "Simulation"],
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Precision oncology and dynamic treatment optimisation",
    description:
      "Exploring personalised, adaptive cancer treatment strategies that account for evolving patient conditions, treatment responses, clinical uncertainty and safety constraints — to improve treatment effectiveness while minimising unnecessary toxicity and burden.",
    tags: ["Safety-constrained", "Adaptive care"],
  },
]

const audiences = [
  {
    icon: HeartPulse,
    title: "For patients",
    description:
      "Safer, more timely and more personalised treatment, improved quality of life and better care experiences.",
  },
  {
    icon: Stethoscope,
    title: "For doctors and clinicians",
    description:
      "Clearer decision support, greater visibility into treatment options and trade-offs, and more time to focus on patients.",
  },
  {
    icon: Users,
    title: "For nurses and care teams",
    description:
      "Better coordination, more manageable workloads, less operational friction and greater capacity to deliver compassionate care.",
  },
  {
    icon: Building2,
    title: "For healthcare institutions",
    description:
      "Smarter resource utilisation, more resilient operations and the ability to deliver high-quality care to both patients and staff sustainably.",
  },
]

const partners = [
  {
    abbreviation: "SGH",
    name: "Singapore General Hospital",
    type: "Hospital",
  },
  {
    abbreviation: "CGH",
    name: "Changi General Hospital",
    type: "Hospital",
  },
  {
    abbreviation: "NCCS",
    name: "National Cancer Centre Singapore",
    type: "Cancer centre",
  },
  {
    abbreviation: "DxD",
    name: "Diagnostics Development Hub",
    type: "Diagnostics",
  },
  {
    abbreviation: "CO",
    name: "Curie Oncology",
    type: "Oncology",
  },
]

const focusTags = [
  "Digital twins",
  "Multi-objective optimisation",
  "Multi-period decision-making",
  "Safety-aware intelligence",
]

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About | Q-Health Technologies"
        description="Q-Health Technologies Pte. Ltd. is a Singapore-based deep-tech company building the decision intelligence layer for modern healthcare, combining quantum computing, AI, mathematical optimisation and clinical expertise."
        path="/about"
      />

      <PageHero
        eyebrow="About Q-Health"
        breadcrumb="About"
        title="We build the decision intelligence layer for modern healthcare."
        description="Less uncertainty. Better decisions. Safer care. Better lives."
        actions={
          <>
            <Button asChild className="h-[46px] px-6 text-[14px]">
              <Link to="/contact">
                Partner with us
                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-[46px] border-[#b9cfe0] px-6 text-[14px]"
            >
              <Link to="/solutions">Explore our solutions</Link>
            </Button>
          </>
        }
        meta={
          <>
            <HeroMetaItem label="Based in" value="Singapore" />
            <HeroMetaItem label="Research" value="Singapore · Germany" />
            <HeroMetaItem label="Focus" value="Quantum × AI × Healthcare" />
          </>
        }
      />

      {/* Who we are */}
      <section className="py-16 lg:py-24">
        <div className="page-container grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A deep-tech company built across disciplines."
            />
            <div className="mt-6 space-y-5 text-[16px] leading-[28px] text-body">
              <p>
                Q-Health Technologies Pte. Ltd. is a Singapore-based deep-tech company bringing
                together leading scientists in quantum computing and AI, mathematical optimisation
                and artificial intelligence, alongside medical experts and healthcare practitioners.
              </p>
              <p>
                With interdisciplinary research expertise spanning Singapore and Germany, we develop
                next-generation decision intelligence technologies to make healthcare safer,
                smarter, more efficient and more personalised.
              </p>
              <p className="border-l-2 border-sky/40 pl-5 text-[16.5px] leading-[28px] font-medium text-navy">
                We believe that better healthcare begins with better decisions — decisions that
                account for uncertainty, balance competing priorities and adapt as patients&apos;
                needs and clinical conditions evolve.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Singapore-based, internationally connected",
                "Quantum × AI, optimisation and clinical expertise",
                "Research spanning Singapore and Germany",
                "Built with clinicians, for clinicians",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mist text-[#0a4285]">
                    <Check className="size-3" strokeWidth={2.6} />
                  </span>
                  <span className="text-[14.5px] leading-[22px] font-medium text-navy">{item}</span>
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
            <div className="absolute -bottom-6 left-6 w-[260px] rounded-[16px] border border-[#e6eef6] bg-white/95 p-5 shadow-[0_24px_50px_-30px_rgba(13,45,85,0.45)] backdrop-blur sm:left-8">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-sky uppercase">
                Our belief
              </p>
              <p className="mt-2 text-[15px] leading-[23px] font-semibold text-navy">
                Better healthcare begins with better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced science */}
      <section className="border-y border-[#eef3f8] bg-[#f8fbfd] py-16 lg:py-24">
        <div className="page-container">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Our approach"
                title="Advanced science. Human-centred healthcare."
              />
              <div className="mt-6 space-y-5 text-[15.5px] leading-[28px] text-body">
                <p>
                  Healthcare decisions are rarely simple. Hospitals must balance patient safety,
                  treatment effectiveness, resource availability, operational efficiency and the
                  wellbeing of healthcare professionals — often across multiple time periods and
                  under significant uncertainty.
                </p>
                <p>
                  The future belongs not to any single technology, but to the intelligent
                  integration of complementary scientific capabilities that make complex decisions
                  more predictable, precise and manageable.
                </p>
                <p>
                  Q-Health brings together advanced mathematics, artificial intelligence,
                  high-performance computing, quantum technologies and healthcare expertise to
                  create an integrated, next-generation decision-support system. The whole is
                  greater than the sum of its parts.
                </p>
                <p>
                  Our technology integrates these capabilities to address challenges in digital
                  twins, multi-objective optimisation, multi-period decision-making and
                  safety-aware intelligence — supporting healthcare institutions to explore
                  alternative scenarios, anticipate future needs, evaluate trade-offs and make
                  informed decisions as circumstances evolve with uncertainty.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {focusTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#dbe7f1] bg-white px-3 py-1.5 text-[11.5px] font-medium text-[#41546b]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="self-start rounded-[18px] border border-[#eaf0f6] bg-white p-7 shadow-[0_24px_50px_-42px_rgba(13,45,85,0.3)]">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#5f7288] uppercase">
                Integrated capabilities
              </p>
              <ul className="mt-5 space-y-4">
                {capabilities.map((capability) => {
                  const Icon = capability.icon
                  return (
                    <li key={capability.title} className="flex items-start gap-3.5">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mist text-[#0a4285]">
                        <Icon className="size-[18px]" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-[14.5px] leading-[21px] font-semibold text-navy">
                          {capability.title}
                        </p>
                        <p className="mt-0.5 text-[12.5px] leading-[20px] text-body">
                          {capability.detail}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <p className="mt-6 border-t border-[#eef3f8] pt-4 text-[13px] leading-[22px] text-body">
                One integrated system — not five technologies in search of a problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four focus areas */}
      <section id="work" className="scroll-mt-28 py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="Our work"
            title="Four interconnected areas."
            description="Each area is a research and engineering discipline in its own right. Together they form one decision layer for healthcare."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon
              return (
                <article
                  key={area.number}
                  className="relative flex h-full flex-col rounded-[18px] border border-[#eaf0f6] bg-white p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-[52px] items-center justify-center rounded-full bg-mist text-[#0a4285]">
                      <Icon className="size-[24px]" strokeWidth={1.7} />
                    </span>
                    <span className="text-[11.5px] font-semibold tracking-[0.18em] text-[#8ea0b3]">
                      {area.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[18px] leading-[25px] font-semibold text-navy">
                    {area.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-[24px] text-body">
                    {area.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
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
        </div>
      </section>

      {/* We don't change how you care */}
      <section className="border-y border-[#eef3f8] bg-[#f8fbfd] py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="Human-centred"
            title="We don't change how you care. We help you care better."
            description="We do not seek to replace established clinical workflows. We build intelligence that works alongside healthcare professionals — supporting their expertise, respecting their judgement and helping them make complex decisions with higher efficiency, greater confidence and less stress."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {audiences.map((audience) => {
              const Icon = audience.icon
              return (
                <div
                  key={audience.title}
                  className="rounded-[16px] border border-[#eaf0f6] bg-white p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-mist text-[#0a4285]">
                    <Icon className="size-[21px]" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-[15.5px] font-semibold text-navy">{audience.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-[23px] text-body">
                    {audience.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recognition and collaboration */}
      <section id="recognition" className="scroll-mt-28 py-16 lg:py-24">
        <div className="page-container">
          <SectionHeading
            eyebrow="Recognition & collaboration"
            title="International recognition and collaboration."
            description="Frontier science only becomes useful when it meets real clinical and operational challenges. Our programmes and partnerships are built for that meeting point."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="relative overflow-hidden rounded-[20px] bg-[#08244b] p-8 text-white sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-16 size-[300px] rounded-full bg-[radial-gradient(circle,rgba(44,152,212,0.5),rgba(44,152,212,0))]"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white/80 uppercase">
                  <Award className="size-3.5 text-[#7cc7ee]" strokeWidth={2} />
                  RIKEN · Japan
                </span>
                <h3 className="mt-5 max-w-[380px] text-[24px] leading-[32px] font-semibold sm:text-[27px] sm:leading-[36px]">
                  Selected for the JHPC-Quantum Test User Program
                </h3>
                <p className="mt-4 max-w-[440px] text-[14px] leading-[25px] text-white/70">
                  Q-Health has been selected for Japan&apos;s prestigious RIKEN JHPC-Quantum Test
                  User Program, reflecting our ambition to advance frontier quantum computing and
                  AI technologies towards practical healthcare applications.
                </p>
              </div>
            </article>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#5f7288] uppercase">
                Healthcare & innovation partners
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {partners.map((partner) => (
                  <div
                    key={partner.abbreviation}
                    className="flex items-center gap-3 rounded-[14px] border border-[#eaf0f6] bg-white p-4"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-mist text-[11.5px] font-semibold tracking-[0.02em] text-[#0a4285]">
                      {partner.abbreviation}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] leading-[18px] font-semibold text-navy">
                        {partner.name}
                      </p>
                      <p className="mt-0.5 text-[10.5px] font-medium tracking-[0.1em] text-[#5f7288] uppercase">
                        {partner.type}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3 rounded-[14px] border border-dashed border-[#d3e2ee] bg-[#f8fbfd] p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-sky ring-1 ring-[#d9e9f5]">
                    <Globe className="size-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-[13px] leading-[18px] font-semibold text-navy">
                      A growing network
                    </p>
                    <p className="mt-0.5 text-[10.5px] font-medium tracking-[0.1em] text-[#5f7288] uppercase">
                      Asia · Europe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-[900px] text-[15px] leading-[27px] text-body">
            Bringing together leading scientists and interdisciplinary researchers from Asia and
            Europe, Q-Health connects advances in quantum computing, artificial intelligence,
            mathematical sciences and oncology with real-world clinical and operational challenges.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="scroll-mt-28 border-y border-[#eef3f8] bg-[#f8fbfd] py-16 lg:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="text-[12px] font-semibold tracking-[0.155em] text-sky uppercase">
              Our vision
            </p>
            <h2 className="mt-3 text-[32px] leading-[40px] font-bold tracking-[-0.025em] text-navy sm:text-[38px] sm:leading-[46px]">
              Better decisions. Better care. Better lives.
            </h2>
          </div>

          <div className="mx-auto mt-9 max-w-[860px] space-y-5 text-[15.5px] leading-[28px] text-body">
            <p>
              We envision a future where every patient benefits from safer, more precise and more
              personalised care; where clinicians and nurses are empowered rather than overwhelmed
              by complexity; and where healthcare institutions can deliver better outcomes with
              greater confidence, efficiency and compassion.
            </p>
            <p>
              Our ambition is to make Quantum × AI-powered decision intelligence a trusted part of
              modern healthcare — transforming uncertainty into informed choices, competing
              objectives into balanced decisions and scientific breakthroughs into measurable
              improvements in people&apos;s lives.
            </p>
            <p>
              We aspire to make precision oncology more adaptive, healthcare operations more
              resilient and clinical decisions more intelligent, while keeping human wellbeing at
              the centre of every technological advance.
            </p>
          </div>

          <figure className="mx-auto mt-12 max-w-[820px] border-t border-[#dbe7f1] pt-9 text-center">
            <Quote className="mx-auto size-6 text-sky/70" strokeWidth={1.6} />
            <blockquote className="mt-4 text-[21px] leading-[32px] font-medium tracking-[-0.01em] text-navy sm:text-[25px] sm:leading-[37px]">
              Because behind every healthcare decision is a human life. And every better decision
              matters.
            </blockquote>
          </figure>
        </div>
      </section>

      <section className="pb-4">
        <div className="page-container">
          <div className="flex flex-col gap-4 border-t border-[#eef3f8] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-[12.5px] text-[#5f7288]">
              <MapPin className="size-4 text-sky" strokeWidth={1.8} />
              Q-HEALTH TECHNOLOGIES PTE. LTD. · Singapore
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-link transition-colors hover:text-brand"
            >
              Talk to our team
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with us"
        title="Let's build better decisions, together."
        description="Partner with a team that combines frontier science with clinical reality — and measures success at the point of care."
      />
    </>
  )
}
