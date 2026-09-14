import Link from "next/link";
import type { ComparisonRow } from "@/types/sites/corgi-insure-a0f7893c/products";
import { H2_CLASS, Hairlines, Rails } from "../directors-and-officers-f2860438/rails";
import { COMPARISON_HEADER, COMPARISON_ROWS } from "./data";

const CELL = "px-5 py-4 text-[14px] leading-[1.25] tracking-[-0.21px] text-[#4a4a4a]";

/**
 * The eight core products side by side. Squared header cells over zebra-striped rows inside an
 * 8px-cornered card; the table scrolls sideways below 900px with the product column pinned left.
 */
export function ComparisonTable({ rows = COMPARISON_ROWS }: { rows?: ComparisonRow[] } = {}) {
  return (
    <section id="compare" className="relative scroll-mt-[120px] border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col items-center gap-6 px-4 text-center md:px-6">
          <h2 className={H2_CLASS}>{COMPARISON_HEADER.heading}</h2>
          <p className="mx-auto max-w-[560px] text-body-large text-[#4a4a4a]">{COMPARISON_HEADER.sub}</p>
        </div>
        <div className="relative">
          <Hairlines zIndex="z-0" />
          <div className="relative z-10 overflow-hidden rounded-[8px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left">
                <thead>
                  <tr>
                    {COMPARISON_HEADER.columns.map((col, i) => (
                      <th
                        key={col}
                        scope="col"
                        className={`bg-[#ededed] px-5 py-3 text-[12px] font-medium uppercase leading-[1.2] tracking-[0.06em] text-[#4a4a4a] ${
                          i === 0 ? "sticky left-0 z-20 w-[220px] shadow-[1px_0_0_0_#e1e1e1]" : ""
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => {
                    const zebra = i % 2 === 1 ? "bg-[#f6f6f6]" : "bg-white";
                    return (
                      <tr key={row.product} className={`border-t border-[#e1e1e1] align-top ${zebra}`}>
                        <th
                          scope="row"
                          className={`sticky left-0 z-10 px-5 py-4 text-[14px] font-bold leading-[1.25] tracking-[-0.21px] text-[#191919] shadow-[1px_0_0_0_#e1e1e1] ${zebra}`}
                        >
                          <Link href={row.anchor} className="hover:text-[#0160CC] hover:underline">
                            {row.product}
                          </Link>
                        </th>
                        <td className={CELL}>{row.amount}</td>
                        <td className={CELL}>{row.term}</td>
                        <td className={CELL}>{row.speed}</td>
                        <td className={CELL}>{row.bestFor}</td>
                      </tr>
                    );
                  })}
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
