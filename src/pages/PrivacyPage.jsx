import React from "react";
import { ShieldCheck } from "lucide-react";

export const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-500/30">
          <ShieldCheck className="w-4 h-4" />
          <span>Official Document</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400 font-mono">
          Last Updated: 2026 • JabaShop Platform
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 text-sm space-y-6 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            1. Introduction
          </h2>
          <p>
            This Privacy Policy explains how JabaShop ("we", "our", or "the platform")
            collects, uses, protects, and discloses information gathered through our
            official website and the JabaShop WebApp. We are committed to safeguarding
            the privacy and digital security of our learners in Ethiopia and globally.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            2. Information We Collect
          </h2>
          <p>
            When you interact with our website or enroll in the JabaShop WebApp, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li><strong>Account Data:</strong> Name, email address, phone number, and account credentials.</li>
            <li><strong>Enrollment & Library Data:</strong> Records of courses purchased, e-books downloaded, and module completion status.</li>
            <li><strong>Communications:</strong> Queries submitted through our contact form or support channels.</li>
            <li><strong>Technical Data:</strong> Browser type, approximate geographical location (country/city level), and device operating system to ensure mobile-friendly optimization.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            3. How We Use Your Information
          </h2>
          <p>
            We use your data solely to deliver, secure, and improve your digital learning experience:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>Provisioning lifetime access to your enrolled courses and digital e-books.</li>
            <li>Processing secure purchase transactions.</li>
            <li>Providing responsive technical and customer support.</li>
            <li>Ensuring fast, reliable platform performance across mobile networks.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            4. No Selling of Personal Data
          </h2>
          <p>
            We strictly do not sell, rent, or trade your personal information to third-party advertisers. Your contact information and learning activity remain private within the JabaShop infrastructure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            5. Data Protection and Security
          </h2>
          <p>
            We implement robust security practices including encrypted SSL connections, secure password hashing, and tokenized session controls to safeguard your personal library and account information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white font-display">
            6. Contact Regarding Privacy
          </h2>
          <p>
            If you have questions about your data, privacy rights, or wish to request account deletion, please contact our support team at <a href="mailto:support@jabashop.com" className="text-emerald-400 underline">support@jabashop.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
