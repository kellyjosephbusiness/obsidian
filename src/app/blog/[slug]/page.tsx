import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/sites/corgi-insure-a0f7893c/editorial/ArticlePage";
import { articlesOfKind, findArticle } from "@/components/sites/corgi-insure-a0f7893c/editorial/data";

interface BlogPostParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articlesOfKind("blog").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle("blog", slug);
  if (!article) return { title: "Blog | FundLine Capital" };
  return { title: `${article.title} | FundLine Blog`, description: article.excerpt };
}

/** One blog post rendered with the press-release article template. */
export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params;
  const article = findArticle("blog", slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
