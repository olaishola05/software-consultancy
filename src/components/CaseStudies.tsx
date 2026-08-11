import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { CASE_STUDIES } from "@/lib/constants";
import { TrendingUp, AlertCircle, Lightbulb, Award } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Proven Impact"
          title="Case Studies: Problem → Solution → Outcome"
          subtitle="Real engineering challenges solved for growth-focused startups and modern companies."
        />

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 space-y-6 flex flex-col justify-between"
            >
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 whitespace-nowrap shrink-0">
                  {study.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20 whitespace-nowrap shrink-0">
                  <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                  <span>{study.metrics}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {study.title}
              </h3>

              {/* Breakdown */}
              <div className="space-y-4 text-sm">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-amber-400 text-xs uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Problem</span>
                  </div>
                  <p className="text-slate-300 leading-normal text-xs sm:text-sm">{study.problem}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-900/40 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-blue-400 text-xs uppercase tracking-wider">
                    <Lightbulb className="w-3.5 h-3.5 shrink-0" />
                    <span>Solution</span>
                  </div>
                  <p className="text-slate-300 leading-normal text-xs sm:text-sm">{study.solution}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-green-950/30 border border-green-900/40 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-green-400 text-xs uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>Outcome</span>
                  </div>
                  <p className="text-white font-medium leading-normal text-xs sm:text-sm">{study.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
