# Q-Health Technologies — Website

Q-Health's public website: a pixel-accurate reproduction of the supplied
homepage, extended into a complete multi-page site in the same design language.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui primitives and
Lucide icons.

## Getting started

```bash
npm install
npm run dev      # local development server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # eslint
```

## Pages

| Route | Page | Notes |
| --- | --- | --- |
| `/` | Home | Exact reproduction of the reference design |
| `/about` | About | Who we are, integrated capabilities, four focus areas, human-centred care, recognition & partners, vision |
| `/solutions` | Our Solutions | Hospital operations, precision oncology, capabilities, engagement model |
| `/technology` | Technology | The decision stack, enterprise controls, responsible AI |
| `/impact` | Impact | Outcome metrics, impact pillars, engagement snapshots, evaluation method |
| `/team` | Our Team | Functions, advisory network, careers — no personal profiles |
| `/contact` | Contact | Enquiry form (mailto), company details, FAQs |
| `/privacy` | Privacy policy | What the site collects, cookies, retention, rights |
| `/terms` | Terms of use | Website terms, IP, disclaimers, governing law |
| `*` | Not found | Friendly 404 with routes home and to contact |

The contact address used across the site is **contact@qhealthglobal.com**.

## Footer

Every page ends with a two-part footer on the brand navy (`#072149`), giving the
page a deliberate, high-contrast close:

1. a brand + values strip (light logo variant, registration details, the four
   Q-Health values), and
2. a full site map (Solutions, Company, Resources), contact details, company
   registration data and a legal bar with “Back to top”.

Text on navy uses white at 45–75 % opacity, tuned to meet WCAG AA contrast for
body-size copy.

## Design system

| Token | Value | Usage |
| --- | --- | --- |
| `navy` | `#072149` | Headlines, brand marks |
| `brand` | `#04457f` | Primary buttons |
| `link` | `#0e52a3` | Text links, active nav item |
| `sky` | `#2c98d4` | Eyebrows, highlights |
| `sky-bright` | `#23aaf3` | Solution eyebrows |
| `mist` | `#e6f3fd` | Icon circles, hover fills |
| `body` | `#566780` | Paragraph copy |

Typography is **Inter**, self-hosted from `public/fonts` (latin + latin-ext
subsets) and preloaded. The reference composition is locked in at a `wide`
breakpoint (`90rem / 1440px`), with fluid reflow below it.

## Project structure

```
src/
├── assets/                 # WebP hero/solution imagery, logo
├── components/
│   ├── decor/              # background sweep decoration
│   ├── icons/              # custom line icons (target, team, chip, bulb)
│   ├── layout/             # header (nav + search + mobile menu), footer,
│   │                       # back-to-top
│   ├── sections/           # page hero, section heading, CTA band,
│   │                       # legal layout, homepage hero + solutions grid
│   └── ui/                 # shadcn/ui button, card and form primitives
├── lib/
│   ├── site.ts             # navigation + company details
│   └── utils.ts            # cn() helper
├── pages/                  # one component per route
├── App.tsx                 # routes, scroll management, lazy loading
└── index.css               # Tailwind theme, font faces, base styles
```

## Institutional details

- **SEO** — per-route title, description, canonical and Open Graph/Twitter tags;
  Organization JSON-LD; `robots.txt`; `sitemap.xml`; 1200×630 Open Graph image;
  web manifest and Apple touch icon.
- **Performance** — route-level code splitting (the homepage stays in the entry
  chunk), WebP imagery (≈85 % smaller than the source PNGs), font preloading,
  lazy/async decoding below the fold, `fetchpriority` on the hero.
- **Accessibility** — skip link, visible focus rings, landmark regions,
  labelled navigation, focus trap and focus restoration in site search, inline
  form validation with `aria-invalid`/`aria-describedby`, reduced-motion support.
- **UX** — sticky header with an elevation on scroll, site search (`⌘K` / `Ctrl+K`),
  active navigation states, back-to-top control, smooth anchor scrolling, and a
  friendly 404 and error boundary.

## Deployment (GitHub Pages + qhealthglobal.com)

The site is built and deployed by `.github/workflows/deploy.yml` on every push
to `main` (or manually via **Actions → Deploy Website → Run workflow**).

### One-time repository setup

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Set **Custom domain** to `qhealthglobal.com` and save.
3. Once the certificate is issued, enable **Enforce HTTPS**.

The first workflow run only deploys successfully after step 1–2 are done; use
**Re-run all jobs** if the initial run fails.

### DNS records

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `q-health-global.github.io` |

Optional IPv6 AAAA records for the apex:
`2606:50c0:8000::153`, `2606:50c0:8001::153`,
`2606:50c0:8002::153`, `2606:50c0:8003::153`.

DNS propagation can take up to 24 hours; GitHub issues the HTTPS certificate
after it resolves.

### How the deployment is wired

- `base: "/"` in `vite.config.ts` — the custom domain serves the site from its root.
- `public/CNAME` contains `qhealthglobal.com`, so the custom domain travels with
  every artifact.
- `scripts/postbuild.mjs` (run automatically by `npm run build`) copies
  `dist/index.html` to `dist/404.html`. GitHub Pages serves that file for deep
  links such as `/about`, letting the SPA boot and render the right route.
- The workflow publishes `dist/` with `actions/upload-pages-artifact` and
  `actions/deploy-pages`.

## Notes

- The contact form composes an email to `contact@qhealthglobal.com` and hands it
  to the visitor's mail client — no backend is required.
- The team page deliberately publishes functions and advisory disciplines rather
  than individual profiles.
- Impact figures are indicative pilot outcomes and should be replaced or approved
  before launch. Legal pages are standard templates and should be reviewed by
  counsel.
