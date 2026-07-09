import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 relative overflow-x-hidden">
      <ParticleBackground />
      <CustomCursor />
      <Preloader />

      <Navbar />

      {/* 1. Beranda */}
      <Hero />

      {/* 2. Tentang Saya */}
      <About />

      {/* 3. Pengalaman Kerja */}
      <Experience />

      {/* 4. Proyek AI */}
      <Projects />

      {/* 5. Keahlian */}
      <Skills />

      {/* 6. Kontak */}
      <Contact />

      <Footer />
    </main>
  );
}