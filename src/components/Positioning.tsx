"use client";

import React from "react";
import { PROBLEM_POSITIONING } from "@/lib/constants";
import { AlertTriangle, Clock, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Positioning() {
  return (
    <section id="why-us" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>{PROBLEM_POSITIONING.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {PROBLEM_POSITIONING.headline}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {PROBLEM_POSITIONING.subheadline}
          </p>
        </div>

        {/* 3-Way Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PROBLEM_POSITIONING.comparison.map((item, index) => {
            const isHighlighted = item.isHighlighted;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? "glass-panel border-2 border-blue-500/80 shadow-2xl shadow-blue-500/15 bg-slate-900/90 scale-[1.02]"
                    : "glass-card border border-slate-800/80 bg-slate-900/40 opacity-90 hover:opacity-100"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    Recommended Partner
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-bold ${isHighlighted ? "text-white" : "text-slate-200"}`}>
                      {item.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isHighlighted
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : item.status === "Risky"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.drawback}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6">
                  {isHighlighted ? (
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>Direct senior lead developer communication</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>Fixed milestones & transparent sprint updates</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>100% full IP code ownership from Day 1</span>
                      </div>
                    </div>
                  ) : item.status === "Risky" ? (
                    <div className="space-y-2 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>High risk of project ghosting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Constant scope delays</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>$150k+ minimum project retainers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>3-month initial onboarding phase</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
