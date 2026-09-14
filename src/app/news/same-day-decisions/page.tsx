import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/sites/corgi-insure-a0f7893c/editorial/ArticlePage";
import { findArticle } from "@/components/sites/corgi-insure-a0f7893c/editorial/data";

const SLUG = "same-day-decisions";
const article = findArticle("news", SLUG);

export const metadata: Metadata = article
  ? { title: `${article.title} | Newsroom`, description: article.excerpt }
  : { title: "Newsroom | FundLine Capital" };

/** Press release linked from the announcement bar ("New: same-day funding decisions on lines of credit up to $500K"). */
export default function SameDayDecisionsPressRelease() {
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
