import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { Cta } from "@/types/sites/corgi-insure-a0f7893c/products";
import { Hairlines, Rails } from "../directors-and-officers-f2860438/rails";

interface CtaSectionProps {
  heading: string;
  sub: string;
  primary: Cta;
  secondary?: Cta;
  dataTrack?: string;
}

/** Inline black CTA card: heading, sub and primary + white pressables. */
export function CtaSection({ heading, sub, primary, secondary, dataTrack }: CtaSectionProps) {
  return (
    <section className="relative border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto max-w-[1200px]">
        <Hairlines zIndex="z-0" />
        <div className="relative z-10 flex flex-col items-center gap-8 rounded-[24px] bg-[#191919] px-6 py-12 text-center md:px-12 md:py-16">
          <div className="flex max-w-[720px] flex-col gap-4">
            <h2 className="font-mono font-medium text-white text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]">{heading}</h2>
            <p className="text-body-large text-[#ddd]">{sub}</p>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
            <PressableButton variant="primary" size="large" href={primary.href} dataTrack={dataTrack}>
              {primary.label}
            </PressableButton>
            {secondary && secondary.href !== primary.href && (
              <PressableButton variant="white" size="large" href={secondary.href}>
                {secondary.label}
              </PressableButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
