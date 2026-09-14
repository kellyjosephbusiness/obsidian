import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { CoveragePackage, PolicyPill } from "@/types/sites/corgi-insure-a0f7893c/home";
import { COVERAGE_PACKAGES, JOURNEY, POLICY_PILLS } from "./data";

/**
 * Width of the card header's padding box at the desktop reference width
 * (310px card − 2 × 1px border). Art is positioned with `left` values measured
 * against this box; we convert them to `right` offsets so the art stays anchored
 * to the card's right edge at every card width (358px on mobile, 348px on tablet).
 */
const DESKTOP_HEADER_INNER_WIDTH = 308;

const PILL_CLASS =
  "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[4px] bg-[#dde4f6] px-2 py-1 font-medium text-[#1e3a8a] text-[12px] leading-none transition-[background-color,transform] duration-300 ease-out hover:rotate-[8deg] hover:bg-[#c5d1f0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a8a] active:bg-[#b7c5ec]";

/** Keeps the last two words together (no-orphan text helper). */
function NoOrphan({ text }: { text: string }): ReactNode {
  const i = text.lastIndexOf(" ");
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      {" "}
      {text.slice(i + 1)}
    </>
  );
}

/** One product pill: a link to the product page (its one-line description is the tooltip). */
function PolicyChip({ policy }: { policy: PolicyPill }) {
  return (
    <Link href={policy.href} title={policy.description} className={PILL_CLASS}>
      {policy.label}
    </Link>
  );
}

interface CoveragePackageCardProps {
  pkg: CoveragePackage;
  pills: PolicyPill[];
}

function CoveragePackageCard({ pkg, pills }: CoveragePackageCardProps) {
  const policies = pkg.policies
    .map((label) => pills.find((p) => p.label === label))
    .filter((p): p is PolicyPill => p !== undefined);

  // Keep the final two pills (plus the "+" link) in a shrink-0 group so they wrap together.
  const tailStart = Math.max(0, policies.length - 2);
  const headChips = policies.slice(0, tailStart);
  const tailChips = policies.slice(tailStart);

  const { art } = pkg;
  const artRight = DESKTOP_HEADER_INNER_WIDTH - art.wrapper.left - art.wrapper.width;

  return (
    <div className="flex h-full flex-col overflow-clip rounded-[8px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
      {/* Header: title + art */}
      <div className="-mx-px -mt-px relative flex h-[160px] flex-col justify-end gap-3 overflow-clip rounded-[8px] border border-[#e1e1e1] bg-white p-5 shadow-[0_0_24px_0_rgba(25,25,25,0.35)]">
        <div
          aria-hidden
          className="pointer-events-none absolute flex items-center justify-center"
          style={{ top: art.wrapper.top, right: artRight, width: art.wrapper.width, height: art.wrapper.height }}
        >
          <div style={{ transform: art.transform, width: art.width, height: art.height }}>
            <Image
              alt=""
              src={art.src}
              width={art.width}
              height={art.height}
              quality={60}
              className={art.objectFit === "cover" ? "object-cover" : "object-contain"}
              style={{ width: art.width, height: art.height, filter: "hue-rotate(195deg) saturate(0.85)" }}
            />
          </div>
        </div>
        <div className="relative flex flex-col items-start gap-3">
          <h3 className="font-mono text-[24px] text-[#191919] leading-none tracking-[-1.024px] md:text-[32px]">{pkg.title}</h3>
          <p className="font-medium text-[#4a4a4a] text-[14px] leading-[1.2] tracking-[-0.21px] [text-wrap:balance]">
            <NoOrphan text={pkg.description} />
          </p>
        </div>
      </div>

      {/* Body: intro + product pills */}
      <div className="flex flex-1 flex-col border-[#e1e1e1] border-b p-5">
        <p className="text-center font-medium text-[#4a4a4a] text-[12px] [text-wrap:balance]">
          <NoOrphan text={pkg.pillsIntro} />
        </p>
        <div className="mt-3 flex flex-wrap items-start justify-center gap-3">
          {headChips.map((policy) => (
            <PolicyChip key={policy.label} policy={policy} />
          ))}
          <span className="inline-flex shrink-0 items-start gap-3" data-policy-tail-group>
            {tailChips.map((policy) => (
              <PolicyChip key={policy.label} policy={policy} />
            ))}
            {pkg.morePoliciesHref && (
              <Link href={pkg.morePoliciesHref} aria-label="See all loan types" title="See all loan types" className={PILL_CLASS}>
                +
              </Link>
            )}
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="p-3">
        <PressableButton
          className="w-full"
          faceClassName="w-full gap-1 text-body"
          href={pkg.ctaHref}
          size="small"
          variant={pkg.ctaVariant}
          dataTrack="cta-homepage-package"
        >
          <span className="inline-flex items-center whitespace-nowrap">{JOURNEY.ctaLabel}</span>
          <MaterialIcon name={pkg.ctaIcon} size={16} />
        </PressableButton>
      </div>
    </div>
  );
}

interface CoveragePackageGridProps {
  packages?: CoveragePackage[];
  pills?: PolicyPill[];
}

/**
 * The four funding-package cards. Each product pill links to that product's page and the
 * "+" pill to the full loan-types list.
 */
export function CoveragePackageGrid({ packages = COVERAGE_PACKAGES, pills = POLICY_PILLS }: CoveragePackageGridProps) {
  return (
    <div className="relative">
      <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />
      <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 h-px w-screen bg-[#e1e1e1]" />
      {/*
        Phones: a horizontal scroll-snap rail (one ~85vw card per snap, bleeding to the viewport
        edges via the negative margin). md and up: the original 2/4-column grid.
      */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-4 px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="w-[85vw] max-w-[360px] shrink-0 snap-start md:w-auto md:max-w-none md:shrink">
            <CoveragePackageCard pkg={pkg} pills={pills} />
          </div>
        ))}
      </div>
    </div>
  );
}
