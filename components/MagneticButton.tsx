"use client";

import { useState, useRef, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isShaking, setIsShaking] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Kekuatan daya tarik magnet (0.35)
    setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 300);
    if (onClick) onClick();
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{
        x: isShaking ? [0, -6, 6, -4, 4, 0] : position.x,
        y: position.y,
      }}
      transition={
        isShaking
          ? { duration: 0.3 }
          : { type: "spring", stiffness: 200, damping: 15, mass: 0.1 }
      }
      className={`inline-block cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}