import Image from "next/image";
import Link from "next/link";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { BREADCRUMBS, STARTUP_HERO } from "./data";

/**
 * Breadcrumb + hero (site: startup-insurance hero). The breadcrumb sits in the first 44px of the
 * document, i.e. underneath the fixed header, exactly as on the source page. The hero is a
 * left-aligned 768px text column over a full-bleed cloud image that fades to the page grey
 * from the left (gradient-to-l, 70%).
 */
export function StartupHero() {
  const last = BREADCRUMBS.length - 1;
  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto w-fit max-w-7xl px-6 pt-6">
        <ol className="flex items-center gap-1.5 text-[14px] leading-[20px] text-[#4e4e4e]">
          {BREADCRUMBS.map((crumb, i) => (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg aria-hidden viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              )}
              {crumb.href && i !== last ? (
                <Link href={crumb.href} className="hover:text-[#1d1d1d]">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-[#1d1d1d]">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <section className="relative flex w-full flex-col items-start justify-center overflow-hidden px-4 pt-[170px] pb-16 md:px-6 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image alt="" src={STARTUP_HERO.cloud} fill sizes="100vw" priority className="max-w-none object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-[rgba(246,246,246,0)] to-[#f6f6f6] to-[70%]" />
        </div>

        <div className="relative z-20 mx-auto flex w-full max-w-[1600px] flex-col gap-12">
          <div className="flex max-w-3xl flex-col gap-6 px-4 md:px-6">
            <h1 className="font-medium font-mono text-[#191919] text-[length:var(--h1-font-size)] leading-none tracking-[-0.032em]">
              {STARTUP_HERO.heading}
            </h1>
            <p className="max-w-lg text-body-large text-[#4a4a4a]">{STARTUP_HERO.sub}</p>
            <PressableButton variant="primary" size="small" href={STARTUP_HERO.cta.href} className="self-start" dataTrack="cta-startup-hero">
              {STARTUP_HERO.cta.label}
            </PressableButton>
          </div>
        </div>
      </section>
    </>
  );
}
