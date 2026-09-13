"use client";

import { useMemo, useState, useSyncExternalStore, type FormEvent } from "react";
import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import { PressableButton } from "@/components/sites/corgi-insure-a0f7893c/shared/PressableButton";
import { cn } from "@/lib/utils";
import { BOOK_FORM, BOOK_SLOTS, BOOK_TOPIC_OPTIONS, BOOK_TRUST } from "./data";
import { FormCard, FormField, FormTitle, SelectInput, SubmittedState, TextInput } from "./FormControls";
import { Rails } from "./SectionFrame";

interface DayOption {
  key: string;
  weekday: string;
  day: string;
  month: string;
  long: string;
}

const subscribeNoop = () => () => {};
/** True only after hydration, so the date grid (which depends on the viewer's clock) never mismatches SSR. */
const useIsClient = () => useSyncExternalStore(subscribeNoop, () => true, () => false);

/** Next seven days starting tomorrow, in the viewer's locale. */
function buildDays(): DayOption[] {
  const out: DayOption[] = [];
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  for (let i = 1; i <= 7; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    out.push({
      key: d.toISOString().slice(0, 10),
      weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
      day: d.toLocaleDateString("en-US", { day: "numeric" }),
      month: d.toLocaleDateString("en-US", { month: "short" }),
      long: d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
    });
  }
  return out;
}

/** Deterministic "already booked" pattern so the grid looks lived-in. */
function isTaken(dayIndex: number, slotIndex: number): boolean {
  return (dayIndex * 7 + slotIndex * 3) % 5 === 2;
}

/**
 * Calendar-style picker (next 7 days × 4 slots, client state) + contact fields → confirmation showing the
 * chosen day and time. UI only, no network.
 */
