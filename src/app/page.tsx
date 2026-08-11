"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import SocialProof from "@/components/SocialProof";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />
      <main className="flex-grow">
        <Hero onOpenContactModal={() => setIsContactModalOpen(true)} />
        <Positioning />
        <Services />
        <CaseStudies />
        <SocialProof />
        <Process />
        <Pricing />
        <FAQ />
      </main>

      <Footer onOpenContactModal={() => setIsContactModalOpen(true)} />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
