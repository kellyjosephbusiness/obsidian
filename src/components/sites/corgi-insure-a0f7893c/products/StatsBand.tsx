import type { Stat } from "@/types/sites/corgi-insure-a0f7893c/products";
import { Rails } from "../directors-and-officers-f2860438/rails";

interface StatsBandProps {
  heading: string;
  stats: Stat[];
}

/** Dark band (#313131) with a heading and a 2/4-column row of large F37 figures. */
export function StatsBand({ heading, stats }: StatsBandProps) {
  return (
    <section className="relative border-y border-[#585858] bg-[#313131] px-4 py-16 md:px-6 md:py-20 lg:px-16">
      <Rails dark />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10">
        <h2 className="px-4 font-mono font-medium text-white text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)] md:px-6">
          {heading}
        </h2>
        <dl className="grid grid-cols-1 gap-px overflow-clip rounded-[8px] border border-[#585858] bg-[#585858] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-3 bg-[#313131] p-6">
              <dd className="font-mono text-[40px] font-medium leading-none tracking-[-1.28px] text-white md:text-[48px] md:tracking-[-1.54px]">{stat.value}</dd>
              <dt className="text-[14px] leading-[1.3] tracking-[-0.21px] text-[#ddd]">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
