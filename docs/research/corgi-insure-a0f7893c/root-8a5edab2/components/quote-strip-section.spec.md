# QuoteStripSection Specification (Intryc quote with staggered reveal)

## Overview
- **Target file:** `src/components/sites/corgi-insure-a0f7893c/root-8a5edab2/QuoteStripSection.tsx` (client)
- **Screenshots:** `sections/03-quote-strip-desktop.png` (pre-reveal), `dom/03-quote-strip-revealed.png` (revealed), `sections-mobile/03-quote-strip.png`
- **Interaction model:** in-view (once) time-based staggered reveal using `motion`
- **Data:** `QUOTE_STRIP`, `LINKS` from `./data`
- **Reference source:** `js/pretty/27stt6lyy-y9_.js` lines 44–146 (`JourneyQuoteSection`). Reproduce exactly (variants below).

## DOM structure
```
<section ref class="relative border-[#e1e1e1] border-b bg-background">
  <div aria-hidden class="pointer-events-none absolute inset-y-0 left-[max(16px,calc((100vw-1200px)/2))] w-px bg-[#e1e1e1] md:left-[max(24px,calc((100vw-1200px)/2))] lg:left-[max(64px,calc((100vw-1200px)/2))]" />
  <div aria-hidden … right-[max(16px,calc((100vw-1200px)/2))] … mirror />
  <Collapse open={step>=1}>            // motion.div animate={{height: open ? 'auto' : 0}} initial={{height:0}} transition={{duration:.35, ease:[.25,.1,.25,1]}} class="overflow-hidden"
    <div class="flex justify-center px-4 pt-16 pb-8 md:px-6 lg:px-16">
      <motion.div variants=logoVariants initial="hidden" animate={step>=1?'visible':'hidden'} class="relative size-12 shrink-0 overflow-hidden rounded-[11.52px] shadow-[0_0_3.84px_0_rgba(29,29,29,0.25)]" style={{willChange:'transform, opacity, filter'}}>
        <Image alt="Intryc" class="object-cover" fill sizes="48px" src=QUOTE_STRIP.logo />
      </motion.div>
    </div>
  </Collapse>
  <Collapse open={step>=2}>
    <div class="flex justify-center px-8 pb-8 md:px-6 lg:px-16">
      <p class="max-w-[1100px] text-center font-medium font-mono text-[28px] text-black leading-none tracking-[-0.896px] md:text-[36px] md:tracking-[-1.152px] lg:text-[48px] lg:tracking-[-1.536px]">
        <span class="sr-only">{quote}</span>
        <motion.span aria-hidden variants=containerVariants initial="hidden" animate={step>=2?'visible':'hidden'}>
          {words.map((w,i) => <Fragment key><motion.span class="inline-block" style={{willChange:'transform, opacity, filter'}} variants=wordVariants>{w}</motion.span>{i<last?' ':''}</Fragment>)}
        </motion.span>
      </p>
    </div>
  </Collapse>
  <Collapse open={step>=3}>
    <div class="flex justify-center px-4 pt-4 pb-16 md:px-6 lg:px-16">
      <motion.div variants=cardVariants initial="hidden" animate={step>=3?'visible':'hidden'} class="flex flex-col overflow-hidden rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_16px_0_rgba(25,25,25,0.05)]" style={{willChange:…}}>
        <div class="-mt-px -mx-px flex items-stretch overflow-hidden rounded-[24px] border border-[#e1e1e1] bg-white shadow-[0_0_16px_0_rgba(25,25,25,0.3)]">
          <div class="flex items-center self-stretch"><div class="relative h-20 w-20 shrink-0 overflow-hidden rounded-[24px]"><div class="absolute inset-0 bg-[#191919]"/><Image alt="Alex Marantelos" class="absolute inset-0 object-cover object-top" fill sizes="80px" src=QUOTE_STRIP.photo /></div></div>
          <div class="flex shrink-0 flex-col items-start overflow-hidden p-4"><div class="flex h-11 flex-col gap-1.5 whitespace-nowrap">
            <span class="font-medium text-[#1d1d1d] text-[16px] leading-[1.2] tracking-[-0.24px]">Alex Marantelos</span>
            <span class="font-normal text-[#4e4e4e] text-[14px] leading-[1.2] tracking-[-0.21px]">Co-founder CEO @ Intryc</span></div></div>
        </div>
        <div class="flex w-full flex-col items-start p-3">
          <PressableButton className="w-full" faceClassName="w-full gap-1 text-[16px] leading-[1.2] tracking-[-0.24px]" href="/customers/intryc" rel="noopener noreferrer" size="small" target="_blank" variant="white" dataTrack="cta-homepage-case-study-intryc">Read Intryc case study</PressableButton>
        </div>
      </motion.div>
    </div>
  </Collapse>
</section>
```

## Behavior (exact)
- `inView = useInView(sectionRef, { once: true, margin: "0px 0px -10% 0px" })`. When it becomes true: `setTimeout(step=1, 50)`, `setTimeout(step=2, 650)`, `setTimeout(step=3, 2150)`.
- Quote text: desktop `"“The minute I hit submit, documents come back, a Slack channel gets created, and the founding team messages me. It’s beautiful.”"`; on `matchMedia("(max-width: 767px)")` (effect on mount) use `"“I went through the application in five minutes. The team had everything packaged up for me.”"`. Split on spaces into words.
- Variants:
  - logo: hidden `{opacity:0, scale:.55, y:8, filter:'blur(6px)'}` → visible `{opacity:1, scale:1, y:0, filter:'blur(0px)', transition:{type:'spring', bounce:.5, duration:.48, delay:.075}}`
  - container: visible `{transition:{staggerChildren:.022, delayChildren:.12}}`
  - word: hidden `{opacity:0, y:14, filter:'blur(8px)'}` → visible `{opacity:1, y:0, filter:'blur(0px)', transition:{type:'spring', stiffness:75, damping:22, mass:1}}`
  - card: hidden `{opacity:0, y:16, filter:'blur(8px)'}` → visible `{…, transition:{type:'spring', stiffness:75, damping:22, mass:1, delay:.1}}`
- Each Collapse animates height 0 → auto (350ms). Final layout: section 321px tall on desktop (logo band 144px = pt-16 + 48 + pb-8; quote band 176px; card band 228px — wait: final measured total 321px at the moment of capture because the card collapse was still closed; fully revealed the section is 144 + 176 + 228 = 548px). Card 271×148: photo 80×80 rounded 24px on #191919; text column p-4.

## Computed styles
- quote p: F37 Bolton 500, 48px/48px -1.536px black, max-width 1100px, centered; words `inline-block`.
- logo 48×48, radius 11.52px, shadow 0 0 3.84px rgba(29,29,29,.25).
- card: white, radius 24px, border #e1e1e1, shadow 0 0 16px rgba(25,25,25,.05); inner header shadow 0 0 16px rgba(25,25,25,.3); button face 245×37, 16px/19.2px 500 #191919 on white with #e1e1e1 border and #e1e1e1 base.

## Responsive
- 390: quote 28px/28px -0.896px (mobile short quote), px-8; section rails at max(16px, …); card identical 271×148.
- 768: 36px/36px -1.152px; 1024+: 48px.
