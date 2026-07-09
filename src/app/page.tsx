"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import {
  TbArrowDown,
  TbBrandAzure,
  TbBuildingSkyscraper,
  TbBuildingWarehouse,
  TbChartDots,
  TbCloudComputing,
  TbDatabase,
  TbMail,
  TbRobot,
  TbShoppingCart,
  TbTerminal2,
  TbTool,
} from "react-icons/tb";
import {
  SiDocker,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import LogoLoop from "./components/LogoLoop";

const techLogos = [
  { node: <SiReact className="text-fg" />, title: "React" },
  { node: <SiNextdotjs className="text-fg" />, title: "Next.js" },
  { node: <SiTypescript className="text-fg" />, title: "TypeScript" },
  { node: <SiTailwindcss className="text-fg" />, title: "Tailwind CSS" },
  { node: <SiNodedotjs className="text-fg" />, title: "Node.js" },
  { node: <SiPython className="text-fg" />, title: "Python" },
  { node: <SiPostgresql className="text-fg" />, title: "PostgreSQL" },
  { node: <SiJavascript className="text-fg" />, title: "JavaScript" },
  { node: <SiDocker className="text-fg" />, title: "Docker" },
  { node: <SiMongodb className="text-fg" />, title: "MongoDB" },
  { node: <SiGraphql className="text-fg" />, title: "GraphQL" },
];

const work = [
  {
    tag: "AI Agents & Automation",
    icon: TbRobot,
    desc: "Autonomous agents and LLM-driven workflows that handle sales, support and research tasks without a human in the loop.",
    stack: ["Python", "LangChain", "OpenAI", "Vector DBs"],
  },
  {
    tag: "E-Commerce Platforms",
    icon: TbShoppingCart,
    desc: "Storefronts and checkout flows built for conversion — catalog, cart, payments and order management end to end.",
    stack: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
  },
  {
    tag: "Internal Business Tools",
    icon: TbTool,
    desc: "Dashboards and admin panels that replace spreadsheets — built fast, built for the team that actually uses them daily.",
    stack: ["React", "Node.js", "REST APIs"],
  },
  {
    tag: "Python Automation & Scripting",
    icon: TbTerminal2,
    desc: "Scripts and services that remove repetitive manual work — scraping, reporting, forecasting and data cleanup on schedule.",
    stack: ["Python", "Pandas", "Cron", "APIs"],
  },
  {
    tag: "Microsoft Dynamics 365",
    icon: TbBrandAzure,
    desc: "CRM and business-process customisation on D365 — entities, plugins and Power Automate flows tailored to sales operations.",
    stack: ["Dynamics 365", "Power Automate", "Azure"],
  },
  {
    tag: "ERP Systems Integration",
    icon: TbBuildingWarehouse,
    desc: "Connecting inventory, finance and operations systems so data moves in one direction — no more manual reconciliation.",
    stack: ["Oracle SQL", "REST", "SSIS"],
  },
  {
    tag: "Cloud & DevOps Infrastructure",
    icon: TbCloudComputing,
    desc: "Containerised deployments, CI pipelines and monitoring — infrastructure that stays up and ships without drama.",
    stack: ["Docker", "GitHub Actions", "Azure"],
  },
  {
    tag: "Data Pipelines & Analytics",
    icon: TbChartDots,
    desc: "Pipelines that turn raw operational data into dashboards leadership actually reads before making a decision.",
    stack: ["Python", "SQL", "Power BI"],
  },
];

const timeline = [
  {
    period: "2025 — Present",
    tag: "Current",
    title: "IT Specialist — AI/ML & Full-Stack",
    org: "Al-Mahroos Sons & Co.",
    desc: "Leading development of scalable AI tools to automate the sales process. Building web applications with React, Node.js and Oracle SQL.",
    stack: ["Python", "React", "Node.js", "Oracle SQL"],
  },
  {
    period: "2024",
    tag: "",
    title: "System Administrator & Web Handler",
    org: "RJE Technology Pvt. Ltd.",
    desc: "Managed web infrastructure and maintained applications with a focus on performance, uptime and user experience.",
    stack: ["Vue.js", "Python", "MongoDB", "Docker"],
  },
  {
    period: "Jan 2024 — Jul 2024",
    tag: "Internship",
    title: "Software Development Intern",
    org: "Fuzion 5 Technology",
    desc: "Full-stack web development — front-end UI design and back-end API integrations over a 7-month internship.",
    stack: ["React", "Node.js", "JavaScript", "REST APIs"],
  },
  {
    period: "2020 — 2024",
    tag: "Graduated",
    title: "B.Tech — Computer Science Engineering",
    org: "JNTU-Kakinada",
    desc: "Focus on Machine Learning, Data Science and Software Development.",
    stack: ["Python", "ML", "Data Science", "Java"],
  },
];

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "25+", label: "Projects shipped" },
  { value: "100+", label: "Repositories" },
  { value: "8", label: "Domains covered" },
];

