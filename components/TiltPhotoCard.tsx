"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TiltPhotoCardProps {
  src: string;
  alt: string;
  priority?: boolean;
  username?: string;
  location?: string;
  caption?: string;
}

export default function TiltPhotoCard({
  src,
  alt,
  priority = false,
  username = "alfrbtt",
  location = "Samarinda / Probolinggo",
  caption = "Building scalable fullstack systems & AI experiences.",
}: TiltPhotoCardProps) {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(128);
  const [saved, setSaved] = useState(false);
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Mouse Coordinates relative to card center (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Inertial Springs for realistic weight and wobble
  const springConfig = { stiffness: 220, damping: 22, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Rotations
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-12deg", "12deg"]);
  const glareX = useTransform(smoothX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle 280px at ${x} ${y}, rgba(255,255,255,0.18), transparent 75%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggleLike = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLiked((prev) => {
      const next = !prev;
      setLikesCount((c) => (next ? c + 1 : c - 1));
      return next;
    });
  };

  const handleDoubleTap = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!liked) {
      setLiked(true);
      setLikesCount((c) => c + 1);
    }
    setShowHeartBurst(true);
    setTimeout(() => setShowHeartBurst(false), 800);
  };

  const toggleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSaved((prev) => {
      const next = !prev;
      setToastMessage(next ? "Post tersimpan di koleksi" : "Post dihapus dari koleksi");
      setToastMessage(next ? t.tiltCard.savedToast : t.tiltCard.removedToast);
      setTimeout(() => setToastMessage(null), 2000);
      return next;
    });
  };

  const handleCommentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="w-full flex items-center justify-center p-2 touch-pan-y"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.025 }}
        className="relative group w-full max-w-sm sm:max-w-md select-none transform-gpu will-change-transform"
      >
        {/* Soft Ambient Glow Frame */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

        {/* Instagram Post Chassis */}
        <div className="relative rounded-[2rem] bg-slate-900/95 border border-slate-800 group-hover:border-slate-700/80 overflow-hidden shadow-2xl transition-colors duration-300 [transform:translateZ(0px)]">
          
          {/* 1. Header Bar: Profile Ring, Username, Verified, Menu */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-950/60 [transform:translateZ(25px)]">
            <a
              href="https://instagram.com/alfrbtt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 group/user cursor-pointer"
              title={t.tiltCard.viewProfile}
            >
              {/* Instagram Story Gradient Ring */}
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 flex-shrink-0 group-hover/user:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full overflow-hidden relative border-2 border-slate-950 bg-slate-900">
                  <Image
                    src={src}
                    alt={username}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-slate-100 group-hover/user:text-pink-400 transition-colors tracking-tight">
                    {username}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 fill-cyan-400 text-slate-950 inline-block flex-shrink-0" />
                </div>
                <span className="text-[10px] text-slate-400 block leading-tight">
                  {location}
                </span>
              </div>
            </a>

            <a
              href="https://instagram.com/alfrbtt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition-colors p-1"
              aria-label="More options"
              title={t.tiltCard.viewProfile}
            >
              <MoreHorizontal className="w-4 h-4" />
            </a>
          </div>

          {/* 2. Main Photo Feed (Double Tap to Like) */}
          <div
            onDoubleClick={handleDoubleTap}
            className="relative aspect-[4/4.5] sm:aspect-[4/4.8] w-full overflow-hidden bg-slate-950 flex items-center justify-center cursor-pointer"
            title={t.tiltCard.doubleTapHint}
          >
            <div className="relative w-full h-full [transform:translateZ(20px)] transition-transform duration-300">
              <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover"
              />
            </div>

            {/* Specular Interactive Sheen */}
            <motion.div
              style={{ background: glareBackground }}
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay z-20"
            />

            {/* Floating Heart Animation on Double Click */}
            <AnimatePresence>
              {showHeartBurst && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.3, opacity: 1 }}
                  exit={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute z-30 pointer-events-none drop-shadow-2xl"
                >
                  <Heart className="w-20 h-20 fill-rose-500 text-rose-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Instagram Action Bar: Heart, Comment, Direct DM, Bookmark */}
          <div className="px-4 pt-3 pb-3.5 space-y-2 bg-slate-950/60 [transform:translateZ(25px)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                
                {/* Like Button */}
                <button
                  type="button"
                  onClick={toggleLike}
                  className="transition-transform active:scale-125 focus:outline-none cursor-pointer"
                  aria-label="Like"
                  title="Like post"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      liked
                        ? "fill-rose-500 text-rose-500"
                        : "text-slate-300 hover:text-rose-400"
                    }`}
                  />
                </button>

                {/* Comment Button (Scroll to Contact Form) */}
                <button
                  type="button"
                  onClick={handleCommentClick}
                  className="text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  aria-label="Comment & Message"
                  title={t.tiltCard.commentTitle}
                >
                  <MessageCircle className="w-5 h-5" />
                </button>

                {/* DM Button: Langsung ke Direct Message Instagram @alfrbtt */}
                <a
                  href="https://ig.me/m/alfrbtt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-all hover:scale-110 active:scale-95 cursor-pointer block"
                  aria-label="Direct Message Instagram"
                  title={t.tiltCard.dmTitle}
                >
                  <Send className="w-4 h-4 -rotate-12" />
                </a>

              </div>

              {/* Bookmark Button */}
              <button
                type="button"
                onClick={toggleSave}
                className={`transition-colors cursor-pointer active:scale-110 ${
                  saved ? "text-amber-400 fill-amber-400" : "text-slate-300 hover:text-amber-400"
                }`}
                aria-label="Simpan Post"
                title={t.tiltCard.saveTitle}
              >
                <Bookmark className={`w-5 h-5 ${saved ? "fill-amber-400" : ""}`} />
              </button>
            </div>

            {/* Likes count & caption */}
            <div className="space-y-1 text-left">
              <p className="text-xs font-bold text-slate-100">
                {likesCount} likes
              </p>
              <p className="text-xs text-slate-300 leading-snug line-clamp-2">
                <span className="font-bold text-slate-100 mr-1.5">{username}</span>
                {caption}
              </p>
            </div>

            {/* Toast Feedback Notification */}
            <AnimatePresence>
              {toastMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-[11px] font-medium text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-500/30 text-center"
                >
                  {toastMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
