# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/HeroSection.tsx` (server component; the logo strip is pure CSS)
- **Screenshots:** `docs/design-references/corgi-insure-a0f7893c/root-8a5edab2/sections/01-hero-desktop.png`, `sections-mobile/01-hero.png`, `sections-tablet/01-hero.png`
- **Interaction model:** static + CSS marquee (logo strip). No drag, no parallax, no cursor chips.
- **Data:** `HERO`, `COMPANY_LOGOS`, `ASSETS` from `./data`.

## DOM structure (site classes verbatim)
```
<section class="relative flex h-svh flex-col items-center pt-[160px]">
  <div class="pointer-events-none absolute inset-0">
    <Image src={`${ASSETS}/images/hero/cloud-sky-bg.webp`} alt="" fill sizes="100vw" class="object-cover" priority />   (natural 1440×966)
    <div class="absolute inset-0 bg-[rgba(79,179,255,0.05)] mix-blend-multiply" />
    <div class="absolute inset-0 bg-gradient-to-b from-[rgba(246,246,246,0)] from-[72%] to-[#f6f6f6] to-[95%]" />
  </div>
  <div class="relative flex flex-1 items-center w-full md:w-auto">
    <div class="relative w-full md:w-auto">
      <!-- corgi mascot (rendered as three clip-path slices of the same image — reproduce exactly) -->
      <div class="pointer-events-none absolute right-[-40px] top-[-100px] z-10 md:right-[-72px] md:top-[-112px] lg:right-[-108px] lg:top-[-136px]">
        <div class="-rotate-[16.78deg]">
          <div class="aspect-[299/269] w-[200px] md:w-[280px] lg:w-[299px]">
            <div class="relative h-full w-full">
              <img alt="Corgi mascot" src=".../images/hero/brand-corgi.avif" class="absolute inset-0 h-full w-full max-w-none object-cover" style="clip-path:inset(0 calc(66.666667% - 1px) 0 0)" />
              <img alt="" … style="clip-path:inset(0 calc(33.333333% - 1px) 0 calc(33.333333% - 1px))" />
              <img alt="" … style="clip-path:inset(0 0 0 calc(66.666667% - 1px))" />
            </div></div></div></div>
      <div class="relative flex flex-col items-center gap-6 px-4 py-12 text-center md:px-[120px] md:py-16">
        <div class="flex flex-col items-center gap-6">
          <h1 class="homepage-hero-heading-font mx-auto max-w-[752px] font-medium">Business Insurance <br/>at the <span class="homepage-hero-serif-font text-[#FF5C00] italic">Speed of Compute.</span></h1>
          <p class="text-body-large text-[#4e4e4e]">No confusion, no waiting. Get a quote in minutes.<br class="hidden md:block" /> Modular coverage, built for founders by founders.</p>
        </div>
        <PressableButton variant="orange" size="small" href={LINKS.signUp} className="relative z-10 w-fit" faceClassName="px-4 py-2 btn-text-small text-white" dataTrack="cta-homepage-hero">Get insured now</PressableButton>
        <!-- hand (three slices, same technique) -->
        <div class="pointer-events-none absolute bottom-[-80px] left-[-64px] h-[180px] w-[238px] md:bottom-[-88px] md:left-[-56px] md:h-[241px] md:w-[318px] -rotate-[15deg] md:rotate-0">
          <div aria-hidden class="absolute inset-0"><div class="relative h-full w-full"> 3× <img src=".../images/hero/hand-with-gradient.avif" class="absolute inset-0 h-full w-full max-w-none object-cover" style="clip-path: … same thirds" /> </div></div>
        </div>
      </div>
    </div>
  </div>
  <!-- logo strip -->
  <div class="relative z-10 w-full bg-[#f6f6f6] py-6">
    <div class="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
    <div class="w-full overflow-hidden" style="contain:content">
      <div class="logo-carousel-track flex w-max items-center gap-20" style="animation: logo-scroll 60s linear infinite">
        4 × <div class="flex shrink-0 items-center gap-20"> 14 × <img class="h-[var(--logo-mobile-height)] w-[var(--logo-mobile-width)] object-contain md:h-[var(--logo-height)] md:w-[var(--logo-width)] grayscale" style="--logo-height:18px;--logo-mobile-height:18px;--logo-mobile-width:192px;--logo-width:192px" alt="Artisan" src=…/> </div>
      </div>
    </div>
  </div>
</section>
```
Note: the h1 must remain a proper `<h1>` and the heading font sizes come from `.homepage-hero-heading-font` + the responsive rules below.

