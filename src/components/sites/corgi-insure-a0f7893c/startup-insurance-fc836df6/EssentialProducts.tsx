import Image from "next/image";
import Link from "next/link";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { Policy, SpecializedCoverage } from "@/types/sites/corgi-insure-a0f7893c/home";
import { POLICIES, SPECIALIZED_COVERAGES } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/data";
import { ESSENTIAL_HEADER } from "./data";

const SECTION_FADE =
  "linear-gradient(rgb(246,246,246) 0%, rgba(0,0,0,0) 21%), linear-gradient(rgba(0,0,0,0) 71%, rgb(246,246,246) 98%)";

const BADGE_GRADIENT = "bg-[linear-gradient(to_right,#f66398_0%,#fb846c_61%,#fe9850_100%)]";

const CELL_TITLE = "font-mono text-[#191919] text-[20px] leading-none tracking-tight md:text-[22px] lg:text-[24px]";

/** Rounded hairline "table": a label row on top and a 1/2/3-column gap-px grid below. */
function ProductTable({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative flex w-full flex-col">
      <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-px w-[200vw] bg-[#e1e1e1]" />
      <div className="relative flex flex-col overflow-hidden rounded-3xl border border-[#e1e1e1]">
        <div className="px-4 py-2 lg:px-6 lg:py-3">
          <span className="text-[#4a4a4a] text-[12px] uppercase leading-[18px] tracking-tight">{label}</span>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-t-[23px] border-[#e1e1e1] border-t bg-[#e1e1e1] md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
      <div aria-hidden className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 h-px w-[200vw] bg-[#e1e1e1]" />
    </div>
  );
}

/** One instant-offer product: image header with the gradient badge, title, description and "Learn more". */
function ProductListCell({ policy }: { policy: Policy }) {
  return (
    <Link href={policy.href} className="group flex flex-col bg-white transition-colors hover:bg-gray-50">
      <div className="relative flex h-[120px] items-start p-3">
        <Image alt={policy.title} src={policy.image} fill sizes="436px" className="pointer-events-none object-contain" />
        <div className={`relative z-10 flex items-center justify-center rounded-[12px] px-3 py-1.5 ${BADGE_GRADIENT}`}>
          <span className="text-[12px] text-white leading-[1.2] tracking-[-0.18px]">{ESSENTIAL_HEADER.instant.badge}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 border-[#e1e1e1] border-t p-3 lg:p-5">
        <h3 className={CELL_TITLE}>{policy.title}</h3>
        <p className="text-body text-[#4e4e4e]">{policy.description}</p>
        <span className="mt-auto pt-4 font-medium text-[#1e3a8a] text-[14px] leading-[1.5] tracking-[-0.24px] group-hover:underline">
          {ESSENTIAL_HEADER.instant.learnMore}
        </span>
      </div>
    </Link>
  );
}

function SpecialtyCell({ item }: { item: SpecializedCoverage }) {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-1 flex-col gap-2 p-3 lg:p-5">
        <div className="mb-4 flex">
          <div className="flex items-center justify-center rounded-[12px] border border-[#e1e1e1] bg-[#f6f6f6] px-3 py-1.5">
            <span className="text-[#4a4a4a] text-[12px] leading-[1.2] tracking-[-0.18px]">{ESSENTIAL_HEADER.specialty.turnaround}</span>
          </div>
        </div>
        <h3 className={CELL_TITLE}>{item.title}</h3>
        <p className="text-body text-[#4e4e4e]">{item.desc}</p>
      </div>
    </div>
  );
}

/**
 * "Essential Funding for All Growth Stages": two labelled hairline tables inside a 1600px
 * container with rails — the 8 instant-offer products (list variant of the home PolicyCard)
 * plus a primary CTA, then the 12 specialty products plus a white CTA.
 */
export interface EssentialProductsProps {
  policies?: Policy[];
  specialized?: SpecializedCoverage[];
}

export function EssentialProducts({ policies = POLICIES, specialized = SPECIALIZED_COVERAGES }: EssentialProductsProps = {}) {
  const { instant, specialty } = ESSENTIAL_HEADER;
  return (
    <section className="relative overflow-hidden border-[#e1e1e1] border-y px-4 py-16 md:px-6 lg:px-16">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: SECTION_FADE }} />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-6">
        <div aria-hidden className="pointer-events-none absolute -top-16 -bottom-16 left-0 w-px bg-[#e1e1e1]" />
        <div aria-hidden className="pointer-events-none absolute -top-16 -bottom-16 right-0 w-px bg-[#e1e1e1]" />

        <div className="flex flex-col gap-6 px-4 md:px-6">
          <h2 className="font-medium font-mono text-[#191919] text-[length:var(--h2-font-size)] leading-none tracking-[-0.032em]">
            {ESSENTIAL_HEADER.heading}
          </h2>
          <p className="text-[#4a4a4a] text-[18px] leading-[1.2] tracking-[-0.3px] lg:text-[20px]">{ESSENTIAL_HEADER.sub}</p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-6 pb-16 lg:gap-12">
            <ProductTable label={instant.label}>
              {policies.map((policy) => (
                <ProductListCell key={policy.href} policy={policy} />
              ))}
              <div aria-hidden className="hidden bg-white lg:block" />
            </ProductTable>
            <PressableButton variant="primary" size="large" href={instant.cta.href} dataTrack="cta-startup-instant">
              {instant.cta.label}
            </PressableButton>
          </div>

          <div id={specialty.id} className="flex flex-col items-center gap-6 lg:gap-12">
            <ProductTable label={specialty.label}>
              {specialized.map((item) => (
                <SpecialtyCell key={item.title} item={item} />
              ))}
            </ProductTable>
            <PressableButton variant="white" size="large" href={specialty.cta.href} dataTrack="cta-startup-specialty">
              {specialty.cta.label}
            </PressableButton>
          </div>
        </div>
      </div>
      <div id={`${specialty.id}-bottom`} className="mx-auto w-full max-w-[1600px]" />
    </section>
  );
}
