import Image from "next/image";
import { gradientFor } from "@/components/sites/corgi-insure-a0f7893c/shared/InitialsAvatar";
import Link from "next/link";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type {
  NavHighlightCard,
  NavMenu,
  NavMenuColumn,
  NavMenuItem,
} from "@/types/sites/corgi-insure-a0f7893c/home";

/**
 * Mega-dropdown panel for one desktop nav menu (corgi.insure header).
 *
 * Purely presentational and server-safe: the header renders one panel per
 * menu, positions it (`style.marginLeft` = trigger left) and toggles its
 * visibility by merging `className` onto the root. Hover styles only.
 */
export interface DesktopNavMenuProps {
  menu: NavMenu;
  /** `id` of the panel (referenced by the trigger's `aria-controls`). */
  id: string;
  /** `id` of the trigger element that labels this panel. */
  labelledBy: string;
  /** Merged onto the root `role="region"` element (e.g. open/closed state). */
  className?: string;
  /** Merged onto the root element (the header sets `marginLeft`). */
  style?: CSSProperties;
}

/**
 * Tailwind cannot generate arbitrary-value classes at runtime, so every
 * column-width triple used by the site is spelled out statically here.
 * The site leaves the variable unset (default 240px) for Company/Partners
 * and sets it explicitly for Small businesses — both render identically.
 */
const COLUMN_WIDTH_CLASSES: Record<string, string> = {
  "176-200-220":
    "[--dropdown-column-width:176px] 2xl:[--dropdown-column-width:200px] min-[1680px]:[--dropdown-column-width:220px]",
  "200-220-240":
    "[--dropdown-column-width:200px] 2xl:[--dropdown-column-width:220px] min-[1680px]:[--dropdown-column-width:240px]",
  "240-240-240": "[--dropdown-column-width:240px]",
};

/**
 * Returns the class string that sets `--dropdown-column-width` for a menu at
 * base / 2xl / min-[1680px]. Empty string when the triple is not one the site
 * uses (the component then falls back to an inline `base` value).
 */
export function MenuColumnWidthStyle(menu: NavMenu): string {
  const { base, xl2, w1680 } = menu.columnWidth;
  return COLUMN_WIDTH_CLASSES[`${base}-${xl2}-${w1680}`] ?? "";
}

const COLUMN_HEADER_CLASS = "text-[12px] uppercase tracking-[-0.18px] text-[#4a4a4a]";
const ITEM_ROW_CLASS = "flex items-center gap-2 rounded-lg p-2";
const HAIRLINE_V_CLASS =
  "pointer-events-none absolute top-1/2 flex h-[2400px] -translate-y-1/2 items-center justify-center";

function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}

/**
 * Vertical hairline at the left edge of every column after the first (one per
 * column boundary, expressed in column units so it tracks the CSS variable).
 * A 2-span column gets no line through its middle (site: `skipColumns`).
 */
function columnBoundaries(columns: NavMenuColumn[]): number[] {
  const boundaries: number[] = [];
  let units = 0;
  for (const column of columns) {
    units += column.span;
    boundaries.push(units);
  }
  return boundaries;
}

function Hairlines({ columns }: { columns: NavMenuColumn[] }) {
  return (
    <>
      <div aria-hidden className={cn(HAIRLINE_V_CLASS, "left-0")}>
        <div className="h-full w-[1px] bg-[#e1e1e1]" />
      </div>
      <div aria-hidden className={cn(HAIRLINE_V_CLASS, "right-0")}>
        <div className="h-full w-[1px] bg-[#e1e1e1]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute top-[30px] left-1/2 h-[1px] w-[2400px] -translate-x-1/2 bg-[#e1e1e1]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[1px] w-[2400px] -translate-x-1/2 bg-[#e1e1e1]"
      />
      {columnBoundaries(columns).map((units) => (
        <div
          key={units}
          aria-hidden
          className={HAIRLINE_V_CLASS}
          style={{ left: `calc(var(--dropdown-column-width, 240px) * ${units})` }}
        >
          <div className="h-full w-[1px] bg-[#e1e1e1]" />
        </div>
      ))}
    </>
  );
}

function ItemContent({ item }: { item: NavMenuItem }) {
  return (
    <>
      <MaterialIcon name={item.icon} size={16} className="shrink-0 text-[#4a4a4a]" />
      <span className="flex-1 text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a]">{item.label}</span>
      {item.badge && (
        <span className="rounded-[4px] bg-[#ffdecc] px-2 py-1 text-[8px] font-medium text-[#ff5c00]">
          {item.badge}
        </span>
      )}
    </>
  );
}

function MenuItem({ item }: { item: NavMenuItem }) {
  if (!item.href) {
    return (
      <div className={ITEM_ROW_CLASS}>
        <ItemContent item={item} />
      </div>
    );
  }
  const external = isExternalHref(item.href);
  return (
    <Link
      href={item.href}
      className={cn(ITEM_ROW_CLASS, "transition-colors hover:bg-[#f6f6f6]")}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <ItemContent item={item} />
    </Link>
  );
}

