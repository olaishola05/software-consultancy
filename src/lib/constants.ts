export const BRAND_CONFIG = {
  name: "Apex Tech Partners",
  tagline: "Senior Software Engineering Partner for Startups & SMEs",
  calendlyUrl: "https://calendly.com/apex-tech-partners/free-consultation",
  contactEmail: "hello@apextechpartners.com",
  email: "hello@apextechpartners.com",
  contactPhone: "+1 (555) 019-2834",
  phone: "+1 (555) 019-2834",
  address: "San Francisco, CA & Remote Worldwide",
};

export const HERO_CONTENT = {
  badge: "Production-Grade Engineering Team",
  title: "We Build High-Impact Software That Scales Your Business",
  subtitle: "Stop burning budget on unreliable freelancers or slow agency overhead. We are senior full-stack engineers who ship MVPs, SaaS platforms, and FinTech systems in weeks.",
  trustSubtext: "15-min strategy call • No pushy sales pitch • Real technical roadmap feedback",
  metrics: [
    { value: "$45M+", label: "Client Funding Raised" },
    { value: "99.9%", label: "Uptime Guaranteed" },
    { value: "4-8 Wks", label: "Average Delivery Time" },
    { value: "100%", label: "Senior Developers Only" },
  ],
};

export const PROBLEM_POSITIONING = {
  badge: "Why Work With Us",
  headline: "Tired of Software Projects That Delays, Over-Budget, or Fail to Scale?",
  subheadline: "Most founders waste precious months toggling between freelancers who lack business context and oversized agencies charging 5x the cost for junior devs.",
  comparison: [
    {
      title: "Freelancers",
      drawback: "High management overhead, inconsistent quality, single-point-of-failure risk.",
      status: "Risky",
    },
    {
      title: "Traditional Agencies",
      drawback: "Opaque pricing, heavy account management bloat, junior devs doing the work.",
      status: "Expensive",
    },
    {
      title: "Apex Tech Partners",
      drawback: "Direct access to senior full-stack architects. High velocity, zero friction.",
      status: "The Solution",
      isHighlighted: true,
    },
  ],
};

export const SERVICES = [
  {
    id: "mvp-development",
    iconName: "Rocket",
    title: "MVP & Product Development",
    description: "Go from idea to production-ready market launch in 4 to 8 weeks with scalable architecture.",
    outcomes: ["User-centric UX/UI", "Clean TypeScript & React stack", "Launch-ready in weeks"],
  },
  {
    id: "saas-platforms",
    iconName: "Layers",
    title: "SaaS Platform Engineering",
    description: "Architect high-performance web and mobile multi-tenant SaaS platforms built to scale.",
    outcomes: ["Multi-tenant architecture", "Stripe/Paystack billing integration", "Role-based authorization"],
  },
  {
    id: "fintech-solutions",
    iconName: "ShieldCheck",
    title: "FinTech & Payment Solutions",
    description: "Secure, compliant financial technology platforms, payment gateways, and wallet systems.",
    outcomes: ["Bank-grade encryption", "PCI-DSS compliance practices", "Instant payout pipelines"],
  },
  {
    id: "cloud-devops",
    iconName: "Cpu",
    title: "Cloud Architecture & Technical Consulting",
    description: "Optimize cloud infrastructure, reduce AWS/Vercel bills, and clear technical debt.",
    outcomes: ["Automated CI/CD pipelines", "Cost optimization", "Sub-100ms API performance"],
  },
];

