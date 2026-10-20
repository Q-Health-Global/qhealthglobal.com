import { ArrowRight, Mail } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

type CtaBandProps = {
  eyebrow?: string
  title?: string
  description?: string
  compact?: boolean
}

export function CtaBand({
  eyebrow = "Get in touch",
  title = "Let's build better decisions together.",
  description = "Talk to our team about the decisions your institution is trying to improve — we will come back within two business days.",
  compact = false,
}: CtaBandProps) {
  return (
    <section className={compact ? "py-12 lg:py-14" : "py-16 lg:py-20"}>
      <div className="page-container">
        <div className="relative overflow-hidden rounded-[22px] bg-[#08244b] px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-[-6%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(44,152,212,0.45),rgba(44,152,212,0)_68%)]" />
            <div className="absolute bottom-[-60%] left-[30%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(35,170,243,0.25),rgba(35,170,243,0)_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,33,73,0.2),rgba(7,33,73,0.85))]" />
          </div>

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11.5px] font-semibold tracking-[0.155em] text-[#7cc7ee] uppercase">
                {eyebrow}
              </p>
              <h2 className="mt-3 max-w-[560px] text-[28px] leading-[35px] font-bold tracking-[-0.02em] text-white sm:text-[32px] sm:leading-[39px] lg:text-[36px] lg:leading-[43px]">
                {title}
              </h2>
              <p className="mt-4 max-w-[520px] text-[15px] leading-[26px] text-white/70">
                {description}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Button
                asChild
                className="h-[46px] bg-white px-6 text-[14px] text-[#08244b] shadow-none hover:bg-[#eaf4fb]"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </Button>
              <a
                href="mailto:contact@qhealthglobal.com"
                className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-[13.5px] font-medium text-white/85 transition-colors hover:border-white/50 hover:text-white"
              >
                <Mail className="size-4" strokeWidth={1.8} />
                contact@qhealthglobal.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
