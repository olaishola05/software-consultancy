import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-950/60 relative overflow-hidden">
      <div className="gradient-glow bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="How We Work"
          title="From First Call to Production Launch in 4 Steps"
          subtitle="A transparent, milestone-based process so you always know what is happening and when."
        />

        {/* Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-0" />

          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative flex flex-col items-center text-center md:items-start md:text-left group"
            >
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/30 flex flex-col items-center justify-center mb-5 group-hover:border-blue-500/60 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all">
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Step</span>
                <span className="text-2xl font-extrabold text-white leading-none">{step.step}</span>
              </div>

              {index < PROCESS_STEPS.length - 1 && (
                <div className="md:hidden flex justify-center my-2 text-slate-600">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
              )}

              <div className="space-y-2 px-2 md:px-0">
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
