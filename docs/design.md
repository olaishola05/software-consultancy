# UI Design System & Aesthetics Specification

## 🎨 Overview & Brand Aesthetics
This document defines the UI/UX design system for **Apex Tech Partners**, a single-page conversion-focused landing page targeting startup founders and SME owners.

- **Design Philosophy**: Modern, high-conversion, technical credibility, premium glassmorphism.
- **Audience**: Technical and non-technical founders seeking senior engineering partners.
- **Tone**: Confident, direct, clean, and developer-grade.

---

## 💎 Color Palette & Tokens

### Primary & Dark Neutrals
- **Background Base**: `#0B0F19` (Ultra-Deep Slate / Navy)
- **Primary Navy**: `#0F172A` (Slate 900)
- **Card Fill Base**: `rgba(30, 41, 59, 0.4)` (Translucent Dark Charcoal)
- **Panel Border**: `rgba(255, 255, 255, 0.08)` / `#1E293B`

### Accent Colors
- **Primary Blue / Accent**: `#3B82F6` (Indigo / Electric Blue)
- **Bright Blue / Hover**: `#60A5FA` / `#2563EB`
- **Highlight Gradient**: `linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%)`
- **Success Green**: `#22C55E` (Metrics & passing indicators)
- **Amber Warning**: `#F59E0B` (Problem highlights)

### Typography Neutrals
- **Primary Text**: `#FAFAFA` (Crisp White)
- **Muted Body Text**: `#94A3B8` (Slate 400)
- **Subtle Subtitles**: `#CBD5E1` (Slate 300)

---

## 🔤 Typography & Font Hierarchy
- **Font Family**: `Poppins` (via Google Fonts) with fallbacks `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Headings (`h1`)**: `text-3xl` (Mobile) / `text-5xl` to `text-6xl` (Desktop), `font-extrabold`, `tracking-tight`, `leading-[1.15]`
- **Section Headings (`h2`)**: `text-3xl` / `text-4xl`, `font-extrabold`, `tracking-tight`
- **Card Titles (`h3`)**: `text-xl` / `text-2xl`, `font-bold`
- **Body Text**: `text-sm` / `text-base`, `font-normal`, `leading-relaxed`
- **Monospace Code**: `font-mono` for technical code snippets & edge metrics

---

## 🪟 UI Components & Micro-Interactions

### 1. Glassmorphism Panels
- **`glass-panel`**: `background: rgba(15, 23, 42, 0.65)`, `backdrop-filter: blur(16px)`, `border: 1px solid rgba(255, 255, 255, 0.08)`
- **`glass-card`**: `background: rgba(30, 41, 59, 0.4)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(255, 255, 255, 0.07)`, smooth hover translation `-3px` and blue glow `box-shadow: 0 12px 30px -10px rgba(59, 130, 246, 0.25)`.

### 2. Button Design System
- **Primary CTA**: `bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500`, `text-white`, `shadow-xl shadow-blue-600/30`, `rounded-xl`, hover scaling `1.02`.
- **Secondary CTA**: `glass-card`, `text-slate-200`, `hover:border-slate-500`, `rounded-xl`.

### 3. Layout Structure & Responsive Breakpoints
- **Navbar**: Fixed sticky glassmorphic top header (`z-40`), responsive mobile drawer menu.
- **Section Containers**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Mobile First**: Fluid single-column layout on `< 640px`, 2-column grid on `md: 768px`, 3 or 4-column grid on `lg: 1024px+`.
