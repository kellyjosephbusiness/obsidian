# JourneySection Specification ("Coverage Designed Around Your Startup’s Journey")

## Overview
- **Target files:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/JourneySection.tsx` (server wrapper) + `CoveragePackageGrid.tsx` (client: cards, pills, selection state)
- **Screenshots:** `sections/04-journey-desktop.png`, `dom/04-journey-pill-open.png` (pill panel open), `sections-mobile/04-journey.png`, `sections-tablet/04-journey.png`
- **Interaction model:** click-driven (pills open/close a description panel; single selection across all cards)
- **Data:** `JOURNEY`, `COVERAGE_PACKAGES`, `POLICY_PILLS` from `./data`
- **Reference source:** `js/pretty/3f31h1wptpiw4.js` lines 200–341 (`CoveragePackageCard` + grid) — mirror its state model.

## DOM structure
```
<section class="relative flex min-h-[max(720px,100vh)] items-center overflow-clip border-[#e1e1e1] border-b bg-[#f6f6f6] px-4 py-16 md:px-6 md:py-20 lg:px-16">   // computed padding 80px 64px at 1440
  <div aria-hidden class="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]" />  + mirrored right rail
  <div class="-translate-y-[4vh] relative mx-auto flex w-full max-w-[1600px] flex-col gap-4 md:gap-6">
    <div class="flex flex-col gap-6 px-4 md:px-6">
      <h2 class="font-medium font-mono text-[#191919]" style: font-size var(--h1-font-size) (48px@1440, 28px@390: computed 28px/28px -0.896px), line-height 1, letter-spacing -0.032em>Coverage Designed Around Your Startup’s Journey</h2>
      <p class="text-body-large text-[#4a4a4a]">From your first check to your next round, we’ve built packages for every phase.</p>
    </div>
    <div ref=gridRef class="relative grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <div class="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />
      <div class="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />
      4 × <CoveragePackageCard />
    </div>
    <div class="flex flex-wrap items-center justify-center gap-2 pt-4 text-[#ff5c00]">
      <MaterialIcon name="info" size={20} className="shrink-0" />
      <span class="font-medium text-body">Click any</span>
      <a href="#explore-coverages" class="inline-flex items-center justify-center rounded-[4px] bg-[#ffdecc] px-2 py-1 font-medium text-[#ff5c00] text-[14px] leading-none transition-[background-color,transform] duration-300 hover:bg-[#ffc9a3]">Policy</a>
      <span class="font-medium text-body">to see what it covers</span>
    </div>
  </div>
</section>
```
### CoveragePackageCard
```
<div class="flex h-full flex-col overflow-clip rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
  <div class="-mx-px -mt-px relative flex h-[160px] flex-col justify-end gap-3 overflow-clip rounded-[24px] border border-[#e1e1e1] bg-white p-5 shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
    <div aria-hidden class="pointer-events-none absolute flex items-center justify-center" style={{top, left, width, height}}>   // from pkg.art.wrapper
      <div style={{transform: pkg.art.transform}}><Image src alt="" width height class="h-[Hpx] w-[Wpx] object-contain|object-cover" /></div>
    </div>
    <div class="relative flex flex-col items-start gap-3">
      <h3 class="font-mono text-[24px] text-[#191919] leading-none tracking-[-1.024px] md:text-[32px]">{title}</h3>
      <p class="font-medium text-[#4a4a4a] text-[14px] leading-[1.2] tracking-[-0.21px] [text-wrap:balance]">{description}</p>
    </div>
  </div>
  <div class="flex flex-1 flex-col border-[#e1e1e1] border-b p-5">
    <p class="text-center font-medium text-[#4a4a4a] text-[12px] [text-wrap:balance]">{pillsIntro}</p>
    <div class="mt-3 flex flex-wrap items-start justify-center gap-3">
      pills… (the site wraps the last two pills in <span class="inline-flex shrink-0 items-start gap-3"> to keep them together; reproduce: wrap the final 2 items (3 for custom incl. the "+") in that span)
      <button type="button" class="relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[4px] bg-[#ffdecc] px-2 py-1 text-[12px] font-medium leading-none text-[#ff5c00] transition-[background-color,transform] duration-300 ease-out hover:bg-[#ffc9a3] data-[selected=true]:bg-[#ffbe99]">
        {ripple && <span aria-hidden class="pointer-events-none absolute inset-0 animate-chip-ripple rounded-[4px]" key={rippleKey} />}
        {label}
      </button>
      custom package only: <a href={morePoliciesHref} class="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[4px] bg-[#ffdecc] px-2 py-1 font-medium text-[12px] leading-none text-[#ff5c00] transition-[background-color,transform] duration-300 hover:bg-[#ffc9a3]">+</a>
    </div>
    <motion.div class="overflow-hidden" initial={false} animate={{height: selected ? measuredHeight : 0, marginTop: selected ? 12 : 0, opacity: selected ? 1 : 0}} transition={{height:{duration:.3, ease:[.25,.1,.25,1], delay}, marginTop:{same}, opacity:{duration:.2, ease:[.25,.1,.25,1], delay: swapping ? 0 : delay}}}>
      <AnimatePresence initial={false} mode="popLayout">{selected && <motion.div key={label} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.2, ease:[.25,.1,.25,1]}}>
        <div class="flex flex-col gap-1.5 rounded-[4px] bg-[#f6f6f6] px-2 py-2">
          <span class="font-semibold text-[#191919] text-[12px] leading-none">{label}</span>
          <span class="font-medium text-[#4a4a4a] text-[12px] leading-[1.35]">{description}</span>
        </div></motion.div>}</AnimatePresence>
    </motion.div>
    <div aria-hidden class="pointer-events-none invisible h-0 min-h-0 shrink-0 overflow-hidden">   // hidden measuring clone (same inner markup with refs) used to compute measuredHeight for the current label
      <div class="flex flex-col gap-1.5 rounded-[4px] bg-[#f6f6f6] px-2 py-2" ref=measure><span class="font-semibold text-[#191919] text-[12px] leading-none" ref/><span class="font-medium text-[#4a4a4a] text-[12px] leading-[1.35]" ref/></div>
    </div>
  </div>
  <div class="p-3">
    <PressableButton className="w-full" faceClassName="w-full gap-1 text-body" href={pkg.ctaHref} size="small" variant={pkg.ctaVariant} dataTrack="cta-homepage-package">
      <span class="inline-flex items-center whitespace-nowrap">Get a quote instantly</span>
      <MaterialIcon name={pkg.ctaIcon} size={16} />
    </PressableButton>
  </div>
