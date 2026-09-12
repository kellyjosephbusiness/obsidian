# CorgiPlatformCard Specification (right card of "Our Unique Advantage": aurora tunnel + orb physics)

## Overview
- **Target file:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/CorgiPlatformCard.tsx` (client). Export `CorgiPlatformCard` (the whole white card incl. title/description) — the section wrapper is built separately.
- **Screenshot:** right half of `sections/05-advantage-desktop.png`
- **Interaction model:** time-driven physics (rAF), runs only while in view & tab visible; static under prefers-reduced-motion.
- **Data:** `ADVANTAGE.corgi`, `ORB_LOGOS` from `./data`; `AuroraTunnelSvg`, `CorgiMarkSvg`, `MaterialIcon` from shared.
- **Reference source (copy the algorithm):** `js/pretty/27stt6lyy-y9_.js` lines 560–717 (orb simulation, `l(x)` tunnel wall function is defined just above line 600 — read from ~line 540). Also lines 415–520 of `js/pretty/3f31h1wptpiw4.js` are NOT this component.

## DOM structure
```
<div class="flex flex-col overflow-hidden rounded-[24px] bg-white">
  <div class="relative aspect-[724/322] overflow-hidden rounded-[24px] bg-[#2d3957] shadow-[0_8px_28px_0_rgba(0,0,0,0.4)]">
    <div class="absolute top-0 left-0 h-[322px] w-[724px] origin-top-left" style={{transform:`scale(${width/724})`}}>   // scale to container width (ResizeObserver); 0.8895 at 644px wide
      <div class="absolute inset-0">
        <div class="absolute inset-[-7.5%_-3.05%]"><AuroraTunnelSvg /></div>     // 768×370 box, svg preserveAspectRatio none, overflow visible
      </div>
      <div ref=stage aria-hidden class="pointer-events-none absolute inset-0" />   // orbs layer (orbs are absolutely positioned children of the 724×322 canvas)
      {orbs…}
      <div class="absolute z-10" style={{width:156.1, height:156.1, left:283.95, top:82.95}}>            // centered: (724-156.1)/2, (322-156.1)/2
        <div class="absolute rounded-full bg-white" style={{inset:22.3, boxShadow:'0 0 0 11.15px rgba(255,255,255,.4), 0 0 0 22.3px rgba(255,255,255,.4)'}} />   // 111.5px circle
        <CorgiMarkSvg class="pointer-events-none absolute inset-0" width={156.1} height={156.1} />
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-3 p-3 md:p-5">
    <h3 class="font-bold font-sans text-[18px] md:text-[20px] text-[#4a4a4a] leading-none tracking-[-0.032em]">Corgi</h3>
    <p class="font-sans text-[14px] md:text-[16px] text-[#4a4a4a] leading-[1.2] tracking-[-0.015em]">Corgi is the AI-native, full-stack insurance platform built for startups. Corgi is faster, more cost-efficient, and built to perform because <span class="font-semibold text-[#191919]">we are full-stack</span>. By coordinating underwriting, policy design, servicing, and claims administration in one place, we move faster and pass that speed to founders.</p>
  </div>
</div>
```
### Orb markup (one per `ORB_LOGOS` entry, 10 total)
```
<div aria-hidden class="absolute top-0 left-0" style={{width:size, height:size, transform:`translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${angle}rad)`, willChange:'transform, width, height'}}>
  <div class="relative flex size-full items-center justify-center overflow-hidden bg-[#f6f6f6]" style={{borderRadius: transformed ? '17px' : '32px', boxShadow: transformed ? '0 0 0 3px rgba(255, 92, 0, 0.5)' : '0 0 16px 0 rgba(255, 255, 255, 0.25)'}}>
    <img alt="" class="object-contain" loading="lazy" src={logo.src} style={{width:iconSize, height:iconSize}} />
  </div>
  <div class="-top-[6px] -right-[6px] absolute size-[24px] items-center justify-center rounded-full bg-[#ff5c00]" style={{display: transformed ? 'flex' : 'none'}}>
    <MaterialIcon name="verified_user" size={16} className="text-white" />
  </div>
</div>
```
size: untransformed 64px, transformed 52px. iconSize: fill logos 64/52px, others 40/26px.

## Physics (exact, from source; canvas coordinates 724×322, center x=362, mid y=161)
- Tunnel wall half-height at x: `l(x)` = the aurora tunnel inner half height; the source defines it around lines 540–599 of that file — copy it. (Shape: 124→ at x=24 the tunnel spans y 24…344 (full), narrowing to y 124…245 between x≈278 and 558, then widening again.) If you cannot find `l`, derive it from the aurora path: half-height = 160 at the edges (x≤24 or ≥812) and 60.5 in the flat middle (278…558), linear between.
- Initial placement: 3 orbs distributed across the canvas at x = 40 + 644*i/3 ± 20, entryY = 161 ± 120 random; remaining 7 queued off-screen left with staggered entry times (0.9–2.3s apart), vx = 50 ± 8 px/s.
- Per frame (dt ≤ 50ms): `t = 1 - min(1, |x-362|/362)`; target speed `c = 50 + 370*t^2.5`; `vx += (c - vx) * (x<362 ? 3.5 : 2.2) * dt`; target y `m = 161 + clamp((entryY-161)*(1-t^2), ±(l(x) - r))` where r = 32 (26 when transformed); `vy += (m - y)*7*dt; vy *= 1 - min(.9, 6*dt); x += vx*dt; y += vy*dt; av *= 1 - min(.9, .8*dt); angle += av*dt`; clamp inside walls with bounce (vy = -0.6*vy, av ± vx*dt*.008).
- Transform when x ≥ 362 (once): `transformed = true` and dispatch `window.dispatchEvent(new Event("corgi-pulse"))` (the center mark listens and pulses — implement a short scale pulse 1 → 1.08 → 1, ~300ms, on the 156px wrapper).
- Recycle when x > 814: reposition at x = -50*(nextEntryAt - now) with fresh random entryY, vx, angle, av; `nextEntryAt = max(now+.9, prev+.9+1.4*rand)`.
- Pairwise circle collisions (radius 32/26): separate overlap 50/50 and exchange normal velocity (restitution 0.95), add spin ±0.08·tangential/r.
- Loop only when IntersectionObserver (rootMargin 100px) says visible AND `document.visibilityState !== 'hidden'`. `prefers-reduced-motion: reduce` → no loop (orbs static at their initial positions).
- Write DOM styles directly via refs each frame (no React state per frame).

## Computed styles
- Card 644×435 at 1440 (grid col). Image panel 644×286 (aspect 724/322), radius 24px, bg #2d3957, shadow 0 8px 28px rgba(0,0,0,.4). Text block padding 20px; h3 20px/20px 700 -0.64px #4a4a4a; p 16px/19.2px -0.24px #4a4a4a.
- Center ring: white circle 111.5px + two translucent rings (11.15px and 22.3px).

## Responsive
- 390: card 358 wide, panel 358×159 (scale .4945), text block p-3, h3 18px, p 14px.
- 768: 2-col grid → card ~348 wide.
