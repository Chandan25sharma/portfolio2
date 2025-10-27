"use client";

import Link from "next/link";
import {
  FiBook,
  FiBriefcase,
  FiCamera,
  FiCode,
  FiHeart,
  FiMail,
  FiMonitor,
  FiMusic,
  FiPenTool,
} from "react-icons/fi";
import {
  SiDocker,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import FlowingMenu from "../components/FlowingMenu";
import ProfileCard from "../components/ProfileCard";

const About = () => {
  const timelineItems = [
    {
      link: "#",
      text: "2025 - It specializes - Ai/Ml & Full-Stack Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    },
    {
      link: "#",
      text: "2024 - System Administrator & Web Handler",
      image:
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop",
    },

    {
      link: "#",
      text: "2020 - 2024  : Bachelor Degree in Computer Science",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
    },
  ];

  const timelineData = [
    {
      year: "2025",
      title: "IT Specializes - AI/ML & Full-Stack Development",
      company: "Al-Mahroos sons & co.",
      type: "work",
      description:
        "Leading development of scalable AI-tools to automate the sales process in web applications using React, Node.js, and Oracle SQL.",
      skills: ["Python", "SQL", "React", "Node.js", "TypeScript"],
    },
    {
      year: "2024",
      title: "2024 - System Administrator & Web Handler",
      company: "RJE Technology Pvt. Ltd.",
      type: "work",
      description:
        "Built and maintained Web applications, focusing on performance optimization and user experience.",
      skills: ["Vue.js", "Python", "MongoDB", "Docker"],
    },

    {
      year: "2020",
      title: "2020 - 2024  : Bachelor Degree in Computer Science",
      company: "JNTU-Kakinada",
      type: "education",
      description:
        "Computer Science Engineering with a focus on ML and Software Development.",
      skills: ["Python", "Machine Learning", "Data Science", "JavaScript"],
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-blue-500", level: 95 },
        { name: "Next.js", icon: SiNextdotjs, color: "text-black", level: 90 },
        {
          name: "TypeScript",
          icon: SiTypescript,
          color: "text-blue-600",
          level: 88,
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "text-cyan-500",
          level: 92,
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "text-yellow-500",
          level: 94,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: SiNodedotjs,
          color: "text-green-600",
          level: 87,
        },
        { name: "Python", icon: SiPython, color: "text-blue-500", level: 85 },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          color: "text-blue-700",
          level: 82,
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "text-green-500",
          level: 80,
        },
        { name: "SQL", icon: SiOracle, color: "text-gray-700", level: 84 },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: SiGit, color: "text-orange-600", level: 90 },
        { name: "Docker", icon: SiDocker, color: "text-blue-500", level: 78 },
        { name: "Figma", icon: SiFigma, color: "text-purple-500", level: 75 },
      ],
    },
  ];

  const hobbies = [
    {
      name: "Coding Side Projects",
      icon: FiCode,
      description: "Building fun apps and experimenting with new tech",
    },
    {
      name: "Animating",
      icon: FiPenTool,
      description: "Bringing illustrations to life",
    },
    {
      name: "Gaming",
      icon: FiMonitor,
      description: "Strategy games and indie titles",
    },
    {
      name: "Music",
      icon: FiMusic,
      description: "Playing guitar and producing electronic music",
    },
    {
      name: "Photography",
      icon: FiCamera,
      description: "Capturing moments and urban landscapes",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-white relative z-30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-black mb-6">
              About <span className="text-black">Me</span>
            </h1>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Discover my journey, passion, and the story behind the code
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-20 relative z-30">
            <div className="lg:col-span-1">
              <ProfileCard
                name="Chandan Sharma"
                title="Software Developer"
                handle="chandan25sharma"
                status="Available for work"
                contactText="Get In Touch"
                avatarUrl="https://i.postimg.cc/tCqwvn7V/Chat-GPT-Image-Aug-3-2025-05-53-07-PM.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => (window.location.href = "/contact")}
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-black mb-6">My Story</h3>
                <div className="prose prose-lg text-black space-y-4">
                  <p>
                    Hey there! I&apos;m a passionate software developer who
                    believes in the power of code to transform ideas into
                    reality. My journey in tech started during university, where
                    I discovered the perfect blend of creativity and logic that
                    programming offers.
                  </p>
                  <p>
                    With over 3 years of professional experience, I&apos;ve had
                    the privilege of working with diverse teams and
                    technologies, from startups to established companies. I
                    specialize in AI Tools/ ML & full-stack development with a
                    focus on Python, Java & React, Node.js, and modern web
                    technologies.
                  </p>
                  <p>
                    What drives me is the constant opportunity to learn and
                    solve complex problems. Whether it&apos;s optimizing
                    database queries, making AI tools and machine learning to
                    make data-driven decisions, crafting intuitive user
                    interfaces, or architecting scalable systems, I approach
                    each challenge with curiosity and determination.
                  </p>
                  <blockquote className="border-l-4 border-black pl-4 italic text-black">
                    &quot;I don&apos;t just write code; I craft digital
                    experiences that make a difference.&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-10 bg-white relative z-10">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">My Journey</h2>
            <p className="text-lg text-black">
              From student to professional developer - hover to explore each
              milestone
            </p>
          </div>

          <div
            className="max-w-7xl mx-auto"
            style={{
              height: "600px",
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <FlowingMenu items={timelineItems} />
          </div>

          {/* Timeline Details Cards */}
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-20">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-300 relative z-20"
              >
                <div className="flex items-center space-x-2 mb-3">
                  {item.type === "work" ? (
                    <FiBriefcase className="h-5 w-5 text-black" />
                  ) : (
                    <FiBook className="h-5 w-5 text-black" />
                  )}
                  <span className="text-sm font-semibold text-black">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-black font-medium mb-3">{item.company}</p>
                <p className="text-black text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 text-black rounded text-xs border border-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 bg-white relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-black">
              Technologies I work with and love
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-xl font-bold text-black mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={skillIndex} className="skill-item">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <IconComponent className="h-6 w-6 text-green-500" />
                            <span className="font-medium text-black">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-black">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-black transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies & Fun Facts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Beyond the Code
            </h2>
            <p className="text-lg text-black">
              What I do when I&apos;m not coding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gray-200 rounded-2xl p-8 mb-4 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="h-12 w-12 text-black mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {hobby.name}
                  </h3>
                  <p className="text-black text-sm">{hobby.description}</p>
                </div>
              );
            })}
          </div>

          {/* Fun Quote */}
          <div className="text-center mt-16">
            <div className="bg-gray-100 rounded-2xl p-8 max-w-2xl mx-auto">
              <FiHeart className="h-8 w-8 text-black mx-auto mb-4" />
              <blockquote className="text-xl font-medium text-black mb-4">
                &quot;I love turning coffee into code and ideas into reality.
                When I&apos;m not debugging, you&apos;ll find me exploring new
                technologies or jamming on my guitar.&quot;
              </blockquote>
              <p className="text-black font-medium">
                — That&apos;s me in a nutshell!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 text-black">
            Ready to turn your ideas into reality?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              <FiMail className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
