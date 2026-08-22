"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900/80 bg-[#060911]/90 backdrop-blur-xl text-slate-400 py-10 px-6 sm:px-8 md:px-12 relative z-10 font-sans select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span className="text-cyan-400 font-black tracking-wider text-sm">2OB1T</span>
          <span className="text-slate-700">/</span>
          <span className="tabular-nums">© 2026 Alfian Robit. All rights reserved.</span>
        </div>

        {/* Right: Location, Stack info, and Back to Top */}
        <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <span className="text-slate-400 hidden sm:inline">Samarinda, Indonesia (UTC+8)</span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400/60 hover:text-cyan-300 text-slate-400 flex items-center justify-center transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            title="Kembali ke atas"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
