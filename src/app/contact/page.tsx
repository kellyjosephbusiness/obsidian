import type { Metadata } from "next";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";
import { ContactForm } from "@/components/sites/corgi-insure-a0f7893c/company/ContactForm";
import { CONTACT_FAQ, CONTACT_HERO, CONTACT_META, SUPPORT_CARDS } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { InfoCardGrid } from "@/components/sites/corgi-insure-a0f7893c/company/InfoCardGrid";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/company/PageHero";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";
import { SectionFrame } from "@/components/sites/corgi-insure-a0f7893c/company/SectionFrame";

export const metadata: Metadata = { title: CONTACT_META.title, description: CONTACT_META.description };

/** /contact — hero → contact form (with support cards beside it) → FAQ → footer. */
export default function ContactPage() {
  return (
    <PageShell>
      <PageHero content={CONTACT_HERO} />
      <SectionFrame width={1200} innerClassName="gap-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <ContactForm />
          <div className="flex flex-col gap-6 [&>ul]:grid-cols-1 [&>ul]:md:grid-cols-1 [&>ul]:lg:grid-cols-1">
            <InfoCardGrid items={SUPPORT_CARDS} />
          </div>
        </div>
      </SectionFrame>
      <FaqSection items={CONTACT_FAQ} heading="Contact FAQ" footer={{ text: "Still stuck?", link: { label: "Book a call", href: "/book-a-call" } }} />
    </PageShell>
  );
}
