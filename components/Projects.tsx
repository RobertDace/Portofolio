"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  const projectList = [
    {
      id: "semarmaca",
      title: "SemarMaca — Smart E-Catalog Hukum",
      subtitle: "FH UWGM Samarinda",
      description: "Smart E-Catalog & Repositori Pustaka Hukum Digital. Dilengkapi Hub IKN & Hukum Kaltim, Denah Rak 2D, AI Plagiarism Audit, serta SemarAI Legal Assistant.",
      tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Gemini API"],
      link: "https://semarmaca.vercel.app",
    },
    {
      id: "sheti",
      title: "SheTI — Sakti Workspace (AI Automator)",
      subtitle: "2OB1T Workspace",
      description: "Platform otomatisasi administrasi perkantoran & HRD berbasis Next.js 16 dan Gemini API. Fitur Smart OCR kuitansi ke tabel, generator surat dinas A4, dan ekspor Word (.doc).",
      tags: ["Next.js 16", "TypeScript", "Gemini API", "OCR", "Tailwind CSS"],
      link: "https://sheti-workspace.vercel.app",
    },
    {
      id: "senkuni",
      title: "SenKuni — AI Chess Position Analyzer",
      subtitle: "Stockfish + Gemini AI",
      description: "Platform analisis posisi catur reaktif. Mengintegrasikan Stockfish 10 lokal & Gemini AI Coach untuk kalkulasi taktik real-time, evaluasi FEN, serta panduan naratif.",
      tags: ["Next.js", "TypeScript", "Stockfish AI", "Gemini API", "Chess.js"],
      link: "https://senkuni.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-10 relative z-10">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <FolderGit2 className="w-3.5 h-3.5" />
          Featured AI Applications
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Proyek{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Unggulan
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Eksplorasi ekosistem aplikasi web reaktif dan integrasi kecerdasan buatan buatan **2OB1T**.
        </p>
      </div>

      {/* Grid Proyek (3 Produk Utama) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectList.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/30 hover:border-cyan-400/70 shadow-xl backdrop-blur-md transition-all duration-300 overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-emerald-400 to-purple-500" />

            <div>
              {/* Header Card */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono font-medium text-cyan-400 uppercase tracking-wider">
                  {project.subtitle}
                </span>

                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Demo
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors duration-200 mb-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-[10px] px-2.5 py-1 font-mono font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
              >
                Kunjungi Website
                <ExternalLink className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}