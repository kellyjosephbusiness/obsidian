# GetQuotedSection Specification ("Get Quoted Instantly or Book a Demo With a Specialist")

## Overview
- **Target files:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/GetQuotedSection.tsx` (client; desktop sticky variant, `hidden lg:block`) + `GetQuotedMobile.tsx` (client; stacked variant, `lg:hidden`). Both import the already-built `FinancialFormMock` (`FinancialFormMock`, `DragCursorChip` (internal to the mock), `EstimateBubble`, `BUBBLE_MESSAGES`, `bubbleTierIndex`) from `./FinancialFormMock`, plus `CursorChip`/`useCursorChip`, `MaterialIcon`, `PressableButton` from shared.
- **Screenshots:** `sections/06-get-quoted-desktop.png` (state A at scroll-in), `dom/06-get-quoted-stateA.png`, `dom/06-get-quoted-stateB.png`, `sections-mobile/06-get-quoted.png`, `sections-tablet/06-get-quoted.png` (tablet = mobile variant, 768 wide)
- **Interaction model:** desktop = SCROLL-DRIVEN sticky section with two discrete states (threshold at progress 0.5); mobile = static stacked.
- **Data:** `GET_QUOTED` from `./data`.
- **Reference source (reproduce 1:1):** `js/pretty/27stt6lyy-y9_.js` lines 249–440 (`w` chip, `y` useCursorChip-equivalent, `j` text column, `N` self-serve card (mobile), `C` demo card (mobile), `E` flipping panel (desktop), `M` the sticky section).

## Desktop section (`M` + `E`)
```
<section ref class="relative hidden border-b border-[#e1e1e1] bg-[#f6f6f6] lg:block" style={{height:`calc(100vh + ${panelH + 480}px)`}} aria-label="Get covered or book a demo">
  <div class="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
    <div aria-hidden class="pointer-events-none absolute bottom-0 top-0 left-[max(64px,calc((100%-1600px)/2))] w-px bg-[#e1e1e1]" /> + right mirror
    <div class="mx-auto w-full max-w-[1728px] px-16">
      <div class="flex flex-col gap-6">
        <h2 class="px-6 font-medium font-mono text-[#191919]" (font-size var(--h2-font-size) → 48px at lg; use `text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]`)>
          <span style={{color: showingDemo ? '#191919' : '#ff5c00', transition:'color 750ms cubic-bezier(0.4, 0, 0.2, 1)'}}>Get Quoted Instantly</span>{' or '}
          <span style={{color: showingDemo ? '#ff5c00' : '#191919', transition: same}}>Book a Demo With a Specialist</span>
        </h2>
        <div class="relative grid grid-cols-2 gap-12">
          <div aria-hidden class="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 bg-[#e1e1e1]" />
          <div aria-hidden class="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#e1e1e1]" />
          <div aria-hidden class="pointer-events-none absolute top-0 bottom-0 left-[calc(50%-24px)] w-px bg-[#e1e1e1]" />
          <div aria-hidden class="pointer-events-none absolute left-[calc(50%-24px)] right-0 h-px bg-[#e1e1e1]" style={{top: showingDemo ? 0 : panelH, transition:'top 750ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms'}} />
          <div ref=panelRef class="relative aspect-[800/465]">   // measured height → panelH (ResizeObserver; 367px at 1440)
            <FlipPanel showingDemo cursorExitProgress={showingDemo?1:0} dogEntryProgress={showingDemo?1:0} />
          </div>
          <div class="relative aspect-[800/465] overflow-hidden">
            <div class="flex h-[200%] flex-col" style={{transform: showingDemo ? 'translateY(-50%)' : 'translateY(0)', transition:'transform 750ms cubic-bezier(0.4, 0, 0.2, 1)'}}>
              <div class="flex h-1/2 flex-col justify-center px-6"><div class="mx-auto flex w-full max-w-[480px] -translate-x-6 flex-col items-start gap-9"> <TextBlock selfServe /> <CtaButton orange "Start your application" + arrow_forward /> </div></div>
              <div class="flex h-1/2 flex-col justify-center px-6"><div class="mx-auto flex w-full max-w-[480px] -translate-x-6 flex-col items-start gap-9"> <TextBlock demo /> <CtaButton black "Book a demo" + call /> </div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```
TextBlock: `<div class="flex w-full flex-col gap-3"><h3 class="font-bold text-[20px] leading-none tracking-[-0.032em] text-[#191919]">{heading}</h3><p class="text-body text-[#4a4a4a]">{body}</p></div><div class="flex w-full flex-col gap-3"><p class="text-body font-medium text-[#191919]">Best for:</p><p class="text-body text-[#4a4a4a]">{bestFor}</p></div>` (demo body ends with `<span class="font-medium text-[#191919]">We are committed …</span>`).
CtaButton: `<PressableButton className="w-fit" faceClassName="gap-1 text-body" href size="small" variant="orange"|"black" dataTrack="cta-homepage-self-serve"|"cta-homepage-book-demo">{label}<MaterialIcon name="arrow_forward"|"call" size={16} /></PressableButton>`.

### FlipPanel (`E`)
```
<div class="@container relative h-full w-full overflow-clip rounded-[24px] border border-[#e1e1e1]">
  <div class="relative h-full w-full overflow-clip p-[1.09cqw]" style={{backgroundColor: showingDemo ? '#dddddd' : '#ff7d33', transition:'background-color 750ms cubic-bezier(0.4, 0, 0.2, 1)'}}>
    <div class="absolute inset-0" style={{perspective:'1200px'}}>
      <div class="relative h-full w-full" style={{transformStyle:'preserve-3d', transform:`rotateY(${showingDemo ? 180 : 0}deg)`, transition:'transform 750ms cubic-bezier(0.4, 0, 0.2, 1)'}}>
        <div {...chip.handlers} class="@container absolute top-[9.7%] left-1/2 aspect-[701/778] w-[87.625%] -translate-x-1/2 rounded-[1.63cqw] bg-[#f9f9f9] shadow-[0_0_1.63cqw_rgba(25,25,25,0.5)]" style={{backfaceVisibility:'hidden', WebkitBackfaceVisibility:'hidden', pointerEvents: showingDemo ? 'none' : 'auto'}}>
          <FinancialFormMock cursorExitProgress={cursorExitProgress} />
        </div>
        <div {...chip.handlers} class="@container absolute top-[8.46%] right-[3.25%] aspect-[575/699] w-[71.875%] rounded-[1.63cqw] bg-[#f9f9f9] shadow-[0_0_1.09cqw_rgba(25,25,25,0.2)]" style={{backfaceVisibility:'hidden', WebkitBackfaceVisibility:'hidden', transform:'rotateY(180deg)', pointerEvents: showingDemo ? 'auto' : 'none'}}>
          <FinancialFormMock showCursor={false} onRevenueChange onProjectedRevenueChange onInvalidInput onValidInput />
        </div>
      </div>
    </div>
    <div class="pointer-events-none absolute right-[-11.875%] bottom-[-7.71%] aspect-[311/316] w-[38.875%]" style={{transform:`translateX(${(1-dog)*100}%)`, opacity:dog, transition:'transform 750ms cubic-bezier(0.4, 0, 0.2, 1), opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)'}}>
      <Image alt="Corgi on the phone" src={GET_QUOTED.images.corgiPhone} fill class="object-contain" sizes="(max-width: 1024px) 50vw, 640px" />
    </div>
    <EstimateBubble text={bubbleText} entryProgress={dog} />
  </div>
  <CursorChip open={chip.open} chipRef icon={<MaterialIcon name="text_fields" size={12} className="shrink-0 text-white" />} label="Try me!" />
