"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden pt-20">
      {/* Efek Cahaya Latar Belakang (Glow Effect) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Konten Utama */}
      <div className="z-10 max-w-3xl space-y-6">
        {/* Badge Sapaan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 text-xs md:text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Available for Projects & Full-time Roles
        </motion.div>

        {/* Judul Utama dengan Animasi */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-100"
        >
          Hi, Saya{" "}
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Robit
          </span>
        </motion.h1>

        {/* Subtitle / Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Seorang Junior Web Developer yang hobi meracik kode web modern, mengulik visual digital, dan membangun pengalaman digital yang reaktif serta interaktif.
        </motion.p>

        {/* Tombol Aksi Reaktif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {/* Tombol Utama */}
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(52, 211, 153, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-950 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full shadow-lg font-semibold"
          >
            Lihat Project Saya
            {/* Native SVG ArrowRight */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.a>

          {/* Tombol Sekunder (Membuka Google Drive CV) */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1_nxG0NW8VHmwFDwsLMWEVERtDNi7ZAC9/view?usp=drive_link" // <-- Ganti pakai link share GDrive kamu
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-800 rounded-full backdrop-blur-sm transition-colors hover:border-slate-700"
          >
            {/* Native SVG FileText */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            Lihat CV
          </motion.a>
        </motion.div>

        {/* Jejaring Sosial Cepat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-6 pt-8 text-slate-500"
        >
          {/* Native SVG GitHub */}
          <a 
            href="https://github.com/RobertDace" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-emerald-400 transition-colors" 
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* Native SVG Instagram */}
          <a 
            href="https://instagram.com/username_kamu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-emerald-400 transition-colors" 
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}