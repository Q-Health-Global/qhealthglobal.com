import { ArrowRight, HeartPulse } from "lucide-react"
import { Link } from "react-router-dom"

import heroDoctor from "@/assets/hero-doctor.webp"
import { ChipIcon, TargetArrowIcon, TeamIcon } from "@/components/icons/feature-icons"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    title: "Better Decisions",
    description: "Under uncertainty",
    icon: TargetArrowIcon,
  },
  {
    title: "More Efficient Systems",
    description: "Higher utilisation, less disruption",
    icon: TeamIcon,
  },
  {
    title: "Improved Patient Outcomes",
    description: "From operations to treatment",
    icon: HeartPulse,
  },
  {
    title: "Cutting-Edge Technology",
    description: "Quantum × AI × Healthcare",
    icon: ChipIcon,
  },
]

/** Per-card offsets keep the four highlights on the exact rhythm of the design. */
const columnClasses = [
  "wide:pl-[30px]",
  "wide:border-l wide:border-[#dde8f1] wide:pl-[53px]",
  "wide:border-l wide:border-[#dde8f1] wide:pl-[47px]",
  "wide:border-l wide:border-[#dde8f1] wide:pl-[44px]",
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-[30px] wide:h-[501px] wide:pb-0"
    >
      <img
        src={heroDoctor}
        alt=""
        aria-hidden="true"
        width={876}
        height={388}
        fetchPriority="high"
        decoding="async"
        className="pointer-events-none absolute top-0 right-0 h-[230px] w-full max-w-none object-cover object-[70%_20%] opacity-40 sm:h-[300px] lg:h-[330px] lg:w-[50%] lg:object-[72%_25%] lg:opacity-100 lg:[mask-image:linear-gradient(to_right,transparent_0%,#00000080_9%,#000000_26%),linear-gradient(to_bottom,#000000_72%,transparent_100%)] lg:[mask-composite:intersect] wide:h-[388px] wide:w-[876px] wide:object-center wide:[mask-image:none]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[230px] bg-gradient-to-b from-white/30 via-white/70 to-white sm:h-[300px] lg:hidden"
      />

      <div className="page-container relative z-10 pt-[38px] pl-[26px] wide:pt-[51px] wide:pl-[26px]">
        <p className="flex flex-col gap-2 text-[11px] leading-none font-semibold tracking-[0.155em] text-sky sm:flex-row sm:items-center sm:gap-[19px] sm:text-[12.6px]">
          <span>Q-HEALTH</span>
          <span aria-hidden className="hidden h-[13px] w-px bg-[#a7cde3] sm:block" />
          <span>QUANTUM × AI FOR HEALTHCARE</span>
        </p>

        <h1 className="mt-[20px] max-w-[660px] text-[36px] leading-[41px] font-bold tracking-[-0.025em] text-navy sm:text-[44px] sm:leading-[49px] wide:mt-[25px] wide:text-[48.6px] wide:leading-[55px]">
          The Decision Intelligence Engine for Healthcare.
        </h1>

        <p className="mt-[16px] max-w-[556px] text-[16.5px] leading-[26px] text-body sm:text-[17.5px] sm:leading-[27px] wide:mt-[11px] wide:text-[18.7px] wide:leading-[29px]">
          We combine quantum computing, AI and healthcare analytics to support better
          decisions, more efficient healthcare systems, and improved patient outcomes.
        </p>

        <div className="mt-[24px] flex flex-wrap items-center gap-[14px] sm:gap-[19px] wide:mt-[20px] wide:gap-[27px]">
          <Button
            asChild
            size="lg"
            className="w-[192px] gap-[10px] px-0 text-[14.2px] max-sm:w-full"
          >
            <Link to="/solutions">
              Learn More
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-[167px] px-0 text-[14.2px] max-sm:w-full"
          >
            <Link to="/solutions">Our Solutions</Link>
          </Button>
        </div>
      </div>

      <div id="technology" className="relative z-10 mt-[36px] wide:absolute wide:inset-x-0 wide:bottom-0 wide:mt-0 wide:h-[121px]">
        <div className="page-container h-full">
          <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2 wide:h-full wide:grid-cols-[315px_366px_377px_1fr] wide:gap-0">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`flex items-center ${columnClasses[index]}`}
                >
                  <span className="flex size-[52px] shrink-0 items-center justify-center rounded-full bg-mist text-[#0a4285] wide:size-[60px]">
                    <Icon
                      className={
                        index === 2
                          ? "size-[27px] wide:size-[31px]"
                          : "size-[26px] wide:size-[30px]"
                      }
                      strokeWidth={index === 2 ? 1.8 : 1.9}
                    />
                  </span>
                  <span className="ml-[18px] wide:ml-[22px]">
                    <span className="block text-[14.2px] leading-[20px] font-semibold text-navy">
                      {item.title}
                    </span>
                    <span className="mt-[3px] block text-[12.8px] leading-[20px] text-body">
                      {item.description}
                    </span>
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
