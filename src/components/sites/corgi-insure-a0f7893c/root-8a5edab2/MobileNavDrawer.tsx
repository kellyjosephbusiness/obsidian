"use client";

import Image from "next/image";
import { gradientFor } from "@/components/sites/corgi-insure-a0f7893c/shared/InitialsAvatar";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type {
  NavHighlightCard,
  NavMenu,
  NavMenuColumn,
  NavMenuItem,
} from "@/types/sites/corgi-insure-a0f7893c/home";
import { NAV_ACTIONS, NAV_MENUS, NAV_PLAIN_LINKS } from "./data";
import type { HeaderActions } from "./SiteHeader";

/**
 * Mobile / tablet (<xl) navigation drawer of the corgi.insure header: a
 * slide-down `<nav>` clipped by an `overflow-hidden` wrapper, five
 * single-open accordion groups, the plain "Customers" link and the
 * Log in / Book a demo / Get insured button grid.
 */
export interface MobileNavDrawerProps {
  /** Drawer is open (and the header is shown). */
  open: boolean;
  /** `id` of the expanded accordion group, if any. */
  group: string | null;
  onToggleGroup: (id: string) => void;
  /** Closes the drawer (link clicks). */
  onClose: () => void;
  /** Account action (Apply now). */
  actions?: HeaderActions;
  /** In-page hash links navigate through this (closes the drawer first). */
  onHashNavigate: (href: string) => void;
}

const ROW_CLASS =
  "flex w-full items-center border-b-[1px] border-[#e1e1e1] bg-[rgba(255,255,255,0.85)] px-4 py-4 md:px-6 text-[14px] leading-[1.2] tracking-[-0.21px] backdrop-blur-[6px]";
const HAIRLINE_TOP_CLASS =
  "pointer-events-none absolute top-0 left-1/2 h-[1px] w-[200vw] -translate-x-1/2 bg-[#e1e1e1]";
const HAIRLINE_BOTTOM_CLASS =
  "pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-[200vw] -translate-x-1/2 bg-[#e1e1e1]";
const COLUMN_HEADER_CLASS = "text-[12px] uppercase tracking-[-0.18px] text-[#4a4a4a]";

const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;
/** The site pins these two faces to 16px at every width (`btn-text-small` is 14px below md). */
const FACE_16PX_STYLE = { fontSize: 16, lineHeight: 1.2, letterSpacing: "-0.21px" } as const;

function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}

function ColumnHeader({ title, hideTopLine }: { title: string; hideTopLine?: boolean }) {
  return (
    <div className="relative flex items-center px-2 pt-2">
      <span className={COLUMN_HEADER_CLASS}>{title}</span>
      {!hideTopLine && <div aria-hidden className={HAIRLINE_TOP_CLASS} />}
    </div>
  );
}

function ItemContent({ item }: { item: NavMenuItem }) {
  return (
    <>
      <MaterialIcon name={item.icon} size={16} className="shrink-0 text-[#4a4a4a]" />
      <span className="flex-1 text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a]">{item.label}</span>
      {item.badge && (
        <span className="rounded-[4px] bg-[#dde4f6] px-2 py-1 text-[12px] font-medium leading-none text-[#1e3a8a]">
          {item.badge}
        </span>
      )}
    </>
  );
}

function MobileMenuItem({
  item,
  onClose,
  onHashNavigate,
}: {
  item: NavMenuItem;
  onClose: () => void;
  onHashNavigate: (href: string) => void;
}) {
  if (!item.href) {
    return (
      <div className="flex min-h-[44px] items-center gap-2 p-2 text-[#4a4a4a]">
        <ItemContent item={item} />
      </div>
    );
  }
  if (item.href.includes("#")) {
    return (
      <button
        type="button"
        className="flex min-h-[44px] w-full items-center gap-2 rounded-[8px] p-2 text-left transition-colors hover:bg-[#f6f6f6]"
        onClick={() => onHashNavigate(item.href as string)}
      >
        <ItemContent item={item} />
      </button>
    );
  }
  const external = isExternalHref(item.href);
  return (
    <Link
      href={item.href}
      className="flex min-h-[44px] items-center gap-2 rounded-[8px] p-2 transition-colors hover:bg-[#f6f6f6]"
      onClick={onClose}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <ItemContent item={item} />
    </Link>
  );
}

