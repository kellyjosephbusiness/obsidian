import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { BreadcrumbItem, IndustryHeroContent } from "@/types/sites/corgi-insure-a0f7893c/industry-ai";
import { AI_BREADCRUMB, AI_HERO } from "./data";

/**
 * Industry hero (site: /ai top section): breadcrumb trail (sits under the fixed header like the source),
 * then a centered 760px column — 72px illustration tile, two-line H1, sub paragraph and the primary CTA.
 */
export interface IndustryHeroProps {
  content?: IndustryHeroContent;
  breadcrumb?: BreadcrumbItem[];
}

export function IndustryHero({ content = AI_HERO, breadcrumb = AI_BREADCRUMB }: IndustryHeroProps = {}) {
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
          <div className="relative size-[72px] shrink-0">
            <div className="absolute inset-0">
              <Image alt="" src={content.tile.base} width={72} height={72} className="size-[72px] object-contain" priority />
            </div>
            <div className="absolute inset-0">
              <Image alt={content.tile.alt} src={content.tile.foreground} width={72} height={72} className="size-[72px] object-contain" priority />
            </div>
          </div>

          <h1 className="text-center font-medium font-mono text-[#191919] text-[40px] leading-none tracking-[-1.28px] md:text-[52px] md:tracking-[-1.66px] lg:text-[60px] lg:tracking-[-1.92px]">
            <span className="block">{content.headingLine1}</span>
            <span className="block">{content.headingLine2}</span>
          </h1>

          <p className="max-w-[620px] text-body-large text-[#4e4e4e]">{content.sub}</p>

          <PressableButton variant="primary" size="small" href={content.cta.href} className="w-fit" faceClassName="gap-1" dataTrack="cta-industry-ai-hero">
            {content.cta.label}
            <MaterialIcon name={content.cta.icon} size={16} />
          </PressableButton>
        </div>
      </section>
    </>
  );
}
