"use client";

import Image from "next/image";
import { useState, type CSSProperties, type ReactNode } from "react";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { UploadIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/icons";
import { GET_QUOTED } from "./data";

/**
 * The fake "Financial details" form shown inside the Get Quoted card.
 * Reproduced 1:1 from the site's compiled source (27stt6lyy-y9_.js, functions i/o/c/d/x/p/u/m/g/v/b).
 * Every size is in container-query units (cqw) — the parent card must be a `@container`.
 */

const { form, images } = GET_QUOTED;

/** Keep only digits, capped at 18 characters. */
function toDigits(value: string): string {
  return value.replace(/\D/g, "").slice(0, 18);
}

/** "1234567" → "$1,234,567"; "" → "". */
export function formatMoney(digits: string): string {
  return digits ? `$${Number(digits).toLocaleString("en-US")}` : "";
}

export const LETTER_TAUNTS = [
  "Numbers not letters",
  "Letters? In this economy?",
  "Nice try, but we need digits",
  "This field speaks math only",
  "Letters don't pay the bills",
  "Revenue isn't spelled out",
  "Please speak in digits",
  "Numbers. Just numbers.",
] as const;

export const BUBBLE_MESSAGES: readonly (readonly string[])[] = [
  ["An estimate is fine"],
  ["Modest start", "Hmm, okay", "Every dollar counts"],
  ["Nice start!", "Four figures!", "Getting somewhere"],
  ["Five figures!", "Respectable", "Not bad at all"],
  ["Six figures!", "Impressive!", "Nicely done"],
  ["Wow!", "Seven figures!", "Millionaire alert"],
  ["Whoa!", "Eight figures?!", "Big league!"],
  ["Holy cow!", "Nine figures?!", "Unicorn vibes"],
  ["Billionaire?!", "Bezos, is that you?", "I might need a raise"],
  ["Are you a country?", "Okay, now you're flexing", "Sure, buddy"],
];

/** Which BUBBLE_MESSAGES tier a digit string (e.g. revenue + projected sum) falls into. */
export function bubbleTierIndex(sum: string): number {
  if (!sum) return 0;
  const n = Number(sum);
  return n < 1e3 ? 1 : n < 1e4 ? 2 : n < 1e5 ? 3 : n < 1e6 ? 4 : n < 1e7 ? 5 : n < 1e8 ? 6 : n < 1e9 ? 7 : n < 1e12 ? 8 : 9;
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
  onBlur?: () => void;
}

function Input({ value, onChange, placeholder, inputMode = "text", ariaLabel, onBlur }: InputProps) {
  return (
    <input
      type="text"
      aria-label={ariaLabel}
      inputMode={inputMode}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      placeholder={placeholder}
      className="min-h-[max(24px,5.14cqw)] min-w-0 w-full rounded-[1.71cqw] border border-[#bdbdbd] bg-white px-[1.71cqw] py-[1.14cqw] font-normal leading-none text-[#1d1d1d] text-[2.28cqw] outline-none transition-all placeholder:text-[#9e9e9e] focus-visible:border-[var(--primary)] focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--primary)_50%,white)]"
    />
  );
}

/* ------------------------------------------------------------------ */
/* Drag cursor chip ("Important Document, Probably")                    */
/* ------------------------------------------------------------------ */

interface DragCursorChipProps {
  text: string;
  /** 0..1 — slides the cursor 70cqw to the right and fades it out. */
  exitProgress?: number;
}

export function DragCursorChip({ text, exitProgress = 0 }: DragCursorChipProps) {
  return (
    <div
      className="pointer-events-none absolute top-[36%] left-[80%] flex items-center gap-[0.78cqw]"
      style={{
        transform: `translate(calc(-50% + ${70 * exitProgress}cqw), -5cqw)`,
        opacity: 1 - exitProgress,
        transition: "transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 350ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="relative h-[3.72cqw] w-[3.0cqw] shrink-0">
        <Image src={images.cursorDocument} alt="" fill className="object-contain" sizes="30px" priority={false} />
      </div>
      <div className="relative">
        <div className="rounded-full bg-[#2465e8] px-[1.12cqw] py-[0.3cqw]">
          <p className="whitespace-nowrap text-[2.24cqw] font-medium leading-[1.15] text-white">{text}</p>
        </div>
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "69.28%", top: "76.2%", width: "6cqw", height: "6cqw" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- tiny decorative SVGs, positioned by percentage like the site */}
          <img
            src={images.cursorFill}
            alt=""
            className="absolute"
            fetchPriority="low"
            style={{ left: "46.88%", top: "42.5%", width: "32.43%", height: "44.14%" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images.cursorBody}
            alt=""
            className="absolute"
            fetchPriority="low"
            style={{ left: "50%", top: "46.81%", width: "26.13%", height: "36.66%" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images.greenPlus}
            alt=""
            className="absolute"
            fetchPriority="low"
            style={{ left: "46.88%", top: "84.38%", width: "56.25%", height: "56.25%" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Estimate bubble ("An estimate is fine")                              */
/* ------------------------------------------------------------------ */

interface EstimateBubbleProps {
  text: string;
  /** 0..1 — slides in from the right (200% → 0) and fades in. */
  entryProgress?: number;
}

export function EstimateBubble({ text, entryProgress = 1 }: EstimateBubbleProps) {
  const offset = (1 - entryProgress) * 200;
  return (
    <div
      className="pointer-events-none absolute left-[78.75%] top-[25.37%] flex items-center rounded-full bg-white px-[2cqw] py-[1cqw] shadow-[0_0_2.17cqw_rgba(25,25,25,0.2)]"
      style={{
        transform: `translateX(calc(-50% + ${offset}%)) translateY(12px)`,
        opacity: entryProgress,
        transition: "transform 750ms cubic-bezier(0.4, 0, 0.2, 1), opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <p className="whitespace-nowrap font-medium leading-none text-[#191919] text-[2.15cqw]">{text}</p>
      <svg
        viewBox="0 0 20 24"
        className="pointer-events-none absolute"
        aria-hidden="true"
        style={{
          left: "45%",
          top: "calc(100% - 2px)",
          width: "2.5cqw",
          height: "3cqw",
          transform: "translateX(-50%) rotate(-8deg)",
        }}
      >
        <path d="M0 0 L20 0 L10 24 Z" fill="white" />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The form                                                             */
/* ------------------------------------------------------------------ */

export interface FinancialFormMockProps {
  /** Render the drag cursor over the drop zone (and tint the zone orange). Default true. */
  showCursor?: boolean;
  /** 0..1 — slides the cursor out to the right and fades it. */
  cursorExitProgress?: number;
  onRevenueChange?: (digits: string) => void;
  onProjectedRevenueChange?: (digits: string) => void;
  /** A non-digit character was typed into a money field. */
  onInvalidInput?: () => void;
  /** Digits were typed into a money field. */
  onValidInput?: () => void;
}

/** The site passes `depth:"0.5cqw"`; our PressableButton takes px, so override the CSS var directly. */
const PRESSABLE_DEPTH_STYLE = { ["--pressable-depth" as string]: "0.5cqw" } as CSSProperties;

/**
 * `.btn-text-small` (a custom `@layer utilities` class emitted after Tailwind's utilities in
 * globals.css) would otherwise beat `text-[2.08cqw]` / `leading-normal`; pin the face metrics inline.
 */
const FACE_TEXT_STYLE: CSSProperties = { fontSize: "2.08cqw", lineHeight: 1.5, fontWeight: 500 };

export function FinancialFormMock({
  showCursor = true,
  cursorExitProgress = 0,
  onRevenueChange,
  onProjectedRevenueChange,
  onInvalidInput,
  onValidInput,
}: FinancialFormMockProps) {
  const [revenue, setRevenue] = useState("");
  const [projected, setProjected] = useState("");
  const [funding, setFunding] = useState("");
  const [fundingDate, setFundingDate] = useState("");
  const [tauntIndex, setTauntIndex] = useState(-1);
  const [tauntActive, setTauntActive] = useState(false);

  const handleMoney = (set: (digits: string) => void) => (value: string) => {
    if (/[^\d$,\s]/.test(value)) {
      setTauntIndex((i) => (i + 1) % LETTER_TAUNTS.length);
      setTauntActive(true);
      onInvalidInput?.();
    } else {
      setTauntActive(false);
      if (toDigits(value)) onValidInput?.();
    }
    set(toDigits(value));
  };

  const clearTaunt = () => setTauntActive(false);

  const totalDigits = revenue.length + projected.length;
  const cursorLabel =
    tauntActive && tauntIndex >= 0
      ? LETTER_TAUNTS[tauntIndex]
      : totalDigits === 0
        ? form.dragChip
        : `Supe${"r".repeat(totalDigits)} Important Document`;

  return (
    <div
      onMouseLeave={clearTaunt}
      className="flex h-full w-full flex-col gap-[5.2cqw] rounded-[1.56cqw] bg-[#f9f9f9] p-[7.5cqw] pt-[9cqw]"
    >
      <div className="flex flex-col gap-[0.78cqw]">
        <h3 className="font-mono font-normal leading-none tracking-[-0.04em] text-[#1d1d1d] text-[4.17cqw]">{form.title}</h3>
        <p className="text-[2.08cqw] leading-tight text-[#4e4e4e]">{form.subtitle}</p>
      </div>

      <div className="flex gap-[1.56cqw]">
        <Field label={form.revenueLabel} required>
          <Input
            ariaLabel="Revenue in the last 12 months"
            value={formatMoney(revenue)}
            onChange={handleMoney((d) => {
              setRevenue(d);
              onRevenueChange?.(d);
            })}
            onBlur={clearTaunt}
            placeholder={form.revenuePlaceholder}
            inputMode="numeric"
          />
        </Field>
        <Field label={form.projectedLabel} required>
          <Input
            ariaLabel="Projected revenue in next 12 months"
            value={formatMoney(projected)}
            onChange={handleMoney((d) => {
              setProjected(d);
              onProjectedRevenueChange?.(d);
            })}
            onBlur={clearTaunt}
            placeholder={form.projectedPlaceholder}
            inputMode="numeric"
          />
        </Field>
      </div>

      <div className="flex flex-col gap-[1.04cqw]">
        <span className="text-[2.08cqw] font-medium text-[#1d1d1d]">{form.uploadLabel}</span>
        <div className="relative">
          <div
            className={`flex flex-col items-center justify-center gap-[0.78cqw] rounded-[1.56cqw] border border-dashed border-[#999] px-[2.6cqw] py-[4.68cqw] ${showCursor ? "bg-[#dde4f6]" : ""}`}
          >
            <UploadIcon className="h-[3.12cqw] w-[3.12cqw] text-[#1d1d1d]" strokeWidth={1.75} />
            <p className="text-[2.08cqw] font-medium text-[#1d1d1d]">{form.dropTitle}</p>
            <p className="text-[2.08cqw] text-[#4e4e4e]">{form.dropSub}</p>
          </div>
          {showCursor ? <DragCursorChip text={cursorLabel} exitProgress={cursorExitProgress} /> : null}
        </div>
      </div>

      <div className="flex gap-[1.56cqw]">
        <Field label={form.fundingLabel}>
          <Input
            ariaLabel="Funding raised"
            value={formatMoney(funding)}
            onChange={handleMoney(setFunding)}
            onBlur={clearTaunt}
            placeholder={form.fundingPlaceholder}
            inputMode="numeric"
          />
        </Field>
        <Field label={form.dateLabel}>
          <Input ariaLabel="Funding date" value={fundingDate} onChange={setFundingDate} placeholder={form.datePlaceholder} />
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
          faceClassName="min-h-[24px] cursor-not-allowed rounded-[1.56cqw] border-0 bg-[#1e3a8a] px-[2.08cqw] py-[1.04cqw] text-[2.08cqw] font-medium leading-normal"
          faceStyle={FACE_TEXT_STYLE}
        >
          {form.next}
        </PressableButton>
      </div>
    </div>
  );
}
