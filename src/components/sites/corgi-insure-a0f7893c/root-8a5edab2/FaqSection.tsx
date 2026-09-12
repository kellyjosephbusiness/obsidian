"use client";

import Link from "next/link";
import { Fragment, useEffect, useId, useRef, useState } from "react";
import type { FaqItem } from "@/types/sites/corgi-insure-a0f7893c/home";
import { MaterialIcon } from "../shared/MaterialIcon";
import { FAQ, FAQ_HEADER } from "./data";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

interface FaqRowProps {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}

/**
 * One question/answer row. The answer wrapper animates `height` (0 → measured
 * content height) and `margin-top` (0 → 8px); the inner content animates
 * translateY(-8px)/opacity 0/blur(2px) → 0/1/0. All 500ms cubic-bezier(.22,1,.36,1).
 */
function FaqRow({ item, open, onToggle }: FaqRowProps) {
  const panelId = useId();
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Track the answer's natural height so the height transition lands on the
  // exact value (and keeps up with reflow while open, e.g. viewport resizes).
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => setContentHeight(el.offsetHeight);
    measure();

    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex min-h-[24px] w-full cursor-pointer items-center justify-between gap-4 text-left"
      >
        <span className="font-bold text-[#4a4a4a] text-[16px] leading-[1.2] tracking-[-0.24px]">{item.question}</span>
        <MaterialIcon
          name="keyboard_arrow_down"
          size={16}
          className={`shrink-0 text-[#4a4a4a] transition-transform duration-500 ${EASE}`}
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>

      <div
        id={panelId}
        className={`overflow-hidden transition-[height,margin-top] duration-500 ${EASE}`}
        style={{ height: open ? contentHeight : 0, marginTop: open ? 8 : 0 }}
      >
        <div
          ref={contentRef}
          className={`text-body text-[#4a4a4a] transition-[transform,opacity,filter] duration-500 ${EASE}`}
          style={
            open
              ? { transform: "translateY(0px)", opacity: 1, filter: "blur(0px)" }
              : { transform: "translateY(-8px)", opacity: 0, filter: "blur(2px)" }
          }
          // Trusted HTML copied verbatim from the source site (contains <a class="underline"> links).
          dangerouslySetInnerHTML={{ __html: item.answerHtml }}
        />
      </div>
    </div>
  );
}

/**
 * "FAQ" section: single-open accordion inside a white card with a grey inner
 * panel and a "Can't find an answer?" footer row (site: FaqSection).
 */
export interface FaqSectionProps {
  items?: FaqItem[];
  heading?: string;
  footer?: { text: string; link: { label: string; href: string } };
}

export function FaqSection({ items = FAQ, heading = FAQ_HEADER.heading, footer = FAQ_HEADER.footer }: FaqSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const last = items.length - 1;

  return (
    <section className="relative border-[#e1e1e1] border-b bg-[#f6f6f6] px-4 py-16 md:px-6 md:py-20 lg:px-16">
      {/* Vertical rails aligned to the 800px container edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-0 left-[max(16px,calc((100%-800px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100%-800px)/2))] lg:left-[max(64px,calc((100%-800px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[max(16px,calc((100%-800px)/2))] bottom-0 w-px bg-[#e1e1e1] md:right-[max(24px,calc((100%-800px)/2))] lg:right-[max(64px,calc((100%-800px)/2))]"
      />

      <div className="relative mx-auto flex w-full max-w-[800px] flex-col items-center gap-6">
        <h2 className="px-6 text-center font-medium font-mono text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]">
          {heading}
        </h2>

        <div className="relative w-full">
          {/* Full-bleed horizontal hairlines at the card's top and bottom edges */}
          <div
            aria-hidden
            className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-px w-screen bg-[#e1e1e1]"
          />
          <div
            aria-hidden
            className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 h-px w-screen bg-[#e1e1e1]"
          />

          <div className="relative w-full overflow-clip rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
            <div className="-m-px relative flex flex-col justify-center gap-4 overflow-clip rounded-[24px] bg-[#f6f6f6] p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
              {items.map((item, i) => (
                <Fragment key={item.question}>
                  <FaqRow
                    item={item}
                    open={openIndex === i}
                    onToggle={() => setOpenIndex((current) => (current === i ? null : i))}
                  />
                  {i < last && <div className="h-px w-full bg-[#e1e1e1]" />}
                </Fragment>
              ))}
            </div>

            <div className="flex items-center justify-center px-4 py-5 text-center">
              <p className="text-body text-[#4a4a4a]">
                {footer.text}{" "}
                <Link href={footer.link.href} className="text-[#1e3a8a] hover:underline">
                  {footer.link.label}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
