import { MaterialIcon } from "@/components/sites/corgi-insure-a0f7893c/shared/MaterialIcon";
import type { FeaturePageContent } from "@/types/sites/corgi-insure-a0f7893c/products";
import { H2_CLASS, Hairlines, Rails } from "../directors-and-officers-f2860438/rails";

/** Dark code card (real monospace, not the F37 heading font) with a filename bar and a notes column. */
export function IntegrationSnippet({ snippet }: { snippet: FeaturePageContent["snippet"] }) {
  return (
    <section id="snippet" className="relative scroll-mt-[120px] border-b border-[#e1e1e1] px-4 py-16 md:px-6 md:py-20 lg:px-16 lg:py-24">
      <Rails />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col gap-6 px-4 md:px-6">
          <h2 className={H2_CLASS}>{snippet.heading}</h2>
          <p className="text-body-large text-[#4a4a4a]">{snippet.sub}</p>
        </div>
        <div className="relative">
          <Hairlines zIndex="z-0" />
          <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
            <div className="overflow-hidden rounded-[24px] border border-[#585858] bg-[#191919] shadow-[0_0_24px_0_rgba(25,25,25,0.15)]">
              <div className="flex items-center gap-2 border-b border-[#585858] px-5 py-3">
                <span className="size-2.5 rounded-full bg-[#ff405d]" />
                <span className="size-2.5 rounded-full bg-[#fe9850]" />
                <span className="size-2.5 rounded-full bg-[#4fc39a]" />
                <span className="ml-2 text-[12px] leading-none text-[#9e9e9e]">{snippet.filename}</span>
              </div>
              <pre className="overflow-x-auto p-5 font-[ui-monospace,SFMono-Regular,Menlo,monospace] text-[13px] leading-[1.65] text-[#ddd] md:p-6">
                <code>{snippet.code}</code>
              </pre>
            </div>
            <ul className="flex flex-col gap-3 rounded-[24px] border border-[#e1e1e1] bg-white p-6 shadow-[0_0_24px_0_rgba(25,25,25,0.05)]">
              {snippet.notes.map((note) => (
                <li key={note} className="flex items-start gap-3 text-[14px] leading-[1.3] tracking-[-0.21px] text-[#4a4a4a]">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#dde4f6]">
                    <MaterialIcon name="check" size={16} className="text-[#1e3a8a]" />
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
