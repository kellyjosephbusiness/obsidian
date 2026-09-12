# Shared context for every builder (corgi.insure clone)

## Project
- Next.js 16 (App Router, React 19, TS strict), Tailwind CSS v4 (arbitrary values allowed and expected — the class strings in these specs are the site's own Tailwind classes; reuse them verbatim), shadcn `cn()` at `@/lib/utils`, `motion` v13 (`import { motion, AnimatePresence, useInView } from "motion/react"`), lucide-react v1.
- Read `node_modules/next/dist/docs/` if unsure about a Next 16 API. Use `next/image` (`<Image fill sizes=… />` or width/height) and `next/link`.
- Fonts are already configured: `font-sans` = Geist, `font-mono` = **F37 Bolton** (the site's display face; every heading uses `font-mono`), `font-serif` = custom Georgia; `.homepage-hero-heading-font` / `.homepage-hero-serif-font` for the hero only.
- Global utilities already in `src/app/globals.css`: `.text-body`, `.text-body-large`, `.btn-text-small`, `.btn-text-large`, `.pressable-button`, `.pressable-smooth-corner`, `.msym`, `.animate-chip-ripple`, keyframes `logo-scroll` (0 → -25%), `marquee-left` (0 → -50%), `marquee-right`, `pill-ring-pulse`, `chip-ripple`, `ticker-scroll`. Responsive typography vars `--h1-font-size` etc. are defined at :root (36/48/60px at base/md/lg).
- Design tokens: bg `#f6f6f6`, ink `#191919`/`#1d1d1d`, body grey `#4a4a4a`, hairline `#e1e1e1` (dark sections `#585858`), orange `#ff5c00` (hover `#ff7d33`, active `#ff9d66`), dark section `#313131`.

## Shared components (import from `@/components/sites/corgi-insure-a0f7893c/shared/...`)
- `PressableButton` (`./PressableButton`): `{ children, variant: 'orange'|'black'|'white' (default orange), size: 'small'|'large' (default small), href?, onClick?, className? (outer base), faceClassName? (face overrides, e.g. "w-full gap-1 text-body"), depth? (px, default 4), ariaLabel?, target?, rel?, dataTrack? }`. Renders `<div class="pressable-button pressable-smooth-corner bg-[base]"><a|button class="pressable-smooth-corner flex items-center justify-center border …">…</a></div>`. Small face = `px-4 py-2 btn-text-small` (37px tall incl. border), large face = `px-6 py-3 btn-text-large` (50px). Base colors: orange `#cc4a00`, black `#626262`, white `#e1e1e1`.
- `MaterialIcon` (`./MaterialIcon`): `{ name, size?: number (px, default 24), className?, fill?, weight? }` → `<span class="msym">name</span>` rendered with the self-hosted Material Symbols Sharp font (ligatures like `keyboard_arrow_down`, `north_east`, `arrow_forward`, `call`, `info`, `verified_user`, `menu_book`, `psychiatry`, `eco`, `park`, `widgets`…).
- `CursorChip` + `useCursorChip` (`./CursorChip`, client): cursor-following orange label used for "Try me!", "Draggable!", "Flick me!". `const chip = useCursorChip(); <div {...chip.handlers}>…</div> <CursorChip open={chip.open} chipRef={chip.chipRef} icon={<MaterialIcon name="pan_tool" size={12} className="shrink-0 text-white" />} label="Flick me!" />`. `chip.suppress(true)` hides it temporarily (e.g. while dragging); `chip.move(x,y)` repositions.
- `icons.tsx`: `UnfoldHorizontalIcon`, `UploadIcon`, `BubbleTailIcon`, `AuroraTunnelSvg`, `CorgiMarkSvg`.
- Content: `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/data.ts` exports all verbatim copy, links and asset paths (`ASSETS`, `SHARED`, `LINKS`, `ANNOUNCEMENT`, `NAV_MENUS`, `NAV_PLAIN_LINKS`, `HERO`, `COMPANY_LOGOS`, `INTRO`, `QUOTE_STRIP`, `JOURNEY`, `POLICY_PILLS`, `COVERAGE_PACKAGES`, `ADVANTAGE`, `ORB_LOGOS`, `GET_QUOTED`, `TESTIMONIALS_HEADER`, `TESTIMONIALS`, `POLICIES_HEADER`, `POLICIES`, `SPECIALIZED_COVERAGES`, `FAQ_HEADER`, `FAQ`, `FOOTER_CTA`, `PRESS`, `FOOTER_COLUMNS`, `FOOTER_LEGAL`, `FOOTER_SOCIAL`, `FOOTER_IMAGES`, `DISCLAIMER_PARAGRAPHS`). Types in `@/types/sites/corgi-insure-a0f7893c/home`.
- All images live under `/sites/corgi-insure-a0f7893c/root-8a5edab2/...` (see `ASSETS`).

## Conventions
- Named exports, PascalCase components, 2-space indent, TS strict (no `any`). Client components need `"use client"`.
- Mobile-first responsive classes exactly as the site (`md:` 768, `lg:` 1024, `xl:` 1280, `2xl:` 1536, `min-[1680px]:`).
- The extracted computed-style trees (exact getComputedStyle values at 1440, 768 and 390) are at `docs/research/corgi-insure-a0f7893c/root-8a5edab2/dom/<name>.tree.txt`, `dom/tablet/`, `dom/mobile/` — consult them for any value not in the spec. The site's own compiled component source (readable JSX) is in `docs/research/corgi-insure-a0f7893c/root-8a5edab2/js/pretty/` when a spec points to it.
- Respect `prefers-reduced-motion` where the site does (marquees/physics stop).
- Verify with `npx tsc --noEmit` and `npm run lint` before finishing; then commit on your worktree branch.

## Heading sizes (correction)
Section `<h2>` headings measure 28px @390, 40px @768, 48px @1440 — that is the `--h2-*` scale. Use `text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]` (never `--h1-*`, which is the hero-only 36/48/60 scale).