</div>
```
Bubble text: `sum = String(Number(revenue||'0') + Number(projected||'0'))`; `tier = bubbleTierIndex(sum === '0' ? '' : sum)`; `text = invalid ? 'numbers please!' : BUBBLE_MESSAGES[tier][changeCount % len]`; `invalid` is set by onInvalidInput and cleared after 3s (or on valid input). The "Try me!" chip: opens on mouse enter of a face, hides while the pointer is down inside an `input` (site: `onPointerDown: e.target.closest('input') && suppress`).

### Scroll logic (`M`, exact)
- `panelH` from ResizeObserver on the left panel (default 400 before measure). Section height style = `calc(100vh + ${panelH + 480}px)`.
- On scroll/resize (rAF-throttled, passive): `progress = clamp((-sectionRect.top - 240) / panelH, 0, 1)`; `showingDemo = progress >= 0.5`. No other intermediate visual — everything is a 750ms CSS transition between the two states.

## Mobile/tablet section (`lg:hidden`)
```
<section class="relative overflow-clip border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-16 md:px-6 md:py-20 lg:hidden">
  <div class="relative mx-auto flex max-w-[1600px] flex-col gap-4 md:gap-6">
    <div aria-hidden class="pointer-events-none absolute -bottom-16 -top-16 left-0 w-px bg-[#e1e1e1] md:-bottom-20 md:-top-20" /> + right-0 mirror
    <div class="flex flex-col px-4 md:px-6"><h2 class="font-medium font-mono text-[#191919]" (text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)] → 28px base, 40px md)>Get Quoted Instantly or Book a Demo With a Specialist</h2></div>
    <div class="relative flex flex-col">
      <hairlines top/bottom w-screen>
      <div class="grid grid-cols-1 items-center md:grid-cols-2">
        <div><div class="flex flex-col items-center justify-center gap-9 p-4 md:px-6 md:py-8 lg:py-0"> <TextBlock selfServe (h3 text-[18px] md:text-[20px]) /> </div></div>
        <div><SelfServeCard /></div>
      </div>
      <div class="relative py-8"><hairlines top/bottom w-screen></div>
      <div class="grid grid-cols-1 items-center md:grid-cols-2">
        <div><div class="…same wrapper"> <TextBlock demo /> </div></div>
        <div><DemoCard /></div>
      </div>
    </div>
  </div>
