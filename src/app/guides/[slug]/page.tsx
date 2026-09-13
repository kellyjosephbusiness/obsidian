import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/sites/corgi-insure-a0f7893c/editorial/ArticlePage";
import { articlesOfKind, findArticle } from "@/components/sites/corgi-insure-a0f7893c/editorial/data";

interface GuideParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articlesOfKind("guide").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: GuideParams): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle("guide", slug);
  if (!article) return { title: "Small Business Guides | FundLine Capital" };
  return { title: `${article.title} | FundLine Guides`, description: article.excerpt };
}

/** One guide rendered with the press-release article template. */
export default async function GuidePage({ params }: GuideParams) {
  const { slug } = await params;
  const article = findArticle("guide", slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
