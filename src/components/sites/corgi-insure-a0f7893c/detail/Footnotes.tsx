/** Numbered disclosure lines referenced by the ¹ ² ³ markers above. */
export function Footnotes({ notes }: { notes: string[] }) {
  if (!notes.length) return null;
  return (
    <section className="border-b border-[#e1e1e1] bg-[#f6f6f6] px-4 py-8 md:px-6 lg:px-16">
      <ol className="mx-auto flex w-full max-w-[1200px] flex-col gap-2 text-[13px] leading-[1.45] tracking-[-0.2px] text-[#4a4a4a]">
        {notes.map((n, i) => (
          <li key={n} className="flex gap-2">
            <span className="w-3 shrink-0 text-[#1e3a8a]">{i + 1}</span>
            <span>{n}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
