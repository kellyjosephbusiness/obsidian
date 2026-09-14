import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { CtaBandContent } from "@/types/sites/corgi-insure-a0f7893c/company";
import { DEFAULT_CTA } from "./data";
import { Rails } from "./SectionFrame";

/**
 * Closing call to action: a dark `#313131` rounded card inside the 1600 rails (same surface as the home
 * intro card) with a two-line heading, sub and primary + white pressable buttons.
 */
export function CtaBand({ content = DEFAULT_CTA, dataTrack }: { content?: CtaBandContent; dataTrack?: string }) {
  return (
    <section className="relative border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="relative overflow-hidden rounded-[8px] bg-[#313131] px-6 py-12 text-white md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(closest-side, rgba(142,166,240,0.55), rgba(49,49,49,0))" }}
          />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="flex max-w-[760px] flex-col gap-4 md:gap-6">
              <h2 className="font-mono font-medium text-white text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]">
                <span className="block">{content.headingLine1}</span>
                <span className="block text-[#8ea6f0]">{content.headingLine2}</span>
              </h2>
              <p className="text-body-large" style={{ color: "#d9d9d9" }}>{content.sub}</p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              {content.secondary.href !== content.primary.href && (
                <PressableButton variant="white" size="large" href={content.secondary.href} dataTrack={dataTrack ? `${dataTrack}-secondary` : undefined}>
                  {content.secondary.label}
                </PressableButton>
              )}
              <PressableButton variant="primary" size="large" href={content.primary.href} dataTrack={dataTrack ? `${dataTrack}-primary` : undefined}>
                {content.primary.label}
              </PressableButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