/** One column of a group: header row + single-column list (grid columns collapse to a list on mobile). */
function MobileColumn({
  column,
  hideTopLine,
  onClose,
  onHashNavigate,
}: {
  column: NavMenuColumn;
  hideTopLine?: boolean;
  onClose: () => void;
  onHashNavigate: (href: string) => void;
}) {
  return (
    <div className="relative flex flex-1 flex-col gap-2">
      <ColumnHeader title={column.title} hideTopLine={hideTopLine} />
      <div className={cn("relative flex flex-col gap-2 p-2", column.viewAll && "flex-1")}>
        {column.items.map((item) => (
          <MobileMenuItem key={item.label} item={item} onClose={onClose} onHashNavigate={onHashNavigate} />
        ))}
        {column.viewAll && (
          <div className="mt-auto">
            <Link
              href={column.viewAll.href}
              onClick={onClose}
              className="inline-flex min-h-[44px] items-center text-[14px] font-medium leading-[1.2] tracking-[-0.21px] text-[#1e3a8a] hover:underline"
            >
              {column.viewAll.label}
            </Link>
          </div>
        )}
        <div aria-hidden className={HAIRLINE_TOP_CLASS} />
      </div>
    </div>
  );
}

function HighlightCardBody({ card }: { card: NavHighlightCard }) {
  return (
    <>
      {card.image ? (
        <>
          {/* Nav art is a transparent 1-bit stipple drawing, so it sits on a navy tint plate, contained not cropped. */}
          <div aria-hidden className="absolute inset-0 bg-[#dde4f6]" />
          <Image
            alt={card.imageAlt}
            className={cn("absolute inset-0 h-full w-full object-cover", card.imagePositionClass)}
            fetchPriority="low"
            fill
            sizes="(min-width: 768px) 360px, 190px"
            src={card.image}
          />
        </>
      ) : (
        <div aria-hidden className="absolute inset-0 flex items-start justify-end p-3" style={gradientFor(card.title)}>
          <MaterialIcon name={card.icon ?? "trending_up"} size={40} className="text-white/90" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 from-[28%] via-white/[0.55] via-[46%] to-white/90 to-[64%]" />
      <span className="relative text-[12px] font-bold leading-[1.2] tracking-[-0.18px] text-[#191919] transition-colors group-hover:text-[#1e3a8a]">
        {card.title}
      </span>
      <span className="relative text-[12px] leading-[1.2] tracking-[-0.18px] text-[#191919] transition-colors group-hover:text-[#1e3a8a]">
        {card.description}
      </span>
    </>
  );
}

function MobileHighlights({ cards, onClose }: { cards: NavHighlightCard[]; onClose: () => void }) {
  const [first, ...rest] = cards;
  if (!first) return null;
  return (
    <div className="relative flex flex-col gap-2">
      <ColumnHeader title="Highlights" />
      <div className="relative flex h-[120px] md:h-[160px]">
        <div aria-hidden className={HAIRLINE_TOP_CLASS} />
        <div className="flex flex-1 overflow-hidden rounded-[8px] border-[1px] border-[#e1e1e1]">
          <Link
            href={first.href}
            onClick={onClose}
            className="group relative flex flex-1 flex-col items-start justify-end gap-0.5 overflow-hidden border-r-[1px] border-[#e1e1e1] p-2"
          >
            <HighlightCardBody card={first} />
          </Link>
          {rest.length > 0 && (
            <div className="relative flex flex-1 overflow-hidden bg-white">
              {/* The site cross-fades these every 3.5s; with a single card the first is always shown. */}
              {rest.map((card, index) => (
                <Link
                  key={card.href}
                  href={card.href}
                  onClick={onClose}
                  className={cn(
                    "group absolute inset-0 flex flex-col items-start justify-end gap-0.5 overflow-hidden bg-white p-2 transition-opacity duration-500",
                    index === 0 ? "opacity-100" : "pointer-events-none opacity-0",
                  )}
                  {...(index === 0 ? {} : { tabIndex: -1, "aria-hidden": true })}
                >
                  <HighlightCardBody card={card} />
                </Link>
              ))}
            </div>
          )}
        </div>
        <div aria-hidden className={HAIRLINE_BOTTOM_CLASS} />
      </div>
    </div>
  );
}

/** Columns are paired two-per-row; a trailing odd column spans the full width. */
function chunkColumns(columns: NavMenuColumn[]): NavMenuColumn[][] {
  const rows: NavMenuColumn[][] = [];
  for (let index = 0; index < columns.length; index += 2) {
    rows.push(columns.slice(index, index + 2));
  }
  return rows;
}

/** Expanded content of one accordion group (`dom/mobile/00-header-menu-group-open.tree.txt`). */
function MobileMenuGroup({
  menu,
  onClose,
  onHashNavigate,
}: {
  menu: NavMenu;
  onClose: () => void;
  onHashNavigate: (href: string) => void;
}) {
  return (
    <div className="relative flex flex-col">
      <div aria-hidden className="pointer-events-none absolute top-0 left-0 h-[2400px] w-[1px] bg-[#e1e1e1]" />
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 h-[2400px] w-[1px] bg-[#e1e1e1]" />
      {chunkColumns(menu.columns).map((row, rowIndex) => {
        const hideTopLine = rowIndex === 0;
        if (row.length === 1) {
          return (
            <MobileColumn
              key={row[0].title}
              column={row[0]}
              hideTopLine={hideTopLine}
              onClose={onClose}
              onHashNavigate={onHashNavigate}
            />
          );
        }
        return (
          <div key={row[0].title} className="relative flex">
            <MobileColumn column={row[0]} hideTopLine={hideTopLine} onClose={onClose} onHashNavigate={onHashNavigate} />
            <div aria-hidden className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#e1e1e1]" />
            <MobileColumn column={row[1]} hideTopLine={hideTopLine} onClose={onClose} onHashNavigate={onHashNavigate} />
          </div>
        );
      })}
      <MobileHighlights cards={menu.highlights} onClose={onClose} />
    </div>
  );
}

export function MobileNavDrawer({ open, group, onToggleGroup, onClose, onHashNavigate, actions = NAV_ACTIONS }: MobileNavDrawerProps) {
  return (
    <div className="overflow-hidden xl:hidden" data-mobile-menu-clip="true">
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile navigation"
            className="pointer-events-auto relative z-0 flex max-h-[calc(100dvh-var(--navbar-height))] flex-col overflow-y-auto overscroll-contain xl:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.28, ease: EASE_STANDARD } }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
          >
            {NAV_MENUS.map((menu) => {
              const expanded = group === menu.id;
              return (
                <div key={menu.id}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`mobile-nav-group-${menu.id}`}
                    data-open={expanded}
                    className={cn(
                      ROW_CLASS,
                      "justify-between",
                      expanded ? "font-medium text-[#191919]" : "font-normal text-[#4a4a4a]",
                    )}
                    onClick={() => onToggleGroup(menu.id)}
                  >
                    {menu.label}
                    <MaterialIcon
                      name="keyboard_arrow_down"
                      size={16}
                      className={cn("shrink-0 transition-transform duration-200", expanded && "rotate-180")}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        id={`mobile-nav-group-${menu.id}`}
                        className="relative overflow-hidden border-b-[1px] border-[#e1e1e1] bg-[rgba(255,255,255,0.85)] backdrop-blur-[6px]"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: EASE_STANDARD }}
                      >
                        <motion.div
                          className="relative px-4 pb-4 md:px-6"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2, delay: 0.06, ease: "easeOut" }}
                        >
                          <MobileMenuGroup menu={menu} onClose={onClose} onHashNavigate={onHashNavigate} />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            {NAV_PLAIN_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(ROW_CLASS, "font-normal text-[#4a4a4a]")}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="grid grid-cols-1 gap-2 border-b-[1px] border-[#e1e1e1] bg-[rgba(255,255,255,0.85)] p-3 backdrop-blur-[6px] md:p-4"
              data-mobile-account-actions="true"
            >
              <PressableButton
                className="col-span-2"
                faceClassName="w-full text-[16px] leading-[1.2] tracking-[-0.21px]"
                faceStyle={FACE_16PX_STYLE}
                href={actions.primary.href}
                size="small"
                variant="primary"
              >
                {actions.primary.label}
              </PressableButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
