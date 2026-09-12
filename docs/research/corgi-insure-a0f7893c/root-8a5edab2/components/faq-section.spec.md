# FaqSection Specification

## Overview
- **Target file:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection.tsx` (client)
- **Screenshots:** `sections/09-faq-desktop.png` (closed), `dom/09-faq-open.png` (first item open), `sections-mobile/09-faq.png`
- **Interaction model:** click-driven single-open accordion (custom, no Radix)
- **Data:** `FAQ_HEADER`, `FAQ` from `./data` (answers are trusted HTML → `dangerouslySetInnerHTML`; they contain `<a class="underline" href>` links)

## DOM structure
```
<section class="relative border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-16 md:px-6 md:py-20 lg:px-16">
  <div aria-hidden class="pointer-events-none absolute top-0 bottom-0 left-[max(16px,calc((100%-800px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100%-800px)/2))] lg:left-[max(64px,calc((100%-800px)/2))]" />  + right mirror
  <div class="relative mx-auto flex w-full max-w-[800px] flex-col items-center gap-6">
    <h2 class="px-6 text-center font-medium font-mono text-[#191919]" (font-size var(--h1-font-size) → 48px desktop / 28px mobile; line-height 1; tracking -0.032em)>FAQ</h2>
    <div class="relative w-full">
      <div aria-hidden class="pointer-events-none absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#e1e1e1]" />
      <div aria-hidden class="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[#e1e1e1]" />
      <div class="relative w-full overflow-clip rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
        <div class="relative -m-px flex flex-col justify-center gap-4 overflow-clip rounded-[24px] bg-[#f6f6f6] p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
          {items.map((item, i) => <Fragment key>
            <div class="flex flex-col">
              <button type="button" aria-expanded={open===i} aria-controls={id} onClick={toggle} class="flex min-h-[24px] w-full items-center justify-between gap-4 text-left">
                <span class="font-bold text-[16px] leading-[1.2] tracking-[-0.24px] text-[#4a4a4a]">{question}</span>
                <MaterialIcon name="keyboard_arrow_down" size={16} className="shrink-0 text-[#4a4a4a] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{transform: open===i ? 'rotate(180deg)' : 'none'}} />
              </button>
              <div id={id} class="overflow-hidden transition-[height,margin-top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{height: open===i ? contentHeight : 0, marginTop: open===i ? 8 : 0}}>
                <div ref=contentRef class="text-body text-[#4a4a4a] transition-[transform,opacity,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={open===i ? {transform:'translateY(0px)', opacity:1, filter:'blur(0px)'} : {transform:'translateY(-8px)', opacity:0, filter:'blur(2px)'}} dangerouslySetInnerHTML={{__html: answerHtml}} />
              </div>
            </div>
            {i < last && <div class="h-px w-full bg-[#e1e1e1]" />}
          </Fragment>)}
        </div>
        <div class="flex items-center justify-center px-4 py-5 text-center">
          <p class="text-body text-[#4a4a4a]">Can’t find an answer to your question? <Link href="/book-a-demo" class="text-[#ff5c00] hover:underline">Get in touch</Link></p>
        </div>
      </div>
    </div>
  </div>
</section>
```
Measure `contentHeight` from the inner div's `scrollHeight`/`offsetHeight` (ResizeObserver) so the height transition animates to the exact value (observed: 78px wrapper for a 77px 4-line answer, margin-top 8px).

## Behavior
- One open at a time: clicking a closed item opens it and closes the previous; clicking the open item closes it. Initial: all closed.
- Transitions (all 500ms cubic-bezier(.22,1,.36,1)): wrapper height 0→content & margin-top 0→8px; inner translateY(-8px)/opacity 0/blur(2px) → 0/1/0; chevron rotate 0→180deg.
- No hover style on the question button (color stays #4a4a4a, bg transparent).

## Computed styles (1440)
- section 1440×706, padding 80px 64px; container 800px; h2 48px/48px -1.536px centered with px-6; gap 24px.
- Card: white, radius 24px, border #e1e1e1, shadow 0 0 24px rgba(25,25,25,.05); inner grey panel `-m-px` bg #f6f6f6 radius 24px p-6 gap-4 (rows 24px tall closed; dividers 1px #e1e1e1); footer row py-5 px-4 centered: "Can’t find an answer to your question? Get in touch" 16px/19.2px, link #ff5c00.
- Question: 16px/19.2px 700 -0.24px #4a4a4a; chevron 16px #4a4a4a.

## Responsive
- 390: padding 64px 16px; h2 28px; rows may wrap to 2 lines (38px); card 358 wide; rails at 16px.
