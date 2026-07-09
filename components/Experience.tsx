"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Code2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Administrative & IT Staff",
      company: "PT. Noreen Surya Perdana",
      period: "2025 — 2026",
      location: "Samarinda, East Kalimantan",
      bullets: [
        "Mengelola & mengoptimalkan infrastruktur jaringan lokal, sistem administrasi internal, serta pemeliharaan hardware/software kantor.",
        "Mendigitalisasi alur pendaftaran, rekruitmen, serta manajemen dokumen perusahaan agar operasional lebih efisien.",
        "Merawat keamanan data digital & memberikan dukungan IT support reaktif secara berkala.",
        "Mengintegrasikan otomatisasi dokumen kerja berbasis tools digital modern.",
      ],
      skills: ["IT Support", "Network Management", "System Admin", "Data Security", "Digital Operations"],
    },
    {
      role: "Digital Content Creator & Visual Editor",
      company: "CEES GANK",
      period: "2024 — Sekarang",
      location: "Remote",
      bullets: [
        "Memproduksi aset visual kreatif berskala tinggi untuk kebutuhan branding, promosi digital, dan media sosial.",
        "Melakukan editing video profesional, motion graphic, dan visual effect menggunakan ekosistem software kreatif.",
        "Mengelola desain identitas visual dan materi promosi untuk komunitas digital & e-sports.",
        "Menggabungkan estetika modern dengan strategi visual engagement yang relevan bagi audiens.",
      ],
      skills: ["Adobe Photoshop", "Premiere Pro", "Alight Motion", "CapCut Pro", "Visual Design"],
    },
    {
      role: "Fullstack Web & System Engineer",
      company: "Independent Projects & Freelance",
      period: "2023 — Sekarang",
      location: "Remote",
      bullets: [
        "Merancang dan mengembangkan aplikasi web reaktif full-stack berbasis Next.js dan Supabase.",
        "Mengintegrasikan API AI canggih (Gemini AI API) untuk otomatisasi analisis dokumen & asisten cerdas.",
        "Membangun arsitektur frontend modular, terstruktur, serta berorientasi pada kecepatan dan kestabilan.",
        "Menerapkan praktik clean code, manajemen state reaktif, dan integrasi backend cloud.",
      ],
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini AI API", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-10 relative z-10">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Briefcase className="w-3.5 h-3.5" />
          Career Journey
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Pengalaman{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Kerja
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Rekam jejak profesional dalam bidang IT Support, Administrasi Digital, Content Creation, dan Software Engineering.
        </p>
      </div>

      {/* Experience Cards List */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800/80 rounded-3xl backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
          >
            {/* Top Cyan Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-emerald-400 to-transparent" />

            {/* Header Card: Role, Company & Time Location */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400">{exp.company}</p>
                </div>
              </div>

              {/* Badges Waktu & Lokasi */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Bullets Poin Deskripsi (Layout 2 Kolom) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {exp.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Bottom Section: Teknologi & Skills Yang Digunakan */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2 mb-3 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Teknologi / Skills Utama:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-mono font-medium bg-slate-800/90 text-slate-300 border border-slate-700/50 rounded-xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}