</div>
```

## Computed styles (1440)
- section 1440×900 (min-h max(720px,100vh)), padding 80px 64px; inner column translated up 4vh (-36px); h2 48px/48px -1.536px; p 20px/24px -0.3px #4a4a4a; header block px-6.
- grid: 4 cols of 310px, gap 24px, rows 381px; hairlines full-width at grid top and bottom.
- card header: 310×160, padding 20px, radius 24px, border #e1e1e1, shadow 0 0 24px rgba(25,25,25,.05), `-mx-px -mt-px`.
- h3 32px/32px -1.024px F37 Bolton 400; description 14px/16.8px 500 -0.21px #4a4a4a.
- pills row: `mt-3` (12px), gap 12px, centered; pill 20px tall, 12px/12px 500 #ff5c00 on #ffdecc, padding 4px 8px, radius 4px, transition background-color 300ms cubic-bezier(0,0,.2,1) + transform 300ms.
- Pill colors: default `#ffdecc`; hover `#ffc9a3`; selected `#ffbe99`.
- Body block: p-5, border-bottom #e1e1e1, `flex-1`; CTA block p-3; CTA face 284×37 (w-full), 16px/19.2px 500 -0.24px; icon 16px.
- Card heights: 381px closed; when a panel opens the card grows (observed 476–492px) and the other cards in the row stretch to match (grid default `align-items: stretch` + `h-full`).
- Open panel content: bg #f6f6f6, radius 4px, padding 8px; label 12px/12px 600 #191919; desc 12px/16.2px 500 #4a4a4a; panel height e.g. 99px for CGL (3 desc lines), 83px for 2 lines.
- Art wrappers (desktop values from `COVERAGE_PACKAGES[i].art.wrapper`, same on mobile per the mobile tree): seed top:7 left:219 120×143 rotate(-28.18deg) img 69×125; series-a top:-24 left:172 188×161 rotate(-7.83deg) scaleX(-1) img 171×139; growth top:-58 left:163 248×209 rotate(-6.17deg) img 229×185; custom top:-1 left:187 189×105 rotate(180deg) img 189×105 object-cover. On mobile the wrapper left offsets shift with the wider card (358px): seed left 268, series-a 221, growth 212, custom 236 → i.e. they are anchored `right`-ish; implement as `right` offsets instead: seed right:-29px, series-a right:-52px, growth right:-101px, custom right:-66px (desktop card 310: 310-219-120=-29 ✓; 310-172-188=-50; 310-163-248=-101; 310-187-189=-66) so they stay correct at any card width. Use `top` + `right` + width/height.

## State model (from source)
- Grid holds `selected: {pkgIdx, policyIdx} | null`; clicking a pill toggles it (same pill → null; other → select). `closeDelay` of 0.3s is applied to the previously open card when the selection moves to a different card (its height/marginTop transitions get `delay: .3`); the newly opened card opens immediately.
- pointerdown outside the grid (document listener while something is selected) → clear selection.
- Ripple: on click set a ripple key → render `<span class="pointer-events-none absolute inset-0 animate-chip-ripple rounded-[4px]"/>` (remove after 350ms).
- The "+" chip (custom) is a plain link.
- Pills descriptions: from `POLICY_PILLS` by label.

## Responsive
- 390: section auto height (1749px), padding 64px 16px, h2 28px, grid 1 col (cards 358 wide, 381 tall), hint row wraps; card h3 24px (`md:text-[32px]`). Rails at 16px.
- 768: 2 cols (cards 348px), section 1095px, h2 40px (var), padding 80px 24px.
- 1280+: 4 cols.
