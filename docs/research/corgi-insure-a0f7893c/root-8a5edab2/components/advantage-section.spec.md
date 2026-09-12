# AdvantageSection Specification ("Our Unique Advantage": wrapper + Legacy Carriers card)

## Overview
- **Target files:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/AdvantageSection.tsx` (server) + `LegacyCarriersCard.tsx` (server; pure CSS animations). Import the already-built `CorgiPlatformCard` from `./CorgiPlatformCard` for the right column.
- **Screenshots:** `sections/05-advantage-desktop.png`, `sections-mobile/05-advantage.png`
- **Interaction model:** CSS marquee + CSS ring pulses (legacy card); physics in the right card (already built).
- **Data:** `ADVANTAGE` from `./data`; `MaterialIcon` from shared.

## Section markup
```
<section class="relative overflow-hidden border-[#585858] border-b bg-[#313131] pb-10 md:pb-12 lg:pb-16">
  <div aria-hidden class="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#585858] md:left-[max(48px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]" /> + right mirror (note md uses 48px here)
  <div class="flex flex-col items-center px-4 pt-10 pb-4 md:px-12 md:pt-14 md:pb-6 lg:px-16 lg:pt-16">
    <h2 class="text-center font-medium font-mono text-white" (font-size var(--h2-font-size) → 28px base / 40px md / 48px lg, line-height var(--h2-line-height)=1, letter-spacing var(--h2-tracking)=-0.032em)>Our Unique Advantage</h2>
  </div>
  <div class="border-[#585858] border-y px-4 md:px-12 lg:px-16">
    <div class="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-6 md:grid-cols-2">
      <LegacyCarriersCard />
      <CorgiPlatformCard />
    </div>
  </div>
</section>
```
Computed (1440): section 1440×638, padding-bottom 64px; heading block 136px tall (pt-16 pb-6); grid band with `border-y` #585858; grid 1312 wide, 2 × 644px, gap 24, rows 435px. Mobile: section 745px, heading 28px, 1 col, cards 358 wide.

## LegacyCarriersCard markup
```
<div class="flex flex-col overflow-hidden rounded-[24px] bg-white">
  <div class="relative aspect-[724/322] overflow-hidden rounded-[24px] bg-[#f6f6f6] shadow-[0_8px_28px_0_rgba(0,0,0,0.4)]">
    <div class="absolute top-0 left-0 h-[322px] w-[724px] origin-top-left" style={{transform:'scale(var(--legacy-scale))'}}>   // scale = containerWidth/724 → implement with a small client wrapper (ResizeObserver) OR CSS: use `w-full` container query units: transform: scale(calc(100cqw / 724)) with the panel as `@container` — either is acceptable; the result must be 0.8895 at 644px wide and 0.4945 at 358px.
      <!-- chip marquee row -->
      <div class="absolute top-[57px] right-0 left-0 overflow-x-clip">
        <div class="flex w-max items-center gap-2 py-2 motion-safe:animate-[marquee-left_24s_linear_infinite]">
          2 × [ for each chip i (4 chips): 
            <div class="flex shrink-0 items-center gap-3 rounded-[24px] border-2 border-[#ff405d] bg-[#ffe9ec] p-4 shadow-[0_0_0_4px_#ff94a4]" style={{animation: `pill-ring-pulse ${dur}s ease-in-out ${delay}s infinite`}}>
              <MaterialIcon name={icon} size={24} className="shrink-0 text-[#ff405d]" />
              <span class="whitespace-nowrap font-mono font-normal text-[24px] text-[#ff405d] leading-none tracking-[-0.032em]">{label}</span>
            </div>
            <div class="h-0.5 w-6 shrink-0 bg-[#ff405d]" />   // connector after every chip (8 total)
          ]
        </div>
      </div>
      <!-- certificate papers -->
      <div class="-rotate-[3.96deg] absolute top-[167px] left-[180px] h-[194px] w-[340px] bg-white shadow-[0_0_16px_0_rgba(25,25,25,0.25)]" />
      <div class="absolute top-[179px] left-[205px] flex h-[182px] w-[340px] flex-col gap-2.5 overflow-hidden bg-white p-6 shadow-[0_0_16px_0_rgba(25,25,25,0.25)]">
        <p class="text-left font-medium text-[#b2b2b2] text-[24px] leading-none tracking-[-0.032em]">Certificate of Insurance</p>
        <div class="h-px w-full bg-[#e5e5e5]" />
        <div class="flex gap-2.5"><div class="h-[25px] w-[239px] bg-[#ddd]" /><div class="h-[25px] flex-1 bg-[#ddd]" /></div>
        <div class="flex gap-2.5"><div class="h-[11px] flex-1 bg-[#ddd]" /><div class="h-[11px] w-[111px] bg-[#ddd]" /></div>
        <div class="h-[11px] w-full bg-[#ddd]" />
        <div class="h-[11px] w-full bg-[#ddd]" />
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-3 p-3 md:p-5">
    <h3 class="font-bold font-sans text-[18px] md:text-[20px] text-[#4a4a4a] leading-none tracking-[-0.032em]">Legacy Insurance Carriers</h3>
    <p class="font-sans text-[14px] md:text-[16px] text-[#4a4a4a] leading-[1.2] tracking-[-0.015em]">{ADVANTAGE.legacy.description}</p>
  </div>
</div>
```
Chip pulse timings (duration/delay): Broker review 1.7s/-0.2s; Quote adjustment 2.4s/-0.8s; Manual risk audit 3.1s/-1.5s; Underwriting (3+ days) 2.2s/-0.5s (same for the duplicated copy). Chips are 60px tall (p-4, border 2, text 24px F37 Bolton), widths 208/254/243/297px; gap 8px; connectors 24×2px.
Computed at 1440: panel 644×286; text block p-5, h3 20px/20px 700 #4a4a4a, p 16px/19.2px.
