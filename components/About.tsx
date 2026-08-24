"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TiltPhotoCard from "./TiltPhotoCard";
import CyberTerminal from "./CyberTerminal";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto scroll-mt-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Sisi Kiri: 3D Tilt Interactive Photo Card */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <TiltPhotoCard
              src="/Profile1.png"
              alt="2OB1T Profile Photo"
              username="2OB1T"
              location={t.about.photoCard.location}
              caption={t.about.photoCard.caption}
            />
          </motion.div>
        </div>

        {/* Sisi Kanan: Typography 2D dengan Perspektif 3D & Detail Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 [perspective:1000px]"
        >
          {/* Label Sub-header Editorial */}
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase block">
            {t.about.subHeader}
          </span>

          {/* Typography dengan Variasi Kemiringan 2.5D / Perspektif 3D */}
          <div className="space-y-4 [transform-style:preserve-3d]">
            
            {/* Baris 1: SAYA / I AM 2OB1T dengan 3D Isometric Slant */}
            <div className="flex flex-wrap items-center gap-3 text-4xl sm:text-6xl font-black text-white leading-none">
              <span className="italic tracking-tighter text-slate-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                {t.about.iAm}
              </span>
              <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 rounded-2xl font-black tracking-tight shadow-[5px_5px_0px_#0891b2] -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 inline-block [transform:translateZ(20px)] cursor-default">
                2OB1T
              </span>
            </div>

            {/* Baris 2: FULLSTACK & AI DEVELOPER dengan Counter-Slant Badge */}
            <div className="pt-1">
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 rounded-2xl font-black text-base sm:text-2xl tracking-wide shadow-[5px_5px_0px_#059669] rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 inline-block [transform:translateZ(15px)] cursor-default uppercase">
                {t.about.roleBadge}
              </span>
            </div>

          </div>

          {/* Text Box dengan Angled 3D Perspective Glass Panel */}
          <div className="border-l-4 border-cyan-400 bg-slate-900/40 backdrop-blur-md rounded-r-3xl p-6 sm:p-7 space-y-4 shadow-2xl [transform:perspective(900px)_rotateY(-2deg)] hover:[transform:perspective(900px)_rotateY(0deg)] transition-all duration-500 border-y border-r border-slate-800/80">
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium max-w-prose">
              {t.about.p1}
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-prose">
              {t.about.p2}
            </p>
          </div>

          {/* Unduh CV (Magnetic Button) */}
          <div className="pt-2">
            <MagneticButton>
              <a
                href="https://drive.google.com/file/d/1_nxG0NW8VHmwFDwsLMWEVERtDNi7ZAC9/view?usp=drive_link"
                download
                className="px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-slate-900 border border-slate-700 text-slate-100 hover:border-cyan-400 hover:text-cyan-300 flex items-center gap-2.5 shadow-xl transition-colors group focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>{t.about.downloadCv}</span>
              </a>
            </MagneticButton>
          </div>
        </motion.div>

      </div>

      {/* Cybernetic Interactive Terminal Section */}
      <div className="mt-16 sm:mt-20 w-full">
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              INTERACTIVE AGENTIC TERMINAL
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            Commands: &apos;projects&apos;, &apos;skills&apos;, &apos;ai&apos;, &apos;cv&apos;, &apos;matrix&apos;
          </span>
        </div>
        <CyberTerminal />
      </div>
    </section>
  );
}
