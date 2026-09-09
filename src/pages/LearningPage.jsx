import React, { useState } from "react";
import {
  Sparkles,
  Search,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import { JABASHOP_APP_URL } from "../config/site";
import { CATEGORIES_DATA } from "../data/categories";
import { DynamicIcon } from "../components/DynamicIcon";
import { CategoryModal } from "../components/CategoryModal";
import { CtaBanner } from "../components/CtaBanner";

export const LearningPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCategories = CATEGORIES_DATA.filter((cat) => {
    const matchesSearch =
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLevel =
      selectedLevel === "All" || cat.level === selectedLevel || cat.level === "All Levels";

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-20 sm:space-y-24 py-8 sm:py-12">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0e2217] text-emerald-300 border border-[#1b432d]">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Curriculum & Knowledge Matrix</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display">
          Practical Skills for the <br className="hidden sm:inline" />
          <span className="text-gradient-emerald">Modern Digital Economy</span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
          From Artificial Intelligence to mobile video editing and online business,
          explore all 10 core disciplines curated on JabaShop.
        </p>

        {/* Filter Controls */}
        <div className="max-w-2xl mx-auto pt-4 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g., AI, CapCut, Canva, Marketing)..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a150f] border border-[#1c3c2b] text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 placeholder:text-slate-500"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {["All", "Beginner", "All Levels"].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedLevel === level
                    ? "bg-emerald-400 text-slate-950 shadow-md"
                    : "bg-[#0a150f] border border-[#1c3c2b] text-slate-300 hover:text-white"
                }`}
              >
                {level === "All" ? "All Levels" : level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Afaan Oromoo Special Highlight Banner */}
      <section id="afaan-oromoo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0d1f16] via-[#091710] to-[#0d1f16] border border-[#1e4530] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
              <Globe2 className="w-4 h-4" />
              <span>Multilingual Knowledge Access</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Afaan Oromoo & Ethiopian Language Resources
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              JabaShop recognizes the power of learning technical skills in your primary language.
              We provide essential courses, tutorials, and digital books with Afaan Oromoo instruction,
              making complex software and AI tools easy to grasp.
            </p>
          </div>
          <a
            href={JABASHOP_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
          >
            <span>Explore Courses</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="cursor-pointer group rounded-2xl bg-[#0a150f] border border-[#1b3928] hover:border-emerald-500/50 hover:bg-[#0f2217] p-6 transition-all duration-200 flex flex-col justify-between space-y-4 hover:-translate-y-1"
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

                {/* Topics Tag List */}
                <div className="space-y-1.5 pt-2 border-t border-[#173022]">
                  <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                    Topics Included:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.topics.slice(0, 3).map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#0d1a13] text-slate-300 border border-[#183324]"
                      >
                        {topic}
                      </span>
                    ))}
                    {cat.topics.length > 3 && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded text-emerald-400 font-mono">
                        +{cat.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#173022] flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {cat.format}
                </span>
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-[#0a150f] border border-[#1b3828] space-y-3">
            <p className="text-slate-300 text-sm">
              No categories matched your search criteria: "<strong>{searchQuery}</strong>"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedLevel("All");
              }}
              className="text-xs font-semibold text-emerald-400 hover:underline"
            >
              Reset search filters
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <CtaBanner
        title="Find Your Next Skill on JabaShop"
        description="Choose from our practical video courses and downloadable e-books to advance your abilities."
        primaryButtonText="Explore Courses"
        secondaryButtonText="Start Learning"
      />

      {/* Category Details Modal */}
      {selectedCategory && (
        <CategoryModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
};
