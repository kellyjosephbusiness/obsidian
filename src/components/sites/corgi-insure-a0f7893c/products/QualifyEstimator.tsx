"use client";

import { useMemo, useState } from "react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { H2_CLASS, Hairlines, Rails } from "../directors-and-officers-f2860438/rails";
import { CREDIT_BANDS, QUALIFY_CALC, TENURE_OPTIONS } from "./data";
import { Field, FORM_CARD_CLASS, INPUT_CLASS, SelectInput, usd } from "./FormPrimitives";

const MIN_OFFER = 5_000;
const MAX_OFFER = 5_000_000;
/** Typical short-term products size to ~15% of annual revenue before tenure/credit adjustments. */
const REVENUE_SHARE = 0.15;

interface Estimate {
  low: number;
  high: number;
  products: string[];
}

const roundTo = (v: number, step: number) => Math.round(v / step) * step;

/** Rule-of-thumb funding range from monthly revenue, tenure and credit band. */
export function estimateRange(monthlyRevenue: number, tenureId: string, creditId: string): Estimate | null {
  if (!monthlyRevenue || monthlyRevenue <= 0) return null;
  const tenure = TENURE_OPTIONS.find((t) => t.id === tenureId) ?? TENURE_OPTIONS[2]!;
  const credit = CREDIT_BANDS.find((c) => c.id === creditId) ?? CREDIT_BANDS[2]!;
  const base = monthlyRevenue * 12 * REVENUE_SHARE * tenure.factor * credit.factor;
  const step = base > 100_000 ? 5_000 : 1_000;
  const low = Math.min(MAX_OFFER, Math.max(MIN_OFFER, roundTo(base * 0.6, step)));
  const high = Math.min(MAX_OFFER, Math.max(low, roundTo(base * 1.5, step)));
  return { low, high, products: tenure.products };
}

const { fields, results, defaults, limits } = QUALIFY_CALC;

/** "How much could I qualify for?" — monthly revenue, time in business, credit band → range + products. */
export function QualifyEstimator() {
  const [revenue, setRevenue] = useState<number>(defaults.revenue);
  const [tenure, setTenure] = useState<string>(defaults.tenure);
  const [credit, setCredit] = useState<string>(defaults.credit);

  const estimate = useMemo(() => estimateRange(Math.min(revenue, limits.revenue.max), tenure, credit), [revenue, tenure, credit]);
  const highShare = estimate ? Math.min(100, (estimate.high / 500_000) * 100) : 0;
  const lowShare = estimate ? Math.min(100, (estimate.low / 500_000) * 100) : 0;

  return (
    <section id={QUALIFY_CALC.id} className="relative scroll-mt-[120px] border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col gap-6 px-4 md:px-6">
          <h2 className={H2_CLASS}>{QUALIFY_CALC.heading}</h2>
          <p className="text-body-large text-[#4a4a4a]">{QUALIFY_CALC.sub}</p>
        </div>

        <div className="relative">
          <Hairlines zIndex="z-0" />
          <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[400px_1fr]">
            <form className={FORM_CARD_CLASS} onSubmit={(e) => e.preventDefault()} aria-label="Qualification inputs">
              <Field label={fields.revenue} htmlFor="qual-revenue">
                <input
                  id="qual-revenue"
                  type="number"
                  inputMode="numeric"
                  min={limits.revenue.min}
                  max={limits.revenue.max}
                  step={limits.revenue.step}
                  value={revenue}
                  onChange={(e) => setRevenue(Number.isFinite(e.target.valueAsNumber) ? e.target.valueAsNumber : 0)}
                  className={INPUT_CLASS}
                />
              </Field>
              <Field label={fields.tenure} htmlFor="qual-tenure">
                <SelectInput id="qual-tenure" value={tenure} onChange={(e) => setTenure(e.target.value)} options={TENURE_OPTIONS.map((t) => ({ value: t.id, label: t.label }))} />
              </Field>
              <Field label={fields.credit} htmlFor="qual-credit">
                <SelectInput id="qual-credit" value={credit} onChange={(e) => setCredit(e.target.value)} options={CREDIT_BANDS.map((c) => ({ value: c.id, label: c.label }))} />
              </Field>
              <p className="text-[12px] leading-[1.3] tracking-[-0.18px] text-[#606060]">{QUALIFY_CALC.note}</p>
            </form>

            <div className="flex flex-col gap-6 rounded-[24px] border border-[#e1e1e1] bg-white p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:p-8" aria-live="polite">
              <div className="flex flex-col gap-2">
                <span className="text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">{results.range}</span>
                {estimate ? (
                  <p className="font-mono text-[32px] font-medium leading-none tracking-[-1.02px] text-[#191919] md:text-[44px] md:tracking-[-1.41px]">
                    {usd.format(estimate.low)} <span className="text-[#7b7b7b]">–</span> {usd.format(estimate.high)}
                  </p>
                ) : (
                  <p className="text-body-large text-[#7b7b7b]">{results.empty}</p>
                )}
              </div>

              <div className="flex flex-col gap-2" aria-hidden>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-[#e1e1e1]">
                  <div className="absolute inset-y-0 rounded-full bg-[#1e3a8a] transition-[left,width] duration-300" style={{ left: `${lowShare}%`, width: `${Math.max(1.5, highShare - lowShare)}%` }} />
                </div>
                <div className="flex justify-between text-[11px] leading-[1.2] tracking-[-0.16px] text-[#7b7b7b]">
                  <span>$5K</span>
                  <span>$250K</span>
                  <span>$500K+</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">{results.products}</span>
                <ul className="flex flex-wrap gap-2">
                  {(estimate?.products ?? []).map((p) => (
                    <li key={p} className="inline-flex items-center gap-1 rounded-[4px] bg-[#dde4f6] px-2 py-1 text-[14px] font-medium leading-none text-[#1e3a8a]">
                      <MaterialIcon name="check" size={16} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-3 border-t border-[#e1e1e1] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-[14px] leading-[1.2] tracking-[-0.21px] text-[#4a4a4a]">
                  <MaterialIcon name="verified_user" size={20} className="text-[#1e3a8a]" />
                  No impact to your credit score to apply.
                </p>
                <PressableButton variant="primary" size="small" href={QUALIFY_CALC.cta.href} className="w-fit" dataTrack="cta-calculators-qualify">
                  {QUALIFY_CALC.cta.label}
                </PressableButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
