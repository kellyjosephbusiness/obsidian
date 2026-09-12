# Shared builder context — FundLine Capital secondary pages

## Brand and content rules (non-negotiable)
- The site is **FundLine Capital**, a small-business lending marketplace (one application → offers from 75+ lenders; funded in as little as 24 hours; no impact to credit score to apply). Copy is adapted from lendio.com's positioning but reworded; nothing insurance-related may remain: no policy/coverage/carrier/underwriter/claim/premium/D&O/CGL/EPLI/E&O/cyber-liability language. "Underwriting" may only appear when describing slow *bank* lending.
- Keep the source page's **outline exactly**: same sections in the same order, same layout, spacing, type scale, borders/rails, radii, shadows, animations and interactions. Only the words, brand and colors change.
- Names, quotes, investors, stats, dates and dollar figures are **fictional placeholders**; never mention Corgi, Lendio, TCV, or real investors/people. Use "FundLine Capital", "FundLine" (short), founders "Maya Chen (co-founder & CEO)" and "Daniel Okoro (co-founder & COO)", media contact "press@fundlinecapital.com".
- Lending vocabulary map (use consistently): policy→loan product; coverage→funding/financing; quote→offer; "Get insured"→"Apply now"; "Get a quote instantly"→"Check eligibility"; "Book a demo"→"Book a call"; broker→broker/ISO partner (loan brokers are a real lending channel); carrier→lender; underwriting→credit decision; bind→accept an offer; certificate→funding confirmation / payoff letter; claim→draw / repayment event.
- Mascot artwork: the corgi illustrations may be reused where the source uses them (they are flagged separately for the user). Prefer the FundLine mark (`FundLineMark`) where the source used the Corgi logo mark. Decorative orange-tinted PNG art must get `style={{ filter: "hue-rotate(195deg) saturate(0.85)" }}` like the home journey cards.

## Palette (navy replaces orange — already applied to shared code)
| role | value |
|---|---|
| primary / accent text / links | `#1e3a8a` (`--primary`) |
| primary hover | `#2b4ca8`; active `#5b75c4`; pressed-face base `#132a66` |
| chip tint bg / hover / active | `#dde4f6` / `#c5d1f0` / `#b7c5ec` |
| primary 50% ring | `rgba(30, 58, 138, 0.5)` |
| ink | `#191919` (headings), `#1d1d1d`, body `#4a4a4a`, muted `#4e4e4e`/`#606060`/`#7b7b7b` |
| surfaces | page `#f6f6f6`, card `#ffffff`, dark band `#313131`/`#191919`, hairline `#e1e1e1`, dark hairline `#585858` |
| legacy/"old way" pink (keep) | `#ff405d`, `#ff94a4`, `#ffe9ec` |
| badge gradient (keep) | `linear-gradient(to right,#f66398 0%,#fb846c 60.9%,#fe9850 100%)` |
Whenever the source computed style says `rgb(255, 92, 0)` write `#1e3a8a`; `rgb(255, 125, 51)` → `#2b4ca8`; `rgb(255, 222, 204)` → `#dde4f6`; `rgb(255, 201, 163)` → `#c5d1f0`; `rgb(204, 74, 0)` → `#132a66`.

## Typography / tokens (see `root-8a5edab2/DESIGN_TOKENS.md` and `src/app/globals.css`)
- Headings `font-mono` = F37 Bolton 500 (`fontFamily:f37Bolton` in trees). Body Geist 400. Hero serif italic = `.homepage-hero-serif-font`.
- H1 60/60 tracking -1.92px (`--h1-*` vars: 36/48/60 by breakpoint). Section H2 48/48 tracking -1.2px via `text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]` (28/40/48). `h1..h6 { text-wrap: balance }` is global.
- Utilities: `.text-body` (16/1.2/-0.24px), `.text-body-large` (20/1.2/-0.3px), `.btn-text-small/large`, `.msym` Material Symbols Sharp (use `<MaterialIcon name=… />`).
- Page gutters `px-4 md:px-6 lg:px-16`; rails are 1px `#e1e1e1` absolutely positioned at the container edges (pattern in `root-8a5edab2/PoliciesSection.tsx` / `FaqSection.tsx`). Section paddings `py-16 md:py-20`.
- Cards: `rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]`; card headers `-mx-px -mt-px rounded-[24px] shadow-[0_0_24px_0_rgba(25,25,25,0.35)]`.

