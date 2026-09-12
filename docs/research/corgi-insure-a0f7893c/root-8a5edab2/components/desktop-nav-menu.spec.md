# DesktopNavMenu Specification (mega-dropdown panel content for the header)

## Overview
- **Target file:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/DesktopNavMenu.tsx` (server-safe presentational component). Export `DesktopNavMenu({ menu, id, labelledBy })` rendering ONE panel (the header builder positions/animates it and handles hover state). Also export `MenuColumnWidthStyle(menu)` helper returning the CSS-variable class string.
- **Screenshots:** `dom/header-menu-0-tech-companies.png`, `dom/header-menu-1-small-businesses.png`, `dom/header-menu-2-products.png`, `dom/header-menu-3-company.png`, `dom/header-menu-4-partners.png`
- **Interaction model:** hover styles only (open/close is handled by the header)
- **Data:** `NAV_MENUS` (type `NavMenu`) from `./data`; `MaterialIcon` from shared.
- **Exact trees:** `dom/header-menu-0.json` … `header-menu-4.json` and their readable trees `dom/header-menu-0.tree.txt` … `header-menu-4.tree.txt`.

## Panel markup (verbatim)
```
<div role="region" id={id} aria-labelledby={labelledBy}
     class="pointer-events-auto hidden w-fit overflow-clip border-b-[1px] border-r-[1px] border-l-[1px] border-[#e1e1e1] bg-[rgba(255,255,255,0.85)] px-4 py-6 backdrop-blur-[6px] xl:block 2xl:px-8 min-[1680px]:px-16"
     style="margin-left:175px">         // header supplies margin-left = trigger left (175px at 1440); panel width fits content
  <div>
    <div class="relative flex items-stretch [--dropdown-column-width:176px] 2xl:[--dropdown-column-width:200px] min-[1680px]:[--dropdown-column-width:220px]">   // per menu: columnWidth base/xl2/w1680; Products: 200/220/240; others 240 (no var → default 240px). Use `items-stretch` for Tech companies, `items-start` for the rest (source shows items-start on menus 1–4).
      <!-- decorative hairlines -->
      <div aria-hidden class="pointer-events-none absolute top-1/2 left-0 flex h-[2400px] -translate-y-1/2 items-center justify-center"><div class="h-full w-[1px] bg-[#e1e1e1]" /></div>
      <div aria-hidden class="pointer-events-none absolute top-1/2 right-0 flex h-[2400px] -translate-y-1/2 items-center justify-center"><div class="h-full w-[1px] bg-[#e1e1e1]" /></div>
      <div aria-hidden class="pointer-events-none absolute top-[30px] left-1/2 h-[1px] w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
      <div aria-hidden class="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
      // one vertical line at the left edge of every column after the first: absolute top-1/2 h-[2400px] -translate-y-1/2, style left = cumulative column width (e.g. 176px, 528px, 704px for Tech companies)
      <!-- columns -->
      {columns.map(col => <div class={col.span===2 ? "flex w-[calc(var(--dropdown-column-width,240px)*2)] shrink-0 flex-col gap-2" : "flex w-[var(--dropdown-column-width,240px)] shrink-0 flex-col gap-2"}>
        <div class="pl-2"><span class="text-[12px] uppercase tracking-[-0.18px] text-[#4a4a4a]">{col.title}</span></div>     // 12px/18px, line box 24px
        <div class={col.grid ? "grid grid-cols-2 gap-2 p-2" : "flex flex-1 flex-col gap-2 p-2"}>
          {items.map(item => item.href
            ? <Link href class="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-[#f6f6f6]"> <MaterialIcon name={item.icon} size={16} className="shrink-0 text-[#4a4a4a]" /> <span class="flex-1 text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a]">{label}</span> {item.badge && <span class="rounded-[4px] bg-[#f6f6f6] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-[-0.1px] text-[#7b7b7b]">{badge}</span>} </Link>
            : <div class="flex items-center gap-2 rounded-lg p-2 text-[#4a4a4a]"> icon + label (+ badge) </div>)}
          {col.viewAll && <div class="mt-auto"><Link href class="text-[14px] font-medium tracking-[-0.18px] text-[#ff5c00] hover:underline">View all</Link></div>}
        </div>
      </div>)}
      <!-- highlights (always last, spans 2 columns) -->
      <div class="flex w-[calc(var(--dropdown-column-width,240px)*2)] shrink-0 flex-col self-stretch">
        <div class="flex h-[30px] items-center pl-2"><span class="text-[12px] uppercase tracking-[-0.18px] text-[#4a4a4a]">Highlights</span></div>
        <div class="flex min-h-[240px] flex-1 overflow-hidden rounded-[20px] border-[1px] border-[#e1e1e1]">
          <Link href={h0.href} class="group relative flex flex-1 flex-col items-start justify-end gap-1 overflow-hidden border-r-[1px] border-[#e1e1e1] p-2">
            <Image alt={h0.imageAlt} class={cn("absolute inset-0 h-full w-full object-cover", h0.imagePositionClass)} fill sizes="200px" src={h0.image} />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 from-[54%] via-white/[0.56] via-[70%] to-white/95 to-[85%]" />
            <span class="relative text-[12px] font-bold leading-[1.2] tracking-[-0.18px] text-[#191919] transition-colors group-hover:text-[#ff5c00]">{h0.title}</span>
            <span class="relative text-[12px] leading-[1.2] tracking-[-0.18px] text-[#191919] transition-colors group-hover:text-[#ff5c00]">{h0.description}</span>
          </Link>
          <div class="relative flex flex-1 overflow-hidden">
            <Link href={h1.href} class="group absolute inset-0 flex flex-col items-start justify-end gap-1 overflow-hidden bg-white p-2 transition-opacity duration-500"> same image/gradient/spans for h1 </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
Notes: items in the "By Stage" column are buttons on the live site; render them as links (hrefs supplied in data). The "Perks — COMING SOON" row and "More coming soon" row are non-links (div). Badge style is not measured (row was 0×0 in the dump) — use the small pill above.

## Computed styles (1440, Tech companies panel)
- Panel: 1090×319 at (175,92); padding 24px 16px; bg rgba(255,255,255,.85) + blur 6px; borders #e1e1e1 (no top border — the nav bar's bottom border serves).
- Columns: 176px (By Stage), 352px (By Industry, grid 2×164px), 176px (Software), 352px (Highlights). Column header 12px uppercase #4a4a4a in a 24px `pl-2` row (Highlights header 30px).
- Items: 33px rows (`p-2`, icon 16px #4a4a4a, label 14px/16.8px -0.21px #4a4a4a), gap 8px, hover bg #f6f6f6, rounded 8px, transition 150ms.
- View all: 14px/21px 500 -0.18px #ff5c00 at the column bottom (`mt-auto`).
- Highlights box: 352×240, radius 20px, border #e1e1e1; cards ~183/167px wide; text 12px bold + 12px, gradient overlay; hover → text #ff5c00.
- Products panel: 1234×351 (columns 200px ×4 + highlights 400px); Company 994×319; Small businesses/Partners 754×319 (240 + 480 + padding).
