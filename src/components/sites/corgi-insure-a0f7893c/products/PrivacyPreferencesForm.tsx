"use client";

import { useState, type FormEvent } from "react";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { PRIVACY_PREFERENCES } from "./data";
import { Field, FORM_CARD_CLASS, INPUT_CLASS, SelectInput, ThanksState } from "./FormPrimitives";

type ToggleId = (typeof PRIVACY_PREFERENCES.toggles)[number]["id"];

const DEFAULTS: Record<ToggleId, boolean> = { analytics: true, advertising: true, email: true, sms: false };

interface SwitchProps {
  id: string;
  checked: boolean;
  onChange: (next: boolean) => void;
  labelledBy: string;
}

function Switch({ id, checked, onChange, labelledBy }: SwitchProps) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={labelledBy}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(30,58,138,0.35)] ${checked ? "bg-[#0376FD]" : "bg-[#c9c9c9]"}`}
    >
      <span className={`absolute top-0.5 left-0.5 size-6 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.25)] transition-transform duration-200 ${checked ? "translate-x-5" : ""}`} />
    </button>
  );
}

/** Cookie / marketing / data-request preferences (UI only; submit shows the thanks state). */
export function PrivacyPreferencesForm() {
  const [prefs, setPrefs] = useState<Record<ToggleId, boolean>>(DEFAULTS);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) return <ThanksState heading={PRIVACY_PREFERENCES.thanks.heading} body={PRIVACY_PREFERENCES.thanks.body} />;

  return (
    <form id="preferences" onSubmit={onSubmit} className={`${FORM_CARD_CLASS} scroll-mt-[120px]`}>
      <div className="flex flex-col gap-2">
        <h2 className="font-mono text-[24px] font-medium leading-none tracking-[-0.77px] text-[#191919] md:text-[28px] md:tracking-[-0.9px]">{PRIVACY_PREFERENCES.heading}</h2>
        <p className="text-[14px] leading-[1.3] tracking-[-0.21px] text-[#4a4a4a]">{PRIVACY_PREFERENCES.sub}</p>
      </div>

      <ul className="flex flex-col overflow-hidden rounded-[8px] border border-[#e1e1e1] bg-white">
        {PRIVACY_PREFERENCES.toggles.map((t, i) => (
          <li key={t.id} className={`flex items-start justify-between gap-4 p-4 ${i > 0 ? "border-t border-[#e1e1e1]" : ""}`}>
            <div className="flex flex-col gap-1">
              <span id={`pref-${t.id}-label`} className="text-[14px] font-medium leading-[1.2] tracking-[-0.21px] text-[#191919]">
                {t.label}
              </span>
              <span className="text-[12px] leading-[1.3] tracking-[-0.18px] text-[#606060]">{t.body}</span>
            </div>
            <Switch id={`pref-${t.id}`} labelledBy={`pref-${t.id}-label`} checked={prefs[t.id]} onChange={(next) => setPrefs((cur) => ({ ...cur, [t.id]: next }))} />
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label={PRIVACY_PREFERENCES.request.label} htmlFor="pref-request">
          <SelectInput id="pref-request" name="request" defaultValue={PRIVACY_PREFERENCES.request.options[0]} options={PRIVACY_PREFERENCES.request.options.map((o) => ({ value: o, label: o }))} />
        </Field>
        <Field label={PRIVACY_PREFERENCES.email.label} htmlFor="pref-email">
          <input id="pref-email" name="email" type="email" autoComplete="email" placeholder={PRIVACY_PREFERENCES.email.placeholder} className={INPUT_CLASS} />
        </Field>
      </div>

      <PressableButton type="submit" variant="primary" size="large" className="w-fit" dataTrack="cta-privacy-choices-save">
        {PRIVACY_PREFERENCES.submit}
      </PressableButton>
    </form>
  );
}
