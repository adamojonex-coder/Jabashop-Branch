import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Target,
  Globe2,
  Users,
  Compass,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { JABASHOP_APP_URL, SITE_CONFIG } from "../config/site";
import { VALUES_DATA } from "../data/values";
import { SectionHeader } from "../components/SectionHeader";
import { DynamicIcon } from "../components/DynamicIcon";
import { CtaBanner } from "../components/CtaBanner";

export const AboutPage = () => {
  return (
    <div className="space-y-24 sm:space-y-28 py-8 sm:py-12">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0e2217] text-emerald-300 border border-[#1b432d]">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>About JabaShop</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display">
          Empowering African Minds Through <br className="hidden sm:inline" />
          <span className="text-gradient-emerald">Practical Digital Education</span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
          JabaShop is an Ethiopian-born digital learning and digital product marketplace
          founded to bridge the gap between ambitious learners and tangible,
          marketable technology skills.
        </p>
      </section>

      {/* Section 19: Who We Are & Why We Started */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Who We Are */}
          <div className="rounded-3xl bg-[#0a150f] border border-[#1c3a2a] p-8 sm:p-10 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Who We Are
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                JabaShop is a modern digital platform company dedicated to making practical digital
                skills, modern computer knowledge, and digital products accessible to youth,
                freelancers, professionals, and lifelong learners across Ethiopia and Africa.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We believe that modern technology education should not be confined to elite
                universities or high-cost foreign bootcamps. Our platform provides
                curated, actionable digital courses and comprehensive e-books designed for
                real-world application.
              </p>
            </div>
            <div className="pt-4 border-t border-[#173022] text-xs text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Independent Ethiopian technology & education brand</span>
            </div>
          </div>

          {/* Why We Started */}
          <div className="rounded-3xl bg-[#0a150f] border border-[#1c3a2a] p-8 sm:p-10 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Why We Started
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                In Ethiopia and neighboring nations, millions of eager young people possess
                smartphones and high motivation, yet find quality digital training locked
                behind prohibitive subscription costs, language hurdles, or foreign payment gates.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We established JabaShop to solve these exact friction points: delivering
                mobile-optimized learning, localized payment options, native language resources
                including Afaan Oromoo, and transparent access with no recurring subscription traps.
              </p>
            </div>
            <div className="pt-4 border-t border-[#173022] text-xs text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Solving real educational access challenges</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0c1a13] to-[#08120c] border border-[#1d3d2c] p-8 sm:p-10 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 font-mono">
              Guidance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Our Mission
            </h3>
            <blockquote className="text-slate-200 text-base leading-relaxed border-l-2 border-emerald-400 pl-4 italic">
              "To make practical digital knowledge easier to discover, learn and
              apply for young people and lifelong learners in Ethiopia and Africa."
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We measure our impact by what learners are able to build, create, or earn after completing a JabaShop course or reviewing our e-books.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#0c1a13] to-[#08120c] border border-[#1d3d2c] p-8 sm:p-10 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 font-mono">
              Aspiration
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Our Vision
            </h3>
            <blockquote className="text-slate-200 text-base leading-relaxed border-l-2 border-emerald-400 pl-4 italic">
              "To build a trusted African digital learning ecosystem where people
              can continuously develop the skills needed for the digital future."
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Creating a continental corridor where high-value digital knowledge travels freely across borders and empowers self-determination.
            </p>
          </div>
        </div>
      </section>

      {/* Section 20: Built on Strong Values (7 Core Values) */}
      <section id="values" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Guiding Principles"
          title="Built on"
          highlightedText="Strong Values"
          description="Seven pillars that shape every course we offer, every technical decision we make, and every learner interaction we support."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {VALUES_DATA.map((val) => (
            <div
              key={val.name}
              className="rounded-2xl bg-[#0b1610] border border-[#1b3828] p-5 space-y-3 hover:border-emerald-500/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0e2217] border border-[#1f4732] flex items-center justify-center text-emerald-400">
                <DynamicIcon name={val.iconName} className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display">{val.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}

          {/* 8th Summary Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0f2318] to-[#0a150f] border border-emerald-500/30 p-5 space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider font-mono">
                Positioning
              </span>
              <h3 className="text-lg font-bold text-white mt-1 font-display">
                {SITE_CONFIG.positioning}
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {SITE_CONFIG.alternativePositioning}
              </p>
            </div>
            <a
              href={JABASHOP_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 19: Who We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Community"
          title="Who We"
          highlightedText="Serve"
          description="JabaShop was architected to empower individuals at every phase of their digital journey."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[#0a140f] border border-[#1b3929] p-6 space-y-3">
            <h3 className="text-lg font-bold text-white font-display">Students & Young Seekers</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Youth looking to gain real, employable skills alongside formal schooling—learning prompt engineering, video editing, graphic design, and web fundamentals.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0a140f] border border-[#1b3929] p-6 space-y-3">
            <h3 className="text-lg font-bold text-white font-display">Freelancers & Creators</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Content producers, digital marketers, and independent contractors building personal brands, acquiring client projects, and mastering social platforms.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0a140f] border border-[#1b3929] p-6 space-y-3">
            <h3 className="text-lg font-bold text-white font-display">Small Business Founders</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Entrepreneurs wanting to harness digital marketing, AI automation, and online storefront strategies to expand their business reach in Ethiopia and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Section 19: Where We Are Going */}
      <section id="where-we-are-going" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#09130d] border border-[#173323] p-8 sm:p-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-500/30">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Future Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Where We Are Going
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300 pt-2">
            <div className="p-5 rounded-2xl bg-[#0d1c14] border border-[#1c3d2c] space-y-2">
              <h3 className="font-bold text-white text-base">Wider Regional Language Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deepening our catalog of Afaan Oromoo and regional language learning materials so every learner feels fully supported in their mother tongue.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1c14] border border-[#1c3d2c] space-y-2">
              <h3 className="font-bold text-white text-base">Creator & Instructor Onboarding</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building creator infrastructure so verified African educators can publish their own video courses and digital books directly to JabaShop.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1c14] border border-[#1c3d2c] space-y-2">
              <h3 className="font-bold text-white text-base">Continuous Practical Innovation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Keeping curricula tightly synchronized with emerging developments in artificial intelligence, automation software, and digital work tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
};
