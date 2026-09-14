"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { Frame, H2 } from "./frame";

function Stars({ size = 18 }: { size?: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="flex size-[22px] items-center justify-center rounded-[4px] bg-[#1e3a8a] text-white">
          <MaterialIcon name="star" size={size} fill={1} />
        </span>
      ))}
    </span>
  );
}

/** Rating card + horizontally scrolling review cards with prev/next and a progress bar (reference: Swiper). */
export function ReviewsCarousel({ reviews }: { reviews: DetailPageContent["reviews"] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [visible, setVisible] = useState(0.5);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
    setVisible(el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  function step(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 16), behavior: "smooth" });
  }

  return (
    <Frame inner="flex flex-col gap-10">
      <h2 className={H2}>{reviews.heading}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[300px_minmax(0,1fr)] md:gap-6">
        <div className="flex flex-col justify-center gap-4 rounded-[24px] bg-[#dde4f6] p-8">
          <span className="font-mono text-[22px] font-medium leading-none text-[#191919]">{reviews.scoreLabel}</span>
          <div className="flex items-center gap-3">
            <Stars />
            <span className="font-mono text-[22px] font-medium leading-none text-[#191919]">{reviews.score}</span>
          </div>
          <span className="text-[13px] text-[#4a4a4a]">{reviews.countLabel}</span>
          <span className="flex items-center gap-1.5 text-[14px] font-medium text-[#191919]">
            <MaterialIcon name="verified" size={18} className="text-[#1e3a8a]" />
            FundLine owner reviews
          </span>
        </div>
        <div className="flex min-w-0 flex-col gap-4">
          <div ref={trackRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reviews.items.map((r) => (
              <article key={r.title + r.author} data-review className="flex w-[300px] shrink-0 snap-start flex-col gap-3 rounded-[24px] border border-[#e1e1e1] bg-white p-6">
                <Stars size={14} />
                <h3 className="font-mono text-[18px] font-medium leading-[1.15] tracking-[-0.02em] text-[#191919]">{r.title}</h3>
                <p className="text-[14px] leading-[1.45] tracking-[-0.21px] text-[#4a4a4a]">{r.body}</p>
                <span className="mt-auto border-t border-[#e1e1e1] pt-3 text-[13px] font-medium text-[#191919]">{r.author}</span>
              </article>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button type="button" aria-label="Previous reviews" onClick={() => step(-1)} disabled={atStart} className="text-[#191919] disabled:opacity-30">
              <MaterialIcon name="chevron_left" size={24} />
            </button>
            <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white">
              <div
                className="absolute inset-y-0 rounded-full bg-[#1e3a8a] transition-[left] duration-150"
                style={{ width: `${Math.max(12, visible * 100)}%`, left: `${progress * (100 - Math.max(12, visible * 100))}%` }}
              />
            </div>
            <button type="button" aria-label="Next reviews" onClick={() => step(1)} disabled={atEnd} className="text-[#191919] disabled:opacity-30">
              <MaterialIcon name="chevron_right" size={24} />
            </button>
          </div>
        </div>
      </div>
    </Frame>
  );
}
