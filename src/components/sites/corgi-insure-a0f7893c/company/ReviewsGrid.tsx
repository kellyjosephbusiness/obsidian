import { CustomerPhoto } from "@/components/sites/corgi-insure-a0f7893c/shared/CustomerPhoto";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { ReviewEntry } from "@/types/sites/corgi-insure-a0f7893c/company";
import { RatingSummary, StarRow } from "./RatingSummary";
import { Reveal } from "./Reveal";

/** The home ReviewsSection card (avatar, name, city, quote glyph, quote) laid out as a static 3-up grid with a star row and product chip. */
export function ReviewsGrid({ reviews }: { reviews: ReviewEntry[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {reviews.map((review, i) => (
        <Reveal key={`${review.name}-${review.city}`} index={i} className="flex">
          <li className="flex w-full flex-col gap-6 rounded-[8px] border border-[#e1e1e1] bg-white p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:p-8">
            <div className="flex items-center gap-4">
              <CustomerPhoto name={review.name} index={review.photo} className="size-12 shrink-0 rounded-full md:size-14" sizes="48px" />
              <div className="flex min-w-0 flex-col gap-1">
                <span className="truncate font-mono text-[20px] font-medium leading-none tracking-[-0.02em] text-[#191919]">{review.name}</span>
                <span className="truncate text-[14px] leading-none tracking-[-0.21px] text-[#5c5c5c]">{review.city}</span>
              </div>
              <MaterialIcon name="format_quote" size={40} className="ml-auto shrink-0 text-[#0160CC]" fill={1} />
            </div>
            <StarRow value={review.rating} size={18} />
            <p className="text-[17px] leading-[1.5] tracking-[-0.2px] text-[#4a4a4a]">{review.quote}</p>
            <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-[#e1e1e1] pt-5 text-[12px] leading-none tracking-[-0.18px]">
              <span className="rounded-[4px] bg-[#DDEAFE] px-2.5 py-1.5 font-medium text-[#0160CC]">{review.product}</span>
              <span className="text-[#5c5c5c]">Funded {review.date}</span>
              <span className="ml-auto inline-flex items-center gap-1 text-[#0f7b5f]">
                <MaterialIcon name="verified" size={14} fill={1} />
                Verified owner
              </span>
            </div>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

export { RatingSummary };
