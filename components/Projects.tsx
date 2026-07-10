"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Data Proyek Unggulan AI dengan Link Demo & GitHub
const projectsData = [
  {
    title: "SheTI - Sakti HRD Automator",
    description: "Alat otomatisasi administrasi perkantoran dan HRD berbasis AI dengan fitur utama pengolah dokumen cerdas, Smart OCR untuk konversi kuitansi ke tabel otomatis, serta generator surat dinas instan.",
    image: "https://scontent-cgk2-1.xx.fbcdn.net/v/t39.30808-6/744820686_1695840611628333_3540360474667445548_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s1920x1080&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEM0eqmvBQyhXudme40nmkEcKc27Eggql9wpzbsSCCqX4IJQvvmrV9n6y6bGpStjVLlxcqJOgNwk0sgMXBfCTKl&_nc_ohc=ngfPQRGE7CMQ7kNvwGEt2nm&_nc_oc=AdqNuXfUJGuOgETXHWRQ3IIIm4U6-s1uon7nEG0QwbpySm8tUPzoQbDmFnWKThN_HcI&_nc_zt=23&_nc_ht=scontent-cgk2-1.xx&_nc_gid=E7zt3aTrZVoFMregBwKKXw&_nc_ss=7b2a8&oh=00_AQBygtW3w8vAgDFD3THmWEHedpeUqc3ae-EOJWKIPEVt_Q&oe=6A568209",
    liveLink: "https://she-ti.vercel.app",
    githubLink: "https://github.com/RobertDace/SheTI",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "SenKuni - AI Chess Analyzer",
    description: "Platform analisis posisi catur reaktif yang mengintegrasikan mesin catur Stockfish dengan asisten pelatih berbasis Gemini AI untuk memberikan evaluasi real-time serta panduan strategi bidak secara akurat.",
    image: "https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/742771010_1695840608295000_8862578769119856120_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s1920x1080&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFxkVo4dI48X07pj9AaeVzVfWpk7ji6fOR9amTuOLp85MEL6mMFfReed0YEgprLbC0bKqXYpF2O11DC9rMEXx87&_nc_ohc=syqeYVgfd-kQ7kNvwGDCxpn&_nc_oc=AdrAqajN0U66_It-NAAdg55oVsMnhjixG9MxO02RENytaMqh6RuC1ILBt_jKLRV9YjI&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=BjHQiPCt2WwRrrtQPtzoqg&_nc_ss=7b2a8&oh=00_AQC-1ZpnJqTMujuaBYsmtnEcHKTBjWQUhE8EnfqQqs0OXg&oe=6A568253",
    liveLink: "https://senkuni.vercel.app",
    githubLink: "https://github.com/RobertDace/SenKuni",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "SemarMaca - E-Catalog FH UWGM",
    description: "Platform smart e-catalog dan repositori hukum digital untuk FH UWGM yang dilengkapi dengan fitur AI legal assistant, sistem audit plagiarisme, pemetaan perpustakaan interaktif, dan QR ticketing.",
    image: "https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/742173119_1695840631628331_2677264832410221602_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s1920x1080&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEaOhSFrxWyp8jI6ACgKMQwwAfAHJrWPW3AB8AcmtY9bXJeT7jcvA0DqWaLWuMot801hvms1JOOqaOoKTUoEIMf&_nc_ohc=Au7gNbH1sZsQ7kNvwG2UW8F&_nc_oc=AdqGJoFW8T_dh0atxM4EguSG_ql9ms5JxORqT728vb3a2jZTp9q0zv-RzZIGOU8a8IM&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=Mhd8KRImts1a50Fij7KjVQ&_nc_ss=7b2a8&oh=00_AQC9W9ff8yqQc3m9pns8oWIIcvPkTfkJDpr9RyvZGbDVrQ&oe=6A5673C8",
    liveLink: "https://semar-maca.vercel.app",
    githubLink: "https://github.com/RobertDace/SemarMaca",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    ],
  },
];

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -384, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 384, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-[#0b0f19] text-white select-none relative scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="space-y-1.5">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Works.
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              Kumpulan aplikasi berbasis Artificial Intelligence (AI) inovatif yang dirancang untuk otomatisasi, analisis cerdas, dan efisiensi sistem modern.
            </p>
          </div>

          {/* Tombol Panah Navigasi */}
          <div className="flex gap-2.5 self-end md:self-auto flex-shrink-0">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-slate-800/80 flex items-center justify-center bg-slate-900/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm active:scale-95 shadow-md"
              aria-label="Previous Slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-slate-800/80 flex items-center justify-center bg-slate-900/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm active:scale-95 shadow-md"
              aria-label="Next Slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CAROUSEL TRACK */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pt-4 pb-6 px-4 snap-x snap-mandatory 
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="snap-start w-[85vw] sm:w-[360px] flex-shrink-0 bg-slate-900/40 border border-slate-800/70 hover:border-cyan-500/40 rounded-[24px] p-3.5 flex flex-col justify-between shadow-lg cursor-pointer transition-colors duration-300 group hover:shadow-[0_15px_30px_rgba(6,182,212,0.04)]"
            >
              {/* Gambar Preview 16:9 */}
              <div className="space-y-4">
                <div className="w-full aspect-video rounded-[16px] overflow-hidden bg-slate-950/80 relative border border-slate-800/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Deskripsi Teks */}
                <div className="px-1 space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Barisan Kapsul Tools INTERAKTIF (Luar Card) */}
              <div className="flex flex-wrap gap-1.5 pt-4 px-1">
                {project.tools.map((tool, tIdx) => (
                  <motion.div
                    key={tIdx}
                    onClick={(e) => e.stopPropagation()} // Mencegah drawer terbuka saat klik logo saja
                    whileHover={{ scale: 1.06, backgroundColor: "rgba(6, 182, 212, 0.15)", borderColor: "rgba(6, 182, 212, 0.5)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/60 border border-slate-700/50 text-[10px] sm:text-xs font-semibold text-slate-300 hover:text-cyan-400 shadow-sm cursor-pointer transition-colors duration-200"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-3.5 h-3.5 object-contain"
                    />
                    <span>{tool.name}</span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* JENDELA DRAWER SAMPING DETAIL PROYEK */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop Gelap Belakang */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] pointer-events-auto cursor-pointer"
            />

            {/* Panel Samping Meluncur dari Kanan */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed right-0 top-0 bottom-0 h-full w-full sm:w-[500px] bg-[#0b0f19] border-l border-slate-800/90 z-[100] shadow-2xl flex flex-col justify-between pointer-events-auto font-sans"
            >
              {/* Bagian Konten (Scrollable) */}
              <div className="overflow-y-auto no-scrollbar flex-1 relative">
                
                {/* Tombol Close Silang X */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all shadow-md"
                  aria-label="Close details"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Banner Gambar Besar */}
                <div className="w-full aspect-[16/10] bg-slate-950 relative border-b border-slate-800/60">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Deskripsi Data Teks */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Bagian Label Teknologi INTERAKTIF (Sesuai image_193a3f.png) */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase flex items-center gap-2">
                      <span>{"</>"}</span> TECHNOLOGIES USED
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedProject.tools.map((tool, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.06, backgroundColor: "rgba(6, 182, 212, 0.15)", borderColor: "rgba(6, 182, 212, 0.5)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 shadow-md cursor-pointer transition-colors duration-200"
                        >
                          <img src={tool.logo} alt={tool.name} className="w-4 h-4 object-contain" />
                          <span>{tool.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Bagian Footer Tombol Aksi */}
              <div className="p-5 sm:p-6 bg-slate-900/60 backdrop-blur-md border-t border-slate-800/80 flex items-center gap-3">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(6,182,212,0.3)] transition-all transform active:scale-[0.98]"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>View Live Project</span>
                </a>

                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-all shadow-md flex-shrink-0 active:scale-95"
                  title="View Source on GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.008.069-.008 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}