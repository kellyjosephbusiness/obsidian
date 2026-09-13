import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { BreadcrumbItem } from "@/types/sites/corgi-insure-a0f7893c/industry-ai";
import type { IndustryIconHeroContent } from "./types";

export interface IndustryIconHeroProps {
  content: IndustryIconHeroContent;
  breadcrumb: BreadcrumbItem[];
  dataTrack: string;
}

/**
 * Local variant of `ai-97ffa848/IndustryHero`: identical breadcrumb + centered 760px column, but the
 * 72px tile holds a Material Symbols glyph instead of the AI page's two stacked illustrations
 * (the shared hero only accepts image tiles).
 */
export function IndustryIconHero({ content, breadcrumb, dataTrack }: IndustryIconHeroProps) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto w-fit max-w-7xl px-6 pt-6">
        <ol className="flex items-center gap-1.5 text-[14px] leading-5 text-[#4e4e4e]">
          {breadcrumb.map((item, i) => (
            <Fragment key={item.label}>
              <li className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight aria-hidden className="size-3.5 shrink-0" strokeWidth={2} />}
                {item.href ? (
                  <Link href={item.href} className="hover:text-[#1d1d1d]">
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-[#1d1d1d]">{item.label}</span>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </nav>

      <section className="relative w-full overflow-hidden px-4 pt-36 pb-16 md:px-6 md:pt-48 md:pb-20 lg:px-16">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center">
          <div className="flex size-[72px] shrink-0 items-center justify-center">
            <MaterialIcon name={content.icon} size={64} weight={300} className="text-[#191919]" />
          </div>

          <h1 className="text-center font-medium font-mono text-[#191919] text-[40px] leading-none tracking-[-1.28px] md:text-[52px] md:tracking-[-1.66px] lg:text-[60px] lg:tracking-[-1.92px]">
            <span className="block">{content.headingLine1}</span>
            <span className="block">{content.headingLine2}</span>
          </h1>

          <p className="max-w-[620px] text-body-large text-[#4e4e4e]">{content.sub}</p>

          <PressableButton variant="primary" size="small" href={content.cta.href} className="w-fit" faceClassName="gap-1" dataTrack={dataTrack}>
            {content.cta.label}
            <MaterialIcon name={content.cta.icon} size={16} />
          </PressableButton>
        </div>
      </section>
    </>
  );
}
