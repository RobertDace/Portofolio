"use client";

import { motion, Variants } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "SheTI — Sakti Workspace (AI Automator)",
      description: "Platform otomatisasi administrasi perkantoran & HRD berbasis Next.js 16 dan Gemini API. Dilengkapi fitur Smart OCR kuitansi ke tabel, generator surat dinas A4, dan ekspor Word (.doc) instan.",
      tags: ["Next.js 16", "TypeScript", "Gemini API", "OCR", "Tailwind CSS"],
      link: "https://she-ti.vercel.app/", // Ganti dengan URL Vercel SheTI milikmu jika beda
    },
    {
      title: "IT Support & Administration System",
      description: "Mengoptimalkan infrastruktur jaringan lokal, merawat hardware/software, serta mendigitalisasi manajemen dokumen internal perusahaan untuk efisiensi operasional tim.",
      tags: ["IT Support", "Network Management", "Sistem Administrasi"],
      link: "#",
    },
    {
      title: "Digital Content Creation & Visual Design",
      description: "Memproduksi aset visual kreatif dan editing video profesional berskala tinggi menggunakan kombinasi Adobe Photoshop, Premiere Pro, Alight Motion, dan CapCut.",
      tags: ["Photoshop", "Premiere Pro", "Alight Motion", "CapCut"],
      link: "#",
    },
    {
      title: "Fullstack Web App with Supabase Integration",
      description: "Membangun aplikasi web reaktif dan modern berbasis Next.js yang terintegrasi dengan Cloud Backend-as-a-Service menggunakan arsitektur database Supabase.",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      link: "#",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-10">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Beberapa karya, sistem, dan proyek yang pernah saya bangun dan kembangkan belakangan ini.
        </p>
      </div>

      {/* Grid Proyek (Disetting 2 Kolom untuk 4 Kartu) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative flex flex-col justify-between p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm transition-colors hover:border-slate-700/60 hover:bg-slate-900/60 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-emerald-500/40 to-blue-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            <div>
              <h3 className="text-xl font-bold text-slate-200 group-hover:text-emerald-400 transition-colors duration-200 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Kumpulan Badge / Tag Teknologi */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIdx) => (
                  <motion.span
                    key={tagIdx}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      backgroundColor: "rgba(52, 211, 153, 0.1)",
                      borderColor: "rgba(52, 211, 153, 0.4)",
                      color: "#34d399"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    className="text-xs px-2.5 py-1 font-medium bg-slate-800/60 text-slate-300 border border-slate-700/40 rounded-md cursor-default select-none transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Tautan Proyek */}
              <a
                href={project.link}
                target={project.link !== "#" ? "_blank" : "_self"}
                rel={project.link !== "#" ? "noopener noreferrer" : ""}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors group/link"
              >
                Selengkapnya
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
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}