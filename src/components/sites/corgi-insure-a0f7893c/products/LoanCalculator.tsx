"use client";

import { useMemo, useState } from "react";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { H2_CLASS, Hairlines, Rails } from "../directors-and-officers-f2860438/rails";
import { PAYMENT_CALC } from "./data";
import { Field, FORM_CARD_CLASS, INPUT_CLASS, usd, usdCents } from "./FormPrimitives";

interface AmortRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface Amortization {
  payment: number;
  totalInterest: number;
  totalRepaid: number;
  rows: AmortRow[];
}

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

/** Standard fixed-rate, equal-payment amortization. */
export function amortize(principal: number, aprPct: number, months: number): Amortization {
  const r = aprPct / 100 / 12;
  const payment = r === 0 ? principal / months : (principal * r) / (1 - Math.pow(1 + r, -months));
  const rows: AmortRow[] = [];
  let balance = principal;
  let totalInterest = 0;
  for (let m = 1; m <= months; m++) {
    const interest = balance * r;
    const principalPaid = Math.min(payment - interest, balance);
    balance = Math.max(0, balance - principalPaid);
    totalInterest += interest;
    rows.push({ month: m, payment, principal: principalPaid, interest, balance });
  }
  return { payment, totalInterest, totalRepaid: principal + totalInterest, rows };
}

const { limits, defaults, fields, results, preview } = PAYMENT_CALC;

function numberValue(target: HTMLInputElement, fallback: number): number {
  const v = target.valueAsNumber;
  return Number.isFinite(v) ? v : fallback;
}

