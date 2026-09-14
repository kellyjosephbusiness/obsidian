import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { RatingSummaryContent } from "@/types/sites/corgi-insure-a0f7893c/company";

/** Five navy stars, dimmed past `value` (supports halves via the `star_half` glyph). */
export function StarRow({ value, size = 20 }: { value: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => {
        const name = value >= n ? "star" : value >= n - 0.5 ? "star_half" : "star";
        const dim = value < n - 0.5;
        return <MaterialIcon key={n} name={name} size={size} fill={dim ? 0 : 1} className={dim ? "text-[#c9c9c9]" : "text-[#1e3a8a]"} />;
      })}
    </span>
  );
}

/** Big average + star row on the left, five percentage bars on the right, inside one white card. */
export function RatingSummary({ content }: { content: RatingSummaryContent }) {
  const avg = Number(content.average);
  return (
    <div className="grid grid-cols-1 overflow-clip rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <div className="flex flex-col items-center justify-center gap-3 border-b border-[#e1e1e1] p-8 text-center md:border-r md:border-b-0 md:p-12">
        <span className="font-mono text-[72px] font-medium leading-none tracking-[-0.04em] text-[#191919] md:text-[96px]">{content.average}</span>
        <StarRow value={avg} size={28} />
        <span className="text-[16px] font-medium leading-[1.2] tracking-[-0.24px] text-[#191919]">{content.count}</span>
        <span className="text-[14px] leading-[1.2] tracking-[-0.21px] text-[#5c5c5c]">{content.caption}</span>
      </div>
      <ul className="flex flex-col justify-center gap-3.5 p-8 md:p-12">
        {content.bars.map((bar) => (
          <li key={bar.stars} className="flex items-center gap-3">
            <span className="flex w-[44px] shrink-0 items-center gap-1 text-[14px] font-medium leading-none tracking-[-0.21px] text-[#191919]">
              {bar.stars}
              <MaterialIcon name="star" size={14} fill={1} className="text-[#1e3a8a]" />
            </span>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#ededed]">
              <div className="h-full rounded-full bg-[#1e3a8a]" style={{ width: `${bar.percent}%` }} />
            </div>
            <span className="w-[40px] shrink-0 text-right text-[14px] leading-none tracking-[-0.21px] text-[#4a4a4a]">{bar.percent}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
