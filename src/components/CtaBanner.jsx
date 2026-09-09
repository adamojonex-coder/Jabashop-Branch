import React from "react";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { JABASHOP_APP_URL } from "../config/site";

export const CtaBanner = ({
  title = "Ready to Begin Your Digital Journey?",
  description = "Join thousands of learners developing practical skills in AI, video editing, design, and digital business on JabaShop.",
  primaryButtonText = "Start Learning",
  secondaryButtonText = "Explore Courses",
}) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c2016] via-[#091710] to-[#050e09] border border-[#1d422e] p-8 sm:p-12 lg:p-16 shadow-2xl text-center max-w-7xl mx-auto px-4 sm:px-8">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0f2a1d] text-emerald-300 border border-[#20533a]">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Gateway to Practical Growth</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          {title}
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={JABASHOP_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 shadow-lg shadow-emerald-500/25 text-sm active:scale-95"
          >
            <span>{primaryButtonText}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={JABASHOP_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-200 bg-[#0c1c13] hover:bg-[#132c1e] border border-[#1d3d2c] transition-colors text-sm"
          >
            <span>{secondaryButtonText}</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        <p className="text-xs text-slate-400 pt-2 font-mono">
          Instant access on mobile and desktop web browser • Zero app installation required
        </p>
      </div>
    </section>
  );
};
