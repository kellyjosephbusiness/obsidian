import Link from "next/link";
import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { CompanyCta, SelectOption } from "@/types/sites/corgi-insure-a0f7893c/company";
import { cn } from "@/lib/utils";

/**
 * Native form controls styled like the home page's FinancialFormMock, at fixed px instead of cqw:
 * 12px medium labels, 1px `#e1e1e1` borders, `rounded-[8px]`, navy focus ring, on a `#f9f9f9` card.
 */

export const CONTROL_CLASS =
  "min-h-[44px] w-full min-w-0 rounded-[8px] border border-[#e1e1e1] bg-white px-3.5 py-2.5 text-[15px] leading-[1.2] tracking-[-0.2px] text-[#1d1d1d] outline-none transition-[border-color,box-shadow] placeholder:text-[#6b6b6b] focus-visible:border-[#0376FD] focus-visible:shadow-[0_0_0_3px_rgba(30,58,138,0.25)] disabled:bg-[#f6f6f6] disabled:text-[#9e9e9e]";

export function FormField({ label, htmlFor, required, hint, children, className }: { label: string; htmlFor: string; required?: boolean; hint?: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-[12px] font-medium leading-[1.2] tracking-[-0.18px] text-[#1d1d1d]">
        {label}
        {required ? <span aria-hidden> *</span> : null}
      </label>
      {children}
      {hint ? <span className="text-[12px] leading-[1.3] tracking-[-0.18px] text-[#5c5c5c]">{hint}</span> : null}
    </div>
  );
}

export function TextInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(CONTROL_CLASS, className)} />;
}

export function TextArea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(CONTROL_CLASS, "min-h-[120px] resize-y leading-[1.4]", className)} />;
}

export function SelectInput({ options, placeholder, className, value, ...props }: SelectHTMLAttributes<HTMLSelectElement> & { options: SelectOption[]; placeholder: string }) {
  return (
    <div className="relative">
      <select {...props} value={value} className={cn(CONTROL_CLASS, "appearance-none pr-10", value === "" && "text-[#6b6b6b]", className)}>
        <option value="" disabled>
          {placeholder}
        </option>
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

export function CheckboxField({ id, label, checked, onChange }: { id: string; label: string; checked: boolean; onChange: (next: boolean) => void }) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
      <span className="relative mt-0.5 flex size-[18px] shrink-0">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer size-full cursor-pointer appearance-none rounded-[4px] border border-[#bdbdbd] bg-white outline-none transition-colors checked:border-[#0376FD] checked:bg-[#0376FD] focus-visible:shadow-[0_0_0_3px_rgba(30,58,138,0.25)]"
        />
        <MaterialIcon name="check" size={14} weight={700} className="pointer-events-none absolute inset-0 m-auto text-white opacity-0 transition-opacity peer-checked:opacity-100" />
      </span>
      <span className="text-[13px] leading-[1.4] tracking-[-0.2px] text-[#4a4a4a]">{label}</span>
    </label>
  );
}

/** The `#f9f9f9` form card. */
export function FormCard({ children, className, as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "form" }) {
  return <Tag className={cn("flex flex-col gap-6 rounded-[8px] border border-[#e1e1e1] bg-[#f9f9f9] p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:p-8", className)}>{children}</Tag>;
}

export function FormTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h2 className="font-mono text-[26px] font-medium leading-[1.05] tracking-[-0.04em] text-[#1d1d1d] md:text-[30px]">{title}</h2>
      {sub ? <p className="text-[14px] leading-[1.35] tracking-[-0.21px] text-[#4e4e4e]">{sub}</p> : null}
    </div>
  );
}

/** Inline confirmation rendered in place of a submitted form. */
export function SubmittedState({ title, body, action, secondary, children }: { title: string; body: string; action: CompanyCta; secondary?: CompanyCta; children?: ReactNode }) {
  return (
    <div role="status" aria-live="polite" className="flex flex-col items-center gap-6 py-6 text-center md:py-10">
      <span className="flex size-16 items-center justify-center rounded-[8px] bg-[#DDEAFE] text-[#0160CC]">
        <MaterialIcon name="check" size={32} weight={600} />
      </span>
      <div className="flex flex-col gap-3">
        <h2 className="font-mono text-[28px] font-medium leading-[1.05] tracking-[-0.04em] text-[#1d1d1d] md:text-[32px]">{title}</h2>
        <p className="max-w-[520px] text-[15px] leading-[1.45] tracking-[-0.2px] text-[#4e4e4e]">{body}</p>
      </div>
      {children}
      <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
        <PressableButton variant="primary" size="small" href={action.href}>
          {action.label}
        </PressableButton>
        {secondary && secondary.href !== action.href ? (
          <PressableButton variant="white" size="small" href={secondary.href}>
            {secondary.label}
          </PressableButton>
        ) : null}
      </div>
    </div>
  );
}

/** Tiny "link line" used under sign-in cards and forms. */
export function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-medium text-[#0160CC] hover:underline">
      {children}
    </Link>
  );
}
