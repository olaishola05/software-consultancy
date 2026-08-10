"use client";

import React from "react";
import { SERVICES } from "@/lib/constants";
import { Rocket, Layers, ShieldCheck, Cpu, ArrowUpRight, Check } from "lucide-react";

export default function Services() {
  const iconMap: Record<string, React.ReactNode> = {
    Rocket: <Rocket className="w-6 h-6 text-blue-400" />,
    Layers: <Layers className="w-6 h-6 text-blue-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    Cpu: <Cpu className="w-6 h-6 text-blue-400" />,
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Solutions Focused Strictly on Business Outcomes
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We don&apos;t build generic brochure websites. We build scalable, high-conversion software platforms designed for growth.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-8 border border-slate-800/80 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[service.iconName] || <Rocket className="w-6 h-6 text-blue-400" />}
                  </div>
                  <span className="text-slate-500 group-hover:text-blue-400 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Outcome-focused single-sentence description */}
                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Outcomes list */}
              <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-2">
                {service.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
