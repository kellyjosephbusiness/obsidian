"use client";

import { useState, type FormEvent } from "react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { formatMoney } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FinancialFormMock";
import type { ApplyStep } from "@/types/sites/corgi-insure-a0f7893c/company";
import { cn } from "@/lib/utils";
import {
  APPLY_FIELDS,
  APPLY_INTRO,
  APPLY_STEPS,
  CREDIT_BAND_OPTIONS,
  ENTITY_OPTIONS,
  INDUSTRY_OPTIONS,
  TIME_IN_BUSINESS_OPTIONS,
  USE_OF_FUNDS_OPTIONS,
} from "./data";
import { CheckboxField, FormCard, FormField, FormTitle, SelectInput, SubmittedState, TextInput } from "./FormControls";
import { Eyebrow } from "./PageHero";
import { Rails } from "./SectionFrame";

interface ApplyValues {
  businessName: string;
  industry: string;
  timeInBusiness: string;
  entityType: string;
  state: string;
  annualRevenue: string;
  monthlyRevenue: string;
  amount: string;
  useOfFunds: string;
  creditBand: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const EMPTY: ApplyValues = {
  businessName: "",
  industry: "",
  timeInBusiness: "",
  entityType: "",
  state: "",
  annualRevenue: "",
  monthlyRevenue: "",
  amount: "",
  useOfFunds: "",
  creditBand: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  consent: false,
};

/** Keep only digits, capped at 12 characters (money fields). */
function toDigits(value: string): string {
  return value.replace(/\D/g, "").slice(0, 12);
}

function isStepComplete(step: ApplyStep["id"], v: ApplyValues): boolean {
  switch (step) {
    case "business":
      return Boolean(v.businessName.trim() && v.industry && v.timeInBusiness && v.entityType);
    case "financials":
      return Boolean(v.annualRevenue && v.amount && v.useOfFunds && v.creditBand);
    case "contact":
      return Boolean(v.firstName.trim() && v.lastName.trim() && /.+@.+\..+/.test(v.email) && v.phone.trim() && v.consent);
  }
}

function ProgressBar({ index, steps }: { index: number; steps: ApplyStep[] }) {
  const pct = ((index + 1) / steps.length) * 100;
  return (
    <div className="flex flex-col gap-3">
      <ol className="flex items-center justify-between gap-2">
        {steps.map((step, i) => {
          const state = i < index ? "done" : i === index ? "current" : "todo";
          return (
            <li key={step.id} className="flex items-center gap-2" aria-current={state === "current" ? "step" : undefined}>
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full text-[12px] font-medium leading-none",
                  state === "done" && "bg-[#1e3a8a] text-white",
                  state === "current" && "border-2 border-[#1e3a8a] bg-white text-[#1e3a8a]",
                  state === "todo" && "border border-[#c9c9c9] bg-white text-[#5c5c5c]",
                )}
              >
                {state === "done" ? <MaterialIcon name="check" size={14} weight={700} /> : i + 1}
              </span>
              <span className={cn("text-[13px] font-medium leading-none tracking-[-0.2px]", state === "todo" ? "text-[#5c5c5c]" : "text-[#191919]")}>{step.label}</span>
            </li>
          );
        })}
      </ol>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e1e1e1]" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pct)} aria-label="Application progress">
        <div className="h-full rounded-full bg-[#1e3a8a] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/**
 * Three-step application (business basics → financials → contact) with a progress bar, "Continue" gating
 * on the step's required fields, and a confirmation state with a fake reference number. No backend.
 */
