import Image from "next/image";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { ASSETS, LINKS, POLICIES, POLICIES_HEADER } from "./data";
import { PolicyCard } from "./PolicyCard";
import { SpecializedCoveragesStack } from "./SpecializedCoveragesStack";

const FLYING_DOG_LEFT = `${ASSETS}/images/flying-dog-left.webp`;
const FLYING_DOG_RIGHT = `${ASSETS}/images/flying-dog-right.webp`;

/**
 * "Explore Our Main Policies": heading + sub, a 1/2/3-column grid of the eight PolicyCards with the
 * SpecializedCoveragesStack in the last cell, the "Get insured" CTA, and the decorative flying dogs
 * (two small ones below lg, two large ones hanging off the section edges from lg up).
 */
export function PoliciesSection() {
  return (
    <section
      id="explore-coverages"
      className="relative overflow-hidden border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-16 md:px-6 md:py-20 lg:px-16"
    >
      {/* Flying dogs: mobile/tablet */}
      <div aria-hidden className="pointer-events-none absolute -left-6 bottom-[56px] z-10 block w-[100px] md:left-0 md:bottom-4 md:w-[130px] lg:hidden">
        <Image alt="" className="h-auto w-full object-contain" width={628} height={622} src={FLYING_DOG_LEFT} />
      </div>
      <div aria-hidden className="pointer-events-none absolute top-0 -right-4 z-10 block w-[100px] md:w-[130px] lg:hidden">
        <Image alt="" className="h-auto w-full object-contain" width={288} height={311} src={FLYING_DOG_RIGHT} />
      </div>
      {/* Flying dogs: desktop */}
      <div aria-hidden className="pointer-events-none absolute top-[60px] right-[-80px] z-10 hidden w-[180px] lg:block xl:right-[-90px] xl:w-[210px]">
        <Image alt="" className="h-auto w-full object-contain" width={288} height={311} src={FLYING_DOG_RIGHT} />
      </div>
      <div aria-hidden className="pointer-events-none absolute bottom-[100px] left-[-80px] z-10 hidden w-[180px] lg:block xl:left-[-90px] xl:w-[210px]">
        <Image alt="" className="h-auto w-full object-contain" width={628} height={622} src={FLYING_DOG_LEFT} />
      </div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-4 md:gap-6">
        {/* Vertical rails at the container edges, extended through the section padding */}
        <div aria-hidden className="pointer-events-none absolute -top-16 -bottom-16 left-0 z-[5] w-px bg-[#e1e1e1] md:-top-20 md:-bottom-20" />
        <div aria-hidden className="pointer-events-none absolute -top-16 -bottom-16 right-0 z-[5] w-px bg-[#e1e1e1] md:-top-20 md:-bottom-20" />

        <div className="flex flex-col gap-6 px-4 md:px-6">
          <h2 className="font-mono font-medium text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)]">
            {POLICIES_HEADER.heading}
          </h2>
          <p className="text-body-large">{POLICIES_HEADER.sub}</p>
        </div>

        <div className="flex flex-col gap-12">
          <div className="relative">
            {/* Full-bleed hairlines above and below the grid */}
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-screen max-w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
            <div aria-hidden className="pointer-events-none absolute left-1/2 bottom-0 h-px w-screen max-w-[2400px] -translate-x-1/2 bg-[#e1e1e1]" />
            <div className="relative z-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {POLICIES.map((policy) => (
                <PolicyCard key={policy.href} policy={policy} />
              ))}
              <div className="md:col-span-2 md:mx-auto md:w-[calc(50%-12px)] lg:col-span-1 lg:mx-0 lg:w-auto">
                <SpecializedCoveragesStack />
              </div>
            </div>
          </div>

          <PressableButton
            variant="orange"
            size="large"
            href={LINKS.signUp}
            className="relative z-20 mx-auto w-fit"
            dataTrack="cta-homepage-policies"
          >
            {POLICIES_HEADER.cta.label}
          </PressableButton>
        </div>
      </div>
    </section>
  );
}
