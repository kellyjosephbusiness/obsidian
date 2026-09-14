import Image from "next/image";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { cn } from "@/lib/utils";

/**
 * Icon names that have a hand-made 1-bit stipple illustration in
 * `public/sites/corgi-insure-a0f7893c/shared/art/glyph/`. Anything outside this set
 * falls back to the Material Symbols glyph so a new icon never breaks a page.
 */
const GLYPHS = new Set([
  "account_balance",
  "account_balance_wallet",
  "apartment",
  "article",
  "bolt",
  "calculate",
  "campaign",
  "checklist",
  "cloud",
  "compare_arrows",
  "construction",
  "credit_card",
  "credit_score",
  "description",
  "factory",
  "flag",
  "handshake",
  "local_shipping",
  "lock",
  "medical_services",
  "menu_book",
  "payments",
  "point_of_sale",
  "precision_manufacturing",
  "receipt_long",
  "restaurant",
  "rocket_launch",
  "savings",
  "schedule",
  "shopping_cart",
  "smart_toy",
  "storefront",
  "sync",
  "trending_up",
  "verified_user",
  "waves",
  "work",
]);

const BASE = "/sites/corgi-insure-a0f7893c/shared/art/glyph";

/** True when `name` has a stipple illustration (so callers can size their box accordingly). */
export function hasGlyph(name: string): boolean {
  return GLYPHS.has(name);
}

interface StippleGlyphProps {
  /** Material Symbols name, used both as the art key and as the fallback glyph. */
  name: string;
  /** Rendered box size in px. */
  size?: number;
  className?: string;
  /** Sizes hint passed to next/image. */
  sizes?: string;
}

/**
 * A feature/benefit icon drawn in the site's stipple-dither illustration style, matching the
 * product artwork. Falls back to the Material Symbols icon for names without a drawing.
 */
export function StippleGlyph({ name, size = 72, className, sizes }: StippleGlyphProps) {
  if (!hasGlyph(name)) {
    return <MaterialIcon name={name} size={Math.round(size * 0.55)} className={className} />;
  }
  return (
    <span aria-hidden className={cn("relative block shrink-0", className)} style={{ width: size, height: size }}>
      <Image
        alt=""
        src={`${BASE}/${name}.png`}
        fill
        sizes={sizes ?? `${size}px`}
        className="object-contain"
      />
    </span>
  );
}
