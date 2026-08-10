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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#0b0f19] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
