import { useState } from "react"
import { Check, Copy, Mail, MapPin, Plus } from "lucide-react"

import { PageMeta } from "@/components/page-meta"
import { HeroMetaItem, PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import { Input, Label, Select, Textarea } from "@/components/ui/form"
import { site } from "@/lib/site"

const interests = [
  "Hospital operations",
  "Precision oncology",
  "Technology & architecture",
  "Impact & evaluation",
  "Partnerships",
  "Careers",
  "Other",
]

const nextSteps = [
  {
    step: "01",
    title: "We reply within two business days",
    description: "A member of the team will respond directly — usually with a few clarifying questions.",
  },
  {
    step: "02",
    title: "A 30-minute conversation",
    description: "We discuss the decision you are trying to improve and whether it is a fit.",
  },
  {
    step: "03",
    title: "A scoped proposal",
    description: "If there is a fit, we outline a focused pilot with clear measures of success.",
  },
]

const faqs = [
  {
    question: "How long does a typical pilot take?",
    answer:
      "Most pilots run for eight to twelve weeks, including a two-week discovery phase, integration and an evaluation window. We agree the scope and the measures before work begins.",
  },
  {
    question: "Where does our data live?",
    answer:
      "The platform can be deployed in your own environment, a dedicated private cloud or our managed environment. We do not move patient data outside your estate without explicit agreement.",
  },
  {
    question: "Do you replace existing systems?",
    answer:
      "No. We integrate with your electronic record, scheduling and analytics systems, and surface recommendations inside the tools your teams already use.",
  },
  {
    question: "How do you handle clinical governance?",
    answer:
      "Every deployment includes a clinical safety case, human-in-the-loop sign-off and an audit trail. Clinical leadership from your institution sits on the steering group.",
  },
  {
    question: "Can you work with limited data?",
    answer:
      "Often, yes. We start by assessing what is available and design the model around the evidence that exists, rather than assuming a perfect dataset.",
  },
]

type FormErrors = Partial<Record<"name" | "organisation" | "email" | "message", string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-[12px] leading-[18px] text-[#b42318]">
      {message}
    </p>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  function clearError(field: keyof FormErrors) {
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const organisation = String(data.get("organisation") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const interest = String(data.get("interest") ?? "")
    const message = String(data.get("message") ?? "").trim()

    const next: FormErrors = {}
    if (!name) next.name = "Please enter your name."
    if (!organisation) next.organisation = "Please enter your organisation."
    if (!email) next.email = "Please enter your work email."
    else if (!emailPattern.test(email)) next.email = "Please enter a valid email address."
    if (!message) next.message = "Please tell us briefly how we can help."

    setErrors(next)

    const firstError = Object.keys(next)[0]
    if (firstError) {
      const field = form.querySelector<HTMLElement>(`[name="${firstError}"]`)
      field?.focus()
      return
    }

    const subject = `Website enquiry — ${organisation || name}`
    const body = [
      `Name: ${name}`,
      `Organisation: ${organisation}`,
      `Email: ${email}`,
      `Area of interest: ${interest}`,
      "",
      message,
    ].join("\n")

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex h-full min-h-[420px] flex-col items-start justify-center rounded-[18px] border border-[#dcebf6] bg-[#f6fbfe] p-8 sm:p-10"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-white text-[#0a4285] ring-1 ring-[#d5e8f4]">
          <Check className="size-5" strokeWidth={2.4} />
        </span>
        <h2 className="mt-6 text-[24px] leading-[32px] font-semibold text-navy">
          Your message is ready to send.
        </h2>
        <p className="mt-3 max-w-[440px] text-[14.5px] leading-[25px] text-body">
          Your email client should have opened with the message prepared. If it did not, write to
          us directly at{" "}
          <a className="font-semibold text-link hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-[13.5px] font-semibold text-link transition-colors hover:text-brand"
        >
          Write another message
        </button>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-[18px] border border-[#eaf0f6] bg-white p-7 shadow-[0_24px_50px_-42px_rgba(13,45,85,0.4)] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            className="mt-2"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={() => clearError("name")}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div>
          <Label htmlFor="organisation">Organisation</Label>
          <Input
            id="organisation"
            name="organisation"
            autoComplete="organization"
            className="mt-2"
            aria-invalid={errors.organisation ? true : undefined}
            aria-describedby={errors.organisation ? "organisation-error" : undefined}
            onChange={() => clearError("organisation")}
          />
          <FieldError id="organisation-error" message={errors.organisation} />
        </div>
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={() => clearError("email")}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
        <div>
          <Label htmlFor="interest">Area of interest</Label>
          <Select id="interest" name="interest" defaultValue={interests[0]} className="mt-2">
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your institution and the decision you would like to improve."
          className="mt-2"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={() => clearError("message")}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="h-[46px] px-7 text-[14px]">
          Send message
        </Button>
        <p className="max-w-[320px] text-[12px] leading-[19px] text-[#5f7288]">
          This opens your email client with the message prepared. We never share your details.
        </p>
      </div>
    </form>
  )
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-[#dbe5ef] px-3.5 py-2 text-[12px] font-semibold text-[#33445d] transition-colors hover:border-[#b9cfe0] hover:text-navy"
    >
      {copied ? <Check className="size-3.5 text-[#1a8a5a]" /> : <Copy className="size-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  )
}

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact | Q-Health Technologies"
        description="Contact Q-Health Technologies at contact@qhealthglobal.com to discuss decision intelligence for your institution."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        breadcrumb="Contact"
        title="Let's talk about the decisions ahead."
        description="Tell us about your institution and the decisions you are trying to improve. We reply within two business days."
        meta={
          <>
            <HeroMetaItem label="Email" value={site.email} />
            <HeroMetaItem label="Based in" value={site.location} />
            <HeroMetaItem label="Response" value="Within 2 business days" />
          </>
        }
      />

      <section className="py-14 lg:py-20">
        <div className="page-container grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
          <div>
            <h2 className="mb-5 text-[12px] font-semibold tracking-[0.155em] text-sky uppercase">
              Send a message
            </h2>
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-[18px] border border-[#eaf0f6] bg-white p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-mist text-[#0a4285]">
                  <Mail className="size-[21px]" strokeWidth={1.7} />
                </span>
                <CopyEmailButton />
              </div>
              <p className="mt-5 text-[11px] font-semibold tracking-[0.14em] text-[#5f7288] uppercase">
                Email us
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1.5 block text-[16px] font-semibold break-words text-navy transition-colors hover:text-link"
              >
                {site.email}
              </a>
              <p className="mt-3 text-[13px] leading-[22px] text-body">
                For technical, clinical or partnership enquiries, a single inbox reaches the right
                person.
              </p>
            </div>

            <div className="rounded-[18px] border border-[#eaf0f6] bg-[#f8fbfd] p-7">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#5f7288] uppercase">
                Company
              </p>
              <dl className="mt-4 space-y-3.5">
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.1em] text-[#5f7288] uppercase">
                    Legal entity
                  </dt>
                  <dd className="mt-0.5 text-[13.5px] leading-[21px] font-medium text-navy">
                    Q-HEALTH TECHNOLOGIES PTE. LTD.
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.1em] text-[#5f7288] uppercase">
                    UEN
                  </dt>
                  <dd className="mt-0.5 text-[13.5px] font-medium text-navy">{site.uen}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.1em] text-[#5f7288] uppercase">
                    Incorporated
                  </dt>
                  <dd className="mt-0.5 text-[13.5px] font-medium text-navy">
                    {site.incorporated}
                  </dd>
                </div>
                <div className="flex items-start gap-2 border-t border-[#e6edf5] pt-3.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-sky" strokeWidth={1.8} />
                  <dd className="text-[13.5px] leading-[21px] font-medium text-navy">
                    {site.location}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[18px] border border-[#eaf0f6] bg-white p-7">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#5f7288] uppercase">
                What happens next
              </p>
              <ol className="mt-5 space-y-5">
                {nextSteps.map((step) => (
                  <li key={step.step} className="flex gap-3.5">
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-sky">
                      {step.step}
                    </span>
                    <div>
                      <p className="text-[13.5px] leading-[21px] font-semibold text-navy">
                        {step.title}
                      </p>
                      <p className="mt-1 text-[12.5px] leading-[20px] text-body">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-[#eef3f8] bg-[#f8fbfd] py-16 lg:py-24">
        <div className="page-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.155em] text-sky uppercase">
              Frequently asked
            </p>
            <h2 className="mt-3 text-[28px] leading-[36px] font-bold tracking-[-0.02em] text-navy sm:text-[32px] sm:leading-[40px]">
              Practical questions, answered plainly.
            </h2>
            <p className="mt-4 max-w-[360px] text-[14.5px] leading-[25px] text-body">
              Still unsure whether a decision is a fit? Write to us — we are happy to talk through
              it before any commitment.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[14px] border border-[#eaf0f6] bg-white px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14.5px] font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <Plus
                    className="size-4 shrink-0 text-[#5f7288] transition-transform duration-200 group-open:rotate-45"
                    strokeWidth={2}
                  />
                </summary>
                <p className="mt-3 text-[13.5px] leading-[23px] text-body">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
