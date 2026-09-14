import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { StagePackage } from "@/types/sites/corgi-insure-a0f7893c/startup-loans";
import { PACKAGES_HEADER, PRODUCT_LINKS, STAGE_PACKAGES } from "./data";

/** Top/bottom fade of the section background (site: pointer-events-none inset-0 overlay). */
const SECTION_FADE =
  "linear-gradient(rgb(246,246,246) 0%, rgba(0,0,0,0) 21%), linear-gradient(rgba(0,0,0,0) 71%, rgb(246,246,246) 98%)";

const CHIP_CLASS =
  "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[4px] bg-[#dde4f6] px-2 py-1 font-medium text-[#1e3a8a] text-[12px] leading-none transition-[background-color,transform] duration-300 ease-out hover:rotate-[8deg] hover:bg-[#c5d1f0]";

function ProductChip({ label }: { label: string }) {
  return (
    <Link href={PRODUCT_LINKS[label] ?? "/loan-types"} className={CHIP_CLASS}>
      {label}
    </Link>
  );
}

/** "Best for:" + paragraph, rendered beside the card (lg) and inside it (below lg). */
function StageText({ pkg, className }: { pkg: StagePackage; className: string }) {
  return (
    <div className={className}>
      <div className="w-full lg:max-w-[434px]">
        <p className="font-medium leading-[1.2] text-[#191919]">
          {PACKAGES_HEADER.bestForLabel} {pkg.bestFor}
        </p>
      </div>
      <div className="w-full lg:max-w-[434px]">
        <p className="leading-[1.2] text-[#4a4a4a]">{pkg.description}</p>
      </div>
    </div>
  );
}

function StageCard({ pkg, className }: { pkg: StagePackage; className: string }) {
  const { art } = pkg;
  return (
    <div className={`flex w-full flex-1 flex-col overflow-clip rounded-[8px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)] ${className}`}>
      {/* Header: art + title (160px below lg, 200px from lg) */}
      <div className="-mx-px -mt-px relative flex h-[160px] flex-col justify-end gap-3 overflow-clip rounded-[8px] border border-[#e1e1e1] bg-white p-5 shadow-[0_0_24px_0_rgba(25,25,25,0.35)] lg:h-[200px]">
        <div
          aria-hidden
          className="pointer-events-none absolute flex items-center justify-center"
          style={{ top: art.wrapper.top, bottom: art.wrapper.bottom, right: art.wrapper.right, width: art.wrapper.width, height: art.wrapper.height }}
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
          <p className="font-medium text-[#4a4a4a] text-[14px] leading-[1.2] tracking-[-0.21px]">{pkg.tagline}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="border-[#e1e1e1] border-b p-3">
        <PressableButton
          className="w-full"
          faceClassName="w-full gap-1"
          href={pkg.cta.href}
          size="small"
          variant={pkg.cta.variant}
          dataTrack={`cta-startup-package-${pkg.id}`}
        >
          <span className="inline-flex items-center whitespace-nowrap">{pkg.cta.label}</span>
          <MaterialIcon name={pkg.cta.icon} size={16} />
        </PressableButton>
      </div>

      {/* Checklist table or pill cloud */}
      {pkg.lines ? (
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between px-1 text-[#4a4a4a] text-[12px] leading-[1.5]">
            <span>{PACKAGES_HEADER.tableHead.what}</span>
            <span>{PACKAGES_HEADER.tableHead.product}</span>
          </div>
          {pkg.lines.map((line) => (
            <div key={line.product} className="flex items-center">
              <div className="flex flex-1 items-center gap-1.5 rounded-[4px] bg-[#f6f6f6] py-1 pr-2 pl-1.5">
                <MaterialIcon name="check" size={14} className="shrink-0 text-[#4a4a4a]" />
                <span className="flex-1 font-medium text-[#4a4a4a] text-[12px] leading-tight">{line.text}</span>
              </div>
              <div aria-hidden className="h-px w-2 bg-[#1e3a8a]" />
              <ProductChip label={line.product} />
            </div>
          ))}
        </div>
      ) : pkg.pillCloud ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-5 pt-5 pb-16 text-center">
          <p className="font-medium text-[#4a4a4a] text-[12px] leading-[18px]">{pkg.pillCloud.intro}</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {pkg.pillCloud.products.map((label) => (
              <ProductChip key={label} label={label} />
            ))}
            <Link href={pkg.pillCloud.moreHref} className={CHIP_CLASS}>
              +
            </Link>
          </div>
        </div>
      ) : null}

      {/* Below lg the text block lives inside the card */}
      <StageText pkg={pkg} className="flex flex-col gap-[10px] border-[#e1e1e1] border-t bg-white p-3 text-body lg:hidden" />
    </div>
  );
}

/**
 * "Scalable Startup Funding Packages & Customizable Financing Solutions": heading + sub, then
 * four full-width rows (1200px container with rails) alternating text|card and card|text from lg.
 * Each row has full-bleed hairlines at its top and bottom edges.
 */
export function StagePackages({ packages = STAGE_PACKAGES }: { packages?: StagePackage[] } = {}) {
  return (
    <section className="relative overflow-hidden border-[#e1e1e1] border-t px-4 py-16 md:px-6 lg:px-16">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: SECTION_FADE }} />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-6">
        <div aria-hidden className="pointer-events-none absolute -top-16 -bottom-16 left-0 w-px bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute -top-16 -bottom-16 right-0 w-px bg-[#e1e1e1]" />

        <div className="flex flex-col gap-6 px-4 md:px-6">
          <h2 className="font-medium font-mono text-[#191919] text-[length:var(--h2-font-size)] leading-none tracking-[-0.032em]">
            {PACKAGES_HEADER.headingLine1}
            <br className="hidden lg:block" /> {PACKAGES_HEADER.headingLine2}
          </h2>
          <p className="text-[#4a4a4a] text-[18px] leading-[1.2] tracking-[-0.3px] lg:text-[20px]">{PACKAGES_HEADER.sub}</p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-6">
          {packages.map((pkg, i) => {
            const textLeft = i % 2 === 0;
            return (
              <div key={pkg.id} id={pkg.id} className="relative flex flex-col lg:flex-row">
                <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-px w-[200vw] bg-[#e1e1e1]" />
                <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 h-px w-[200vw] bg-[#e1e1e1]" />
                <StageText
                  pkg={pkg}
                  className={`hidden w-full flex-1 flex-col items-center justify-center gap-[10px] p-2 text-body lg:flex ${textLeft ? "lg:order-1" : "lg:order-2"}`}
                />
                <StageCard pkg={pkg} className={textLeft ? "lg:order-2" : "lg:order-1"} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
