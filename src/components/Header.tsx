"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "AI", href: "#ai" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#050508]/90 backdrop-blur-xl border-b border-violet-900/20"
          : "py-6"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        {/* Logo — Full name, no initial box */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="group flex flex-col leading-none"
          whileHover={{ scale: 1.02 }}
        >
          <span
            className="font-outfit font-black text-xl tracking-tight"
            style={{
              background: "linear-gradient(135deg, #f0f0f8 0%, #a78bfa 60%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Abhinaya Angaitkar
          </span>
          <span className="text-[10px] font-inter text-[#606078] tracking-[0.25em] uppercase mt-0.5">
            AI Full-Stack Developer
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              onClick={() => handleNavClick(link.href)}
              className="relative text-sm font-inter text-[#a0a0b8] hover:text-[#f0f0f8] transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-violet-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.button>
          ))}
        </nav>

        {/* Resume CTA */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href={personalInfo.resumeUrl}
            download="Abhinaya_Angaitkar_Resume.pdf"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 }}
            className="relative group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium overflow-hidden"
            style={{ border: "1px solid rgba(124,58,237,0.4)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Shimmer on hover */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(105deg, transparent 30%, rgba(124,58,237,0.15) 50%, transparent 70%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.8s infinite",
              }}
            />
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative gradient-text font-semibold">Resume</span>
            <svg className="relative w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            className="w-6 h-0.5 bg-[#f0f0f8] block"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-[#f0f0f8] block"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            className="w-6 h-0.5 bg-[#f0f0f8] block"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#07070f]/95 backdrop-blur-xl border-t border-violet-900/20"
          >
            <div className="section-padding py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-[#a0a0b8] hover:text-[#f0f0f8] font-inter text-base transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                download="Abhinaya_Angaitkar_Resume.pdf"
                className="gradient-text font-semibold text-base pt-2"
              >
                Download Resume ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
