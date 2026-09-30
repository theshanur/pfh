import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.pfhmarkets.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Commodity Trading | Trade Global Commodity Markets | PFH Markets",
    template: "%s | PFH Markets",
  },
  description:
    "Trade commodity CFDs including agricultural, soft, and industrial commodities through PFH Markets. Access advanced trading tools, educational resources, and professional market access.",
  keywords: [
    "Commodity Trading",
    "Commodity CFDs",
    "Agricultural Commodities",
    "Industrial Commodities",
    "Soft Commodities",
    "Commodity Markets",
    "Trade Commodities Online",
    "Commodity Trading Platform",
    "What is commodity trading?",
    "How do commodity markets work?",
    "What affects commodity prices?",
    "Supply and demand in commodity markets",
    "Agricultural commodity trading",
    "Industrial commodity market analysis",
  ],
  authors: [{ name: "PFH Markets" }],
  creator: "PFH Markets",
  publisher: "PFH Markets",
  applicationName: "PFH Markets",
  category: "Finance",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "PFH Markets",
    title:
      "Commodity Trading | Trade Global Commodity Markets | PFH Markets",
    description:
      "Trade commodity CFDs including agricultural, soft, and industrial commodities through PFH Markets. Access advanced trading tools, educational resources, and professional market access.",
    images: [
      {
        url: "/hero2.png",
        width: 1200,
        height: 630,
        alt: "PFH Markets commodity trading platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Commodity Trading | Trade Global Commodity Markets | PFH Markets",
    description:
      "Trade commodity CFDs including agricultural, soft, and industrial commodities through PFH Markets. Access advanced trading tools, educational resources, and professional market access.",
    images: ["/hero2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full font-sans", cormorant.variable, dmSans.variable)}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
