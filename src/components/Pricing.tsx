import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { PRICING_TIERS, BRAND_CONFIG } from "@/lib/constants";
import { Check, Zap, ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Transparent Pricing"
          title="Honest, Founder-Friendly Pricing. No Surprises."
          subtitle="Fixed-scope packages with clear deliverables. No bloated retainers, no hidden billing surprises."
        />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier, index) => {
            const isCustom = tier.price === "Custom";
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? "glass-panel border-2 border-blue-500/80 shadow-2xl shadow-blue-500/15 bg-slate-900/90 scale-[1.02]"
                    : "glass-card border border-slate-800/80"
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <p className="text-slate-400 text-xs mt-1 leading-snug">{tier.description}</p>
                  </div>

                  <div className="space-y-0.5">
                    {!isCustom && (
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Starting from</p>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                      {!isCustom && (
                        <span className="text-slate-400 text-sm font-medium">/ project</span>
                      )}
                    </div>
                    {!isCustom && (
                      <p className="text-[11px] text-slate-500 italic">Final cost depends on project scope & complexity</p>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-2 border-t border-slate-800/80">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={BRAND_CONFIG.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full py-3 rounded-xl font-semibold text-sm tracking-wide text-center flex items-center justify-center gap-2 transition-all ${
                    tier.isPopular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25 hover:scale-[1.01]"
                      : "border border-slate-700 text-slate-200 hover:border-blue-500/50 hover:text-white"
                  }`}
                >
                  <span>Book a Free Call</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-500 mt-10">
          All packages include full source code ownership, repository access, and infrastructure credentials on completion.
        </p>
      </div>
    </section>
  );
}