</section>
```
SelfServeCard (`N`): `<div class="@container relative flex flex-col overflow-clip rounded-[24px] border border-[#e1e1e1]"><div class="relative aspect-[800/465] overflow-clip bg-[#ff7d33] p-[1.09cqw]"><div {...chip.handlers} class="@container absolute left-1/2 top-[9.7%] aspect-[701/778] w-[87.625%] -translate-x-1/2 rounded-[1.63cqw] bg-[#f9f9f9] shadow-[0_0_1.63cqw_rgba(25,25,25,0.5)]"><FinancialFormMock cursorExitProgress={0} /></div></div><div class="border-t border-[#e1e1e1] bg-white p-3"><PressableButton className="w-full" faceClassName="w-full gap-1 text-body" href={signUp} size="small" variant="orange" dataTrack="cta-homepage-self-serve">Start your application<MaterialIcon name="arrow_forward" size={16} /></PressableButton></div><CursorChip … "Try me!" /></div>`
DemoCard (`C`): same shell with `bg-[#dddddd]`, the back-face form positioned `left-[3.25%] top-[8.46%] aspect-[575/699] w-[71.875%]` (no rotation, `showCursor={false}` + change handlers), the corgi image `pointer-events-none absolute bottom-[-7.71%] right-[-11.875%] aspect-[311/316] w-[38.875%]` (fully visible: dogEntryProgress 1), `EstimateBubble` with the same message logic, footer button black "Book a demo" + `call` icon (`dataTrack="cta-homepage-book-demo"`).
Note the mobile text blocks use `h3 class="font-bold text-[18px] md:text-[20px] leading-none tracking-[-0.032em] text-[#191919]"` and the wrapper `lg:max-w-[480px]` on the two inner columns.

## Computed values (1440)
- Section 1747px tall; sticky viewport 900; heading 48px at y+230 within the sticky; grid 2 × 632px, gap 48px; left panel 632×367 (radius 24, border #e1e1e1); panel padding 6.87px (1.09cqw); front form card 552×613 at top 35px centered; back card 453×550 at top 31px right 20px; corgi 245×249 at right -75px bottom -28px; bubble at left 78.75% top 25.37%, 142×26, text 13.5px.
- Right column: text max-w 480px shifted -24px; h3 20px/20px 700 -0.64px; body 16px/19.2px -0.24px #4a4a4a; CTA small (face 210×37 / 149×37).
- Mobile (390): section 1330 tall (padding 64px 16px); h2 28px; cards 358 wide (form panel 356×207); text blocks p-4; CTA full width in the card footer (p-3, border-t).
