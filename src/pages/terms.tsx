import { LegalPage, type LegalSection } from "@/components/sections/legal-page"
import { site } from "@/lib/site"

const updated = "20 October 2026"

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    content: (
      <>
        <p>
          These terms govern your use of this website, operated by Q-HEALTH TECHNOLOGIES PTE. LTD.
          (UEN {site.uen}). By accessing or using the site, you agree to these terms. If you do not
          agree, please do not use the site.
        </p>
      </>
    ),
  },
  {
    id: "purpose",
    title: "Purpose of this website",
    content: (
      <>
        <p>
          This website describes our company and our work. It is provided for general information
          only. Nothing on this site is medical advice, a diagnosis, a treatment recommendation, or
          a substitute for the judgement of a qualified clinician.
        </p>
        <p>
          Any decision-support capability described here is configured and governed within a
          specific institution, under that institution&apos;s clinical governance arrangements.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "Permitted use",
    content: (
      <>
        <p>You agree to use this website lawfully and not to:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-[#9db6c9]">
          <li>interfere with the operation, security or availability of the site;</li>
          <li>attempt to access areas or data you are not authorised to access;</li>
          <li>copy, scrape or republish substantial parts of the site without permission; or</li>
          <li>use the site to transmit unlawful, misleading or harmful material.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <>
        <p>
          The content, design, graphics and marks on this site are owned by or licensed to Q-HEALTH
          TECHNOLOGIES PTE. LTD. and are protected by applicable intellectual property laws. You
          may view and print pages for your own reference. No other licence is granted.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party links",
    content: (
      <>
        <p>
          This site may link to external websites. We do not control those sites and are not
          responsible for their content, availability or privacy practices. Links are provided for
          convenience and do not imply endorsement.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    content: (
      <>
        <p>
          The site is provided &quot;as is&quot; and &quot;as available&quot;. To the extent
          permitted by law, we make no warranty that the content is complete, accurate or current,
          or that the site will be uninterrupted or error-free.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Q-HEALTH TECHNOLOGIES PTE. LTD. is not liable
          for any indirect or consequential loss, or for any loss arising from reliance on the
          general information published on this website.
        </p>
        <p>
          Nothing in these terms excludes liability that cannot lawfully be excluded, including
          liability for death or personal injury caused by negligence.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: (
      <>
        <p>
          These terms are governed by the laws of Singapore. The courts of Singapore have
          jurisdiction over any dispute arising from the use of this website, subject to any
          mandatory consumer protections that apply to you.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    content: (
      <>
        <p>
          We may update these terms from time to time. The current version is always available on
          this page, with the review date shown above. Continued use of the site after a change
          constitutes acceptance of the revised terms.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-link hover:underline">
            {site.email}
          </a>{" "}
          or by post to Q-HEALTH TECHNOLOGIES PTE. LTD., {site.location}.
        </p>
      </>
    ),
  },
]

export function TermsPage() {
  return (
    <LegalPage
      metaTitle="Terms of use | Q-Health Technologies"
      path="/terms"
      title="Terms of use"
      description="The terms that apply to your use of the Q-Health Technologies website."
      updated={updated}
      sections={sections}
    />
  )
}
