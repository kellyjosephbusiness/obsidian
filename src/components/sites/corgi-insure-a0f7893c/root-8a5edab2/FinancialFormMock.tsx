"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { UploadIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/icons";
import { GET_QUOTED } from "./data";

/**
 * The "Business financials" step of the application, rendered as a screenshot-style card
 * (home "Apply in 15 minutes" section, editorial sticky rails).
 * Every size is in container-query units (cqw) — the parent card must be a `@container`.
 */

const { form } = GET_QUOTED;

/** Keep only digits, capped at 18 characters. */
function toDigits(value: string): string {
  return value.replace(/\D/g, "").slice(0, 18);
}

/** "1234567" → "$1,234,567"; "" → "". */
export function formatMoney(digits: string): string {
  return digits ? `$${Number(digits).toLocaleString("en-US")}` : "";
}

/* ------------------------------------------------------------------ */
/* Field / Input                                                        */
/* ------------------------------------------------------------------ */

interface FieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
}

function Field({ label, required, children }: FieldProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-[1.14cqw]">
      <span className="truncate font-medium leading-normal text-[#1d1d1d] text-[2cqw]">
        {label}
        {required ? "*" : null}
      </span>
      {children}
    </div>
  );
}

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  inputMode?: "text" | "numeric";
  ariaLabel: string;
}

function Input({ value, onChange, placeholder, inputMode = "text", ariaLabel }: InputProps) {
  return (
    <input
      type="text"
      aria-label={ariaLabel}
      inputMode={inputMode}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="min-h-[max(24px,5.14cqw)] min-w-0 w-full rounded-[1.71cqw] border border-[#bdbdbd] bg-white px-[1.71cqw] py-[1.14cqw] font-normal leading-none text-[#1d1d1d] text-[2.28cqw] outline-none transition-all placeholder:text-[#9e9e9e] focus-visible:border-[var(--primary)] focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--primary)_50%,white)]"
    />
  );
}

/* ------------------------------------------------------------------ */
/* The form                                                             */
/* ------------------------------------------------------------------ */

/** The site passes `depth:"0.5cqw"`; our PressableButton takes px, so override the CSS var directly. */
const PRESSABLE_DEPTH_STYLE = { ["--pressable-depth" as string]: "0.5cqw" } as CSSProperties;

/**
 * `.btn-text-small` (a custom `@layer utilities` class emitted after Tailwind's utilities in
 * globals.css) would otherwise beat `text-[2.08cqw]` / `leading-normal`; pin the face metrics inline.
 */
const FACE_TEXT_STYLE: CSSProperties = { fontSize: "2.08cqw", lineHeight: 1.5, fontWeight: 500 };

export function FinancialFormMock() {
  const [revenue, setRevenue] = useState("");
  const [projected, setProjected] = useState("");
  const [funding, setFunding] = useState("");
  const [fundingDate, setFundingDate] = useState("");

  const handleMoney = (set: (digits: string) => void) => (value: string) => set(toDigits(value));

  return (
    <div className="flex h-full w-full flex-col gap-[5.2cqw] rounded-[1.56cqw] bg-[#f9f9f9] p-[7.5cqw] pt-[9cqw]">
      <div className="flex flex-col gap-[0.78cqw]">
        <h3 className="font-mono font-normal leading-none tracking-[-0.04em] text-[#1d1d1d] text-[4.17cqw]">{form.title}</h3>
        <p className="text-[2.08cqw] leading-tight text-[#4e4e4e]">{form.subtitle}</p>
      </div>

      <div className="flex gap-[1.56cqw]">
        <Field label={form.revenueLabel} required>
          <Input
            ariaLabel="Revenue in the last 12 months"
            value={formatMoney(revenue)}
            onChange={handleMoney(setRevenue)}
            placeholder={form.revenuePlaceholder}
            inputMode="numeric"
          />
        </Field>
        <Field label={form.projectedLabel} required>
          <Input
            ariaLabel="Average monthly revenue"
            value={formatMoney(projected)}
            onChange={handleMoney(setProjected)}
            placeholder={form.projectedPlaceholder}
            inputMode="numeric"
          />
        </Field>
      </div>

      <div className="flex flex-col gap-[1.04cqw]">
        <span className="text-[2.08cqw] font-medium text-[#1d1d1d]">{form.uploadLabel}</span>
        <div className="flex flex-col items-center justify-center gap-[0.78cqw] rounded-[1.56cqw] border border-dashed border-[#999] bg-[#DDEAFE] px-[2.6cqw] py-[4.68cqw]">
          <UploadIcon className="h-[3.12cqw] w-[3.12cqw] text-[#1d1d1d]" strokeWidth={1.75} />
          <p className="text-[2.08cqw] font-medium text-[#1d1d1d]">{form.dropTitle}</p>
          <p className="text-[2.08cqw] text-[#4e4e4e]">{form.dropSub}</p>
        </div>
      </div>

      <div className="flex gap-[1.56cqw]">
        <Field label={form.fundingLabel}>
          <Input
            ariaLabel="Amount requested"
            value={formatMoney(funding)}
            onChange={handleMoney(setFunding)}
            placeholder={form.fundingPlaceholder}
            inputMode="numeric"
          />
        </Field>
        <Field label={form.dateLabel}>
          <Input ariaLabel="Business start date" value={fundingDate} onChange={setFundingDate} placeholder={form.datePlaceholder} />
        </Field>
      </div>

      <div className="flex items-center justify-between pt-[0.5cqw]">
        <PressableButton
          type="button"
          variant="black"
          style={PRESSABLE_DEPTH_STYLE}
          className="rounded-[1.56cqw] bg-[#575757]"
          faceClassName="min-h-[24px] rounded-[1.56cqw] border-0 bg-[#1d1d1d] px-[2.08cqw] py-[1.04cqw] text-[2.08cqw] font-medium leading-normal text-[#d9d9d9]"
          faceStyle={FACE_TEXT_STYLE}
        >
          {form.back}
        </PressableButton>
        <PressableButton
          type="button"
          variant="primary"
          disabled
          style={PRESSABLE_DEPTH_STYLE}
          /* The site uses pressTrigger:"none"; our CSS presses [data-press-trigger=self], so block pointer events instead. */
          className="pointer-events-none rounded-[1.56cqw] bg-[#b84200] opacity-50"
          faceClassName="min-h-[24px] cursor-not-allowed rounded-[1.56cqw] border-0 bg-[#0376FD] px-[2.08cqw] py-[1.04cqw] text-[2.08cqw] font-medium leading-normal"
          faceStyle={FACE_TEXT_STYLE}
        >
          {form.next}
        </PressableButton>
      </div>
    </div>
  );
}
