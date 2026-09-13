"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { FundingMoment } from "@/types/sites/corgi-insure-a0f7893c/industry-ai";
import { AI_MOMENTS, AI_MOMENTS_HEADING } from "./data";

/** Seconds each moment stays active (site: `--risk-duration`, 5.6s linear). */
const MOMENT_DURATION = 5.6;
const EASE = "ease-[cubic-bezier(0.2,0,0,1)]";

export interface FundingMomentsProps {
  heading?: { line1: string; line2: string };
  items?: FundingMoment[];
}

/**
 * "Common Funding Moments" (site: SaasRiskTriggersSection). Left: dark rounded card with a dot grid,
 * a radial glow and one stacked glyph per moment (active: scale 1 / opacity 1; others: scale .25,
 * opacity 0, blur 4px — 300ms). Right: four flex-1 buttons; the active one gets the grey rounded
 * surface and a 3px progress bar that fills linearly over 5.6s, after which the next moment activates.
 * Clicking a moment activates it and restarts the timer.
 */
export function FundingMoments({ heading = AI_MOMENTS_HEADING, items = AI_MOMENTS }: FundingMomentsProps = {}) {
  const [active, setActive] = useState(0);
  // Bumped on every click so the progress bar remounts and the timer restarts even when re-selecting the active item.
  const [cycle, setCycle] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (items.length < 2) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % items.length), MOMENT_DURATION * 1000);
    return () => window.clearTimeout(timer);
  }, [active, cycle, items.length]);

  const select = (index: number) => {
    setActive(index);
    setCycle((c) => c + 1);
  };

  const current = items[active];

  return (
    <section className="relative overflow-hidden border-[#e1e1e1] border-b bg-background px-4 py-12 md:px-6 md:py-16 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-[-1px] left-[max(1rem,calc((100vw-1600px)/2))] z-0 w-px bg-[#e1e1e1] md:left-[max(1.5rem,calc((100vw-1600px)/2))] lg:left-[max(4rem,calc((100vw-1600px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[max(1rem,calc((100vw-1600px)/2))] bottom-[-1px] z-0 w-px bg-[#e1e1e1] md:right-[max(1.5rem,calc((100vw-1600px)/2))] lg:right-[max(4rem,calc((100vw-1600px)/2))]"
      />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-6">
        <div className="px-6">
          <h2 className="text-balance font-mono font-normal text-[#191919] text-[34px] leading-none tracking-[-1.088px] md:text-[42px] md:tracking-[-1.344px] lg:text-[48px] lg:tracking-[-1.536px]">
            <span className="block">{heading.line1}</span>
            <span className="block text-[#b1b1b1]">{heading.line2}</span>
          </h2>
        </div>

        <div className="relative grid gap-4 lg:grid-cols-2 lg:items-stretch">
          <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />
          <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />

          {/* Glyph card */}
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[24px] bg-[#313131] p-8 shadow-[0_0_12px_rgba(25,25,25,0.05)] md:min-h-[440px] lg:h-[640px]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1.5px)] bg-[size:24px_24px] bg-center"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_42%)]" />
            <div className="relative z-10 size-32 md:size-40">
              {items.map((item, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={item.id}
                    aria-hidden
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-[opacity,transform,filter] duration-300",
                      EASE,
                      isActive ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]",
                    )}
                  >
                    <span
                      className="msym block bg-[linear-gradient(180deg,#ffffff_0%,#d9d9d9_38%,#7a7a7a_100%)] bg-clip-text leading-none [--glyph:128px] text-transparent drop-shadow-[0_18px_28px_rgba(0,0,0,0.5)] md:[--glyph:160px] [font-variation-settings:'FILL'_1,'wght'_300,'GRAD'_0,'opsz'_48]"
                      style={{ fontSize: "var(--glyph)" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="sr-only" aria-live="polite">
              {current?.title}
            </p>
          </div>

          {/* Moment buttons */}
          <div className="flex min-h-[520px] flex-col lg:h-[640px]">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => select(i)}
                  className={cn(
                    "relative flex min-h-[130px] flex-1 flex-col items-start overflow-hidden px-6 pt-7 pb-6 text-left transition-[background-color,box-shadow,transform] duration-300 active:scale-[0.99]",
                    EASE,
                    isActive
                      ? "rounded-[24px] bg-[#eaeaea] shadow-[0_0_0_1px_rgba(225,225,225,0.2)]"
                      : "bg-transparent hover:bg-white/45",
                  )}
                >
                  {isActive && (
                    <div aria-hidden className="absolute top-4 right-6 left-6 h-[3px] overflow-hidden rounded-full bg-[#d6d6d6]">
                      <motion.span
                        key={`${item.id}-${cycle}`}
                        className="block h-full w-full origin-left rounded-full bg-[#9d9d9d]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: reducedMotion ? 0 : MOMENT_DURATION, ease: "linear" }}
                      />
                    </div>
                  )}
                  <div className="mt-3 flex max-w-[560px] flex-col gap-3">
                    <h3 className="font-mono font-normal text-[#191919] text-[24px] leading-none tracking-[-0.768px]">{item.title}</h3>
                    <p className="text-body text-[#4e4e4e]">{item.body}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
