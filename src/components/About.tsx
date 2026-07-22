"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "@/lib/data";
import { FiMapPin, FiCode, FiZap, FiTarget, FiCpu } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "2+", label: "Years Experience", icon: <FiCode /> },
  { value: "5+", label: "Projects Delivered", icon: <FiZap /> },
  { value: "AI", label: "Gen · Agentic · RAG", icon: <FiCpu /> },
  { value: "2", label: "International Clients", icon: <FiTarget /> },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax text effect
      gsap.to(parallaxRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Text reveal
      gsap.from(".about-line", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      // Stats counter
      gsap.from(".stat-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
      });

      // Clip path reveal for "big word"
      gsap.from(".clip-about", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.4,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: ".clip-about",
          start: "top 85%",
        },
      });

      // Side vertical line
      gsap.from(".about-vline", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#07070f] to-[#050508]" />
      <div className="absolute right-0 top-1/2 w-px h-3/4 -translate-y-1/2 about-vline bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" />

      <div className="section-padding relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-inter text-[#606078] tracking-[0.3em] uppercase">
            01 / About
          </span>
          <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Big word + description */}
          <div ref={textRef}>
            {/* Parallax background word */}
            <div ref={parallaxRef} className="relative mb-8">
              <div
                className="clip-about absolute -top-8 -left-4 text-[8rem] md:text-[11rem] font-outfit font-black leading-none select-none pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(6,182,212,0.05) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                WHO
              </div>
              <h2 className="about-line relative z-10 font-outfit font-bold text-4xl md:text-5xl text-[#f0f0f8] leading-tight pt-14">
                Behind the{" "}
                <span className="gradient-text">Code</span>
              </h2>
            </div>

            <div className="space-y-5">
              <p className="about-line font-inter text-base md:text-lg text-[#a0a0b8] leading-relaxed">
                I&apos;m{" "}
                <span className="text-[#f0f0f8] font-medium">
                  Abhinaya H. Angaitkar
                </span>
                , an AI full-stack developer based in{" "}
                <span className="text-violet-400">Maharashtra, India</span>.
                I hold a{" "}
                <span className="text-cyan-400 font-medium">
                  PG-DAC (CDAC)
                </span>{" "}
                in Advanced Computing, and I bridge the gap between
                engineering precision and modern development.
              </p>

              <p className="about-line font-inter text-base md:text-lg text-[#a0a0b8] leading-relaxed">
                I&apos;ve built production-grade platforms for international clients:
                a{" "}
                <span className="text-violet-400 font-medium">
                  Dubai-based startup meeting platform
                </span>{" "}
                for GITEX Asia, and an{" "}
                <span className="text-cyan-400 font-medium">
                  aerospace QC system
                </span>
                . Today I focus on the{" "}
                <span className="text-fuchsia-300 font-medium">
                  AI layer
                </span>
                : Generative &amp; Agentic AI, AI agents, and RAG pipelines built with
                OpenAI, LangChain and Azure AI Search, on top of a full-stack foundation in
                C#, ASP.NET, React, Spring Boot and Python.
              </p>

              <p className="about-line font-inter text-base text-[#606078] leading-relaxed">
                Outside of code, I find my headspace in trekking mountain
                trails, sketching ideas, and getting lost in good books. A
                mechanical engineering background gives me a unique lens on
                systems thinking and problem solving.
              </p>
            </div>

            {/* Location badge */}
            <div className="flex items-center gap-2 mt-8 text-sm text-[#606078] font-inter">
              <FiMapPin className="text-violet-400" />
              <span>{personalInfo.location}</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400 ml-2" />
              <span className="text-emerald-400">Open to opportunities</span>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-card glass-card rounded-2xl p-6 group hover:border-violet-500/30 transition-all duration-300"
                style={{
                  border: "1px solid rgba(124,58,237,0.1)",
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(6,182,212,0.04) 100%)",
                }}
              >
                <div className="text-violet-400 mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="font-outfit font-black text-3xl md:text-4xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="font-inter text-xs text-[#606078] uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Interests card */}
            <div
              className="stat-card col-span-2 glass-card rounded-2xl p-6"
              style={{
                border: "1px solid rgba(6,182,212,0.1)",
                background:
                  "linear-gradient(135deg, rgba(6,182,212,0.04) 0%, rgba(124,58,237,0.04) 100%)",
              }}
            >
              <p className="font-inter text-xs text-[#606078] uppercase tracking-widest mb-3">
                Interests & Hobbies
              </p>
              <div className="flex flex-wrap gap-2">
                {["Reading 📚", "Trekking 🏔️", "Sketching ✏️"].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-full bg-[#0d0d1a] border border-violet-500/20 text-sm text-[#a0a0b8] font-inter"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div
              className="stat-card col-span-2 glass-card rounded-2xl p-6"
              style={{
                border: "1px solid rgba(124,58,237,0.1)",
                background: "rgba(13,13,26,0.6)",
              }}
            >
              <p className="font-inter text-xs text-[#606078] uppercase tracking-widest mb-3">
                Languages Spoken
              </p>
              <div className="flex gap-4">
                {["Marathi", "Hindi", "English"].map((lang) => (
                  <span
                    key={lang}
                    className="text-sm text-[#a0a0b8] font-inter"
                  >
                    <span className="text-violet-400">•</span> {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