export function BookACall() {
  const mounted = useIsClient();
  const days = useMemo(() => (mounted ? buildDays() : []), [mounted]);
  const [dayIndex, setDayIndex] = useState(0);
  const [slotIndex, setSlotIndex] = useState<number | null>(null);
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const selectedDay = days[dayIndex];
  const selectedSlot = slotIndex === null ? null : BOOK_SLOTS[slotIndex];
  const ready = Boolean(selectedDay && selectedSlot);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ready) return;
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="relative border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails width={1200} />
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-6">
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {BOOK_TRUST.map((t) => (
            <li key={t.text} className="flex items-center gap-1.5 rounded-full border border-[#e1e1e1] bg-white px-3.5 py-1.5 text-[13px] font-medium leading-none tracking-[-0.2px] text-[#191919]">
              <MaterialIcon name={t.icon} size={16} className="text-[#1e3a8a]" />
              {t.text}
            </li>
          ))}
        </ul>

        {done && selectedDay && selectedSlot ? (
          <FormCard className="mx-auto w-full max-w-[720px]">
            <SubmittedState title={BOOK_FORM.done.title} body={BOOK_FORM.done.body} action={BOOK_FORM.done.action} secondary={BOOK_FORM.done.secondary}>
              <div className="flex items-center gap-4 rounded-[10px] border border-[#e1e1e1] bg-white px-5 py-4 text-left">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[12px] bg-[#dde4f6] text-[#1e3a8a]">
                  <MaterialIcon name="event_available" size={24} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[18px] font-medium leading-[1.1] tracking-[-0.02em] text-[#191919]">
                    {selectedDay.long}, {selectedSlot.label}
                  </span>
                  <span className="text-[14px] leading-[1.3] tracking-[-0.21px] text-[#4a4a4a]">20-minute call with a funding specialist{name ? ` for ${name}` : ""}</span>
                </div>
              </div>
            </SubmittedState>
          </FormCard>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <FormCard>
              <FormTitle title={BOOK_FORM.pickerTitle} sub={BOOK_FORM.pickerSub} />

              <div role="radiogroup" aria-label="Day" className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                {(days.length ? days : Array.from({ length: 7 }, (_, i) => ({ key: `skeleton-${i}`, weekday: "", day: "", month: "", long: "" }))).map((d, i) => {
                  const selected = i === dayIndex;
                  const skeleton = !d.day;
                  return (
                    <button
                      key={d.key}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      aria-label={d.long || "Loading"}
                      disabled={skeleton}
                      onClick={() => {
                        setDayIndex(i);
                        setSlotIndex(null);
                      }}
                      className={cn(
                        "flex min-h-[72px] flex-col items-center justify-center gap-1 rounded-[10px] border bg-white py-2.5 transition-colors",
                        selected ? "border-[#1e3a8a] shadow-[0_0_0_3px_rgba(30,58,138,0.2)]" : "border-[#e1e1e1] hover:border-[#1e3a8a]",
                        skeleton && "animate-pulse border-[#ededed]",
                      )}
                    >
                      <span className={cn("text-[11px] font-medium uppercase leading-none tracking-[0.06em]", selected ? "text-[#1e3a8a]" : "text-[#7b7b7b]")}>{d.weekday}</span>
                      <span className="font-mono text-[22px] font-medium leading-none tracking-[-0.02em] text-[#191919]">{d.day}</span>
                      <span className="text-[11px] leading-none tracking-[-0.16px] text-[#7b7b7b]">{d.month}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[12px] font-medium leading-[1.2] tracking-[-0.18px] text-[#1d1d1d]">{selectedDay ? selectedDay.long : "Time"}</span>
                <div role="radiogroup" aria-label="Time" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {BOOK_SLOTS.map((slot, i) => {
                    const taken = isTaken(dayIndex, i);
                    const selected = slotIndex === i;
                    return (
                      <button
                        key={slot.label}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        disabled={taken || !selectedDay}
                        onClick={() => setSlotIndex(i)}
                        className={cn(
                          "flex min-h-[44px] items-center justify-center gap-1.5 rounded-[10px] border text-[14px] font-medium leading-none tracking-[-0.21px] transition-colors",
                          selected ? "border-[#1e3a8a] bg-[#1e3a8a] text-white" : "border-[#e1e1e1] bg-white text-[#191919] hover:border-[#1e3a8a]",
                          taken && "cursor-not-allowed border-[#ededed] bg-[#f6f6f6] text-[#b5b5b5] line-through hover:border-[#ededed]",
                        )}
                      >
                        {slot.label}
                        {taken ? <span className="text-[11px] no-underline">({BOOK_FORM.taken})</span> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            </FormCard>

            <FormCard>
              <FormTitle title={BOOK_FORM.detailsTitle} />
              <div className="grid grid-cols-1 gap-4">
                <FormField label={BOOK_FORM.fields.name.label} htmlFor="book-name" required>
                  <TextInput id="book-name" autoComplete="name" placeholder={BOOK_FORM.fields.name.placeholder} value={name} onChange={(e) => setName(e.target.value)} />
                </FormField>
                <FormField label={BOOK_FORM.fields.email.label} htmlFor="book-email" required>
                  <TextInput id="book-email" type="email" autoComplete="email" placeholder={BOOK_FORM.fields.email.placeholder} />
                </FormField>
                <FormField label={BOOK_FORM.fields.phone.label} htmlFor="book-phone" required>
                  <TextInput id="book-phone" type="tel" autoComplete="tel" placeholder={BOOK_FORM.fields.phone.placeholder} />
                </FormField>
                <FormField label={BOOK_FORM.fields.business.label} htmlFor="book-business">
                  <TextInput id="book-business" autoComplete="organization" placeholder={BOOK_FORM.fields.business.placeholder} />
                </FormField>
                <FormField label={BOOK_FORM.fields.topic.label} htmlFor="book-topic">
                  <SelectInput id="book-topic" options={BOOK_TOPIC_OPTIONS} placeholder={BOOK_FORM.fields.topic.placeholder} value={topic} onChange={(e) => setTopic(e.target.value)} />
                </FormField>
              </div>
              <div className="mt-auto flex flex-col gap-3 border-t border-[#e1e1e1] pt-6">
                <p className="text-[13px] leading-[1.3] tracking-[-0.2px] text-[#4a4a4a]" aria-live="polite">
                  {ready && selectedDay && selectedSlot ? (
                    <>
                      <span className="font-medium text-[#191919]">{selectedDay.long}</span> at <span className="font-medium text-[#191919]">{selectedSlot.label}</span>
                    </>
                  ) : (
                    BOOK_FORM.noSlot
                  )}
                </p>
                <PressableButton type="submit" variant="primary" size="large" disabled={!ready} className={cn("w-full", !ready && "opacity-50")} faceClassName={cn("w-full gap-1.5", !ready && "cursor-not-allowed")} dataTrack="cta-book-a-call">
                  {BOOK_FORM.submit}
                  <MaterialIcon name="arrow_forward" size={20} />
                </PressableButton>
              </div>
            </FormCard>
          </form>
        )}
      </div>
    </section>
  );
}
