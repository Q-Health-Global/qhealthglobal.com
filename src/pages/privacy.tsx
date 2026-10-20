import { LegalPage, type LegalSection } from "@/components/sections/legal-page"
import { site } from "@/lib/site"

const updated = "20 October 2026"

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <p>
          Q-HEALTH TECHNOLOGIES PTE. LTD. (UEN {site.uen}) respects the privacy of everyone who
          visits this website or contacts us. This policy explains what information we collect
          through this website, why we collect it and how it is handled.
        </p>
        <p>
          This policy applies to this website only. Where we work with a health system, the handling
          of patient information is governed by a separate agreement and by that institution&apos;s
          own clinical governance arrangements.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <p>
          <strong className="font-semibold text-navy">Information you provide.</strong> When you use
          the contact form or write to us, we receive the details you choose to share — typically
          your name, organisation, work email, area of interest and message.
        </p>
        <p>
          <strong className="font-semibold text-navy">Technical information.</strong> Our hosting
          provider may process standard server logs, such as IP address, browser type and requested
          pages, to operate and secure the site.
        </p>
        <p>
          We do not knowingly collect special category data through this website, and we ask that
          you do not include patient-identifiable information in an enquiry.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    content: (
      <>
        <p>We use the information you provide to:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-[#9db6c9]">
          <li>respond to your enquiry and any follow-up conversation;</li>
          <li>assess whether our work is relevant to your institution;</li>
          <li>maintain business records and meet legal or regulatory obligations; and</li>
          <li>improve the clarity and usefulness of this website.</li>
        </ul>
        <p>
          We rely on your consent when you submit an enquiry, and on our legitimate interests in
          operating and improving our business. We do not sell personal information.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    content: (
      <>
        <p>
          This website does not set advertising or analytics cookies. It does not use third-party
          tracking scripts, and our typefaces are served from this domain rather than from a
          third-party font network.
        </p>
        <p>
          If we introduce measurement in future, this page will be updated and, where required,
          consent will be requested before any non-essential cookie is set.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing and disclosure",
    content: (
      <>
        <p>
          We share information only with service providers who support our operations (for example,
          email and hosting providers), with professional advisers where necessary, or where
          disclosure is required by law or a competent authority.
        </p>
        <p>
          Where a provider processes information outside Singapore, we take reasonable steps to
          ensure it is protected to a standard comparable to that required under Singapore law.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Retention and security",
    content: (
      <>
        <p>
          Enquiry records are kept for as long as needed to respond and maintain a business record,
          and are reviewed periodically. We apply reasonable technical and organisational measures
          to protect the information we hold, including access controls and encrypted transport.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: (
      <>
        <p>
          Subject to applicable law, you may request access to the personal information we hold
          about you, ask us to correct it, or withdraw consent to its use. To make a request, write
          to{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-link hover:underline">
            {site.email}
          </a>
          .
        </p>
        <p>
          If you believe your information has not been handled in accordance with Singapore&apos;s
          Personal Data Protection Act, you may contact the Personal Data Protection Commission of
          Singapore.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <>
        <p>
          We may update this policy from time to time. The revised version will be published on this
          page with a new review date. Material changes will be reflected in the summary at the top
          of the page.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-link hover:underline">
            {site.email}
          </a>{" "}
          or by post to Q-HEALTH TECHNOLOGIES PTE. LTD., {site.location}.
        </p>
      </>
    ),
  },
]

export function PrivacyPage() {
  return (
    <LegalPage
      metaTitle="Privacy policy | Q-Health Technologies"
      path="/privacy"
      title="Privacy policy"
      description="What information this website collects, how it is used, and the choices available to you."
      updated={updated}
      sections={sections}
    />
  )
}
