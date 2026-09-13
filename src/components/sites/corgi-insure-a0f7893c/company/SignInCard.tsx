"use client";

import { useState, type FormEvent } from "react";
import { FundLineMark } from "@/components/sites/corgi-insure-a0f7893c/shared/FundLineLogo";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import type { SignInContent } from "@/types/sites/corgi-insure-a0f7893c/company";
import { Eyebrow } from "./PageHero";
import { FormField, InlineLink, TextInput } from "./FormControls";
import { Rails } from "./SectionFrame";

/**
 * Centered sign-in card under the fixed header: mark, eyebrow, heading, email + password, "Continue" and
 * the forgot / alternate links. Submit shows a "check your email" state; nothing is sent anywhere.
 */
export function SignInCard({ content }: { content: SignInContent }) {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <section className="relative flex min-h-[calc(100svh-120px)] items-center border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 pt-[150px] pb-16 md:px-6 md:pt-[176px] md:pb-24 lg:px-16">
      <Rails width={800} />
      <div className="relative mx-auto flex w-full max-w-[460px] flex-col items-center gap-6">
        <div className="w-full overflow-clip rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
          <div className="flex flex-col items-center gap-4 border-b border-[#e1e1e1] px-6 pt-8 pb-6 text-center md:px-10">
            <FundLineMark className="h-10" />
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <div className="flex flex-col gap-2">
              <h1 className="font-mono text-[32px] font-medium leading-[1.05] tracking-[-0.04em] text-[#191919] md:text-[36px]">{content.heading}</h1>
              <p className="text-[15px] leading-[1.4] tracking-[-0.2px] text-[#4e4e4e]">{content.sub}</p>
            </div>
          </div>

          {done ? (
            <div role="status" aria-live="polite" className="flex flex-col items-center gap-4 bg-[#f9f9f9] px-6 py-10 text-center md:px-10">
              <span className="flex size-14 items-center justify-center rounded-full bg-[#dde4f6] text-[#1e3a8a]">
                <MaterialIcon name="mark_email_read" size={28} />
              </span>
              <p className="text-[15px] leading-[1.45] tracking-[-0.2px] text-[#4e4e4e]">
                This is a preview: nothing was sent. In the live product a one-time code would go to <span className="font-medium text-[#191919]">{email || "your email"}</span>.
              </p>
              <button type="button" onClick={() => setDone(false)} className="text-[14px] font-medium text-[#1e3a8a] hover:underline">
                Back to sign in
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5 bg-[#f9f9f9] px-6 py-8 md:px-10">
              <FormField label={content.emailLabel} htmlFor="signin-email" required>
                <TextInput id="signin-email" name="email" type="email" autoComplete="email" placeholder="you@business.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </FormField>
              <FormField label={content.passwordLabel} htmlFor="signin-password" required>
                <div className="relative">
                  <TextInput id="signin-password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="••••••••" className="pr-11" required />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-[8px] text-[#4a4a4a] hover:bg-[#f0f0f0]"
                  >
                    <MaterialIcon name={showPassword ? "visibility_off" : "visibility"} size={20} />
                  </button>
                </div>
              </FormField>
              <div className="flex items-center justify-between">
                <InlineLink href={content.forgot.href}>{content.forgot.label}</InlineLink>
              </div>
              <PressableButton type="submit" variant="primary" size="large" faceClassName="w-full gap-1.5" className="w-full" dataTrack="cta-sign-in">
                {content.button}
                <MaterialIcon name="arrow_forward" size={20} />
              </PressableButton>
              <p className="text-center text-[14px] leading-[1.3] tracking-[-0.21px] text-[#4a4a4a]">
                {content.alt.text} <InlineLink href={content.alt.link.href}>{content.alt.link.label}</InlineLink>
              </p>
            </form>
          )}
        </div>
        <p className="flex max-w-[400px] items-start gap-2 text-center text-[12px] leading-[1.4] tracking-[-0.18px] text-[#7b7b7b]">
          <MaterialIcon name="lock" size={16} className="mt-px shrink-0" />
          <span>
            {content.note} <InlineLink href="/security">Security</InlineLink>
          </span>
        </p>
      </div>
    </section>
  );
}
