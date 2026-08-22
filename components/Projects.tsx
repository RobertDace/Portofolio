"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Data Proyek Unggulan Terurut dari Build Terbaru (Jastip, Klasim, TK Cahaya Hati, SenKuni, dst.)
const projectsData = [
  {
    title: "JastipPro - Overseas Personal Shopper & Logistic Suite",
    description: "Sistem manajemen logistik dan pembelanjaan jastip luar negeri terpadu dengan multi-trip currency converter (JPY, KRW, SGD, USD), live in-store shopping checklist, kalkulator laba bersih, invoice generator WhatsApp instan, serta monitoring kuota bagasi koper.",
    image: "/projects/jastip.svg",
    liveLink: "https://jastip-beige.vercel.app/",
    githubLink: "https://github.com/RobertDace/jastip",
    tools: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Prisma & Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    ],
  },
  {
    title: "Klasim - Esports Telemetry & Scenario Modeler",
    description: "Simulator klasemen esports deterministik dan pemodel skenario probabilitas turnamen kompetitif (MPL ID, PMWC, VCT Pacific) dengan generator export instan PDF & Excel.",
    image: "/projects/klasim.svg",
    liveLink: "https://klasim.vercel.app",
    githubLink: "https://github.com/RobertDace/klasim",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "PostgreSQL & Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    title: "TK Cahaya Hati - Integrated Academic Portal",
    description: "Portal sistem informasi akademik sekolah terpadu multi-perangkat untuk TK Cahaya Hati yang mencakup manajemen kesiswaan, monitoring absensi, tagihan SPP, dan otentikasi peran terintegrasi.",
    image: "/projects/tk-cahaya-hati.svg",
    liveLink: "https://tk-cahaya-hati.vercel.app",
    githubLink: "https://github.com/RobertDace/Multi-Device-Web-For-School",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "PostgreSQL & Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    title: "SenKuni - AI Chess Analyzer",
    description: "Platform analisis posisi catur reaktif yang mengintegrasikan mesin catur Stockfish dengan asisten pelatih berbasis Gemini AI untuk memberikan evaluasi real-time serta panduan strategi bidak secara akurat.",
    image: "/projects/senkuni.jpg",
    liveLink: "https://senkuni.vercel.app",
    githubLink: "https://github.com/RobertDace/SenKuni",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Stockfish 16", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    ],
  },
  {
    title: "SheTI - Sakti HRD Automator",
    description: "Alat otomatisasi administrasi perkantoran dan HRD berbasis AI dengan fitur utama pengolah dokumen cerdas, Smart OCR untuk konversi kuitansi ke tabel otomatis, serta generator surat dinas instan.",
    image: "/projects/sheti.jpg",
    liveLink: "https://she-ti.vercel.app",
    githubLink: "https://github.com/RobertDace/SheTI",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Gemini AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
    ],
  },
  {
    title: "SemarMaca - E-Catalog FH UWGM",
    description: "Platform smart e-catalog dan repositori hukum digital untuk FH UWGM yang dilengkapi dengan fitur AI legal assistant, sistem audit plagiarisme, pemetaan perpustakaan interaktif, dan QR ticketing.",
    image: "/projects/semarmaca.jpg",
    liveLink: "https://semar-maca.vercel.app",
    githubLink: "https://github.com/RobertDace/SemarMaca",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    title: "Snacky - Interactive Lo-Fi Audio & Creative Room",
    description: "Ruang santai virtual dan pemutar audio lo-fi interaktif dengan rak vinyl berputar, kartu gacha kelinci koleksi, ambient soundscape generator, dan instrumen pad kreatif.",
    image: "/projects/snacky.svg",
    liveLink: "https://snacky-pi.vercel.app",
    githubLink: "https://github.com/RobertDace/snacky",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Web Audio API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    ],
  },
  {
    title: "My Orbit - Cosmic Memory Journey & Romantic Deck",
    description: "Pengalaman web interaktif bertema kosmik dan perjalanan memori personal dengan latar bintang live, modul countdown real-time, dek kartu interaktif, dan pemutar musik terintegrasi.",
    image: "/projects/my-orbit.svg",
    liveLink: "https://myorbit-omega.vercel.app",
    githubLink: "https://github.com/RobertDace/The-Unmapped-Orbit",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    ],
  },
];

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrollingRef = useRef(false);

  // Lock body scroll & listen to Escape key when drawer is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  // Kalkulasi index kartu aktif secara presisi berdasarkan posisi scrollLeft container
  const updateActiveCardIndex = useCallback(() => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const cards = container.querySelectorAll<HTMLElement>(".carousel-card");
    if (!cards.length) return;

    let closestIdx = 0;
    let minDiff = Infinity;

    cards.forEach((card, idx) => {
      const diff = Math.abs(card.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
    isScrollingRef.current = false;
  }, []);

  const handleScroll = () => {
    if (!isScrollingRef.current) {
      isScrollingRef.current = true;
      requestAnimationFrame(updateActiveCardIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll<HTMLElement>(".carousel-card");
      if (cards[index]) {
        carouselRef.current.scrollTo({
          left: cards[index].offsetLeft,
          behavior: "smooth",
        });
        setActiveIndex(index);
      }
    }
  };

  const scrollPrev = () => {
    const targetIdx = Math.max(activeIndex - 1, 0);
    scrollToIndex(targetIdx);
  };

  const scrollNext = () => {
    const targetIdx = Math.min(activeIndex + 1, projectsData.length - 1);
    scrollToIndex(targetIdx);
  };

  return (
    <section
      id="projects"
      className="py-24 bg-transparent text-white relative z-10 scroll-mt-20"
    >
      {/* HEADER CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase block mb-1">
              Selected Works ({projectsData.length})
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent animate-antigravity-shimmer inline-block">
                Works.
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              Kumpulan aplikasi berbasis Artificial Intelligence (AI) dan arsitektur web modern yang dirancang untuk otomatisasi dan efisiensi sistem.
            </p>
          </div>

          {/* Tombol Panah Navigasi Carousel */}
          <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
            <button
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 backdrop-blur-md active:scale-95 shadow-lg cursor-pointer ${
                activeIndex === 0
                  ? "border-slate-800/50 bg-slate-900/30 text-slate-600 cursor-not-allowed opacity-50"
                  : "border-slate-700/80 bg-slate-900/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800"
              }`}
              aria-label="Previous Project"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              disabled={activeIndex === projectsData.length - 1}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 backdrop-blur-md active:scale-95 shadow-lg cursor-pointer ${
                activeIndex === projectsData.length - 1
                  ? "border-slate-800/50 bg-slate-900/30 text-slate-600 cursor-not-allowed opacity-50"
                  : "border-slate-700/80 bg-slate-900/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800"
              }`}
              aria-label="Next Project"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* CAROUSEL TRACK (LEPAS PEMBATAS KOTAK, SMOOTH CUSTOM SCROLLBAR) */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="custom-cyber-scrollbar flex gap-6 overflow-x-auto pt-2 pb-6 px-1 snap-x snap-mandatory"
          style={{ scrollPaddingLeft: "0.5rem", scrollPaddingRight: "2rem" }}
        >
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="carousel-card snap-start w-[85vw] sm:w-[380px] lg:w-[420px] flex-shrink-0 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/50 rounded-[28px] p-4 flex flex-col justify-between shadow-xl cursor-pointer transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.08)] group backdrop-blur-sm"
            >
              {/* Gambar Preview 16:9 */}
              <div className="space-y-4">
                <div className="w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-slate-950 relative border border-slate-800/70">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized={project.image.endsWith(".svg")}
                    sizes="(max-width: 640px) 85vw, 420px"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Deskripsi Teks */}
                <div className="px-1 space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Barisan Kapsul Tools INTERAKTIF (Luar Card) */}
              <div className="flex flex-wrap gap-1.5 pt-4 px-1 border-t border-slate-800/50 mt-4">
                {project.tools.map((tool, tIdx) => (
                  <div
                    key={tIdx}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/70 border border-slate-700/50 text-[10px] sm:text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 shadow-sm cursor-pointer transition-all duration-200 hover:scale-105"
                  >
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={14}
                      height={14}
                      unoptimized
                      className="w-3.5 h-3.5 object-contain"
                    />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots (Disesuaikan per Card, Dinamis 7 Dots) */}
        <div className="flex items-center justify-center gap-2 pt-6">
          {projectsData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToIndex(dotIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === dotIdx
                  ? "w-10 bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                  : "w-2.5 bg-slate-800 hover:bg-slate-600 hover:w-4"
              }`}
              aria-label={`Go to project ${dotIdx + 1}`}
            />
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99] pointer-events-auto cursor-pointer"
            />

            {/* Panel Samping Meluncur dari Kanan */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed right-0 top-0 bottom-0 h-full w-full sm:w-[520px] bg-[#0b0f19] border-l border-slate-800/90 z-[100] shadow-2xl flex flex-col justify-between pointer-events-auto font-sans"
              role="dialog"
              aria-modal="true"
              aria-labelledby="drawer-title"
            >
              {/* Bagian Konten (Scrollable) */}
              <div className="overflow-y-auto no-scrollbar flex-1 relative">
                
                {/* Tombol Close Silang X */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all shadow-md cursor-pointer"
                  aria-label="Close details"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Banner Gambar Besar */}
                <div className="w-full aspect-[16/10] bg-slate-950 relative border-b border-slate-800/60">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    unoptimized={selectedProject.image.endsWith(".svg")}
                    sizes="(max-width: 640px) 100vw, 520px"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Deskripsi Data Teks */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 id="drawer-title" className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Bagian Label Teknologi */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
                      Technologies &amp; Core Stack
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedProject.tools.map((tool, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 hover:border-cyan-400/40 shadow-md cursor-pointer transition-all duration-200"
                        >
                          <Image
                            src={tool.logo}
                            alt={tool.name}
                            width={16}
                            height={16}
                            unoptimized
                            className="w-4 h-4 object-contain"
                          />
                          <span>{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Bagian Footer Tombol Aksi */}
              <div className="p-5 sm:p-6 bg-slate-900/70 backdrop-blur-md border-t border-slate-800/80 flex items-center gap-3">
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
                  aria-label="View Source on GitHub"
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
