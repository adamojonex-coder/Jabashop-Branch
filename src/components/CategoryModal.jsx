import React, { useEffect } from "react";
import { X, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { JABASHOP_APP_URL } from "../config/site";
import { DynamicIcon } from "./DynamicIcon";

export const CategoryModal = ({ category, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#0a150f] border border-[#1d3d2c] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#12241a] hover:bg-[#1a3526] border border-[#1f402e] text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 pr-10">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <DynamicIcon name={category.iconName} className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-400 font-mono">
              {category.level} • {category.format}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Long Description */}
        <div className="text-slate-300 text-sm sm:text-base leading-relaxed border-y border-[#162f21] py-4">
          {category.longDesc}
        </div>

        {/* Topics List */}
        <div className="space-y-3">
          <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
            Curriculum Highlights:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {category.topics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 bg-[#070f0b] p-2.5 rounded-xl border border-[#142d1f]"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WebApp Access Action */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-mono">
            Available on the JabaShop WebApp
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#0e1d15] hover:bg-[#14291e] border border-[#1b3828] transition-colors"
            >
              Close
            </button>
            <a
              href={JABASHOP_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md"
            >
              <span>Explore Courses</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
