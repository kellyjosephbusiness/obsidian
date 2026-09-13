import type { Metadata } from "next";
import { SIGN_IN, SIGN_IN_META } from "@/components/sites/corgi-insure-a0f7893c/company/data";
import { PageShell } from "@/components/sites/corgi-insure-a0f7893c/company/PageShell";
import { SignInCard } from "@/components/sites/corgi-insure-a0f7893c/company/SignInCard";

export const metadata: Metadata = { title: SIGN_IN_META.title, description: SIGN_IN_META.description };

/** /sign-in — centered owner sign-in card. */
export default function SignInPage() {
  return (
    <PageShell>
      <SignInCard content={SIGN_IN} />
    </PageShell>
  );
}
