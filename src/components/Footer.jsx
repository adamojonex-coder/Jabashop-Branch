import React from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Mail,
  Send,
  Youtube,
  Facebook,
  ShieldCheck,
  Globe2,
  Heart,
} from "lucide-react";
import { CONTACT_INFO, JABASHOP_APP_URL, NAV_LINKS, SITE_CONFIG } from "../config/site";

export const Footer = () => {
  return (
    <footer className="bg-[#040806] border-t border-[#132a1d] text-slate-400 text-xs mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-display font-extrabold text-base">
                J
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                Jaba<span className="text-emerald-400">Shop</span>
              </span>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              The official website for JabaShop. Dedicated to making practical digital
              skills, courses, and educational e-books accessible to learners across
              Ethiopia and Africa.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400/90 font-mono bg-[#0c1f15] px-3 py-1 rounded-md border border-[#163b27]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{SITE_CONFIG.positioning}</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Navigation
            </div>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-emerald-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Learning Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Disciplines
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <Link to="/learning" className="hover:text-emerald-300 transition-colors">
                  AI & Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-emerald-300 transition-colors">
                  Computer Basics & Literacy
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-emerald-300 transition-colors">
                  Mobile & Desktop Video Editing
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-emerald-300 transition-colors">
                  Graphic Design & Canva
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-emerald-300 transition-colors">
                  Digital Marketing & Social Media
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-emerald-300 transition-colors">
                  Online Business & Freelancing
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-emerald-300 transition-colors">
                  Afaan Oromoo Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform Access & Social Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Live Platform
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Access the active JabaShop WebApp to enroll in courses and manage your personal library.
            </p>

            <a
              href={JABASHOP_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
            >
              <span>Launch WebApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Social Icons */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                Official Channels
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={CONTACT_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram Channel"
                  className="w-8 h-8 rounded-lg bg-[#0d1f15] border border-[#1b3d2b] flex items-center justify-center text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
                <a
                  href={CONTACT_INFO.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Account"
                  className="w-8 h-8 rounded-lg bg-[#0d1f15] border border-[#1b3d2b] flex items-center justify-center text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 1 0 6.34 6.34V8.58a8.28 8.28 0 0 0 4.77 1.52v-3.41z" />
                  </svg>
                </a>
                <a
                  href={CONTACT_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                  className="w-8 h-8 rounded-lg bg-[#0d1f15] border border-[#1b3d2b] flex items-center justify-center text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Page"
                  className="w-8 h-8 rounded-lg bg-[#0d1f15] border border-[#1b3d2b] flex items-center justify-center text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  aria-label="Email Us"
                  className="w-8 h-8 rounded-lg bg-[#0d1f15] border border-[#1b3d2b] flex items-center justify-center text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#102419] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} JabaShop. All rights reserved. Addis Ababa, Ethiopia.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
