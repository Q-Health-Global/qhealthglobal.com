import type * as React from "react"

import { cn } from "@/lib/utils"

const fieldStyles =
  "w-full rounded-[10px] border border-[#dbe5ef] bg-white px-4 text-[15px] text-navy shadow-[0_1px_2px_rgba(13,45,85,0.04)] transition-colors placeholder:text-[#6b7b8e] focus:border-[#2c98d4] focus:ring-2 focus:ring-[#2c98d4]/15 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-[#d92d20] aria-invalid:focus:border-[#d92d20] aria-invalid:focus:ring-[#d92d20]/15"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(fieldStyles, "h-[46px]", className)}
      {...props}
    />
  )
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(fieldStyles, "min-h-[140px] resize-y py-3 leading-[24px]", className)}
      {...props}
    />
  )
}

function Select({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      data-slot="select"
      className={cn(fieldStyles, "h-[46px] appearance-none bg-[length:16px] pr-10", className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23566780' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 14px center",
      }}
      {...props}
    />
  )
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn("block text-[13px] font-semibold text-navy", className)}
      {...props}
    />
  )
}

export { Input, Textarea, Select, Label }
