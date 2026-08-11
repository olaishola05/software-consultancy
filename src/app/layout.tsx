import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { BRAND_CONFIG } from "@/lib/constants";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND_CONFIG.name} — ${BRAND_CONFIG.tagline}`,
  description: "Single-page senior engineering consultancy for startup founders & SME owners. We build production-grade MVPs, SaaS platforms, and FinTech systems.",
  keywords: ["software consultancy", "MVP development", "SaaS engineering", "FinTech developers", "React Next.js agency", "software startup partner"],
  openGraph: {
    title: `${BRAND_CONFIG.name} — ${BRAND_CONFIG.tagline}`,
    description: "Build production-grade software with senior full-stack engineers.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND_CONFIG.name,
  description: BRAND_CONFIG.tagline,
  url: "https://apextechpartners.com",
  email: BRAND_CONFIG.email,
  telephone: BRAND_CONFIG.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  priceRange: "$$$$",
  knowsAbout: [
    "Software Architecture",
    "MVP Development",
    "SaaS Platform Engineering",
    "FinTech Integration",
    "Next.js Development",
    "Cloud Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0b0f19] text-slate-100 antialiased selection:bg-blue-600 selection:text-white bg-grid-pattern">
        {children}
      </body>
    </html>
  );
}