## Reusable components (import from `@/components/sites/corgi-insure-a0f7893c/...`)
- `shared/PressableButton` — `variant="primary"|"black"|"white"`, `size="small"|"large"`, `href`, `className`, `faceClassName`, `dataTrack`. External hrefs render `<a>`.
- `shared/MaterialIcon` `{name,size,className,fill,weight}`; `shared/FundLineLogo` (`FundLineMark`, `FundLineLogo`, `FundLineBadge`); `shared/InitialsAvatar` (`InitialsAvatar`, `gradientFor`, `initialsOf`); `shared/CursorChip`; `shared/icons`.
- `root-8a5edab2/SiteHeader` `({ actions? })` where `actions = { signIn:{label,href}, secondary:{label,href}, primary:{label,href} }` (default: Sign in / Book a call / Apply now).
- `root-8a5edab2/SiteFooter` `({ cta? })` where `cta = { headingLine1, headingLine2, buttons:{ demo:{label,href}, insured:{label,href} } }` — the dark band + stats ticker + link grid + landscape + disclaimer. Every page ends with it.
- `root-8a5edab2/PoliciesSection` `({ id?, heading?, sub?, policies?, specialized?, cta? (null hides), showMascots?, dataTrack? })` — the 8 loan-product cards + flickable specialty stack. `root-8a5edab2/PolicyCard`, `SpecializedCoveragesStack({ coverages })`.
- `root-8a5edab2/FaqSection` `({ items?, heading?, footer? })` — single-open accordion.
- `root-8a5edab2/JourneySection` `({ heading?, sub?, packages?, pills? })` and `CoveragePackageGrid({ packages, pills })` — the 4 stage-package cards with pill panels. `ctaVariant: "primary"|"black"`.
- `root-8a5edab2/HeroSection` has the proof-point ticker (`HERO_TICKER`); `root-8a5edab2/data.ts` exports `LINKS`, `NAV_ACTIONS`, `POLICIES`, `SPECIALIZED_COVERAGES`, `COVERAGE_PACKAGES`, `POLICY_PILLS`, `FAQ`, `FOOTER_CTA`, `HERO_TICKER`, `ASSETS`, `SHARED`, `BRAND`.
- Types: `@/types/sites/corgi-insure-a0f7893c/home` (`Policy`, `SpecializedCoverage`, `CoveragePackage`, `PolicyPill`, `FaqItem`, `NavMenu`, `Testimonial`, `HeroTickerItem`, `FooterStat`…).

## Page shell (copy from `src/app/page.tsx`)
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only …">Skip to main content</a>
<SiteHeader />
<div id="site-content-shell" className="flex min-h-screen flex-1 flex-col bg-background">
  <main id="main-content" className="relative z-0 flex-grow"> …sections… </main>
  <SiteFooter />
</div>
```
Export `metadata` (FundLine title/description) from each route file. Header is fixed and hides on scroll; content starts under it (source hero sections use `pt-[158px]`/`pt-[170px]` to clear the announcement bar + nav).

## Behaviors library (already implemented on the home page — reuse patterns)
- In-view stagger reveal: `motion/react` variants (`IntroSection.tsx`, `QuoteStripSection.tsx`).
- Marquee: CSS keyframe `logo-scroll` (`-25%` track, 4 copies) in `HeroSection.tsx`/`SiteFooter.tsx`.
- Single-open accordion with height spring: `FaqSection.tsx`. Pill panels: `CoveragePackageGrid.tsx`. Pressable 3D buttons: `PressableButton`.
- Sticky rails: `position: sticky; top: calc(var(--navbar-height, 55px) + 24px)` with `transition: top .3s` — the header sets `--navbar-height`? (It does not yet: use `top-[116px]` at ≥1280 where the announcement bar is visible, and read the tree for exact values.)

## Rules of engagement for builders
1. Read `SPEC.md`, `sections.json`, `page-text.txt`, the three `dom-*.tree.txt` trees (search them by section heading text), `behaviors.json`, `asset-manifest.json` and the source `full-page-*.png` screenshots before writing code.
2. Write only inside your component root, your types file and your route file (plus `docs/design-references/<page-key>/qa/`). Never edit `src/app/globals.css`, `layout.tsx`, `page.tsx`, anything under `root-8a5edab2/` or `shared/`, other pages, or run git. If a shared change is truly required, work around it locally and list it in your final report.
3. Match computed values from the trees exactly (px, colors, radii, gaps, shadows); use Tailwind arbitrary values. Mobile-first with `md:`/`lg:`/`xl:` overrides taken from the 390/768/1440 trees.
4. `npx tsc --noEmit` and `npm run lint` must pass. No `any`. Named exports, PascalCase components, `"use client"` only where hooks are used.
5. Verify visually: the dev server is on http://localhost:3000 (Turbopack hot-reloads new routes). Capture your page with
   `PW_W=1440 PW_H=900 node /private/tmp/claude-501/-Users-kelly-Obsidian/739343c1-13a6-46f8-b621-2a12043d8f8c/scratchpad/pw.mjs /private/tmp/claude-501/-Users-kelly-Obsidian/739343c1-13a6-46f8-b621-2a12043d8f8c/scratchpad/shot.mjs <url> <outPng>` (also PW_W=768 PW_H=1024 and PW_W=390 PW_H=844) and compare against the source screenshots; iterate until section order, heights and styling match. Save captures under `docs/design-references/corgi-insure-a0f7893c/<page-key>/qa/`.
6. Final report: what was built, files created, deviations from the source and why, any shared change you needed, and the QA capture paths.
