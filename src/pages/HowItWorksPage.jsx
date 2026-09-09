import React from "react";
import {
  Sparkles,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { JABASHOP_APP_URL } from "../config/site";
import { HOW_IT_WORKS_STEPS } from "../data/features";
import { CtaBanner } from "../components/CtaBanner";

export const HowItWorksPage = () => {
  return (
    <div className="space-y-24 sm:space-y-28 py-8 sm:py-12">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0e2217] text-emerald-300 border border-[#1b432d]">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Simple 4-Step Process</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display">
          How JabaShop <span className="text-gradient-emerald">Works</span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
          From finding the practical skill you need to studying on your smartphone
          and applying it in the digital world.
        </p>

        <div className="pt-2">
          <a
            href={JABASHOP_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md text-sm"
          >
            <span>Start Learning</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 4 Steps In-Depth */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {HOW_IT_WORKS_STEPS.map((step, idx) => (
          <div
            key={step.stepNumber}
            className={`rounded-3xl bg-[#0a150f] border border-[#1c3a2a] p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Step Number & Visual Column */}
            <div className="w-full md:w-5/12 space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0e2117] to-[#08130d] border border-emerald-500/30 text-center space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block font-bold">
                  PHASE {step.stepNumber}
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white font-display">
                  {step.title}
                </div>
                <div className="text-xs font-semibold text-emerald-300 px-3 py-1 rounded-full bg-emerald-950/80 inline-block border border-emerald-500/30">
                  "{step.tagline}"
                </div>
              </div>
            </div>

            {/* Step Explanation Column */}
            <div className="w-full md:w-7/12 space-y-4">
              <div className="text-xs uppercase tracking-wider font-mono text-emerald-400 font-semibold">
                Step {step.stepNumber} of 04
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {step.title}: {step.tagline}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>

              <div className="pt-2 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  Key Milestones:
                </div>
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Technical Requirements Checklist */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#09130d] border border-[#173323] p-8 sm:p-10 space-y-6">
          <div className="text-xs uppercase tracking-wider font-semibold text-emerald-400 font-mono">
            System Requirements
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            What You Need to Learn on JabaShop
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            We intentionally eliminated excessive hardware and bandwidth barriers so you can study comfortably from anywhere.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#0d1c14] border border-[#1a3727] space-y-1">
              <div className="font-bold text-white text-sm font-display">Any Smartphone or Computer</div>
              <div className="text-xs text-slate-400">Android, iPhone, Windows, Mac, or Linux with a modern web browser.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0d1c14] border border-[#1a3727] space-y-1">
              <div className="font-bold text-white text-sm font-display">Standard Web Browser</div>
              <div className="text-xs text-slate-400">Google Chrome, Safari, Firefox, or Edge. No special software required.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0d1c14] border border-[#1a3727] space-y-1">
              <div className="font-bold text-white text-sm font-display">Modest Mobile Internet</div>
              <div className="text-xs text-slate-400">3G/4G or Wi-Fi. Our video and e-book deliveries are compressed for data efficiency.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0d1c14] border border-[#1a3727] space-y-1">
              <div className="font-bold text-white text-sm font-display">Email or Mobile Number</div>
              <div className="text-xs text-slate-400">To maintain your personal account and secure your purchased learning library.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Ready to Take Step 01?"
        description="Visit the official JabaShop platform and discover practical digital skills today."
        primaryButtonText="Start Learning"
        secondaryButtonText="Explore JabaShop"
      />
    </div>
  );
};
