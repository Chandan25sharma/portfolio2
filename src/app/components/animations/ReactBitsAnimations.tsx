"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

interface ShuffleTextProps {
  text: string;
  className?: string;
}

export const ShuffleText = ({ text, className = "" }: ShuffleTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleText = useCallback(() => {
    if (isShuffling) return;

    setIsShuffling(true);
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }

            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsShuffling(false);
      }

      iteration += 1 / 3;
    }, 30);
  }, [text, isShuffling]);

  useEffect(() => {
    const timer = setTimeout(() => {
      shuffleText();
    }, Math.random() * 2000);

    return () => clearTimeout(timer);
  }, [shuffleText]);

  return (
    <span className={`cursor-pointer ${className}`} onMouseEnter={shuffleText}>
      {displayText}
    </span>
  );
};

interface SplashCursorProps {
  children: React.ReactNode;
  className?: string;
}

export const SplashCursor = ({
  children,
  className = "",
}: SplashCursorProps) => {
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-10 h-10 bg-blue-400/30 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
};
