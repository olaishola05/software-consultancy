"use client";

import React from "react";
import { BRAND_CONFIG } from "@/lib/constants";
import { Code2, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onOpenContactModal: () => void;
}

export default function Footer({ onOpenContactModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Final CTA Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-indigo-950/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="gradient-glow top-0 right-0 w-[300px] h-[300px] bg-blue-600/20" />

          <div className="space-y-3 text-center md:text-left relative z-10 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Build Your Software the Right Way?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Book a free 15-minute technical discovery call. We will review your architecture, scope, and timeline with no sales pressure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full md:w-auto shrink-0">
            <a
              href={BRAND_CONFIG.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm tracking-wide shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Book Your Free Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenContactModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-card text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              Direct Message
            </button>
          </div>
        </div>

        {/* Navigation & Brand Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-6">

          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {BRAND_CONFIG.name}
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {BRAND_CONFIG.tagline}
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{BRAND_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{BRAND_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{BRAND_CONFIG.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Quick Links</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#why-us" className="hover:text-blue-400 transition-colors">Why Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#case-studies" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-blue-400 transition-colors">Process</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal / Info */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Engineering Focus</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span>Full-Stack Next.js & React</span></li>
              <li><span>SaaS Multi-Tenant Architecture</span></li>
              <li><span>FinTech & Payment Gateways</span></li>
              <li><span>Vercel & AWS Cloud Infra</span></li>
              <li><span>100% IP Code Ownership</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {BRAND_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with production-grade engineering practices.
          </p>
        </div>

      </div>
    </footer>
  );
}
