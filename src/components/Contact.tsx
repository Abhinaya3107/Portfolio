"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "@/lib/data";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    icon: FiGithub,
    href: personalInfo.github,
    label: "GitHub",
    username: "@Abhinaya3107",
    color: "#f0f0f8",
  },
  {
    icon: FiLinkedin,
    href: personalInfo.linkedin,
    label: "LinkedIn",
    username: "abhinaya-angaitkar",
    color: "#0a66c2",
  },
  {
    icon: FiMail,
    href: `mailto:${personalInfo.email}`,
    label: "Email",
    username: personalInfo.email,
    color: "#7c3aed",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.6,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".contact-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
        },
      });

      gsap.from(".contact-info-item", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 85%",
        },
      });

      // Large glow text
      gsap.to(".contact-bg-word", {
        x: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Parallax background text */}
      <div
        className="contact-bg-word absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-outfit font-black text-[15vw] whitespace-nowrap select-none pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(6,182,212,0.03) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        CONNECT
      </div>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-violet-700/10 blur-[120px] pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-inter text-[#606078] tracking-[0.3em] uppercase">
            07 / Contact
          </span>
          <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
        </div>

        {/* Big title */}
        <div className="mb-16">
          <h2
            className="contact-title font-outfit font-black text-5xl md:text-7xl xl:text-8xl text-[#f0f0f8] leading-none mb-6"
            style={{ clipPath: "inset(0 0% 0 0)" }}
          >
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="font-inter text-base md:text-lg text-[#606078] max-w-lg">
            Currently open to new opportunities. Whether you&apos;re building
            something interesting or just want to say hello, my inbox is
            always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Social cards */}
          <div className="contact-grid space-y-4">
            {socialLinks.map(({ icon: Icon, href, label, username, color }, i) => (
              <a
                key={i}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-card group flex items-center gap-5 p-5 rounded-2xl border border-[#1a1a2e] hover:border-violet-500/30 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(13,13,26,0.9) 0%, rgba(7,7,15,0.8) 100%)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#1a1a2e] group-hover:border-violet-500/30 transition-colors"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-outfit font-semibold text-[#f0f0f8] text-sm mb-0.5">
                    {label}
                  </p>
                  <p className="font-inter text-xs text-[#606078] truncate">
                    {username}
                  </p>
                </div>
                <div className="text-[#606078] group-hover:text-violet-400 transition-colors flex-shrink-0">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Right: Info + resume */}
          <div>
            <div className="contact-info space-y-4 mb-8">
              <div className="contact-info-item flex items-center gap-3 text-sm font-inter text-[#a0a0b8]">
                <FiMapPin className="text-violet-400 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="contact-info-item flex items-center gap-3 text-sm font-inter text-[#a0a0b8]">
                <FiPhone className="text-cyan-400 flex-shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="contact-info-item flex items-center gap-3 text-sm font-inter text-[#a0a0b8]">
                <FiMail className="text-violet-400 flex-shrink-0" />
                <span>{personalInfo.email}</span>
              </div>
            </div>

            {/* Resume download CTA */}
            <a
              href={personalInfo.resumeUrl}
              download="Abhinaya_Angaitkar_Resume.pdf"
              className="group relative flex items-center gap-3 w-full md:w-auto px-8 py-5 rounded-2xl overflow-hidden font-outfit font-semibold text-base text-white"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(6,182,212,0.15) 100%)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FiDownload className="relative text-cyan-400 group-hover:translate-y-0.5 transition-transform" size={20} />
              <span className="relative gradient-text">Download Full Resume</span>
            </a>

            {/* Availability note */}
            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-inter text-xs text-[#606078]">
                Available for new projects & opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
