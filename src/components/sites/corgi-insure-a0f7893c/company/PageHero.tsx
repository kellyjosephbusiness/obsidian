import type { ReactNode } from "react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { CompanyHeroContent } from "@/types/sites/corgi-insure-a0f7893c/company";
import { Rails } from "./SectionFrame";

export interface PageHeroProps {
  content: CompanyHeroContent;
  /** Optional row rendered under the CTAs (e.g. trust chips). */
  children?: ReactNode;
  dataTrack?: string;
}

/** Small uppercase pill used above headings (matches the not-found page's "Coming soon" chip). */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[4px] border border-[#e1e1e1] bg-white px-4 py-1.5 text-[12px] font-medium uppercase leading-[1.2] tracking-[0.08em] text-[#4a4a4a]">
      {children}
    </span>
  );
}

/**
 * Company page hero: clears the fixed header (`pt-[150px] md:pt-[176px]`), then a centered 760px column
 * with eyebrow pill, two-line F37 Bolton H1, body-large sub and up to two pressable CTAs.
 */
export function PageHero({ content, children, dataTrack }: PageHeroProps) {
  return (
    <section className="relative border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 pt-[150px] pb-16 md:px-6 md:pt-[176px] md:pb-20 lg:px-16">
      <Rails />
      <div className="relative mx-auto flex w-full max-w-[760px] flex-col items-center gap-6 text-center md:gap-8">
        {content.eyebrow ? <Eyebrow>{content.eyebrow}</Eyebrow> : null}
        <h1 className="font-mono font-medium text-[#191919] text-[length:var(--h1-font-size)] leading-[var(--h1-line-height)] tracking-[var(--h1-tracking)]">
          <span className="block">{content.headingLine1}</span>
          {content.headingLine2 ? <span className="block">{content.headingLine2}</span> : null}
        </h1>
        <p className="max-w-[640px] text-body-large text-[#4a4a4a]">{content.sub}</p>
        {content.primary || content.secondary ? (
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            {content.primary ? (
              <PressableButton variant="primary" size="large" href={content.primary.href} faceClassName="gap-1.5" dataTrack={dataTrack ? `${dataTrack}-primary` : undefined}>
                {content.primary.label}
                <MaterialIcon name="arrow_forward" size={20} />
              </PressableButton>
            ) : null}
            {content.secondary && content.secondary.href !== content.primary?.href ? (
              <PressableButton variant="white" size="large" href={content.secondary.href} dataTrack={dataTrack ? `${dataTrack}-secondary` : undefined}>
                {content.secondary.label}
              </PressableButton>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
