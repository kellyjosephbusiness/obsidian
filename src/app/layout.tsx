import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const f37Bolton = localFont({
  src: [
    { path: "../../public/sites/corgi-insure-a0f7893c/shared/fonts/f37_bolton_regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/sites/corgi-insure-a0f7893c/shared/fonts/f37_bolton_medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-f37-bolton",
  display: "swap",
});

const georgia = localFont({
  src: "../../public/sites/corgi-insure-a0f7893c/shared/fonts/georgia.woff2",
  variable: "--font-georgia",
  display: "swap",
});

const heroHeading = localFont({
  src: "../../public/sites/corgi-insure-a0f7893c/shared/fonts/heroHeading.woff2",
  weight: "500",
  variable: "--font-hero-heading",
  display: "swap",
});

const heroSerif = localFont({
  src: "../../public/sites/corgi-insure-a0f7893c/shared/fonts/heroSerif.woff2",
  weight: "400",
  variable: "--font-hero-serif",
  display: "swap",
});

const SEO = "/sites/corgi-insure-a0f7893c/shared/seo/fundline";
const TITLE = "FundLine Capital: Small Business Funding, Matched in Minutes";
const DESCRIPTION =
  "Apply once and compare real offers from 75+ lenders. Term loans, lines of credit, SBA loans, and equipment financing for small businesses, funded in as little as 24 hours.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: `${SEO}/favicon-96x96.png`, sizes: "96x96", type: "image/png" },
      { url: `${SEO}/icon.svg`, type: "image/svg+xml" },
      { url: `${SEO}/favicon.ico`, sizes: "16x16 32x32 48x48" },
      { url: `${SEO}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${SEO}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: `${SEO}/apple-icon.png`, sizes: "180x180" }],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "FundLine Capital",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SEO}/og-image.png`, width: 1200, height: 630, alt: "FundLine Capital: Small Business Funding, Matched in Minutes" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${f37Bolton.variable} ${georgia.variable} ${heroHeading.variable} ${heroSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
