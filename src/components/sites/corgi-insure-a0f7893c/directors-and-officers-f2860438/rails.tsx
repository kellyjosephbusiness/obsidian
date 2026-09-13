import { cn } from "@/lib/utils";

/** 1px vertical rails at the edges of a centered container (1200px by default), spanning the section. */
export function Rails({ width = 1200, dark = false, className }: { width?: 1200 | 1600; dark?: boolean; className?: string }) {
  const color = dark ? "bg-[#585858]" : "bg-[#e1e1e1]";
  const left =
    width === 1200
      ? "left-[max(16px,calc((100vw-1200px)/2))] md:left-[max(24px,calc((100vw-1200px)/2))] lg:left-[max(64px,calc((100vw-1200px)/2))]"
      : "left-[max(16px,calc((100vw-1600px)/2))] md:left-[max(24px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]";
  const right =
    width === 1200
      ? "right-[max(16px,calc((100vw-1200px)/2))] md:right-[max(24px,calc((100vw-1200px)/2))] lg:right-[max(64px,calc((100vw-1200px)/2))]"
      : "right-[max(16px,calc((100vw-1600px)/2))] md:right-[max(24px,calc((100vw-1600px)/2))] lg:right-[max(64px,calc((100vw-1600px)/2))]";
  return (
    <>
      <div aria-hidden className={cn("pointer-events-none absolute inset-y-0 z-10 w-px", color, left, className)} />
      <div aria-hidden className={cn("pointer-events-none absolute inset-y-0 z-10 w-px", color, right, className)} />
    </>
  );
}

/** Full-bleed 1px hairlines at the top and bottom of a relatively positioned block. */
export function Hairlines({ zIndex = "z-10" }: { zIndex?: string }) {
  return (
    <>
      <div aria-hidden className={cn("pointer-events-none absolute top-0 left-1/2 h-px w-screen max-w-[2400px] -translate-x-1/2 bg-[#e1e1e1]", zIndex)} />
      <div aria-hidden className={cn("pointer-events-none absolute bottom-0 left-1/2 h-px w-screen max-w-[2400px] -translate-x-1/2 bg-[#e1e1e1]", zIndex)} />
    </>
  );
}

export const H2_CLASS =
  "font-mono font-medium text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]";
