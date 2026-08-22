"use client";

import { useState, useRef, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Smartphone, 
  FileText, 
  ExternalLink, 
  RotateCw, 
  Lock, 
  X,
  Sparkles,
  ChevronRight
} from "lucide-react";

// Safe client-side mount hook for React 19 & Next.js 16 without cascading setState in useEffect
const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

// Data Proyek Unggulan Terurut dari Build Terbaru (Jastip, Klasim, TK Cahaya Hati, SenKuni, dst.)
const projectsData = [
  {
    title: "JastipPro - Overseas Personal Shopper & Logistic Suite",
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
    highlights: [
      "Simulasi deterministik tie-breaker (Head-to-Head, Game Difference, Aggression Rate)",
      "Pemodel skenario kelolosan playoff turnamen kualifikasi tier 1",
      "Generator laporan klasemen & statistik matchday otomatis (PDF & Excel)",
      "UI responsif dengan telemetry board ala broadcast esports internasional"
    ],
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
    highlights: [
      "Role-Based Access Control (Admin, Guru Kelas, Wali Murid)",
      "Manajemen presensi dan QR Code absensi harian siswa",
      "Sistem billing SPP & invoice pembayaran terpadu",
      "Portal multi-device terenkripsi dengan Clerk Auth"
    ],
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
    highlights: [
      "Integrasi Stockfish 16 Engine untuk kalkulasi kedalaman evaluasi centipawn",
      "Asisten AI Coach (Gemini AI) yang menjelaskan alasan blunder & taktik langkah",
      "Papan catur interaktif dengan animasi gerak bidak mulus",
      "Analisis PGN & FEN instan dengan visualisasi keunggulan posisi"
    ],
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
    highlights: [
      "Smart OCR: Ekstraksi kuitansi fisik menjadi tabel keuangan digital",
      "Generator Surat Dinas & Dokumen HRD otomatis dalam hitungan detik",
      "Otomatisasi pengarsipan dan validasi kelengkapan berkas karyawan",
      "Integrasi Gemini AI untuk perangkum dokumen cerdas"
    ],
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
    highlights: [
      "AI Legal Assistant untuk pencarian yurisprudensi & pasal undang-undang",
      "Pemetaan denah rak perpustakaan interaktif & pelacak ketersediaan buku",
      "Sistem QR Code peminjaman mandiri & audit plagiasi dokumen tugas akhir",
      "Database repositori jurnal digital terenkripsi"
    ],
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
    highlights: [
      "Pemutar audio lo-fi Web Audio API dengan piringan vinyl berputar dinamis",
      "Generator suara ambient (suara hujan, kafe, api unggun) berlapis",
      "Sistem koleksi kartu gacha kelinci interaktif dengan animasi fisika",
      "Sound pad kreatif untuk eksperimen nada langsung di web"
    ],
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
    highlights: [
      "Perjalanan kosmik 3D dengan konstelasi bintang reaktif",
      "Dek kartu kenangan interaktif dengan fisika gestur geser",
      "Timer countdown hari penting dengan sinkronisasi zona waktu",
      "Audio player terintegrasi dengan pemutar lirik estetik"
    ],
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    ],
  },
];

