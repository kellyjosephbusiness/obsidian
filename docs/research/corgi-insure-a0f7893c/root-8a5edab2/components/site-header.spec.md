# SiteHeader Specification (fixed header: announcement banner + nav bar + mega menus + mobile drawer)

## Overview
- **Target files:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/SiteHeader.tsx` (client) — may split helpers into `MobileNavDrawer.tsx` (client). Import the already-built `DesktopNavMenu` from `./DesktopNavMenu` for the five dropdown panels.
- **Screenshots:** `dom/header-y0.png` (closed), `dom/header-menu-0-tech-companies.png` … `header-menu-4-partners.png` (open panels), `dom/mobile/00-header-menu-open.png` (drawer), `dom/mobile/00-header-menu-group-open.png` (drawer group expanded), `dom/mobile/00-header.png`, `dom/tablet/00-header.png`
- **Trees:** `dom/00-header.tree.txt` (desktop, closed), `dom/mobile/00-header-menu-open.tree.txt` (drawer; panel starts at line 702), `dom/mobile/00-header-menu-group-open.tree.txt` (expanded "Tech companies" group), `dom/tablet/00-header.tree.txt`; behavior log `dom/header-behaviors.json`.
- **Interaction model:** scroll-driven hide/show; hover-driven mega menus (xl+); click-driven drawer (<xl); dismissible banner.
- **Data:** `ANNOUNCEMENT`, `NAV_MENUS`, `NAV_PLAIN_LINKS`, `LINKS`, `SHARED` from `./data`; logo at `${SHARED}/images/corgi-logo-vector.svg` (83×24).

## DOM structure
```
<header class="pointer-events-none fixed top-0 right-0 left-0 z-50 transform-gpu will-change-transform transition-transform duration-300" style={{translate: hidden ? '0 -150%' : '0 0'}}>
  {bannerVisible && <a href={ANNOUNCEMENT.href} class="pointer-events-auto relative flex w-full items-center justify-start bg-[#ff5c00] py-2 pl-7 pr-12 text-white md:justify-center md:px-4">
    <span class="text-sm md:text-body">Announcing our <span class="font-bold">$106M</span> Fundraise at a <span class="font-bold">$2.6B</span> Valuation | <span class="whitespace-nowrap">Series B1</span></span>
    <button type="button" aria-label="Dismiss banner" onClick={dismiss (preventDefault+stopPropagation)} class="absolute right-4 p-1 text-white/80 hover:text-white md:right-3"><MaterialIcon name="close" size={16} /></button>
  </a>}
  <div class="pointer-events-auto relative z-10 border-b-[1px] border-[#e1e1e1] bg-[rgba(255,255,255,0.85)] px-4 py-2 backdrop-blur-[6px] lg:px-6 xl:px-16">   // computed padding 8px 64px at 1440, 8px 16px at 390
    <div class="mx-auto flex w-full max-w-[1600px] items-center justify-between">
      <div class="flex min-w-0 items-center">
        <Link href="/" class="flex h-[39px] shrink-0 items-center px-3 xl:pr-4"><img alt="Corgi" src={logo} width={83} height={24} class="h-6 w-auto shrink-0 -translate-y-0.5" /></Link>
        <nav aria-label="Main navigation" class="hidden items-center xl:flex">
          {NAV_MENUS.map(menu => menu.href
            ? <Link href={menu.href} id={`desktop-nav-trigger-${menu.id}`} aria-expanded={open===menu.id} aria-controls=… onPointerEnter/onFocus=open class="flex h-[39px] cursor-pointer items-center gap-1 rounded-[12px] px-4 text-[14px] leading-[1.2] tracking-[-0.21px] font-normal text-[#4a4a4a] hover:text-[#191919] data-[open=true]:text-[#191919]">
                <span class="relative">{label}<span class="invisible block h-0 font-medium">{label}</span></span>
                <MaterialIcon name="keyboard_arrow_down" size={16} className="transition-transform duration-200 data-[open=true]:rotate-180" />
              </Link>
            : <button type="button" …same classes/attrs…>)}
          <Link href="/customers" class="flex h-[39px] items-center whitespace-nowrap rounded-[12px] px-4 text-[14px] leading-[1.2] tracking-[-0.21px] font-normal text-[#4a4a4a] hover:text-[#191919]"><span class="relative">Customers<span class="invisible block h-0 font-medium">Customers</span></span></Link>
        </nav>
      </div>
      <div class="flex items-center gap-2">
        <nav aria-label="Account actions" class="hidden h-[39px] items-center gap-2 xl:flex">
          <a href={LINKS.login} class="hidden h-full items-center whitespace-nowrap rounded-[12px] px-4 text-[14px] font-normal leading-[1.2] tracking-[-0.21px] text-[#4a4a4a] hover:text-[#191919] xl:flex">Log in</a>
          <PressableButton variant="black" href="/book-a-demo" faceClassName="h-[35px] min-w-[96px] whitespace-nowrap px-2 py-0 btn-text-small">Book a demo</PressableButton>          // face 130×35, base 39px
          <PressableButton variant="orange" href={LINKS.signUp} faceClassName="h-[35px] min-w-[100px] px-3 py-0 btn-text-small">Get insured</PressableButton>                        // face 119×35
        </nav>
        <div class="flex size-[39px] items-center justify-center xl:hidden">
          <button type="button" aria-label="Toggle menu" aria-expanded={drawerOpen} onClick class="flex size-[39px] cursor-pointer items-center justify-center p-0 leading-none text-[#1d1d1d] duration-200 hover:text-[#FF5C00] data-[open=true]:text-[#ff5c00]">
            <span class="mobile-menu-icon-swap size-6 grid place-items-center" data-state={drawerOpen ? 'close' : 'menu'}>
              <span data-icon="menu" class="col-start-1 row-start-1 inline-flex …"><MaterialIcon name="menu" size={24} /></span>
              <span data-icon="close" …><MaterialIcon name="close" size={24} /></span>
            </span>
          </button>
        </div>
      </div>
    </div>
    <!-- active underline (desktop) -->
    <div aria-hidden class="pointer-events-none absolute bottom-0 hidden h-[1px] bg-[#191919] xl:block" style={{left: activeLeft, width: activeWidth, opacity: open ? 1 : 0, transition:'left 200ms, width 200ms, opacity 150ms'}} />   // observed when closed: opacity 0
  </div>
  <!-- desktop panels -->
  <div class="hidden xl:block">{NAV_MENUS.map(menu => <div hidden={open!==menu.id} onPointerEnter=keepOpen onPointerLeave=close><DesktopNavMenu menu id labelledBy style={{marginLeft: triggerLeft}} /></div>)}</div>
  <!-- mobile drawer -->
  <div class="overflow-hidden xl:hidden" style={{height: drawerOpen ? drawerHeight : 0, transition:'height 300ms cubic-bezier(0.4,0,0.2,1)'}}>
    <nav class="pointer-events-auto relative z-0 flex max-h-[calc(100dvh-var(--navbar-height))] flex-col overflow-y-auto overscroll-contain">
      {NAV_MENUS.map(menu => <div>
        <button type="button" aria-expanded={group===menu.id} class="flex w-full items-center justify-between border-b-[1px] border-[#e1e1e1] bg-[rgba(255,255,255,0.85)] px-4 py-4 text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a] backdrop-blur-[6px] md:px-6 data-[open=true]:font-medium data-[open=true]:text-[#191919]">
          {label}<MaterialIcon name="keyboard_arrow_down" size={16} className="shrink-0 transition-transform duration-200 data-[open=true]:rotate-180" />
        </button>
        {group===menu.id && <MobileMenuGroup menu />}
      </div>)}
      <Link href="/customers" class="flex w-full items-center border-b-[1px] border-[#e1e1e1] bg-[rgba(255,255,255,0.85)] px-4 py-4 text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a] backdrop-blur-[6px] md:px-6">Customers</Link>
      <div class="grid grid-cols-2 gap-2 border-b-[1px] border-[#e1e1e1] bg-[rgba(255,255,255,0.85)] p-3 backdrop-blur-[6px] md:p-4">
        <PressableButton variant="black" className="min-w-0" faceClassName="px-4 py-2 text-[14px] font-medium leading-[1.2] tracking-[-0.21px]" href={LINKS.login}>Log in</PressableButton>
        <PressableButton variant="black" className="min-w-0" faceClassName="px-4 py-2 btn-text-small" href="/book-a-demo">Book a demo</PressableButton>
        <PressableButton variant="orange" className="col-span-2" faceClassName="px-4 py-2 btn-text-small" href={LINKS.signUp}>Get insured</PressableButton>
      </div>
    </nav>
  </div>
