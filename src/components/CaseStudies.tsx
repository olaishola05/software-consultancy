"use client";

import React from "react";
import { CASE_STUDIES } from "@/lib/constants";
import { TrendingUp, AlertCircle, Lightbulb, Award } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <span>Proven Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Case Studies: Problem → Solution → Outcome
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Real engineering challenges solved for growth-focused startups and modern companies.
          </p>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="glass-card rounded-2xl p-8 border border-slate-800/80 space-y-6 flex flex-col justify-between"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {study.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{study.metrics}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {study.title}
              </h3>

              {/* Breakdown */}
              <div className="space-y-4 text-sm">
                {/* Problem */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-amber-400 text-xs uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Problem</span>
                  </div>
                  <p className="text-slate-300 leading-normal">{study.problem}</p>
                </div>

                {/* Solution */}
                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-900/40 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-blue-400 text-xs uppercase tracking-wider">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Solution</span>
                  </div>
                  <p className="text-slate-300 leading-normal">{study.solution}</p>
                </div>

                {/* Outcome */}
                <div className="p-3.5 rounded-xl bg-green-950/30 border border-green-900/40 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-green-400 text-xs uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    <span>Outcome</span>
                  </div>
                  <p className="text-white font-medium leading-normal">{study.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
