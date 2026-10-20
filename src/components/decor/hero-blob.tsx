export function HeroBlob() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 440 260"
      preserveAspectRatio="none"
      className="pointer-events-none absolute top-[336px] left-0 z-0 h-[260px] w-[440px]"
    >
      <defs>
        <linearGradient id="hero-blob-band" x1="0" y1="0.5" x2="0.85" y2="0.85">
          <stop offset="0%" stopColor="#ddf2fa" />
          <stop offset="35%" stopColor="#e5f5fb" />
          <stop offset="70%" stopColor="#f1fafd" />
          <stop offset="100%" stopColor="#fafdff" />
        </linearGradient>
        <filter id="hero-blob-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="13" />
        </filter>
      </defs>

      <g filter="url(#hero-blob-blur)" opacity="0.85">
        <path
          d="M0 25C40 65 80 110 120 150c50 40 120 65 200 74l120 8v8L320 234C240 226 170 214 120 204 80 196 40 186 0 174Z"
          fill="#e2f4fb"
        />
      </g>

      <path
        d="M0 25C40 65 80 110 120 150c50 40 120 65 200 74l120 8v8l-120-6c-80-8-150-31-200-70C80 130 40 85 0 44Z"
        fill="url(#hero-blob-band)"
        opacity="0.85"
      />

      <path
        d="M0 25C40 65 80 110 120 150c50 40 120 65 200 74l120 8v8L320 234C240 226 170 214 120 204 80 196 40 186 0 174Z"
        fill="url(#hero-blob-band)"
      />
    </svg>
  )
}
