import Link from "next/link";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { FORM_CODE, HERO } from "./data";

/** Grey placeholder bars of the agreement mock (widths from the source tree). */
function Bars({ scale }: { scale: "sm" | "lg" }) {
  const h = scale === "lg" ? "h-[17px]" : "h-[12px] sm:h-[13px]";
  const tall = scale === "lg" ? "h-[38px]" : "h-[26px] sm:h-[28px]";
  const gap = scale === "lg" ? "gap-[15px]" : "gap-[10px]";
  return (
    <>
      <div className={`flex w-full ${gap}`}>
        <div className={`${tall} w-[114px] bg-[#ddd]`} />
        <div className={`${tall} flex-1 bg-[#ddd]`} />
      </div>
      <div className={`flex w-full ${gap}`}>
        <div className={`${h} flex-1 bg-[#ddd]`} />
        <div className={`${h} w-[172px] bg-[#ddd]`} />
      </div>
      <div className={`flex w-full ${gap}`}>
        <div className={`${h} w-[110px] bg-[#ddd]`} />
        <div className={`${h} flex-1 bg-[#ddd]`} />
      </div>
      <div className={`${h} w-full bg-[#ddd]`} />
      <div className={`${h} w-full bg-[#ddd]`} />
    </>
  );
}

/**
 * Product hero (site: /directors-and-officers top): breadcrumb, then a left column (H1, intro,
 * reviewed line, CTA) with the tilted agreement mock hanging off the bottom-right on xl and a
 * smaller centered mock below the copy on narrower viewports.
 */
export function ProductHero() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto w-fit max-w-7xl px-6 pt-6">
        <ol className="flex items-center gap-1.5 text-[14px] leading-5 text-[#4e4e4e]">
          {HERO.breadcrumb.map((item, i) => (
            <Fragment key={item.label}>
              {i > 0 && (
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5 shrink-0" strokeWidth={2} />
                </li>
              )}
              <li className="flex items-center gap-1.5">
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

      <section className="relative overflow-hidden px-4 pt-40 pb-6 md:px-6 md:pt-48 lg:min-h-[428px] lg:px-16">
        <div className="relative mx-auto max-w-[1600px]">
          <div className="flex w-full flex-col gap-9 lg:max-w-[640px] xl:max-w-[760px] 2xl:max-w-[983px]">
            <h1 className="font-mono font-medium text-[#191919] text-[36px] leading-none tracking-[-1.152px] md:text-[44px] md:tracking-[-1.408px] lg:text-[44px] xl:text-[48px] xl:tracking-[-1.536px] 2xl:text-[60px] 2xl:tracking-[-1.92px]">
              {HERO.heading}
            </h1>
            <p className="text-body-large text-[#4a4a4a] lg:text-[16px] lg:tracking-[-0.24px] xl:text-[18px] xl:tracking-[-0.27px] 2xl:text-[20px] 2xl:tracking-[-0.3px]">
              {HERO.intro}
            </p>
            <p className="text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">{HERO.reviewed}</p>
            <PressableButton variant="primary" size="small" href={HERO.cta.href} className="self-start" dataTrack="cta-term-loans-hero">
              <span className="inline-flex items-center gap-1">
                {HERO.cta.label}
                <MaterialIcon name="arrow_forward" size={20} />
              </span>
            </PressableButton>
          </div>

          {/* Agreement mock: < xl */}
          <div aria-hidden className="pointer-events-none relative mx-auto mt-10 h-[180px] w-full max-w-[340px] sm:h-[220px] sm:max-w-[400px] xl:hidden">
            <div className="absolute top-0 left-0 flex h-[210px] w-[290px] items-center justify-center sm:h-[240px] sm:w-[340px]">
              <div className="h-[190px] w-[270px] -rotate-[3.96deg] bg-white shadow-[0_0_18px_0_rgba(25,25,25,0.25)] sm:h-[220px] sm:w-[320px]" />
            </div>
            <div className="absolute top-[26px] right-0 flex h-[244px] w-[290px] flex-col items-start gap-[10px] overflow-hidden bg-white p-[26px] shadow-[0_0_18px_0_rgba(25,25,25,0.25)] sm:h-[280px] sm:w-[340px] sm:gap-3">
              <div className="w-full text-left font-medium text-[24px] leading-none tracking-[-0.77px] text-[#b2b2b2] sm:text-[28px] sm:tracking-[-0.9px]">{FORM_CODE}</div>
              <div className="h-px w-full bg-[#e1e1e1]" />
              <Bars scale="sm" />
            </div>
          </div>

          {/* Agreement mock: xl+ (hangs off the bottom-right of the hero) */}
          <div aria-hidden className="pointer-events-none absolute right-[43px] -bottom-[160px] hidden h-[336px] w-[546px] items-center justify-center xl:flex">
            <div className="h-[300px] w-[526px] -rotate-[3.96deg] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.25)]" />
          </div>
          <div aria-hidden className="pointer-events-none absolute right-6 -bottom-[120px] hidden h-[340px] w-[526px] flex-col items-start gap-[15px] overflow-hidden bg-white p-[37px] shadow-[0_0_24px_0_rgba(25,25,25,0.25)] xl:flex">
            <div className="w-full text-left font-medium text-[37px] leading-none tracking-[-1.19px] text-[#b2b2b2]">{FORM_CODE}</div>
            <div className="h-px w-full bg-[#e1e1e1]" />
            <Bars scale="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
