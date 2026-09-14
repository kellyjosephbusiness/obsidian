"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { BODY, Frame, H2 } from "./frame";

/** Flat FAQ list: hairline rows with a plus/minus toggle, single open. */
export function DetailFaq({ faq }: { faq: DetailPageContent["faq"] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Frame tone="white" inner="flex flex-col gap-8 md:gap-12">
      <h2 className={`${H2} mx-auto text-center [text-wrap:balance]`}>{faq.heading}</h2>
      <div className="flex flex-col border-t border-[#e1e1e1]">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question} className="border-b border-[#e1e1e1]">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-mono text-[18px] font-medium leading-[1.25] tracking-[-0.02em] text-[#191919] transition-colors hover:text-[#0160CC] md:py-7 md:text-[22px]"
              >
                {item.question}
                <MaterialIcon name={isOpen ? "remove" : "add"} size={24} className="shrink-0 text-[#0160CC]" />
              </button>
              <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                  <p className={`${BODY} max-w-[880px] pb-7`}>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}
