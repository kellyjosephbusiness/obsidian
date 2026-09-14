import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FrameWidth = 800 | 1200 | 1600;

/** Vertical 1px rails pinned to the container edges (pattern from PoliciesSection / FaqSection). */
const RAILS: Record<FrameWidth, { left: string; right: string }> = {
  1600: {
    left: "left-[max(16px,calc((100%-1600px)/2))] md:left-[max(24px,calc((100%-1600px)/2))] lg:left-[max(64px,calc((100%-1600px)/2))]",
    right: "right-[max(16px,calc((100%-1600px)/2))] md:right-[max(24px,calc((100%-1600px)/2))] lg:right-[max(64px,calc((100%-1600px)/2))]",
  },
  1200: {
    left: "left-[max(16px,calc((100%-1200px)/2))] md:left-[max(24px,calc((100%-1200px)/2))] lg:left-[max(64px,calc((100%-1200px)/2))]",
    right: "right-[max(16px,calc((100%-1200px)/2))] md:right-[max(24px,calc((100%-1200px)/2))] lg:right-[max(64px,calc((100%-1200px)/2))]",
  },
  800: {
    left: "left-[max(16px,calc((100%-800px)/2))] md:left-[max(24px,calc((100%-800px)/2))] lg:left-[max(64px,calc((100%-800px)/2))]",
    right: "right-[max(16px,calc((100%-800px)/2))] md:right-[max(24px,calc((100%-800px)/2))] lg:right-[max(64px,calc((100%-800px)/2))]",
  },
};

const MAX_W: Record<FrameWidth, string> = {
  1600: "max-w-[1600px]",
  1200: "max-w-[1200px]",
  800: "max-w-[800px]",
};

export function Rails({ width = 1600 }: { width?: FrameWidth }) {
  return (
    <>
      <div aria-hidden className={cn("pointer-events-none absolute inset-y-0 w-px bg-[#e1e1e1]", RAILS[width].left)} />
      <div aria-hidden className={cn("pointer-events-none absolute inset-y-0 w-px bg-[#e1e1e1]", RAILS[width].right)} />
    </>
  );
}

export interface SectionHeadingProps {
  heading: string;
  sub?: string;
  align?: "center" | "start";
  /** Heading level (sections default to h2). */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** F37 Bolton section heading (`--h2` tokens) with an optional body-large sub line. */
export function SectionHeading({ heading, sub, align = "center", as: Tag = "h2", className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4 md:gap-6", align === "center" ? "items-center text-center" : "items-start text-left", className)}>
      <Tag
        className={cn(
          "font-mono font-medium text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]",
          align === "center" && "mx-auto [text-wrap:balance]",
        )}
      >
        {heading}
      </Tag>
      {sub ? <p className={cn("text-body-large text-[#4a4a4a]", align === "center" ? "mx-auto max-w-[560px]" : "max-w-[640px]")}>{sub}</p> : null}
    </div>
  );
}

export interface SectionFrameProps {
  children: ReactNode;
  id?: string;
  width?: FrameWidth;
  /** Page-gutter section with rails; `dark` swaps to the #191919 band. */
  tone?: "light" | "white" | "dark";
  heading?: string;
  sub?: string;
  align?: "center" | "start";
  className?: string;
  /** Extra classes on the inner container. */
  innerClassName?: string;
  /** Hide the bottom hairline (e.g. when the next section supplies one). */
  noBorder?: boolean;
}

/**
 * Standard section: page gutters (`px-4 md:px-6 lg:px-16`), `py-16 md:py-20 lg:py-24`, bottom hairline,
 * 1px rails at the container edges and a centered `max-w` container.
 */
export function SectionFrame({ children, id, width = 1600, tone = "light", heading, sub, align = "center", className, innerClassName, noBorder }: SectionFrameProps) {
  const bg = tone === "dark" ? "bg-[#191919] text-white" : tone === "white" ? "bg-white" : "bg-[#f6f6f6]";
  return (
    <section id={id} className={cn("relative px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24", !noBorder && "border-b border-[#e1e1e1]", bg, className)}>
      {tone !== "dark" ? <Rails width={width} /> : null}
      <div className={cn("relative mx-auto flex w-full flex-col gap-10 md:gap-14", MAX_W[width], innerClassName)}>
        {heading ? <SectionHeading heading={heading} sub={sub} align={align} /> : null}
        {children}
      </div>
    </section>
  );
}
