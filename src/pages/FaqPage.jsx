import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Search,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import { FAQ_DATA } from "../data/faq";
import { CtaBanner } from "../components/CtaBanner";

export const FaqPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openItems, setOpenItems] = useState({
    "what-is-jabashop": true,
  });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = ["All", "General", "Learning", "Access & Payments", "Language & Region"];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 sm:space-y-24 py-8 sm:py-12">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0e2217] text-emerald-300 border border-[#1b432d]">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Knowledge Base & Support</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display">
          Frequently Asked <span className="text-gradient-emerald">Questions</span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
          Clear answers about JabaShop, course access, digital e-books, Afaan Oromoo resources, and payments.
        </p>

        {/* Search & Filter */}
        <div className="max-w-2xl mx-auto pt-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search platform questions..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a150f] border border-[#1c3c2b] text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 placeholder:text-slate-500"
            />
          </div>

          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-emerald-400 text-slate-950 font-bold"
                    : "bg-[#0a150f] border border-[#1c3c2b] text-slate-300 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#0a150f] border border-[#1b3828] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 font-mono block">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white font-display">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#162f21] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 p-6 rounded-2xl bg-[#0a150f] border border-[#1b3828] space-y-2">
            <p className="text-slate-300 text-sm">
              No answers matched your query: "<strong>{searchQuery}</strong>"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-semibold text-emerald-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-[#0d1c14] border border-[#1c3d2c] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-display">Still have a question?</h4>
            <p className="text-xs text-slate-400">
              Our team is available to assist you with platform inquiries and questions.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact Support</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Ready to Start Learning?"
        description="Visit the official JabaShop platform and discover practical digital skills."
        primaryButtonText="Start Learning"
        secondaryButtonText="Explore Courses"
      />
    </div>
  );
};
