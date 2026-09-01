"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- Hero ---------------- */
const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PrismaHero = () => {
  return (
    <section className="min-h-[100svh] w-full">
      <div className="relative h-[100svh] w-full overflow-hidden rounded-2xl bg-bg md:rounded-[2rem]">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,var(--accent-dim),transparent_55%),radial-gradient(circle_at_85%_75%,var(--accent-dim),transparent_50%)]" />

        {/* Noise texture (shared site utility) */}
        <div className="noise" />

        {/* Bottom scrim for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/90" />

        {/* Navbar */}
        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-b-2xl border border-t-0 border-line bg-bg-card px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] text-fg-dim transition-colors hover:text-accent sm:text-xs md:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 md:px-10 md:pb-10">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-display font-medium leading-[0.85] tracking-[-0.05em] text-fg text-[15vw] sm:text-[12vw] md:text-[7.5vw] lg:text-[6.5vw]">
                <WordsPullUp text="Chandan" />
                <br />
                <WordsPullUp text="Sharma" showAsterisk className="text-accent" />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-5 pb-2 lg:col-span-4 lg:pb-4">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs leading-relaxed text-fg-dim sm:text-sm md:text-base"
              >
                Full-Stack &amp; AI Engineer building agents, e-commerce
                platforms and enterprise systems that ship — not demos that
                stall.
              </motion.p>

              <motion.a
                href="#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 self-start rounded-full bg-accent py-1 pl-5 pr-1 text-sm font-medium text-bg transition-all hover:gap-3 sm:text-base"
              >
                Let&apos;s talk
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4 text-accent" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
