"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Masonry from "../components/Masonry";

// src/data/projects.ts

export interface Project {
  id: string | number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features?: string[];
  githubUrl: string;
  liveUrl: string;
  slug: string;
  category: string;
  status: "completed" | "in-progress";
}

export const projects: Project[] = [
  {
    id: "alungus-ai",
    title: "Alungus AI Web Suite",
    description:
      "An advanced AI web platform for image, video, audio, 3D content generation, and intelligent chatbot interaction.",
    longDescription:
      "A complete web-based AI application featuring powerful content generation tools. Includes Stable Diffusion, AnimateDiff, Bark TTS, MusicGen, and Threestudio, alongside LLM integration via Ollama. Built with Next.js 15 and TypeScript, it offers modern UI, multiple authentication methods, and seamless AI interaction through local or Colab-hosted models.",
    image: "/images/Alungus.jpg",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "NextAuth.js",
      "MongoDB",
      "Ollama",
      "shadcn/ui",
      "Radix UI",
    ],
    features: [
      "Stable Diffusion SDXL for image generation",
      "AnimateDiff and ModelScope for video generation",
      "Bark TTS and MusicGen for audio synthesis",
      "Threestudio for 3D content creation",
      "LLM-powered chatbot with Ollama (LLaMA 3, Mistral, etc.)",
      "Multi-provider authentication (Google, GitHub, X, Outlook)",
      "Email/password login with JWT session handling",
      "Responsive dark/light themed UI",
      "Framer Motion for animation effects",
    ],
    githubUrl: "https://github.com/Chandan25sharma/Alungus-AI",
    liveUrl: "https://alungus-ai.vercel.app/",
    slug: "alungus-ai-platform",
    category: "AI Web Platform",
    status: "completed",
  },
  {
    id: "ecommerce-platform",
    title: "Shoplungu E-commerce",
    description:
      "A modern e-commerce solution with payment integration, inventory management, and admin dashboard.",
    longDescription:
      "A full-featured e-commerce platform built with modern web technologies. Includes user authentication, payment processing, inventory management, and a comprehensive admin dashboard for managing products, orders, and customers.",
    image: "/images/Eshopping.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Supabase",
      "Tailwind CSS",
      "Zustand",
    ],
    features: [
      "Secure payment processing",
      "Inventory management system",
      "User authentication and profiles",
      "Admin dashboard with analytics",
      "Product search and filtering",
      "Order tracking and management",
    ],
    githubUrl: "https://github.com/Chandan25sharma/Shoplungu-E-commerce",
    liveUrl: "https://shoplungu-e-commerce.vercel.app/login",
    slug: "ecommerce-platform",
    category: "E-commerce",
    status: "completed",
  },
  {
    id: "amutec",
    title:
      "Amutec - Complete PDF Tools & AI Resume Analyzer, Image Processing & JSON Converter",
    description:
      "A comprehensive web application for professional PDF editing, file conversion, and AI-powered resume analysis.",
    longDescription:
      "Amutec is a production-ready PDF processing platform built with Next.js 15 that offers a complete suite of tools for editing, converting, annotating, and securing PDF documents. It also includes an AI-powered resume analyzer that provides smart career advice. Designed with a modern UI, batch processing support, and responsive design, it rivals top platforms like SmallPDF and ILovePDF.",
    image: "/images/Amutec.jpg",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Lucide React",
      "PDF-lib",
      "PDF.js",
      "OpenAI API",
    ],
    features: [
      "Merge, split, compress, and repair PDFs",
      "Organize, rotate, and secure PDF pages",
      "Add text, shapes, highlights, and annotations",
      "Convert PDFs to and from Word, Excel, PPT, JPG",
      "Universal converter: PDF ↔ DOCX, XLSX, PPTX, JSON, XML",
      "AI-powered resume analysis with suggestions",
      "Batch file processing",
      "Drag-and-drop uploads with real-time feedback",
      "OCR and text extraction (Premium)",
      "Advanced DPI, quality, and permission settings",
      "Mobile responsive and fully styled with Tailwind",
      "Production-ready API routes for all PDF operations",
    ],
    githubUrl: "https://github.com/Chandan25sharma/Amutec",
    liveUrl: "https://amutec.vercel.app/",
    slug: "amutec-pdf-tools",
    category: "Productivity",
    status: "completed",
  },
  {
    id: "tour-travel-booking",
    title: "Tour & Travel Booking Platform",
    description:
      "A web platform where users can explore, plan, and book their tours and travel destinations with ease.",
    longDescription:
      "An interactive tour and travel management system that allows users to browse destinations, customize tour packages, and make bookings online. The platform supports itinerary planning, online payments, and customer reviews, providing a seamless travel experience.",
    image: "/images/Tour-AndTravel.jpg",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Tailwind CSS",
    ],
    features: [
      "Destination exploration and package customization",
      "Online booking and payment integration",
      "User registration and profile management",
      "Itinerary planning and booking history tracking",
      "Customer reviews and ratings",
      "Responsive and user-friendly design",
    ],
    githubUrl: "https://github.com/Chandan25sharma/Tour-FIxer",
    liveUrl: "https://tour-f-ixer.vercel.app/",
    slug: "tour-travel-booking",
    category: "Web Application",
    status: "completed",
  },
  {
    id: "task-manager",
    title: "Advanced Task Manager",
    description:
      "A full-stack task management app with real-time collaboration, drag-and-drop, and team workspaces.",
    longDescription:
      "A comprehensive project management solution combining modern web technologies to create a powerful and intuitive task management experience.",
    image: "/images/Taskmanager.jpg",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Redux Toolkit",
    ],
    features: [
      "Drag-and-drop task organization",
      "Real-time team collaboration",
      "Custom project templates",
      "Time tracking and analytics",
      "File attachments and comments",
      "Mobile-responsive interface",
    ],
    githubUrl: "https://github.com/Chandan25sharma/Advanced-Task_Manager",
    liveUrl: "https://advanced-task-manager-jade.vercel.app/",
    slug: "task-manager",
    category: "Web Application",
    status: "completed",
  },
  {
    id: "data-visualization",
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for data analysis with real-time charts, filtering capabilities, and export functionality.",
    longDescription:
      "A comprehensive data visualization tool that transforms complex datasets into interactive, meaningful charts and graphs.",
    image: "/images/datavisual.jpg",
    technologies: [
      "React",
      "D3.js",
      "Chart.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
    ],
    features: [
      "Interactive charts and graphs",
      "Real-time data updates",
      "Advanced filtering and search",
      "Multiple export formats",
      "Responsive design",
      "Custom chart configurations",
    ],
    githubUrl: "https://github.com/Chandan25sharma/sales-forecasting",
    liveUrl: "https://sales-forecasting-tau.vercel.app/",
    slug: "data-visualization",
    category: "Data Science",
    status: "completed",
  },
  {
    id: "ai-research-assistant",
    title: "AI-Driven Autonomous Research Assistant",
    description:
      "An AI system designed to autonomously analyze literature, extract knowledge, and generate hypotheses.",
    longDescription:
      "This assistant automates scientific discovery — reading papers, building knowledge graphs, generating hypotheses, and suggesting experiments — using deep learning, symbolic AI, and neuro-symbolic reasoning.",
    image: "/images/AI-research.jpg",
    technologies: [
      "Python",
      "SciBERT",
      "BioBERT",
      "GPT-4o",
      "Neo4j",
      "NetworkX",
      "PDFMiner",
      "PyMuPDF",
      "Reinforcement Learning",
      "Symbolic AI",
    ],
    githubUrl: "https://github.com/Chandan25sharma/AI-RESEARCH-Assistant",
    liveUrl: "https://ai-research-assistant-psi.vercel.app/",
    slug: "ai-research-assistant",
    category: "AI Research Tool",
    status: "in-progress",
  },
  {
    id: "neurosymbolic-ai-framework",
    title: "Neurosymbolic Programming Framework for Explainable AI Agents",
    description:
      "A hybrid AI framework combining neural networks with symbolic reasoning for transparent AI decisions.",
    longDescription:
      "This project merges deep learning with symbolic logic programming to build explainable AI agents capable of both pattern recognition and logical inference.",
    image: "/images/neurosymbolic-framework-preview.jpg",
    technologies: [
      "Python",
      "PyTorch",
      "Prolog Integration",
      "Neuro-Symbolic Reasoning",
      "Knowledge Graph APIs",
    ],
    githubUrl: "https://github.com/Chandan25sharma/Neurosymbolic-agent",
    liveUrl: "https://neurosymbolic-agent.vercel.app/",
    slug: "neurosymbolic-ai-framework",
    category: "AI Framework",
    status: "in-progress",
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Chatbot",
    description:
      "A sophisticated chatbot built with Next.js and OpenAI API, featuring natural language processing and context-aware responses.",
    longDescription:
      "A modern chatbot using OpenAI’s GPT API to provide intelligent, context-aware responses with conversation history and multi-thread support.",
    image: "/images/Aipoerw112.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/yourusername/ai-chatbot",
    liveUrl: "https://ai-chatbot-demo.vercel.app",
    slug: "ai-chatbot",
    category: "AI/ML",
    status: "completed",
  },
];

