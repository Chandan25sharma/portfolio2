"use client";

import Link from "next/link";
import {
    SiCodepen,
    SiDocker,
    SiG2,
    SiGit,
    SiGithub,
    SiGraphql,
    SiJavascript,
    SiLinkedin,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiX,
} from "react-icons/si";
import LogoLoop from "./components/LogoLoop";
import { ShuffleText } from "./components/animations/ReactBitsAnimations";

const techLogos = [
  {
    node: <SiReact className="text-blue-500" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs className="text-black" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript className="text-blue-600" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss className="text-cyan-500" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiNodedotjs className="text-green-600" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiPython className="text-blue-500" />,
    title: "Python",
    href: "https://python.org",
  },
  {
    node: <SiPostgresql className="text-blue-700" />,
    title: "PostgreSQL",
    href: "https://postgresql.org",
  },
  {
    node: <SiJavascript className="text-yellow-500" />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiGit className="text-orange-600" />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiDocker className="text-blue-500" />,
    title: "Docker",
    href: "https://docker.com",
  },
  {
    node: <SiMongodb className="text-green-500" />,
    title: "MongoDB",
    href: "https://mongodb.com",
  },
  {
    node: <SiGraphql className="text-pink-500" />,
    title: "GraphQL",
    href: "https://graphql.org",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[60vh] md:min-h-[80vh]">
          <div className="space-y-5 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hello, I&apos;m
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
                Chandan Sharma
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Full-Stack Developer & AI/ML Engineer — building innovative,
              scalable software experiences with modern technologies.
            </p>
            <div className="flex flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/projects"
                className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center text-sm sm:text-base"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="flex-1 sm:flex-none px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Code mockup — hidden on mobile */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-r from-gray-900 to-gray-400 rounded-2xl shadow-2xl">
                <div className="absolute inset-4 bg-gray-900 rounded-xl overflow-hidden">
                  <div className="p-6 space-y-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded animate-pulse"></div>
                      <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded animate-pulse w-1/2"></div>
                      <div className="h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded animate-pulse w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About Me</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                I&apos;m a passionate software developer with 3+ years of
                experience building scalable web applications. I specialize in
                ML, DL, AI &amp; full-stack development with modern Python &amp;
                JavaScript frameworks.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                <strong>Standout Achievement:</strong> Built a real-time
                collaboration platform handling 100k+ concurrent users.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
              >
                Learn More About Me
                <SiGithub className="ml-2 h-4 w-4" />
              </Link>
            </div>
            {/* Avatar hidden on mobile — saves space */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-r from-gray-800 to-blue-800 rounded-full shadow-2xl">
                  <div className="absolute inset-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technologies I Work With
          </h2>
          <div className="relative h-24">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              <ShuffleText text="Experience & Education" />
            </h2>
            <p className="text-lg text-gray-600">
              My academic background and professional journey
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 10.634V17a2 2 0 01-1.105 1.789l-6 3a2 2 0 01-1.79 0l-6-3A2 2 0 013 17v-6.366c0-.417.08-.83.234-1.213L12 14z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black">Education</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-200">
                {/* B.Tech */}
                <div className="mb-8 relative">
                  <div className="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-black border-4 border-white shadow" />
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">2020 – 2024</span>
                      <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full">Graduated</span>
                    </div>
                    <h4 className="text-base font-bold text-black mb-1">
                      B.Tech — Computer Science Engineering
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">JNTU-Kakinada</p>
                    <p className="text-sm text-gray-700">
                      Bachelor of Technology specialising in Computer Science Engineering, with a focus on Machine Learning, Data Science, and Software Development. Graduated in 2024.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Python", "ML", "Data Science", "Java", "C++"].map((s) => (
                        <span key={s} className="px-2 py-0.5 bg-white border border-gray-200 text-gray-700 rounded text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black">Experience</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-200 space-y-8">

                {/* Current Role */}
                <div className="relative">
                  <div className="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-black border-4 border-white shadow" />
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">2025 – Present</span>
                      <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">Current</span>
                    </div>
                    <h4 className="text-base font-bold text-black mb-1">
                      IT Specialist — AI/ML & Full-Stack
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">Al-Mahroos Sons & Co.</p>
                    <p className="text-sm text-gray-700">
                      Leading development of scalable AI tools to automate the sales process. Building web applications using React, Node.js, and Oracle SQL.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Python", "React", "Node.js", "Oracle SQL", "TypeScript"].map((s) => (
                        <span key={s} className="px-2 py-0.5 bg-white border border-gray-200 text-gray-700 rounded text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* System Admin */}
                <div className="relative">
                  <div className="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-white shadow" />
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">2024</span>
                    </div>
                    <h4 className="text-base font-bold text-black mb-1">
                      System Administrator & Web Handler
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">RJE Technology Pvt. Ltd.</p>
                    <p className="text-sm text-gray-700">
                      Managed web infrastructure and maintained applications with a focus on performance, uptime, and user experience.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Vue.js", "Python", "MongoDB", "Docker"].map((s) => (
                        <span key={s} className="px-2 py-0.5 bg-white border border-gray-200 text-gray-700 rounded text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Internship */}
                <div className="relative">
                  <div className="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-white shadow" />
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Jan 2024 – Jul 2024</span>
                      <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">Internship</span>
                    </div>
                    <h4 className="text-base font-bold text-black mb-1">
                      Software Development Intern
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">Fuzion 5 Technology</p>
                    <p className="text-sm text-gray-700">
                      Worked on full-stack web development projects, contributing to front-end UI design and back-end API integrations during a 7-month internship.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["React", "Node.js", "JavaScript", "REST APIs"].map((s) => (
                        <span key={s} className="px-2 py-0.5 bg-white border border-gray-200 text-gray-700 rounded text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Achievement highlight bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "3+", label: "Years of Experience" },
              { value: "25+", label: "Projects Completed" },
              { value: "2024", label: "B.Tech Graduate" },
              { value: "7 mo", label: "Internship Duration" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              View Full Profile
              <SiGithub className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Achievements Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-950 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-300">
              Some stats that showcase my journey and impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <SiG2 className="h-8 w-8 mx-auto mb-4 text-blue-400" />
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <SiGithub className="h-8 w-8 mx-auto mb-4 text-gray-400" />
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-gray-300">GitHub Repositories</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <SiCodepen className="h-8 w-8 mx-auto mb-4 text-black" />
                <div className="text-3xl font-bold mb-2">100k+</div>
                <div className="text-gray-300">Lines of Code</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <SiPython className="h-8 w-8 mx-auto mb-4 text-green-400" />
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <SiReact className="h-8 w-8 mx-auto mb-4 text-purple-400" />
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <SiJavascript className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-gray-300">Cups of Coffee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What People Say
            </h2>
            <p className="text-lg text-gray-600">
              Testimonials from colleagues and clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-900">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    karuchola Lakshmi Sasidhar
                  </h4>
                  <p className="text-sm text-gray-600">
                    Cloud and Devops Enthusiastic, F5 technology pvt.ltd
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;Exceptional problem-solving skills and attention to
                detail. Delivered our project ahead of schedule with outstanding
                quality.&quot;
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-900">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-950 rounded-full flex items-center justify-center text-white font-bold">
                  DA
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    Dhruba Adhikari
                  </h4>
                  <p className="text-sm text-gray-600">
                    Chief Technology Officer, Khalti Pvt.Ltd
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;Great communication and technical expertise. The web app
                performance improved by 40% after optimization.&quot;
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-900">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-950 rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Ram Sharma</h4>
                  <p className="text-sm text-gray-600">
                    RJE technology pvt.ltd
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;Innovative solutions and clean code architecture. A
                valuable team player with excellent collaboration skills.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Ready to bring your ideas to life? I&apos;m available for freelance
            projects, full-time opportunities, and exciting collaborations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <SiMongodb className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>

            <Link
              href="mailto:your.email@example.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Send Email
            </Link>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <Link
              href="https://github.com/chandan25sharma"
              className="text-white/80 hover:text-white transition-colors"
            >
              <SiGithub className="h-8 w-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/chandan-sharma-55558b288"
              className="text-white/80 hover:text-white transition-colors"
            >
              <SiLinkedin className="h-8 w-8" />
            </Link>
            <Link
              href="https://codepen.io/Chandan25sharma"
              className="text-white/80 hover:text-white transition-colors"
            >
              <SiCodepen className="h-8 w-8" />
            </Link>
            <Link
              href="https://twitter.com/Chandan38643005"
              className="text-white/80 hover:text-white transition-colors"
            >
              <SiX className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/about" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  About Me
                </h3>
                <p className="text-gray-600">
                  Learn more about my background, skills, and experience in
                  software development.
                </p>
              </div>
            </Link>

            <Link href="/projects" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Projects
                </h3>
                <p className="text-gray-600">
                  Explore my portfolio of applications, websites, and software
                  solutions.
                </p>
              </div>
            </Link>

            <Link href="/research" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Research
                </h3>
                <p className="text-gray-600">
                  Discover my research interests, publications, and
                  contributions to the tech community.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