export function ApplyFlow() {
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState<ApplyValues>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const step = APPLY_STEPS[index] ?? APPLY_STEPS[0];
  const last = index === APPLY_STEPS.length - 1;
  const complete = isStepComplete(step.id, values);

  const set = <K extends keyof ApplyValues>(key: K) => (value: ApplyValues[K]) => setValues((v) => ({ ...v, [key]: value }));

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!complete) return;
    if (last) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIndex((i) => i + 1);
    }
  }

  const reference = `FL-${(values.businessName.length * 7919 + values.amount.length * 104729 + 240113).toString().slice(-6)}`;

  return (
    <section className="relative border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 pt-[150px] pb-16 md:px-6 md:pt-[176px] md:pb-24 lg:px-16">
      <Rails width={1200} />
      <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="flex flex-col gap-6 lg:sticky lg:top-[116px] lg:self-start">
          <Eyebrow>{APPLY_INTRO.eyebrow}</Eyebrow>
          <h1 className="font-mono font-medium text-[#191919] text-[length:var(--h1-font-size)] leading-[var(--h1-line-height)] tracking-[var(--h1-tracking)]">
            <span className="block">{APPLY_INTRO.headingLine1}</span>
            <span className="block">{APPLY_INTRO.headingLine2}</span>
          </h1>
          <p className="max-w-[520px] text-body-large text-[#4a4a4a]">{APPLY_INTRO.sub}</p>
          <ul className="flex flex-col gap-3">
            {APPLY_INTRO.bullets.map((b) => (
              <li key={b.text} className="flex items-center gap-3 text-[15px] leading-[1.2] tracking-[-0.2px] text-[#191919]">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[#dde4f6] text-[#1e3a8a]">
                  <MaterialIcon name={b.icon} size={20} />
                </span>
                {b.text}
              </li>
            ))}
          </ul>
          <p className="text-[14px] leading-[1.3] tracking-[-0.21px] text-[#4a4a4a]">
            {APPLY_INTRO.helpText}{" "}
            <a href={APPLY_INTRO.helpLink.href} className="font-medium text-[#1e3a8a] hover:underline">
              {APPLY_INTRO.helpLink.label}
            </a>
          </p>
        </div>

        {submitted ? (
          <FormCard>
            <SubmittedState title={APPLY_FIELDS.done.title} body={APPLY_FIELDS.done.body} action={APPLY_FIELDS.done.action} secondary={APPLY_FIELDS.done.secondary}>
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 rounded-[8px] border border-[#e1e1e1] bg-white px-5 py-4 text-left text-[14px] leading-[1.3] tracking-[-0.21px]">
                <dt className="text-[#5c5c5c]">{APPLY_FIELDS.done.reference}</dt>
                <dd className="font-mono font-medium text-[#191919]">{reference}</dd>
                <dt className="text-[#5c5c5c]">Business</dt>
                <dd className="text-[#191919]">{values.businessName}</dd>
                <dt className="text-[#5c5c5c]">Requested</dt>
                <dd className="font-mono font-medium text-[#1e3a8a]">{formatMoney(values.amount)}</dd>
              </dl>
            </SubmittedState>
          </FormCard>
        ) : (
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6 rounded-[8px] border border-[#e1e1e1] bg-[#f9f9f9] p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:p-8">
            <ProgressBar index={index} steps={APPLY_STEPS} />
            <FormTitle title={step.title} sub={step.sub} />

            {step.id === "business" ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField label={APPLY_FIELDS.business.businessName.label} htmlFor="apply-business-name" required className="sm:col-span-2">
                  <TextInput id="apply-business-name" autoComplete="organization" placeholder={APPLY_FIELDS.business.businessName.placeholder} value={values.businessName} onChange={(e) => set("businessName")(e.target.value)} />
                </FormField>
                <FormField label={APPLY_FIELDS.business.industry.label} htmlFor="apply-industry" required>
                  <SelectInput id="apply-industry" options={INDUSTRY_OPTIONS} placeholder={APPLY_FIELDS.business.industry.placeholder} value={values.industry} onChange={(e) => set("industry")(e.target.value)} />
                </FormField>
                <FormField label={APPLY_FIELDS.business.timeInBusiness.label} htmlFor="apply-time" required>
                  <SelectInput id="apply-time" options={TIME_IN_BUSINESS_OPTIONS} placeholder={APPLY_FIELDS.business.timeInBusiness.placeholder} value={values.timeInBusiness} onChange={(e) => set("timeInBusiness")(e.target.value)} />
                </FormField>
                <FormField label={APPLY_FIELDS.business.entityType.label} htmlFor="apply-entity" required>
                  <SelectInput id="apply-entity" options={ENTITY_OPTIONS} placeholder={APPLY_FIELDS.business.entityType.placeholder} value={values.entityType} onChange={(e) => set("entityType")(e.target.value)} />
                </FormField>
                <FormField label={APPLY_FIELDS.business.state.label} htmlFor="apply-state">
                  <TextInput id="apply-state" autoComplete="address-level1" maxLength={2} placeholder={APPLY_FIELDS.business.state.placeholder} value={values.state} onChange={(e) => set("state")(e.target.value.toUpperCase())} />
                </FormField>
              </div>
            ) : null}

            {step.id === "financials" ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField label={APPLY_FIELDS.financials.annualRevenue.label} htmlFor="apply-annual" required hint="An estimate is fine.">
                  <TextInput id="apply-annual" inputMode="numeric" placeholder={APPLY_FIELDS.financials.annualRevenue.placeholder} value={formatMoney(values.annualRevenue)} onChange={(e) => set("annualRevenue")(toDigits(e.target.value))} />
                </FormField>
                <FormField label={APPLY_FIELDS.financials.monthlyRevenue.label} htmlFor="apply-monthly">
                  <TextInput id="apply-monthly" inputMode="numeric" placeholder={APPLY_FIELDS.financials.monthlyRevenue.placeholder} value={formatMoney(values.monthlyRevenue)} onChange={(e) => set("monthlyRevenue")(toDigits(e.target.value))} />
                </FormField>
                <FormField label={APPLY_FIELDS.financials.amount.label} htmlFor="apply-amount" required hint="$5,000 to $5,000,000.">
                  <TextInput id="apply-amount" inputMode="numeric" placeholder={APPLY_FIELDS.financials.amount.placeholder} value={formatMoney(values.amount)} onChange={(e) => set("amount")(toDigits(e.target.value))} />
                </FormField>
                <FormField label={APPLY_FIELDS.financials.useOfFunds.label} htmlFor="apply-use" required>
                  <SelectInput id="apply-use" options={USE_OF_FUNDS_OPTIONS} placeholder={APPLY_FIELDS.financials.useOfFunds.placeholder} value={values.useOfFunds} onChange={(e) => set("useOfFunds")(e.target.value)} />
                </FormField>
                <FormField label={APPLY_FIELDS.financials.creditBand.label} htmlFor="apply-credit" required className="sm:col-span-2" hint="Checking eligibility is a soft inquiry and never affects your score.">
                  <SelectInput id="apply-credit" options={CREDIT_BAND_OPTIONS} placeholder={APPLY_FIELDS.financials.creditBand.placeholder} value={values.creditBand} onChange={(e) => set("creditBand")(e.target.value)} />
                </FormField>
              </div>
            ) : null}

            {step.id === "contact" ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField label={APPLY_FIELDS.contact.firstName.label} htmlFor="apply-first" required>
                  <TextInput id="apply-first" autoComplete="given-name" placeholder={APPLY_FIELDS.contact.firstName.placeholder} value={values.firstName} onChange={(e) => set("firstName")(e.target.value)} />
                </FormField>
                <FormField label={APPLY_FIELDS.contact.lastName.label} htmlFor="apply-last" required>
                  <TextInput id="apply-last" autoComplete="family-name" placeholder={APPLY_FIELDS.contact.lastName.placeholder} value={values.lastName} onChange={(e) => set("lastName")(e.target.value)} />
                </FormField>
                <FormField label={APPLY_FIELDS.contact.email.label} htmlFor="apply-email" required>
                  <TextInput id="apply-email" type="email" autoComplete="email" placeholder={APPLY_FIELDS.contact.email.placeholder} value={values.email} onChange={(e) => set("email")(e.target.value)} />
                </FormField>
                <FormField label={APPLY_FIELDS.contact.phone.label} htmlFor="apply-phone" required>
                  <TextInput id="apply-phone" type="tel" autoComplete="tel" placeholder={APPLY_FIELDS.contact.phone.placeholder} value={values.phone} onChange={(e) => set("phone")(e.target.value)} />
                </FormField>
                <div className="sm:col-span-2">
                  <CheckboxField id="apply-consent" label={APPLY_FIELDS.contact.consent} checked={values.consent} onChange={set("consent")} />
                </div>
              </div>
            ) : null}

            <div className="flex items-center justify-between gap-3 border-t border-[#e1e1e1] pt-6">
              {index > 0 ? (
                <PressableButton type="button" variant="white" size="small" onClick={() => setIndex((i) => Math.max(0, i - 1))} faceClassName="gap-1">
                  <MaterialIcon name="arrow_back" size={16} />
                  {APPLY_FIELDS.back}
                </PressableButton>
              ) : (
                <span className="text-[12px] leading-[1.3] tracking-[-0.18px] text-[#5c5c5c]">
                  Step {index + 1} of {APPLY_STEPS.length}
                </span>
              )}
              <PressableButton type="submit" variant="primary" size="small" disabled={!complete} className={cn(!complete && "opacity-50")} faceClassName={cn("gap-1", !complete && "cursor-not-allowed")} dataTrack={`cta-apply-step-${step.id}`}>
                {last ? APPLY_FIELDS.submit : APPLY_FIELDS.next}
                <MaterialIcon name="arrow_forward" size={16} />
              </PressableButton>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
