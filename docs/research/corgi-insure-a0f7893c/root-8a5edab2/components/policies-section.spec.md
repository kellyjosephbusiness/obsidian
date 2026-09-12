# PoliciesSection Specification ("Explore Our Main Policies")

## Overview
- **Target files:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/PoliciesSection.tsx` (server) + `PolicyCard.tsx` (server). Import the already-built `SpecializedCoveragesStack` from `./SpecializedCoveragesStack`.
- **Screenshots:** `sections/08-policies-desktop.png`, `sections-mobile/08-policies.png`, `sections-tablet/08-policies.png`
- **Interaction model:** static grid (hover/press on buttons only) + the stack (already built)
- **Data:** `POLICIES_HEADER`, `POLICIES`, `LINKS` from `./data`; `PressableButton` from shared.

## Section markup
```
<section id="explore-coverages" class="relative overflow-hidden border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-16 md:px-6 md:py-20 lg:px-16">
  <!-- flying dogs -->
  <div aria-hidden class="pointer-events-none absolute -left-6 bottom-[56px] z-10 block w-[100px] md:left-0 md:bottom-4 md:w-[130px] lg:hidden"><Image alt="" class="h-auto w-full object-contain" width={628} height={622} src=`${ASSETS}/images/flying-dog-left.webp` /></div>
  <div aria-hidden class="pointer-events-none absolute top-0 -right-4 z-10 block w-[100px] md:w-[130px] lg:hidden"><Image alt="" … width={288} height={311} src=`${ASSETS}/images/flying-dog-right.webp` /></div>
  <div aria-hidden class="pointer-events-none absolute top-[60px] right-[-80px] z-10 hidden w-[180px] lg:block xl:right-[-90px] xl:w-[210px]"><Image … flying-dog-right.webp /></div>   (renders 210×227)
  <div aria-hidden class="pointer-events-none absolute bottom-[100px] left-[-80px] z-10 hidden w-[180px] lg:block xl:left-[-90px] xl:w-[210px]"><Image … flying-dog-left.webp /></div>   (renders 210×208)
  <div class="relative mx-auto flex max-w-[1200px] flex-col gap-4 md:gap-6">
    <div aria-hidden class="pointer-events-none absolute -top-16 -bottom-16 left-0 z-[5] w-px bg-[#e1e1e1] md:-top-20 md:-bottom-20" />
    <div aria-hidden class="pointer-events-none absolute -top-16 -bottom-16 right-0 z-[5] w-px bg-[#e1e1e1] md:-top-20 md:-bottom-20" />
    <div class="flex flex-col gap-6 px-4 md:px-6">
      <h2 class="font-mono font-medium" (font-size var(--h2-font-size) → 28/40/48px at base/md/lg; line-height var(--h2-line-height); letter-spacing var(--h2-tracking); color #191919 — use `text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]`)>Explore Our Main Policies</h2>
      <p class="text-body-large">Don’t over-insure for the future or under-insure for the now. Toggle coverage modules as you grow, from MVP to IPO.</p>
    </div>
    <div class="flex flex-col gap-12">
      <div class="relative">
        <div aria-hidden class="pointer-events-none absolute left-1/2 top-0 h-px w-screen max-w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
        <div aria-hidden class="pointer-events-none absolute left-1/2 bottom-0 h-px w-screen max-w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
        <div class="relative z-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POLICIES.map(p => <PolicyCard policy={p} />)}   (8 cards)
          <div class="md:col-span-2 md:mx-auto md:w-[calc(50%-12px)] lg:col-span-1 lg:mx-0 lg:w-auto"><SpecializedCoveragesStack /></div>
        </div>
      </div>
      <PressableButton variant="orange" size="large" href={LINKS.signUp} className="relative z-20 mx-auto w-fit" dataTrack="cta-homepage-policies">Get insured</PressableButton>
    </div>
  </div>
</section>
```
## PolicyCard markup
```
<div class="flex flex-col overflow-hidden rounded-[24px] border border-[#e1e1e1] bg-white">
  <div class="relative flex h-[120px] items-start border-b border-[#e1e1e1] bg-white p-3">
    <Image alt={title} class="pointer-events-none object-contain" fill sizes="384px" src={image} />        // fills 382×119 area; object-contain
    <div class="relative z-10 flex items-center justify-center rounded-[12px] bg-[linear-gradient(to_right,#f66398_0%,#fb846c_60.894%,#fe9850_100%)] px-3 py-1.5">
      <span class="text-[12px] leading-[1.2] tracking-[-0.18px] text-white">Instant quote</span>
    </div>
  </div>
  <div class="flex flex-1 flex-col gap-3 border-b border-[#e1e1e1] p-5">
    <h3 class="text-[20px] font-bold leading-none tracking-[-0.64px] text-[#191919]">{title}</h3>
    <p class="text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a]">{description}</p>
  </div>
  <div class="p-3">
    <Link href={href} aria-label={`Learn more about ${title}`} class="group block">
      <span class="sr-only">Learn more about {title}</span>
      <div class="pressable-button pressable-smooth-corner bg-[#e1e1e1]" style="--pressable-depth:4px" data-press-trigger="group">   // presses when the whole link (group) is active
        <div class="pressable-smooth-corner flex items-center justify-center border border-[#e1e1e1] bg-white px-4 py-2 btn-text-small text-[#191919] hover:bg-gray-50 active:bg-[#ededed]">Learn more</div>
      </div>
    </Link>
  </div>
</div>
```
(Our CSS already handles `.group:active .pressable-button[data-press-trigger=group]`.)

## Computed (1440)
- section 1440×1396, padding 80px 64px; container 1200px; header block px-6; h2 48px; p 20px/24px.
- grid: 3 × 384px, gap 24px; rows 310.6 / 310.6 / 343.8px (last row taller because of the stack card + Media/HNOA descriptions).
- card: header 382×120 with 12px padding, badge 95×26 (12px/14.4px white, radius 12px, px-3 py-1.5); body p-5 gap-3, h3 20px/20px 700 -0.64px, p 14px/16.8px -0.21px; button block p-3, face 358×37.
- CTA "Get insured": large orange, face 155×50, centered, 48px above (gap-12).
- Flying dogs (desktop): right dog at top 60px right -90px 210px wide; left dog at bottom 100px left -90px 210px wide.
- Section rails at container edges (`left-0/right-0` of the 1200px container, extended 80px above/below).

## Responsive
- 390: padding 64px 16px; 1 column (cards 358 wide); mobile dogs (100px) at bottom-left/-top-right; stack card full width; CTA face 144×50 (btn-text-large 18px at base).
- 768: 2 columns; the stack cell spans 2 columns centered at half width; dogs 130px.
- 1024: 3 columns; desktop dogs 180px at ±80px; 1280: 210px at ±90px.
