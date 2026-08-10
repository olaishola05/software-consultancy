"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS, TRUST_BADGES } from "@/lib/constants";
import { Quote, Star } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Ambitious Founders & Product Leaders
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Here is what engineering partners and founders say about our speed, technical rigor, and delivery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-7 border border-slate-800/80 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-500/30" />

                <p className="text-slate-200 text-sm leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-700 bg-slate-800 shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-blue-400 font-medium mt-1">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Trust Row */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800/80 text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Engineered With Production-Grade Tooling & Infrastructure
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2">
            {TRUST_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs font-semibold hover:border-slate-700 hover:text-white transition-colors"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
