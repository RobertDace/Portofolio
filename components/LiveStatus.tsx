"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Sparkles, Clock, Globe } from "lucide-react";
import { sound } from "@/utils/sound";
import { useLanguage } from "@/context/LanguageContext";

export default function LiveStatus() {
  const { language, t } = useLanguage();
  const [time, setTime] = useState("");
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsMuted(sound.getIsMuted());

    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("id-ID", {
        timeZone: "Asia/Jakarta",
        hour12: false,
      });
      setTime(`${formatted} WIB`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    const handleSoundChange = (e: CustomEvent<boolean>) => setIsMuted(e.detail);
    window.addEventListener("sound_mute_changed" as unknown as keyof WindowEventMap, handleSoundChange as EventListener);

    return () => {
      clearInterval(interval);
      window.removeEventListener("sound_mute_changed" as unknown as keyof WindowEventMap, handleSoundChange as EventListener);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-between flex-wrap gap-3 py-3 px-4 sm:px-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl shadow-lg font-mono text-xs text-slate-400 select-none">
      
      {/* Status Ketersediaan */}
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px] sm:text-xs">
          {language === "id" ? "TERSEDIA UNTUK PROYEK & REKRUTMEN" : "AVAILABLE FOR FULL-TIME & CONTRACT ROLES"}
        </span>
      </div>

      {/* Info Waktu & Audio Control */}
      <div className="flex items-center gap-4">
        {/* Jam Real-time */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span className="tabular-nums font-semibold">{time || "00:00:00 WIB"}</span>
        </div>

        {/* Mute/Unmute Button */}
        <button
          type="button"
          onClick={() => sound.toggleMute()}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-pointer text-[11px] font-bold text-slate-300"
          title={isMuted ? "Unmute Audio SFX" : "Mute Audio SFX"}
          aria-label="Toggle Sound Effects"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              <span>SFX: OFF</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="text-emerald-400">SFX: ON</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
