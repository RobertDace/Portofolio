"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TiltPhotoCard from "./TiltPhotoCard";

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

const roles = [
  "Full-Stack Web Developer",
  "AI Systems & Model Integrator",
  "Deterministic Scenario Modeler",
  "Interactive Experience Crafter",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Cyber Glitch Scramble Text on ROBIT hover (same font family, identical height & baseline)
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

  // Antigravity Typewriter Text Loop Effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-28 pb-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Sisi Kiri: Informasi Utama (7 Kolom) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Label Pembuka "Hi, Saya" */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm sm:text-base font-mono font-semibold tracking-widest text-cyan-400 uppercase block">
              Hi, Saya
            </span>
          </motion.div>

          {/* Nama Utama: Font & Ukuran 100% Selaras & Sejajar */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-100 leading-[1.08]"
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
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all block shadow-md"
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
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-all block shadow-md"
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
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg"
          >
            Membangun aplikasi web reaktif yang presisi, interaktif, dan berpusat pada pengalaman pengguna modern serta integrasi sistem kecerdasan buatan cerdas.
          </motion.p>

          {/* Tombol CTA (Magnetik + Smooth Jump) */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <MagneticButton onClick={() => scrollToSection("projects")}>
              <div className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 text-slate-950 flex items-center gap-2 shadow-lg shadow-cyan-950/40 hover:opacity-95 transition-all">
                <FolderGit2 className="w-4 h-4" />
                <span>Lihat Proyek</span>
              </div>
            </MagneticButton>

            <MagneticButton onClick={() => scrollToSection("contact")}>
              <div className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2 hover:border-slate-700 hover:text-cyan-400 transition-all">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Hubungi Saya</span>
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
              location="Samarinda, East Kalimantan"
              caption="Full-Stack Developer & AI Systems Engineer. Building future-proof digital tools."
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
