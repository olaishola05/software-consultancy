"use client";

import React from "react";
import { ArrowRight, Calendar, Sparkles, CheckCircle2, ShieldCheck, Terminal, Zap } from "lucide-react";
import { HERO_CONTENT, BRAND_CONFIG } from "@/lib/constants";

interface HeroProps {
  onOpenContactModal: () => void;
}

export default function Hero({ onOpenContactModal }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="gradient-glow top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/30" />
      <div className="gradient-glow top-40 right-10 w-[400px] h-[400px] bg-indigo-600/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{HERO_CONTENT.badge}</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              We Build{" "}
              <span className="text-gradient-blue">Production-Grade</span>{" "}
              Software That Scales Your Business
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {HERO_CONTENT.subtitle}
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={BRAND_CONFIG.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm tracking-wide shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContactModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-card text-slate-200 hover:text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
              >
                Prefer to message us?
              </button>
            </div>

            {/* Trust Subtext */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{HERO_CONTENT.trustSubtext}</span>
            </div>

            {/* Metrics Row */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
              {HERO_CONTENT.metrics.map((metric, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-2xl p-5 border border-slate-700/80 shadow-2xl space-y-4 animate-float">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono bg-slate-900/60 px-2.5 py-1 rounded-md">
                  <Terminal className="w-3 h-3 text-blue-400" />
                  <span>app/api/checkout/route.ts</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs text-slate-300 space-y-1.5 p-2 bg-slate-950/70 rounded-xl">
                <div className="text-slate-500">{"// Senior Architecture Pattern"}</div>
                <div>
                  <span className="text-blue-400">export async function </span>
                  <span className="text-yellow-300">POST</span>
                  <span>(req: Request) {"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">const </span>
                  <span>{"{ user, tier } = "}</span>
                  <span className="text-blue-400">await </span>
                  <span>req.<span className="text-green-300">json</span>();</span>
                </div>
                <div className="pl-4 text-purple-300">
                  {"const session = await stripe.checkout.create({"}
                </div>
                <div className="pl-8">
                  mode: <span className="text-green-400">&apos;subscription&apos;</span>,
                </div>
                <div className="pl-4 text-purple-300">{"});"}</div>
                <div className="pl-4">
                  <span className="text-blue-400">return </span>
                  Response.<span className="text-green-300">json</span>
                  {"({ sessionUrl: session.url });"}
                </div>
                <div>{"}"}</div>
              </div>

              {/* Metric badges */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Latency</div>
                    <div className="text-sm font-semibold text-white">42ms Edge</div>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Build Status</div>
                    <div className="text-sm font-semibold text-white">Passing (100%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
