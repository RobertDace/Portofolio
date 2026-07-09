"use client";

import { motion } from "framer-motion";
import { FolderGit2, Mail, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-28 pb-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Sisi Kiri: Informasi Utama (7 Kolom) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
              HALO, SAYA
            </span>
          </motion.div>

          {/* Nama Utama */}
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="text-4xl sm:text-6xl font-black tracking-tight text-slate-100"
>
  ALFIAN{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
    ROBIT
  </span>{" "}
  <br />
  NADIFI MASYHUDI
</motion.h1>

          {/* Sub-Judul Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold text-cyan-400"
          >
            Full-Stack Developer & AI Integrator
          </motion.h2>

          {/* Icon Sosial Media (Magnetik) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-3 pt-1"
          >
            <MagneticButton>
              <a
                href="https://github.com/RobertDace"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors block"
              >
                <GithubIcon />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://instagram.com/alfrbtt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors block"
              >
                <InstagramIcon />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Deskripsi Singkat */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg"
          >
            Membangun aplikasi web reaktif yang fungsional, interaktif, dan berpusat pada pengalaman pengguna serta integrasi kecerdasan buatan cerdas.
          </motion.p>

          {/* Tombol CTA (Magnetik + Shake) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <MagneticButton onClick={() => scrollToSection("projects")}>
              <div className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 text-slate-950 flex items-center gap-2 shadow-lg shadow-cyan-950/40 hover:opacity-95 transition-opacity">
                <FolderGit2 className="w-4 h-4" />
                <span>Lihat Proyek</span>
              </div>
            </MagneticButton>

            <MagneticButton onClick={() => scrollToSection("contact")}>
              <div className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2 hover:border-slate-700 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Hubungi Saya</span>
              </div>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Sisi Kanan: Kartu Profil & Overlay Glassmorphism (5 Kolom) */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group w-full max-w-sm"
          >
            {/* Ambient Cyan/Purple Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />

            {/* Frame Kartu Foto Utama */}
<div className="relative rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl p-3">
  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
    
    {/* Foto Profil Utama Hero Section */}
    <img
      src="Profile2.jpg"
      alt="2OB1T Hero Profile"
      className="w-full h-full object-cover rounded-2xl"
    />

    {/* Gradient Overlay Bawah agar Teks Status Badge Tetap Terbaca Clear */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
  </div>

  {/* Glassmorphism Badge Overlay (Status Online) */}
  <div className="absolute bottom-6 inset-x-6 z-20 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md flex items-center justify-between">
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </div>
      <div>
        <h5 className="text-xs font-bold text-slate-100">@alfrbtt</h5>
        <p className="text-[10px] font-mono text-emerald-400">Online & Available</p>
      </div>
    </div>

    <MagneticButton onClick={() => scrollToSection("contact")}>
      <div className="px-3 py-1.5 rounded-xl text-[11px] font-bold bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-1 hover:text-cyan-400 transition-colors">
        <span>Contact Me</span>
        <ArrowUpRight className="w-3 h-3" />
      </div>
    </MagneticButton>
  </div>
</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}