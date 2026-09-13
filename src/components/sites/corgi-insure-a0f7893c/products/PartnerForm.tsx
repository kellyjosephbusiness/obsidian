"use client";

import { useState, type FormEvent } from "react";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { H2_CLASS, Hairlines, Rails } from "../directors-and-officers-f2860438/rails";
import { PARTNER_FORM } from "./data";
import { Field, FORM_CARD_CLASS, INPUT_CLASS, LABEL_CLASS, SelectInput, ThanksState } from "./FormPrimitives";

const { fields } = PARTNER_FORM;
const toOptions = (values: readonly string[]) => values.map((v) => ({ value: v, label: v }));

/** Lender partner application (UI only: no network call; submit shows the inline thanks state). */
export function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [products, setProducts] = useState<string[]>([]);

  const toggleProduct = (p: string) => setProducts((cur) => (cur.includes(p) ? cur.filter((x) => x !== p) : [...cur, p]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id={PARTNER_FORM.id} className="relative scroll-mt-[120px] border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col gap-6 px-4 md:px-6">
          <h2 className={H2_CLASS}>{PARTNER_FORM.heading}</h2>
          <p className="text-body-large text-[#4a4a4a]">{PARTNER_FORM.sub}</p>
        </div>
        <div className="relative">
          <Hairlines zIndex="z-0" />
          <div className="relative z-10 mx-auto w-full max-w-[860px]">
            {submitted ? (
              <ThanksState heading={PARTNER_FORM.thanks.heading} body={PARTNER_FORM.thanks.body} />
            ) : (
              <form className={FORM_CARD_CLASS} onSubmit={onSubmit} noValidate={false}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Field label={fields.institution} htmlFor="pf-institution">
                    <input id="pf-institution" name="institution" type="text" required autoComplete="organization" placeholder="Northgate Community Bank" className={INPUT_CLASS} />
                  </Field>
                  <Field label={fields.type} htmlFor="pf-type">
                    <SelectInput id="pf-type" name="type" defaultValue={PARTNER_FORM.types[0]} options={toOptions(PARTNER_FORM.types)} />
                  </Field>
                  <Field label={fields.contact} htmlFor="pf-contact">
                    <input id="pf-contact" name="contact" type="text" required autoComplete="name" placeholder="Jordan Ellis" className={INPUT_CLASS} />
                  </Field>
                  <Field label={fields.email} htmlFor="pf-email">
                    <input id="pf-email" name="email" type="email" required autoComplete="email" placeholder="jordan@northgatebank.com" className={INPUT_CLASS} />
                  </Field>
                  <Field label={fields.phone} htmlFor="pf-phone">
                    <input id="pf-phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 010-2030" className={INPUT_CLASS} />
                  </Field>
                  <Field label={fields.volume} htmlFor="pf-volume">
                    <SelectInput id="pf-volume" name="volume" defaultValue={PARTNER_FORM.volumes[1]} options={toOptions(PARTNER_FORM.volumes)} />
                  </Field>
                </div>

                <fieldset className="flex flex-col gap-3">
                  <legend className={LABEL_CLASS}>{fields.products}</legend>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {PARTNER_FORM.products.map((p) => {
                      const checked = products.includes(p);
                      return (
                        <label
                          key={p}
                          className={`flex cursor-pointer items-center gap-2 rounded-[10px] border px-3 py-2.5 text-[14px] leading-[1.2] tracking-[-0.21px] transition-colors ${
                            checked ? "border-[#1e3a8a] bg-[#dde4f6] text-[#1e3a8a]" : "border-[#e1e1e1] bg-white text-[#1d1d1d] hover:border-[#c5d1f0]"
                          }`}
                        >
                          <input type="checkbox" name="products" value={p} checked={checked} onChange={() => toggleProduct(p)} className="size-4 shrink-0 accent-[#1e3a8a]" />
                          {p}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <Field label={fields.message} htmlFor="pf-message">
                  <textarea id="pf-message" name="message" rows={4} placeholder="Geographies, minimums, anything unusual about your credit box." className={`${INPUT_CLASS} min-h-[112px] resize-y py-3`} />
                </Field>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[12px] leading-[1.3] tracking-[-0.18px] text-[#606060]">By submitting you agree to be contacted about the FundLine lender network. No obligation.</p>
                  <PressableButton type="submit" variant="primary" size="large" className="w-fit" dataTrack="cta-for-lenders-form">
                    {PARTNER_FORM.submit}
                  </PressableButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
