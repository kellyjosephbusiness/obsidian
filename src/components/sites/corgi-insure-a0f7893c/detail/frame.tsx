import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Section shell: 1200px container, FundLine rails, standard vertical rhythm. */
export function Frame({
  children,
  className,
  inner,
  tone = "page",
  id,
}: {
  children: ReactNode;
  className?: string;
  inner?: string;
  tone?: "page" | "white" | "dark" | "navy";
  id?: string;
}) {
  const bg = { page: "bg-[#f6f6f6]", white: "bg-white", dark: "bg-[#191919]", navy: "bg-[#0376FD]" }[tone];
  const rail = tone === "dark" || tone === "navy" ? "bg-white/15" : "bg-[#e1e1e1]";
  return (
    <section id={id} className={cn("relative px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24", bg, className)}>
      <div aria-hidden className={cn("pointer-events-none absolute inset-y-0 w-px left-[max(16px,calc((100%-1200px)/2))] md:left-[max(24px,calc((100%-1200px)/2))] lg:left-[max(64px,calc((100%-1200px)/2))]", rail)} />
      <div aria-hidden className={cn("pointer-events-none absolute inset-y-0 w-px right-[max(16px,calc((100%-1200px)/2))] md:right-[max(24px,calc((100%-1200px)/2))] lg:right-[max(64px,calc((100%-1200px)/2))]", rail)} />
      <div className={cn("relative mx-auto w-full max-w-[1200px]", inner)}>{children}</div>
    </section>
  );
}

export const H2 = "font-mono font-medium text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]";
export const H3 = "font-mono font-medium text-[#191919] text-[24px] leading-none tracking-[-0.768px] md:text-[28px] md:tracking-[-0.9px]";
export const BODY = "text-[16px] leading-[1.5] tracking-[-0.24px] text-[#4a4a4a] md:text-[18px] md:tracking-[-0.27px]";

/** Renders "¹ ² ³" style markers as superscripts. */
export function Sup({ text }: { text: string }) {
  const parts = text.split(/([¹²³⁴⁵])/);
  return (
    <>
      {parts.map((p, i) =>
        /[¹²³⁴⁵]/.test(p) ? (
          <sup key={i} className="ml-0.5 text-[max(12px,0.6em)] text-[#0160CC]">
            {"¹²³⁴⁵".indexOf(p) + 1}
          </sup>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}
