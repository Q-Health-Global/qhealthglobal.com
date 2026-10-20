import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { PageMeta } from "@/components/page-meta"
import { Button } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <>
      <PageMeta title="Page not found | Q-Health Technologies" path="/404" noindex />
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(44,152,212,0.14),transparent_60%)]"
        />
        <div className="page-container relative max-w-[720px] text-center">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-sky uppercase">404</p>
          <h1 className="mt-4 text-[36px] leading-[44px] font-bold tracking-[-0.025em] text-navy sm:text-[44px] sm:leading-[52px]">
            This page has moved, or never existed.
          </h1>
          <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[28px] text-body">
            The link may be out of date. Return to the homepage, or get in touch and we will point
            you in the right direction.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="h-[46px] px-6 text-[14px]">
              <Link to="/">
                Back to home
                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-[46px] border-[#b9cfe0] px-6 text-[14px]"
            >
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
