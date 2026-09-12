# IntroSection Specification ("Corgi is an AI-native…" dark card)

## Overview
- **Target file:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/IntroSection.tsx` (client component — mobile card uses click state)
- **Screenshots:** `sections/02-intro-desktop.png` (note: the fixed header overlaps the top of that crop), `sections-mobile/02-intro.png`, `sections-tablet/02-intro.png`
- **Interaction model:** hover (desktop) / click (mobile) 3D card swap
- **Data:** `INTRO`, `ASSETS`, `LINKS` from `./data`
- **Reference source:** `docs/research/corgi-insure-a0f7893c/root-8a5edab2/js/pretty/27stt6lyy-y9_.js` lines 4–41 (`JourneyHeroSection`) — reproduce this markup 1:1 with our `Image`/`Link`.

## DOM structure (verbatim classes)
```
<section class="relative bg-background px-4 pt-4 md:px-6 md:pt-12 lg:px-16 lg:pt-16">
  <div aria-hidden class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#e1e1e1]" />
  <div aria-hidden class="pointer-events-none absolute inset-x-0 top-4 h-px bg-[#e1e1e1] md:top-12 lg:top-16" />
  <div aria-hidden class="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]" />
  <div aria-hidden class="… right-[max(16px,…)] … (mirror)" />
  <div class="relative mx-auto max-w-[1600px] overflow-hidden rounded-[24px] bg-[#313131] p-5 pb-[260px] md:p-16">
    <div aria-hidden class="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 aspect-square w-[520px] max-w-none translate-y-1/2 md:w-[800px] lg:w-[1053px]">
      <Image alt="" class="object-contain" fill sizes="1053px" src=INTRO.ellipse />
    </div>
    <h2 class="relative font-mono font-normal text-[20px] text-white leading-none tracking-[-0.032em] md:pr-[360px] md:text-[28px] lg:pr-[420px] lg:text-[32px] min-[1440px]:pr-[460px] min-[1440px]:text-[40px]">
      <span class="text-[#ff5c00]">Corgi</span> is an AI-native, full-stack insurance platform built for technology companies. That means fast quotes, competitive pricing, and a team that understands your business.
    </h2>
    <!-- label, md+ only -->
    <div aria-hidden class="pointer-events-none absolute right-[254px] bottom-[150px] z-10 hidden origin-bottom-right rotate-[-19.27deg] md:block">
      <Image alt="" class="h-auto w-[200px]" height={42} width={200} src=INTRO.label />
    </div>
    <!-- desktop hover stack, md+ -->
    <div class="group absolute right-0 bottom-0 hidden h-[200px] w-[280px] [perspective:1000px] [transform-style:preserve-3d] md:block lg:h-[240px] lg:w-[320px]">
      <div class="-bottom-[110px] absolute right-[20px] z-0 [transform:rotate(-27.6deg)] [transform-style:preserve-3d] transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:z-20 group-hover:[transform:translate(20px,-36px)_rotate(-19.99deg)] lg:-bottom-[146px] lg:group-hover:[transform:translate(20px,-48px)_rotate(-19.99deg)]">
        <div class="[transform-style:preserve-3d] transition-transform duration-[480ms] ease-[cubic-bezier(0.34,1.7,0.5,1)] group-hover:[transform:translateZ(80px)]">
          <div class="h-[220px] w-[188px] overflow-hidden bg-[#f9f9f9] lg:h-[283px] lg:w-[241px]">
            <p class="cursor-pointer pt-6 pl-6 font-mono font-normal text-[20px] text-black leading-none tracking-[-0.032em] hover:text-[#ff5c00] hover:underline lg:text-[24px]">Get a quote!</p>
          </div></div></div>
      <div class="-bottom-[74px] absolute right-0 z-10 [transform:rotate(-19.99deg)] [transform-style:preserve-3d] transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:z-0 group-hover:[transform:translate(-20px,36px)_rotate(-27.6deg)] lg:-bottom-[98px] lg:group-hover:[transform:translate(-20px,48px)_rotate(-27.6deg)]">
        <div class="[transform-style:preserve-3d] transition-transform duration-[480ms] ease-[cubic-bezier(0.34,1.7,0.5,1)] group-hover:[transform:translateZ(-40px)]">
          <div class="relative h-[220px] w-[188px] shadow-[2px_1px_8px_0px_rgba(25,25,25,0.5)] lg:h-[283px] lg:w-[241px]">
            <Image alt="" class="object-cover object-top" fill sizes="640px" src=INTRO.document />
          </div></div></div>
    </div>
    <!-- mobile click variant, <md -->
    <div class="-bottom-[24px] absolute inset-x-0 flex justify-center md:hidden">
      <Link href={LINKS.signUp} aria-label={swapped ? "Get a quote" : "Reveal Get a quote card"} data-swapped={swapped} onClick={e => { if (!swapped) { e.preventDefault(); setSwapped(true); } }}
            class="group relative block h-[270px] w-[255px] translate-x-6 translate-y-3 rotate-6 cursor-pointer [perspective:1000px] [transform-style:preserve-3d]">
        <div aria-hidden class="-left-[72px] pointer-events-none absolute top-[28px] rotate-[-19.27deg]"><Image alt="" class="h-auto w-[180px]" height={42} width={200} src=INTRO.label /></div>
        <div class="-bottom-[90px] absolute right-[30px] z-0 [transform:rotate(-27.6deg)] [transform-style:preserve-3d] transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-data-[swapped=true]:z-20 group-data-[swapped=true]:[transform:translate(30px,-45px)_rotate(-19.99deg)]">
          <div class="[transform-style:preserve-3d] transition-transform duration-[480ms] ease-[cubic-bezier(0.34,1.7,0.5,1)] group-data-[swapped=true]:[transform:translateZ(80px)]">
            <div class="h-[270px] w-[225px] overflow-hidden bg-[#f9f9f9]"><p class="pt-7 pl-7 text-left font-mono font-normal text-[27px] text-black leading-none tracking-[-0.032em] group-data-[swapped=true]:text-[#ff5c00] group-data-[swapped=true]:underline">Get a quote!</p></div>
          </div></div>
        <div class="-bottom-[45px] absolute right-0 z-10 [transform:rotate(-19.99deg)] [transform-style:preserve-3d] transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-data-[swapped=true]:z-0 group-data-[swapped=true]:[transform:translate(-30px,45px)_rotate(-27.6deg)]">
          <div class="[transform-style:preserve-3d] transition-transform duration-[480ms] ease-[cubic-bezier(0.34,1.7,0.5,1)] group-data-[swapped=true]:[transform:translateZ(-40px)]">
            <div class="relative h-[270px] w-[225px] shadow-[2px_1px_8px_0px_rgba(25,25,25,0.5)]"><Image alt="" class="object-cover object-top" fill sizes="640px" src=INTRO.document /></div>
          </div></div>
      </Link>
    </div>
  </div>
