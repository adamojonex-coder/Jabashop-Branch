import React from "react";
import { ShieldCheck } from "lucide-react";

export const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-500/30">
          <ShieldCheck className="w-4 h-4" />
          <span>Official Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-400 font-mono">
          Last Updated: 2026 • JabaShop Platform
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 text-sm space-y-6 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the JabaShop website and digital learning WebApp, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            2. Platform Purpose
          </h2>
          <p>
            JabaShop is a digital learning and digital product marketplace providing practical courses, digital books, and educational materials. This website serves as the informational portal, while the JabaShop WebApp serves as the interactive learning and transaction platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            3. Digital Product Access & Intellectual Property
          </h2>
          <p>
            All digital video lessons, written e-books, downloadable templates, and curriculum structures provided on JabaShop are the protected intellectual property of JabaShop or licensed content creators.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Purchasing a course or e-book grants you a personal, non-transferable license to access and view the materials for your own educational use.</li>
            <li>You may not reproduce, redistribute, resell, or publicly broadcast any JabaShop learning materials without express written authorization.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            4. User Accounts and Security
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials on the JabaShop WebApp. You agree to notify us immediately of any unauthorized access to your account.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            5. Purchases and Payments
          </h2>
          <p>
            Prices for digital courses and e-books are clearly specified prior to purchase. Once access is verified and delivered to your personal library, purchases are considered executed according to the product guidelines.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            6. Inquiries and Support
          </h2>
          <p>
            For questions regarding these Terms, please contact <a href="mailto:contact@jabashop.com" className="text-emerald-400 underline">contact@jabashop.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
