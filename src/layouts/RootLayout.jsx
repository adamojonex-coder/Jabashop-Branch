import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-[#060b08] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20 sm:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
