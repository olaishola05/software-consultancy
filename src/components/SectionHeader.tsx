import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
        <span>{badge}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      <p className="text-slate-300 text-base leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
