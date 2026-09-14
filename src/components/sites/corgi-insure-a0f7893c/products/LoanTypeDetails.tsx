import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { LoanTypeDetail } from "@/types/sites/corgi-insure-a0f7893c/products";
import { H2_CLASS, Hairlines, Rails } from "../directors-and-officers-f2860438/rails";
import { LINKS } from "../root-8a5edab2/data";
import { LOAN_TYPES_DETAILS_HEADER, LOAN_TYPE_DETAILS } from "./data";

const DASHED = "h-px w-full bg-[length:8px_1px] bg-repeat-x bg-[image:linear-gradient(to_right,#e1e1e1_4px,transparent_4px)]";

const SPECS: { key: keyof Pick<LoanTypeDetail, "amount" | "term" | "speed" | "bestFor">; label: string }[] = [
  { key: "amount", label: "AMOUNT" },
  { key: "term", label: "TERM" },
  { key: "speed", label: "SPEED TO FUND" },
  { key: "bestFor", label: "BEST FOR" },
];

/**
 * Anchored product cards (one `<article id>` per loan type — the nav deep-links to these).
 * Each card: the 1-bit stipple product illustration (above the title on phones, pinned to the
 * card's top-right corner from `md` up), icon square + title, summary, four squared spec tiles,
 * dashed rule, rate + CTAs.
 */
export function LoanTypeDetails({ items = LOAN_TYPE_DETAILS }: { items?: LoanTypeDetail[] } = {}) {
  return (
    <section id="details" className="relative scroll-mt-[120px] border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col items-center gap-6 px-4 text-center md:px-6">
          <h2 className={H2_CLASS}>{LOAN_TYPES_DETAILS_HEADER.heading}</h2>
          <p className="mx-auto max-w-[560px] text-body-large text-[#4a4a4a]">{LOAN_TYPES_DETAILS_HEADER.sub}</p>
        </div>
        <div className="relative">
          <Hairlines zIndex="z-0" />
          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="flex scroll-mt-[120px] flex-col gap-5 rounded-[8px] border border-[#e1e1e1] bg-white p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-5">
                  <div className="relative order-1 h-[120px] w-full shrink-0 md:order-2 md:w-[140px]">
                    <Image
                      alt=""
                      aria-hidden
                      src={item.image}
                      fill
                      sizes="160px"
                      className="pointer-events-none object-contain opacity-90 md:object-right-top"
                    />
                  </div>
                  <div className="order-2 flex min-w-0 items-center gap-3 md:order-1 md:flex-1 md:pt-1">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-[#DDEAFE]">
                      <MaterialIcon name={item.icon} size={24} className="text-[#0160CC]" />
                    </div>
                    <h3 className="text-[20px] font-bold leading-none tracking-[-0.64px] text-[#191919] md:text-[24px] md:tracking-[-0.77px]">{item.title}</h3>
                  </div>
                </div>
                <p className="text-[14px] leading-[1.3] tracking-[-0.21px] text-[#4a4a4a] md:text-[16px] md:tracking-[-0.24px]">{item.summary}</p>
                <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {SPECS.map((spec) => (
                    <div key={spec.key} className="flex flex-col gap-1 rounded-[4px] border border-[#e1e1e1] bg-[#f9f9f9] px-3 py-2.5">
                      <dt className="text-[12px] font-medium uppercase leading-[1.2] tracking-[0.06em] text-[#606060]">{spec.label}</dt>
                      <dd className="text-[14px] font-bold leading-[1.25] tracking-[-0.21px] text-[#191919]">{item[spec.key]}</dd>
                    </div>
                  ))}
                </dl>
                <div className={DASHED} />
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[14px] font-medium leading-[1.2] tracking-[-0.21px] text-[#0160CC]">{item.rate}</span>
                  <div className="flex items-center gap-4">
                    {item.href && (
                      <Link href={item.href} className="text-[14px] font-medium leading-[1.2] tracking-[-0.21px] text-[#4a4a4a] hover:text-[#0160CC] hover:underline">
                        Learn more
                      </Link>
                    )}
                    <PressableButton
                      variant="primary"
                      size="small"
                      href={LINKS.apply}
                      dataTrack={`cta-loan-types-${item.id}`}
                    >
                      Apply now
                    </PressableButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
