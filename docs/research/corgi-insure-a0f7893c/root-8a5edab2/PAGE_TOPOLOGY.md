# Page Topology — corgi.insure home (desktop 1440×900)

Page: `body` → `header` (fixed) + `#site-content-shell` (flex col, min-h-screen, bg #f6f6f6) → `main` (relative z-0 flex-grow) → `div.flex.min-h-screen.flex-col.overflow-clip.bg-background.text-foreground` → 9 `<section>` + `<footer>`.
Total scrollHeight 9442px at 1440×900. Body bg `#f6f6f6`, text `#1d1d1d`. `html { scroll-behavior: smooth }`. No smooth-scroll library (no Lenis/Locomotive). No scroll-snap.

Global vertical guide lines: nearly every section draws 1px `#e1e1e1` (or `#585858` on dark sections) rails at `left/right: max(64px, calc((100vw-1600px)/2))` (16px on mobile, 24px md) plus full-width `w-screen` horizontal hairlines above/below card grids. These are part of the design and must be reproduced.

| # | Working name | Selector on live site | top | height | bg | Interaction model |
|---|---|---|---|---|---|---|
| H | SiteHeader (fixed overlay, z-50) | `header.fixed.top-0` | 0 | 92 (36 banner + 56 nav) | banner #ff5c00; nav rgba(255,255,255,.85)+blur(6px) | scroll-driven hide/show; hover dropdowns (desktop ≥1280); click drawer (<1280) |
| 1 | HeroSection | `section.h-svh` | 0 | 900 (100svh) | cloud photo + overlays | static + CSS logo marquee |
| 2 | IntroSection | `section.bg-background.px-4.pt-4` | 900 | 320 | #f6f6f6 with dark #313131 card | hover 3D card swap (desktop) / click swap (mobile) |
| 3 | QuoteStripSection | `section.border-b.bg-background` (3rd) | 1220 | 321 | #f6f6f6 | in-view staggered reveal (time-based) |
| 4 | JourneySection | `section.min-h-[max(720px,100vh)]` | 1541 | 900 | #f6f6f6 | click pills → inline description |
| 5 | AdvantageSection | `section.bg-[#313131]` | 2441 | 638 | #313131 | CSS chip marquee + JS orb physics |
| 6 | GetQuotedSection (desktop, `hidden lg:block`) | `section[aria-label="Get covered or book a demo"]` | 3079 | 1747 (= 100vh + panelH 367 + 480) | #f6f6f6 | scroll-driven sticky flip (2 states) |
| 6m | GetQuotedMobile (`lg:hidden`) | same index on <1024 | — | 1330 @390 | #f6f6f6 | static stacked |
| 7 | TestimonialsSection | `section.h-screen` | 4826 | 900 | #f6f6f6 | JS marquee, drag/flick, hover slow-down |
| 8 | PoliciesSection | `section#explore-coverages` | 5726 | 1396 | #f6f6f6 | static grid + physics card stack (auto-flick every 4.2s, drag) |
| 9 | FaqSection | `section` (FAQ) | 7122 | 706 | #f6f6f6 | single-open accordion |
| F | SiteFooter | `footer` | 7828 | 1934 | #f6f6f6 / dark CTA band #313131 / black disclaimer | CSS press marquee; link hovers |

Z-layers: header z-50 fixed (pointer-events-none on wrapper, auto on bars); cursor chips (portals) fixed z-50; main z-0. Journey cards etc. use local z.

Assembly (`src/app/page.tsx`):
```
<SiteHeader />
<div className="flex min-h-screen flex-1 flex-col bg-background">  // #site-content-shell
  <main id="main-content" className="relative z-0 flex-grow">
    <div className="flex min-h-screen flex-col overflow-clip bg-background text-foreground">
      <HeroSection/> <IntroSection/> <QuoteStripSection/> <JourneySection/> <AdvantageSection/>
      <GetQuotedSection/> (desktop lg+) <GetQuotedMobile/> (<lg)
      <TestimonialsSection/> <PoliciesSection/> <FaqSection/>
    </div>
  </main>
  <SiteFooter/>
</div>
```
Also a `<a class="sr-only focus:not-sr-only focus:fixed …" href="#main-content">Skip to main content</a>` before the header.

## Responsive summary (see dom/mobile and dom/tablet trees for exact values)
- Breakpoints used: Tailwind defaults md 768, lg 1024, xl 1280, 2xl 1536, plus min-[1680px].
- Header: full nav only at xl (≥1280). Below: logo + hamburger; drawer with accordion groups; banner text wraps (56px tall at 390).
- Hero: h1 60px desktop / 36px mobile; corgi 299px lg / 280 md / 200 base; hand 318×241 md / 238×180 base rotated -15deg on base.
- Journey: 4 cols xl, 2 cols md, 1 col base.
- Advantage: 2 cols md, 1 col base.
- Get quoted: desktop sticky variant only ≥lg; separate stacked variant <lg.
- Testimonials: cards 320×500 base, 382×560 md.
- Policies: 3 cols lg, 2 md, 1 base; specialized stack card spans/centers at md.
- Footer link grid: 5 cols md, 2 cols sm, 1 col base.