</header>
```
### MobileMenuGroup (expanded group content, from `dom/mobile/00-header-menu-group-open.tree.txt`)
```
<div class="relative overflow-hidden border-b-[1px] border-[#e1e1e1] bg-[rgba(255,255,255,0.85)] backdrop-blur-[6px]">
  <div class="relative px-4 pb-4 md:px-6">
    <div class="relative flex flex-col">
      <div aria-hidden class="pointer-events-none absolute top-0 left-0 h-[2400px] w-[1px] bg-[#e1e1e1]" /> + right-0 mirror
      <!-- first two columns side by side (By Stage | By Industry): -->
      <div class="relative flex">
        <div class="relative flex flex-1 flex-col gap-2">
          <div class="relative flex items-center px-2 pt-2"><span class="text-[12px] uppercase tracking-[-0.18px] text-[#4a4a4a]">By Stage</span></div>
          <div class="relative flex flex-1 flex-col gap-2 p-2">
            rows: <Link class="flex w-full items-center gap-2 rounded-lg p-2 text-left transition-colors hover:bg-[#f6f6f6]"><MaterialIcon name size={16} className="shrink-0 text-[#4a4a4a]" /><span class="flex-1 text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a]">{label}</span></Link>
            <div class="mt-auto"><Link href class="text-[14px] font-medium leading-[1.2] tracking-[-0.21px] text-[#ff5c00] hover:underline">View all</Link></div>
            <div aria-hidden class="pointer-events-none absolute top-0 left-1/2 h-[1px] w-[200vw] -translate-x-1/2 bg-[#e1e1e1]" />
          </div>
        </div>
        <div aria-hidden class="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#e1e1e1]" />
        <div class="relative flex flex-1 flex-col gap-2"> By Industry (single column list on mobile, same rows) </div>
      </div>
      <!-- remaining columns stacked full width (Software …): header row (px-2 pt-2) + list (p-2 gap-2) each with a top hairline -->
      <!-- Highlights: header row + hairline, then -->
      <div class="flex flex-1 overflow-hidden rounded-[20px] border-[1px] border-[#e1e1e1]" style height 120px>
        <Link class="group relative flex flex-1 flex-col items-start justify-end gap-0.5 overflow-hidden border-r-[1px] border-[#e1e1e1] p-2"> <img class="absolute inset-0 h-full w-full object-cover object-[20%_center]"/> <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 from-[28%] via-white/[0.55] via-[46%] to-white/90 to-[64%]"/> title/description spans (12px bold / 12px) </Link>
        <div class="relative flex flex-1 overflow-hidden"><Link class="group absolute inset-0 flex flex-col items-start justify-end gap-0.5 overflow-hidden bg-white p-2"> … </Link></div>
      </div>
      <div aria-hidden class="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-[200vw] -translate-x-1/2 bg-[#e1e1e1]" />
    </div>
  </div>
