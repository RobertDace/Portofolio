"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FolderGit2,
  Layers,
  Sparkles,
  Mail,
  User,
  Briefcase,
  ExternalLink,
  Volume2,
  VolumeX,
  Languages,
  ArrowRight,
  Download,
  Terminal as TerminalIcon,
  X,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { sound } from "@/utils/sound";

interface CommandItem {
  id: string;
  category: "Navigation" | "Projects" | "Quick Actions" | "System";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setIsMuted(sound.getIsMuted());
    const handleSoundChange = (e: CustomEvent<boolean>) => setIsMuted(e.detail);
    window.addEventListener("sound_mute_changed" as unknown as keyof WindowEventMap, handleSoundChange as EventListener);
    return () => window.removeEventListener("sound_mute_changed" as unknown as keyof WindowEventMap, handleSoundChange as EventListener);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setIsOpen(false);
    sound.playClick();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -20;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 150);
  }, []);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-hero",
      category: "Navigation",
      title: t.nav.hero,
      subtitle: "Back to the top / Beranda",
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo("hero"),
      keywords: "home beranda hero top",
    },
    {
      id: "nav-about",
      category: "Navigation",
      title: t.nav.about,
      subtitle: "Biography & Background",
      icon: <User className="w-4 h-4 text-sky-400" />,
      action: () => scrollTo("about"),
      keywords: "about me profile bio latar belakang",
    },
    {
      id: "nav-experience",
      category: "Navigation",
      title: t.nav.experience,
      subtitle: "Work experience & career timeline",
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => scrollTo("experience"),
      keywords: "experience pengalaman kerja karir timeline",
    },
    {
      id: "nav-projects",
      category: "Navigation",
      title: t.nav.projects,
      subtitle: "Explore 9 real-world applications",
      icon: <FolderGit2 className="w-4 h-4 text-amber-400" />,
      action: () => scrollTo("projects"),
      keywords: "projects portofolio showcase karya aplikasi",
    },
    {
      id: "nav-skills",
      category: "Navigation",
      title: t.nav.skills,
      subtitle: "Tech stacks & modern tools",
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      action: () => scrollTo("skills"),
      keywords: "skills keahlian tech stack teknologi",
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: t.nav.contact,
      subtitle: "Get in touch & contact form",
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      action: () => scrollTo("contact"),
      keywords: "contact hubungi email pesan form whatsapp",
    },

    // Projects Direct Jump
    {
      id: "proj-agentic-rag",
      category: "Projects",
      title: "Agentic RAG Engine",
      subtitle: "Enterprise Vector Knowledge Retrieval & Multi-Agent RAG",
      icon: <TerminalIcon className="w-4 h-4 text-cyan-400" />,
      action: () => {
        scrollTo("projects");
        window.open("https://agentic-rag-engine.vercel.app/", "_blank");
      },
      keywords: "rag agentic vector pgvector upstash neon claude gemini vercel ai sdk",
    },
    {
      id: "proj-jastip",
      category: "Projects",
      title: "Jastip Pro – Global Personal Shopper",
      subtitle: "Real-time Currency FX & Multi-Region Order Hub",
      icon: <FolderGit2 className="w-4 h-4 text-emerald-400" />,
      action: () => {
        scrollTo("projects");
        window.open("https://jastip-beige.vercel.app", "_blank");
      },
      keywords: "jastip ecommerce personal shopper midtrans currency tracking",
    },
    {
      id: "proj-klasim",
      category: "Projects",
      title: "Klasim – Modern Learning Management System",
      subtitle: "Automated Grading & Interactive Student Analytics",
      icon: <FolderGit2 className="w-4 h-4 text-sky-400" />,
      action: () => {
        scrollTo("projects");
        window.open("https://klasim.vercel.app", "_blank");
      },
      keywords: "klasim lms pendidikan ujian online grading dashboard guru",
    },
    {
      id: "proj-tk",
      category: "Projects",
      title: "TK Cahaya Hati – E-School & Portal",
      subtitle: "School Administration & Parent-Teacher Portal",
      icon: <FolderGit2 className="w-4 h-4 text-pink-400" />,
      action: () => {
        scrollTo("projects");
        window.open("https://tk-cahaya-hati.vercel.app", "_blank");
      },
      keywords: "tk cahaya hati sekolah paud ppdb portal akademik",
    },
    {
      id: "proj-senkuni",
      category: "Projects",
      title: "SenKuni – Strategic AI Chess Engine",
      subtitle: "Intelligent Neural Chess with Stockfish 16 Analysis",
      icon: <FolderGit2 className="w-4 h-4 text-violet-400" />,
      action: () => {
        scrollTo("projects");
        window.open("https://senkuni-chess.vercel.app", "_blank");
      },
      keywords: "senkuni catur chess stockfish ai engine pgn fen",
    },
    {
      id: "proj-sheti",
      category: "Projects",
      title: "SheTI – Sakti HRD & Smart Document OCR",
      subtitle: "Intelligent OCR Automation & HR Administration",
      icon: <FolderGit2 className="w-4 h-4 text-amber-400" />,
      action: () => {
        scrollTo("projects");
        window.open("https://she-ti.vercel.app", "_blank");
      },
      keywords: "sheti ocr hrd surat dinas kuitansi administrasi",
    },
    {
      id: "proj-semarmaca",
      category: "Projects",
      title: "SemarMaca – Smart Legal E-Catalog",
      subtitle: "Legal Assistant AI & Digital Library Repository",
      icon: <FolderGit2 className="w-4 h-4 text-teal-400" />,
      action: () => {
        scrollTo("projects");
        window.open("https://semar-maca.vercel.app", "_blank");
      },
      keywords: "semarmaca hukum legal asistensi perpustakaan repository fh",
    },
    {
      id: "proj-snacky",
      category: "Projects",
      title: "Snacky – Modern Food & Beverage POS",
      subtitle: "Cloud POS & Real-Time Cashier Terminal",
      icon: <FolderGit2 className="w-4 h-4 text-orange-400" />,
      action: () => {
        scrollTo("projects");
        window.open("https://snacky-pi.vercel.app", "_blank");
      },
      keywords: "snacky pos kasir cafe resto makanan f&b",
    },
    {
      id: "proj-myorbit",
      category: "Projects",
      title: "My Orbit – Multi-Tenant SaaS Platform",
      subtitle: "SaaS Management & Multi-Tenant Analytics Engine",
      icon: <FolderGit2 className="w-4 h-4 text-blue-400" />,
      action: () => {
        scrollTo("projects");
        window.open("https://myorbit-omega.vercel.app", "_blank");
      },
      keywords: "my orbit saas multi tenant analytics subscription",
    },

    // Quick Actions
    {
      id: "action-lang",
      category: "Quick Actions",
      title: language === "id" ? "Switch to English (EN)" : "Ubah ke Bahasa Indonesia (ID)",
      subtitle: `Current active language: ${language.toUpperCase()}`,
      icon: <Languages className="w-4 h-4 text-cyan-400" />,
      action: () => {
        setLanguage(language === "id" ? "en" : "id");
        sound.playSuccess();
        setIsOpen(false);
      },
      keywords: "language bahasa english indonesia switch translate",
    },
    {
      id: "action-sound",
      category: "Quick Actions",
      title: isMuted ? "Unmute Audio SFX" : "Mute Audio SFX",
      subtitle: isMuted ? "Turn on futuristic sound effects" : "Mute all synthetic sounds",
      icon: isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />,
      action: () => {
        sound.toggleMute();
      },
      keywords: "sound audio sfx mute unmute efek suara",
    },
    {
      id: "action-cv",
      category: "Quick Actions",
      title: t.about.downloadCv,
      subtitle: "Open/Download Curriculum Vitae (PDF)",
      icon: <Download className="w-4 h-4 text-sky-400" />,
      action: () => {
        window.open("https://drive.google.com/file/d/1_nxG0NW8VHmwFDwsLMWEVERtDNi7ZAC9/view?usp=drive_link", "_blank");
        setIsOpen(false);
      },
      keywords: "cv resume curriculum vitae download unduh pdf",
    },
    {
      id: "action-email",
      category: "Quick Actions",
      title: "Copy Email Address",
      subtitle: "alfiantu@gmail.com",
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      action: () => {
        navigator.clipboard.writeText("alfiantu@gmail.com");
        sound.playSuccess();
        setIsOpen(false);
      },
      keywords: "email copy salin contact surat hubungi",
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const searchTarget = `${cmd.title} ${cmd.subtitle || ""} ${cmd.keywords || ""}`.toLowerCase();
    return searchTarget.includes(query.toLowerCase().trim());
  });

  // Global Keyboard Listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) sound.playModalOpen();
          return !prev;
        });
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle arrows and Enter
  const handleKeyNav = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      sound.playHover();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      sound.playHover();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const current = filteredCommands[selectedIndex];
      if (current) {
        current.action();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <>
      {/* Floating Shortcut Badge in Top Right for Easy Discovery */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={() => {
          sound.playModalOpen();
          setIsOpen(true);
        }}
        className="fixed top-5 right-5 z-40 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-xl border border-slate-800 text-xs font-mono text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 shadow-lg transition-all cursor-pointer group"
        aria-label="Open Command Palette"
      >
        <Search className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
        <span>Search</span>
        <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-slate-300 font-bold">
          Ctrl+K
        </kbd>
      </motion.button>

      {/* AnimatePresence for Modal Backdrop & Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative w-full max-w-xl rounded-3xl bg-[#0e1424] border border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden z-10"
            >
              {/* Search Bar Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800/80 bg-slate-900/50">
                <Search className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                    sound.playCommandKey();
                  }}
                  onKeyDown={handleKeyNav}
                  placeholder={language === "id" ? "Ketik perintah, proyek, atau navigasi..." : "Type a command, project, or navigate..."}
                  className="w-full bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-500 focus:outline-none font-medium"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Commands List */}
              <div
                ref={listRef}
                className="max-h-[60vh] overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40"
              >
                {filteredCommands.length === 0 ? (
                  <div className="py-12 text-center text-slate-500 text-xs sm:text-sm font-mono">
                    {language === "id" ? "Tidak ada hasil yang cocok dengan pencarian" : "No matching commands found"}
                  </div>
                ) : (
                  filteredCommands.map((cmd, idx) => {
                    const isSelected = selectedIndex === idx;

                    return (
                      <div
                        key={cmd.id}
                        data-index={idx}
                        onClick={() => cmd.action()}
                        onMouseEnter={() => {
                          setSelectedIndex(idx);
                          sound.playHover();
                        }}
                        className={`flex items-center justify-between gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-150 ${
                          isSelected
                            ? "bg-gradient-to-r from-cyan-500/15 via-sky-500/10 to-transparent text-white border-l-2 border-cyan-400"
                            : "text-slate-300 hover:bg-slate-850"
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`p-2 rounded-xl border flex-shrink-0 ${
                            isSelected
                              ? "bg-slate-900 border-cyan-500/40 text-cyan-400"
                              : "bg-slate-950/60 border-slate-800 text-slate-400"
                          }`}>
                            {cmd.icon}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-xs sm:text-sm text-slate-100 truncate">
                                {cmd.title}
                              </span>
                              <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-slate-900 border border-slate-800 text-slate-400">
                                {cmd.category}
                              </span>
                            </div>
                            {cmd.subtitle && (
                              <p className="text-[11px] text-slate-400 truncate mt-0.5">
                                {cmd.subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          {cmd.category === "Projects" && (
                            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                          )}
                          {isSelected && (
                            <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Command Palette Footer */}
              <div className="flex items-center justify-between px-5 py-2.5 bg-slate-950/80 border-t border-slate-800/80 text-[10px] sm:text-xs font-mono text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">↑</kbd>
                    <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">↓</kbd>
                    <span>to navigate</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">↵</kbd>
                    <span>to select</span>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">ESC</kbd>
                  <span>to close</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