## Computed styles (1440×900)
- section: 1440×900, `padding-top:160px`, color #1d1d1d.
- Heading block wrapper (`relative flex flex-col items-center gap-6 … md:px-[120px] md:py-16`): 866×386 at x=287,y=297; padding 64px 120px.
- h1: font heroHeading 500, **60px / 60px line-height, letter-spacing -1.92px (-0.032em)**, color #191919, max-width 752px, width 626px, height 121px (two lines). Add: `h1 { font-size: var(--h1-font-size); line-height: 1; letter-spacing: -0.032em; color:#191919 }` → 36px on mobile (computed 36px/36px, -1.152px), 48px at md, 60px at lg.
- Accent span: heroSerif 400 + `italic` (synthesized), color #ff5c00.
- p: 20px/24px -0.3px #4e4e4e (mobile 18px/21.6px -0.27px). Width 432px on desktop (two lines via the `<br>`).
- CTA: face 152×37, 16px/19.2px 500 -0.24px white on #ff5c00; base #cc4a00; total 41px.
- Corgi wrapper on desktop: 299×269 box at page (962,161) before rotate; rotate -16.78deg. On mobile: 200×180 at right -40 top -100.
- Hand: desktop 318×241 at left -56 bottom -88 (page x=231,y=530); mobile 238×180, rotate -15deg.
- Logo strip: 80px tall band (py-6) with 32px inner row; track width 9860px (4 copies × 2405px), gap 80px between logos and between copies; logos grayscale. Row at y=844..876.
- Bottom hairline: 1px #e1e1e1 full width (2400px centered) at the bottom of the band.

## Logo sizes (all `width/height` px; mobile equals desktop)
Artisan 192×18 (png), AthenaHQ 108×20, Bland 91×24, Deel 79×27, Slash 78×27, Eragon 91×23, Intryc 73×28, Origami 99×22, Photon 113×24, Deel 79×27 (second time), Judgment Labs 148×18, Series 48×32, Tandem 94×18, PromptingCo 72×30 — exactly `COMPANY_LOGOS` in order. Use plain `<img>` (they are SVGs/PNG) with `loading="lazy"`.

## States & Behaviors
- Logo marquee: `animation: 60s linear infinite logo-scroll` (0 → translateX(-25%)); `.logo-carousel-track` gets `animation-delay:-13s` under 768px (already in globals.css). Prefers-reduced-motion: `motion-reduce:[animation:none]` is acceptable.
- CTA hover/active handled by PressableButton.
- No other behaviors.

## Assets
- `${ASSETS}/images/hero/cloud-sky-bg.webp` (1440×966), `${ASSETS}/images/hero/brand-corgi.avif` (272×245), `${ASSETS}/images/hero/hand-with-gradient.avif` (318×241), logos under `${ASSETS}/images/company-logos/` + `${ASSETS}/images/eragon-logo.svg`.

## Text (verbatim)
"Business Insurance" / "at the" + "Speed of Compute." ; "No confusion, no waiting. Get a quote in minutes." + "Modular coverage, built for founders by founders." ; "Get insured now".

## Responsive
- 390: section 844 tall (100svh); h1 36px (358px wide, wraps to 3 lines: "Business Insurance" / "at the" / "Speed of Compute."); p 18px; CTA face 14px/16.8px, 137×35; corgi 200px wide at right:-40px top:-100px; hand 238×180 at left:-64px bottom:-80px rotated -15deg; logo band identical (80px).
- 768: h1 48px, wrapper padding md; corgi 280px; hand 318×241 rotate 0.
- 1024+: as desktop (corgi 299px, offsets lg).
