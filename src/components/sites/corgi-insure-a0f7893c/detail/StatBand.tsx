import type { DetailStat } from "@/types/sites/corgi-insure-a0f7893c/detail";

/** Grey stat band: big number + label on the left, one-line blurb on the right. */
export function StatBand({ stat }: { stat: DetailStat }) {
  return (
    <section className="relative border-b border-[#e1e1e1] bg-white px-4 md:px-6 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-6 py-10 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-10 md:py-14">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[48px] font-medium leading-none tracking-[-0.03em] text-[#1e3a8a] md:text-[64px]">{stat.value}</span>
          <span className="text-[18px] leading-[1.3] tracking-[-0.27px] text-[#191919] md:text-[22px]">{stat.label}</span>
        </div>
        <p className="text-[18px] leading-[1.45] tracking-[-0.27px] text-[#4a4a4a] md:text-[22px] md:tracking-[-0.33px]">{stat.blurb}</p>
      </div>
    </section>
  );
}