const testimonials = [
  {
    name: "Karuchola Lakshmi Sasidhar",
    role: "Cloud & DevOps, F5 Technology Pvt. Ltd",
    quote:
      "Exceptional problem-solving skills and attention to detail. Delivered our project ahead of schedule with outstanding quality.",
  },
  {
    name: "Dhruba Adhikari",
    role: "CTO, Khalti Pvt. Ltd",
    quote:
      "Great communication and technical expertise. The web app performance improved by 40% after optimization.",
  },
  {
    name: "Ram Sharma",
    role: "RJE Technology Pvt. Ltd",
    quote:
      "Innovative solutions and clean code architecture. A valuable team player with excellent collaboration skills.",
  },
];

const friction = [
  "Auth wired up, but no real role-based access control.",
  "A dashboard that looks finished — the data behind it is hardcoded.",
  "An ERP integration that syncs, until the schema changes without warning.",
  "A chatbot demo with no memory, no fallback, no monitoring.",
  "Automation scripts that run once, then quietly rot untouched.",
];

const faqs = [
  {
    q: "What do you actually build?",
    a: "Production systems, not prototypes: AI agents, e-commerce platforms, internal tools, and ERP / Dynamics 365 integrations that stay running after the demo.",
  },
  {
    q: "What's your stack?",
    a: "Python, TypeScript, React/Next.js, Node.js, Oracle SQL/PostgreSQL, Azure. Picked per problem, not out of habit.",
  },
  {
    q: "Do you take freelance or contract work?",
    a: "Yes — alongside my full-time role, scoped by project.",
  },
  {
    q: "How fast can you start?",
    a: "Usually within a week, depending on scope and current workload.",
  },
  {
    q: "Do you work directly with non-technical founders?",
    a: "Yes. I translate business requirements into architecture without burying you in jargon.",
  },
  {
    q: "What's the best way to reach you?",
    a: "Email is fastest — mrchandansharma25@gmail.com.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-xs text-accent tracking-widest">{index}</span>
      <span className="h-px w-10 bg-line" />
      <span className="font-mono text-xs text-fg-dim uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function scrollToId(id: string) {
  gsap.to(window, { duration: 1, scrollTo: id, ease: "power3.inOut" });
}

function Reveal({
  children,
  from = "left",
  className,
  style,
}: {
  children: React.ReactNode;
  from?: "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { x: from === "left" ? -70 : 70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: ref, dependencies: [from] }
  );

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

// Deterministic PRNG (seeded) so server-rendered and client-rendered glitch
// text match exactly — avoids hydration mismatch from Math.random().
function seededRandom(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const GLITCH_CHARS = "01#%&*+=-_/\\<>[]?".split("");

function glitchify(text: string, rand: () => number, density = 0.07) {
  return text
    .split("")
    .map((ch) => (ch !== " " && ch !== "·" && rand() < density ? GLITCH_CHARS[Math.floor(rand() * GLITCH_CHARS.length)] : ch))
    .join("");
}

const spiralRings = [
  { r: 70, size: 10, duration: 45 },
  { r: 120, size: 11, duration: 60 },
  { r: 175, size: 12, duration: 75 },
  { r: 235, size: 13, duration: 95 },
  { r: 300, size: 14, duration: 115 },
];

function SpiralRings({ phrases, className }: { phrases: string[]; className?: string }) {
  return (
    <svg viewBox="-320 -320 640 640" className={className} aria-hidden="true">
      {spiralRings.map((ring, i) => {
        const phrase = phrases[i % phrases.length];
        const rand = seededRandom(7 + i * 13);
        const repeated = glitchify(`${phrase} · `.repeat(8), rand, 0.015);
        return (
          <g
            key={ring.r}
            style={{
              animation: `spin-ring ${ring.duration}s linear infinite ${i % 2 ? "reverse" : ""}`,
            }}
          >
            <path
              id={`spiral-ring-${ring.r}`}
              d={`M ${-ring.r},0 a ${ring.r},${ring.r} 0 1,1 ${ring.r * 2},0 a ${ring.r},${ring.r} 0 1,1 ${-ring.r * 2},0`}
              fill="none"
            />
            <text
              fontSize={ring.size}
              fill="currentColor"
              opacity={0.5 - i * 0.07}
              className="font-mono uppercase"
              style={{ letterSpacing: "0.15em" }}
            >
              <textPath href={`#spiral-ring-${ring.r}`}>{repeated}</textPath>
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function buildGlitchRow(phrase: string, seed: number) {
  return glitchify(`${phrase} · `.repeat(6), seededRandom(seed), 0.03);
}

function reglitchLive(row: string) {
  const chars = row.split("");
  const hits = 3 + Math.floor(Math.random() * 5);
  for (let k = 0; k < hits; k++) {
    const idx = Math.floor(Math.random() * chars.length);
    if (chars[idx] === " " || chars[idx] === "·") continue;
    chars[idx] = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
  }
  return chars.join("");
}

function GlitchBlock({ phrases, className }: { phrases: string[]; className?: string }) {
  const [rows, setRows] = useState(() =>
    Array.from({ length: 90 }, (_, i) => buildGlitchRow(phrases[i % phrases.length], 19 + i))
  );

  useEffect(() => {
    const id = setInterval(() => {
      setRows((prev) => prev.map(reglitchLive));
    }, 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={className} aria-hidden="true">
      {rows.map((row, i) => (
        <div key={i} className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wider leading-[1.9]">
          {row}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-bg text-fg overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[100svh] border-b border-line overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[100svh]">
          {/* LEFT — light panel */}
          <div className="relative bg-cream text-cream-fg flex flex-col justify-center px-6 md:px-14 py-24 md:py-0">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs md:text-sm text-cream-fg/60 tracking-[0.3em] uppercase mb-6"
            >
              Full-Stack &amp; AI Engineer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[13vw] md:text-[5.2vw] leading-[0.95] tracking-tight"
            >
              Chandan
              <br />
              Sharma
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-md text-base md:text-lg text-cream-fg/70 leading-relaxed"
            >
              I build AI agents, e-commerce platforms, internal tools and
              enterprise systems — turning messy business processes into
              software people actually want to use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-14 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] text-cream-fg/60 uppercase tracking-widest"
            >
              <span>Available — Yes</span>
              <span>Based — Remote</span>
              <span>Role — Full-Stack &amp; AI</span>
              <span>Status — Active</span>
            </motion.div>
          </div>

          {/* RIGHT — dark panel with spinning text rings */}
          <div className="relative bg-bg overflow-hidden hidden md:block">
            <div className="noise" />
            <div className="absolute inset-0 flex items-center justify-center">
              <SpiralRings
                phrases={[
                  "SYS://ACTIVE",
                  "AUTOMATION",
                  "0X4F91 BUILD_OK",
                  "AI SYSTEMS",
                  "NODE_ACTIVE",
                  "DEPLOY READY",
                  "PYTHON · REACT · GSAP",
                  "REMOTE · AVAILABLE",
                ]}
                className="w-[130%] h-[130%] text-fg"
              />
            </div>
          </div>
        </div>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("#about");
          }}
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white mix-blend-difference transition-opacity hover:opacity-70 animate-bounce"
        >
          <TbArrowDown className="w-5 h-5" />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 border-b border-line">
        <div className="container mx-auto px-6 md:px-10">
          <Eyebrow index="01" label="About" />
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-start">
            <Reveal
              from="left"
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-line"
            >
              <Image
                src="/images/profile.jpg"
                alt="Chandan Sharma"
                fill
                sizes="224px"
                className="object-cover grayscale"
              />
            </Reveal>
            <Reveal from="right">
              <p className="font-display text-2xl md:text-4xl leading-snug text-fg">
                Three years turning ambiguous requirements into
                <span className="text-accent"> production software</span> —
                across ML, automation and enterprise systems.
              </p>
              <p className="mt-6 text-fg-dim leading-relaxed max-w-2xl">
                I specialise in AI/ML and full-stack development with modern
                Python and JavaScript. Recently I&apos;ve been building agents
                that automate sales workflows, and before that a real-time
                collaboration platform that held up under 100k+ concurrent
                users.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Python", "TypeScript", "React", "Node.js", "Oracle SQL", "Azure"].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 border border-line rounded-full font-mono text-xs text-fg-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FRICTION */}
      <section className="py-24 md:py-32 border-b border-line bg-bg-soft">
        <div className="container mx-auto px-6 md:px-10">
          <Eyebrow index="02" label="The gap" />
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl mb-14 md:mb-16 leading-[1.1]">
            A demo isn&apos;t a product. Most builds stall right there.
          </h2>
          <div className="max-w-2xl border-t border-line">
            {friction.map((line, i) => (
              <Reveal
                key={line}
                from={i % 2 === 0 ? "left" : "right"}
                className="border-b border-line py-5 flex items-start gap-4"
                style={{ marginLeft: i * 22 }}
              >
                <span className="text-accent font-mono text-sm mt-0.5">×</span>
                <p className="text-fg-dim leading-relaxed">{line}</p>
              </Reveal>
            ))}
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="font-display text-xl md:text-2xl mt-10 max-w-xl"
          >
            None of that ships. All of it is what I actually build.
          </motion.p>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 md:py-32 border-b border-line">
        <div className="container mx-auto px-6 md:px-10">
          <Eyebrow index="03" label="Selected work" />
          <motion.h2
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="font-display text-3xl md:text-5xl max-w-2xl mb-16 md:mb-20 flex flex-wrap"
          >
            {"Domains I've shipped in.".split(" ").map((word, i) => (
              <span key={i} className="overflow-hidden mr-[0.28em] pb-1">
                <motion.span
                  variants={{
                    hidden: { y: "110%" },
                    show: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
                  }}
                  className={`inline-block ${i >= 2 ? "shine-text" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <div className="border-t border-line">
            {work.map((item, i) => (
              <Reveal
                key={item.tag}
                from={i % 2 === 0 ? "left" : "right"}
                className="group border-b border-line py-6 md:py-7 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10"
              >
                <span className="font-mono text-xs text-fg-dim w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl w-full md:w-72 shrink-0 group-hover:text-accent transition-colors">
                  {item.tag}
                </h3>
                <p className="text-fg-dim leading-relaxed max-w-lg">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLBOX */}
      <section className="py-20 md:py-28 border-b border-line overflow-hidden">
        <div className="container mx-auto px-6 md:px-10">
          <Eyebrow index="04" label="Toolbox" />
        </div>
        <div className="relative h-20">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={40}
            gap={56}
            pauseOnHover
            fadeOut
            fadeOutColor="#0a0a0b"
            ariaLabel="Technology stack"
          />
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 md:py-32 border-b border-line">
        <div className="container mx-auto px-6 md:px-10">
          <Eyebrow index="05" label="Journey" />
          <div className="max-w-3xl">
            {timeline.map((item, i) => (
              <Reveal
                key={item.title}
                from={i % 2 === 0 ? "left" : "right"}
                className="relative pl-8 pb-12 border-l border-line last:pb-0"
              >
                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-fg-dim uppercase tracking-wide">
                    {item.period}
                  </span>
                  {item.tag && (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-accent-dim text-accent uppercase">
                      {item.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl md:text-2xl">{item.title}</h3>
                <p className="text-sm text-fg-dim mb-3">{item.org}</p>
                <p className="text-fg-dim leading-relaxed max-w-xl">{item.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 border border-line rounded-full font-mono text-xs text-fg-dim"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mt-8">
            {stats.map((s) => (
              <div key={s.label} className="border border-line rounded-2xl p-6">
                <div className="font-display text-3xl text-accent mb-1">{s.value}</div>
                <div className="text-sm text-fg-dim">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 border-b border-line bg-bg-soft">
        <div className="container mx-auto px-6 md:px-10">
          <Eyebrow index="06" label="What people say" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                from={i % 2 === 0 ? "left" : "right"}
                className="border border-line rounded-2xl p-7 bg-bg-card"
              >
                <p className="text-fg leading-relaxed italic mb-6">&quot;{t.quote}&quot;</p>
                <p className="font-mono text-sm text-accent">{t.name}</p>
                <p className="text-xs text-fg-dim mt-1">{t.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 border-b border-line">
        <div className="container mx-auto px-6 md:px-10">
          <Eyebrow index="07" label="Before you reach out" />
          <div className="max-w-2xl border-t border-line">
            {faqs.map((item, i) => (
              <Reveal key={item.q} from={i % 2 === 0 ? "left" : "right"}>
                <details className="group border-b border-line py-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display text-lg md:text-xl">
                    {item.q}
                    <span className="font-mono text-fg-dim text-xl shrink-0 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="text-fg-dim leading-relaxed mt-3 max-w-lg">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
        <GlitchBlock
          phrases={[
            "CHANDAN SHARMA",
            "FULL-STACK DEVELOPER",
            "AI ENGINEER",
            "SHIPPED NOT PROTOTYPED",
            "BUILT WITH NEXT.JS",
            "AVAILABLE FOR WORK",
          ]}
          className="pointer-events-none absolute inset-0 text-fg-dim opacity-[0.18] select-none"
        />
        <div className="relative container mx-auto px-6 md:px-10">
          <Eyebrow index="08" label="Let's build something" />
          <h2 className="font-display text-4xl md:text-7xl max-w-3xl leading-[1.05]">
            Got a system worth automating?
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:mrchandansharma25@gmail.com"
              className="inline-flex rounded-full overflow-hidden border border-accent hover:scale-[1.03] transition-transform"
            >
              <span className="flex items-center gap-2 px-6 py-3.5 bg-accent text-bg font-mono text-sm font-medium">
                <TbMail className="w-4 h-4" /> SAY
              </span>
              <span className="flex items-center px-6 py-3.5 bg-bg-card text-fg font-mono text-sm">
                HELLO
              </span>
            </a>
          </div>

          <div className="mt-24 pt-10 border-t border-line flex flex-col sm:flex-row justify-between items-start gap-10">
            <div className="text-xs text-fg-dim font-mono">
              <p>© {new Date().getFullYear()} Chandan Sharma</p>
              <p className="mt-2 flex items-center gap-2">
                <TbBuildingSkyscraper className="w-3.5 h-3.5" />
                <TbDatabase className="w-3.5 h-3.5" />
                Built with Next.js &amp; GSAP
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:items-end">
              <a
                href="https://github.com/chandan25sharma"
                target="_blank"
                rel="noreferrer"
                className="font-display text-lg text-fg-dim hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chandan-sharma-55558b288"
                target="_blank"
                rel="noreferrer"
                className="font-display text-lg text-fg-dim hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/Chandan38643005"
                target="_blank"
                rel="noreferrer"
                className="font-display text-lg text-fg-dim hover:text-accent transition-colors"
              >
                X / Twitter
              </a>
              <a
                href="mailto:mrchandansharma25@gmail.com"
                className="font-display text-lg text-fg-dim hover:text-accent transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
