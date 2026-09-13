import type { Metadata } from "next";
import { BROKER_FOOTER_CTA, BROKER_NAV_ACTIONS } from "@/components/sites/corgi-insure-a0f7893c/for-brokers-4e828285/data";
import { PARTNER_SIGN_IN, PARTNER_SIGN_IN_META } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";
import { SignInCard } from "@/components/sites/corgi-insure-a0f7893c/company/SignInCard";

export const metadata: Metadata = { title: PARTNER_SIGN_IN_META.title, description: PARTNER_SIGN_IN_META.description };

/** /partners/sign-in — the sign-in card with the broker header actions and footer CTA. */
export default function PartnerSignInPage() {
  return (
    <PageShell actions={BROKER_NAV_ACTIONS} footerCta={BROKER_FOOTER_CTA}>
      <SignInCard content={PARTNER_SIGN_IN} />
    </PageShell>
  );
}
