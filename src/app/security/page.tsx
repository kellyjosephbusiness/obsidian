import type { Metadata } from "next";
import { FaqSection } from "@/components/sites/corgi-insure-a0f7893c/root-8a5edab2/FaqSection";
import { CtaBand } from "@/components/sites/corgi-insure-a0f7893c/company/CtaBand";
import { SECURITY_CONTROLS, SECURITY_CONTROLS_HEADER, SECURITY_CTA, SECURITY_FAQ, SECURITY_HERO, SECURITY_META } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { IconCardGrid } from "@/components/sites/corgi-insure-a0f7893c/company/IconCardGrid";
import { PageHero } from "@/components/sites/corgi-insure-a0f7893c/company/PageHero";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";
import { SectionFrame } from "@/components/sites/corgi-insure-a0f7893c/company/SectionFrame";

export const metadata: Metadata = { title: SECURITY_META.title, description: SECURITY_META.description };

/** /security — hero → six control cards → FAQ → CTA → footer. */
export default function SecurityPage() {
  return (
    <PageShell>
      <PageHero content={SECURITY_HERO} dataTrack="cta-security-hero" />
      <SectionFrame heading={SECURITY_CONTROLS_HEADER.heading} sub={SECURITY_CONTROLS_HEADER.sub}>
        <IconCardGrid items={SECURITY_CONTROLS} columns={3} />
      </SectionFrame>
      <FaqSection items={SECURITY_FAQ} heading="Security FAQ" footer={{ text: "Have a question we did not answer?", link: { label: "Email security@fundlinecapital.com", href: "mailto:security@fundlinecapital.com" } }} />
      <CtaBand content={SECURITY_CTA} dataTrack="cta-security" />
    </PageShell>
  );
}