const categories = [
  "All",
  "Web Application",
  "Mobile App",
  "Analytics",
  "Productivity",
  "Web Design",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Transform projects to ChromaGrid format
  const chromaGridItems = filteredProjects.map((project) => ({
    image: project.image,
    title: project.title,
    subtitle: project.description,
    handle: `#${project.category.toLowerCase().replace(/ /g, "")}`,
    borderColor: getCategoryColor(project.category),
    gradient: getCategoryGradient(project.category),
    url: undefined, // We'll handle clicks internally
    technologies: project.technologies,
    projectId: project.id, // Add project ID for internal handling
  }));

  // Handle ChromaGrid item clicks
  const handleChromaGridClick = (item: { projectId?: number }) => {
    const project = projects.find((p) => p.id === item.projectId);
    if (project) {
      setSelectedProject(project);
    }
  };

  // Masonry gallery items
  const masonryItems = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop",
      url: "https://example-dashboard.com",
      height: 400,
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop",
      url: "https://example-taskmanager.com",
      height: 300,
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=900&fit=crop",
      url: "https://example-ecommerce.com",
      height: 450,
    },
    {
      id: "4",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=750&fit=crop",
      url: "https://example-social.com",
      height: 375,
    },
    {
      id: "5",
      img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=500&fit=crop",
      url: "https://example-portfolio.com",
      height: 250,
    },
    {
      id: "6",
      img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=850&fit=crop",
      url: "https://example-weather.com",
      height: 425,
    },
    {
      id: "7",
      img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=650&fit=crop",
      url: "https://example-dashboard.com",
      height: 325,
    },
    {
      id: "8",
      img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=700&fit=crop",
      url: "https://example-taskmanager.com",
      height: 350,
    },
  ];

  function getCategoryColor(category: string) {
    const colors: { [key: string]: string } = {
      "Web Application": "#3B82F6",
      "Mobile App": "#10B981",
      Analytics: "#F59E0B",
      Productivity: "#EF4444",
      "Web Design": "#8B5CF6",
    };
    return colors[category] || "#6B7280";
  }

  function getCategoryGradient(category: string) {
    const gradients: { [key: string]: string } = {
      "Web Application": "linear-gradient(145deg, #3B82F6, #1E40AF)",
      "Mobile App": "linear-gradient(180deg, #10B981, #047857)",
      Analytics: "linear-gradient(165deg, #F59E0B, #D97706)",
      Productivity: "linear-gradient(195deg, #EF4444, #DC2626)",
      "Web Design": "linear-gradient(225deg, #8B5CF6, #7C3AED)",
    };
    return gradients[category] || "linear-gradient(135deg, #6B7280, #374151)";
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">My Projects</h1>
          <p className="text-[18px] text-gray-600 mb-8">
            A collection of applications and websites I&apos;ve built using
            various technologies
          </p>
          <div className="w-20 h-1 bg-black mx-auto rounded"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-100 text-black hover:bg-gray-200 shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/5 backdrop-blur-sm"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={224}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Masonry Gallery Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black mb-4">
                Project Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore additional project screenshots and design mockups in our
                interactive gallery
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto min-h-[500px] md:min-h-[600px]">
              <Masonry
                items={masonryItems}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={false}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 bg-black radial-gradient">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let&apos;s collaborate to bring your ideas to life. Whether you
                need a complete web application, mobile app, or want to discuss
                cutting-edge research possibilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/research"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Explore Research
                </Link>
              </div>

              <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details Section */}
        <div className="text-center mb-8">
          <p className="text-blue-950">
            Click on any project above to explore its details, or use the
            buttons below to view live demos and source code.
          </p>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="relative bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-fadeIn">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-3xl text-gray-500 hover:text-black"
              >
                ×
              </button>

              {/* Image */}
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-black">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <Link
                    href={selectedProject.liveUrl}
                    target="_blank"
                    className="flex-1 text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={selectedProject.githubUrl}
                    target="_blank"
                    className="flex-1 text-center border border-black text-black py-2 rounded-lg hover:bg-black hover:text-white transition"
                  >
                    Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
