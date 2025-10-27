"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowUp, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import {
  SiCodepen,
  SiDribbble,
  SiGithub,
  SiLinkedin,
  SiX,
} from "react-icons/si";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gray-800"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Portfolio
                </h3>
                <p className="text-gray-300 mt-4 max-w-md">
                  A passionate software developer crafting innovative solutions
                  and beautiful digital experiences. Always learning, always
                  building.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <FiMail className="h-4 w-4 text-blue-400" />
                  <span>mrchandansharma25@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FiPhone className="h-4 w-4 text-blue-400" />
                  <span>+977 9704714937</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FiMapPin className="h-4 w-4 text-blue-400" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services & Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Services
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>AI/ML Solutions</li>
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Cloud Computing</li>
                <li>UI/UX Design</li>
                <li>Consulting</li>
              </ul>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="border-t border-gray-800 mt-6 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Social Links */}
              <div className="flex space-x-6 mb-6 md:mb-0">
                <Link
                  href="https://github.com/chandan25sharma"
                  className="text-gray-400 hover:text-white transition-colors group"
                  aria-label="GitHub"
                >
                  <SiGithub className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/chandan-sharma-55558b288"
                  className="text-gray-400 hover:text-blue-400 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="https://twitter.com/Chandan38643005"
                  className="text-gray-400 hover:text-blue-400 transition-colors group"
                  aria-label="Twitter"
                >
                  <SiX className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="https://codepen.io/Chandan25sharma"
                  className="text-gray-400 hover:text-white transition-colors group"
                  aria-label="CodePen"
                >
                  <SiCodepen className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="https://dribbble.com/mrchandansharma25"
                  className="text-gray-400 hover:text-pink-400 transition-colors group"
                  aria-label="Dribbble"
                >
                  <SiDribbble className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-gray-950">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div className="mb-2 md:mb-0">
                © {currentYear} Chandan Sharma. All rights reserved. Built with
                love.
              </div>
              <div className="flex space-x-6">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="hover:text-white transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
