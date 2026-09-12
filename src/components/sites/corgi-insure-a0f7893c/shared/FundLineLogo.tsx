import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/** FundLine Capital mark: an orange rounded tile with a rising "fund line". */
export function FundLineMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="12" fill="#FF5C00" />
      <path d="M10 33.5 19 25l7 6.5 12-14" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 17.5h8v8" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Horizontal wordmark used in the header: mark + "FundLine Capital" (24px tall like the original logo). */
export function FundLineLogo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2 whitespace-nowrap", className)} aria-label="FundLine Capital">
      <FundLineMark className="h-6 w-6 shrink-0" />
      <span className={cn("font-mono text-[19px] font-medium leading-none tracking-[-0.03em]", dark ? "text-white" : "text-[#191919]")}>
        FundLine <span className="text-[#ff5c00]">Capital</span>
      </span>
    </span>
  );
}

/** Stacked wordmark used in the footer link grid (replaces the corgi-dog badge). */
export function FundLineBadge({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)} aria-label="FundLine Capital">
      <FundLineMark className="h-[96px] w-[96px]" />
      <span className="font-mono text-[28px] font-medium leading-none tracking-[-0.03em] text-[#ff5c00]">FundLine</span>
    </div>
  );
}
