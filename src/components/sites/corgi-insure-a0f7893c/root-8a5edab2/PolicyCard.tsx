import Image from "next/image";
import Link from "next/link";
import type { Policy } from "@/types/sites/corgi-insure-a0f7893c/home";
import { POLICIES_HEADER } from "./data";

/**
 * One loan-product card: a fixed 240px header with the product illustration (object-contain, so all
 * eight cards align) and a navy-tint speed label ("Same day", "1 to 3 days"…), the title/description
 * block, and a white "Learn more" pressable. The pressable's base is `data-press-trigger="group"` so
 * it drops while the whole link is :active (see `.group:active .pressable-button[data-press-trigger="group"]`
 * in globals.css).
 */
export function PolicyCard({ policy }: { policy: Policy }) {
  const learnMoreLabel = `${POLICIES_HEADER.learnMore} about ${policy.title}`;

  return (
    <div className="flex flex-col overflow-hidden rounded-[8px] border border-[#e1e1e1] bg-white">
      <div className="relative flex h-[240px] items-start border-b border-[#e1e1e1] bg-white p-3">
        <Image alt={policy.title} className="pointer-events-none object-contain p-6" fill sizes="384px" src={policy.image} />
        <div className="relative z-10 flex items-center justify-center rounded-[4px] bg-[#DDEAFE] px-3 py-1.5">
          <span className="text-[12px] font-medium leading-[1.2] tracking-[-0.18px] text-[#0160CC]">{policy.speed}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 border-b border-[#e1e1e1] p-5">
        <h3 className="text-[20px] font-bold leading-none tracking-[-0.64px] text-[#191919]">{policy.title}</h3>
        <p className="text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a]">{policy.description}</p>
      </div>
      <div className="p-3">
        <Link href={policy.href} aria-label={learnMoreLabel} className="group block">
          <span className="sr-only">{learnMoreLabel}</span>
          <div
            className="pressable-button pressable-smooth-corner bg-[#e1e1e1]"
            style={{ ["--pressable-depth" as string]: "4px" }}
            data-press-trigger="group"
          >
            <div className="pressable-smooth-corner flex items-center justify-center border border-[#e1e1e1] bg-white px-4 py-2 btn-text-small text-[#191919] hover:bg-gray-50 active:bg-[#ededed]">
              {POLICIES_HEADER.learnMore}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
