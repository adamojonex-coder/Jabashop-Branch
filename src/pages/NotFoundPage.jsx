import React from "react";
import { Link } from "react-router-dom";
import { Home, ExternalLink } from "lucide-react";
import { JABASHOP_APP_URL } from "../config/site";

export const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold font-mono">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          The page you requested could not be located. You can return to the JabaShop homepage or jump into the active learning WebApp.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-[#0e1d15] hover:bg-[#14291e] border border-[#1b3828] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <a
            href={JABASHOP_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
          >
            <span>Open Platform</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
