# FinancialFormMock Specification (the "Financial details" fake form used by the Get Quoted section)

## Overview
- **Target file:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FinancialFormMock.tsx` (client). Export `FinancialFormMock`, `DragCursorChip` (the "Important Document, Probably" cursor), `EstimateBubble`, and helpers `formatMoney`, `bubbleTierIndex`, `BUBBLE_MESSAGES`, `LETTER_TAUNTS`.
- **Screenshots:** `sections/06-get-quoted-desktop.png` (state A: orange panel with cursor), `dom/06-get-quoted-stateB.png` (state B: grey panel + corgi + bubble), `sections-mobile/06-get-quoted.png`
- **Interaction model:** real text inputs (user can type); cursor chip and bubble driven by props.
- **Reference source (reproduce 1:1):** `js/pretty/27stt6lyy-y9_.js` lines 146–248 — functions `i` (digits), `o` (money format), `c` (letter taunts), `d` (Field), `x` (Input), `p` (drag cursor), `u` (upload icon), `m` (the form), `g`+`v` (bubble messages/tiers), `b` (bubble).
- **Data:** `GET_QUOTED.form`, `GET_QUOTED.images` from `./data`.

## Props
```ts
interface FinancialFormMockProps {
  showCursor?: boolean;            // default true — renders the drag cursor over the drop zone (+ orange bg on the zone)
  cursorExitProgress?: number;     // 0..1, slides the cursor out to the right and fades it
  onRevenueChange?: (digits: string) => void;
  onProjectedRevenueChange?: (digits: string) => void;
  onInvalidInput?: () => void;     // non-digit typed
  onValidInput?: () => void;
}
```
All sizes use container-query units (`cqw`) — the parent card must be `@container` (Tailwind: class `@container`). Do not convert to px.

## Markup (verbatim from source)
```
<div onMouseLeave={clearInvalid} class="flex h-full w-full flex-col gap-[5.2cqw] rounded-[1.56cqw] bg-[#f9f9f9] p-[7.5cqw] pt-[9cqw]">
  <div class="flex flex-col gap-[0.78cqw]">
    <h3 class="font-mono font-normal leading-none tracking-[-0.04em] text-[#1d1d1d] text-[4.17cqw]">Financial details</h3>
    <p class="text-[2.08cqw] leading-tight text-[#4e4e4e]">Please provide financial details about your company.</p>
  </div>
  <div class="flex gap-[1.56cqw]">
    <Field label="Revenue in the last 12 months ($)" required><Input ariaLabel="Revenue in the last 12 months" value={fmt(revenue)} placeholder="$100T" inputMode="numeric" onChange=… onBlur=clearInvalid /></Field>
    <Field label="Projected revenue in next 12 months ($)" required><Input … placeholder="$500T" /></Field>
  </div>
  <div class="flex flex-col gap-[1.04cqw]">
    <span class="text-[2.08cqw] font-medium text-[#1d1d1d]">Upload any financial statements if available</span>
    <div class="relative">
      <div class={`flex flex-col items-center justify-center gap-[0.78cqw] rounded-[1.56cqw] border border-dashed border-[#999] px-[2.6cqw] py-[4.68cqw] ${showCursor ? "bg-[#ffdecc]" : ""}`}>
        <UploadIcon class="h-[3.12cqw] w-[3.12cqw] text-[#1d1d1d]" strokeWidth={1.75} />
        <p class="text-[2.08cqw] font-medium text-[#1d1d1d]">Drop the files here</p>
        <p class="text-[2.08cqw] text-[#4e4e4e]">Max 3 files, up to 50MB each</p>
      </div>
      {showCursor && <DragCursorChip text={label} exitProgress={cursorExitProgress} />}
    </div>
  </div>
  <div class="flex gap-[1.56cqw]">
    <Field label="Funding raised, if applicable ($)"><Input value={fmt(funding)} placeholder="Enter amount" inputMode="numeric" /></Field>
    <Field label="Funding date, if applicable"><Input value={date} placeholder="MM/DD/YYYY" /></Field>
  </div>
  <div class="flex items-center justify-between pt-[0.5cqw]">
    <PressableButton variant="black" depth… className="rounded-[1.56cqw] bg-[#575757]" faceClassName="min-h-[24px] rounded-[1.56cqw] border-0 bg-[#1d1d1d] px-[2.08cqw] py-[1.04cqw] text-[2.08cqw] font-medium leading-normal text-[#d9d9d9]">← Back</PressableButton>
    <PressableButton variant="orange" disabled className="rounded-[1.56cqw] bg-[#b84200] opacity-50" faceClassName="min-h-[24px] cursor-not-allowed rounded-[1.56cqw] border-0 bg-[#ff5c00] px-[2.08cqw] py-[1.04cqw] text-[2.08cqw] font-medium leading-normal">Next →</PressableButton>
  </div>
