import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"
import { Link } from "react-router-dom"

import cardOncology from "@/assets/card-oncology.webp"
import cardOperations from "@/assets/card-operations.webp"
import { cn } from "@/lib/utils"

type Solution = {
  href: string
  eyebrow: string
  title: ReactNode
  description: ReactNode
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  imageClassName: string
}

const solutions: Solution[] = [
  {
    href: "/solutions#hospital-operations",
    eyebrow: "Hospital Operations",
    title: (
      <>
        Optimizing Healthcare
        <br />
        Operations
      </>
    ),
    description: (
      <>
        AI and quantum optimization to improve operating-theatre scheduling,
        resource utilisation and overall hospital efficiency under real-world
        uncertainty.
      </>
    ),
    image: cardOperations,
    imageAlt: "Operating theatre with surgical lights and equipment",
    imageWidth: 268,
    imageHeight: 247,
    imageClassName:
      "wide:absolute wide:right-[20px] wide:top-[23px] wide:h-[247px] wide:w-[268px]",
  },
  {
    href: "/solutions#precision-oncology",
    eyebrow: "Precision Oncology",
    title: (
      <>
        Towards More
        <br />
        Personalised Treatment
      </>
    ),
    description: (
      <>
        Data-driven, AI-powered decision support to help identify
        patient-specific risks and support more precise and effective treatment
        strategies.
      </>
    ),
    image: cardOncology,
    imageAlt: "Clinician reviewing a breast scan on a diagnostic display",
    imageWidth: 293,
    imageHeight: 247,
    imageClassName:
      "wide:absolute wide:right-[20px] wide:top-[20px] wide:h-[247px] wide:w-[292px]",
  },
]

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative z-10 pt-[36px] pb-[12px] wide:pt-0 wide:pb-0"
    >
      <div className="page-container">
        <div className="grid grid-cols-1 gap-[28px] wide:grid-cols-2">
          {solutions.map((solution) => (
            <article
              key={solution.eyebrow}
              className="relative overflow-hidden rounded-[14px] border border-[#eef3f8] bg-white p-[24px] shadow-[0_10px_22px_-18px_rgba(13,45,85,0.22)] sm:p-[28px] wide:h-[292px] wide:pt-[28px] wide:pr-[300px] wide:pb-[24px] wide:pl-[34px]"
            >
              <div className="lg:flex lg:items-center lg:gap-[32px] wide:block">
                <div className="min-w-0 lg:flex-1">
                  <p className="text-[12px] leading-none font-semibold tracking-[0.155em] text-sky-bright uppercase">
                    {solution.eyebrow}
                  </p>

                  <h2 className="mt-[15px] max-w-[310px] text-[24px] leading-[30px] font-bold tracking-[-0.03em] text-navy sm:text-[26px] sm:leading-[32px] wide:text-[28px] wide:leading-[34px]">
                    {solution.title}
                  </h2>

                  <p className="mt-[11px] max-w-[302px] text-[14.8px] leading-[23.8px] text-[#63748a] lg:max-w-[420px] wide:max-w-[302px]">
                    {solution.description}
                  </p>

                  <Link
                    to={solution.href}
                    aria-label={`Learn more about ${solution.eyebrow.toLowerCase()}`}
                    className="mt-[19px] inline-flex items-center gap-[10px] text-[14.6px] font-semibold text-link transition-colors hover:text-brand"
                  >
                    Learn More
                    <ArrowRight className="size-[18px]" strokeWidth={2} />
                  </Link>
                </div>

                <img
                  src={solution.image}
                  alt={solution.imageAlt}
                  width={solution.imageWidth}
                  height={solution.imageHeight}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "mt-[22px] h-[210px] w-full rounded-[12px] object-cover lg:mt-0 lg:h-[240px] lg:w-[40%] lg:shrink-0",
                    solution.imageClassName
                  )}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
