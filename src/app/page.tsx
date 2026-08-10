"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Services from "@/components/Services";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />
      <main className="flex-grow">
        <Hero onOpenContactModal={() => setIsContactModalOpen(true)} />
        <Positioning />
        <Services />
      </main>

      {/* Contact modal placeholder — implemented in Phase 5 */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
          <div className="glass-panel rounded-2xl p-8 border border-slate-700/60 text-white text-center space-y-4 max-w-sm w-full mx-4">
            <p className="font-semibold">Contact modal coming in Phase 5!</p>
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
