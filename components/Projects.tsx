"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"ALL" | "AI_WEB" | "SYSTEM_DESIGN">("ALL");

  const categories = [
    { id: "ALL", label: "Semua Proyek" },
    { id: "AI_WEB", label: "AI & Web Apps" },
    { id: "SYSTEM_DESIGN", label: "System & Visual Design" },
  ];

  const projectList = [
    {
      id: "semarmaca",
      category: "AI_WEB",
      title: "SemarMaca — Smart E-Catalog Hukum",
      subtitle: "FH UWGM Samarinda",
      description: "Smart E-Catalog & Repositori Pustaka Hukum Digital. Dilengkapi Hub IKN & Hukum Kaltim, Denah Rak 2D, AI Plagiarism Audit, serta SemarAI Legal Assistant.",
      tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Gemini API"],
      link: "https://semarmaca.vercel.app",
      isPrivate: false,
      featured: true,
    },
    {
      id: "sheti",
      category: "AI_WEB",
      title: "SheTI — Sakti Workspace (AI Automator)",
      subtitle: "2OB1T Workspace",
      description: "Platform otomatisasi administrasi perkantoran & HRD berbasis Next.js 16 dan Gemini API. Fitur Smart OCR kuitansi ke tabel, generator surat dinas A4, dan ekspor Word (.doc).",
      tags: ["Next.js 16", "TypeScript", "Gemini API", "OCR", "Tailwind CSS"],
      link: "https://sheti-workspace.vercel.app",
      isPrivate: false,
      featured: true,
    },
    {
      id: "senkuni",
      category: "AI_WEB",
      title: "SenKuni — AI Chess Position Analyzer",
      subtitle: "Stockfish + Gemini AI",
      description: "Platform analisis posisi catur reaktif. Mengintegrasikan Stockfish 10 lokal & Gemini AI Coach untuk kalkulasi taktik real-time, evaluasi FEN, serta panduan naratif.",
      tags: ["Next.js", "TypeScript", "Stockfish AI", "Gemini API", "Chess.js"],
      link: "https://senkuni.vercel.app",
      isPrivate: false,
      featured: true,
    },
    {
      id: "it-support",
      category: "SYSTEM_DESIGN",
      title: "IT Support & Administration System",
      subtitle: "Internal Infrastructure",
      description: "Mengoptimalkan infrastruktur jaringan lokal, merawat hardware/software, serta mendigitalisasi manajemen dokumen internal perusahaan untuk efisiensi tim.",
      tags: ["IT Support", "Network Management", "Sistem Administrasi"],
      link: "#",
      isPrivate: true,
      featured: false,
    },
    {
      id: "visual-design",
      category: "SYSTEM_DESIGN",
      title: "Digital Content Creation & Visual Design",
      subtitle: "Creative Production",
      description: "Memproduksi aset visual kreatif dan editing video profesional berskala tinggi menggunakan kombinasi Adobe Photoshop, Premiere Pro, Alight Motion, dan CapCut.",
      tags: ["Photoshop", "Premiere Pro", "Alight Motion", "CapCut"],
      link: "#",
      isPrivate: true,
      featured: false,
    },
    {
      id: "fullstack-supabase",
      category: "SYSTEM_DESIGN",
      title: "Fullstack Web App with Supabase Integration",
      subtitle: "Cloud Architecture",
      description: "Membangun aplikasi web reaktif dan modern berbasis Next.js yang terintegrasi dengan Cloud Backend-as-a-Service menggunakan arsitektur database Supabase.",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      link: "#",
      isPrivate: true,
      featured: false,
    },
  ];

  // Filter logika
  const filteredProjects = activeTab === "ALL" 
    ? projectList 
    : projectList.filter((p) => p.category === activeTab);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-10">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-10">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Selected Works & Systems
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Eksplorasi ekosistem aplikasi web reaktif, integrasi kecerdasan buatan, dan manajemen sistem buatan 2OB1T.
        </p>
      </div>

      {/* Filter Category Tabs (Gaya Referensi TikTok / Bento) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id as typeof activeTab)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 relative select-none ${
              activeTab === cat.id
                ? "text-slate-900 shadow-lg shadow-cyan-500/20"
                : "text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800/80 hover:border-slate-700"
            }`}
          >
            {activeTab === cat.id && (
              <motion.div
                layoutId="activeTabBadge"
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Grid Proyek (Animated Layout) */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative flex flex-col justify-between p-6 rounded-2xl backdrop-blur-md transition-all duration-300 overflow-hidden ${
                project.featured
                  ? "bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/30 hover:border-cyan-400/60 shadow-xl shadow-cyan-950/20"
                  : "bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/60 hover:bg-slate-900/60"
              }`}
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${
                  project.featured
                    ? "from-cyan-500 via-emerald-400 to-blue-500"
                    : "from-transparent via-slate-700 to-transparent"
                }`}
              />

              <div>
                {/* Header Card: Subtitle & Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium text-cyan-400/90 uppercase tracking-wider">
                    {project.subtitle}
                  </span>

                  {!project.isPrivate ? (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Demo
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium text-slate-400 bg-slate-800/60 border border-slate-700/50">
                      <svg
                        className="w-3 h-3 text-slate-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Private
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors duration-200 mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[11px] px-2.5 py-1 font-mono font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50 rounded-lg select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Link */}
                {!project.isPrivate ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    Kunjungi Website
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-xs font-medium text-slate-500 cursor-not-allowed select-none">
                    Akses Dibatasi (Internal)
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}