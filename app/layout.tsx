import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://robertdace.vercel.app"),
  title: "2OB1T — Full-Stack Developer & AI Integrator",
  description: "Portofolio karya, sistem reaktif modern, dan pemodel kecerdasan buatan buatan 2OB1T.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "2OB1T — Full-Stack Developer & AI Integrator",
    description: "Portofolio karya, sistem reaktif modern, dan pemodel kecerdasan buatan buatan 2OB1T.",
    siteName: "2OB1T Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2OB1T — Full-Stack Developer & AI Integrator",
    description: "Portofolio karya, sistem reaktif modern, dan pemodel kecerdasan buatan buatan 2OB1T.",
    creator: "@alfrbtt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.className} bg-[#0b0f19] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-300`}
      >
        {children}
      </body>
    </html>
  );
}
