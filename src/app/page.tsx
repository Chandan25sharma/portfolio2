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
import { CardSwapAdvanced } from "./components/animations/AdvancedAnimations";
import {
  ShuffleText,
  SplashCursor,
} from "./components/animations/ReactBitsAnimations";

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
const projects = [
  {
    title: "Coderspae",
    subtitle: "Real-time Coding Battle Platform",
    description:
      "Interactive competitive coding platform with real-time battles and live spectators.",
    tech: ["Next.js", "Socket.io", "React", "Node.js"],
    liveDemo: "https://coderspae.com",
    details: "/projects/coderspae",
    image: "images/bgimg3.jpg", // add your actual image here
  },
  {
    title: "BlueCollar App",
    subtitle: "Home Services Booking Platform",
    description:
      "On-demand platform connecting users with local professionals for home services.",
    tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "#",
    details: "/projects/bluecollar",
    image: "images/bgimg7.jpg",
  },
  {
    title: "Portfolio Builder SaaS",
    subtitle: "Developer Portfolio Generator",
    description:
      "SaaS platform for developers to generate animated portfolios using templates and AI assistance.",
    tech: ["React", "TailwindCSS", "Node.js", "AI"],
    liveDemo: "#",
    details: "/projects/portfolio-builder",
    image: "images/ecommerce-preview.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Hello, I'm a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
                {" "}
                Chandan Sharma
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Passionate about creating innovative solutions and building
              amazing software experiences with modern technologies and best
              practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I&apos;m a passionate software developer with 3+ years of
                experience building scalable web applications. I specialize in
                ML, DL, AI & full-stack development with modern Python &
                JavaScript frameworks and have a keen eye for creating intuitive
                user experiences.
              </p>
              <p className="text-lg text-gray-600">
                <strong>Standout Achievement:</strong> Built a real-time
                collaboration platform that handles 100,000+ concurrent users
                with 99.9% uptime.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
              >
                Learn More About Me
                <SiGithub className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="flex justify-center">
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

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              <ShuffleText text="Featured Projects" />
            </h2>
            <p className="text-lg text-black">
              Some of my best work that showcases my skills and expertise
            </p>
          </div>

          {/* Interactive Project Showcase */}
          <div className="mt-16 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">
                <ShuffleText text="Project Highlights" />
              </h3>
              <p className="text-black">Interactive showcase of key projects</p>
            </div>

            <CardSwapAdvanced
              cards={[
                {
                  title: "E-commerce Platform",
                  color: "from-black to-gray-800",
                  content: (
                    <div>
                      <p className="text-lg mb-6">
                        Full-stack e-commerce platform with real-time inventory
                        and payment integration.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li>• Real-time inventory management</li>
                        <li>• Secure payment processing</li>
                        <li>• Admin dashboard</li>
                        <li>• Mobile responsive design</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "Team Collaboration App",
                  color: "from-green-900 to-green-700",
                  content: (
                    <div>
                      <p className="text-lg mb-6">
                        Real-time collaboration platform with video calls and
                        document sharing.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li>• Video conferencing</li>
                        <li>• Real-time document editing</li>
                        <li>• Project management tools</li>
                        <li>• Team chat features</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "AI Analytics Dashboard",
                  color: "from-gray-900 to-gray-700",
                  content: (
                    <div>
                      <p className="text-lg mb-6">
                        Machine learning powered analytics dashboard with
                        predictive insights and data visualization.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li>• Predictive analytics</li>
                        <li>• Data visualization charts</li>
                        <li>• ML model integration</li>
                        <li>• Custom report generation</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "AI Image Generation Tool",
                  color: "from-blue-950 to-green-900",
                  content: (
                    <div>
                      <p className="text-lg mb-6">
                        Text-to-image generator built using Stable Diffusion and
                        OpenAI API for creating custom visuals.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li>• Prompt-based image generation</li>
                        <li>• Fine-tuned AI model</li>
                        <li>• Image enhancement & upscaling</li>
                        <li>• Gallery and share features</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "Real-time Service Booking App",
                  color: "from-emerald-900 to-teal-700",
                  content: (
                    <div>
                      <p className="text-lg mb-6">
                        On-demand platform connecting users with local
                        professionals for home services.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li>• Real-time booking and tracking</li>
                        <li>• Integrated payment gateway</li>
                        <li>• Multi-vendor management</li>
                        <li>• Push notifications and ratings</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "AI Code Assistant",
                  color: "from-blue-950 to-cyan-950",
                  content: (
                    <div>
                      <p className="text-lg mb-6">
                        AI-powered code assistant that provides real-time
                        suggestions, debugging help, and code generation.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li>• Context-aware code completion</li>
                        <li>• Debugging and optimization</li>
                        <li>• Support for multiple languages</li>
                        <li>• Chat-based AI interface</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "Realtime Coding Battle Platform",
                  color: "from-slate-900 to-gray-800",
                  content: (
                    <div>
                      <p className="text-lg mb-6">
                        Interactive competitive coding platform with real-time
                        battles and live spectators.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li>• Live coding duels</li>
                        <li>• Socket.io based collaboration</li>
                        <li>• AI challenge generation</li>
                        <li>• Spectator voting system</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "AI Resume Analyzer",
                  color: "from-gray-900 to-gray-600",
                  content: (
                    <div>
                      <p className="text-lg mb-6">
                        NLP-based resume analyzer that scores resumes based on
                        skill relevance and job fit.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li>• Natural language processing</li>
                        <li>• Skill and keyword extraction</li>
                        <li>• AI scoring system</li>
                        <li>• Resume optimization feedback</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "Voice-Controlled Smart Dashboard",
                  color: "from-blue-900 to-gray-700",
                  content: (
                    <div>
                      <p className="text-lg mb-6">
                        Voice-assisted IoT dashboard with AI command recognition
                        and data visualization.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li>• Voice command control</li>
                        <li>• IoT data visualization</li>
                        <li>• Real-time sensor updates</li>
                        <li>• Multi-device sync</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  title: "Portfolio Builder SaaS",
                  color: "from-green-950 to-green-850",
                  content: (
                    <div>
                      <p className="text-lg mb-6">
                        SaaS platform for developers to generate animated
                        portfolios using templates and AI assistance.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li>• Drag-and-drop editor</li>
                        <li>• AI text & image suggestions</li>
                        <li>• Cloud hosting integration</li>
                        <li>• Template customization</li>
                      </ul>
                    </div>
                  ),
                },

                {
                  title: "AI Analytics Dashboard",
                  color: "from-gray-900 to-gray-700",
                  content: (
                    <div>
                      <p className="text-lg mb-6">
                        Machine learning powered analytics with predictive
                        insights.
                      </p>
                      <ul className="space-y-2 text-left">
                        <li>• Predictive analytics</li>
                        <li>• Data visualization</li>
                        <li>• ML model integration</li>
                        <li>• Custom reporting</li>
                      </ul>
                    </div>
                  ),
                },
              ]}
              className="max-w-4xl mx-auto"
              autoPlay={true}
              interval={5000}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <SplashCursor key={index}>
                <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 border border-gray-200">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-black mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={project.details}
                        className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        href={project.liveDemo}
                        className="px-4 py-2 border border-black text-black rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </SplashCursor>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              View All Projects
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
