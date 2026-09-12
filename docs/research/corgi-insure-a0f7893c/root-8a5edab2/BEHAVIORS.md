# BEHAVIORS — corgi.insure home

All values are from getComputedStyle / the site's own compiled component source (docs/research/…/js/pretty/*.js). Timing functions written as in CSS.

## Header (fixed)
- Wrapper `header.pointer-events-none.fixed.top-0.right-0.left-0.z-50.transform-gpu.will-change-transform.transition-transform.duration-300` (transition transform/translate 300ms cubic-bezier(.4,0,.2,1)).
- **Hide on scroll down / show on scroll up**: any downward scroll (already at y=50) sets `translate: 0 -150%` on the header; any upward scroll sets `translate: 0`. Both states keep banner+nav together. At y=0 it is always shown.
- Announcement banner (36px desktop, 56px mobile where text wraps) with dismiss button (X) → removes banner (header becomes 56px); nav bar keeps `--navbar-height`.
- Desktop (xl ≥1280): hover on "Tech companies / Small businesses / Products / Company / Partners" opens a mega-panel under the nav bar: panel `pointer-events-auto w-fit overflow-clip border-b/l/r border-[#e1e1e1] bg-[rgba(255,255,255,.85)] px-4 py-6 backdrop-blur-[6px]` at `margin-left:175px` (aligned to first trigger, x=175). Trigger text color `#4a4a4a` → `#191919` on hover/open; chevron `keyboard_arrow_down` rotates 180deg (transition transform 200ms). A 1px `#191919` underline (`absolute bottom-0 h-[1px]`) slides under the active trigger (opacity 0 when closed; positioned/width = trigger box; e.g. left 175px, width 155px for Tech companies). Menu items: `hover:bg-[#f6f6f6]` rounded-lg, transition-colors 150ms. Highlights cards: `group-hover:text-[#ff5c00]` on both text spans.
  The panel's decorative hairlines: 1px `#e1e1e1` vertical lines between columns (2400px tall, centered) and horizontal lines at top 30px and bottom 0 (2400px wide, centered).
