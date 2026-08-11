"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Answers to What Founders Ask Before Signing
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Straight answers to the real questions founders have before starting a project with us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-blue-400" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-slate-800/60 pt-4">
                  <p className="text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
