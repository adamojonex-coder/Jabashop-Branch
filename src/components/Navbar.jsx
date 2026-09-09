import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink, Sparkles, BookOpen } from "lucide-react";
import { JABASHOP_APP_URL, NAV_LINKS, SITE_CONFIG } from "../config/site";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#060b08]/90 backdrop-blur-md border-b border-[#14291e] py-3 shadow-lg"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="JabaShop Official Website Homepage"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#0f3d26] to-[#166534] border border-[#22c55e]/30 flex items-center justify-center text-emerald-300 shadow-md group-hover:border-emerald-400/60 transition-colors">
              <span className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight">
                J
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Jaba<span className="text-emerald-400">Shop</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-emerald-400/90 font-mono -mt-1 hidden xs:block">
                Digital Learning
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0b1610]/80 px-3 py-1.5 rounded-full border border-[#1b3b2a] shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-[#163826] text-emerald-300 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-[#10271b]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA (Directs to the Real JabaShop WebApp) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={JABASHOP_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all shadow-md shadow-emerald-500/20"
            >
              <span>Explore JabaShop</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={JABASHOP_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
            >
              Explore
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-[#11291c] border border-[#1b3d2b] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#070e0a]/95 backdrop-blur-xl border-b border-[#163323] p-4 sm:p-6 shadow-2xl space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#11291c] text-emerald-400 font-semibold"
                      : "text-slate-200 hover:bg-[#0d1f15] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#163323] space-y-2">
            <a
              href={JABASHOP_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg"
            >
              <span>Explore JabaShop</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-center text-slate-400 font-mono">
              Redirects to official platform: www.jabashop.store
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
