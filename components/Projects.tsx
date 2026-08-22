"use client";

import { useState, useRef, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
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
      className="py-24 bg-transparent text-white relative z-10 scroll-mt-20 overflow-hidden"
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
              Aplikasi berbasis multi-LLM (Claude &amp; Gemini), serverless database, logistik internasional, dan arsitektur web modern.
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

      {/* HORIZONTAL CAROUSEL - KOMPAK, RAMPING, DAN 0 LAG */}
      <div className="w-full space-y-6">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-5 sm:gap-6 pb-6 pt-2 no-scrollbar snap-x snap-mandatory px-4 sm:px-8 md:px-12 w-full touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenModal(project, "desktop")}
              className="carousel-card snap-start w-[78vw] sm:w-[320px] lg:w-[350px] flex-shrink-0 bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/60 rounded-[24px] p-3.5 sm:p-4 flex flex-col justify-between shadow-lg cursor-pointer transition-all duration-200 transform-gpu hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(6,182,212,0.12)] group backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none select-none"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenModal(project, "desktop");
                }
              }}
            >
              <div className="space-y-3">
                {/* Header Card: Category & Number Identifier */}
                <div className="flex items-center justify-between px-0.5 text-[10px] font-mono">
                  <span className="text-cyan-400 font-bold tracking-wider uppercase truncate max-w-[200px]">
                    {project.category}
                  </span>
                  <span className="text-slate-500 font-bold tabular-nums flex-shrink-0">
                    [{project.index} / 08]
                  </span>
                </div>

                {/* Banner Thumbnail Kompak & Proporsional */}
                <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden bg-slate-950 relative border border-slate-800/80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized={project.image.endsWith(".svg")}
                    sizes="(max-width: 640px) 78vw, 350px"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300 will-change-transform"
                  />
                  
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="px-3.5 py-1.5 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview Proyek</span>
                    </div>
                  </div>
                </div>

                {/* Info Proyek */}
                <div className="px-0.5 space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Stack Pills Footer */}
              <div className="flex flex-wrap gap-1 pt-3 px-0.5 border-t border-slate-800/60 mt-3">
                {project.tools.slice(0, 3).map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/50 text-[10px] font-mono text-slate-300"
                  >
                    {tool.name}
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span className="px-1.5 py-0.5 rounded-md bg-slate-800/50 text-[10px] font-mono text-slate-400">
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

      {/* POPUP MODAL VIEWPORT-PERFECT (SELALU FIT DI LAYAR DENGAN HEADER & TOMBOL CLOSE YANG STICKY/FIXED) */}
      {isMounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 md:p-6 select-none font-sans">
              
              {/* Backdrop Gelap Penutup Halaman */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
              />

              {/* Floating Emergency Close Button di Pojok Kanan Atas Viewport (Selalu Terlihat & Bisa Diklik) */}
              <button
                onClick={() => setSelectedProject(null)}
                className="fixed top-3 right-3 sm:top-5 sm:right-5 z-[100000] px-3.5 py-2 rounded-full bg-slate-900/95 hover:bg-rose-500/20 border border-slate-700 hover:border-rose-400 text-slate-300 hover:text-rose-300 font-mono text-xs font-bold flex items-center gap-1.5 shadow-2xl cursor-pointer transition-all active:scale-95 backdrop-blur-md"
                aria-label="Tutup Preview"
              >
                <X className="w-4 h-4 text-rose-400" />
                <span className="hidden sm:inline">Tutup Preview [ESC]</span>
                <span className="sm:hidden">Tutup</span>
              </button>

              {/* Main Popup Window Chassis (Tinggi Dibatasi Agar Selalu Pas di Layar Laptop) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="w-full max-w-5xl h-[88vh] max-h-[780px] bg-[#070a12] border border-slate-800 rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col relative z-10"
                role="dialog"
                aria-modal="true"
              >
                {/* STICKY TOP CONTROL BAR (TIDAK PERNAH HILANG / TERGESER) */}
                <div className="sticky top-0 z-30 flex items-center justify-between px-3 sm:px-5 py-2.5 border-b border-slate-800 bg-[#0b0f19] flex-shrink-0 gap-2">
                  
                  {/* Pilihan Mode Switcher Tampilan (PC Desktop / HP Mobile / Arsitektur) */}
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800/80">
                    <button
                      onClick={() => setModalTab("desktop")}
                      className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        modalTab === "desktop"
                          ? "bg-cyan-400 text-slate-950 shadow-sm"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>Tampilan PC</span>
                    </button>

                    <button
                      onClick={() => setModalTab("mobile")}
                      className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        modalTab === "mobile"
                          ? "bg-cyan-400 text-slate-950 shadow-sm"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Tampilan HP</span>
                    </button>

                    <button
                      onClick={() => setModalTab("architecture")}
                      className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        modalTab === "architecture"
                          ? "bg-cyan-400 text-slate-950 shadow-sm"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Info Detail</span>
                      <span className="sm:hidden">Info</span>
                    </button>
                  </div>

                  {/* Domain Live URL & Reload */}
                  <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 max-w-xs truncate">
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

                  {/* Tombol Buka Tab Baru & Tombol Tutup Silang Merah Jelas */}
                  <div className="flex items-center gap-2">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 text-xs font-bold text-slate-200 hover:text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="hidden sm:inline">Buka Web</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-8 h-8 rounded-lg bg-rose-500/10 hover:bg-rose-500 border border-rose-500/30 hover:border-rose-500 text-rose-400 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                      title="Tutup Jendela"
                      aria-label="Tutup Jendela"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* AREA TAMPILAN KONTEN UTAMA (FLEX-1 DENGAN OVERFLOW-Y AUTO AGAR HEADER TIDAK TERTUTUP) */}
                <div className="flex-1 overflow-y-auto no-scrollbar bg-slate-950 p-3 sm:p-5 flex flex-col justify-center">
                  
                  {/* 1. TAMPILAN PC / DESKTOP */}
                  {modalTab === "desktop" && (
                    <div className="w-full h-full min-h-[380px] rounded-xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden relative flex flex-col">
                      {isIframeLoading && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2.5 bg-slate-950/90 backdrop-blur-sm">
                          <div className="w-7 h-7 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                          <span className="text-xs font-mono text-slate-400">Menghubungkan ke server aplikasi...</span>
                        </div>
                      )}
                      <iframe
                        key={`desktop-${iframeKey}`}
                        src={selectedProject.liveLink}
                        title={`${selectedProject.title} Desktop View`}
                        onLoad={() => setIsIframeLoading(false)}
                        className="w-full h-full border-0 bg-slate-950 flex-1"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                    </div>
                  )}

                  {/* 2. TAMPILAN HP / MOBILE (TINGGI PROPORSIONAL & TIDAK OFFSCREEN) */}
                  {modalTab === "mobile" && (
                    <div className="w-full h-full flex items-center justify-center py-1">
                      <div className="w-[280px] sm:w-[320px] h-[480px] sm:h-[540px] max-h-[80vh] rounded-[40px] border-[6px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden flex flex-col relative">
                        {/* Dynamic Island Status Bar */}
                        <div className="w-full h-8 bg-slate-950 flex items-center justify-between px-5 pt-1 select-none z-20">
                          <span className="text-[10px] font-bold text-slate-200 font-mono">09:41</span>
                          <div className="w-20 h-4 rounded-full bg-black border border-slate-800 flex items-center justify-end px-1.5">
                            <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                          </div>
                          <span className="text-[9px] text-slate-300 font-mono">5G</span>
                        </div>

                        <div className="relative flex-1 w-full bg-slate-950 overflow-hidden">
                          {isIframeLoading && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-slate-950/90 backdrop-blur-sm">
                              <div className="w-6 h-6 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                              <span className="text-[10px] font-mono text-slate-400">Memuat tampilan HP...</span>
                            </div>
                          )}
                          <iframe
                            key={`mobile-${iframeKey}`}
                            src={selectedProject.liveLink}
                            title={`${selectedProject.title} Mobile View`}
                            onLoad={() => setIsIframeLoading(false)}
                            className="w-full h-full border-0 bg-slate-950"
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          />
                        </div>

                        <div className="w-full py-1.5 bg-slate-950 flex justify-center z-20">
                          <div className="w-28 h-1 rounded-full bg-slate-600" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 3. TAMPILAN DETAIL ARSITEKTUR */}
                  {modalTab === "architecture" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 max-w-2xl mx-auto py-2"
                    >
                      <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative border border-slate-800 shadow-md bg-slate-950">
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          fill
                          unoptimized={selectedProject.image.endsWith(".svg")}
                          sizes="600px"
                          className="object-cover object-center"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                          {selectedProject.category}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white">
                          {selectedProject.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 pt-1">
                        <h4 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Fitur Unggulan</span>
                        </h4>
                        <ul className="space-y-1.5">
                          {selectedProject.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-2 pt-1">
                        <h4 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tools.map((tool, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
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
                    </motion.div>
                  )}

                </div>

                {/* FOOTER BAR */}
                <div className="px-4 py-2.5 bg-[#0b0f19] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono flex-shrink-0">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-[11px]"
                  >
                    <span>Source Code di GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-slate-500 text-[10px]">Tekan ESC untuk menutup</span>
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
