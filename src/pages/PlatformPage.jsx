import React from "react";
import {
  ExternalLink,
  ShieldCheck,
  Smartphone,
  BookOpen,
  PlayCircle,
  LayoutDashboard,
  CreditCard,
  Lock,
  Zap,
  CheckCircle2,
  FolderGit2,
  Sparkles,
} from "lucide-react";
import { JABASHOP_APP_URL, SITE_CONFIG } from "../config/site";
import { PLATFORM_FEATURES } from "../data/features";
import { PlatformMockup } from "../components/PlatformMockup";
import { SectionHeader } from "../components/SectionHeader";
import { DynamicIcon } from "../components/DynamicIcon";
import { CtaBanner } from "../components/CtaBanner";

export const PlatformPage = () => {
  const WEBAPP_CAPABILITIES = [
    {
      title: "User Accounts & Authentication",
      desc: "Instant profile creation, secure session handling, and encrypted password credentials protecting your identity.",
      icon: "ShieldCheck",
    },
    {
      title: "Video Courses & Structured Lessons",
      desc: "Clean embedded video player with chapter markers, playback speed adjustments, and progress tracking.",
      icon: "PlayCircle",
    },
    {
      title: "Digital E-Books & Reference Library",
      desc: "Structured e-books, downloadable study guides, and comprehensive PDF handbooks accessible anytime.",
      icon: "BookOpen",
    },
    {
      title: "Purchases & Payment Flow",
      desc: "Transparent checkout designed with local payment channels, providing immediate unlock upon verification.",
      icon: "CreditCard",
    },
    {
      title: "Personal Learning Library",
      desc: "A dedicated digital bookshelf preserving lifetime access to all your enrolled and purchased resources.",
      icon: "FolderGit2",
    },
    {
      title: "Interactive Learning Dashboard",
      desc: "Visual indicators showing completed modules, current courses, and recommended next milestones.",
      icon: "LayoutDashboard",
    },
    {
      title: "Verified Digital Content",
      desc: "Curated learning assets reviewed for relevance, actionable utility, and clarity before release.",
      icon: "CheckCircle2",
    },
    {
      title: "Mobile Optimization",
      desc: "Engineered to run seamlessly in mobile browsers without forcing high-megabyte app downloads.",
      icon: "Smartphone",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-28 py-8 sm:py-12">
      {/* Platform Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0e2217] text-emerald-300 border border-[#1b432d]">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>The Technology Engine</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display">
          Inside the <span className="text-gradient-emerald">JabaShop Platform</span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
          The JabaShop WebApp is an integrated digital learning hub engineered to deliver
          fast, accessible courses and e-books directly through your web browser.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={JABASHOP_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md text-sm"
          >
            <span>Open Platform</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Visual Platform Representation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlatformMockup />
      </section>

      {/* Distinction Notice Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#0a150f] border border-[#1d3d2c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider font-mono">
              Website vs WebApp Distinction
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              You are currently exploring the official public information website. To enroll in courses, read your purchased e-books, and access your dashboard, open the JabaShop WebApp.
            </p>
          </div>
          <a
            href={JABASHOP_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Open Platform</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Section 13: Full WebApp Capabilities Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="System Architecture"
          title="What the JabaShop WebApp"
          highlightedText="Handles"
          description="Built to deliver a cohesive, dependable learning and purchasing environment from first login to skill mastery."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WEBAPP_CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0b1610] border border-[#1b3828] p-5 space-y-3 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <DynamicIcon name={cap.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug font-display">{cap.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{cap.desc}</p>
              </div>
              <div className="pt-2 border-t border-[#173022] text-[10px] text-emerald-400 uppercase tracking-wider font-semibold font-mono">
                Live WebApp Feature
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Highlights (Performance & Data Efficiency) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#09130d] border border-[#173323] p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0f2418] border border-[#204933] flex items-center justify-center text-emerald-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Zero App Installation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Runs instantly in Chrome, Safari, or Firefox on mobile and desktop without consuming precious smartphone storage memory.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0f2418] border border-[#204933] flex items-center justify-center text-emerald-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Bandwidth Mindful</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Optimized video delivery and lightweight web assets minimize mobile data consumption, keeping learning cost-effective on standard data plans.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0f2418] border border-[#204933] flex items-center justify-center text-emerald-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Permanent Library Ownership</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every digital product purchased is bound to your account profile for continuous, ongoing access with no unexpected expirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Access the JabaShop WebApp"
        description="Experience the fast, mobile-friendly digital learning platform designed for practical mastery."
        primaryButtonText="Open Platform"
        secondaryButtonText="Explore Courses"
      />
    </div>
  );
};
