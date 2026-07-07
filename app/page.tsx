import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19]">
      {/* 1. Halaman Utama */}
      <Hero />
      
      {/* 2. Showcase Proyek */}
      <Projects />

      {/* 3. Matrix Keahlian (About) */}
      <Skills />

      {/* 4. Form Kontak */}
      <Contact />

      {/* 5. Ganjalan bawah & Hak Cipta */}
      <Footer />
    </main>
  );
}