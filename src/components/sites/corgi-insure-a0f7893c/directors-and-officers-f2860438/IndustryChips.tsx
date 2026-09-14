import Link from "next/link";
import { INDUSTRIES } from "./data";

/** Closing row of industry pills (site: "Industries That Especially Need …"). */
export function IndustryChips() {
  return (
    <section aria-labelledby="industries-for-term-loans" className="px-4 py-16 md:px-6 lg:px-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6">
        <h2 id="industries-for-term-loans" className="text-center font-mono font-medium text-[24px] leading-tight tracking-[-0.02em] text-[#191919] md:text-[28px]">
          {INDUSTRIES.heading}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {INDUSTRIES.pills.map((pill) => (
            <Link
              key={pill.href}
              href={pill.href}
              className="group inline-flex items-center gap-2 rounded-[4px] border border-[#e1e1e1] bg-white px-4 py-2 font-medium text-[14px] leading-[21px] tracking-[-0.21px] text-[#191919] transition-colors hover:border-[#0376FD] hover:text-[#0160CC]"
            >
              {pill.label}
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