</div>
```
Pairing rule for mobile: columns are laid out two-per-row when the menu has ≥2 columns (Tech companies: [By Stage | By Industry], then Software full-width; Products: [Core | Management], [Transportation | Retail]); Highlights always last, full width, 120px tall cards.

## Behaviors (exact)
- **Hide/show:** track `lastY`; on scroll (passive, rAF): if `y > lastY && y > 50` → hidden (`translate: 0 -150%`); if `y < lastY` → shown; `y <= 0` → shown. Transition 300ms cubic-bezier(.4,0,.2,1). Keep header shown while a desktop menu or the drawer is open.
- **Desktop menus (xl+):** open on pointerenter of a trigger (also on focus), stay open while the pointer is over the trigger or the panel; close on pointerleave of both (small 100ms grace), on Escape, and on route/scroll-hide. Trigger open state: text #191919, chevron rotated 180deg (200ms); active underline 1px #191919 under the trigger (`left/width` from `getBoundingClientRect` relative to the header bar; e.g. left 175px width 155px). Panel `margin-left` = trigger left (175px for the first trigger at 1440; each menu's own trigger left).
- **Banner dismiss:** removes the banner (header height 92 → 56). Set `--navbar-height` on the header (56px) for the drawer max-height.
- **Drawer (<xl):** toggle button swaps `menu`↔`close` icons via `.mobile-menu-icon-swap[data-state]` (add the `[data-icon]` spans; globals.css only defines `.mobile-menu-icon-swap` base? — it does NOT; implement the crossfade inline: each icon span `grid-area 1/1; transition: opacity 167ms ease-in-out, filter 167ms, transform 167ms`; inactive = `opacity:0; filter:blur(2px); transform:scale(.25)`; active = `opacity:1; blur(0); scale(1)`). Drawer wrapper animates height (measure the nav's scrollHeight) over 300ms; while open, set `document.body.style.overflow = 'hidden'` (and html). Groups: one open at a time; group button turns #191919 + font-medium with rotated chevron. Close the drawer on link click / route change / resize to ≥1280.
- Header wrapper is `pointer-events-none`; bars/panels/drawer are `pointer-events-auto`.

## Computed (1440)
- Banner 36px (14px/20px white, centered); nav bar 56px (8px vertical padding, 64px horizontal), bg rgba(255,255,255,.85) blur 6px, border-b #e1e1e1; logo link 111×39 (padding 0 16px 0 12px), logo 83×24 translated -2px.
- Triggers: x=175 (Tech companies 155w), 330 (Small businesses 163w), 492 (Products 109w), 602 (Company 113w), 714 (Partners 106w), 821 (Customers 101w); 14px/16.8px -0.21px #4a4a4a, gap 4px, chevron 16px.
- Right: Log in 70×39; Book a demo base 130×39 (face 35px, min-w 96px, px-2); Get insured base 119×39 (face 35, min-w 100, px-3); gap 8px.
- 390: banner 56px (`pl-7 pr-12`, 14px/20px, wraps 2 lines, left-aligned), nav bar padding 8px 16px, logo link 107×39, hamburger 39×39 at right; drawer rows 50px; button grid p-3 gap-2 (179px cells, 41px tall), Get insured spans 2.
- 768: banner 36px centered (`md:text-body`), nav padding 8px 24px (`lg:px-6`? computed 24px at 768 → use `md:px-6`), hamburger still shown (xl:hidden).
