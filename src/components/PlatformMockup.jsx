import React from "react";
import {
  Smartphone,
  Play,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Lock,
  Layers,
  Sparkles,
  Search,
  Globe2,
} from "lucide-react";
import { JABASHOP_APP_URL } from "../config/site";

export const PlatformMockup = () => {
  return (
    <div className="relative mx-auto max-w-5xl rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-[#142e20] via-[#0b1b12] to-[#060e0a] border border-[#1f4732] shadow-2xl">
      {/* Chrome browser bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#183a28] text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
            JabaShop WebApp Interface
          </span>
        </div>

        {/* Browser URL pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08150e] border border-[#163826] text-[11px] font-mono text-emerald-400">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span>https://www.jabashop.store</span>
        </div>

        <a
          href={JABASHOP_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
        >
          <span>Open WebApp</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Main mockup viewport */}
      <div className="p-4 sm:p-6 lg:p-8 bg-[#070f0b] rounded-2xl mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left column: Active Course Player Mockup (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-2xl overflow-hidden bg-[#0a1710] border border-[#1a3d2b] p-4 sm:p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between text-xs">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20">
                ACTIVE COURSE MODULE
              </span>
              <span className="text-slate-400 text-[11px]">Lesson 04 of 12</span>
            </div>

            {/* Simulated Video Canvas */}
            <div className="relative aspect-video rounded-xl bg-gradient-to-tr from-[#050c08] via-[#0d2217] to-[#122e20] border border-[#1e4833] flex flex-col items-center justify-center p-4 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
              <div className="relative z-10 w-12 h-12 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
                <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
              </div>
              <div className="relative z-10 mt-3 font-display font-bold text-white text-sm sm:text-base">
                Generative AI Prompting & Workflows
              </div>
              <p className="relative z-10 text-[11px] text-emerald-300 font-mono mt-1">
                Practical Execution • Afaan Oromoo & English Audio
              </p>
            </div>

            {/* Progress Bar & Details */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Module Progress: 35%</span>
                <span className="text-emerald-400">Resume Playback</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#132c1e] overflow-hidden">
                <div className="w-[35%] h-full bg-emerald-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Quick info row */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#0b1711] border border-[#163324] flex items-center gap-2.5">
              <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="font-semibold text-white">Mobile Optimized</div>
                <div className="text-[10px] text-slate-400">Smooth playback on phone</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#0b1711] border border-[#163324] flex items-center gap-2.5">
              <Globe2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="font-semibold text-white">Language Support</div>
                <div className="text-[10px] text-slate-400">Afaan Oromoo & English</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Digital Library & E-Books preview (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-[#0a1610] border border-[#1b3a2a] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>My Learning Library</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                LIFETIME
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every course and e-book you acquire is permanently saved to your digital profile.
            </p>

            {/* List of library items */}
            <div className="space-y-2 pt-1">
              <div className="p-2.5 rounded-xl bg-[#07110c] border border-[#142c1e] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                    AI
                  </div>
                  <div>
                    <div className="text-white font-medium text-xs">AI Essentials E-Book</div>
                    <div className="text-[10px] text-slate-400">Complete Handbook</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">PDF Ready</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#07110c] border border-[#142c1e] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                    VID
                  </div>
                  <div>
                    <div className="text-white font-medium text-xs">CapCut Mobile Pro</div>
                    <div className="text-[10px] text-slate-400">12 Video Modules</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Enrolled</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#07110c] border border-[#142c1e] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                    MKT
                  </div>
                  <div>
                    <div className="text-white font-medium text-xs">Digital Marketing Blueprint</div>
                    <div className="text-[10px] text-slate-400">Ethiopia Growth Guide</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Enrolled</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={JABASHOP_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Access JabaShop</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
