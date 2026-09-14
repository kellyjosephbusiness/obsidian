import { LOAN_TYPE_DETAILS } from "@/components/sites/corgi-insure-a0f7893c/products/data";
import type { LoanTypeDetail } from "@/types/sites/corgi-insure-a0f7893c/products";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { StippleGlyph } from "@/components/sites/corgi-insure-a0f7893c/shared/StippleGlyph";
import { RATES } from "./data";

const BY_ID = new Map(LOAN_TYPE_DETAILS.map((detail) => [detail.id, detail] as const));

const ROWS: LoanTypeDetail[] = RATES.productIds
  .map((id) => BY_ID.get(id))
  .filter((detail): detail is LoanTypeDetail => detail !== undefined);

/**
 * "Estimated rates, before you apply." — the core products with their typical starting rate, term
 * and speed to fund, drawn from products/LOAN_TYPE_DETAILS. A table from md up, stacked cards on
 * phones, with the standard illustrative-figures footnote and the "Apply now" button.
 */
export function RatesSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-14 md:px-6 md:py-20 lg:px-16"
      aria-labelledby="rates-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1600px)/2))] lg:left-[max(64px,calc((100vw-1600px)/2))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[max(16px,calc((100vw-1600px)/2))] w-px bg-[#e1e1e1] md:right-[max(24px,calc((100vw-1600px)/2))] lg:right-[max(64px,calc((100vw-1600px)/2))]"
      />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 md:gap-10 md:px-6">
        <div className="flex flex-col gap-4">
          <h2
            id="rates-heading"
            className="max-w-[20ch] font-medium font-mono text-[#191919] text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-tracking)] [text-wrap:balance]"
          >
            {RATES.heading}
          </h2>
          <p className="max-w-[640px] text-body-large text-[#4a4a4a]">{RATES.sub}</p>
        </div>

        {/* Phones: one card per product. */}
        <ul className="flex flex-col gap-4 md:hidden">
          {ROWS.map((row) => (
            <li
              key={row.id}
              className="flex flex-col gap-4 rounded-[8px] border border-[#e1e1e1] bg-white p-5 shadow-[0_0_24px_0_rgba(25,25,25,0.05)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-[8px] border border-[#dde4f6] bg-[#f6f8ff] text-[#1e3a8a]">
                  <StippleGlyph name={row.icon} size={28} sizes="28px" />
                </span>
                <span className="font-mono text-[17px] font-medium leading-[1.2] tracking-[-0.02em] text-[#191919]">{row.title}</span>
              </div>
              <dl className="grid grid-cols-1 gap-3">
                {[
                  { label: RATES.columns.rate, value: row.rate },
                  { label: RATES.columns.term, value: row.term },
                  { label: RATES.columns.speed, value: row.speed },
                ].map((cell) => (
                  <div key={cell.label} className="flex items-baseline justify-between gap-4 border-t border-[#f0f0f0] pt-3 first:border-0 first:pt-0">
                    <dt className="text-[13px] leading-[1.2] tracking-[-0.1px] text-[#5c5c5c]">{cell.label}</dt>
                    <dd className="text-right text-[15px] font-medium leading-[1.3] tracking-[-0.2px] text-[#191919]">{cell.value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>

        {/* md+: one table. */}
        <div className="hidden overflow-hidden rounded-[8px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">{RATES.heading}</caption>
            <thead>
              <tr className="border-b border-[#e1e1e1] bg-[#fafafa]">
                {[RATES.columns.product, RATES.columns.rate, RATES.columns.term, RATES.columns.speed].map((label, i) => (
                  <th
                    key={label}
                    scope="col"
                    className={`px-5 py-4 text-[13px] font-medium uppercase leading-none tracking-[0.06em] text-[#5c5c5c] lg:px-6 ${i === 0 ? "" : "whitespace-nowrap"}`}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.id} className="border-b border-[#f0f0f0] last:border-0">
                  <th scope="row" className="px-5 py-5 font-normal lg:px-6">
                    <span className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] border border-[#dde4f6] bg-[#f6f8ff] text-[#1e3a8a]">
                        <StippleGlyph name={row.icon} size={26} sizes="26px" />
                      </span>
                      <span className="font-mono text-[16px] font-medium leading-[1.2] tracking-[-0.02em] text-[#191919] lg:text-[18px]">
                        {row.title}
                      </span>
                    </span>
                  </th>
                  <td className="px-5 py-5 text-[15px] font-medium leading-[1.3] tracking-[-0.2px] text-[#191919] lg:px-6 lg:text-[16px]">
                    {row.rate}
                  </td>
                  <td className="px-5 py-5 text-[15px] leading-[1.3] tracking-[-0.2px] text-[#4a4a4a] lg:px-6 lg:text-[16px]">{row.term}</td>
                  <td className="px-5 py-5 text-[15px] leading-[1.3] tracking-[-0.2px] text-[#4a4a4a] lg:px-6 lg:text-[16px]">{row.speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[760px] text-[13px] leading-[1.45] tracking-[-0.2px] text-[#5c5c5c]">{RATES.footnote}</p>
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <PressableButton
              variant="primary"
              size="large"
              href={RATES.cta.href}
              className="w-full sm:w-fit"
              faceClassName="w-full gap-1"
              dataTrack="cta-homepage-rates"
            >
              {RATES.cta.label}
              <MaterialIcon name="arrow_forward" size={20} />
            </PressableButton>
            <a
              href={RATES.seeAll.href}
              className="inline-flex min-h-[44px] items-center justify-center whitespace-nowrap text-[16px] font-medium leading-[1.2] tracking-[-0.24px] text-[#1e3a8a] hover:underline"
            >
              {RATES.seeAll.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
