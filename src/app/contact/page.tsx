"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { FiMail, FiMessageSquare, FiSend, FiUser } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [showRocket, setShowRocket] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Create animated stars background
  const createStars = () => {
    if (!starsRef.current) return;

    const stars = [];
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "absolute w-1 h-1 bg-white rounded-full opacity-70";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";
      star.style.animationDuration = Math.random() * 3 + 2 + "s";
      stars.push(star);
      starsRef.current.appendChild(star);
    }
  };

  const animateStars = () => {
    if (!starsRef.current) return;

    gsap.to(starsRef.current.children, {
      duration: "random(20, 40)",
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      repeat: -1,
      yoyo: true,
      ease: "none",
      stagger: {
        amount: 5,
        from: "random",
      },
    });
  };

  // Initialize animations
  useEffect(() => {
    if (starsRef.current) {
      createStars();
      animateStars();
    }

    // Animate form fields on mount
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const launchRocket = () => {
    setShowRocket(true);

    if (rocketRef.current) {
      gsap.fromTo(
        rocketRef.current,
        {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
        },
        {
          x: window.innerWidth,
          y: -window.innerHeight,
          scale: 0.5,
          rotation: 45,
          duration: 3,
          ease: "power2.out",
          onComplete: () => {
            setShowRocket(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
          },
        }
      );

      // Animate background stars faster during rocket launch
      gsap.to(starsRef.current?.children || [], {
        duration: 0.5,
        scale: 1.5,
        opacity: 1,
        ease: "power2.out",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData(formRef.current!);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const message = formData.get("message");

      if (
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            from_email: email,
            subject,
            message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
      } else {
        console.warn("EmailJS not configured. Simulation mode.");
        await new Promise((r) => setTimeout(r, 1000));
      }

      launchRocket?.(); // if you have animation
      setSubmitStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
    if (audioRef.current) {
      if (isAudioEnabled) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"
          : "bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700"
      }`}
    >
      {/* Animated Stars Background */}
      <div
        ref={starsRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, #1a202c 0%, #000 100%)",
        }}
      />

      {/* Rocket Animation */}
      <AnimatePresence>
        {showRocket && (
          <motion.div
            ref={rocketRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-30 text-6xl"
          ></motion.div>
        )}
      </AnimatePresence>

      <div
        ref={containerRef}
        className="relative z-10 container mx-auto px-6 py-12"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-6 tracking-wider">
            Send a Message into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-950">
              Space
            </span>
          </h1>
          <p className="text-2xl text-blue-200 mb-8 font-light">
            Let&apos;s create something out of this world
          </p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-950 to-blue-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Success Animation */}
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="fixed inset-0 flex items-center justify-center z-40 bg-black/50 backdrop-blur-sm"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 text-center text-white">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-8xl mb-6"
                  >
                    🌟
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-4">
                    Message Sent to Space!
                  </h2>
                  <p className="text-xl text-blue-200">
                    Your message is traveling through the cosmos...
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSubmitStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                      formRef.current?.reset();
                    }}
                    className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-900 to-blue-500 rounded-lg font-semibold"
                  >
                    Send Another Message
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 h-5 w-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 focus:bg-white/15"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 h-5 w-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@galaxy.com"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 focus:bg-white/15"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <FiMessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 h-5 w-5" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Mission Subject"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 focus:bg-white/15"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                <FiMessageSquare className="absolute left-4 top-6 text-cyan-400 h-5 w-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Your message to the cosmos..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 focus:bg-white/15 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,255,255,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-cyan-900 to-blue-900 text-white py-6 px-8 rounded-xl font-bold text-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 relative overflow-hidden"
              >
                {!isSubmitting ? (
                  <>
                    <FiSend className="h-6 w-6" />
                    <span>Message Me through Space</span>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                      opacity: [1, 0],
                      y: [0, -80],
                      x: [0, 80],
                      rotate: [0, 45],
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    className="flex items-center space-x-3 absolute"
                  >
                    <FiSend className="h-6 w-6 text-white" />
                    <span>Launching...</span>
                  </motion.div>
                )}

                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.button>
            </form>

            {/* Footer Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center mt-12 text-blue-200"
            >
              <p className="text-lg">
                Your message will be transmitted through the digital cosmos
              </p>
              <p className="text-sm mt-2 opacity-75">
                Estimated travel time: Instantaneous via quantum entanglement
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
