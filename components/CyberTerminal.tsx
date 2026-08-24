"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Maximize2, Minimize2, Copy, Check, Sparkles } from "lucide-react";
import { sound } from "@/utils/sound";
import { useLanguage } from "@/context/LanguageContext";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "system" | "error";
  text: string;
  isHtml?: boolean;
}

export default function CyberTerminal() {
  const { language, t } = useLanguage();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const [copied, setCopied] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);

  const initialLines: TerminalLine[] = [
    {
      id: "init-1",
      type: "system",
      text: "╔════════════════════════════════════════════════════════════════╗",
    },
    {
      id: "init-2",
      type: "system",
      text: "║  2OB1T AGENTIC KERNEL v2.6.4 [AI-ASSISTED ARCHITECTURE CORE]   ║",
    },
    {
      id: "init-3",
      type: "system",
      text: "╚════════════════════════════════════════════════════════════════╝",
    },
    {
      id: "init-4",
      type: "output",
      text: language === "id"
        ? "Ketik 'help' untuk melihat daftar perintah yang tersedia."
        : "Type 'help' to see all available commands.",
    },
  ];

  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const availableCommands = [
    "help",
    "about",
    "projects",
    "skills",
    "ai",
    "contact",
    "cv",
    "time",
    "clear",
    "matrix",
    "sudo",
  ];

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    sound.playCommandKey();

    const inputLine: TerminalLine = {
      id: `in-${Date.now()}`,
      type: "input",
      text: `2ob1t@system:~$ ${cmd}`,
    };

    if (!trimmed) {
      setLines((prev) => [...prev, inputLine]);
      return;
    }

    // Add to command history
    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    let outputLines: TerminalLine[] = [];

    switch (trimmed) {
      case "help":
        outputLines = [
          { id: `out-${Date.now()}-1`, type: "system", text: "AVAILABLE SYSTEM COMMANDS:" },
          { id: `out-${Date.now()}-2`, type: "output", text: "  help      - Display this list of commands" },
          { id: `out-${Date.now()}-3`, type: "output", text: "  about     - View developer profile, bio & core focus" },
          { id: `out-${Date.now()}-4`, type: "output", text: "  projects  - List real-world portfolio applications" },
          { id: `out-${Date.now()}-5`, type: "output", text: "  skills    - Inspect fullstack, database & AI stacks" },
          { id: `out-${Date.now()}-6`, type: "output", text: "  ai        - Show Agentic AI, LLM & RAG architectures" },
          { id: `out-${Date.now()}-7`, type: "output", text: "  contact   - Get direct email, WhatsApp & GitHub" },
          { id: `out-${Date.now()}-8`, type: "output", text: "  cv        - Download official Curriculum Vitae (PDF)" },
          { id: `out-${Date.now()}-9`, type: "output", text: "  time      - Show local time in Jakarta/Samarinda (WIB)" },
          { id: `out-${Date.now()}-10`, type: "output", text: "  matrix    - Toggle interactive Matrix rain mode" },
          { id: `out-${Date.now()}-11`, type: "output", text: "  clear     - Clean the terminal screen" },
        ];
        break;

      case "about":
        outputLines = [
          { id: `out-${Date.now()}-1`, type: "output", text: "ALFIAN ROBIT NADIFI MASYHUDI (2OB1T)" },
          { id: `out-${Date.now()}-2`, type: "output", text: "Role: Full-Stack & AI Engineer" },
          { id: `out-${Date.now()}-3`, type: "output", text: "Location: Indonesia (UTC+07:00 WIB)" },
          { id: `out-${Date.now()}-4`, type: "output", text: "Bio: Engineering resilient web architectures, intelligent agents, and high-performance digital products." },
        ];
        break;

      case "projects":
        outputLines = [
          { id: `out-${Date.now()}-1`, type: "system", text: "PROVEN PRODUCTION PROJECTS [9 TOTAL]:" },
          { id: `out-${Date.now()}-2`, type: "output", text: "  01. [LIVE] Agentic RAG Engine  -> https://agentic-rag-engine.vercel.app/" },
          { id: `out-${Date.now()}-3`, type: "output", text: "  02. [LIVE] Jastip Pro Hub      -> https://jastip-beige.vercel.app" },
          { id: `out-${Date.now()}-4`, type: "output", text: "  03. [LIVE] Klasim LMS          -> https://klasim.vercel.app" },
          { id: `out-${Date.now()}-5`, type: "output", text: "  04. [LIVE] TK Cahaya Hati      -> https://tk-cahaya-hati.vercel.app" },
          { id: `out-${Date.now()}-6`, type: "output", text: "  05. [LIVE] SenKuni AI Chess    -> https://senkuni-chess.vercel.app" },
          { id: `out-${Date.now()}-7`, type: "output", text: "  06. [LIVE] SheTI Smart OCR     -> https://she-ti.vercel.app" },
          { id: `out-${Date.now()}-8`, type: "output", text: "  07. [LIVE] SemarMaca E-Catalog -> https://semar-maca.vercel.app" },
          { id: `out-${Date.now()}-9`, type: "output", text: "  08. [LIVE] Snacky POS Cafe     -> https://snacky-pi.vercel.app" },
          { id: `out-${Date.now()}-10`, type: "output", text: "  09. [LIVE] My Orbit SaaS Hub   -> https://myorbit-omega.vercel.app" },
        ];
        break;

      case "skills":
        outputLines = [
          { id: `out-${Date.now()}-1`, type: "system", text: "ENGINEERING CAPABILITIES & TECH STACK:" },
          { id: `out-${Date.now()}-2`, type: "output", text: "  • Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion" },
          { id: `out-${Date.now()}-3`, type: "output", text: "  • Backend & DB: Node.js, Python, PostgreSQL, Neon DB, Supabase, Prisma ORM" },
          { id: `out-${Date.now()}-4`, type: "output", text: "  • AI & Vector: Claude AI, Gemini AI, Google Antigravity, pgvector, Vercel AI SDK, Upstash" },
          { id: `out-${Date.now()}-5`, type: "output", text: "  • DevOps & Tools: Docker, Git/GitHub, Vercel, VS Code" },
        ];
        break;

      case "ai":
        outputLines = [
          { id: `out-${Date.now()}-1`, type: "system", text: "AGENTIC AI & LLM CAPABILITIES:" },
          { id: `out-${Date.now()}-2`, type: "output", text: "  • Multi-Agent Coordination (Google Antigravity & Autonomous Subagents)" },
          { id: `out-${Date.now()}-3`, type: "output", text: "  • Hybrid Semantic Vector Search (pgvector + Neon PostgreSQL + Upstash Redis)" },
          { id: `out-${Date.now()}-4`, type: "output", text: "  • Multi-Model Routing (Anthropic Claude 3.5 & Google Gemini 2.0 / Flash)" },
          { id: `out-${Date.now()}-5`, type: "output", text: "  • Intelligent Tool Calling, Structured JSON Output & Self-Healing RAG" },
        ];
        break;

      case "contact":
        outputLines = [
          { id: `out-${Date.now()}-1`, type: "output", text: "Email    : alfiantu@gmail.com" },
          { id: `out-${Date.now()}-2`, type: "output", text: "WhatsApp : +62 822-3281-3197" },
          { id: `out-${Date.now()}-3`, type: "output", text: "GitHub   : https://github.com/RobertDace" },
          { id: `out-${Date.now()}-4`, type: "output", text: "Instagram: @alfrbtt" },
        ];
        break;

      case "cv":
        sound.playSuccess();
        window.open("https://drive.google.com/file/d/1_nxG0NW8VHmwFDwsLMWEVERtDNi7ZAC9/view?usp=drive_link", "_blank");
        outputLines = [
          { id: `out-${Date.now()}-1`, type: "output", text: "✓ Curriculum Vitae (PDF) opened in new tab." },
        ];
        break;

      case "time":
        const now = new Date();
        const timeStr = now.toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta", hour12: false });
        const dateStr = now.toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta", dateStyle: "full" });
        outputLines = [
          { id: `out-${Date.now()}-1`, type: "output", text: `Current Server/Local Time: ${timeStr} WIB` },
          { id: `out-${Date.now()}-2`, type: "output", text: `Date: ${dateStr}` },
        ];
        break;

      case "clear":
        setLines([]);
        return;

      case "matrix":
        setMatrixActive((prev) => !prev);
        sound.playSuccess();
        outputLines = [
          {
            id: `out-${Date.now()}-1`,
            type: "system",
            text: matrixActive ? "Matrix mode deactivated." : "Matrix rain visualizer activated. Welcome to the construct.",
          },
        ];
        break;

      case "sudo":
        sound.playSuccess();
        outputLines = [
          { id: `out-${Date.now()}-1`, type: "output", text: "ACCESS GRANTED: User 2OB1T authenticated with Root Superuser clearance." },
        ];
        break;

      default:
        outputLines = [
          {
            id: `out-${Date.now()}-1`,
            type: "error",
            text: `bash: ${trimmed}: command not found. Type 'help' to see available commands.`,
          },
        ];
        break;
    }

    setLines((prev) => [...prev, inputLine, ...outputLines]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = availableCommands.find((c) => c.startsWith(input.toLowerCase().trim()));
      if (match) {
        setInput(match);
      }
    }
  };

  const copyTerminalOutput = () => {
    const raw = lines.map((l) => l.text).join("\n");
    navigator.clipboard.writeText(raw);
    setCopied(true);
    sound.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`w-full transition-all duration-300 ${isMaximized ? "fixed inset-4 z-50 md:inset-12" : "relative"}`}>
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full rounded-[28px] bg-slate-950/90 border border-slate-800/90 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col ${
          isMaximized ? "h-full" : "h-[380px] sm:h-[420px]"
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/80 border-b border-slate-800/80 select-none flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>2ob1t@core-terminal:~ (bash)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {matrixActive && (
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] animate-pulse">
                MATRIX ACTIVE
              </span>
            )}
            <button
              onClick={copyTerminalOutput}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              title="Copy Output"
              aria-label="Copy Terminal Output"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setIsMaximized((prev) => !prev)}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              title={isMaximized ? "Minimize" : "Maximize"}
              aria-label="Toggle Fullscreen Terminal"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Terminal Screen Buffer */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-5 overflow-y-auto font-mono text-xs sm:text-sm space-y-1.5 cursor-text text-left select-text"
        >
          {lines.map((line) => {
            if (line.type === "input") {
              return (
                <div key={line.id} className="text-cyan-400 font-bold">
                  {line.text}
                </div>
              );
            }
            if (line.type === "system") {
              return (
                <div key={line.id} className="text-cyan-300/80 font-semibold tracking-wide">
                  {line.text}
                </div>
              );
            }
            if (line.type === "error") {
              return (
                <div key={line.id} className="text-rose-400">
                  {line.text}
                </div>
              );
            }
            return (
              <div key={line.id} className={matrixActive ? "text-emerald-400" : "text-slate-300"}>
                {line.text}
              </div>
            );
          })}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 font-bold flex-shrink-0">2ob1t@system:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm"
              autoFocus
              spellCheck={false}
            />
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Bottom Shortcuts Bar */}
        <div className="px-5 py-2 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-slate-500 select-none">
          <div className="flex items-center gap-2 overflow-x-auto py-0.5">
            <span className="text-slate-400 font-bold">Quick:</span>
            {["help", "projects", "skills", "ai", "contact"].map((q) => (
              <button
                key={q}
                onClick={() => executeCommand(q)}
                className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>
          <span className="hidden sm:inline text-slate-500">Tab to Autocomplete • ↑↓ for History</span>
        </div>
      </motion.div>
    </div>
  );
}
