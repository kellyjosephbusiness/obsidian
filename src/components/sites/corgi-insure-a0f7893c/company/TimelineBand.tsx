import type { TimelineItem } from "@/types/sites/corgi-insure-a0f7893c/company";

export interface TimelineBandProps {
  heading: string;
  sub: string;
  items: TimelineItem[];
}

/**
 * Dark timeline band: horizontal at lg (dots on a hairline, five columns), vertical stacked list below.
 */
export function TimelineBand({ heading, sub, items }: TimelineBandProps) {
  return (
    <section className="relative border-b border-[#e1e1e1] bg-[#191919] px-4 py-16 text-white md:px-6 md:py-20 lg:px-16 lg:py-24">
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-10 md:gap-14">
        <div className="flex flex-col items-center gap-4 text-center md:gap-6">
          <h2 className="font-mono font-medium text-white text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]">{heading}</h2>
          <p className="max-w-[720px] text-body-large text-[#b5b5b5] [&]:text-[#b5b5b5]">{sub}</p>
        </div>

        <ol className="relative flex flex-col gap-8 lg:grid lg:grid-cols-5 lg:gap-6">
          {/* connector: vertical on mobile, horizontal at lg */}
          <div aria-hidden className="pointer-events-none absolute top-0 bottom-0 left-[11px] w-px bg-[#585858] lg:top-[11px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto" />
          {items.map((item, i) => (
            <li key={item.title} className="relative flex gap-5 lg:flex-col lg:gap-6">
              <span className="relative z-10 mt-px flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-[#8ea6f0] bg-[#191919]">
                <span className="size-2 rounded-full bg-[#8ea6f0]" />
                <span className="sr-only">Step {i + 1}</span>
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-[12px] font-medium uppercase leading-[1.2] tracking-[0.08em] text-[#8ea6f0]">{item.when}</span>
                <h3 className="font-mono text-[22px] font-medium leading-[1.1] tracking-[-0.02em] text-white">{item.title}</h3>
                <p className="text-[15px] leading-[1.35] tracking-[-0.2px] text-[#b5b5b5]">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
