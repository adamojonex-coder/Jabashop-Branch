import React from "react";

export const SectionHeader = ({
  badge,
  title,
  highlightedText,
  description,
  alignment = "center",
  id,
}) => {
  const isCenter = alignment === "center";

  return (
    <div
      id={id}
      className={`space-y-4 max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      }`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0e2217] text-emerald-300 border border-[#1b432d]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
        {title}{" "}
        {highlightedText && (
          <span className="text-gradient-emerald">{highlightedText}</span>
        )}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
