"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Card {
  title: string;
  color: string;
  content: React.ReactNode;
}

interface CardSwapAdvancedProps {
  cards: Card[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export const CardSwapAdvanced = ({
  cards,
  className = "",
  autoPlay = false,
  interval = 5000,
}: CardSwapAdvancedProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, cards.length]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-96 overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`absolute inset-0 bg-gradient-to-r ${cards[currentIndex].color} text-white p-8 flex flex-col justify-center items-center text-center`}
          >
            <h3 className="text-3xl font-bold mb-6">
              {cards[currentIndex].title}
            </h3>
            <div className="text-white/90">{cards[currentIndex].content}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={prevCard}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextCard}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
