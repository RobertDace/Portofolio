"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-10 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Sisi Kiri: Frame Foto dengan Smooth Zoom-In Hover Effect */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group w-full max-w-md cursor-pointer"
          >
            {/* Soft Ambient Glow Frame */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-emerald-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
            
            {/* Wrapper Utama Kartu Foto */}
            <div className="relative rounded-[2rem] bg-slate-900 border border-slate-800/80 overflow-hidden shadow-2xl p-3">
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-950 flex items-center justify-center">
                
                {/* Gambar Profil dengan Animasi Zoom On Hover */}
                <motion.img
                  src="/profile.jpg" // Ganti file ini dengan foto kamu di folder public/profile.jpg
                  alt="2OB1T Profile"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full object-cover rounded-[1.5rem] transition-all duration-500"
                  onError={(e) => {
                    // Fallback visual jika file foto belum dimasukkan
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Visual Placeholder (Tampil jika foto belum dipasang) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none">
                  <div className="w-28 h-28 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-3xl font-black mb-3">
                    2O
                  </div>
                  <span className="text-xs font-mono text-slate-400">Hover area ini untuk efek zoom</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sisi Kanan: Teks & Detail Bio */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header Badges */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-2xl sm:text-4xl font-extrabold text-slate-100">
              <span>SAYA</span>
              <span className="px-3.5 py-1 bg-cyan-400 text-slate-950 rounded-2xl font-black shadow-lg shadow-cyan-400/20">
                2OB1T
              </span>
            </div>

            <div className="w-fit">
              <span className="px-4 py-1.5 bg-emerald-500 text-slate-950 rounded-2xl font-extrabold text-lg sm:text-2xl tracking-wide inline-block shadow-lg shadow-emerald-500/20">
                FULLSTACK & AI DEVELOPER
              </span>
            </div>
          </div>

          {/* Text Box dengan Left Border Accent */}
          <div className="border-l-4 border-cyan-400 pl-5 space-y-4 py-1">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sebagai Full-Stack Developer dan AI Integrator, saya berfokus mengubah kebutuhan sistem dan alur kerja yang kompleks menjadi aplikasi web yang efisien, reaktif, dan modern.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Dari digitalisasi administrasi operasional, integrasi kecerdasan buatan, hingga perancangan arsitektur frontend reaktif, saya menikmati proses membangun solusi digital skala tinggi dari nol yang terukur dan memberikan dampak nyata.
            </p>
          </div>

          {/* Unduh CV (Magnetic Button) */}
          <div className="pt-2">
            <MagneticButton>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-slate-900 border border-slate-700 text-slate-100 hover:border-cyan-400 hover:text-cyan-300 flex items-center gap-2.5 shadow-xl transition-colors group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>UNDUH CV</span>
              </a>
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
}