"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Clock, MapPin, Sparkles, Terminal } from "lucide-react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Makassar", // WITA (UTC+8) Samarinda
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("id-ID", options);
      setCurrentTime(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#060911]/90 backdrop-blur-xl text-slate-400 py-12 px-6 sm:px-8 md:px-12 relative z-10 font-sans select-none">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* TOP BAR: Telemetry & Live Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-3xl bg-slate-950/60 border border-slate-800/80 shadow-2xl items-center">
          
          {/* 1. Live Time & Base Location */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Clock className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>Samarinda, WITA (UTC+8)</span>
              </div>
              <div className="text-sm sm:text-base font-mono font-bold text-white tabular-nums">
                {currentTime ? `${currentTime} WITA` : "00:00:00 WITA"}
              </div>
            </div>
          </div>

          {/* 2. Availability Status Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                Work Status
              </div>
              <div className="text-xs sm:text-sm font-semibold text-emerald-300">
                Open for High-Impact Roles
              </div>
            </div>
          </div>

          {/* 3. Tech Stack & Version Architecture */}
          <div className="flex items-center justify-between md:justify-end gap-3">
            <div className="text-left md:text-right">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 flex items-center md:justify-end gap-1">
                <Terminal className="w-3 h-3 text-cyan-400" />
                <span>Architecture</span>
              </div>
              <div className="text-xs font-mono font-bold text-slate-200">
                Next.js 16 • Turbopack • Vercel
              </div>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400/60 hover:text-cyan-300 text-slate-300 flex items-center justify-center transition-all active:scale-95 shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none flex-shrink-0"
              title="Kembali ke atas"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* BOTTOM BAR: Copyright & Typographic Heritage */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-2 border-t border-slate-900">
          <div className="flex items-center gap-2 font-mono">
            <span className="text-cyan-400 font-black tracking-wider">2OB1T</span>
            <span className="text-slate-500">•</span>
            <span className="tabular-nums">© 2024 – {new Date().getFullYear()} Alfian Robit. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-medium">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Designed with Anti-Slop Discipline &amp; Precision Engineering.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
