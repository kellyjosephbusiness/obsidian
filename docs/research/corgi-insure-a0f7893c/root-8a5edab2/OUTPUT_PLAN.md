# Output Plan — corgi.insure home page

| Item | Value |
|---|---|
| Target URL (given) | https://www.corgi.insure/ |
| Resolved origin | https://corgi.insure (www redirects here; canonical `https://www.corgi.insure/`) |
| app-root | `.` (repository root, untouched template) |
| site-key | `corgi-insure-a0f7893c` (sha256("https://corgi.insure")[0:8]) |
| page-key | `root-8a5edab2` (sha256("/")[0:8]) |
| Destination route | `/` → `src/app/page.tsx` (replaces the template scaffold; first single-URL clone in an untouched template) |
| Artifact root | `docs/research/corgi-insure-a0f7893c/root-8a5edab2/` |
| Screenshot root | `docs/design-references/corgi-insure-a0f7893c/root-8a5edab2/` |
| Component root | `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/` |
| Shared components | `src/components/sites/corgi-insure-a0f7893c/shared/` |
| Asset root | `public/sites/corgi-insure-a0f7893c/root-8a5edab2/` |
| Shared assets | `public/sites/corgi-insure-a0f7893c/shared/` (fonts, seo, logo) |
| Download script | `scripts/download-assets-corgi-insure-a0f7893c-root-8a5edab2.mjs` |
| Types | `src/types/sites/corgi-insure-a0f7893c/home.ts` |

Shared foundation files that change (single-site app, so global changes are acceptable):
- `src/app/layout.tsx` — fonts (Geist via next/font/google; F37 Bolton, Georgia, heroHeading, heroSerif via next/font/local), metadata, favicons.
- `src/app/globals.css` — site design tokens, typography utilities, pressable-button mechanics, Material Symbols icon font, keyframes.

Pre-existing routes: only the template scaffold `/` (replaced by approval of the skill defaults). `/_not-found` untouched.

Tooling note: the in-app browser pane was hidden during this session (document.visibilityState = "hidden"), so all screenshots and behavior sweeps were captured with Playwright (chromium-1228) at 1440×900, 768×1024 and 390×844. Extraction scripts live in the session scratchpad; their outputs are in `dom/` (JSON + `.tree.txt` computed-style trees), `dom/mobile/`, `dom/tablet/`.
