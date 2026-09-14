import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { IndustryChip } from "@/types/sites/corgi-insure-a0f7893c/industry-ai";
import { AI_INDUSTRIES_HEADING, AI_INDUSTRY_CHIPS } from "./data";

/**
 * "Explore Funding by Industry" (site: /ai section 7): centered H2 inside the 1128px rails, then a
 * hairline-framed row of 112×96 chips. Each chip is an illustration (or glyph) that grows from its
 * base on hover while an uppercase 12px label fades in 60px above it.
 */
export interface IndustryChipsProps {
  heading?: string;
  chips?: IndustryChip[];
}

function ChipArt({ chip }: { chip: IndustryChip }) {
  const { art } = chip;
  if (art.kind === "icon") {
    return (
      <div className="relative flex size-[72px] shrink-0 items-center justify-center">
        <MaterialIcon name={art.icon} size={64} className="text-[#191919]" fill={1} />
        <span className="sr-only">{chip.label}</span>
      </div>
    );
  }
  return (
    <div className={cn("relative shrink-0", art.cropClassName && "overflow-hidden")} style={{ width: art.box.width, height: art.box.height }}>
      <div className={cn("absolute", art.cropClassName ?? "inset-0")}>
        <Image
          alt=""
          src={art.src}
          fill
          sizes="180px"
          className={art.fit === "cover" ? "object-cover" : "object-contain"}
        />
      </div>
      <span className="sr-only">{chip.label}</span>
    </div>
  );
}

export function IndustryChips({ heading = AI_INDUSTRIES_HEADING, chips = AI_INDUSTRY_CHIPS }: IndustryChipsProps = {}) {
  const last = chips.length - 1;
  return (
    <section className="relative overflow-hidden border-[#e1e1e1] border-b bg-[#f6f6f6] px-4 pt-10 pb-12 md:px-6 md:pt-14 md:pb-16 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1128px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1128px)/2))] lg:left-[max(64px,calc((100vw-1128px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1128px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100vw-1128px)/2))] lg:right-[max(64px,calc((100vw-1128px)/2))]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1128px] flex-col items-center gap-6">
        <h2 className="text-balance text-center font-medium font-mono text-[#191919] text-[34px] leading-none tracking-[-1.088px] md:text-[42px] md:tracking-[-1.344px] lg:text-[48px] lg:tracking-[-1.536px]">
          {heading}
        </h2>

        <div className="relative flex w-full justify-center py-12 md:py-14">
          <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />
          <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />

          <nav aria-label="Explore funding by industry" className="relative z-10 flex min-h-[184px] flex-wrap items-end justify-center gap-1.5 px-1 md:flex-nowrap md:gap-4">
            {chips.map((chip, i) => (
              <Link
                key={chip.href}
                href={chip.href}
                aria-label={`Explore ${chip.label} funding`}
                className={cn(
                  "group relative flex min-h-20 min-w-20 items-end justify-center rounded-[20px] outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6f6f6]",
                  i < last && "md:mr-3 lg:mr-4",
                )}
              >
                <span
                  aria-hidden
                  className="-translate-x-1/2 pointer-events-none absolute top-[-60px] left-1/2 z-20 translate-y-2 scale-95 whitespace-nowrap font-medium font-sans text-[12px] text-[#5c5c5c] uppercase leading-none tracking-[0.18em] opacity-0 blur-[2px] transition-[opacity,transform,filter,color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:text-[#1e3a8a] group-hover:opacity-100 group-hover:blur-0 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 group-focus-visible:blur-0 md:text-xs"
                >
                  {chip.label}
                </span>
                <div className="relative flex h-24 w-28 origin-bottom items-center justify-center rounded-[24px] px-2 transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.08] group-focus-visible:scale-[1.08]">
                  <ChipArt chip={chip} />
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
