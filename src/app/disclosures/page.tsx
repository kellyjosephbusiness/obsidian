import type { Metadata } from "next";
import { legalPageBySlug } from "@/components/sites/corgi-insure-a0f7893c/products/data";
import { LegalPage } from "@/components/sites/corgi-insure-a0f7893c/products/LegalPage";

/** Placeholder legal copy for a fictional funding brokerage — see LEGAL_PAGES in products/data.ts. */
const content = legalPageBySlug("disclosures")!;

export const metadata: Metadata = { title: content.meta.title, description: content.meta.description };

export default function UdisclosuresPage() {
  return <LegalPage content={content} />;
}