- Mobile/tablet (<1280): hamburger (`menu` ↔ `close` icon swap: opacity/blur(2px)/scale(.25) crossfade 167ms ease-in-out; button color #1d1d1d, orange #ff5c00 when open) toggles a drawer inside the header (`overflow-hidden` wrapper animating height) containing a `nav` (max-h calc(100dvh - navbar) overflow-y-auto): 5 accordion rows (button 14px/#4a4a4a, px-4 py-4, border-b #e1e1e1, bg rgba(255,255,255,.85) blur 6px, chevron right) + "Customers" link row + a 2-col button grid (Log in [black], Book a demo [black], Get insured [orange, col-span-2]). Body gets `overflow:hidden` while open.
- Buttons ("pressable"): see DESIGN_TOKENS.

## Hero
- Static composition. Logo strip: `.logo-carousel-track` = 4 copies of 14 logos, `animation: logo-scroll 60s linear infinite` (`0%{translateX(0)} to{translateX(-25%)}`), `animation-delay:-13s` under 768px. Logos `filter:grayscale(1)`. No hover pause.
- CTA "Get insured now" pressable orange small. No parallax, no drag (the three cursor chips "Try me!", "Draggable!", "Flick me!" belong to other sections).

## Intro (dark card)
- Desktop: `group` container (right-0 bottom-0, 320×240, perspective 1000px) with two stacked "papers": back card ("Get a quote!" text, bg #f9f9f9, 241×283, rotate(-27.6deg), z-0) and front card (document.png image, rotate(-19.99deg), z-10, shadow 2px 1px 8px rgba(25,25,25,.5)). On hover of the group: back card gets z-20 and inner translateZ(80px); front card z-0 and translateZ(-40px). Transitions: outer transform 420ms cubic-bezier(.2,.8,.2,1); inner 480ms cubic-bezier(.34,1.7,.5,1). The "Get a quote!" text turns #ff5c00 on hover (cursor pointer; wraps a link to sign-up).
- "Super long & boring document" label (boring-document-label.png 200×40) at right:254px bottom:150px rotate(-19.27deg), z-10, hidden on mobile.
- Mobile (<md): different markup: an `<a>` 255×270 (translate 24px 12px, rotate 6deg) with the same two papers (225×270) and label (180px wide); click toggles `data-swapped` which swaps z/translateZ like the hover.
- Ellipse.svg (1053px square, centered at bottom, translate(-50%,50%)) decorates the card (hidden overflow).

## Quote strip (staggered reveal)
- Trigger: IntersectionObserver when section enters viewport (fires once). Time-based, not scroll-linked.
- Words of the quote are individual `span.inline-block`; initial `opacity:0; filter:blur(8px); transform:translateY(14px)`; each animates to `opacity:1; blur(0); translateY(0)` with stagger (~40ms/word; --stagger-dur .5s; ease cubic-bezier(.22,1,.36,1)). Measured 1.5s after trigger: first word at 0.95 opacity, last at 0.69 → ~1.6s total.
- Intryc logo (48px, rounded 11.52px, shadow 0 0 3.84px rgba(29,29,29,.25)): from `opacity:0; blur(6px); scale(.55) translateY(8px)` to normal.
- Author card (white, rounded 24px, border #e1e1e1, shadow 0 0 16px rgba(25,25,25,.05)): from `opacity:0; blur(8px); translateY(16px)` → normal, after the words (~1.6s).

## Journey (package cards)
- Pills (`button.rounded-[4px].bg-[#ffdecc]` 12px/500 #ff5c00 px-2 py-1, transition background-color 300ms cubic-bezier(0,0,.2,1), transform 300ms): hover bg `#ffc9a3`; selected bg `#ffbe99`. On click a ripple: `absolute inset-0 animate-chip-ripple rounded-[4px]` (chip-ripple: box-shadow 0 0 #ff5c0080 → 0 0 0 3px #ff5c0000, 350ms ease-out).
- Clicking a pill opens a description panel under the pill row inside that card: `div.overflow-hidden` whose height animates (measured via a hidden clone) with margin-top; content `div.flex.flex-col.gap-1.5.rounded-[4px].bg-[#f6f6f6].px-2.py-2` → `span.font-semibold.text-[#191919].text-[12px].leading-none` (label) + `span.font-medium.text-[#4a4a4a].text-[12px].leading-[1.35]` (description). Opacity fades 200ms. Height/marginTop spring-ish ~300ms. Clicking the same pill closes; clicking another pill in the same card swaps content (AnimatePresence popLayout); opening a pill in another card closes the first (close delay 300ms). Click outside (pointerdown outside the grid) closes.
- Only one panel open at a time across all cards. Card grows (381 → 476/492px) and other cards keep their height (grid rows stretch to the tallest → all cards in the row grow; grid `items` default stretch; observed cardH 476 for the open card; siblings share the row height).
- CTA hover suffix: "Get a quote instantly" + icon; original has an optional hover suffix (not present on the home page). Icons per package: psychiatry, eco, park, widgets.

## Advantage
- Legacy card: chip marquee `flex w-max items-center gap-2 py-2 motion-safe:animate-[marquee-left_24s_linear_infinite]` (keyframes marquee-left 0→-50%), two copies of 4 chips joined by 24×2px #ff405d bars. Each chip has `animation: pill-ring-pulse` with staggered durations/delays (1.7s -0.2s, 2.4s -0.8s, 3.1s -1.5s, 2.2s -0.5s; ease-in-out infinite): box-shadow 0 0 0 4px #ff94a4 ↔ 0 0 0 8px #ff94a4.
- The whole 724×322 canvas is scaled to fit (`origin-top-left` scale = width/724).
- Corgi card: aurora tunnel SVG + 10 "orb" logos in a physics loop (rAF, only while intersecting & visible): each orb travels left→right (vx ≈ 50 px/s far from center, up to 420 px/s near the center x=362), y springs to entry height within the tunnel walls, rotates slightly, orbs collide elastically; when an orb crosses x≥362 it "transforms": 64px round white orb (radius 32, shadow 0 0 16px rgba(255,255,255,.25), icon 40px or 64px for fill icons) → 52px rounded-[17px] orb with `box-shadow 0 0 0 3px rgba(255,92,0,.5)`, icon 26px (52 for fill), and an orange 24px badge with `verified_user` (top -6 right -6) appears. Crossing also dispatches a CORGI_PULSE event that pulses the center corgi mark. Orbs recycle after x>814 with random entry y (161±120) and spacing 0.9–2.3s. Reduced motion: static.
- Center: 156px wrapper with white circle 111.5px + rings (box-shadow 0 0 0 11.15px rgba(255,255,255,.4), 0 0 0 22.3px rgba(255,255,255,.4)) and the orange corgi mark SVG.

## Get quoted (desktop ≥lg) — SCROLL-DRIVEN, two discrete states
- Section height = `100vh + panelHeight + 480px` (panelHeight = left card height 367px → 1747px). Inner `div.sticky.top-0.h-screen.flex.flex-col.justify-center.overflow-hidden`.
- progress = clamp((-section.getBoundingClientRect().top - 240) / panelHeight, 0, 1), recomputed on scroll (rAF). `showingDemo = progress >= 0.5` (observed flip between 560px and 600px of scroll into the section). No hysteresis.
- State A (self-serve): heading spans "Get Quoted Instantly" #ff5c00 / "Book a Demo With a Specialist" #191919; left panel bg #ff7d33; flip container rotateY(0); corgi image `translateX(100%) opacity 0`; bubble hidden; right text column translateY(0); divider line top = panelH (bottom).
- State B (demo): heading colors swap (#191919 / #ff5c00, transition color 750ms cubic-bezier(.4,0,.2,1)); panel bg #dddddd (750ms); flip container `rotateY(180deg)` (750ms, perspective 1200px, both faces backface-visibility hidden; back face pre-rotated 180deg); corgi `translateX(0) opacity 1` (transform 750ms, opacity 500ms); bubble "An estimate is fine" appears (translateX from +213px to -71px, y 12px); right column `translateY(-50%)` (750ms) revealing the "Book a Demo" text; divider line top → 0 (750ms).
- The front face (self-serve form) plays a cursor animation: a mouse cursor dragging a document chip "Important Document, Probably" (blue #2f6fed-ish label) into the dashed upload zone; `cursorExitProgress` (0→1 when showing demo) slides it out (transform 400ms, opacity 350ms). The back face form has real inputs ("Try me!" cursor chip on hover) whose values change the bubble text (numbers → playful messages; invalid → "numbers please!").
- Mobile (<lg): static stacked layout: heading (28px), [Self-serve text] [orange form card + "Start your application" button footer], divider band, [Demo text] [grey form card w/ corgi + bubble + "Book a demo" button].

## Testimonials rail
- JS marquee (rAF): `x -= 40 * speed * dir * dt` px/s; hover (mouse) speed target 0.15 with exponential smoothing (1-exp(-dt/220ms)); loop when |x| > scrollWidth/2 (2 copies of 11 cards). Drag: pointer capture, track velocity over last 100ms; on release, fling velocity (if >80px/s) decays with exp(-dt/500ms); drag direction sets marquee direction. `cursor-grab` / `active:cursor-grabbing`, `touch-pan-y`, mask-image `linear-gradient(to right, transparent 0, black 3%, black 97%, transparent 100%)`.
- Cursor chip "Draggable!" (unfold-horizontal icon) follows the mouse over the rail; hidden while dragging or when hovering the card link.
- Card link (avatar + name) hover: `has-[a:hover]:-rotate-[1.2deg]` on the photo block (transform 300ms ease-out); avatar wrapper gets bg #f6f6f6 + shadow 0 0 8px rgba(25,25,25,.2); a `north_east` arrow reveals by width 0→42px + pl-[10px] pr-[8px] (300ms ease-out).
- Reduced motion: no auto-scroll.

## Policies
- 8 static cards + "See specialized coverages" stack card. Learn more buttons = pressable white. Section CTA "Get insured" pressable orange large.
- SpecializedCoveragesStack: 12 coverage cards (344×155) in a 344×168 stage (scaled by `scale(min(1, (100cqw - 32px)/344px))`, perspective 1400px). Top 3 visible with offsets [{x:0,y:0,scale:1,shadow:0 0 24px rgba(25,25,25,.28)},{x:17.79,y:31,scale:.901,shadow:0 0 13px rgba(25,25,25,.2)},{x:28.58,y:53,scale:.834,shadow:0 0 11px rgba(25,25,25,.16)}], others opacity 0 at the 3rd offset. Every 4.2s (when idle, not reduced motion) the top card auto-flicks alternately right/left: animates to x:560*nx, y:560*ny, scale .92, rotate 22*nx deg, opacity 0 over 480ms ease [.33,0,.3,1], then moves to the back of the order (spring stiffness 320 damping 32 mass .9 for the remaining cards). Pointer drag on the top card moves it (rotate .06*dx); release with distance >90px flicks it in that direction; leaving the stage bounds also flicks. Cursor chip "Flick me!" (hand icon) follows the mouse when hovering (not while dragging).
- Flying dogs: flying-dog-right.webp top-[60px] right-[-90px] w-[210px] (xl) / lg 180px right -80; flying-dog-left.webp bottom-[100px] left-[-90px]; on <lg: right dog top-0 -right-4 w-[100px] md:130, left dog bottom-[56px] -left-6.

## FAQ
- Custom accordion, single open: clicking a question toggles; opening one closes the other. Button `aria-expanded`. Content wrapper: `overflow-hidden transition-[height,margin-top] duration-500 ease-[cubic-bezier(.22,1,.36,1)]` (height 0 → content height, margin-top 0 → 16px?—observed content top at +24px after open: wrapper height 78 for 77px text; margin-top 8px). Inner text: closed `translateY(-8px) opacity 0 blur(2px)` → open `translateY(0) opacity 1 blur(0)` (500ms same ease). Chevron rotates 180deg (500ms same ease). No hover color change on the question.

## Footer
- Press marquee: `flex w-max items-center gap-20` with 4 copies, `animation: logo-scroll 40s linear infinite` (translateX 0 → -25%). Logos `brightness-0 opacity-.9`.
- Link hover: color #606060 → #191919 and bg #e8e8e8 (rounded-lg p-2), 150ms.
- Legal links hover:text-[#191919]; "Get in touch"/"View all" style links hover:underline.
- Pressable buttons everywhere: hover/active bg per variant; :active → face drops 4px (margin-top 4px, padding-bottom 0; 75ms).

## Global entrance animations
Only the quote strip uses staggered entrance. Other sections render immediately (no fade-ups observed at any scroll position).

## QA findings applied after assembly
- The site has a global `h1,h2,h3,h4,h5,h6 { text-wrap: balance }` rule (now in globals.css) — it changes heading line breaks on every section, especially at 390px.
- `tailwind-merge` must know the custom typography utilities (`text-body`, `text-body-large`, `btn-text-*`) as font-size classes, otherwise it strips `text-white` from every pressable button that also uses `text-body` (fixed in `src/lib/utils.ts`).
- Section heights after assembly match the live site at 1440 (9992 vs 9991), 768 (10996 vs 10996) and 390 (13482 vs 13516; the 20px delta is in the policies grid card heights).
