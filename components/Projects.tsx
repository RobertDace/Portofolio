/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Smartphone, 
  Layers, 
  ExternalLink, 
  RotateCw, 
  Lock, 
  X, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Eye 
} from "lucide-react";

// Safe client-side mount hook for React 19 & Next.js 16
const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

// Data Proyek Unggulan Terurut dari Build Terbaru
const projectsData = [
  {
    index: "01",
    category: "LOGISTICS & MULTI-CURRENCY",
    title: "JastipPro – Overseas Personal Shopper & Logistic Suite",
    description: "Sistem manajemen logistik dan pembelanjaan jastip luar negeri terpadu dengan multi-trip currency converter (JPY, KRW, SGD, USD), live in-store shopping checklist, kalkulator laba bersih, invoice generator WhatsApp instan, serta monitoring kuota bagasi koper.",
    image: "/projects/jastip.svg",
    liveLink: "https://jastip-beige.vercel.app/",
    githubLink: "https://github.com/RobertDace/jastip",
    highlights: [
      "Multi-Currency live conversion (Yen ¥, Won ₩, USD $, SGD S$ ke Rupiah IDR)",
      "Live In-Store Shopping Mode dengan filter per toko (Don Quijote, Olive Young, Ginza)",
      "Automasi Invoice tagihan WhatsApp instan (DP, Pelunasan, Ongkir)",
      "Monitoring berat bagasi koper maskapai (kg) & rekap profit real-time"
    ],
    tools: [
      { name: "React 19", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Prisma ORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
      { name: "Express API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    ],
  },
  {
    index: "02",
    category: "DETERMINISTIC SIMULATION",
    title: "Klasim – Esports Telemetry & Scenario Modeler",
    description: "Simulator klasemen esports deterministik dan pemodel skenario probabilitas turnamen kompetitif (MPL ID, PMWC, VCT Pacific) dengan generator export instan PDF & Excel.",
    image: "/projects/klasim.svg",
    liveLink: "https://klasim.vercel.app",
    githubLink: "https://github.com/RobertDace/klasim",
    highlights: [
      "Simulasi deterministik tie-breaker (Head-to-Head, Game Difference, Aggression Rate)",
      "Pemodel skenario kelolosan playoff turnamen kualifikasi tier 1",
      "Generator laporan klasemen & statistik matchday otomatis (PDF & Excel)",
      "UI responsif dengan telemetry board ala broadcast esports internasional"
    ],
    tools: [
      { name: "Next.js 16", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Neon DB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Prisma ORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    index: "03",
    category: "ENTERPRISE ACADEMIC CLOUD",
    title: "TK Cahaya Hati – Integrated Academic Portal",
    description: "Portal sistem informasi akademik sekolah terpadu multi-perangkat untuk TK Cahaya Hati yang mencakup manajemen kesiswaan, monitoring absensi, tagihan SPP, dan otentikasi peran terintegrasi.",
    image: "/projects/tk-cahaya-hati.svg",
    liveLink: "https://tk-cahaya-hati.vercel.app",
    githubLink: "https://github.com/RobertDace/Multi-Device-Web-For-School",
    highlights: [
      "Role-Based Access Control (Admin, Guru Kelas, Wali Murid)",
      "Manajemen presensi dan QR Code absensi harian siswa",
      "Sistem billing SPP & invoice pembayaran terpadu",
      "Portal multi-device terenkripsi dengan Clerk Auth"
    ],
    tools: [
      { name: "Next.js 16", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Neon DB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Prisma ORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    index: "04",
    category: "CHESS ENGINE & MULTI-LLM",
    title: "SenKuni – AI Chess Analyzer & Coach",
    description: "Platform analisis posisi catur reaktif yang mengintegrasikan mesin catur Stockfish dengan asisten pelatih berbasis Claude AI & Gemini AI untuk memberikan evaluasi real-time serta panduan strategi bidak secara akurat.",
    image: "/projects/senkuni.jpg",
    liveLink: "https://senkuni.vercel.app",
    githubLink: "https://github.com/RobertDace/SenKuni",
    highlights: [
      "Integrasi Stockfish 16 Engine untuk kalkulasi kedalaman evaluasi centipawn",
      "Asisten AI Coach (Claude & Gemini AI) yang menjelaskan alasan blunder & taktik langkah",
      "Papan catur interaktif dengan animasi gerak bidak mulus",
      "Analisis PGN & FEN instan dengan visualisasi keunggulan posisi"
    ],
    tools: [
      { name: "Next.js 16", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Claude AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anthropic/anthropic-original.svg" },
      { name: "Gemini AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
      { name: "Stockfish 16", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    ],
  },
  {
    index: "05",
    category: "INTELLIGENT OCR AUTOMATION",
    title: "SheTI – Sakti HRD & Smart Document OCR",
    description: "Alat otomatisasi administrasi perkantoran dan HRD berbasis AI dengan fitur utama pengolah dokumen cerdas, Smart OCR untuk konversi kuitansi ke tabel otomatis, serta generator surat dinas instan.",
    image: "/projects/sheti.jpg",
    liveLink: "https://she-ti.vercel.app",
    githubLink: "https://github.com/RobertDace/SheTI",
    highlights: [
      "Smart OCR: Ekstraksi kuitansi fisik menjadi tabel keuangan digital",
      "Generator Surat Dinas & Dokumen HRD otomatis dalam hitungan detik",
      "Otomatisasi pengarsipan dan validasi kelengkapan berkas karyawan",
      "Integrasi Claude AI & Gemini AI untuk perangkum dokumen cerdas"
    ],
    tools: [
      { name: "Next.js 16", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Claude AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anthropic/anthropic-original.svg" },
      { name: "Gemini AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    index: "06",
    category: "LEGAL AI & REPOSITORY",
    title: "SemarMaca – Smart Legal E-Catalog",
    description: "Platform smart e-catalog dan repositori hukum digital untuk FH UWGM yang dilengkapi dengan fitur AI legal assistant, sistem audit plagiarisme, pemetaan perpustakaan interaktif, dan QR ticketing.",
    image: "/projects/semarmaca.jpg",
    liveLink: "https://semar-maca.vercel.app",
    githubLink: "https://github.com/RobertDace/SemarMaca",
    highlights: [
      "AI Legal Assistant untuk pencarian yurisprudensi & pasal undang-undang",
      "Pemetaan denah rak perpustakaan interaktif & pelacak ketersediaan buku",
      "Sistem QR Code peminjaman mandiri & audit plagiasi dokumen tugas akhir",
      "Database repositori jurnal digital terenkripsi"
    ],
    tools: [
      { name: "Next.js 16", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "Gemini AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    index: "07",
    category: "WEB AUDIO LAB & LO-FI",
    title: "Snacky – Interactive Lo-Fi Audio & Creative Room",
    description: "Ruang santai virtual dan pemutar audio lo-fi interaktif dengan rak vinyl berputar, kartu gacha kelinci koleksi, ambient soundscape generator, dan instrumen pad kreatif.",
    image: "/projects/snacky.svg",
    liveLink: "https://snacky-pi.vercel.app",
    githubLink: "https://github.com/RobertDace/snacky",
    highlights: [
      "Pemutar audio lo-fi Web Audio API dengan piringan vinyl berputar dinamis",
      "Generator suara ambient (suara hujan, kafe, api unggun) berlapis",
      "Sistem koleksi kartu gacha kelinci interaktif dengan animasi fisika",
      "Sound pad kreatif untuk eksperimen nada langsung di web"
    ],
    tools: [
      { name: "Next.js 16", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Web Audio API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    ],
  },
  {
    index: "08",
    category: "CREATIVE 3D EXPERIENCES",
    title: "My Orbit – Cosmic Memory Journey & Deck",
    description: "Pengalaman web interaktif bertema kosmik dan perjalanan memori personal dengan latar bintang live, modul countdown real-time, dek kartu interaktif, dan pemutar musik terintegrasi.",
    image: "/projects/my-orbit.svg",
    liveLink: "https://myorbit-omega.vercel.app",
    githubLink: "https://github.com/RobertDace/The-Unmapped-Orbit",
    highlights: [
      "Perjalanan kosmik 3D dengan konstelasi bintang reaktif",
      "Dek kartu kenangan interaktif dengan fisika gestur geser",
      "Timer countdown hari penting dengan sinkronisasi zona waktu",
      "Audio player terintegrasi dengan pemutar lirik estetik"
    ],
    tools: [
      { name: "Next.js 16", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "React 19", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    ],
  },
];

type ModalTab = "desktop" | "mobile" | "architecture";

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalTab, setModalTab] = useState<ModalTab>("desktop");
  const [iframeKey, setIframeKey] = useState(0);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const isMounted = useIsMounted();
  const isScrollingRef = useRef(false);

  const handleOpenModal = (project: typeof projectsData[0], initialTab: ModalTab = "desktop") => {
    setSelectedProject(project);
    setModalTab(initialTab);
    setIsIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleReloadIframe = () => {
    setIsIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

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
          left: cards[index].offsetLeft - 24,
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
      className="py-24 bg-transparent text-white relative z-10 scroll-mt-20 overflow-hidden"
    >
      {/* HEADER CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 mb-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2 text-left">
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
              Kumpulan proyek full-stack, serverless architecture, multi-LLM AI systems, dan pengalaman interaktif.
            </p>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
            <button
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 backdrop-blur-md active:scale-95 shadow-lg cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                activeIndex === 0
                  ? "border-slate-800/50 bg-slate-900/30 text-slate-600 cursor-not-allowed opacity-50"
                  : "border-slate-700/80 bg-slate-900/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800"
              }`}
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={scrollNext}
              disabled={activeIndex === projectsData.length - 1}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 backdrop-blur-md active:scale-95 shadow-lg cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                activeIndex === projectsData.length - 1
                  ? "border-slate-800/50 bg-slate-900/30 text-slate-600 cursor-not-allowed opacity-50"
                  : "border-slate-700/80 bg-slate-900/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800"
              }`}
              aria-label="Next Project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* HORIZONTAL CAROUSEL - BERSIH, TERUKUR, DAN SEIMBANG (0 LAG) */}
      <div className="w-full space-y-6">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 no-scrollbar snap-x snap-mandatory px-6 sm:px-8 md:px-12 w-full touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenModal(project, "desktop")}
              className="carousel-card snap-start w-[300px] sm:w-[330px] md:w-[350px] flex-shrink-0 bg-slate-900/70 hover:bg-slate-900/95 border border-slate-800/90 hover:border-cyan-500/50 rounded-2xl p-4 flex flex-col justify-between shadow-xl cursor-pointer transition-all duration-200 transform-gpu hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(6,182,212,0.12)] group backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none select-none"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenModal(project, "desktop");
                }
              }}
            >
              <div className="space-y-3.5">
                {/* Header Card: Category & Number Identifier */}
                <div className="flex items-center justify-between text-[10px] font-mono border-b border-slate-800/80 pb-2">
                  <span className="text-cyan-400 font-bold tracking-wider uppercase truncate max-w-[200px]">
                    {project.category}
                  </span>
                  <span className="text-slate-500 font-bold tabular-nums flex-shrink-0">
                    [{project.index} / 08]
                  </span>
                </div>

                {/* Banner Thumbnail Berukuran Pasti */}
                <div className="w-full h-44 rounded-xl overflow-hidden bg-slate-950 relative border border-slate-800 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300 will-change-transform block"
                    loading="lazy"
                  />
                  
                  {/* Subtle hover overlay button */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>Live Preview</span>
                    </div>
                  </div>
                </div>

                {/* Info Proyek */}
                <div className="space-y-1.5 text-left">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Stack Pills Footer */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/70 mt-3">
                {project.tools.slice(0, 3).map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[10px] font-mono text-slate-300 flex items-center gap-1"
                  >
                    <img src={tool.logo} alt="" className="w-3 h-3 object-contain inline" />
                    <span>{tool.name}</span>
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span className="px-1.5 py-0.5 rounded-md bg-slate-800/40 text-[10px] font-mono text-slate-400">
                    +{project.tools.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {projectsData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToIndex(dotIdx)}
              className={`h-2 rounded-full transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                activeIndex === dotIdx
                  ? "w-8 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  : "w-2 bg-slate-800 hover:bg-slate-600"
              }`}
              aria-label={`Go to project ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX POP-UP MODAL DI TENGAH LAYAR DENGAN HEAVY BLURRED BACKGROUND */}
      {isMounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 md:p-8 select-none font-sans overflow-hidden">
              
              {/* HEAVILY BLURRED BACKGROUND OVERLAY (MENUTUPI TOTAL SELURUH HALAMAN) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-2xl -z-10 cursor-pointer"
              />

              {/* Floating Emergency Close Button di Pojok Kanan Atas Viewport */}
              <button
                onClick={() => setSelectedProject(null)}
                className="fixed top-4 right-4 sm:top-6 sm:right-8 z-[1000000] px-4 py-2 rounded-full bg-slate-900/90 hover:bg-rose-500/20 border border-slate-700 hover:border-rose-400 text-slate-200 hover:text-rose-300 font-mono text-xs font-bold flex items-center gap-2 shadow-2xl cursor-pointer transition-all active:scale-95 backdrop-blur-md"
                aria-label="Tutup Preview"
              >
                <X className="w-4 h-4 text-rose-400" />
                <span>TUTUP [ESC]</span>
              </button>

              {/* POP-UP MODAL WINDOW CHASSIS (MELAYANG DI TENGAH LAYAR DENGAN FRAME JELAS & SHADOW MEWAH) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="w-[92vw] max-w-6xl h-[86vh] max-h-[860px] bg-[#070a12] border border-slate-700/80 rounded-[28px] shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col relative z-10"
                role="dialog"
                aria-modal="true"
              >
                {/* Pop-up Top Bar */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-[#0c111d] flex-shrink-0 gap-3">
                  
                  {/* Left: Project title & category badge */}
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
                      {selectedProject.category}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-white truncate max-w-[180px] sm:max-w-xs">
                      {selectedProject.title}
                    </span>
                  </div>

                  {/* Center: Mode Tabs */}
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
                    <button
                      onClick={() => setModalTab("desktop")}
                      className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        modalTab === "desktop"
                          ? "bg-cyan-400 text-slate-950 shadow-md"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>Tampilan Desktop</span>
                    </button>

                    <button
                      onClick={() => setModalTab("mobile")}
                      className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        modalTab === "mobile"
                          ? "bg-cyan-400 text-slate-950 shadow-md"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Tampilan Mobile</span>
                    </button>

                    <button
                      onClick={() => setModalTab("architecture")}
                      className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        modalTab === "architecture"
                          ? "bg-cyan-400 text-slate-950 shadow-md"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span className="hidden md:inline">Arsitektur &amp; Info</span>
                      <span className="md:hidden">Info</span>
                    </button>
                  </div>

                  {/* Right Actions: Buka Web & Close Button */}
                  <div className="flex items-center gap-2">
                    <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 max-w-xs truncate">
                      <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{selectedProject.liveLink}</span>
                      <button
                        onClick={handleReloadIframe}
                        className="ml-1 text-slate-500 hover:text-cyan-400 p-0.5 cursor-pointer"
                        title="Reload Iframe"
                      >
                        <RotateCw className="w-3 h-3" />
                      </button>
                    </div>

                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-xs font-bold text-slate-200 hover:text-cyan-300 transition-colors hidden sm:flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Buka Web</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-8 h-8 rounded-xl bg-rose-500/10 hover:bg-rose-500 border border-rose-500/30 hover:border-rose-500 text-rose-400 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                      title="Tutup Jendela"
                      aria-label="Tutup Jendela"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Pop-up Body Content Area */}
                <div className="w-full flex-1 min-h-0 bg-slate-950 overflow-hidden relative flex flex-col">
                  
                  {/* 1. TAMPILAN DESKTOP: Iframe Mengisi 100% Ruang Jendela Pop-up */}
                  {modalTab === "desktop" && (
                    <div className="w-full h-full relative flex flex-col bg-slate-950">
                      {isIframeLoading && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-950/90 backdrop-blur-sm">
                          <div className="w-9 h-9 rounded-full border-3 border-cyan-400 border-t-transparent animate-spin" />
                          <span className="text-xs font-mono text-slate-400">Menghubungkan ke live server...</span>
                        </div>
                      )}
                      <iframe
                        key={`desktop-${iframeKey}`}
                        src={selectedProject.liveLink}
                        title={`${selectedProject.title} Live Desktop`}
                        onLoad={() => setIsIframeLoading(false)}
                        className="w-full h-full border-0 bg-slate-950 block"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                    </div>
                  )}

                  {/* 2. TAMPILAN MOBILE: Frame Smartphone di Tengah Jendela Pop-up */}
                  {modalTab === "mobile" && (
                    <div className="w-full h-full flex items-center justify-center p-4 bg-slate-950/90 overflow-hidden">
                      <div className="w-[360px] sm:w-[380px] h-full max-h-[96%] rounded-[48px] border-[8px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden flex flex-col relative flex-shrink-0">
                        {/* Dynamic Island Status Bar */}
                        <div className="w-full h-10 bg-slate-950 flex items-center justify-between px-6 pt-1.5 select-none z-20 flex-shrink-0 border-b border-slate-900">
                          <span className="text-xs font-bold text-slate-200 font-mono">09:41</span>
                          <div className="w-22 h-4.5 rounded-full bg-black border border-slate-800 flex items-center justify-end px-2">
                            <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                          </div>
                          <span className="text-xs text-slate-300 font-mono">5G</span>
                        </div>

                        {/* Mobile Iframe */}
                        <div className="relative w-full flex-1 bg-slate-950 overflow-hidden">
                          {isIframeLoading && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-slate-950/90 backdrop-blur-sm">
                              <div className="w-7 h-7 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                              <span className="text-[11px] font-mono text-slate-400">Memuat tampilan mobile...</span>
                            </div>
                          )}
                          <iframe
                            key={`mobile-${iframeKey}`}
                            src={selectedProject.liveLink}
                            title={`${selectedProject.title} Mobile View`}
                            onLoad={() => setIsIframeLoading(false)}
                            className="w-full h-full border-0 bg-slate-950 block"
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          />
                        </div>

                        {/* iPhone Home Indicator */}
                        <div className="w-full py-2 bg-slate-950 flex justify-center z-20 flex-shrink-0">
                          <div className="w-32 h-1 rounded-full bg-slate-600" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 3. TAMPILAN ARSITEKTUR */}
                  {modalTab === "architecture" && (
                    <div className="w-full h-full overflow-y-auto no-scrollbar p-6 sm:p-10 space-y-6 max-w-4xl mx-auto">
                      <div className="w-full h-64 rounded-2xl overflow-hidden relative border border-slate-800 shadow-xl bg-slate-950">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <div className="space-y-2 text-left">
                        <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                          {selectedProject.category}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white">
                          {selectedProject.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3 pt-2 text-left">
                        <h4 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Arsitektur &amp; Fitur Unggulan</span>
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProject.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-3 pt-2 text-left">
                        <h4 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                          Deployed Core Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tools.map((tool, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200"
                            >
                              <img
                                src={tool.logo}
                                alt={tool.name}
                                className="w-4 h-4 object-contain"
                              />
                              <span>{tool.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Pop-up Footer Bar */}
                <div className="px-5 py-2.5 bg-[#0c111d] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono flex-shrink-0">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-[11px]"
                  >
                    <span>Source Code di GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-slate-500 text-[10px] hidden sm:inline">Tekan ESC atau klik di area blur untuk menutup</span>
                </div>

              </motion.div>

            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
