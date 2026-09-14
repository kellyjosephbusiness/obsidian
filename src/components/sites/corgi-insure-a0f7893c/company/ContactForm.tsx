"use client";

import { useState, type FormEvent } from "react";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { CONTACT_FORM } from "./data";
import { FormCard, FormField, FormTitle, SubmittedState, TextArea, TextInput } from "./FormControls";

const { fields, placeholders } = CONTACT_FORM;

/** Contact form: name, business, email, phone, message → inline "Thanks" state. UI only, no network. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <FormCard>
        <SubmittedState title={CONTACT_FORM.done.title} body={CONTACT_FORM.done.body} action={CONTACT_FORM.done.action} />
      </FormCard>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6 rounded-[8px] border border-[#e1e1e1] bg-[#f9f9f9] p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)] md:p-8">
      <FormTitle title={CONTACT_FORM.title} sub={CONTACT_FORM.sub} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label={fields.name} htmlFor="contact-name" required>
          <TextInput id="contact-name" name="name" autoComplete="name" placeholder={placeholders.name} required />
        </FormField>
        <FormField label={fields.business} htmlFor="contact-business">
          <TextInput id="contact-business" name="business" autoComplete="organization" placeholder={placeholders.business} />
        </FormField>
        <FormField label={fields.email} htmlFor="contact-email" required>
          <TextInput id="contact-email" name="email" type="email" autoComplete="email" placeholder={placeholders.email} required />
        </FormField>
        <FormField label={fields.phone} htmlFor="contact-phone">
          <TextInput id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder={placeholders.phone} />
        </FormField>
        <FormField label={fields.message} htmlFor="contact-message" required className="sm:col-span-2">
          <TextArea id="contact-message" name="message" placeholder={placeholders.message} required />
        </FormField>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] leading-[1.3] tracking-[-0.18px] text-[#5c5c5c]">We reply within one business day. No credit check, no obligation.</p>
        <PressableButton type="submit" variant="primary" size="small" className="w-full sm:w-auto" dataTrack="cta-contact-form">
          {CONTACT_FORM.submit}
        </PressableButton>
      </div>
    </form>
  );
}
