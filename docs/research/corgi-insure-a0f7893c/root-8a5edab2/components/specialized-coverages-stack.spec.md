# SpecializedCoveragesStack Specification (flickable card stack inside the Policies grid)

## Overview
- **Target file:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SpecializedCoveragesStack.tsx` (client). Export `SpecializedCoveragesStack` — the entire white grid card (stage + "See specialized coverages" link).
- **Screenshot:** bottom-right card of `sections/08-policies-desktop.png`
- **Interaction model:** time-driven auto-flick (every 4.2s) + pointer drag/flick; cursor chip "Flick me!"
- **Data:** `SPECIALIZED_COVERAGES`, `POLICIES_HEADER.seeSpecialized`, `POLICIES_HEADER.turnaround` from `./data`; `CursorChip`, `useCursorChip`, `MaterialIcon` from shared; `motion` for the spring/tween animation.
- **Reference source (reproduce 1:1):** `js/pretty/3f31h1wptpiw4.js` lines 62–197 (`SpecializedCoveragesStack`, card `x`, chip `p`).

## DOM structure
```
<div class="group flex aspect-[344/308] flex-col self-start overflow-hidden rounded-[24px] border border-[#e1e1e1] bg-white">
  <div ref=stageRef aria-hidden class="relative flex flex-1 items-center justify-center overflow-hidden border-b border-[#e1e1e1] bg-[#f6f6f6]" style={{containerType:'inline-size', perspective:'1400px'}}>
    <div class="relative" style={{width:344, height:168, transform:'scale(min(1, calc((100cqw - 32px) / 344px)))', transformOrigin:'center', transformStyle:'preserve-3d'}}>
      {COVERAGES.map((c, i) => <motion.div key={c.title} initial={false} animate={target} transition={t} style={{zIndex: flicking===i ? 100 : COVERAGES.length - order.indexOf(i), transformOrigin:'top left', transformStyle:'preserve-3d', willChange:'transform, box-shadow, opacity', borderRadius:'24px'}} class="absolute top-0 left-0"><CoverageCard coverage={c} /></motion.div>)}
      <div aria-hidden class="absolute top-0 left-0 cursor-grab touch-none select-none active:cursor-grabbing" style={{zIndex:200, width:344, height:155}} {pointer handlers} />
    </div>
  </div>
  <CursorChip open={chipOpen && !dragging} chipRef icon={<MaterialIcon name="pan_tool" size={12} className="shrink-0 text-white" />} label="Flick me!" />
  <Link href="/startup-insurance#specialized-coverages" class="flex h-[63px] items-center justify-center bg-white p-3 font-medium text-[16px] text-[#ff5c00] tracking-[-0.24px] hover:underline">See specialized coverages</Link>
</div>
```
### CoverageCard
```
<div class="flex flex-col overflow-hidden rounded-[24px] border border-[#e1e1e1] bg-[#f6f6f6]" style={{width:344, height:155}}>
  <div class="flex w-full flex-col gap-3 border-[#e1e1e1] border-b bg-white p-3">
    <div class="flex min-h-[24px] w-fit items-center justify-center rounded-[12px] border border-[#e1e1e1] bg-[#f6f6f6] px-2 py-1"><span class="text-[11.5px] text-[#4a4a4a] leading-[1.2] tracking-[-0.17px]">1-14 days turnaround</span></div>
    <h4 class="font-mono text-[#191919] text-[18px] md:text-[20px] leading-none tracking-[-0.64px]">{title}</h4>
  </div>
  <div class="p-3"><p class="overflow-hidden text-[#4e4e4e] text-[14px] leading-[1.2] tracking-[-0.21px]" style={{height:51}}>{desc}</p></div>
</div>
```

## State & animation (exact)
- `order: number[]` = indices, front first. Slots: `[{x:0,y:0,scale:1,shadow:'0 0 24px 0 rgba(25, 25, 25, 0.28)'},{x:17.79,y:31,scale:.901,shadow:'0 0 13px 0 rgba(25, 25, 25, 0.2)'},{x:28.58,y:53,scale:.834,shadow:'0 0 11px 0 rgba(25, 25, 25, 0.16)'}]`; cards deeper than slot 3 use the 3rd slot with `opacity:0` and shadow `0 0 0 0 rgba(25, 25, 25, 0)`.
- `flick(nx, ny)`: if busy return; busy=true; front = order[0]; set `flicking = {index: front, nx, ny}`; `order = [...order.slice(1), front]`; reset drag offset; after 480ms clear flicking + busy.
- Auto: when not dragging, not flicking, not reduced-motion: `setTimeout(() => { flick(dirRef, 0); dirRef = -dirRef }, 4200)` (dir starts at 1 → right, then alternates). Re-armed after each flick (effect deps on dragging/flicking).
- Animate targets per card: flicking card → `{x: 560*nx, y: 560*ny, scale: .92, rotate: 22*nx, rotateY: 0, opacity: 0, boxShadow: '0 0 0 0 rgba(25,25,25,0)'}` with `{duration: .48, ease: [.33, 0, .3, 1]}`; front card while dragging → `{x: slot.x + dx, y: slot.y + dy, rotate: .06*dx, scale: slot.scale, opacity: 1, boxShadow: slot.shadow}` with `{duration: 0}`; otherwise → slot values (`rotate:0, rotateY:0, opacity: inSlots ? 1 : 0`) with `{type:'spring', stiffness:320, damping:32, mass:.9}`.
- Drag (overlay div): onPointerDown (if not busy): preventDefault, remember pointerId + start, `dragging=true`. Window listeners while dragging: pointermove → `dx/dy = client - start`; if pointer leaves the stage rect → end drag and `flick(dx/len, dy/len)` if len>0; else set offset. pointerup/cancel → `len = hypot(dx,dy)`; `len > 90 ? flick(dx/len, dy/len) : reset offset to 0`.
- Chip: onPointerEnter (mouse) → move chip + open; onPointerMove (mouse) → move; onPointerLeave (mouse) → close. Hidden while dragging.

## Computed styles (1440)
- Card 384×344 in the grid (aspect 344/308); stage 382×279 bg #f6f6f6 border-b #e1e1e1; inner 344×168 (scale 1 at this width); link row 382×63, 16px/500 #ff5c00.
- Top card at (956,6651) page coords: 344×155, shadow 0 0 24px rgba(25,25,25,.28); 2nd at translate(17.79,31) scale .901; 3rd translate(28.58,53) scale .834.
- Chip label "1-14 days turnaround": 11.5px/13.8px -0.17px #4a4a4a in 24px pill, border #e1e1e1, radius 12px; h4 20px/20px -0.64px F37 Bolton; desc 14px/16.8px #4e4e4e, height 51px (3 lines clipped).

## Responsive
- 390: grid card 358×321, stage scales the 344 stage by (100cqw-32)/344; h4 18px.
- 768 (md): the wrapper cell is `md:col-span-2 md:mx-auto md:w-[calc(50%-12px)] lg:col-span-1 lg:mx-0 lg:w-auto` (handled by the PoliciesSection builder; this component only exports the card).
