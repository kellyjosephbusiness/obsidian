import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { HeroContent } from "@/types/sites/corgi-insure-a0f7893c/products";
import { Rails } from "../directors-and-officers-f2860438/rails";

export const EYEBROW_CLASS =
  "rounded-full border border-[#e1e1e1] bg-white px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#4a4a4a]";

interface PageHeroProps {
  content: HeroContent;
  dataTrack?: string;
}

/**
 * Centered page hero: optional 72px icon tile or eyebrow chip, one/two-line H1, sub paragraph and
 * primary + optional secondary pressable. Clears the fixed header with the site's `pt-[150px]/[176px]`.
 */
export function PageHero({ content, dataTrack }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#e1e1e1] px-4 pt-[150px] pb-16 md:px-6 md:pt-[176px] md:pb-20 lg:px-16">
      <Rails width={1600} />
      <div className="relative mx-auto flex w-full max-w-[860px] flex-col items-center gap-6 text-center">
        {content.icon && (
          <div className="flex size-[72px] items-center justify-center rounded-[20px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
            <MaterialIcon name={content.icon} size={36} className="text-[#1e3a8a]" />
          </div>
        )}
        {content.eyebrow && <span className={EYEBROW_CLASS}>{content.eyebrow}</span>}
        <h1 className="font-mono font-medium text-[#191919] text-[length:var(--h1-font-size)] leading-[var(--h1-line-height)] tracking-[var(--h1-tracking)]">
          <span className="block">{content.headingLine1}</span>
          {content.headingLine2 && <span className="block">{content.headingLine2}</span>}
        </h1>
        <p className="max-w-[680px] text-body-large text-pretty text-[#4a4a4a]">{content.sub}</p>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
          <PressableButton variant="primary" size="large" href={content.primary.href} dataTrack={dataTrack}>
            {content.primary.label}
          </PressableButton>
          {content.secondary && content.secondary.href !== content.primary.href && (
            <PressableButton variant="white" size="large" href={content.secondary.href}>
              {content.secondary.label}
            </PressableButton>
          )}
        </div>
      </div>
    </section>
  );
}
