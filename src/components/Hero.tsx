"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { personalInfo } from "@/lib/data";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiDownload,
} from "react-icons/fi";

// Split name into two visual halves for two-tone shimmer effect
const firstHalf = "ABHI".split("");
const secondHalf = "NAYA".split("");
const lastNameChars = "ANGAITKAR".split("");

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── NAME LETTERS: staggered clip rise from below ──────────────────
      gsap.from(".hero-char", {
        y: 140,
        opacity: 0,
        skewY: 8,
        duration: 1.1,
        stagger: 0.065,
        ease: "expo.out",
        delay: 0.2,
      });

      // ── LAST NAME: slide in from left ─────────────────────────────────
      gsap.from(".hero-last-char", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.04,
        ease: "expo.out",
        delay: 0.9,
      });

      // ── ROLE WORDS ────────────────────────────────────────────────────
      gsap.from(".hero-word", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        delay: 1.3,
      });

      // ── CTA BUTTONS ───────────────────────────────────────────────────
      gsap.from(".hero-cta", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.65,
      });

      // ── SOCIAL LINKS ──────────────────────────────────────────────────
      gsap.from(".hero-social", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        delay: 2.0,
      });

      // ── FLOATING ORBS ─────────────────────────────────────────────────
      gsap.to(".orb-1", { x: 35, y: -25, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-2", { x: -25, y: 35, duration: 5.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
      gsap.to(".orb-3", { x: 18, y: 28, duration: 6.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2.2 });

      // ── GEO ART: outer ring slow rotation ─────────────────────────────
      gsap.to(".geo-outer", {
        rotation: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      // ── GEO ART: mid ring counter-rotate ──────────────────────────────
      gsap.to(".geo-mid", {
        rotation: -360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      // ── GEO ART: hexagon pulsing scale ────────────────────────────────
      gsap.to(".geo-hex", {
        scale: 1.08,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ── GEO ART: center glow breathe ──────────────────────────────────
      gsap.to(".geo-glow", {
        opacity: 0.9,
        scale: 1.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      // ── GEO ART: particles orbit ──────────────────────────────────────
      gsap.utils.toArray<HTMLElement>(".geo-particle").forEach((el, i) => {
        gsap.to(el, {
          rotation: 360,
          duration: 6 + i * 0.8,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 150px",
        });
        // Pulse opacity
        gsap.to(el, {
          opacity: 0.2,
          duration: 1.5 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      // ── GEO ART: bracket blink ────────────────────────────────────────
      gsap.to(".geo-bracket", {
        opacity: 0.6,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ── HERO LINES ────────────────────────────────────────────────────
      gsap.from(".hero-line", {
        scaleX: 0,
        duration: 1.8,
        stagger: 0.12,
        ease: "expo.out",
        delay: 0.3,
        transformOrigin: "left",
      });

      // ── BADGE ─────────────────────────────────────────────────────────
      gsap.from(".hero-badge", {
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
    >
      {/* ── BACKGROUNDS ─────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* ── AMBIENT GLOW ORBS ───────────────────────────────────── */}
      <div className="orb-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[140px] pointer-events-none" />
      <div className="orb-2 absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-500/12 blur-[110px] pointer-events-none" />
      <div className="orb-3 absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-violet-500/8 blur-[90px] pointer-events-none" />

      {/* ── HORIZONTAL GRID LINES ───────────────────────────────── */}
      {[20, 40, 60, 80].map((pct) => (
        <div
          key={pct}
          className="hero-line absolute left-0 right-0 h-px"
          style={{
            top: `${pct}%`,
            background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.08), rgba(6,182,212,0.06), transparent)",
          }}
        />
      ))}

      {/* ── GEOMETRIC ART (right side, no photo) ────────────────── */}
      <div className="absolute right-0 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 pointer-events-none 
                      w-[200px] h-[200px] 
                      sm:w-[260px] sm:h-[260px] 
                      md:w-[380px] md:h-[380px] 
                      lg:w-[460px] lg:h-[460px]
                      opacity-70 md:opacity-80
                      flex items-center justify-center">

        {/* Outer slow-rotating dashed ring */}
        <div
          className="geo-outer absolute inset-0 rounded-full"
          style={{ border: "1px dashed rgba(124,58,237,0.25)" }}
        />

        {/* Mid counter-rotating ring */}
        <div
          className="geo-mid absolute inset-[12%] rounded-full"
          style={{ border: "1px solid rgba(6,182,212,0.2)" }}
        />

        {/* Inner ring */}
        <div
          className="absolute inset-[28%] rounded-full"
          style={{
            border: "1px solid rgba(167,139,250,0.15)",
            boxShadow: "0 0 40px rgba(124,58,237,0.1)",
          }}
        />

        {/* Hexagon SVG */}
        <svg viewBox="0 0 200 200" className="geo-hex absolute w-[44%] h-[44%]">
          <defs>
            <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.7">
                <animate attributeName="stopOpacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5">
                <animate attributeName="stopOpacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <linearGradient id="innerHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Outer hex */}
          <polygon
            points="100,12 180,56 180,144 100,188 20,144 20,56"
            fill="url(#hexGrad)"
            stroke="rgba(124,58,237,0.6)"
            strokeWidth="1"
          />
          {/* Inner hex */}
          <polygon
            points="100,42 155,74 155,128 100,158 45,128 45,74"
            fill="none"
            stroke="rgba(6,182,212,0.45)"
            strokeWidth="1"
          />
          {/* Center dot */}
          <circle cx="100" cy="100" r="6" fill="url(#innerHexGrad)">
            <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Center glow */}
        <div
          className="geo-glow absolute w-[25%] h-[25%] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.7) 0%, rgba(6,182,212,0.4) 50%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />

        {/* Orbiting particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="geo-particle absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: i % 2 === 0 ? "#a78bfa" : "#22d3ee",
              top: "50%",
              left: "50%",
              marginTop: "-3px",
              marginLeft: "-3px",
              transformOrigin: `3px ${80 + i * 10}px`,
              boxShadow: `0 0 6px ${i % 2 === 0 ? "#a78bfa" : "#22d3ee"}`,
              opacity: 0.8,
            }}
          />
        ))}

        {/* Code bracket decorations */}
        <div
          className="geo-bracket absolute top-[6%] left-[6%] font-mono text-2xl md:text-4xl select-none"
          style={{ color: "rgba(124,58,237,0.5)" }}
        >
          {`{`}
        </div>
        <div
          className="geo-bracket absolute bottom-[6%] right-[6%] font-mono text-2xl md:text-4xl select-none"
          style={{ color: "rgba(6,182,212,0.5)" }}
        >
          {`}`}
        </div>
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────────────── */}
      <div className="section-padding relative z-10 pt-28 sm:pt-32 pb-20">

        {/* Available badge */}
        <div className="hero-badge inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span className="text-[10px] sm:text-xs font-inter text-[#a0a0b8] tracking-widest uppercase">
            Available for Opportunities
          </span>
        </div>

        {/* ── BIG NAME — ABHINAYA with shimmer ─────────────────── */}
        <div className="overflow-hidden mb-1 sm:mb-2">
          <div className="flex items-end gap-0.5 sm:gap-1 md:gap-2 flex-wrap">
            {/* First half: ABHI — static white shimmer */}
            {firstHalf.map((char, i) => (
              <span
                key={`f-${i}`}
                className="hero-char hero-name-static font-outfit font-black leading-none select-none"
                style={{
                  fontSize: "clamp(3.5rem, 13vw, 10.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {char}
              </span>
            ))}
            {/* Second half: NAYA — violet-to-cyan shimmer */}
            {secondHalf.map((char, i) => (
              <span
                key={`s-${i}`}
                className="hero-char hero-name-shimmer font-outfit font-black leading-none select-none"
                style={{
                  fontSize: "clamp(3.5rem, 13vw, 10.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* ── LAST NAME — ANGAITKAR ─────────────────────────────── */}
        <div className="overflow-hidden mb-5 sm:mb-6">
          <div className="flex items-end gap-0.5 sm:gap-1">
            {lastNameChars.map((char, i) => (
              <span
                key={`l-${i}`}
                className="hero-last-char font-outfit font-light leading-none select-none tracking-[0.08em] sm:tracking-[0.12em] uppercase"
                style={{
                  fontSize: "clamp(1.6rem, 6vw, 4.5rem)",
                  color: "#606078",
                  letterSpacing: "inherit",
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* ── ROLE WORDS ────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-7">
          {["AI", "Full-Stack", "Developer"].map((word, i) => (
            <span
              key={i}
              className="hero-word font-outfit font-medium text-base sm:text-lg md:text-xl text-[#a0a0b8]"
            >
              {word === "AI" ? <span className="gradient-text font-semibold">{word}</span> : word}
              {i < 2 && <span className="ml-2 sm:ml-3 text-violet-500/60">·</span>}
            </span>
          ))}
        </div>

        {/* ── TAGLINE ───────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="font-inter text-sm sm:text-base md:text-lg text-[#606078] max-w-xl mb-8 sm:mb-12 leading-relaxed"
        >
          I build production platforms for{" "}
          <span className="text-violet-400 font-medium">Meeting Platform System</span> &{" "}
          <span className="text-cyan-400 font-medium">Aerospace System</span>, then
          layer intelligence on top with{" "}
          <span className="text-fuchsia-300 font-medium">Generative &amp; Agentic AI</span>,{" "}
          <span className="text-[#a0a0b8]">OpenAI, RAG &amp; Azure AI</span>.
        </motion.p>

        {/* ── CTA BUTTONS ───────────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hero-cta magnetic-btn group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-full overflow-hidden font-outfit font-semibold text-sm sm:text-base text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* shimmer stripe on CTA */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }}
            />
            <span className="relative flex items-center gap-2">
              View My Work
              <FiArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </button>

          <a
            href={personalInfo.resumeUrl}
            download="Abhinaya_Angaitkar_Resume.pdf"
            className="hero-cta magnetic-btn group flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-outfit font-semibold text-sm sm:text-base border border-violet-500/40 text-[#f0f0f8] hover:border-violet-400/70 transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(124,58,237,0.07)" }} />
            <FiDownload className="relative group-hover:translate-y-0.5 transition-transform duration-300 text-cyan-400" />
            <span className="relative">Download Resume</span>
          </a>
        </div>

        {/* ── SOCIAL LINKS ──────────────────────────────────────── */}
        <div className="flex items-center gap-4 sm:gap-6 mt-8 sm:mt-12">
          <span className="hero-social text-[10px] text-[#606078] tracking-widest uppercase font-inter whitespace-nowrap">
            Find me on
          </span>
          <div className="hero-social flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent max-w-12 sm:max-w-16" />
          {[
            { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
            { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hero-social group flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#1a1a2e] hover:border-violet-500/50 text-[#606078] hover:text-violet-400 transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* ── SCROLL INDICATOR ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#606078] tracking-[0.3em] uppercase font-inter">
          Scroll
        </span>
        <div className="w-5 h-9 rounded-full border border-[#1a1a2e] flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-violet-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
