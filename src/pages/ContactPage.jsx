import React, { useState } from "react";
import {
  Mail,
  Send,
  Youtube,
  Facebook,
  CheckCircle2,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { CONTACT_INFO } from "../config/site";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-20 sm:space-y-24 py-8 sm:py-12">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0e2217] text-emerald-300 border border-[#1b432d]">
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>Get in Touch</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display">
          Contact <span className="text-gradient-emerald">JabaShop</span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
          Have questions about the platform, digital courses, e-books, or partnership inquiries?
          Send us a message or connect through our verified communication channels.
        </p>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0a150f] border border-[#1c3a2a] p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Message Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for contacting JabaShop. Our team will review your inquiry and get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#0e1f16] border border-[#1c3f2d] text-xs font-semibold text-emerald-400 hover:bg-[#132a1e] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white font-display">
                    Send an Official Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the fields below and our team will follow up promptly.
                  </p>
                </div>

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Abebe Bekele"
                    className="w-full px-4 py-3 rounded-xl bg-[#060c09] border border-[#1b3828] text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. yourname@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#060c09] border border-[#1b3828] text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Question about Afaan Oromoo course materials"
                    className="w-full px-4 py-3 rounded-xl bg-[#060c09] border border-[#1b3828] text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe your inquiry or feedback..."
                    className="w-full px-4 py-3 rounded-xl bg-[#060c09] border border-[#1b3828] text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 placeholder:text-slate-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  id="contact-submit-btn"
                  className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20 text-sm disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Submit Message"}
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Details & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email card */}
            <div className="rounded-3xl bg-[#0a150f] border border-[#1c3a2a] p-6 space-y-4">
              <h4 className="text-xs uppercase font-bold text-emerald-400 tracking-wider font-mono">
                Official Inquiries
              </h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0e1d15] border border-[#1b3828] hover:border-emerald-500/40 text-slate-200 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-xs text-slate-400">General Inquiries</div>
                    <div className="text-sm font-semibold">{CONTACT_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.supportEmail}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0e1d15] border border-[#1b3828] hover:border-emerald-500/40 text-slate-200 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-xs text-slate-400">Support & Learning Assistance</div>
                    <div className="text-sm font-semibold">{CONTACT_INFO.supportEmail}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Official Social Channels */}
            <div className="rounded-3xl bg-[#0a150f] border border-[#1c3a2a] p-6 space-y-4">
              <h4 className="text-xs uppercase font-bold text-emerald-400 tracking-wider font-mono">
                Official Channels
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CONTACT_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0e1d15] border border-[#1b3828] hover:border-emerald-500/40 flex items-center gap-2.5 text-xs font-semibold text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Telegram</span>
                </a>

                <a
                  href={CONTACT_INFO.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0e1d15] border border-[#1b3828] hover:border-emerald-500/40 flex items-center gap-2.5 text-xs font-semibold text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 1 0 6.34 6.34V8.58a8.28 8.28 0 0 0 4.77 1.52v-3.41z" />
                  </svg>
                  <span>TikTok</span>
                </a>

                <a
                  href={CONTACT_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0e1d15] border border-[#1b3828] hover:border-emerald-500/40 flex items-center gap-2.5 text-xs font-semibold text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-emerald-400" />
                  <span>YouTube</span>
                </a>

                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0e1d15] border border-[#1b3828] hover:border-emerald-500/40 flex items-center gap-2.5 text-xs font-semibold text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-emerald-400" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Location & Context */}
            <div className="rounded-3xl bg-[#0a150f] border border-[#1c3a2a] p-6 space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <p>Serving learners across Ethiopia and East Africa.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
