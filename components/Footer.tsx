"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#070a12]/80 backdrop-blur-md py-8 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Left: Identity and Copyright */}
        <div className="flex items-center gap-2 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tabular-nums">{t.footer.copyright}</span>
        </div>

        {/* Right: Location, Stack info, and Back to Top */}
        <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <span className="text-slate-400 hidden sm:inline">{t.footer.location}</span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400/60 hover:text-cyan-300 text-slate-400 flex items-center justify-center transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            title={t.footer.backToTop}
            aria-label={t.footer.backToTop}
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
