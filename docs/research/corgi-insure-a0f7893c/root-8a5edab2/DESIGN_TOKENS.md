# DESIGN TOKENS — corgi.insure

## Fonts (all self-hosted on the site; copied to public/sites/corgi-insure-a0f7893c/shared/fonts/)
| Role | Family | Weights used | Source |
|---|---|---|---|
| Body / UI (`font-sans`) | Geist (variable 100–900) | 400, 500, 600, 700 | next/font/google "Geist" |
| Headings (`font-mono` on the site!) | F37 Bolton | 400 (regular), 500 (medium) | f37_bolton_regular.woff2, f37_bolton_medium.woff2 |
| Serif italic accent (`font-serif`) | "georgia" (custom woff2) | 400 | georgia.woff2 |
| Hero H1 | heroHeading (subset) | 500 | heroHeading.woff2 (3.5KB subset, only the hero glyphs) |
| Hero orange italic | heroSerif (subset) | 400 (+ synthesized italic) | heroSerif.woff2 |
| Icons | Material Symbols Sharp (variable) | FILL 0, wght 400, GRAD 0, opsz 24 | material-symbols-sharp.woff2 (3.5MB) |
Fallback metrics (from site @font-face): heroHeading Fallback Arial ascent 99.01% descent 25.74% line-gap 17.82% size-adjust 101%; heroSerif Fallback ascent 94.15% descent 22.51% size-adjust 97.4%; georgia Fallback ascent 92.3% descent 22.07% size-adjust 99.35%; f37Bolton Fallback ascent 98.89% descent 25.71% line-gap 17.8% size-adjust 101.13%; Geist Fallback ascent 95.94% descent 28.16% size-adjust 104.76%.

## Colors
- background `#f6f6f6`; foreground `#1d1d1d`; heading ink `#191919`; body grey `#4a4a4a`; secondary grey `#4e4e4e`; muted `#606060`, `#7b7b7b`, `#b2b2b2`
- primary orange `#ff5c00`; hover `#ff7d33`; active `#ff9d66`; pressable base `#cc4a00`; pale orange pill `#ffdecc` (hover `#ffc9a3`, selected `#ffbe99`); orange panel `#ff7d33`; grey panel `#dddddd`
- black button `#191919` (hover `#4a4a4a`, active `#7b7b7b`, base `#626262`); white button base `#e1e1e1`, hover `gray-50 #f9fafb`, active `#ededed`
- borders `#e1e1e1` (light), `#585858` (on dark); dark section `#313131`; card white `#fff`; paper `#f9f9f9`; input border `#bdbdbd`
- legacy pink chips: border `#ff405d`, bg `#ffe9ec`, ring `#ff94a4`; aurora gradient stops white → #FFC5A4 → #BF73EB → #9FC4FF → #FF7CA7; aurora bg `#2d3957`
- instant-quote badge gradient: `linear-gradient(90deg,#f66398 0%,#fb846c 60.894%,#fe9850 100%)`
- disclaimer block: bg `#000`, text stone-200 `#e7e5e4`

## Typography scale (computed)
- Hero h1: 60px/60px, -1.92px, 500 heroHeading (mobile 36px/36px -1.152px)
- Section h2: 48px/48px, -1.536px, 500 F37 Bolton (`--h1-*` vars: 36px on mobile via `md:` classes → mobile 28px/28px -0.896px observed in get-quoted; journey h2 mobile: check tree)
- Card h3 (journey): 32px/32px -1.024px 400 F37 Bolton (mobile 24px)
- Intro h2: 32px/32px -1.024px 400 F37 Bolton (md 28px class, lg 32px) — computed 32px at 1440
- Quote strip p: 48px/48px -1.536px 500 F37 Bolton (28px base, 36px md, 48px lg)
- Policy card h3: 20px/20px -0.64px 700 Geist; specialized h4: 20px/20px -0.64px F37 Bolton 400
- text-body: 16px/19.2px -0.24px (site var `--body-font-size:14px` overridden at md to 16px via `text-body` responsive rules? computed 16px desktop, 14px mobile)
- text-body-large: 20px/24px -0.3px, color #4a4a4a (desktop) / 18px/21.6px -0.27px (mobile)
- btn-text-small: 500 16px/19.2px -0.24px (desktop) / 14px/16.8px -0.21px (mobile); btn-text-large: 500 20px/24px -0.3px
- nav items: 14px/16.8px -0.21px #4a4a4a; menu headers 12px uppercase -0.18px #4a4a4a; menu items 14px
- footer links 16px/19.2px -0.24px #606060; footer headers 16px 600 #191919; press caption 11px F37 Bolton #7b7b7b

## Radii & shadows
- Cards 24px; buttons 16px (with `corner-shape: superellipse(1.6)` where supported); pills 4px; nav item 12px; menu item 8px; avatar 12px; orb 32px/17px
- Card shadow `0 0 24px 0 rgba(25,25,25,.05)`; quote card `0 0 16px 0 rgba(25,25,25,.05)`; testimonial photo block `0 0 16px 0 rgba(25,25,25,.3)`; paper `2px 1px 8px 0 rgba(25,25,25,.5)`; panel image `0 8px 28px 0 rgba(0,0,0,.4)`

## Layout
- Content max width 1600px with 64px side padding (lg), 24px (md), 16px (base); policies/FAQ/quote use max-w 1200/800/1100.
- Header: banner 36px + nav 56px (padding 8px 64px → inner 39px row).
