import Link from "next/link";
import type { ComparisonRow } from "@/types/sites/corgi-insure-a0f7893c/products";
import { H2_CLASS, Hairlines, Rails } from "../directors-and-officers-f2860438/rails";
import { COMPARISON_HEADER, COMPARISON_ROWS } from "./data";

/** The eight core products side by side. The table scrolls inside its card below 900px. */
export function ComparisonTable({ rows = COMPARISON_ROWS }: { rows?: ComparisonRow[] } = {}) {
  return (
    <section id="compare" className="relative scroll-mt-[120px] border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col gap-6 px-4 md:px-6">
          <h2 className={H2_CLASS}>{COMPARISON_HEADER.heading}</h2>
          <p className="text-body-large text-[#4a4a4a]">{COMPARISON_HEADER.sub}</p>
        </div>
        <div className="relative">
          <Hairlines zIndex="z-0" />
          <div className="relative z-10 overflow-hidden rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#f6f6f6]">
                    {COMPARISON_HEADER.columns.map((col, i) => (
                      <th
                        key={col}
                        scope="col"
                        className={`px-5 py-3 text-[12px] font-medium leading-[1.2] tracking-[-0.18px] text-[#4a4a4a] ${i === 0 ? "w-[220px]" : ""}`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.product} className="border-t border-[#e1e1e1] align-top">
                      <th scope="row" className="px-5 py-4 text-[14px] font-medium leading-[1.25] tracking-[-0.21px] text-[#191919]">
                        <Link href={row.anchor} className="hover:text-[#1e3a8a] hover:underline">
                          {row.product}
                        </Link>
                      </th>
                      <td className="px-5 py-4 text-[14px] leading-[1.25] tracking-[-0.21px] text-[#4a4a4a]">{row.amount}</td>
                      <td className="px-5 py-4 text-[14px] leading-[1.25] tracking-[-0.21px] text-[#4a4a4a]">{row.term}</td>
                      <td className="px-5 py-4 text-[14px] leading-[1.25] tracking-[-0.21px] text-[#4a4a4a]">{row.speed}</td>
                      <td className="px-5 py-4 text-[14px] leading-[1.25] tracking-[-0.21px] text-[#4a4a4a]">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="px-4 text-[12px] leading-[1.3] tracking-[-0.18px] text-[#4a4a4a] md:px-6">{COMPARISON_HEADER.note}</p>
      </div>
    </section>
  );
}
