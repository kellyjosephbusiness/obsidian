import { GLOSSARY, GLOSSARY_ENTRIES } from "./data";
import { H2_CLASS, Hairlines, Rails } from "./rails";

/** "Term Loan Glossary": definition list in a white rounded card with hairline rows. */
export function GlossarySection() {
  return (
    <section id="glossary" className="relative px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col gap-6 px-6">
          <h2 className={H2_CLASS}>{GLOSSARY.heading}</h2>
          <p className="text-body-large text-[#4a4a4a]">{GLOSSARY.sub}</p>
        </div>
        <div className="relative">
          <Hairlines zIndex="z-0" />
          <dl className="relative z-10 flex flex-col rounded-[8px] border border-[#e1e1e1] bg-white shadow-[0_0_12px_rgba(25,25,25,0.05)]">
            {GLOSSARY_ENTRIES.map((entry, i) => (
              <div key={entry.term} className={`flex flex-col gap-2 p-5 md:flex-row md:items-start md:gap-8 md:p-6 ${i > 0 ? "border-t border-[#e1e1e1]" : ""}`}>
                <dt className="font-bold text-[16px] leading-[1.3] tracking-[-0.32px] text-[#191919] md:w-[260px] md:shrink-0 md:text-[18px] md:tracking-[-0.36px]">{entry.term}</dt>
                <dd className="text-[14px] leading-[1.4] tracking-[-0.21px] text-[#4a4a4a]">{entry.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
