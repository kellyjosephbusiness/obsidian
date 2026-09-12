# SiteFooter Specification

## Overview
- **Target file:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteFooter.tsx` (server component; the press marquee is CSS)
- **Screenshots:** `sections/10-footer-desktop.png` (1933px tall crop), `sections-mobile/10-footer.png`, `sections-tablet/10-footer.png`
- **Interaction model:** static + CSS press marquee + hover states
- **Data:** `FOOTER_CTA`, `PRESS`, `FOOTER_COLUMNS`, `FOOTER_LEGAL`, `FOOTER_SOCIAL`, `FOOTER_IMAGES`, `DISCLAIMER_PARAGRAPHS`, `LINKS` from `./data`; `PressableButton` from shared.

## DOM structure
```
<footer class="relative flex w-full flex-col bg-[#f6f6f6]">
  <!-- 1. dark CTA band -->
  <section class="relative w-full overflow-hidden border-t border-b border-[#585858] bg-[#313131] px-4 py-4 md:px-6 md:py-6 lg:p-16">
    <div aria-hidden class="pointer-events-none absolute top-0 bottom-0 left-[max(16px,calc((100%-1600px)/2))] w-px bg-[#585858] md:left-[max(24px,calc((100%-1600px)/2))] lg:left-[max(64px,calc((100%-1600px)/2))]" /> + right mirror
    <div class="relative mx-auto max-w-[1600px]">
      <div aria-hidden class="pointer-events-none absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#585858]" />
      <div aria-hidden class="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#585858]" />
      <div class="flex flex-col items-center gap-9 p-4 md:p-6 lg:p-16">
        <div class="flex w-full max-w-[596px] items-end justify-between gap-3">
          5 × <div class="relative aspect-[118/120] w-[18%] max-w-[118px]"><Image alt={alt} class="object-contain object-bottom" fill sizes="118px" src /></div>
        </div>
        <div class="flex flex-col items-center gap-12">
          <h2 class="text-center font-medium font-mono text-white" (font-size var(--h1-font-size): 48px desktop, 28px mobile; line-height 1; tracking -0.032em)>Corgi Provides the Insurance Built for Founders.<br />Move fast. Break things. Stay covered, under one roof.</h2>
          <div class="flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
            <PressableButton variant="white" size="large" href="/book-a-demo" faceClassName="px-6 py-3 btn-text-large">Book a demo</PressableButton>
            <PressableButton variant="orange" size="large" href={LINKS.signUp}>Get insured today</PressableButton>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 2. press marquee -->
  <div class="w-full overflow-hidden border-t border-b border-[#e1e1e1] py-8">
    <div class="flex w-max items-center gap-20" style={{animation:'logo-scroll 40s linear infinite'}}>
      4 × <div class="flex shrink-0 items-end gap-20">
        {PRESS.map(p => <div class="flex flex-col items-center gap-2">
          <img alt={p.alt} class="object-contain brightness-0" loading="lazy" src={p.src} style={{width:p.width, height:p.height, opacity:.9}} />
          <span class="whitespace-nowrap font-mono text-[11px] text-[#7b7b7b] tracking-[-0.01em]">As covered in {p.outlet}, {p.date}.</span>
        </div>)}
      </div>
    </div>
  </div>
  <!-- 3. link grid -->
  <div class="relative w-full">
    <div aria-hidden class="pointer-events-none absolute top-0 bottom-0 left-[max(16px,calc((100%-1600px)/2))] z-0 w-px bg-[#e1e1e1] md:left-[max(24px,…)] lg:left-[max(64px,…)]" /> + right mirror
    <div class="border-b border-[#e1e1e1] px-4 md:px-6 lg:px-16">
      <div class="relative mx-auto grid max-w-[1600px] grid-cols-1 divide-x divide-y divide-[#e1e1e1] sm:grid-cols-2 md:grid-cols-5">
        <div class="col-span-1 flex items-center justify-center p-6 sm:col-span-2 md:col-span-1"><img alt="Corgi" class="h-auto w-[107px] object-contain" src={FOOTER_IMAGES.corgiDog} /></div>   (renders 107×162)
        {FOOTER_COLUMNS.map(col => <div class="flex flex-col items-start gap-6 p-6">
          <p class="font-semibold text-[16px] leading-[1.2] tracking-[-0.24px] text-[#191919]">{col.title}</p>
          <nav aria-label={col.title} class="flex w-full flex-col items-stretch gap-1">
            {links.map(l => <Link href class="flex w-full cursor-pointer rounded-lg p-2 text-[16px] leading-[1.2] tracking-[-0.24px] text-[#606060] transition-colors hover:bg-[#e8e8e8] hover:text-[#191919]">{label}</Link>)}
          </nav>
        </div>)}
      </div>
    </div>
    <div class="w-full px-4 py-6 md:px-6 lg:px-16">
      <div class="mx-auto flex max-w-[1600px] flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[16px] leading-[1.2] tracking-[-0.24px] text-[#4a4a4a]">
        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">{FOOTER_LEGAL: <a href class="hover:text-[#191919]">Privacy</a> …}</div>
        <div class="hidden h-px w-12 bg-[#e1e1e1] md:block" />
        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">{FOOTER_SOCIAL: Email (mailto), LinkedIn, X — external links target="_blank" rel="noopener noreferrer"}</div>
      </div>
    </div>
    <div class="relative z-10 w-full overflow-hidden">
      <Image alt="" class="h-auto w-full object-cover object-top" width={1440} height={534} sizes="100vw" src={FOOTER_IMAGES.background} />   (natural 1440×534; renders 390×144 on mobile)
    </div>
  </div>
  <!-- 4. disclaimer -->
  <div class="w-full bg-black p-8 text-sm text-stone-200">
    {DISCLAIMER_PARAGRAPHS.map((p, i) => <p class={i ? 'mt-4' : undefined}>{p}</p>)}
  </div>
</footer>
```

## Computed styles (1440)
- CTA band: 1440×601, padding 64px (lg:p-16), bg #313131, borders #585858; inner p-16; corgi row max 596px, images 107×109 (w-18%, aspect 118/120), items-end; heading 48px/48px -1.536px white centered (2 lines via `<br>`), gap-12 to buttons; buttons large: white face 169×50 + orange 211×50 (20px/24px 500 -0.3px), gap 12px, bases 54px tall.
- Press band: py-8 (120px tall), track 5368px = 4 copies × 1282px, gap 80px; logos brightness(0) opacity .9 (Forbes 120×30, Economic Times 200×24, Insurance Business 200×28, WSJ 240×24, Inc. 60×30); caption 11px/16.5px F37 Bolton #7b7b7b -0.11px; items-end.
- Link grid: 5 equal columns (262px) with 1px #e1e1e1 dividers (`divide-x divide-y`), each cell p-6, 322px tall; column title 16px/19.2px 600 #191919; links 16px/19.2px #606060 with p-2 rounded-lg, gap-1 (35px rows); corgi-dog.svg 107×162 centered in the first cell.
- Legal row: py-6, 16px #4a4a4a links, 24px gaps, 48×1px divider between groups (md+).
- Background image 1440×534 (`footer-bg.webp`), object-top.
- Disclaimer: bg #000, padding 32px, 14px/20px stone-200 (#e7e5e4), paragraphs with mt-4.

## Responsive
- 390: CTA band 490px tall (px-4 py-4; inner p-4), corgis 56×57, h2 28px (6 lines), buttons stacked full-width (`flex-col items-stretch`), press band identical, grid 1 col (corgi cell first, columns stacked, each p-6), legal links wrap in two rows, bg image 390×144, disclaimer p-8.
- 640 (sm): grid 2 cols (corgi cell spans 2); buttons in a row.
- 768 (md): grid 5 cols; band px-6 py-6 (inner p-6).
- 1024 (lg): band p-16.
