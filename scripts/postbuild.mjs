import { copyFileSync, existsSync } from "node:fs"
import { resolve } from "node:path"

/**
 * GitHub Pages serves static files only. Because the site uses client-side
 * routing (BrowserRouter), deep links such as /about or /privacy would 404 on a
 * hard refresh. Copying the built index.html to 404.html lets Pages hand those
 * URLs back to the SPA, which then renders the correct route.
 */
const dist = resolve(process.cwd(), "dist")
const indexFile = resolve(dist, "index.html")

if (existsSync(indexFile)) {
  copyFileSync(indexFile, resolve(dist, "404.html"))
  console.log("postbuild: copied index.html -> 404.html (SPA fallback)")
} else {
  console.warn("postbuild: dist/index.html not found — skipping 404 fallback")
}

if (existsSync(resolve(dist, "CNAME"))) {
  console.log("postbuild: CNAME present for custom domain")
} else {
  console.warn("postbuild: CNAME missing — the custom domain will not be applied")
}
