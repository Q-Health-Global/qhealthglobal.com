import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]",
        className
      )}
    >
      <p className="text-[12px] font-semibold tracking-[0.155em] text-sky uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-[30px] leading-[37px] font-bold tracking-[-0.022em] text-navy sm:text-[34px] sm:leading-[41px] lg:text-[38px] lg:leading-[45px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[16px] leading-[27px] text-body">{description}</p>
      ) : null}
    </div>
  )
}