/** Loan payment calculator: amount / APR / term → payment, interest, total, amortization preview. */
export function LoanCalculator() {
  const [amount, setAmount] = useState<number>(defaults.amount);
  const [apr, setApr] = useState<number>(defaults.apr);
  const [term, setTerm] = useState<number>(defaults.term);
  const [showAll, setShowAll] = useState(false);

  const safeAmount = clamp(amount || 0, limits.amount.min, limits.amount.max);
  const safeApr = clamp(apr || 0, limits.apr.min, limits.apr.max);
  const safeTerm = clamp(Math.round(term || 0), limits.term.min, limits.term.max);

  const result = useMemo(() => amortize(safeAmount, safeApr, safeTerm), [safeAmount, safeApr, safeTerm]);
  const principalShare = result.totalRepaid > 0 ? (safeAmount / result.totalRepaid) * 100 : 100;
  const visibleRows = showAll ? result.rows : result.rows.slice(0, 6);
  const lastRow = result.rows[result.rows.length - 1];

  return (
    <section id={PAYMENT_CALC.id} className="relative scroll-mt-[120px] border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col gap-6 px-4 md:px-6">
          <h2 className={H2_CLASS}>{PAYMENT_CALC.heading}</h2>
          <p className="text-body-large text-[#4a4a4a]">{PAYMENT_CALC.sub}</p>
        </div>

        <div className="relative">
          <Hairlines zIndex="z-0" />
          <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[400px_1fr]">
            {/* Inputs */}
            <form className={FORM_CARD_CLASS} onSubmit={(e) => e.preventDefault()} aria-label="Loan payment inputs">
              <Field label={fields.amount} htmlFor="calc-amount">
                <input
                  id="calc-amount"
                  type="number"
                  inputMode="numeric"
                  min={limits.amount.min}
                  max={limits.amount.max}
                  step={limits.amount.step}
                  value={amount}
                  onChange={(e) => setAmount(numberValue(e.target, 0))}
                  className={INPUT_CLASS}
                />
                <input
                  aria-label="Loan amount slider"
                  type="range"
                  min={limits.amount.min}
                  max={limits.amount.max}
                  step={limits.amount.step}
                  value={safeAmount}
                  onChange={(e) => setAmount(numberValue(e.target, defaults.amount))}
                  className="w-full accent-[#1e3a8a]"
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label={fields.apr} htmlFor="calc-apr">
                  <input
                    id="calc-apr"
                    type="number"
                    inputMode="decimal"
                    min={limits.apr.min}
                    max={limits.apr.max}
                    step={limits.apr.step}
                    value={apr}
                    onChange={(e) => setApr(numberValue(e.target, 0))}
                    className={INPUT_CLASS}
                  />
                </Field>
                <Field label={fields.term} htmlFor="calc-term">
                  <input
                    id="calc-term"
                    type="number"
                    inputMode="numeric"
                    min={limits.term.min}
                    max={limits.term.max}
                    step={limits.term.step}
                    value={term}
                    onChange={(e) => setTerm(numberValue(e.target, 0))}
                    className={INPUT_CLASS}
                  />
                </Field>
              </div>
              <p className="text-[12px] leading-[1.3] tracking-[-0.18px] text-[#606060]">{PAYMENT_CALC.note}</p>
              <PressableButton variant="primary" size="small" href={PAYMENT_CALC.cta.href} className="w-fit" dataTrack="cta-calculators-payment">
                {PAYMENT_CALC.cta.label}
              </PressableButton>
            </form>

            {/* Results */}
            <div className="flex flex-col gap-6 rounded-[24px] border border-[#e1e1e1] bg-white p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:p-8">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-2 rounded-[16px] bg-[#1e3a8a] p-4 text-white">
                  <dt className="text-[12px] leading-[1.2] tracking-[-0.18px] text-[#dde4f6]">{results.payment}</dt>
                  <dd className="font-mono text-[32px] font-medium leading-none tracking-[-1.02px]">{usdCents.format(result.payment)}</dd>
                </div>
                <div className="flex flex-col gap-2 rounded-[16px] border border-[#e1e1e1] bg-[#f9f9f9] p-4">
                  <dt className="text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">{results.interest}</dt>
                  <dd className="font-mono text-[28px] font-medium leading-none tracking-[-0.9px] text-[#191919]">{usd.format(result.totalInterest)}</dd>
                </div>
                <div className="flex flex-col gap-2 rounded-[16px] border border-[#e1e1e1] bg-[#f9f9f9] p-4">
                  <dt className="text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">{results.total}</dt>
                  <dd className="font-mono text-[28px] font-medium leading-none tracking-[-0.9px] text-[#191919]">{usd.format(result.totalRepaid)}</dd>
                </div>
              </dl>

              <div className="flex flex-col gap-2">
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-[#e1e1e1]" aria-hidden>
                  <div className="h-full bg-[#1e3a8a] transition-[width] duration-300" style={{ width: `${principalShare}%` }} />
                  <div className="h-full flex-1 bg-[#ff94a4]" />
                </div>
                <div className="flex justify-between text-[12px] leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">
                  <span>
                    <span className="mr-1.5 inline-block size-2 rounded-full bg-[#1e3a8a] align-middle" />
                    Principal {usd.format(safeAmount)}
                  </span>
                  <span>
                    <span className="mr-1.5 inline-block size-2 rounded-full bg-[#ff94a4] align-middle" />
                    Interest {usd.format(result.totalInterest)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[16px] font-bold leading-none tracking-[-0.24px] text-[#191919]">{preview.heading}</h3>
                  <button
                    type="button"
                    onClick={() => setShowAll((v) => !v)}
                    aria-expanded={showAll}
                    className="text-[14px] font-medium leading-[1.2] tracking-[-0.21px] text-[#1e3a8a] hover:underline"
                  >
                    {showAll ? preview.toggleLess : preview.toggleMore}
                  </button>
                </div>
                <div className={`overflow-x-auto rounded-[16px] border border-[#e1e1e1] ${showAll ? "max-h-[420px] overflow-y-auto" : ""}`}>
                  <table className="w-full min-w-[520px] border-collapse text-left tabular-nums">
                    <thead className="sticky top-0 bg-[#f6f6f6]">
                      <tr>
                        {preview.columns.map((col) => (
                          <th key={col} scope="col" className="px-4 py-2.5 text-[12px] font-medium leading-[1.2] tracking-[-0.18px] text-[#4a4a4a]">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {visibleRows.map((row) => (
                        <tr key={row.month} className="border-t border-[#e1e1e1]">
                          <td className="px-4 py-2.5 text-[13px] text-[#191919]">{row.month}</td>
                          <td className="px-4 py-2.5 text-[13px] text-[#4a4a4a]">{usdCents.format(row.payment)}</td>
                          <td className="px-4 py-2.5 text-[13px] text-[#4a4a4a]">{usdCents.format(row.principal)}</td>
                          <td className="px-4 py-2.5 text-[13px] text-[#4a4a4a]">{usdCents.format(row.interest)}</td>
                          <td className="px-4 py-2.5 text-[13px] text-[#191919]">{usd.format(row.balance)}</td>
                        </tr>
                      ))}
                      {!showAll && lastRow && lastRow.month > 6 && (
                        <>
                          <tr className="border-t border-[#e1e1e1]">
                            <td colSpan={5} className="px-4 py-2 text-center text-[12px] text-[#7b7b7b]">
                              … {lastRow.month - 7} more payments …
                            </td>
                          </tr>
                          <tr className="border-t border-[#e1e1e1]">
                            <td className="px-4 py-2.5 text-[13px] text-[#191919]">{lastRow.month}</td>
                            <td className="px-4 py-2.5 text-[13px] text-[#4a4a4a]">{usdCents.format(lastRow.payment)}</td>
                            <td className="px-4 py-2.5 text-[13px] text-[#4a4a4a]">{usdCents.format(lastRow.principal)}</td>
                            <td className="px-4 py-2.5 text-[13px] text-[#4a4a4a]">{usdCents.format(lastRow.interest)}</td>
                            <td className="px-4 py-2.5 text-[13px] text-[#191919]">{usd.format(lastRow.balance)}</td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
