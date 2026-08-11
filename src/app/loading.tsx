import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/40 animate-pulse mx-auto flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-blue-500 animate-ping" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Loading Apex Tech Partners...
        </p>
      </div>
    </div>
  );
}
