import Link from "next/link";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { MaterialIconName, Policy, SpecializedCoverage } from "@/types/sites/corgi-insure-a0f7893c/home";
import { LINKS, POLICIES, SPECIALIZED_COVERAGES } from "./data";

/** Material Symbols glyph per product route; anything unknown falls back to a generic "paid" mark. */
const PRODUCT_ICONS: Record<string, MaterialIconName> = {
  "/term-loans": "payments",
  "/line-of-credit": "account_balance_wallet",
  "/sba-loans": "account_balance",
  "/equipment-financing": "precision_manufacturing",
  "/invoice-financing": "receipt_long",
  "/merchant-cash-advance": "point_of_sale",
  "/commercial-real-estate": "apartment",
  "/business-credit-card": "credit_card",
};

const ROW_CLASS =
  "group flex min-h-[72px] w-full items-center gap-4 px-4 py-3 transition-colors hover:bg-[#f6f6f6] active:bg-[#ededed]";

function IconBox({ name }: { name: MaterialIconName }) {
  return (
    <div className="flex size-14 shrink-0 items-center justify-center rounded-[8px] bg-[#dde4f6] text-[#1e3a8a]">
      <MaterialIcon name={name} size={28} />
    </div>
  );
}

function Chevron() {
  return <MaterialIcon name="chevron_right" size={22} className="shrink-0 text-[#5c5c5c] transition-colors group-hover:text-[#1e3a8a]" />;
}

/**
 * Phone-width replacement for the PolicyCard grid: one rounded white card listing every product as
 * a compact tappable row (56px navy-tint icon box, title, two-line description, chevron), followed
 * by a single "More specialty programs" row that stands in for the flickable specialty stack.
 * Rendered `md:hidden`; the card grid takes over from `md` up.
 */
export interface PolicyListMobileProps {
  policies?: Policy[];
  specialized?: SpecializedCoverage[];
  className?: string;
}

export function PolicyListMobile({ policies = POLICIES, specialized = SPECIALIZED_COVERAGES, className }: PolicyListMobileProps) {
  const preview = specialized.slice(0, 3).map((c) => c.title);
  const remaining = specialized.length - preview.length;
  const specialtyPreview = remaining > 0 ? `${preview.join(", ")} and ${remaining} more` : preview.join(", ");

  return (
    <ul className={`flex flex-col divide-y divide-[#e1e1e1] overflow-hidden rounded-[8px] border border-[#e1e1e1] bg-white ${className ?? ""}`.trim()}>
      {policies.map((policy) => (
        <li key={policy.href}>
          <Link href={policy.href} className={ROW_CLASS}>
            <IconBox name={PRODUCT_ICONS[policy.href] ?? "paid"} />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <h3 className="text-[16px] font-bold leading-[1.2] tracking-[-0.24px] text-[#191919]">{policy.title}</h3>
              <p className="line-clamp-2 text-[13px] leading-[1.35] tracking-[-0.13px] text-[#5c5c5c]">{policy.description}</p>
            </div>
            <Chevron />
          </Link>
        </li>
      ))}
      {specialized.length > 0 && (
        <li>
          <Link href={LINKS.loanTypes} className={ROW_CLASS}>
            <IconBox name="grid_view" />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <h3 className="text-[16px] font-bold leading-[1.2] tracking-[-0.24px] text-[#1e3a8a]">More specialty programs</h3>
              <p className="line-clamp-2 text-[13px] leading-[1.35] tracking-[-0.13px] text-[#5c5c5c]">{specialtyPreview}</p>
            </div>
            <Chevron />
          </Link>
        </li>
      )}
    </ul>
  );
}
