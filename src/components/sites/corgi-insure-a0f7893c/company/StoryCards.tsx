"use client";

import { useState } from "react";
import { CustomerPhoto } from "@/components/sites/corgi-insure-a0f7893c/shared/CustomerPhoto";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { CustomerStory } from "@/types/sites/corgi-insure-a0f7893c/company";
import { cn } from "@/lib/utils";

const ALL = "All";

/**
 * Customer story cards (the home testimonials expanded): company block header with initials, quote, and a
 * product / amount / outcome fact list. A chip row filters by loan product (client state only).
 */
export function StoryCards({ stories }: { stories: CustomerStory[] }) {
  const products = [ALL, ...Array.from(new Set(stories.map((s) => s.product)))];
  const [active, setActive] = useState(ALL);
  const visible = active === ALL ? stories : stories.filter((s) => s.product === active);

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div role="tablist" aria-label="Filter stories by loan product" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:justify-center md:px-0 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => {
          const selected = product === active;
          return (
            <button
              key={product}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(product)}
              className={cn(
                "shrink-0 rounded-[4px] border px-4 py-2 text-[14px] font-medium leading-[1.2] tracking-[-0.21px] transition-colors",
                selected ? "border-[#0376FD] bg-[#0376FD] text-white" : "border-[#e1e1e1] bg-white text-[#4a4a4a] hover:border-[#0376FD] hover:text-[#0160CC]",
              )}
            >
              {product}
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {visible.map((story) => (
          <li key={story.company} className="flex flex-col overflow-clip rounded-[8px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
            <div className="relative -mx-px -mt-px flex flex-col justify-end overflow-clip rounded-[8px] border border-[#e1e1e1] shadow-[0_0_24px_0_rgba(25,25,25,0.35)]">
              <CustomerPhoto name={story.author} index={story.photo} className="h-[160px] w-full" sizes="400px" />
              <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "linear-gradient(200deg, rgba(255,255,255,0) 45%, rgba(255,255,255,0.75) 72%, #ffffff 100%)" }} />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="truncate text-[16px] font-medium leading-[1.2] tracking-[-0.24px] text-[#1d1d1d]">{story.author}</span>
                  <span className="truncate text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4e4e4e]">{story.role}</span>
                </div>
                <span className="shrink-0 rounded-[4px] bg-white/90 px-2.5 py-1 text-[12px] font-medium uppercase leading-none tracking-[0.06em] text-[#4a4a4a] shadow-[0_0_8px_0_rgba(25,25,25,0.08)]">{story.industry}</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 p-6">
              <p className="text-[16px] leading-[1.45] tracking-[-0.24px] text-[#4a4a4a]">&ldquo;{story.quote}&rdquo;</p>
              <dl className="mt-auto grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-t border-[#e1e1e1] pt-5 text-[14px] leading-[1.3] tracking-[-0.21px]">
                <dt className="text-[#5c5c5c]">Product</dt>
                <dd className="font-medium text-[#191919]">{story.product}</dd>
                <dt className="text-[#5c5c5c]">Amount</dt>
                <dd className="font-mono text-[16px] font-medium tracking-[-0.02em] text-[#0160CC]">{story.amount}</dd>
                <dt className="text-[#5c5c5c]">Outcome</dt>
                <dd className="text-[#191919]">{story.outcome}</dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>

      {visible.length === 0 ? (
        <p className="flex items-center justify-center gap-2 text-body text-[#5c5c5c]">
          <MaterialIcon name="search_off" size={20} />
          No stories for that product yet.
        </p>
      ) : null}
    </div>
  );
}
