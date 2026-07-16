"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiSharp,
  SiDotnet,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiJira,
  SiPostman,
  SiSelenium,
  SiSpringboot,
  SiHibernate,
  SiLinux,
  SiLangchain,
  SiHuggingface,
  SiFastapi,
} from "react-icons/si";
import { FaJava, FaMicrosoft, FaWindows } from "react-icons/fa";
import { TbBrandOpenai, TbBrain, TbRobot, TbVector } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
  {
    label: "AI & Generative AI",
    color: "#a855f7",
    glowColor: "rgba(168,85,247,0.28)",
    icons: [
      { Icon: TbBrandOpenai, name: "OpenAI", color: "#10a37f" },
      { Icon: TbBrain, name: "Generative AI", color: "#c084fc" },
      { Icon: TbRobot, name: "AI Agents", color: "#22d3ee" },
      { Icon: SiLangchain, name: "LangChain", color: "#1c8c6b" },
      { Icon: TbVector, name: "RAG / Vector", color: "#f59e0b" },
      { Icon: SiHuggingface, name: "Hugging Face", color: "#ffd21e" },
      { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { Icon: FaMicrosoft, name: "Azure OpenAI", color: "#0078d4" },
    ],
  },
  {
    label: "Languages & Frameworks",
    color: "#7c3aed",
    glowColor: "rgba(124,58,237,0.25)",
    icons: [
      { Icon: SiSharp, name: "C#", color: "#9b4f93" },
      { Icon: SiDotnet, name: "ASP.NET", color: "#7b68ee" },
      { Icon: FaJava, name: "Java", color: "#f89820" },
      { Icon: SiSpringboot, name: "Spring Boot", color: "#6db33f" },
      { Icon: SiReact, name: "React.js", color: "#61dafb" },
      { Icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
      { Icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
      { Icon: SiPython, name: "Python", color: "#3776ab" },
      { Icon: SiDjango, name: "Django", color: "#44b78b" },
      { Icon: SiHtml5, name: "HTML5", color: "#e34f26" },
      { Icon: SiCss, name: "CSS3", color: "#1572b6" },
    ],
  },
  {
    label: "Databases & APIs",
    color: "#06b6d4",
    glowColor: "rgba(6,182,212,0.25)",
    icons: [
      { Icon: SiMysql, name: "MySQL", color: "#4479a1" },
      { Icon: SiHibernate, name: "JPA / Hibernate", color: "#59666c" },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "#10b981",
    glowColor: "rgba(16,185,129,0.2)",
    icons: [
      { Icon: FaMicrosoft, name: "Azure", color: "#0078d4" },
      { Icon: FaWindows, name: "Azure DevOps", color: "#0078d4" },
      { Icon: SiDocker, name: "Docker", color: "#2496ed" },
      { Icon: SiGit, name: "Git", color: "#f05032" },
      { Icon: SiGithub, name: "GitHub", color: "#f0f0f8" },
      { Icon: SiLinux, name: "Linux", color: "#fcc624" },
    ],
  },
  {
    label: "Tools & Testing",
    color: "#f59e0b",
    glowColor: "rgba(245,158,11,0.2)",
    icons: [
      { Icon: SiJira, name: "Jira", color: "#0052cc" },
      { Icon: SiPostman, name: "Postman", color: "#ff6c37" },
      { Icon: SiSelenium, name: "Selenium", color: "#43b02a" },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title clip reveal
      gsap.from(".skills-title", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.4,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Category headers slide in
      gsap.from(".skill-cat-label", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-categories",
          start: "top 80%",
        },
      });

      // Icon cards — sequential reveal with clip + scale
      gsap.utils.toArray<HTMLElement>(".tech-icon-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            clipPath: "inset(100% 0 0 0)",
            y: 30,
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0 0 0)",
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "expo.out",
            delay: (i % 11) * 0.055,
            scrollTrigger: {
              trigger: card.closest(".skill-category-block") as Element || sectionRef.current,
              start: "top 82%",
            },
          }
        );
      });

      // Shimmer sweep on section enter
      gsap.from(".shimmer-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#07070f]" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Ambient glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-violet-700/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-cyan-500/8 blur-[80px] pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-inter text-[#606078] tracking-[0.3em] uppercase">
            02 / Skills
          </span>
          <div className="shimmer-line flex-1 max-w-xs h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
        </div>

        {/* Title */}
        <div className="mb-20">
          <h2
            className="skills-title font-outfit font-black text-5xl md:text-7xl text-[#f0f0f8] leading-none mb-4"
            style={{ clipPath: "inset(0 0% 0 0)" }}
          >
            Tech
            <span className="gradient-text"> Stack</span>
          </h2>
          <p className="font-inter text-[#606078] text-base max-w-lg">
            Tools &amp; technologies I use to bring ideas from concept to production.
          </p>
        </div>

        {/* Categories */}
        <div className="skills-categories space-y-16">
          {techCategories.map((cat) => (
            <div key={cat.label} className="skill-category-block">
              {/* Category label */}
              <div className="skill-cat-label flex items-center gap-3 mb-8">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                />
                <h3
                  className="font-outfit font-bold text-sm uppercase tracking-widest"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </h3>
                <div
                  className="shimmer-line flex-1 max-w-sm h-px"
                  style={{
                    background: `linear-gradient(90deg, ${cat.color}40, transparent)`,
                  }}
                />
              </div>

              {/* Icons grid */}
              <div className="flex flex-wrap gap-4">
                {cat.icons.map(({ Icon, name, color }) => (
                  <div
                    key={name}
                    className="tech-icon-card group relative flex flex-col items-center gap-3 w-[88px] md:w-[100px] cursor-default"
                    style={{ clipPath: "inset(0% 0 0 0)" }}
                  >
                    {/* Icon box */}
                    <div
                      className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                      style={{
                        background: "rgba(13,13,26,0.9)",
                        border: `1px solid rgba(26,26,46,1)`,
                      }}
                    >
                      {/* Shimmer sweep on hover */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 50% 0%, ${cat.glowColor} 0%, transparent 70%)`,
                        }}
                      />
                      {/* Shimmer animation stripe */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background:
                              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)",
                            backgroundSize: "200% 100%",
                            animation: "shimmer 1.5s infinite",
                          }}
                        />
                      </div>
                      {/* Border glow on hover */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
                        style={{
                          boxShadow: `inset 0 0 0 1px ${color}40`,
                        }}
                      />
                      {/* The icon */}
                      <Icon
                        size={32}
                        style={{
                          color,
                          filter: `drop-shadow(0 0 6px ${color}60)`,
                          transition: "filter 0.3s ease",
                        }}
                        className="relative z-10 group-hover:drop-shadow-lg"
                      />
                    </div>

                    {/* Name */}
                    <span className="font-inter text-[11px] text-[#606078] group-hover:text-[#a0a0b8] transition-colors text-center leading-tight">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
