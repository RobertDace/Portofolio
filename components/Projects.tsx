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
  Eye,
  Copy,
  Check
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { sound } from "@/utils/sound";

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
const baseProjectsMetadata = [
  {
    index: "01",
    category: "AGENTIC AI & HYBRID RAG",
    title: "Agentic RAG – Autonomous Knowledge & Vector Engine",
    description: "Pipeline Retrieval-Augmented Generation (RAG) agentik skala produksi dengan evaluasi intent dinamis, hybrid vector search via PostgreSQL pgvector & HNSW index, token-bucket rate limiter Upstash Redis, serta streaming jawaban sub-200ms TTFB.",
    image: "/projects/agentic-rag.png",
    liveLink: "https://agentic-rag-engine.vercel.app/",
    githubLink: "https://github.com/RobertDace/agentic-rag-engine",
    highlights: [
      "Agentic Dynamic Routing: Evaluasi threshold kesamaan (≥ 0.70) untuk grounding vektor atau fallback web search real-time (Tavily)",
      "Hybrid Relational & High-Dimensional Vector Embeddings (1536-dim via text-embedding-3-small & pgvector HNSW)",
      "Keandalan produksi dengan validasi skema Zod ketat & rate-limiting token-bucket Upstash Redis",
      "Streaming respon Markdown berkecepatan tinggi sub-200ms TTFB menggunakan Vercel AI SDK over SSE"
    ],
    tools: [
      { name: "Next.js 16", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "pgvector", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "Prisma ORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
      { name: "Vercel AI SDK", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Upstash Redis", logo: "/icons/upstash.svg" },
    ],
  },
  {
    index: "02",
    category: "LOGISTICS & MULTI-CURRENCY",
    title: "JastipPro – Overseas Personal Shopper & Logistic Suite",
    description: "Sistem manajemen logistik dan pembelanjaan jastip luar negeri terpadu dengan multi-trip currency converter (JPY, KRW, SGD, USD), live in-store shopping checklist, kalkulator laba bersih, invoice generator WhatsApp instan, serta monitoring kuota bagasi koper.",
    image: "/projects/jastip.png",
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
    index: "03",
    category: "DETERMINISTIC SIMULATION",
    title: "Klasim – Esports Telemetry & Scenario Modeler",
    description: "Simulator klasemen esports deterministik dan pemodel skenario probabilitas turnamen kompetitif (MPL ID, PMWC, VCT Pacific) dengan generator export instan PDF & Excel.",
    image: "/projects/klasim.png",
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
      { name: "Neon DB", logo: "/icons/neon.svg" },
      { name: "Prisma ORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    index: "04",
    category: "ENTERPRISE ACADEMIC CLOUD",
    title: "TK Cahaya Hati – Integrated Academic Portal",
    description: "Portal sistem informasi akademik sekolah terpadu multi-perangkat untuk TK Cahaya Hati yang mencakup manajemen kesiswaan, monitoring absensi, tagihan SPP, dan otentikasi peran terintegrasi.",
    image: "/projects/tk-cahaya-hati.png",
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
      { name: "Neon DB", logo: "/icons/neon.svg" },
      { name: "Prisma ORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    index: "05",
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
      { name: "Claude AI", logo: "/icons/claude.svg" },
      { name: "Gemini AI", logo: "/icons/gemini.svg" },
      { name: "Stockfish 16", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    ],
  },
  {
    index: "06",
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
      { name: "Claude AI", logo: "/icons/claude.svg" },
      { name: "Gemini AI", logo: "/icons/gemini.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    index: "07",
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
      { name: "Gemini AI", logo: "/icons/gemini.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    index: "08",
    category: "WEB AUDIO LAB & LO-FI",
    title: "Snacky – Interactive Lo-Fi Audio & Creative Room",
    description: "Ruang santai virtual dan pemutar audio lo-fi interaktif dengan rak vinyl berputar, kartu gacha kelinci koleksi, ambient soundscape generator, dan instrumen pad kreatif.",
    image: "/projects/snacky.png",
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
    index: "09",
    category: "CREATIVE 3D EXPERIENCES",
    title: "My Orbit – Cosmic Memory Journey & Deck",
    description: "Pengalaman web interaktif bertema kosmik dan perjalanan memori personal dengan latar bintang live, modul countdown real-time, dek kartu interaktif, dan pemutar musik terintegrasi.",
    image: "/projects/my-orbit.png",
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
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalTab, setModalTab] = useState<ModalTab>("desktop");
  const [iframeKey, setIframeKey] = useState(0);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const isMounted = useIsMounted();
  const isScrollingRef = useRef(false);

  const projectsData = baseProjectsMetadata.map((base, idx) => {
    const item = t.projects.items[idx] || {};
    return {
      ...base,
      index: item.index || base.index,
      category: item.category || base.category,
      title: item.title || base.title,
      description: item.description || base.description,
      highlights: item.highlights || base.highlights,
    };
  });

  const duplicatedProjects = [...projectsData, ...projectsData, ...projectsData];

  const selectedProject = selectedProjectIndex !== null ? projectsData[selectedProjectIndex] : null;

  // Refs for 0-lag scroll math (zero DOM queries & zero layout reflow on scroll)
  const cardWidthRef = useRef(350 + 24);
  const activeIndexRef = useRef(0);
  const settleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mouse drag-to-scroll refs
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleOpenModal = (index: number, initialTab: ModalTab = "desktop") => {
    sound.playModalOpen();
    setSelectedProjectIndex(index);
    setModalTab(initialTab);
    setIsIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleCloseModal = () => {
    sound.playClick();
    setSelectedProjectIndex(null);
  };

  const handleCopyProjectLink = () => {
    if (!selectedProject) return;
    navigator.clipboard.writeText(selectedProject.liveLink);
    sound.playSuccess();
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleReloadIframe = () => {
    sound.playClick();
    setIsIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProjectIndex(null);
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

  // Measure card width once and on resize (zero measurement during scrolling)
  useEffect(() => {
    const measureCard = () => {
      if (!carouselRef.current) return;
      const firstCard = carouselRef.current.querySelector<HTMLElement>(".carousel-card");
      if (firstCard) {
        cardWidthRef.current = firstCard.offsetWidth + 24; // 24px is gap-6
      }
    };
    measureCard();
    window.addEventListener("resize", measureCard, { passive: true });
    return () => window.removeEventListener("resize", measureCard);
  }, []);

  // Center initial view to middle set on mount
  useEffect(() => {
    if (!carouselRef.current || !projectsData.length) return;
    const container = carouselRef.current;
    const cardWidth = cardWidthRef.current;
    const middleIndex = projectsData.length;
    container.scrollLeft = middleIndex * cardWidth;
    setActiveIndex(0);
  }, [projectsData.length]);

  // 0-LAG Scroll Handler: Pure O(1) arithmetic, zero DOM queries & zero layout thrashing
  const handleScroll = useCallback(() => {
    if (!carouselRef.current || !projectsData.length) return;
    const container = carouselRef.current;
    const cardWidth = cardWidthRef.current;
    const totalSetWidth = cardWidth * projectsData.length;

    // Fast O(1) active index calculation without querying DOM elements
    const currentCardIdx = Math.round(container.scrollLeft / cardWidth);
    const realIdx = ((currentCardIdx % projectsData.length) + projectsData.length) % projectsData.length;

    if (realIdx !== activeIndexRef.current) {
      activeIndexRef.current = realIdx;
      setActiveIndex(realIdx);
    }

    // Debounced boundary reset when idle to eliminate any visual stutter while scrolling
    if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    settleTimeoutRef.current = setTimeout(() => {
      if (!carouselRef.current) return;
      const sl = carouselRef.current.scrollLeft;
      if (sl < totalSetWidth * 0.4) {
        carouselRef.current.scrollLeft = sl + totalSetWidth;
      } else if (sl > totalSetWidth * 2.1) {
        carouselRef.current.scrollLeft = sl - totalSetWidth;
      }
    }, 120);
  }, [projectsData.length]);

  // Smooth next / prev actions
  const scrollPrev = () => {
    if (!carouselRef.current) return;
    const cardWidth = cardWidthRef.current;
    carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!carouselRef.current) return;
    const cardWidth = cardWidthRef.current;
    carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const scrollToProject = (targetIdx: number) => {
    if (!carouselRef.current || !projectsData.length) return;
    const cardWidth = cardWidthRef.current;
    const targetScrollLeft = (projectsData.length + targetIdx) * cardWidth;
    carouselRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
    setActiveIndex(targetIdx);
  };

  // Mouse Drag-to-Scroll Physics (0 Lag on Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isMouseDownRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftStartRef.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.scrollSnapType = "none";
    carouselRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }
    carouselRef.current.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!carouselRef.current) return;
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      carouselRef.current.style.scrollSnapType = "x mandatory";
      carouselRef.current.style.scrollBehavior = "smooth";
    }
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
              {t.projects.subHeader}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              {t.projects.title}{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent animate-antigravity-shimmer inline-block">
                {t.projects.titleHighlight}
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>

          {/* INFINITE CAROUSEL CONTROLS */}
          <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-slate-700/80 bg-[#0e1424] text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-slate-700/80 bg-[#0e1424] text-slate-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-slate-800 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              aria-label="Next Project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* INFINITE HORIZONTAL CAROUSEL - 0 LAG GPU PIPELINE */}
      <div className="w-full space-y-6">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 no-scrollbar snap-x snap-mandatory px-6 sm:px-8 md:px-12 w-full touch-pan-x overscroll-x-contain cursor-grab active:cursor-grabbing transform-gpu will-change-scroll"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {duplicatedProjects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (!hasDraggedRef.current) {
                  handleOpenModal(idx % projectsData.length, "desktop");
                }
              }}
              className="carousel-card snap-start w-[300px] sm:w-[330px] md:w-[350px] flex-shrink-0 bg-[#0e1424] hover:bg-[#131b2e] border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-4 flex flex-col justify-between shadow-xl cursor-pointer transition-all duration-200 transform-gpu hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(6,182,212,0.12)] group focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none select-none"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenModal(idx % projectsData.length, "desktop");
                }
              }}
            >
              <div className="space-y-3.5">
                {/* Header Card: Category & Live Indicator */}
                <div className="flex items-center justify-between text-[10px] font-mono border-b border-slate-800/80 pb-2">
                  <span className="text-cyan-400 font-bold tracking-wider uppercase truncate max-w-[200px]">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/25 text-cyan-300 font-mono text-[9px] font-medium flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    LIVE
                  </span>
                </div>

                {/* Banner Thumbnail */}
                <div className="w-full h-44 rounded-xl overflow-hidden bg-slate-950 relative border border-slate-800 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300 will-change-transform block"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Subtle hover overlay button */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>{t.projects.livePreview}</span>
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
              onClick={() => scrollToProject(dotIdx)}
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

      {/* LIGHTBOX POP-UP MODAL — BACKDROP BURAM DI BELAKANG, MODAL MELAYANG DI TENGAH */}
      {isMounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            // Root: fade wrapper, fixed fullscreen, NO overflow-hidden, NO -z-10
            <motion.div
              key="lightbox-root"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-0"
              style={{ zIndex: 99998 }}
            >
              {/* ── LAYER 1: BACKDROP BURAM (klik untuk tutup) ── */}
              <div
                onClick={handleCloseModal}
                className="absolute inset-0 bg-black/80 backdrop-blur-2xl cursor-pointer"
              />

              {/* ── LAYER 2: TOMBOL TUTUP DARURAT ── */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 sm:top-6 sm:right-8 z-10 px-4 py-2 rounded-full bg-slate-900/90 hover:bg-rose-500/20 border border-slate-700 hover:border-rose-400 text-slate-200 hover:text-rose-300 font-mono text-xs font-bold flex items-center gap-2 shadow-2xl cursor-pointer transition-all active:scale-95 backdrop-blur-md"
                aria-label="Tutup Preview"
              >
                <X className="w-4 h-4 text-rose-400" />
                <span>{t.projects.modal.closeBtn}</span>
              </button>

              {/* ── LAYER 3: POP-UP WINDOW MELAYANG DI TENGAH ── */}
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 pointer-events-none">
                <motion.div
                  key="lightbox-window"
                  initial={{ scale: 0.94, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.94, y: 20, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="w-[92vw] max-w-6xl h-[86vh] max-h-[860px] bg-[#070a12] border border-slate-700/80 rounded-[28px] shadow-[0_30px_90px_rgba(0,0,0,0.98)] overflow-hidden flex flex-col pointer-events-auto"
                  role="dialog"
                  aria-modal="true"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* ── TOP BAR ── */}
                  <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-[#0c111d] flex-shrink-0 gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider hidden sm:inline-block flex-shrink-0">
                        {selectedProject.category}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-white truncate max-w-[140px] sm:max-w-xs">
                        {selectedProject.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800 flex-shrink-0">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setModalTab("desktop");
                        }}
                        className={`flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${modalTab === "desktop" ? "bg-cyan-400 text-slate-950 shadow-md" : "text-slate-400 hover:text-slate-200"}`}
                      >
                        <Laptop className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">{t.projects.modal.desktopTab}</span>
                      </button>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setModalTab("mobile");
                        }}
                        className={`flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${modalTab === "mobile" ? "bg-cyan-400 text-slate-950 shadow-md" : "text-slate-400 hover:text-slate-200"}`}
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">{t.projects.modal.mobileTab}</span>
                      </button>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setModalTab("architecture");
                        }}
                        className={`flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${modalTab === "architecture" ? "bg-cyan-400 text-slate-950 shadow-md" : "text-slate-400 hover:text-slate-200"}`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span className="hidden md:inline">{t.projects.modal.archTab}</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 max-w-[220px] truncate">
                        <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{selectedProject.liveLink}</span>
                        <button onClick={handleReloadIframe} className="ml-1 text-slate-500 hover:text-cyan-400 p-0.5 cursor-pointer flex-shrink-0" title="Reload">
                          <RotateCw className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Copy Project Link Button */}
                      <button
                        onClick={handleCopyProjectLink}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-xs font-mono font-bold text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                        title="Copy Project Link"
                      >
                        {copiedLink ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 text-[11px]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span className="hidden sm:inline text-[11px]">Share</span>
                          </>
                        )}
                      </button>

                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-xs font-bold text-slate-200 hover:text-cyan-300 transition-colors hidden sm:flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>{t.projects.modal.openWeb}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      </a>
                      <button
                        onClick={handleCloseModal}
                        className="p-1.5 rounded-xl bg-slate-900 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer border border-slate-800"
                        title="Close"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* ── BODY: flexGrow+height:0 forces concrete computed height for absolute children ── */}
                  <div className="w-full relative overflow-hidden bg-slate-950" style={{ flexGrow: 1, height: 0 }}>
                    {/* ── TAB 1: DESKTOP ── */}
                    {modalTab === "desktop" && (
                      <div className="absolute inset-0">
                        {isIframeLoading && (
                          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-950/90 backdrop-blur-sm">
                            <div className="w-9 h-9 rounded-full border-[3px] border-cyan-400 border-t-transparent animate-spin" />
                            <span className="text-xs font-mono text-slate-400">{t.projects.modal.connecting}</span>
                          </div>
                        )}
                        <iframe
                          key={`desktop-${iframeKey}`}
                          src={selectedProject.liveLink}
                          title={`${selectedProject.title} Live Desktop`}
                          onLoad={() => setIsIframeLoading(false)}
                          className="absolute inset-0 w-full h-full border-0 bg-slate-950"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        />
                      </div>
                    )}

                    {/* ── TAB 2: MOBILE SIMULATOR ── */}
                    {modalTab === "mobile" && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 bg-slate-950/90 overflow-hidden">
                        <div className="w-[360px] sm:w-[380px] h-full max-h-full rounded-[48px] border-[8px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden flex flex-col relative">
                          {/* Status bar */}
                          <div className="w-full h-10 bg-slate-950 flex items-center justify-between px-6 pt-1.5 select-none flex-shrink-0 border-b border-slate-900">
                            <span className="text-xs font-bold text-slate-200 font-mono">09:41</span>
                            <div className="w-20 h-5 rounded-full bg-black border border-slate-800 flex items-center justify-end px-2">
                              <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                            </div>
                            <span className="text-xs text-slate-300 font-mono">5G</span>
                          </div>
                          {/* Iframe area */}
                          <div className="relative w-full flex-1 min-h-0 overflow-hidden bg-slate-950">
                            {isIframeLoading && (
                              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-slate-950/90 backdrop-blur-sm">
                                <div className="w-7 h-7 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                                <span className="text-[11px] font-mono text-slate-400">{t.projects.modal.loadingMobile}</span>
                              </div>
                            )}
                            <iframe
                              key={`mobile-${iframeKey}`}
                              src={selectedProject.liveLink}
                              title={`${selectedProject.title} Mobile View`}
                              onLoad={() => setIsIframeLoading(false)}
                              className="absolute inset-0 w-full h-full border-0 bg-slate-950"
                              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                            />
                          </div>
                          {/* Home indicator */}
                          <div className="w-full py-2 bg-slate-950 flex justify-center flex-shrink-0">
                            <div className="w-32 h-1 rounded-full bg-slate-600" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── TAB 3: ARSITEKTUR (scrollable) ── */}
                    {modalTab === "architecture" && (
                      <div className="absolute inset-0 overflow-y-auto">
                        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-8 space-y-6">
                          <div className="w-full h-64 rounded-2xl overflow-hidden relative border border-slate-800 shadow-xl bg-slate-950">
                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover object-center" />
                          </div>
                          <div className="space-y-2 text-left">
                            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">{selectedProject.category}</div>
                            <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedProject.title}</h3>
                            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">{selectedProject.description}</p>
                          </div>
                          <div className="space-y-3 text-left">
                            <h4 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>{t.projects.modal.archHighlights}</span>
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
                          <div className="space-y-3 text-left">
                            <h4 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">{t.projects.modal.deployedTech}</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.tools.map((tool, tIdx) => (
                                <div key={tIdx} className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200">
                                  <img src={tool.logo} alt={tool.name} className="w-4 h-4 object-contain" />
                                  <span>{tool.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>


                  {/* ── FOOTER BAR ── */}
                  <div className="px-5 py-2.5 bg-[#0c111d] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono flex-shrink-0">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors flex items-center gap-1.5 text-[11px]"
                    >
                      <span>{t.projects.modal.sourceCode}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-slate-500 text-[10px] hidden sm:inline">{t.projects.modal.escHint}</span>
                  </div>

                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