export const CASE_STUDIES = [
  {
    id: "fintech-paypulse",
    category: "FinTech",
    title: "PayPulse Gateway",
    metrics: "Processed $12M+ in 90 Days",
    problem: "Founders needed a multi-currency payment orchestration engine compliant with strict latency limits.",
    solution: "Engineered a low-latency Micro-Services API in Next.js & Node with automated ledger reconciliation.",
    outcome: "Achieved 99.99% transaction success rate and scaled to 250,000 monthly active accounts.",
  },
  {
    id: "edtech-learnflow",
    category: "EdTech",
    title: "LearnFlow AI",
    metrics: "Scaled to 50k Active Students",
    problem: "An early-stage EdTech startup struggled with slow video rendering and user churn.",
    solution: "Re-architected the frontend design system and implemented server-side caching & edge streaming.",
    outcome: "Reduced page load time by 72% and increased user completion rates by 3.5x.",
  },
  {
    id: "ecommerce-omnistore",
    category: "E-Commerce",
    title: "OmniStore Headless Platform",
    metrics: "42% Boost in Mobile Conversion",
    problem: "Legacy monolithic store crashed during peak seasonal sales traffic spikes.",
    solution: "Rebuilt as a Next.js headless storefront integrated with Shopify Plus API & Vercel Edge Cache.",
    outcome: "Handled 10,000 concurrent peak buyers with zero downtime and sub-second navigation.",
  },
  {
    id: "ops-fleetcommand",
    category: "Internal Tooling",
    title: "FleetCommand Logistics ERP",
    metrics: "Saved 150+ Ops Hours/Month",
    problem: "Operations team was manually tracking inventory and dispatches across 4 spreadsheet tools.",
    solution: "Built a unified real-time operations dashboard with role-based permissions and live GPS webhooks.",
    outcome: "Automated 85% of manual dispatch logging and eliminated inventory sync errors.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Apex Tech Partners felt like having a co-founder who happens to be a world-class engineer. They delivered our SaaS MVP 2 weeks ahead of schedule.",
    author: "David Chen",
    role: "CEO & Founder",
    company: "Veloce SaaS",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote: "Working with them was the best investment we made. Their technical clarity saved us from spending $40k on unnecessary cloud architecture.",
    author: "Elena Rostova",
    role: "Co-Founder",
    company: "FinFlow Global",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote: "Clear communication, clean TypeScript code, and zero bullshit. They are our go-to engineering team for all new product releases.",
    author: "Marcus Thorne",
    role: "VP of Product",
    company: "Nexus Logistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
];

export const TRUST_BADGES = [
  "Stripe",
  "Paystack",
  "Vercel",
  "Amazon Web Services",
  "PostgreSQL",
  "Docker",
  "Next.js",
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    description: "We map your business objectives, technical requirements, and core user flows in a 15-min deep dive.",
  },
  {
    step: "02",
    title: "Fixed Scope & Proposal",
    description: "You receive a clear, milestone-based proposal with fixed pricing and guaranteed timelines.",
  },
  {
    step: "03",
    title: "Agile Sprint Build",
    description: "Weekly live demos, continuous staging deployment, and direct Slack communication with senior devs.",
  },
  {
    step: "04",
    title: "Launch & Growth Support",
    description: "Production release on Vercel/AWS with monitoring, security lockdown, and ongoing SLA maintenance.",
  },
];

export const PRICING_TIERS = [
  {
    name: "MVP Starter Package",
    price: "$5,000",
    description: "Ideal for founders looking to validate their product with early adopters fast.",
    features: [
      "Production-ready Next.js web application",
      "Tailwind CSS responsive design system",
      "User authentication & database setup",
      "Stripe / Paystack checkout integration",
      "4-week guaranteed turnaround",
      "30-day post-launch bug warranty",
    ],
    cta: "Book MVP Discovery Call",
    isPopular: false,
  },
  {
    name: "Startup SaaS Package",
    price: "$8,000",
    description: "Full-scale web platform built for high velocity growth and active user monetization.",
    features: [
      "Complete SaaS web & mobile responsive web app",
      "Advanced role-based access control (RBAC)",
      "Automated subscription & invoicing workflows",
      "Analytics & admin management portal",
      "6-week guaranteed turnaround",
      "60-day priority engineering support",
    ],
    cta: "Book SaaS Strategy Call",
    isPopular: true,
  },
  {
    name: "Custom Enterprise",
    price: "Custom",
    description: "For established businesses needing dedicated senior capacity or complex infrastructure.",
    features: [
      "Custom microservices or FinTech architecture",
      "Dedicated senior lead engineer",
      "Legacy system migration & API integration",
      "PCI-DSS / HIPAA compliance prep",
      "Flexible monthly sprint retatiner",
      "24/7 SLA infrastructure monitoring",
    ],
    cta: "Discuss Custom Scope",
    isPopular: false,
  },
];

export const FAQ_ITEMS = [
  {
    question: "How long does a typical project take from start to finish?",
    answer: "Most MVP and SaaS projects ship within 4 to 8 weeks depending on scope complexity. We establish clear weekly milestones during Discovery so you know exactly what is launching when.",
  },
  {
    question: "Do you work with non-technical founders?",
    answer: "Absolutely. Over 60% of our clients are non-technical founders or business leaders. We handle all architecture, database schema, DevOps, and technical decisions while explaining everything in clear business terms.",
  },
  {
    question: "What if I only have an idea and rough notes, not a detailed spec?",
    answer: "That is completely fine! Our initial Discovery Call is designed to translate your vision into a structured technical spec, user flow diagram, and actionable scope document.",
  },
  {
    question: "Do you provide support and maintenance after the product launches?",
    answer: "Yes, every package includes a post-launch warranty period (30–60 days). After launch, we offer flexible monthly maintenance and sprint retainers to help you iterate on user feedback.",
  },
  {
    question: "What code ownership and IP rights do I get?",
    answer: "You own 100% of the code, intellectual property, repository access, and infrastructure secrets upon project completion. No lock-in, ever.",
  },
];

/** Alias for FAQ_ITEMS — used by tests and components */
export const FAQS = FAQ_ITEMS;
