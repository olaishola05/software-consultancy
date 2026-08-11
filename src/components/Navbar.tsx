"use client";

import React, { useState, useEffect } from "react";
import { Code2, Menu, X, ArrowRight } from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants";

interface NavbarProps {
  onOpenContactModal: () => void;
}

export default function Navbar({ onOpenContactModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Why Us", href: "#why-us" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white tracking-tight leading-none group-hover:text-blue-400 transition-colors">
              {BRAND_CONFIG.name}
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
              Senior Tech Partners
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContactModal}
            className="text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-lg transition-colors"
          >
            Direct Contact
          </button>
          <a
            href={BRAND_CONFIG.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs tracking-wide transition-all shadow-md shadow-blue-600/30 hover:scale-[1.02]"
          >
            <span>Book Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-white py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full text-center py-2.5 rounded-xl border border-slate-700 text-slate-300 text-xs font-semibold hover:bg-slate-800"
            >
              Direct Contact
            </button>
            <a
              href={BRAND_CONFIG.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-lg shadow-blue-600/30"
            >
              Book Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
