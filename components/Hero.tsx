"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TiltPhotoCard from "./TiltPhotoCard";
import LiveStatus from "./LiveStatus";
import { useLanguage } from "@/context/LanguageContext";

// Inline SVG untuk Ikon Sosmed
const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Hero() {
  const { t } = useLanguage();
  const roles = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset typewriter when roles/language changes
  useEffect(() => {
    setRoleIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [roles]);

  // Cyber Glitch Scramble Text on ROBIT hover
  const [robitText, setRobitText] = useState("ROBIT");

  const handleRobitHover = () => {
    const target = "2OB1T";
    const glyphs = "2OB1T084XZ#";
    let iteration = 0;
    const interval = setInterval(() => {
      setRobitText(
        target
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return target[index];
            }
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("")
      );

      if (iteration >= target.length) {
        clearInterval(interval);
        setRobitText("2OB1T");
      }

      iteration += 1 / 2;
    }, 30);
  };

  const handleRobitLeave = () => {
    const target = "ROBIT";
    const glyphs = "ROBIT084XZ#";
    let iteration = 0;
    const interval = setInterval(() => {
      setRobitText(
        target
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return target[index];
            }
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("")
      );

      if (iteration >= target.length) {
        clearInterval(interval);
        setRobitText("ROBIT");
      }

      iteration += 1 / 2;
    }, 30);
  };

  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentFullRole) {
      // Pause saat teks selesai diketik
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText === "") {
      // Pindah ke role berikutnya secara asinkron
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 400);
    } else {
      // Kecepatan mengetik dan menghapus
      const speed = isDeleting ? 30 : 65;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFullRole.substring(0, displayText.length - 1)
            : currentFullRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -20;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto relative z-10 scroll-mt-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        
        {/* Sisi Kiri: Teks Tipografi Editorial & CTA (7 Kolom) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Label Editorial Sub-header */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase"
          >
            {t.hero.greeting}
          </motion.div>

          {/* Heading Nama Besar Berkarakter Tinggi */}
          <motion.h1
            initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] font-sans"
          >
            ALFIAN{" "}
            <span
              onMouseEnter={handleRobitHover}
              onMouseLeave={handleRobitLeave}
              className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent animate-antigravity-shimmer inline-block cursor-pointer select-none transition-transform hover:scale-105 font-black"
              title="Hover to glitch"
            >
              {robitText}
            </span>{" "}
            <br />
            NADIFI MASYHUDI
          </motion.h1>

          {/* Antigravity Dynamic Typewriter Line */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 min-h-[36px]"
          >
            <span className="text-lg sm:text-2xl font-bold font-mono text-cyan-400 tracking-tight">
              {displayText}
            </span>
            <span className="w-2.5 h-6 sm:h-7 bg-cyan-400 inline-block animate-antigravity-cursor align-middle shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          </motion.div>

          {/* Icon Sosial Media (Magnetik) */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 pt-1"
          >
            <MagneticButton>
              <a
                href="https://github.com/RobertDace"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all block shadow-md focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://instagram.com/alfrbtt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-all block shadow-md focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:outline-none"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Deskripsi Singkat */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-prose font-normal"
          >
            {t.hero.bio}
          </motion.p>

          {/* Tombol CTA (Magnetik + Smooth Jump) */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <MagneticButton onClick={() => scrollToSection("projects")}>
              <div className="px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 text-slate-950 flex items-center gap-2 shadow-lg shadow-cyan-950/40 hover:opacity-95 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none">
                <FolderGit2 className="w-4 h-4" />
                <span>{t.hero.viewProjects}</span>
              </div>
            </MagneticButton>

            <MagneticButton onClick={() => scrollToSection("contact")}>
              <div className="px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2 hover:border-slate-700 hover:text-cyan-400 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.contactMe}</span>
              </div>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Sisi Kanan: 3D Tilt Instagram-Style Photo Card (5 Kolom) */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm"
          >
            <TiltPhotoCard
              src="/Profile2.jpg"
              alt="2OB1T Profile Post"
              priority
              username="alfrbtt"
              location={t.hero.photoCard.location}
              caption={t.hero.photoCard.caption}
            />
          </motion.div>
        </div>

      </div>

      {/* Real-Time Telemetry & Availability Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 sm:mt-16 w-full"
      >
        <LiveStatus />
      </motion.div>
    </section>
  );
}
