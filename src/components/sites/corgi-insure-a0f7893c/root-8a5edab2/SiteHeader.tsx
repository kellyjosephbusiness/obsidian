"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { ANNOUNCEMENT, LINKS, NAV_MENUS, NAV_PLAIN_LINKS, SHARED } from "./data";
import { DesktopNavMenu } from "./DesktopNavMenu";
import { MobileNavDrawer } from "./MobileNavDrawer";

const LOGO_SRC = `${SHARED}/images/corgi-logo-vector.svg`;
const DESKTOP_PANEL_ID = "desktop-nav-dropdown-panel";
const SCROLL_HIDE_THRESHOLD = 50;
const DESKTOP_QUERY = "(min-width: 1280px)";

const TRIGGER_BASE_CLASS =
  "flex h-[39px] cursor-pointer items-center gap-1 rounded-[12px] px-4 text-[14px] leading-[1.2] tracking-[-0.21px]";
const PLAIN_LINK_CLASS =
  "flex h-[39px] items-center whitespace-nowrap rounded-[12px] px-4 text-[14px] leading-[1.2] tracking-[-0.21px]";
const ACTIVE_TEXT_CLASS = "font-medium text-[#191919]";
const IDLE_TEXT_CLASS = "font-normal text-[#4a4a4a] hover:text-[#191919]";

/**
 * Hide-on-scroll-down / show-on-scroll-up (mirrors the site's `useScrollDirection(50, true)`):
 * always visible above the threshold; below it, scrolling down hides and scrolling up shows.
 */
function useHeaderVisible(onHide: () => void, threshold = SCROLL_HIDE_THRESHOLD): boolean {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const onHideRef = useRef(onHide);
  useEffect(() => {
    onHideRef.current = onHide;
  }, [onHide]);
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        if (y < threshold) {
          setVisible(true);
        } else if (y > lastY.current) {
          setVisible((current) => {
            if (current) onHideRef.current();
            return false;
          });
        } else if (y < lastY.current) {
          setVisible(true);
        }
        lastY.current = y;
      });
    };
    lastY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [threshold]);
  return visible;
}

/** Label with an invisible medium-weight twin so the trigger never shifts when it turns bold. */
function TriggerLabel({ children }: { children: ReactNode }) {
  return (
    <span className="relative">
      {children}
      <span className="invisible block h-0 font-medium" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

function AnnouncementBanner({ onDismiss }: { onDismiss: () => void }) {
  const [lead, amount, mid, valuation, tail, series] = ANNOUNCEMENT.parts;
  return (
    <Link
      href={ANNOUNCEMENT.href}
      prefetch={false}
      className="pointer-events-auto relative flex w-full items-center justify-start bg-[#ff5c00] py-2 pl-7 pr-12 text-left text-white hover:bg-[#FF7D33] md:justify-center md:px-4 md:text-center"
    >
      {/* The site's `md:text-body` never takes effect (computed 14px/20px at every width). */}
      <span className="text-sm">
        {lead}
        <span className="font-bold">{amount}</span>
        {mid}
        <span className="font-bold">{valuation}</span>
        {tail}
        <span className="whitespace-nowrap">{series}</span>
      </span>
      <button
        type="button"
        aria-label="Dismiss banner"
        className="absolute right-4 p-1 text-white/80 hover:text-white md:right-3"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          onDismiss();
        }}
      >
        <MaterialIcon name="close" size={16} />
      </button>
    </Link>
  );
}

