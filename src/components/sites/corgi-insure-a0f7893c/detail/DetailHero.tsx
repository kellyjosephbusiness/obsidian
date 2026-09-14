import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { DetailPageContent } from "@/types/sites/corgi-insure-a0f7893c/detail";
import { Estimator } from "./Estimator";
import { Sup } from "./frame";

/**
 * Hero: tinted band, big two-line H1, sub with footnotes, CTA + rating badges, estimator card right.
 * The page's stipple illustration runs large and decorative behind the estimator column from `lg`
 * up; below `lg` it shrinks to a 72px mark above the H1 so it never pushes the estimator down.
 */
export function DetailHero({ page }: { page: DetailPageContent }) {
  const { hero } = page;
  return (
    <section className="relative overflow-hidden border-b border-[#e1e1e1] bg-[#dde4f6] px-4 pt-[140px] pb-12 md:px-6 md:pt-[168px] md:pb-16 lg:px-16 lg:pb-20">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-[14px] leading-5 text-[#4e4e4e]">
            {page.breadcrumb.map((item, i) => (
              <Fragment key={item.label}>
                {i > 0 && (
                  <li className="flex items-center">
                    <ChevronRight className="size-3.5" strokeWidth={2} />
                  </li>
                )}
                <li>
                  {item.href ? (
                    <Link href={item.href} className="hover:text-[#191919]">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-[#191919]">{item.label}</span>
                  )}
                </li>
              </Fragment>
            ))}
          </ol>
        </nav>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div className="flex flex-col gap-7">
            <Image
              alt=""
              aria-hidden
              src={page.art}
              width={220}
              height={220}
              priority
              className="h-[72px] w-[72px] object-contain object-left lg:hidden"
            />
            <h1 className="font-mono font-medium text-[#191919] text-[44px] leading-[0.98] tracking-[-0.032em] md:text-[60px] lg:text-[72px]">
              {hero.headingLine1}
              <br />
              {hero.accentLine2 !== false ? (
                <span className="homepage-hero-serif-font text-[#1e3a8a]">{hero.headingLine2}</span>
              ) : (
                hero.headingLine2
              )}
            </h1>
            <p className="max-w-[600px] text-[18px] leading-[1.45] tracking-[-0.27px] text-[#4a4a4a] md:text-[22px] md:tracking-[-0.33px]">
              <Sup text={hero.sub} />
            </p>
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              <PressableButton variant="primary" size="large" href={hero.cta.href} faceClassName="px-8 py-3.5 text-[18px] leading-[1.2] tracking-[-0.27px] text-white">
                {hero.cta.label}
              </PressableButton>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-0.5 text-[#1e3a8a]" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <MaterialIcon key={i} name="star" size={20} fill={1} />
                  ))}
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-mono text-[18px] font-medium text-[#191919]">{page.reviews.score}</span>
                  <span className="text-[12px] text-[#4a4a4a]">
                    {page.reviews.scoreLabel} · {page.reviews.countLabel}
                  </span>
                </span>
              </div>
            </div>
            <p className="max-w-[520px] text-[12px] leading-[1.35] tracking-[-0.18px] text-[#4a4a4a]">{hero.fineprint}</p>
          </div>
          <div className="relative lg:pt-6">
            <Image
              alt=""
              aria-hidden
              src={page.art}
              width={640}
              height={640}
              priority
              className="pointer-events-none absolute -top-[56px] right-[-48px] z-0 hidden h-[250px] w-[250px] object-contain object-top opacity-90 lg:block xl:-top-[64px] xl:right-[-64px] xl:h-[290px] xl:w-[290px]"
            />
            <div className="relative z-10">
              <Estimator estimator={hero.estimator} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