type DrawerMode = "overview" | "desktop" | "mobile";

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [drawerMode, setDrawerMode] = useState<DrawerMode>("overview");
  const [iframeKey, setIframeKey] = useState(0);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const isMounted = useIsMounted();
  const isScrollingRef = useRef(false);

  const handleSelectProject = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setDrawerMode("overview");
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
              Kumpulan aplikasi berbasis Artificial Intelligence (AI), logistik internasional, dan arsitektur web modern yang dirancang untuk efisiensi sistem.
            </p>
          </div>

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

      {/* HORIZONTAL CAROUSEL */}
      <div className="w-full space-y-6">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 pt-4 no-scrollbar snap-x snap-mandatory px-4 sm:px-8 md:px-12 w-full touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              onClick={() => handleSelectProject(project)}
              className="carousel-card snap-start w-[85vw] sm:w-[380px] lg:w-[420px] flex-shrink-0 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/50 rounded-[28px] p-4 flex flex-col justify-between shadow-xl cursor-pointer transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.08)] group backdrop-blur-sm"
            >
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
                  
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[10px] font-mono font-bold text-cyan-300 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 shadow-lg">
                    <Laptop className="w-3 h-3 text-cyan-400" />
                    <span>Live Simulator</span>
                  </div>
                </div>

                <div className="px-1 space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

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

      {/* JENDELA DRAWER & DEVICE MOCKUP SIMULATOR MODAL (VIA CREATEPORTAL DI ATAS SELURUH HALAMAN & NAVBAR) */}
      {isMounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop Gelap Belakang yang Menutupi Seluruh Halaman termasuk Floating Navbar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-md z-[99998] pointer-events-auto cursor-pointer"
              />

              {/* Panel Samping / Simulator Modal Meluncur dari Kanan (Di Atas Backdrop & Navbar) */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed right-0 top-0 bottom-0 h-full w-full ${
                  drawerMode === "overview" 
                    ? "sm:w-[540px] lg:w-[600px]" 
                    : "sm:w-[780px] lg:w-[940px] xl:w-[1020px]"
                } bg-[#0b0f19] border-l border-slate-800/90 z-[99999] shadow-2xl flex flex-col justify-between pointer-events-auto font-sans transition-all duration-500`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="drawer-title"
              >
                {/* Top Navigation Bar: Device Tabs & Close */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800/90 bg-slate-950/90 backdrop-blur-md z-20">
                  <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
                    <button
                      onClick={() => setDrawerMode("overview")}
                      className={`relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-colors duration-200 cursor-pointer ${
                        drawerMode === "overview"
                          ? "text-slate-950"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {drawerMode === "overview" && (
                        <motion.div
                          layoutId="drawerTabPill"
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 -z-10 shadow-sm"
                          transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        />
                      )}
                      <FileText className="w-3.5 h-3.5" />
                      <span>Overview</span>
                    </button>

                    <button
                      onClick={() => setDrawerMode("desktop")}
                      className={`relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-colors duration-200 cursor-pointer ${
                        drawerMode === "desktop"
                          ? "text-slate-950"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {drawerMode === "desktop" && (
                        <motion.div
                          layoutId="drawerTabPill"
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 -z-10 shadow-sm"
                          transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        />
                      )}
                      <Laptop className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Simulator Desktop</span>
                      <span className="sm:hidden">Desktop</span>
                    </button>

                    <button
                      onClick={() => setDrawerMode("mobile")}
                      className={`relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-colors duration-200 cursor-pointer ${
                        drawerMode === "mobile"
                          ? "text-slate-950"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {drawerMode === "mobile" && (
                        <motion.div
                          layoutId="drawerTabPill"
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 -z-10 shadow-sm"
                          transition={{ type: "spring", stiffness: 450, damping: 30 }}
                        />
                      )}
                      <Smartphone className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Simulator Mobile</span>
                      <span className="sm:hidden">Mobile</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all shadow-md cursor-pointer active:scale-95 flex-shrink-0"
                    aria-label="Tutup jendela"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Main Content Area */}
                <div className="overflow-y-auto no-scrollbar flex-1 relative p-4 sm:p-6 space-y-6">
                  
                  {/* 1. OVERVIEW MODE */}
                  {drawerMode === "overview" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="w-full aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden relative border border-slate-800 shadow-xl">
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          fill
                          unoptimized={selectedProject.image.endsWith(".svg")}
                          sizes="(max-width: 640px) 100vw, 600px"
                          className="object-cover object-center"
                          priority
                        />
                      </div>

                      <div className="space-y-3">
                        <h3 id="drawer-title" className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                          {selectedProject.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div 
                        onClick={() => setDrawerMode("desktop")}
                        className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-emerald-950/40 border border-cyan-500/30 hover:border-cyan-400/60 cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                            <Laptop className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                              Coba Langsung di Simulator Interaktif
                            </h4>
                            <p className="text-[11px] text-slate-400">
                              Uji live demo di layar laptop &amp; smartphone virtual
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>

                      {selectedProject.highlights && (
                        <div className="space-y-3 pt-2">
                          <h4 className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Arsitektur &amp; Fitur Unggulan</span>
                          </h4>
                          <ul className="space-y-2.5">
                            {selectedProject.highlights.map((highlight, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

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
                    </motion.div>
                  )}

                  {/* 2. DESKTOP SIMULATOR MODE */}
                  {drawerMode === "desktop" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 select-none">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                          </div>

                          <div className="flex-1 max-w-md mx-4 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center justify-between shadow-inner">
                            <div className="flex items-center gap-1.5 truncate">
                              <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                              <span className="truncate">{selectedProject.liveLink}</span>
                            </div>
                            <button
                              onClick={handleReloadIframe}
                              className="text-slate-400 hover:text-cyan-400 transition-colors p-0.5 cursor-pointer"
                              title="Reload Simulator"
                            >
                              <RotateCw className="w-3 h-3" />
                            </button>
                          </div>

                          <a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-colors p-1 cursor-pointer"
                            title="Buka di tab baru"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>

                        <div className="relative w-full h-[520px] sm:h-[580px] bg-slate-950 overflow-hidden">
                          {isIframeLoading && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-950/90 backdrop-blur-sm">
                              <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                              <span className="text-xs font-mono text-slate-400">Menghubungkan ke server aplikasi...</span>
                            </div>
                          )}

                          <iframe
                            key={`desktop-${iframeKey}`}
                            src={selectedProject.liveLink}
                            title={`${selectedProject.title} Desktop Simulator`}
                            onLoad={() => setIsIframeLoading(false)}
                            className="w-full h-full border-0 bg-slate-950"
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* 3. MOBILE SIMULATOR MODE */}
                  {drawerMode === "mobile" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center py-4 space-y-4"
                    >
                      <div className="w-[300px] sm:w-[340px] h-[580px] sm:h-[640px] rounded-[48px] border-[8px] border-slate-800/90 bg-slate-950 shadow-2xl overflow-hidden flex flex-col relative">
                        <div className="w-full h-10 bg-slate-950 flex items-center justify-between px-6 pt-2 select-none z-20">
                          <span className="text-[11px] font-bold text-slate-200">09:41</span>
                          
                          <div className="w-24 h-5 rounded-full bg-black border border-slate-800 flex items-center justify-end px-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                          </div>

                          <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
                            <span>5G</span>
                            <span className="w-4 h-2 rounded-xs border border-slate-400 inline-block p-0.5">
                              <span className="w-full h-full bg-emerald-400 block" />
                            </span>
                          </div>
                        </div>

                        <div className="relative flex-1 w-full bg-slate-950 overflow-hidden">
                          {isIframeLoading && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2.5 bg-slate-950/90 backdrop-blur-sm p-4 text-center">
                              <div className="w-7 h-7 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                              <span className="text-[11px] font-mono text-slate-400">Memuat tampilan mobile...</span>
                            </div>
                          )}

                          <iframe
                            key={`mobile-${iframeKey}`}
                            src={selectedProject.liveLink}
                            title={`${selectedProject.title} Mobile Simulator`}
                            onLoad={() => setIsIframeLoading(false)}
                            className="w-full h-full border-0 bg-slate-950"
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          />
                        </div>

                        <div className="w-full py-2 bg-slate-950 flex justify-center z-20">
                          <div className="w-32 h-1 rounded-full bg-slate-600" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                </div>

                {/* Footer Actions */}
                <div className="p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md border-t border-slate-800/80 flex items-center gap-3 z-20">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(6,182,212,0.3)] transition-all transform active:scale-[0.98]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Buka Live Website</span>
                  </a>

                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-all shadow-md flex-shrink-0 active:scale-95 cursor-pointer"
                    title="Lihat Source Code di GitHub"
                    aria-label="Lihat Source Code di GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.008.069-.008 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
