"use client";

import { useState } from "react";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { DetailHero } from "@/types/sites/corgi-insure-a0f7893c/detail";

const money = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

function monthlyPayment(principal: number, apr: number, months: number) {
  const r = apr / 100 / 12;
  return r === 0 ? principal / months : (principal * r) / (1 - Math.pow(1 + r, -months));
}

/** "How much do you need?" card: range slider → illustrative monthly payment (client state only). */
export function Estimator({ estimator }: { estimator: DetailHero["estimator"] }) {
  const [amount, setAmount] = useState(estimator.initial);
  const monthly = monthlyPayment(amount, estimator.apr, estimator.termMonths);
  const pct = ((amount - estimator.min) / (estimator.max - estimator.min)) * 100;
  return (
    <div className="flex w-full flex-col gap-5 rounded-[24px] border border-[#e1e1e1] bg-white p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.08)] md:p-8">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[24px] font-medium leading-none tracking-[-0.768px] text-[#191919] md:text-[28px]">{estimator.title}</span>
        <span className="text-[14px] leading-[1.3] tracking-[-0.21px] text-[#7b7b7b]">{estimator.note}</span>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#4a4a4a]">{estimator.label}</span>
        <span className="font-mono text-[40px] font-medium leading-none tracking-[-0.03em] text-[#1e3a8a] md:text-[48px]">{money(amount)}</span>
        <input
          type="range"
          min={estimator.min}
          max={estimator.max}
          step={estimator.step}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full accent-[#1e3a8a]"
          style={{ background: `linear-gradient(to right, #1e3a8a ${pct}%, #dde4f6 ${pct}%)` }}
          aria-label={estimator.label}
        />
        <span className="flex justify-between text-[12px] text-[#7b7b7b]">
          <span>{money(estimator.min)}</span>
          <span>{money(estimator.max)}</span>
        </span>
      </label>
      <div className="grid grid-cols-2 gap-3 rounded-[16px] bg-[#f6f6f6] p-4">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] text-[#7b7b7b]">Est. monthly payment</span>
          <span className="font-mono text-[22px] font-medium leading-none text-[#191919]">{money(monthly)}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] text-[#7b7b7b]">Illustrative terms</span>
          <span className="text-[14px] font-medium leading-[1.3] text-[#191919]">
            {estimator.apr}% APR · {estimator.termMonths} mo
          </span>
        </div>
      </div>
      <PressableButton variant="primary" size="large" href={`${estimator.cta.href}?amount=${amount}`} className="w-full" faceClassName="w-full">
        {estimator.cta.label}
      </PressableButton>
    </div>
  );
}