</div>
```
Notes: the site passes `depth:"0.5cqw"` — our `PressableButton.depth` is a number in px; instead pass `style={{["--pressable-depth" as string]: "0.5cqw"}}` (the CSS uses `var(--pressable-depth)`). The disabled Next button must not press (add `pointer-events-none` on the outer or a `data-press-trigger="none"`—our CSS only presses `[data-press-trigger=self]`, so setting the outer div's attribute via a wrapper with `[&>div]:…` isn't possible; simplest: give PressableButton `className="… pointer-events-none"`).

- `Field`: `<div class="flex min-w-0 flex-1 flex-col gap-[1.14cqw]"><span class="truncate font-medium leading-normal text-[#1d1d1d] text-[2cqw]">{label}{required && "*"}</span>{children}</div>`
- `Input`: `<input type="text" aria-label inputMode value onChange onBlur placeholder class="min-h-[max(24px,5.14cqw)] min-w-0 w-full rounded-[1.71cqw] border border-[#bdbdbd] bg-white px-[1.71cqw] py-[1.14cqw] font-normal leading-none text-[#1d1d1d] text-[2.28cqw] outline-none transition-all placeholder:text-[#9e9e9e] focus-visible:border-[var(--primary)] focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--primary)_50%,white)]" />`
- Digit handling: `digits = v.replace(/\D/g,'').slice(0,18)`; `formatMoney(d) = d ? '$' + Number(d).toLocaleString('en-US') : ''`; typing a non-digit (`/[^\d$,\s]/`) cycles the taunt index and calls onInvalidInput; valid → onValidInput.
- Cursor label: if a taunt is active → the taunt; else if no digits typed → "Important Document, Probably"; else "Supe" + "r".repeat(totalDigits) + " Important Document".
- LETTER_TAUNTS = ["Numbers not letters","Letters? In this economy?","Nice try, but we need digits","This field speaks math only","Letters don't pay the bills","Revenue isn't spelled out","Please speak in digits","Numbers. Just numbers."]

### DragCursorChip({ text, exitProgress=0 })
```
<div class="pointer-events-none absolute top-[36%] left-[80%] flex items-center gap-[0.78cqw]" style={{transform:`translate(calc(-50% + ${70*exit}cqw), -5cqw)`, opacity:1-exit, transition:'transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 350ms cubic-bezier(0.4, 0, 0.2, 1)'}}>
  <div class="relative h-[3.72cqw] w-[3.0cqw] shrink-0"><Image src=cursorDocument alt="" fill class="object-contain" sizes="30px" /></div>
  <div class="relative">
    <div class="rounded-full bg-[#2465e8] px-[1.12cqw] py-[0.3cqw]"><p class="whitespace-nowrap text-[2.24cqw] font-medium leading-[1.15] text-white">{text}</p></div>
    <div class="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2" style={{left:'69.28%', top:'76.2%', width:'6cqw', height:'6cqw'}}>
      <img src=cursorFill alt="" class="absolute" style={{left:'46.88%', top:'42.5%', width:'32.43%', height:'44.14%'}} />
      <img src=cursorBody alt="" class="absolute" style={{left:'50%', top:'46.81%', width:'26.13%', height:'36.66%'}} />
      <img src=greenPlus alt="" class="absolute" style={{left:'46.88%', top:'84.38%', width:'56.25%', height:'56.25%'}} />
    </div>
  </div>
</div>
```
### EstimateBubble({ text, entryProgress=1 })
```
<div class="pointer-events-none absolute left-[78.75%] top-[25.37%] flex items-center rounded-full bg-white px-[2cqw] py-[1cqw] shadow-[0_0_2.17cqw_rgba(25,25,25,0.2)]" style={{transform:`translateX(calc(-50% + ${(1-entry)*200}%)) translateY(12px)`, opacity:entry, transition:'transform 750ms cubic-bezier(0.4, 0, 0.2, 1), opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)'}}>
  <p class="whitespace-nowrap font-medium leading-none text-[#191919] text-[2.15cqw]">{text}</p>
  <svg viewBox="0 0 20 24" class="pointer-events-none absolute" aria-hidden style={{left:'45%', top:'calc(100% - 2px)', width:'2.5cqw', height:'3cqw', transform:'translateX(-50%) rotate(-8deg)'}}><path d="M0 0 L20 0 L10 24 Z" fill="white"/></svg>
</div>
```
### Bubble messages
`BUBBLE_MESSAGES = [["An estimate is fine"],["Modest start","Hmm, okay","Every dollar counts"],["Nice start!","Four figures!","Getting somewhere"],["Five figures!","Respectable","Not bad at all"],["Six figures!","Impressive!","Nicely done"],["Wow!","Seven figures!","Millionaire alert"],["Whoa!","Eight figures?!","Big league!"],["Holy cow!","Nine figures?!","Unicorn vibes"],["Billionaire?!","Bezos, is that you?","I might need a raise"],["Are you a country?","Okay, now you're flexing","Sure, buddy"]]`
`bubbleTierIndex(sumString)`: "" → 0; n<1e3 → 1; <1e4 → 2; <1e5 → 3; <1e6 → 4; <1e7 → 5; <1e8 → 6; <1e9 → 7; <1e12 → 8; else 9. The consumer picks `messages[tier][changeCount % len]` and shows "numbers please!" for 3s after an invalid input.

## Computed check (card 630px wide = 100cqw): h3 26.3px, labels 12.6px, inputs min-height 32.4px, drop zone bg #ffdecc, dashed #999 border, chip label 14.1px white on #2465e8.
