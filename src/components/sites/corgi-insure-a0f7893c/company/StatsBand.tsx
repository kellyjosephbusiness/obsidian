import { HERO_TICKER } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/data";
import type { HeroTickerItem } from "@/types/sites/corgi-insure-a0f7893c/home";

export interface StatsBandProps {
  headingLine1: string;
  headingLine2: string;
  items?: HeroTickerItem[];
}

/**
 * Dark `#191919` stats band reusing the hero ticker proof points as a 2/3/4-up grid of big F37 Bolton numbers.
 */
/** Column spans for the final cell so a 2/3/4-column grid never leaves an empty slot. */
function lastCellSpan(n: number): string {
  const sm = n % 2 === 1 ? "col-span-2" : "col-span-1";
  const md = ["md:col-span-1", "md:col-span-3", "md:col-span-2"][n % 3];
  const lg = ["lg:col-span-1", "lg:col-span-4", "lg:col-span-3", "lg:col-span-2"][n % 4];
  return `${sm} ${md} ${lg}`;
}

export function StatsBand({ headingLine1, headingLine2, items = HERO_TICKER }: StatsBandProps) {
  return (
    <section className="relative border-b border-[#e1e1e1] bg-[#191919] px-4 py-16 text-white md:px-6 md:py-20 lg:px-16 lg:py-24">
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-10 md:gap-14">
        <h2 className="text-center font-mono font-medium text-white text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]">
          <span className="block">{headingLine1}</span>
          <span className="block text-[#8ea6f0]">{headingLine2}</span>
        </h2>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-[#585858] bg-[#585858] md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-2 bg-[#191919] px-5 py-7 md:px-8 md:py-10 ${i === items.length - 1 ? lastCellSpan(items.length) : ""}`}
            >
              <dd className="order-1 font-mono text-[32px] font-medium leading-none tracking-[-0.032em] text-white md:text-[44px] lg:text-[52px]">{item.value}</dd>
              <dt className="order-2 text-[14px] leading-[1.3] tracking-[-0.21px] text-[#b5b5b5] md:text-[16px]">{item.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
