import type { SVGProps } from "react"

/**
 * Custom line icons that mirror the pictograms used in the reference design.
 * They all share a 24x24 viewBox and a 2px stroke so they sit together evenly.
 */

export function TargetArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="11.3" cy="12.9" r="8" />
      <circle cx="11.3" cy="12.9" r="3.3" />
      <path d="M13.5 10.7 16.4 7.8" />
      <path
        d="M20.6 3.4 13.8 4.9 16.5 7.6 19.1 10.1Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TeamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="6.9" r="2.9" />
      <path d="M5.9 19.4v-1.2c0-2.8 2.7-5 6.1-5s6.1 2.2 6.1 5v1.2" />
      <circle cx="5.2" cy="10.6" r="1.9" />
      <path d="M2 19.4v-1.1c0-2 1.3-3.7 3.2-4.4" />
      <circle cx="18.8" cy="10.6" r="1.9" />
      <path d="M22 19.4v-1.1c0-2-1.3-3.7-3.2-4.4" />
    </svg>
  )
}

export function ChipIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="5.6" y="5.6" width="12.8" height="12.8" rx="2.4" />
      <rect x="9.7" y="9.7" width="4.6" height="4.6" rx="0.6" />
      <path d="M8.3 2.6v3M11.4 2.6v3M14.6 2.6v3M17.7 2.6v3" />
      <path d="M8.3 18.4v3M11.4 18.4v3M14.6 18.4v3M17.7 18.4v3" />
      <path d="M2.6 8.3h3M2.6 11.4h3M2.6 14.6h3M2.6 17.7h3" />
      <path d="M18.4 8.3h3M18.4 11.4h3M18.4 14.6h3M18.4 17.7h3" />
    </svg>
  )
}

export function BulbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8.1 14.4a5.9 5.9 0 1 1 7.8 0c-.7.6-1.1 1.4-1.1 2.3v.4H9.2v-.4c0-.9-.4-1.7-1.1-2.3Z" />
      <path d="M9.9 19.4h4.2" />
      <path d="M10.9 21.2h2.2" />
      <path d="M12 2.3v1.3" />
      <path d="m5.5 4.6.9.9M18.5 4.6l-.9.9M3.1 10.9h1.3M19.6 10.9h1.3" />
    </svg>
  )
}
