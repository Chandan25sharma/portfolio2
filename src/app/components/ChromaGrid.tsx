"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./ChromaGrid.css";

interface ChromaGridItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient: string;
  url?: string;
  technologies?: string[];
  projectId?: number;
}

interface ChromaGridProps {
  items: ChromaGridItem[];
  className?: string;
  radius?: number;
  columns?: number;
  rows?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
  onItemClick?: (item: ChromaGridItem) => void;
}

export const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  onItemClick,
}: ChromaGridProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setX = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setY = useRef<any>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setX.current = gsap.quickSetter(el, "--x", "px") as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setY.current = gsap.quickSetter(el, "--y", "px") as any;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    if (setX.current) setX.current(pos.current.x);
    if (setY.current) setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        if (setX.current) setX.current(pos.current.x);
        if (setY.current) setY.current(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    if (!rootRef.current) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (item: ChromaGridItem) => {
    if (onItemClick) {
      onItemClick(item);
    } else if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--cols": columns,
          "--rows": rows,
        } as React.CSSProperties
      }
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {items.map((item, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(item)}
          style={
            {
              "--card-border": item.borderColor || "transparent",
              "--card-gradient": item.gradient,
              cursor: item.url ? "pointer" : "default",
            } as React.CSSProperties
          }
        >
          <div className="chroma-img-wrapper">
            <Image
              src={item.image}
              alt={item.title}
              width={270}
              height={200}
              className="project-image"
              style={{ objectFit: "cover" }}
            />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{item.title}</h3>
            {item.handle && <span className="handle">{item.handle}</span>}
            <p className="role">{item.subtitle}</p>
            {item.location && <span className="location">{item.location}</span>}
            {item.technologies && (
              <div className="technologies">
                {item.technologies.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
                {item.technologies.length > 3 && (
                  <span className="tech-tag">
                    +{item.technologies.length - 3}
                  </span>
                )}
              </div>
            )}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
