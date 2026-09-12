# TestimonialsSection Specification ("Built for Founders Who Ship" draggable rail)

## Overview
- **Target file:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/TestimonialsSection.tsx` (client)
- **Screenshots:** `sections/07-testimonials-desktop.png`, `sections-mobile/07-testimonials.png`
- **Interaction model:** time-driven JS marquee + pointer drag/fling + hover slow-down + cursor chip "Draggable!"
- **Data:** `TESTIMONIALS_HEADER`, `TESTIMONIALS`, `LINKS` from `./data`; `CursorChip`/`useCursorChip`, `UnfoldHorizontalIcon`, `MaterialIcon`, `PressableButton` from shared.
- **Reference source (reproduce 1:1):** `js/pretty/3f31h1wptpiw4.js` lines 342–521 (`TestimonialsMarquee`, card `d`, chip `l`).

## DOM structure
```
<section class="relative flex h-screen flex-col justify-center overflow-hidden border-b border-[#e1e1e1] bg-[#f6f6f6]">
  <div class="relative px-4 md:px-6 lg:px-16">
    <div aria-hidden class="pointer-events-none absolute left-[max(16px,calc((100%-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100%-1600px)/2))] lg:left-[max(64px,calc((100%-1600px)/2))]" style={{top:'-100vh', bottom:'-24px'}} />  + right mirror
    <div class="relative mx-auto max-w-[1600px]">
      <div class="flex flex-col items-start justify-between gap-6 px-4 md:px-6 lg:flex-row lg:items-end">
        <div class="flex flex-col items-start gap-4 md:gap-6">
          <h2 class="font-medium font-mono" (size var(--h1-font-size), line-height 1, tracking -0.032em, #191919)>Built for <span class="font-serif italic pr-2.5 md:pr-5">Founders</span>Who Ship</h2>
          <p class="text-body-large">Why startups get insured with Corgi.</p>
        </div>
        <PressableButton dataTrack="cta-testimonials-marquee" faceClassName="hover:bg-[#2a2a2a]" href="/customers" size="large" variant="black">Read customer stories</PressableButton>
      </div>
    </div>
  </div>
  <div class="relative mt-6 w-full touch-pan-y cursor-grab select-none active:cursor-grabbing" {pointer handlers}>
    <div aria-hidden class="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-[#e1e1e1]" />
    <div aria-hidden class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-[#e1e1e1]" />
    <div class="overflow-hidden" style={{maskImage:'linear-gradient(to right, transparent 0, black 3%, black 97%, transparent 100%)', WebkitMaskImage: same}}>
      <div ref=track class="flex w-max gap-4 will-change-transform md:gap-6">{[...T, ...T].map(card)}</div>
    </div>
  </div>
  <div aria-hidden class="relative h-0"> two rails (left/right as above) with style {top:0, bottom:'-100vh'} </div>
  <CursorChip open={chipOpen && !dragging && !overLink} chipRef icon={<UnfoldHorizontalIcon className="size-3 shrink-0 text-white" />} label="Draggable!" />
</section>
```
### Card (`article`)
```
<article class="flex h-[500px] w-[320px] shrink-0 flex-col overflow-clip rounded-[24px] border border-[#e1e1e1] bg-white md:h-[560px] md:w-[382px]">
  <div class="relative -mx-px -mt-px flex h-[280px] shrink-0 flex-col justify-end overflow-clip rounded-[24px] border border-[#e1e1e1] p-4 shadow-[0px_0px_16px_0px_rgba(25,25,25,0.3)] transition-transform duration-300 ease-out has-[a:hover]:-rotate-[1.2deg] md:h-[320px]">
    <div class="absolute inset-0 bg-[#191919]" />
    <Image alt={author} class="absolute inset-0 object-cover object-top" fill sizes="(min-width: 768px) 382px, 320px" src={image} />
    <div class="absolute inset-0" style={{backgroundImage:'linear-gradient(200.64deg, rgba(255,255,255,0) 49.9%, rgba(255,255,255,0.726) 70.5%, #ffffff 94.66%)'}} />
    <a href={companyUrl} target="_blank" rel="noopener noreferrer" draggable={false} onPointerDown={e=>e.stopPropagation()} onDragStart={e=>e.preventDefault()} class="group/link relative flex items-start gap-3" aria-label={`Visit ${role.split('@').pop()?.trim() ?? author}`}>
      <div class="flex items-center rounded-[12px] [transition-property:background-color,box-shadow] [transition-duration:0ms,300ms] [transition-delay:300ms,0ms] group-hover/link:bg-[#f6f6f6] group-hover/link:shadow-[0_0_8px_0_rgba(25,25,25,0.2)] group-hover/link:[transition-delay:0ms,0ms] group-hover/link:[transition-duration:0ms,0ms]">
        <div class="flex w-0 items-center justify-center overflow-hidden transition-[width,padding] duration-300 ease-out group-hover/link:w-[42px] group-hover/link:pl-[10px] group-hover/link:pr-[8px]"><MaterialIcon name="north_east" size={24} className="shrink-0 text-[#191919]" /></div>
        <div class="relative size-11 shrink-0 overflow-hidden rounded-[12px] shadow-[0px_0px_4px_0px_rgba(29,29,29,0.25)]"><Image alt="" class="object-cover" fill sizes="44px" src={companyLogo} /></div>
      </div>
      <div class="flex flex-col gap-1.5 whitespace-nowrap">
        <span class="text-[16px] font-medium leading-[1.2] tracking-[-0.24px] text-[#1d1d1d]">{author}</span>
        <span class="text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4e4e4e]">{role}</span>
      </div>
    </a>
  </div>
  <div class="flex flex-1 items-center p-3 md:p-5"><p class="text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a] md:text-[16px] md:tracking-[-0.24px]">“{quote}”</p></div>
</article>
```

## Marquee + drag algorithm (exact)
Refs: `x` (translate), `speedTarget` (1, or .15 while hovered/focused), `dir` (1|-1), `dragging`, `dragStartX`, `lastX`, `fling` (px/s), `samples[]`.
- rAF loop (skip entirely if `prefers-reduced-motion: reduce`): `dt = now - last`; if dragging → `x = dragX`; else `speed += (speedTarget - speed) * (1 - exp(-dt/220))`; `x += 40 * speed * dir * dt/1000`; `x += fling * dt/1000; fling *= exp(-dt/500); if |fling| < .5 → 0`. Wrap: `half = track.scrollWidth/2`; if `x <= -half` → `x += half`; if `x > 0` → `x -= half`. Apply `track.style.transform = translate3d(x.toFixed(2)px,0,0)`.
- Run only when IntersectionObserver (rootMargin 100px, threshold 0) says intersecting and tab visible.
- onPointerEnter (mouse): speedTarget=.15, chip on, move chip; onPointerLeave (mouse): speedTarget=1, chip off. onFocusCapture/onBlurCapture same speed change.
- onPointerDown (mouse: only button 0): read current x from the transform, dragging=true, fling=0, dragStartX=lastX=clientX, samples=[{x, t}], setPointerCapture; (mouse) chip suppressed + "dragging" flag.
- onPointerMove: if mouse and not dragging → move chip. If dragging: `dragX += clientX - lastX; lastX = clientX;` push sample; drop samples older than 100ms (keep ≥2).
- onPointerUp/Cancel: if not dragging (mouse) → just un-suppress chip; else dragging=false, release capture; `if |clientX - dragStartX| > 10 → dir = sign`; velocity from first/last sample over ≥2 samples: `v = dx/dt*1000; if |v| > 80 → fling = v`; clear samples; (mouse) if pointer still inside the rail → chip on & moved, else chip off.

## Computed styles
- section 1440×900 (h-screen), header block at y+109: h2 48px/48px -1.536px (Founders in italic georgia, `pr-5` at md), p 20px; CTA large black 254×50 face (20px/24px 500 -0.3px), base 54px.
- Rail: `mt-6`, 560px tall (cards 382×560), gap 24px; hairlines at top/bottom of the rail; mask fades 3%/97%.
- Card photo block 382×320 (h-[320px] md), radius 24px, shadow 0 0 16px rgba(25,25,25,.3), padding 16px; quote block padding 20px, text 16px/19.2px -0.24px #4a4a4a vertically centered.
- Avatar 44px radius 12px shadow 0 0 4px rgba(29,29,29,.25); name 16px/19.2px 500 #1d1d1d; role 14px/16.8px #4e4e4e.

## Responsive
- 390: section 844 tall; h2 28px (wraps: "Built for Founders" / "Who Ship"), CTA below text (`flex-col`), cards 320×500 (photo 280px), gap 16px, quote p 14px, p-3.
- 1024+: header row (`lg:flex-row lg:items-end`), CTA at right.
