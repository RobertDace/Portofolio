export type Language = "id" | "en";

export interface ProjectTranslation {
  index: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ExperienceTranslation {
  index: string;
  category: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "network" | "media" | "code";
  description: string;
  metrics: { label: string; value: string }[];
  bullets: string[];
  skills: string[];
}

export const translations = {
  id: {
    nav: {
      hero: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      skills: "Keahlian",
      contact: "Kontak",
      backToTop: "Kembali ke atas",
      switchLang: "Ubah ke Bahasa Inggris",
    },
    hero: {
      greeting: "Hi, Saya",
      roles: [
        "Full-Stack Web Developer",
        "AI Systems & Model Integrator",
        "Deterministic Scenario Modeler",
        "Interactive Experience Crafter",
      ],
      bio: "Membangun aplikasi web reaktif yang presisi, interaktif, dan berpusat pada pengalaman pengguna modern serta integrasi sistem kecerdasan buatan cerdas.",
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
      photoCard: {
        location: "Samarinda, Kalimantan Timur",
        caption: "Full-Stack Developer & AI Systems Engineer. Membangun perangkat digital masa depan.",
      },
    },
    about: {
      subHeader: "About the Engineer",
      iAm: "SAYA",
      roleBadge: "FULLSTACK & AI DEVELOPER",
      p1: "Sebagai Full-Stack Developer dan AI Integrator, saya berfokus mengubah kebutuhan sistem dan alur kerja yang kompleks menjadi aplikasi web yang efisien, reaktif, dan modern.",
      p2: "Dari digitalisasi administrasi operasional, integrasi kecerdasan buatan, hingga perancangan arsitektur frontend reaktif, saya menikmati proses membangun solusi digital skala tinggi dari nol yang terukur dan memberikan dampak nyata.",
      downloadCv: "UNDUH CV",
      photoCard: {
        location: "Probolinggo, Jawa Timur",
        caption: "Terobsesi dengan arsitektur bersih, interaksi reaktif, dan model AI cerdas.",
      },
    },
    experience: {
      subHeader: "Career Trajectory",
      title: "Pengalaman",
      titleHighlight: "Kerja.",
      subtitle:
        "Rekam jejak profesional dalam bidang rekayasa sistem web, otomatisasi operasional digital, dan produksi multimedia berstandar industri.",
      items: [
        {
          index: "01",
          category: "Enterprise Infrastructure & Digital Operations",
          role: "Administrative & IT Staff",
          company: "PT. Noreen Surya Perdana",
          period: "2025 – 2026",
          location: "Samarinda, Kalimantan Timur",
          type: "network" as const,
          description:
            "Mengoptimalkan ekosistem teknologi informasi kantor, memimpin digitalisasi dokumen kerja, serta merawat stabilitas jaringan lokal dan keamanan data operasional.",
          metrics: [
            { label: "Uptime", value: "99.9%" },
            { label: "Latency", value: "12ms" },
            { label: "Security", value: "Strict Vault" },
          ],
          bullets: [
            "Mengelola dan mengoptimalkan infrastruktur jaringan lokal internal serta pemeliharaan hardware dan software.",
            "Mendigitalisasi alur pendaftaran, rekrutmen, serta manajemen arsip dokumen kerja agar operasional lebih cepat.",
            "Memberikan dukungan IT support reaktif berkala untuk efisiensi seluruh staf perusahaan.",
          ],
          skills: ["IT Support", "Network Management", "System Admin", "Data Security", "Digital Operations"],
        },
        {
          index: "02",
          category: "Digital Media & Video Direction",
          role: "Digital Content Creator & Visual Editor",
          company: "CEES GANK",
          period: "2024 – Sekarang",
          location: "Remote",
          type: "media" as const,
          description:
            "Merancang konten multimedia berkualitas tinggi dengan alur cerita dinamis, visual modern, dan strategi keterikatan audiens yang terukur.",
          metrics: [
            { label: "Mastering", value: "4K 60fps" },
            { label: "Timeline", value: "Multi-Track" },
            { label: "Color Grading", value: "10-Bit Log" },
          ],
          bullets: [
            "Memproduksi video kreatif bertempo dinamis dan grafis visual berkualitas tinggi untuk platform media digital.",
            "Mengolah aset multimedia kompleks menggunakan Adobe Photoshop, Premiere Pro, dan After Effects.",
            "Menggabungkan estetika visual modern dengan strategi retensi audiens yang konsisten.",
          ],
          skills: ["Adobe Photoshop", "Premiere Pro", "Alight Motion", "CapCut Pro", "Visual Design"],
        },
        {
          index: "03",
          category: "Full-Stack Systems & AI Engineering",
          role: "Fullstack Web & System Engineer",
          company: "Independent Projects & Freelance",
          period: "2023 – Sekarang",
          location: "Remote",
          type: "code" as const,
          description:
            "Merancang, membangun, dan mendeploy aplikasi web full-stack modern dengan integrasi model kecerdasan buatan cerdas dan arsitektur database cloud terukur.",
          metrics: [
            { label: "Framework", value: "Next.js 16" },
            { label: "Inference", value: "Claude & Gemini" },
            { label: "Database", value: "Neon Serverless" },
          ],
          bullets: [
            "Merancang dan mengembangkan aplikasi web reaktif full-stack berbasis Next.js, TypeScript, Supabase, dan Neon DB.",
            "Mengintegrasikan Claude AI dan Gemini API untuk analisis dokumen cerdas dan modeler skenario deterministik.",
            "Menerapkan arsitektur clean code, manajemen state reaktif, dan performa tinggi bebas hambatan.",
          ],
          skills: ["Next.js", "TypeScript", "Tailwind CSS", "Neon DB", "Supabase", "Claude AI", "Gemini AI", "Git"],
        },
      ],
    },
    projects: {
      subHeader: "Selected Works",
      title: "Featured",
      titleHighlight: "Works.",
      subtitle:
        "Kumpulan proyek full-stack, serverless architecture, multi-LLM AI systems, dan pengalaman interaktif.",
      livePreview: "Live Preview",
      modal: {
        desktopTab: "Desktop",
        mobileTab: "Mobile",
        archTab: "Arsitektur",
        openWeb: "Buka Web",
        connecting: "Menghubungkan ke live server...",
        loadingMobile: "Memuat tampilan mobile...",
        archHighlights: "Arsitektur & Fitur Unggulan",
        deployedTech: "Deployed Core Technologies",
        sourceCode: "Source Code di GitHub",
        escHint: "Tekan ESC atau klik area blur untuk menutup",
        closeBtn: "TUTUP [ESC]",
      },
      items: [
        {
          index: "01",
          category: "AGENTIC AI & HYBRID RAG",
          title: "Agentic RAG – Autonomous Knowledge & Vector Engine",
          description:
            "Pipeline Retrieval-Augmented Generation (RAG) agentik skala produksi dengan evaluasi intent dinamis, hybrid vector search via PostgreSQL pgvector & HNSW index, token-bucket rate limiter Upstash Redis, serta streaming jawaban sub-200ms TTFB.",
          highlights: [
            "Agentic Dynamic Routing: Evaluasi threshold kesamaan (≥ 0.70) untuk grounding vektor atau fallback web search real-time (Tavily)",
            "Hybrid Relational & High-Dimensional Vector Embeddings (1536-dim via text-embedding-3-small & pgvector HNSW)",
            "Keandalan produksi dengan validasi skema Zod ketat & rate-limiting token-bucket Upstash Redis",
            "Streaming respon Markdown berkecepatan tinggi sub-200ms TTFB menggunakan Vercel AI SDK over SSE",
          ],
        },
        {
          index: "02",
          category: "LOGISTICS & MULTI-CURRENCY",
          title: "JastipPro – Overseas Personal Shopper & Logistic Suite",
          description:
            "Sistem manajemen logistik dan pembelanjaan jastip luar negeri terpadu dengan multi-trip currency converter (JPY, KRW, SGD, USD), live in-store shopping checklist, kalkulator laba bersih, invoice generator WhatsApp instan, serta monitoring kuota bagasi koper.",
          highlights: [
            "Multi-Currency live conversion (Yen ¥, Won ₩, USD $, SGD S$ ke Rupiah IDR)",
            "Live In-Store Shopping Mode dengan filter per toko (Don Quijote, Olive Young, Ginza)",
            "Automasi Invoice tagihan WhatsApp instan (DP, Pelunasan, Ongkir)",
            "Monitoring berat bagasi koper maskapai (kg) & rekap profit real-time",
          ],
        },
        {
          index: "03",
          category: "DETERMINISTIC SIMULATION",
          title: "Klasim – Esports Telemetry & Scenario Modeler",
          description:
            "Simulator klasemen esports deterministik dan pemodel skenario probabilitas turnamen kompetitif (MPL ID, PMWC, VCT Pacific) dengan generator export instan PDF & Excel.",
          highlights: [
            "Simulasi deterministik tie-breaker (Head-to-Head, Game Difference, Aggression Rate)",
            "Pemodel skenario kelolosan playoff turnamen kualifikasi tier 1",
            "Generator laporan klasemen & statistik matchday otomatis (PDF & Excel)",
            "UI responsif dengan telemetry board ala broadcast esports internasional",
          ],
        },
        {
          index: "04",
          category: "ENTERPRISE ACADEMIC CLOUD",
          title: "TK Cahaya Hati – Integrated Academic Portal",
          description:
            "Portal sistem informasi akademik sekolah terpadu multi-perangkat untuk TK Cahaya Hati yang mencakup manajemen kesiswaan, monitoring absensi, tagihan SPP, dan otentikasi peran terintegrasi.",
          highlights: [
            "Role-Based Access Control (Admin, Guru Kelas, Wali Murid)",
            "Manajemen presensi dan QR Code absensi harian siswa",
            "Sistem billing SPP & invoice pembayaran terpadu",
            "Portal multi-device terenkripsi dengan Clerk Auth",
          ],
        },
        {
          index: "05",
          category: "CHESS ENGINE & MULTI-LLM",
          title: "SenKuni – AI Chess Analyzer & Coach",
          description:
            "Platform analisis posisi catur reaktif yang mengintegrasikan mesin catur Stockfish dengan asisten pelatih berbasis Claude AI & Gemini AI untuk memberikan evaluasi real-time serta panduan strategi bidak secara akurat.",
          highlights: [
            "Integrasi Stockfish 16 Engine untuk kalkulasi kedalaman evaluasi centipawn",
            "Asisten AI Coach (Claude & Gemini AI) yang menjelaskan alasan blunder & taktik langkah",
            "Papan catur interaktif dengan animasi gerak bidak mulus",
            "Analisis PGN & FEN instan dengan visualisasi keunggulan posisi",
          ],
        },
        {
          index: "06",
          category: "INTELLIGENT OCR AUTOMATION",
          title: "SheTI – Sakti HRD & Smart Document OCR",
          description:
            "Alat otomatisasi administrasi perkantoran dan HRD berbasis AI dengan fitur utama pengolah dokumen cerdas, Smart OCR untuk konversi kuitansi ke tabel otomatis, serta generator surat dinas instan.",
          highlights: [
            "Smart OCR: Ekstraksi kuitansi fisik menjadi tabel keuangan digital",
            "Generator Surat Dinas & Dokumen HRD otomatis dalam hitungan detik",
            "Otomatisasi pengarsipan dan validasi kelengkapan berkas karyawan",
            "Integrasi Claude AI & Gemini AI untuk perangkum dokumen cerdas",
          ],
        },
        {
          index: "07",
          category: "LEGAL AI & REPOSITORY",
          title: "SemarMaca – Smart Legal E-Catalog",
          description:
            "Platform smart e-catalog dan repositori hukum digital untuk FH UWGM yang dilengkapi dengan fitur AI legal assistant, sistem audit plagiarisme, pemetaan perpustakaan interaktif, dan QR ticketing.",
          highlights: [
            "AI Legal Assistant untuk pencarian yurisprudensi & pasal undang-undang",
            "Pemetaan denah rak perpustakaan interaktif & pelacak ketersediaan buku",
            "Sistem QR Code peminjaman mandiri & audit plagiasi dokumen tugas akhir",
            "Database repositori jurnal digital terenkripsi",
          ],
        },
        {
          index: "08",
          category: "WEB AUDIO LAB & LO-FI",
          title: "Snacky – Interactive Lo-Fi Audio & Creative Room",
          description:
            "Ruang santai virtual dan pemutar audio lo-fi interaktif dengan rak vinyl berputar, kartu gacha kelinci koleksi, ambient soundscape generator, dan instrumen pad kreatif.",
          highlights: [
            "Pemutar audio lo-fi Web Audio API dengan piringan vinyl berputar dinamis",
            "Generator suara ambient (suara hujan, kafe, api unggun) berlapis",
            "Sistem koleksi kartu gacha kelinci interaktif dengan animasi fisika",
            "Sound pad kreatif untuk eksperimen nada langsung di web",
          ],
        },
        {
          index: "09",
          category: "CREATIVE 3D EXPERIENCES",
          title: "My Orbit – Cosmic Memory Journey & Deck",
          description:
            "Pengalaman web interaktif bertema kosmik dan perjalanan memori personal dengan latar bintang live, modul countdown real-time, dek kartu interaktif, dan pemutar musik terintegrasi.",
          highlights: [
            "Perjalanan kosmik 3D dengan konstelasi bintang reaktif",
            "Dek kartu kenangan interaktif dengan fisika gestur geser",
            "Timer countdown hari penting dengan sinkronisasi zona waktu",
            "Audio player terintegrasi dengan pemutar lirik estetik",
          ],
        },
      ],
    },
    skills: {
      subHeader: "Core Capabilities",
      title: "Tech Stack &",
      titleHighlight: "Expertise.",
      subtitle:
        "Teknologi, serverless database, dan ekosistem AI modern yang saya gunakan untuk merancang dan mendeploy aplikasi web berperforma tinggi.",
    },
    contact: {
      subHeader: "Direct Communication",
      title: "Get In",
      titleHighlight: "Touch.",
      subtitle:
        "Punya ide proyek, pertanyaan, atau ingin mendiskusikan peluang kolaborasi sistem AI dan web? Silakan kirimkan pesan langsung melalui form atau kontak di bawah ini.",
      emailLabel: "EMAIL",
      locationLabel: "LOKASI",
      locationVal: "Probolinggo, Jawa Timur",
      copy: "Salin",
      copied: "Disalin!",
      form: {
        name: "Nama Lengkap",
        email: "Email Anda",
        subject: "Subjek",
        message: "Pesan",
        namePlaceholder: "John Doe",
        emailPlaceholder: "nama@email.com",
        subjectPlaceholder: "Diskusi Proyek Web / Penawaran Kerjasama",
        messagePlaceholder: "Tuliskan detail ide atau pertanyaan Anda di sini...",
        submit: "Kirim Pesan",
        sending: "Memproses Pengiriman...",
        emptyError: "Mohon lengkapi nama, email, dan pesan Anda.",
        emailError: "Format email yang Anda masukkan tidak valid.",
        successMsg: "Aplikasi email Anda dibuka untuk mengirim pesan ini. Terima kasih!",
        note: "Membuka aplikasi email default Anda atau hubungi langsung via WhatsApp di samping.",
      },
    },
    footer: {
      copyright: "© 2026 Alfian Robit. All rights reserved.",
      location: "Samarinda, Indonesia (UTC+8)",
      backToTop: "Kembali ke atas",
    },
    tiltCard: {
      doubleTapHint: "Ketuk 2x untuk Like!",
      savedToast: "Post tersimpan di koleksi",
      removedToast: "Post dihapus dari koleksi",
      saveTitle: "Simpan Post",
      commentTitle: "Tinggalkan pesan di contact form",
      dmTitle: "Kirim DM langsung ke Instagram @alfrbtt",
      viewProfile: "Lihat Profil Instagram @alfrbtt",
    },
  },
  en: {
    nav: {
      hero: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      backToTop: "Back to top",
      switchLang: "Switch to Indonesian",
    },
    hero: {
      greeting: "Hi, I am",
      roles: [
        "Full-Stack Web Developer",
        "AI Systems & Model Integrator",
        "Deterministic Scenario Modeler",
        "Interactive Experience Crafter",
      ],
      bio: "Building precise, interactive, and reactive web applications centered around modern user experiences and intelligent AI system integration.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      photoCard: {
        location: "Samarinda, East Kalimantan",
        caption: "Full-Stack Developer & AI Systems Engineer. Building future-proof digital tools.",
      },
    },
    about: {
      subHeader: "About the Engineer",
      iAm: "I AM",
      roleBadge: "FULLSTACK & AI DEVELOPER",
      p1: "As a Full-Stack Developer and AI Integrator, I specialize in transforming complex workflows and system requirements into efficient, reactive, and modern web applications.",
      p2: "From digitizing enterprise operational workflows, integrating artificial intelligence, to designing reactive frontend architectures, I thrive on building high-scale digital solutions from scratch that deliver tangible real-world impact.",
      downloadCv: "DOWNLOAD CV",
      photoCard: {
        location: "Probolinggo, East Java",
        caption: "Obsessed with clean architecture, reactive interactions, and intelligent AI models.",
      },
    },
    experience: {
      subHeader: "Career Trajectory",
      title: "Work",
      titleHighlight: "Experience.",
      subtitle:
        "Professional track record spanning web system engineering, digital operations automation, and industry-standard multimedia production.",
      items: [
        {
          index: "01",
          category: "Enterprise Infrastructure & Digital Operations",
          role: "Administrative & IT Staff",
          company: "PT. Noreen Surya Perdana",
          period: "2025 – 2026",
          location: "Samarinda, East Kalimantan",
          type: "network" as const,
          description:
            "Optimized corporate IT infrastructure, spearheaded operational document digitization, and maintained local network stability and operational data security.",
          metrics: [
            { label: "Uptime", value: "99.9%" },
            { label: "Latency", value: "12ms" },
            { label: "Security", value: "Strict Vault" },
          ],
          bullets: [
            "Managed and optimized internal local network infrastructure along with comprehensive hardware & software maintenance.",
            "Digitized registration, recruitment, and operational document archiving workflows to accelerate turnaround times.",
            "Delivered proactive IT support ensuring seamless daily productivity across all corporate staff.",
          ],
          skills: ["IT Support", "Network Management", "System Admin", "Data Security", "Digital Operations"],
        },
        {
          index: "02",
          category: "Digital Media & Video Direction",
          role: "Digital Content Creator & Visual Editor",
          company: "CEES GANK",
          period: "2024 – Present",
          location: "Remote",
          type: "media" as const,
          description:
            "Designed high-retention multimedia content with dynamic pacing, modern visual motion, and quantifiable audience engagement strategies.",
          metrics: [
            { label: "Mastering", value: "4K 60fps" },
            { label: "Timeline", value: "Multi-Track" },
            { label: "Color Grading", value: "10-Bit Log" },
          ],
          bullets: [
            "Produced dynamic creative videos and high-fidelity motion graphics tailored for digital media platforms.",
            "Crafted complex multimedia assets leveraging Adobe Photoshop, Premiere Pro, and After Effects.",
            "Synthesized modern visual aesthetics with consistent audience retention strategies.",
          ],
          skills: ["Adobe Photoshop", "Premiere Pro", "Alight Motion", "CapCut Pro", "Visual Design"],
        },
        {
          index: "03",
          category: "Full-Stack Systems & AI Engineering",
          role: "Fullstack Web & System Engineer",
          company: "Independent Projects & Freelance",
          period: "2023 – Present",
          location: "Remote",
          type: "code" as const,
          description:
            "Architecting, developing, and deploying full-stack web applications featuring intelligent AI integrations and scalable cloud database architectures.",
          metrics: [
            { label: "Framework", value: "Next.js 16" },
            { label: "Inference", value: "Claude & Gemini" },
            { label: "Database", value: "Neon Serverless" },
          ],
          bullets: [
            "Architected and deployed modern full-stack reactive applications using Next.js, TypeScript, Supabase, and Neon DB.",
            "Integrated Claude AI and Gemini API for intelligent document analysis and deterministic scenario modeling.",
            "Implemented clean code architecture, reactive state management, and zero-latency UI performance.",
          ],
          skills: ["Next.js", "TypeScript", "Tailwind CSS", "Neon DB", "Supabase", "Claude AI", "Gemini AI", "Git"],
        },
      ],
    },
    projects: {
      subHeader: "Selected Works",
      title: "Featured",
      titleHighlight: "Works.",
      subtitle:
        "A curated showcase of full-stack applications, serverless architectures, multi-LLM AI systems, and interactive experiences.",
      livePreview: "Live Preview",
      modal: {
        desktopTab: "Desktop",
        mobileTab: "Mobile",
        archTab: "Architecture",
        openWeb: "Open Web",
        connecting: "Connecting to live server...",
        loadingMobile: "Loading mobile view...",
        archHighlights: "Architecture & Key Features",
        deployedTech: "Deployed Core Technologies",
        sourceCode: "Source Code on GitHub",
        escHint: "Press ESC or click outside to dismiss",
        closeBtn: "CLOSE [ESC]",
      },
      items: [
        {
          index: "01",
          category: "AGENTIC AI & HYBRID RAG",
          title: "Agentic RAG – Autonomous Knowledge & Vector Engine",
          description:
            "Production-grade Agentic Retrieval-Augmented Generation (RAG) pipeline featuring dynamic intent routing, hybrid vector search via PostgreSQL pgvector & HNSW indexing, Upstash Redis token-bucket rate limiting, and sub-200ms TTFB streaming.",
          highlights: [
            "Agentic Dynamic Routing: Evaluates similarity threshold (≥ 0.70) for vector grounding vs real-time web search fallback (Tavily)",
            "Hybrid Relational & High-Dimensional Vector Embeddings (1536-dim via text-embedding-3-small & pgvector HNSW)",
            "Production-grade resilience with strict Zod validation schemas & Upstash Redis token-bucket rate limiting",
            "High-throughput sub-200ms TTFB Markdown streaming powered by Vercel AI SDK over Server-Sent Events (SSE)",
          ],
        },
        {
          index: "02",
          category: "LOGISTICS & MULTI-CURRENCY",
          title: "JastipPro – Overseas Personal Shopper & Logistic Suite",
          description:
            "Comprehensive overseas personal shopper and logistics management suite with multi-trip currency conversion (JPY, KRW, SGD, USD), live in-store shopping checklist, profit margins calculator, instant WhatsApp invoice generation, and airline baggage allowance tracker.",
          highlights: [
            "Live multi-currency conversion (Yen ¥, Won ₩, USD $, SGD S$ to IDR)",
            "Live in-store shopping mode with brand/store filtering (Don Quijote, Olive Young, Ginza)",
            "Instant automated WhatsApp billing invoices (Down Payment, Settlement, Shipping)",
            "Real-time baggage weight monitoring (kg) & net profit recap",
          ],
        },
        {
          index: "03",
          category: "DETERMINISTIC SIMULATION",
          title: "Klasim – Esports Telemetry & Scenario Modeler",
          description:
            "Deterministic esports standings simulator and competitive tournament probability scenario modeler (MPL ID, PMWC, VCT Pacific) with instant PDF & Excel report export engines.",
          highlights: [
            "Deterministic tie-breaker calculations (Head-to-Head, Game Difference, Aggression Rate)",
            "Tier 1 tournament qualifier & playoff qualification scenario modeling",
            "Automated matchday standings and statistics report generator (PDF & Excel)",
            "Responsive telemetry interface styled after international esports broadcasts",
          ],
        },
        {
          index: "04",
          category: "ENTERPRISE ACADEMIC CLOUD",
          title: "TK Cahaya Hati – Integrated Academic Portal",
          description:
            "Multi-device enterprise school information portal for TK Cahaya Hati covering student lifecycle management, attendance monitoring, tuition fee billing, and integrated role-based authentication.",
          highlights: [
            "Role-Based Access Control (Admins, Class Teachers, Parents)",
            "Student daily attendance tracking and dynamic QR code check-in",
            "Integrated tuition fee billing and automated invoice generator",
            "Encrypted multi-device portal secured via Clerk Auth",
          ],
        },
        {
          index: "05",
          category: "CHESS ENGINE & MULTI-LLM",
          title: "SenKuni – AI Chess Analyzer & Coach",
          description:
            "Reactive chess position analysis platform combining the Stockfish engine with Claude AI & Gemini AI coaching assistants to provide real-time tactical evaluation and grandmaster-level positional guidance.",
          highlights: [
            "Integrated Stockfish 16 engine for centipawn evaluation depth calculations",
            "Multi-LLM AI Coach (Claude & Gemini) breaking down blunders and tactical opportunities",
            "Interactive digital chessboard with ultra-smooth piece animations",
            "Instant PGN & FEN parsing with real-time positional advantage telemetry",
          ],
        },
        {
          index: "06",
          category: "INTELLIGENT OCR AUTOMATION",
          title: "SheTI – Sakti HRD & Smart Document OCR",
          description:
            "AI-powered office administration and HR management automation tool featuring intelligent document parsing, Smart OCR receipt-to-table digitizer, and instant official memo generator.",
          highlights: [
            "Smart OCR: Physical receipt extraction into structured digital financial spreadsheets",
            "Automated official memo and HR document generation in seconds",
            "Employee document archival and compliance verification workflows",
            "Claude AI & Gemini AI integration for intelligent document summarization",
          ],
        },
        {
          index: "07",
          category: "LEGAL AI & REPOSITORY",
          title: "SemarMaca – Smart Legal E-Catalog",
          description:
            "Smart legal e-catalog and digital jurisprudence repository for FH UWGM featuring an AI legal assistant, plagiarism auditing system, interactive library shelf locator, and QR ticketing.",
          highlights: [
            "AI Legal Assistant for jurisprudence lookups and statute retrieval",
            "Interactive physical library shelf blueprint & live book availability tracker",
            "Self-service QR Code borrowing system & thesis plagiarism auditor",
            "Encrypted digital journal repository database",
          ],
        },
        {
          index: "08",
          category: "WEB AUDIO LAB & LO-FI",
          title: "Snacky – Interactive Lo-Fi Audio & Creative Room",
          description:
            "Virtual chill room and interactive lo-fi audio player equipped with spinning vinyl deck, collectible bunny gacha card album, layered ambient soundscape generator, and creative sound pads.",
          highlights: [
            "Web Audio API powered lo-fi player with dynamically spinning vinyl record",
            "Multi-layered ambient audio synthesizer (rain, coffee shop, campfire)",
            "Interactive bunny gacha card collection album with physics-driven animations",
            "Creative sound pad synthesizer for instant in-browser beat making",
          ],
        },
        {
          index: "09",
          category: "CREATIVE 3D EXPERIENCES",
          title: "My Orbit – Cosmic Memory Journey & Deck",
          description:
            "Cosmic-themed interactive web experience and personal memory archive with live starfields, real-time milestone countdowns, interactive gesture cards, and integrated audio playback.",
          highlights: [
            "3D cosmic journey with reactive celestial constellations",
            "Interactive memory card deck featuring physics gesture swipe mechanics",
            "Milestone countdown timers synchronized across timezones",
            "Embedded audio player with synced aesthetic lyrics display",
          ],
        },
      ],
    },
    skills: {
      subHeader: "Core Capabilities",
      title: "Tech Stack &",
      titleHighlight: "Expertise.",
      subtitle:
        "Modern technologies, serverless databases, and AI ecosystems utilized to engineer and deploy high-performance web applications.",
    },
    contact: {
      subHeader: "Direct Communication",
      title: "Get In",
      titleHighlight: "Touch.",
      subtitle:
        "Have a project idea, question, or looking to discuss full-stack web and AI collaboration opportunities? Reach out directly using the form or links below.",
      emailLabel: "EMAIL",
      locationLabel: "LOCATION",
      locationVal: "Probolinggo, East Java, Indonesia",
      copy: "Copy",
      copied: "Copied!",
      form: {
        name: "Full Name",
        email: "Your Email",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "John Doe",
        emailPlaceholder: "name@example.com",
        subjectPlaceholder: "Web Project Discussion / Collaboration Inquiry",
        messagePlaceholder: "Write your project details or inquiries here...",
        submit: "Send Message",
        sending: "Sending Message...",
        emptyError: "Please fill in your name, email, and message.",
        emailError: "The email address provided is not valid.",
        successMsg: "Your default email client has been opened with your message. Thank you!",
        note: "Opens your default email client or reach out directly on WhatsApp.",
      },
    },
    footer: {
      copyright: "© 2026 Alfian Robit. All rights reserved.",
      location: "Samarinda, Indonesia (UTC+8)",
      backToTop: "Back to top",
    },
    tiltCard: {
      doubleTapHint: "Double-tap to Like!",
      savedToast: "Post saved to collection",
      removedToast: "Post removed from collection",
      saveTitle: "Save Post",
      commentTitle: "Leave a message in contact form",
      dmTitle: "Send direct message on Instagram @alfrbtt",
      viewProfile: "View Instagram Profile @alfrbtt",
    },
  },
};

export type Translations = typeof translations.id;