</section>
```
Desktop: the "Get a quote!" `<p>` should be wrapped in a `<Link href={LINKS.signUp}>` (site behavior: it is clickable → sign-up). Keep `cursor-pointer`.

## Computed styles (1440)
- section 1440×320, padding 64px 64px 0; card 1312×256 at (64,964) — `p-16` (64px), radius 24px, bg #313131, overflow hidden; **note `pb-[260px]` applies below md only** (card 380px tall on mobile).
- h2: F37 Bolton 400, 32px/32px at 1440 (`lg:text-[32px]`; the `min-[1440px]:text-[40px]` rule applies at ≥1440 — computed was 32px at exactly 1440 because the viewport is 1440 minus scrollbar; keep the class), letter-spacing -0.032em, white, padding-right 420px at lg (460 at ≥1440). Width 1184px, 4 lines.
- Ellipse: 1053×1053 at bottom center (translate -50%, 50%).
- Label image 200×40.6 at right 254 / bottom 150, rotate -19.27deg, origin bottom-right.
- Paper cards: 241×283 (lg); back card rotate(-27.6deg) at right 20px bottom -146px (lg); front card rotate(-19.99deg) at right 0 bottom -98px; front shadow `2px 1px 8px 0 rgba(25,25,25,.5)`; "Get a quote!" 24px F37 Bolton black, padding 24px 0 0 24px.
- Hover transitions: outer 420ms cubic-bezier(.2,.8,.2,1); inner 480ms cubic-bezier(.34,1.7,.5,1).

## Responsive
- 390: section 396 tall (padding 16px top), card 358×380 with p-5 (20px) and pb-[260px]; h2 20px/20px; mobile stack visible (`md:hidden`) centered at bottom -24px; label 180px wide; papers 225×270.
- 768: card p-16, h2 28px pr-[360px]; desktop stack 280×200 with papers 188×220 (`md`), label visible.
- ≥1024: papers 241×283, stack 320×240.
