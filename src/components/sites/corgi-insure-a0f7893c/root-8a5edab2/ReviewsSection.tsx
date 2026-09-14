"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { CustomerPhoto } from "@/components/sites/corgi-insure-a0f7893c/shared/CustomerPhoto";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { REVIEWS, REVIEWS_HEADER, SHARED } from "./data";


/**
 * "See what 1,000+ business owners have to say." — the page's only reviews block: a horizontally
 * scrolling list of review cards (scroll-snap, drag/trackpad friendly) carrying the owner's
 * portrait, with previous/next buttons and the "Read customer stories" link underneath.
 */
export function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    const ro = new ResizeObserver(updateEdges);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      ro.disconnect();
    };
  }, [updateEdges]);

  function scrollByCard(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const step = card ? card.offsetWidth + 32 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden border-b border-[#e1e1e1] bg-[#f6f6f6] pt-8 pb-14 md:pt-10 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100vw-1600px)/2))] lg:right-[max(64px,calc((100vw-1600px)/2))]"
      />

      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-8 md:gap-10">
        <div className="relative px-4 md:px-6 lg:px-16">
          {/* Decorative: the hero's dithered hand, pointing down at the review cards. */}
          <Image
            aria-hidden
            alt=""
            src={`${SHARED}/art/hands/point-down.png`}
            width={560}
            height={480}
            className="pointer-events-none absolute top-[-12px] left-[6%] hidden h-[132px] w-[132px] -rotate-6 object-contain opacity-90 lg:block xl:left-[11%] xl:h-[150px] xl:w-[150px]"
          />
          <h2 className="text-center font-mono font-medium text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]">
            {REVIEWS_HEADER.headingLine1}
            <br />
            {REVIEWS_HEADER.headingLine2}
          </h2>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-4 pb-2 scroll-pl-4 [scrollbar-width:none] md:px-6 md:scroll-pl-6 lg:px-16 lg:scroll-pl-16 [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              data-review-card
              className="flex w-[320px] shrink-0 snap-start flex-col gap-8 rounded-[8px] border border-[#e1e1e1] bg-white p-8 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:w-[560px] md:p-12"
            >
              <div className="flex items-center gap-4">
                <CustomerPhoto name={review.name} index={review.photo} className="size-16 shrink-0 rounded-full md:size-20" sizes="80px" />
                <div className="flex min-w-0 flex-col gap-1.5 md:flex-row md:items-center md:gap-4">
                  <span className="whitespace-nowrap font-mono text-[20px] font-medium leading-none tracking-[-0.02em] text-[#191919] md:text-[22px]">{review.name}</span>
                  <span className="whitespace-nowrap text-[15px] leading-none tracking-[-0.24px] text-[#5c5c5c] md:text-[18px]">{review.city}</span>
                </div>
                <MaterialIcon name="format_quote" size={48} className="ml-auto shrink-0 text-[#0160CC]" fill={1} />
              </div>
              <p className="text-[18px] leading-[1.6] tracking-[-0.2px] text-[#4a4a4a] md:text-[20px]">{review.quote}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-5 px-4 md:flex-row md:gap-6 md:px-6 lg:px-16">
          <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous reviews"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            className="flex size-[52px] items-center justify-center rounded-[8px] border border-[#e1e1e1] bg-white text-[#191919] shadow-[0_0_16px_0_rgba(25,25,25,0.08)] transition-[background-color,opacity] hover:bg-[#f0f0f0] disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white"
          >
            <MaterialIcon name="arrow_back" size={24} />
          </button>
          <button
            type="button"
            aria-label="Next reviews"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            className="flex size-[52px] items-center justify-center rounded-[8px] border border-[#e1e1e1] bg-white text-[#191919] shadow-[0_0_16px_0_rgba(25,25,25,0.08)] transition-[background-color,opacity] hover:bg-[#f0f0f0] disabled:cursor-default disabled:opacity-40 disabled:hover:bg-white"
          >
            <MaterialIcon name="arrow_forward" size={24} />
          </button>
          </div>
          <Link
            href={REVIEWS_HEADER.cta.href}
            data-track="cta-homepage-reviews"
            className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-[4px] text-[16px] font-medium leading-[1.2] tracking-[-0.24px] text-[#0160CC] hover:underline md:text-[18px]"
          >
            {REVIEWS_HEADER.cta.label}
            <MaterialIcon name="arrow_forward" size={20} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
