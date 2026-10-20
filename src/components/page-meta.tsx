import { useEffect } from "react"

type PageMetaProps = {
  title: string
  description?: string
  path?: string
  noindex?: boolean
}

const SITE_URL = "https://qhealthglobal.com"
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement("meta")
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement("link")
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
}

/** Keeps the document head in sync with the active route. */
export function PageMeta({ title, description, path = "/", noindex = false }: PageMetaProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`

    document.title = title

    if (description) {
      setMeta('meta[name="description"]', { name: "description", content: description })
      setMeta('meta[property="og:description"]', {
        property: "og:description",
        content: description,
      })
      setMeta('meta[name="twitter:description"]', {
        name: "twitter:description",
        content: description,
      })
    }

    setMeta('meta[property="og:title"]', { property: "og:title", content: title })
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title })
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" })
    setMeta('meta[property="og:url"]', { property: "og:url", content: url })
    setMeta('meta[property="og:image"]', { property: "og:image", content: DEFAULT_OG_IMAGE })
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" })
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: DEFAULT_OG_IMAGE })
    setMeta('meta[name="robots"]', {
      name: "robots",
      content: noindex ? "noindex, nofollow" : "index, follow",
    })

    setLink("canonical", url)
  }, [title, description, path, noindex])

  return null
}
