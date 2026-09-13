import type { ReactNode, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";

/**
 * Native inputs styled like `FinancialFormMock`: 12px labels, 1px #e1e1e1 borders, 10px radius,
 * navy focus ring, on a #f9f9f9 card. No hooks here so server components can import the classes.
 */

export const FORM_CARD_CLASS = "flex flex-col gap-6 rounded-[24px] border border-[#e1e1e1] bg-[#f9f9f9] p-6 md:p-8";

export const INPUT_CLASS =
  "min-h-[44px] w-full rounded-[10px] border border-[#e1e1e1] bg-white px-3 py-2 text-[14px] leading-[1.2] tracking-[-0.21px] text-[#1d1d1d] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#9e9e9e] focus-visible:border-[#1e3a8a] focus-visible:shadow-[0_0_0_3px_rgba(30,58,138,0.25)]";

export const LABEL_CLASS = "text-[12px] font-medium leading-[1.2] tracking-[-0.18px] text-[#1d1d1d]";

interface FieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}

export function Field({ label, htmlFor, hint, children, className }: FieldProps) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className={LABEL_CLASS}>
        {label}
      </label>
      {children}
      {hint && <p className="text-[12px] leading-[1.3] tracking-[-0.18px] text-[#606060]">{hint}</p>}
    </div>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & { options: readonly { value: string; label: string }[] };

/** Native select with the input skin and a Material chevron. */
export function SelectInput({ options, className, ...rest }: SelectFieldProps) {
  return (
    <div className="relative">
      <select {...rest} className={cn(INPUT_CLASS, "appearance-none pr-10", className)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <MaterialIcon name="keyboard_arrow_down" size={20} className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#4a4a4a]" />
    </div>
  );
}

interface ThanksStateProps {
  heading: string;
  body: string;
}

/** Inline confirmation rendered in place of a submitted form. */
export function ThanksState({ heading, body }: ThanksStateProps) {
  return (
    <div role="status" className="flex flex-col items-center gap-4 rounded-[24px] border border-[#e1e1e1] bg-white px-6 py-12 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-[#dde4f6]">
        <MaterialIcon name="check" size={28} className="text-[#1e3a8a]" />
      </div>
      <h3 className="font-mono text-[24px] font-medium leading-none tracking-[-0.77px] text-[#191919] md:text-[28px]">{heading}</h3>
      <p className="max-w-[480px] text-body text-[#4a4a4a]">{body}</p>
    </div>
  );
}

/** "$1,234,567" — whole dollars. */
export const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
/** "$1,234.56" — cents kept for payment figures. */
export const usdCents = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
