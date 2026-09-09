import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  PlayCircle,
  BookOpen,
  Smartphone,
  ShieldCheck,
  Globe2,
  TrendingUp,
  Cpu,
  Layers,
  ChevronRight,
  HelpCircle,
  Target,
  Zap,
} from "lucide-react";
import { JABASHOP_APP_URL, SITE_CONFIG } from "../config/site";
import { CATEGORIES_DATA } from "../data/categories";
import { HOW_IT_WORKS_STEPS, PLATFORM_FEATURES } from "../data/features";
import { FAQ_DATA } from "../data/faq";
import { ECOSYSTEM_NODES } from "../data/ecosystem";
import { SectionHeader } from "../components/SectionHeader";
import { PlatformMockup } from "../components/PlatformMockup";
import { CategoryModal } from "../components/CategoryModal";
import { DynamicIcon } from "../components/DynamicIcon";
import { CtaBanner } from "../components/CtaBanner";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeFaq, setActiveFaq] = useState("what-is-jabashop");

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* SECTION 6: HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0e2217] text-emerald-300 border border-[#1b432d] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>{SITE_CONFIG.badgeText}</span>
        </div>

        {/* Primary Headline */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
            Learn Digital Skills.{" "}
            <span className="text-gradient-emerald">Build Your Future.</span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
            JabaShop is a modern digital learning platform designed to make practical
            technology, business, AI and digital skills more accessible to learners
            in Ethiopia and across Africa.
          </p>
        </div>

        {/* CTA Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a
            href={JABASHOP_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-150 shadow-lg shadow-emerald-500/25 text-sm sm:text-base active:scale-95"
          >
            <span>Explore JabaShop</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="#what-is-jabashop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-200 bg-[#0d1c14] hover:bg-[#14291e] border border-[#1b3828] transition-colors text-sm sm:text-base"
          >
            <span>Discover the Platform</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        {/* Positioning Tagline */}
        <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{SITE_CONFIG.positioning} • Practical Knowledge & E-Books</span>
        </div>

        {/* SECTION 6 Visual: Platform Representation Mockup */}
        <div className="pt-6">
          <PlatformMockup />
        </div>
      </section>

      {/* SECTION 7: WHAT IS JABASHOP */}
      <section
        id="what-is-jabashop"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="rounded-3xl bg-[#0a150f] border border-[#193627] p-8 sm:p-12 lg:p-16 space-y-8">
          <SectionHeader
            badge="Platform Overview"
            title="What is"
            highlightedText="JabaShop?"
            description="A dedicated digital learning ecosystem created to empower forward-thinking African minds."
            alignment="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                JabaShop is a modern digital learning and knowledge platform created
                to connect learners with practical digital courses, educational
                e-books, and useful skill-building resources.
              </p>
              <p>
                The platform is designed to make practical knowledge easier to discover,
                access, and apply for personal growth, career advancement, and digital
                opportunity.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Unlike complex foreign learning management systems that mandate recurring
                overseas credit card billing, JabaShop is built with accessible,
                mobile-friendly learning models tailored for everyday African learners.
              </p>
            </div>

            {/* Quick Pillars Box */}
            <div className="rounded-2xl bg-[#060c09] border border-[#142d1f] p-6 space-y-4">
              <div className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400">
                Core Foundation
              </div>
              <ul className="space-y-3">
                {[
                  "Curated, practical video courses in modern disciplines",
                  "Structured downloadable digital e-books and field guides",
                  "Support for local languages including Afaan Oromoo",
                  "Permanent access to all enrolled materials in your library",
                  "Tailored for mobile browsers with low bandwidth consumption",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: THE PROBLEM & THE JABASHOP SOLUTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* The Problem */}
          <div className="rounded-3xl bg-[#110d0d]/90 border border-red-950/40 p-8 sm:p-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-950/50 text-red-300 border border-red-900/40">
              <span>The Digital Education Problem</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Why Traditional Digital Learning Fails Many African Learners
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                Many online learning materials are fragmented, overly theoretical, expensive,
                or not easily accessible to learners in developing digital economies like Ethiopia.
              </p>
              <ul className="space-y-2.5 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Scattered YouTube tutorials without structured roadmaps or sequential files.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Heavy subscription fees charged in non-accessible foreign currencies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Lack of instruction in regional languages like Afaan Oromoo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Excessive focus on abstract theory rather than immediately applicable skills.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The JabaShop Solution */}
          <div className="rounded-3xl bg-[#091710] border border-emerald-900/40 p-8 sm:p-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
              <span>The JabaShop Solution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Curated, Structured, and Directly Actionable
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                JabaShop addresses these challenges by organizing valuable digital learning
                content into a clear, reliable, and accessible platform.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#06100a] border border-[#143322]">
                  <span className="text-xs font-bold text-emerald-400 block">Accessible</span>
                  <span className="text-[11px] text-slate-400">Works smoothly on phone browsers</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06100a] border border-[#143322]">
                  <span className="text-xs font-bold text-emerald-400 block">Practical</span>
                  <span className="text-[11px] text-slate-400">Step-by-step real skills</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06100a] border border-[#143322]">
                  <span className="text-xs font-bold text-emerald-400 block">Affordable</span>
                  <span className="text-[11px] text-slate-400">Fair, transparent pricing</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06100a] border border-[#143322]">
                  <span className="text-xs font-bold text-emerald-400 block">Relevant</span>
                  <span className="text-[11px] text-slate-400">Tailored to local markets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="rounded-3xl bg-[#0a150f] border border-[#1b3929] p-8 sm:p-10 space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 font-mono">
              Our Mission
            </span>
            <blockquote className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
              "To make practical digital knowledge easier to discover, learn and
              apply for young people and lifelong learners in Ethiopia and Africa."
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We empower learners to gain digital independence, build marketable tradecraft,
              and participate with confidence in the global digital economy.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-[#0a150f] border border-[#1b3929] p-8 sm:p-10 space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 font-mono">
              Our Vision
            </span>
            <blockquote className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
              "To build a trusted African digital learning ecosystem where people
              can continuously develop the skills needed for the digital future."
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Creating a continental corridor of high-value digital knowledge that empowers
              builders, creators, and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: WHAT YOU CAN LEARN (10 CORE CATEGORIES) */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curriculum Matrix"
          title="What You Can"
          highlightedText="Learn on JabaShop"
          description="Explore our ten core learning disciplines designed for practical application, employment, and business creation."
        />

        {/* 10 Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="group cursor-pointer rounded-2xl bg-[#0a150f] border border-[#1b3828] hover:border-emerald-500/50 hover:bg-[#0f2217] p-6 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-lg hover:shadow-emerald-950/20"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0f2418] border border-[#204933] group-hover:border-emerald-500/40 flex items-center justify-center text-emerald-400 transition-colors">
                    <DynamicIcon name={cat.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0d1d14] text-emerald-300 border border-[#1a3827]">
                    {cat.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors font-display">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {cat.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#173022] flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span className="text-slate-400 text-[11px] font-normal">
                  {cat.format}
                </span>
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Explore <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/learning"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-emerald-400 bg-[#0d1d14] hover:bg-[#132c1e] border border-[#1b3928] transition-colors"
          >
            <span>View Full Learning Curriculum & Afaan Oromoo Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 12: HOW JABASHOP WORKS (4-STEP PROCESS) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Simple 4-Step Process"
          title="How JabaShop"
          highlightedText="Works"
          description="A straightforward, transparent journey from discovering new knowledge to applying it in your everyday life."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="rounded-2xl bg-[#0a150f] border border-[#1b3828] p-6 space-y-4 relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-emerald-400/50">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    Step {step.stepNumber}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display">
                  {step.title}
                </h3>

                <p className="text-xs font-medium text-emerald-300 italic">
                  "{step.tagline}"
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#173022] space-y-1.5">
                {step.details.slice(0, 2).map((d, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={JABASHOP_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md text-xs sm:text-sm"
          >
            <span>Start Learning on WebApp</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* SECTION 13: PLATFORM FEATURES */}
      <section id="platform-features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Platform Architecture"
          title="Engineered for"
          highlightedText="Focus & Reliability"
          description="Everything you need to study, retain, and apply digital knowledge without clunky interfaces or heavy downloads."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATFORM_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="rounded-2xl bg-[#0a150f] border border-[#1b3828] p-5 space-y-3 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <DynamicIcon name={feat.iconName} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#163022] text-[10px] text-emerald-400 font-mono uppercase tracking-wider">
                {feat.highlight}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 14 & 15: FOR LEARNERS & FOR CREATORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SECTION 14: FOR LEARNERS */}
          <div className="rounded-3xl bg-[#0a150f] border border-[#1b3929] p-8 sm:p-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0f2419] text-emerald-300 border border-[#204933]">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>For Learners</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Skill Acquisition at Your Own Pace
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Whether you are a student exploring new career paths, a freelancer seeking
              higher-paying clients, or an entrepreneur expanding an online business, JabaShop provides:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="p-3 rounded-xl bg-[#07110c] border border-[#142c1e] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero subscription traps: buy what you want and keep it forever</span>
              </div>
              <div className="p-3 rounded-xl bg-[#07110c] border border-[#142c1e] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Learn from your smartphone anytime, anywhere</span>
              </div>
              <div className="p-3 rounded-xl bg-[#07110c] border border-[#142c1e] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Actionable curriculum designed to be put to work immediately</span>
              </div>
            </div>
            <a
              href={JABASHOP_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* SECTION 15: FOR CONTENT CREATORS & INSTRUCTORS */}
          <div className="rounded-3xl bg-[#08120c] border border-[#183626] p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>For Creators & Instructors</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Coming Soon • Our Vision
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              A Platform to Share Knowledge and Monetize
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We envision JabaShop becoming a home for African educators, skilled freelancers,
              and digital creators who want to package their expertise into high-value courses
              and digital books.
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="p-3 rounded-xl bg-[#050c08] border border-[#112419] flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Reach thousands of eager African learners ready to invest in their growth</span>
              </div>
              <div className="p-3 rounded-xl bg-[#050c08] border border-[#112419] flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Publish courses and e-books in regional languages including Afaan Oromoo</span>
              </div>
              <div className="p-3 rounded-xl bg-[#050c08] border border-[#112419] flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Protected digital delivery and automated student enrollment tracking</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 italic pt-2">
              Creator onboarding and instructor tools are actively in development as part of our long-term roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 16: AFRICAN & ETHIOPIAN FOCUS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0c2016] via-[#091710] to-[#07120c] border border-[#1f4733] p-8 sm:p-12 space-y-8">
          <SectionHeader
            badge="Local Relevance"
            title="Rooted in"
            highlightedText="African Realities"
            description="Built from the ground up to respect the real-world infrastructure and languages of Ethiopia and the African continent."
            alignment="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#07130c] border border-[#183626] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0e2417] border border-[#1e4832] flex items-center justify-center text-emerald-400">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Multilingual Support & Afaan Oromoo
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Language should never prevent anyone from learning AI or design. We actively provide resources in Afaan Oromoo and English.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#07130c] border border-[#183626] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0e2417] border border-[#1e4832] flex items-center justify-center text-emerald-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Mobile-First Bandwidth Conservation
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Optimized video encoding and lightweight web assets minimize mobile data usage across varying telecom networks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#07130c] border border-[#183626] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0e2417] border border-[#1e4832] flex items-center justify-center text-emerald-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                Applicable Skills for Local Markets
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Practical case studies showing how to start freelance gigs, build online stores, and produce content relevant to Ethiopian audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17: THE JABASHOP ECOSYSTEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Integrated Ecosystem"
          title="The Connected"
          highlightedText="JabaShop Architecture"
          description="A complete circle connecting learners, digital courses, e-books, technology, and economic opportunities."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_NODES.map((node, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#0a150f] border border-[#1b3828] p-6 space-y-3 hover:border-emerald-500/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <DynamicIcon name={node.iconName} className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                  {node.role}
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-display">
                {node.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {node.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 18: TRUST, QUALITY AND CREDIBILITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#09140e] border border-[#183626] p-8 sm:p-12">
          <SectionHeader
            badge="Integrity & Confidence"
            title="Why Trust"
            highlightedText="JabaShop?"
            description="We build trust through transparency, rigorous curriculum relevance, and genuine commitment to our learners."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#060e0a] border border-[#142d1f] space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Curated Content</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every course and book is vetted for clarity, accuracy, and practical utility.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#060e0a] border border-[#142d1f] space-y-2">
              <Zap className="w-6 h-6 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Practical Focus</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No long-winded academic fluff. We teach what you can start applying today.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#060e0a] border border-[#142d1f] space-y-2">
              <Globe2 className="w-6 h-6 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Regional Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated support channels and language accessibility tailored for Ethiopia.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#060e0a] border border-[#142d1f] space-y-2">
              <Smartphone className="w-6 h-6 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Continuous Access</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your purchased materials remain in your personal library for lifetime reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 21: FAQ SECTION (EXPANDABLE PREVIEW) */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Got Questions?"
          title="Frequently Asked"
          highlightedText="Questions"
          description="Clear answers to help you understand JabaShop, the WebApp, and how to begin learning."
        />

        <div className="mt-10 space-y-3">
          {FAQ_DATA.slice(0, 5).map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#0a150f] border border-[#1b3828] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? "" : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <span className="text-emerald-400 font-bold text-lg">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#153022] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
          >
            <span>View all 10 platform questions & answers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* SECTION 22: FINAL CALL TO ACTION (CTA) */}
      <CtaBanner
        title="Start Learning on JabaShop Today"
        description="Explore practical digital courses and digital e-books in AI, video editing, graphic design, and online business."
        primaryButtonText="Start Learning"
        secondaryButtonText="Explore Courses"
      />

      {/* Category Preview Modal */}
      {selectedCategory && (
        <CategoryModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
};
