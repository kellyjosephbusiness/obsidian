import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { CoveragePackageGrid } from "./CoveragePackageGrid";
import type { CoveragePackage, PolicyPill } from "@/types/sites/corgi-insure-a0f7893c/home";
import { COVERAGE_PACKAGES, JOURNEY, POLICY_PILLS } from "./data";

/**
 * "Coverage Designed Around Your Startup’s Journey" — full-viewport section with
 * the four coverage-package cards (site: CoveragePackagesGrid) and the
 * "Click any [Policy] to see what it covers" hint row.
 */
export interface JourneySectionProps {
  heading?: string;
  sub?: string;
  packages?: CoveragePackage[];
  pills?: PolicyPill[];
}

export function JourneySection({ heading = JOURNEY.heading, sub = JOURNEY.sub, packages = COVERAGE_PACKAGES, pills = POLICY_PILLS }: JourneySectionProps = {}) {
  return (
    <section className="relative flex items-center overflow-clip border-[#e1e1e1] border-b bg-[#f6f6f6] px-4 py-16 md:min-h-[max(720px,100vh)] md:px-6 md:py-20 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100vw-1600px)/2))] lg:right-[max(64px,calc((100vw-1600px)/2))]"
      />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-4 md:-translate-y-[4vh] md:gap-6">
        <div className="flex flex-col gap-6 px-4 md:px-6">
          <h2 className="font-medium font-mono text-[#191919] text-[length:var(--h2-font-size)] leading-none tracking-[-0.032em]">
            {heading}
          </h2>
          <p className="text-body-large text-[#4a4a4a]">{sub}</p>
        </div>

        <CoveragePackageGrid packages={packages} pills={pills} />

        <div className="flex flex-wrap items-center justify-center gap-2 pt-4 text-[#1e3a8a]">
          <MaterialIcon name="info" size={20} className="shrink-0" />
          <span className="font-medium text-body">{JOURNEY.hint.before}</span>
          <a
            href={JOURNEY.hint.chipHref}
            className="inline-flex items-center justify-center rounded-[4px] bg-[#dde4f6] px-2 py-1 font-medium text-[#1e3a8a] text-[14px] leading-none transition-[background-color,transform] duration-300 hover:bg-[#c5d1f0]"
          >
            {JOURNEY.hint.chip}
          </a>
          <span className="font-medium text-body">{JOURNEY.hint.after}</span>
        </div>
      </div>
    </section>
  );
}