function MenuColumn({ column }: { column: NavMenuColumn }) {
  const wide = column.span === 2;
  return (
    <div
      className={
        wide
          ? "flex w-[calc(var(--dropdown-column-width,240px)*2)] shrink-0 flex-col gap-2"
          : "flex w-[var(--dropdown-column-width,240px)] shrink-0 flex-col gap-2"
      }
    >
      <div className="pl-2">
        <span className={COLUMN_HEADER_CLASS}>{column.title}</span>
      </div>
      <div
        className={cn(
          column.grid ? "grid grid-cols-2 gap-2 p-2" : "flex flex-col gap-2 p-2",
          // Only the column with a pinned "View all" grows to the panel height.
          column.viewAll && !column.grid && "flex-1",
        )}
      >
        {column.items.map((item) => (
          <MenuItem key={item.label} item={item} />
        ))}
        {column.viewAll && (
          <div className="mt-auto">
            <Link
              href={column.viewAll.href}
              className="text-[14px] font-medium tracking-[-0.18px] text-[#ff5c00] hover:underline"
            >
              {column.viewAll.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function HighlightCardBody({ card }: { card: NavHighlightCard }) {
  return (
    <>
      {card.image ? (
        <Image
          alt={card.imageAlt}
          className={cn("absolute inset-0 h-full w-full object-cover", card.imagePositionClass)}
          fetchPriority="low"
          fill
          sizes="200px"
          src={card.image}
        />
      ) : (
        <div aria-hidden className="absolute inset-0 flex items-start justify-end p-3" style={gradientFor(card.title)}>
          <MaterialIcon name={card.icon ?? "trending_up"} size={40} className="text-white/90" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 from-[54%] via-white/[0.56] via-[70%] to-white/95 to-[85%]" />
      <span className="relative text-[12px] font-bold leading-[1.2] tracking-[-0.18px] text-[#191919] transition-colors group-hover:text-[#ff5c00]">
        {card.title}
      </span>
      <span className="relative text-[12px] leading-[1.2] tracking-[-0.18px] text-[#191919] transition-colors group-hover:text-[#ff5c00]">
        {card.description}
      </span>
    </>
  );
}

function Highlights({ cards }: { cards: NavHighlightCard[] }) {
  const [first, ...rest] = cards;
  if (!first) return null;
  return (
    <div className="flex w-[calc(var(--dropdown-column-width,240px)*2)] shrink-0 flex-col self-stretch">
      <div className="flex h-[30px] items-center pl-2">
        <span className={COLUMN_HEADER_CLASS}>Highlights</span>
      </div>
      <div className="flex min-h-[240px] flex-1 overflow-hidden rounded-[20px] border-[1px] border-[#e1e1e1]">
        <Link
          href={first.href}
          className="group relative flex flex-1 flex-col items-start justify-end gap-1 overflow-hidden border-r-[1px] border-[#e1e1e1] p-2"
        >
          <HighlightCardBody card={first} />
        </Link>
        {rest.length > 0 && (
          <div className="relative flex flex-1 overflow-hidden">
            {/* The site cross-fades these every 3.5s; with a single card the first is always shown. */}
            {rest.map((card, index) => (
              <Link
                key={card.href}
                href={card.href}
                className={cn(
                  "group absolute inset-0 flex flex-col items-start justify-end gap-1 overflow-hidden bg-white p-2 transition-opacity duration-500",
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
    </div>
  );
}

export function DesktopNavMenu({ menu, id, labelledBy, className, style }: DesktopNavMenuProps) {
  const widthClass = MenuColumnWidthStyle(menu);
  // Unknown width triple: at least honour the base value inline.
  const widthStyle = widthClass
    ? undefined
    : ({ "--dropdown-column-width": `${menu.columnWidth.base}px` } as CSSProperties);
  // Only the panel with a bottom-pinned "View all" stretches its columns.
  const stretch = menu.columns.some((column) => column.viewAll);

  return (
    <div
      role="region"
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "pointer-events-auto hidden w-fit overflow-clip border-b-[1px] border-r-[1px] border-l-[1px] border-[#e1e1e1] bg-[rgba(255,255,255,0.85)] px-4 py-6 backdrop-blur-[6px] xl:block 2xl:px-8 min-[1680px]:px-16",
        className,
      )}
      style={style}
    >
      <div>
        <div
          className={cn("relative flex", stretch ? "items-stretch" : "items-start", widthClass)}
          style={widthStyle}
        >
          <Hairlines columns={menu.columns} />
          {menu.columns.map((column) => (
            <MenuColumn key={column.title} column={column} />
          ))}
          <Highlights cards={menu.highlights} />
        </div>
      </div>
    </div>
  );
}