interface UnderlineState {
  x: number;
  width: number;
  opacity: number;
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [panelLeft, setPanelLeft] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerGroup, setDrawerGroup] = useState<string | null>(null);
  const [underline, setUnderline] = useState<UnderlineState>({ x: 0, width: 0, opacity: 0 });

  // Route change closes everything (derived during render, no effect needed).
  const [seenPathname, setSeenPathname] = useState(pathname);
  if (seenPathname !== pathname) {
    setSeenPathname(pathname);
    setOpenMenu(null);
    setDrawerOpen(false);
    setDrawerGroup(null);
  }

  const headerRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef(new Map<string, HTMLElement>());
  const leaveTimer = useRef<number | null>(null);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setDrawerOpen(false);
    setDrawerGroup(null);
  }, []);
  // Scroll-hide closes everything (the site's `useScrollDirection(50, true)`).
  const visible = useHeaderVisible(closeAll);
  const drawerVisible = drawerOpen && visible;
  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setDrawerGroup(null);
  }, []);
  const closeDesktop = useCallback(() => setOpenMenu(null), []);

  const clearLeaveTimer = useCallback(() => {
    if (leaveTimer.current !== null) {
      window.clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  }, []);

  /** Every panel opens at the first trigger's left edge (175px at 1440), like the site. */
  const measurePanelLeft = useCallback(() => {
    const first = triggerRefs.current.get(NAV_MENUS[0]?.id ?? "");
    const header = headerRef.current;
    if (first && header) {
      setPanelLeft(first.getBoundingClientRect().left - header.getBoundingClientRect().left);
    }
  }, []);

  const underlineFor = useCallback((id: string): UnderlineState | null => {
    const trigger = triggerRefs.current.get(id);
    const bar = barRef.current;
    if (!trigger || !bar) return null;
    const rect = trigger.getBoundingClientRect();
    return { x: rect.left - bar.getBoundingClientRect().left, width: rect.width, opacity: 1 };
  }, []);

  const openDesktopMenu = useCallback(
    (id: string) => {
      clearLeaveTimer();
      measurePanelLeft();
      const next = underlineFor(id);
      if (next) setUnderline(next);
      setOpenMenu(id);
    },
    [clearLeaveTimer, measurePanelLeft, underlineFor],
  );

  const focusFirstPanelItem = useCallback(() => {
    window.requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>("a[href], button:not([disabled])")?.focus();
    });
  }, []);

  const onTriggerKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>, id: string, isButton = false) => {
      if (event.key === "ArrowDown" || (isButton && (event.key === "Enter" || event.key === " "))) {
        event.preventDefault();
        openDesktopMenu(id);
        focusFirstPanelItem();
      }
    },
    [focusFirstPanelItem, openDesktopMenu],
  );

  /** In-page hash links: navigate without the browser jump, then ease the target into the upper third. */
  const navigateToHash = useCallback(
    (href: string) => {
      const [, hash] = href.split("#");
      router.push(href, { scroll: false });
      closeAll();
      window.setTimeout(() => {
        const target = hash ? document.getElementById(hash) : null;
        if (!target) return;
        const top = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top - window.innerHeight / 3, behavior: "smooth" });
      }, 300);
    },
    [closeAll, router],
  );

  const setTriggerRef = useCallback(
    (id: string) => (node: HTMLElement | null) => {
      if (node) triggerRefs.current.set(id, node);
      else triggerRefs.current.delete(id);
    },
    [],
  );

  /* ---- Active underline follows the pointer across the desktop nav ---- */
  const onNavMouseMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const bar = barRef.current;
    if (!bar) return;
    const barRect = bar.getBoundingClientRect();
    const x = event.clientX;
    for (const trigger of triggerRefs.current.values()) {
      const rect = trigger.getBoundingClientRect();
      if (x >= rect.left && x <= rect.right) {
        setUnderline({ x: rect.left - barRect.left, width: rect.width, opacity: 1 });
        return;
      }
    }
    setUnderline({ x: x - barRect.left - 10, width: 20, opacity: 0.4 });
  }, []);
  const onNavMouseLeave = useCallback(() => {
    // While a menu is open the line stays under its trigger; otherwise it fades out.
    const pinned = openMenu ? underlineFor(openMenu) : null;
    setUnderline((state) => pinned ?? { ...state, opacity: 0 });
  }, [openMenu, underlineFor]);

  /* ---- Close rules ---- */
  // Pointer-down outside the header closes the desktop menu.
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);
  // Escape closes the open desktop menu (refocusing its trigger) or the drawer.
  useEffect(() => {
    if (!openMenu && !drawerOpen) return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      if (openMenu) {
        triggerRefs.current.get(openMenu)?.focus();
        setOpenMenu(null);
      }
      if (drawerOpen) closeDrawer();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openMenu, drawerOpen, closeDrawer]);
  // Keep the panel aligned while a menu is open and the window resizes.
  useEffect(() => {
    if (!openMenu) return;
    measurePanelLeft();
    window.addEventListener("resize", measurePanelLeft);
    return () => window.removeEventListener("resize", measurePanelLeft);
  }, [openMenu, measurePanelLeft]);
  // Crossing into the desktop layout closes the drawer; crossing out closes the mega menu.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeDrawer();
      else setOpenMenu(null);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [closeDrawer]);
  useEffect(() => clearLeaveTimer, [clearLeaveTimer]);

  /* ---- Body scroll lock while the drawer is open ---- */
  useEffect(() => {
    if (!drawerVisible) return;
    const html = document.documentElement;
    const body = document.body;
    const previous = { html: html.style.overflow, body: body.style.overflow };
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    html.setAttribute("data-mobile-menu-open", "true");
    return () => {
      html.style.overflow = previous.html;
      body.style.overflow = previous.body;
      html.removeAttribute("data-mobile-menu-open");
    };
  }, [drawerVisible]);

  /* ---- --navbar-height / --navbar-offset (bar bottom edge) on <html> ---- */
  const syncNavbarHeight = useCallback(() => {
    const bar = barRef.current;
    if (!bar) return;
    const bottom = bar.offsetTop + bar.offsetHeight;
    const root = document.documentElement.style;
    root.setProperty("--navbar-height", `${visible ? bottom : 0}px`);
    root.setProperty("--navbar-offset", `${bottom}px`);
  }, [visible]);
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    syncNavbarHeight();
    const observer = new ResizeObserver(syncNavbarHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, [syncNavbarHeight]);

  /* ---- Header-level hover / focus management for the desktop menus ---- */
  const onHeaderMouseLeave = useCallback(() => {
    // Like the site: a menu opened from the keyboard survives the pointer leaving.
    if (headerRef.current?.contains(document.activeElement)) return;
    clearLeaveTimer();
    leaveTimer.current = window.setTimeout(() => {
      leaveTimer.current = null;
      setOpenMenu(null);
    }, 100);
  }, [clearLeaveTimer]);
  const onHeaderMouseEnter = useCallback(() => clearLeaveTimer(), [clearLeaveTimer]);
  const onHeaderBlurCapture = useCallback((event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenMenu(null);
  }, []);

  const currentMenu = NAV_MENUS.find((menu) => menu.id === openMenu) ?? null;
  const headerStyle: CSSProperties = { translate: visible ? "0 0" : "0 -150%" };

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed top-0 right-0 left-0 z-50 transform-gpu will-change-transform transition-transform duration-300"
      style={headerStyle}
      onMouseEnter={onHeaderMouseEnter}
      onMouseLeave={onHeaderMouseLeave}
      onBlurCapture={onHeaderBlurCapture}
    >
      {!bannerDismissed && <AnnouncementBanner onDismiss={() => setBannerDismissed(true)} />}

      {/* Nav bar */}
      <div
        ref={barRef}
        className="pointer-events-auto relative z-10 border-b-[1px] border-[#e1e1e1] bg-[rgba(255,255,255,0.85)] px-4 py-2 backdrop-blur-[6px] lg:px-6 xl:px-16"
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between">
          <div className="flex min-w-0 items-center">
            <Link href="/" prefetch={false} className="flex h-[39px] shrink-0 items-center px-3 xl:pr-4">
              <Image
                alt="Corgi"
                src={LOGO_SRC}
                width={83}
                height={24}
                priority
                className="h-6 w-auto shrink-0 -translate-y-0.5"
              />
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden items-center xl:flex"
              onMouseMove={onNavMouseMove}
              onMouseLeave={onNavMouseLeave}
            >
              {NAV_MENUS.map((menu) => {
                const isOpen = openMenu === menu.id;
                const className = cn(TRIGGER_BASE_CLASS, isOpen ? ACTIVE_TEXT_CLASS : IDLE_TEXT_CLASS);
                const chevron = (
                  <MaterialIcon
                    name="keyboard_arrow_down"
                    size={16}
                    weight={isOpen ? 500 : 400}
                    className={cn("transition-transform duration-200", isOpen && "rotate-180")}
                  />
                );
                const shared = {
                  id: `desktop-nav-trigger-${menu.id}`,
                  "aria-controls": DESKTOP_PANEL_ID,
                  "aria-expanded": isOpen,
                  "data-nav-root": menu.id,
                  "data-open": isOpen,
                  className,
                  onFocus: () => openDesktopMenu(menu.id),
                  onMouseEnter: () => openDesktopMenu(menu.id),
                } as const;
                return menu.href ? (
                  <Link
                    key={menu.id}
                    ref={setTriggerRef(menu.id)}
                    href={menu.href}
                    onKeyDown={(event) => onTriggerKeyDown(event, menu.id)}
                    {...shared}
                  >
                    <TriggerLabel>{menu.label}</TriggerLabel>
                    {chevron}
                  </Link>
                ) : (
                  <button
                    key={menu.id}
                    ref={setTriggerRef(menu.id)}
                    type="button"
                    onClick={() => openDesktopMenu(menu.id)}
                    onKeyDown={(event) => onTriggerKeyDown(event, menu.id, true)}
                    {...shared}
                  >
                    <TriggerLabel>{menu.label}</TriggerLabel>
                    {chevron}
                  </button>
                );
              })}
              {NAV_PLAIN_LINKS.map((link) => (
                <Link
                  key={link.href}
                  ref={setTriggerRef(`plain-${link.href}`)}
                  href={link.href}
                  className={cn(PLAIN_LINK_CLASS, pathname === link.href ? ACTIVE_TEXT_CLASS : IDLE_TEXT_CLASS)}
                  onMouseEnter={closeDesktop}
                >
                  <TriggerLabel>{link.label}</TriggerLabel>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <nav aria-label="Account actions" className="hidden h-[39px] items-center gap-2 xl:flex">
              <a
                href={LINKS.login}
                className="hidden h-full items-center whitespace-nowrap rounded-[12px] px-4 text-[14px] font-normal leading-[1.2] tracking-[-0.21px] text-[#4a4a4a] hover:text-[#191919] xl:flex"
              >
                Log in
              </a>
              <PressableButton
                faceClassName="h-[35px] min-w-[96px] whitespace-nowrap px-2 py-0 text-[16px] leading-[1.2] tracking-[-0.21px] md:min-w-[112px] md:px-4"
                href={LINKS.bookDemo}
                size="small"
                variant="black"
              >
                Book a demo
              </PressableButton>
              <PressableButton
                faceClassName="h-[35px] min-w-[100px] px-3 py-0 text-[16px] leading-[1.2] tracking-[-0.21px] md:min-w-[119px] md:px-4"
                href={LINKS.signUp}
                size="small"
                variant="orange"
              >
                Get insured
              </PressableButton>
            </nav>

            {/* Hamburger (<xl) with the menu/close icon crossfade */}
            <div className="flex size-[39px] items-center justify-center xl:hidden">
              <motion.button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={drawerOpen}
                aria-controls="mobile-navigation-drawer"
                data-open={drawerOpen}
                className={cn(
                  "flex size-[39px] cursor-pointer items-center justify-center p-0 leading-none duration-200 hover:text-[#FF5C00]",
                  drawerOpen ? "text-[#ff5c00]" : "text-[#1d1d1d]",
                )}
                onClick={() => setDrawerOpen((state) => !state)}
                whileTap={{ scale: 0.96 }}
              >
                <span
                  aria-hidden="true"
                  className="mobile-menu-icon-swap relative grid size-6 items-center [grid-template-columns:24px] [grid-template-rows:24px]"
                  data-state={drawerOpen ? "close" : "menu"}
                >
                  <MenuSwapIcon name="menu" active={!drawerOpen} />
                  <MenuSwapIcon name="close" active={drawerOpen} />
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Active underline (desktop) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-0 hidden h-[1px] bg-[#191919] xl:block"
          style={{ left: 0 }}
          initial={false}
          animate={{ x: underline.x, width: underline.width, opacity: underline.opacity }}
          transition={{ type: "spring", stiffness: 400, damping: 40, mass: 0.8, opacity: { duration: 0.15 } }}
        />
      </div>

      {/* Desktop mega menu (xl+) */}
      <AnimatePresence>
        {currentMenu && (
          <motion.div
            key="desktop-panel"
            ref={panelRef}
            className="hidden w-fit xl:block"
            style={{ marginLeft: panelLeft }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={currentMenu.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.12 }}
              >
                <DesktopNavMenu
                  menu={currentMenu}
                  id={DESKTOP_PANEL_ID}
                  labelledBy={`desktop-nav-trigger-${currentMenu.id}`}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static, hidden copies of every panel (kept in the DOM like the site, for crawlers). */}
      <div className="hidden">
        {NAV_MENUS.map((menu) => (
          <div key={menu.id} data-nav-panel={menu.id} aria-hidden="true" inert>
            <DesktopNavMenu
              menu={menu}
              id={`desktop-nav-panel-static-${menu.id}`}
              labelledBy={`desktop-nav-trigger-${menu.id}`}
            />
          </div>
        ))}
      </div>

      {/* Mobile / tablet drawer (<xl) */}
      <div id="mobile-navigation-drawer">
        <MobileNavDrawer
          open={drawerVisible}
          group={drawerGroup}
          onToggleGroup={(id) => setDrawerGroup((current) => (current === id ? null : id))}
          onClose={closeDrawer}
          onHashNavigate={navigateToHash}
        />
      </div>
    </header>
  );
}

/**
 * One layer of the hamburger crossfade: both glyphs share grid cell 1/1; the
 * inactive one is faded, blurred 2px and scaled to 25% (167ms ease-in-out).
 */
function MenuSwapIcon({ name, active }: { name: "menu" | "close"; active: boolean }) {
  return (
    <span
      data-icon={name}
      className="col-start-1 row-start-1 flex size-6 will-change-[opacity,filter,transform]"
      style={{
        opacity: active ? 1 : 0,
        filter: active ? "blur(0px)" : "blur(2px)",
        transform: active ? "scale(1)" : "scale(0.25)",
        transition: "opacity 167ms ease-in-out, filter 167ms ease-in-out, transform 167ms ease-in-out",
      }}
    >
      <MaterialIcon name={name} size={24} />
    </span>
  );
}
