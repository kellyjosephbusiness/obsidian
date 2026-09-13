import type { Metadata } from "next";
import { BookACall } from "@/components/sites/corgi-insure-a0f7893c/company/BookACall";
import { BOOK_HERO, BOOK_META } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/company/PageHero";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";

export const metadata: Metadata = { title: BOOK_META.title, description: BOOK_META.description };

/** /book-a-call — hero → 7-day × 4-slot picker + contact fields → confirmation → footer. */
export default function BookACallPage() {
  return (
    <PageShell>
      <PageHero content={BOOK_HERO} />
      <BookACall />
    </PageShell>
  );
}
