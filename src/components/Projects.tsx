"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/data";
import { FiGithub } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from(".projects-title", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.4,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // GSAP clip-path card reveals
      gsap.utils.toArray<HTMLElement>(".project-card-wrapper").forEach((card) => {
        gsap.from(card, {
          clipPath: "inset(0 0 100% 0)",
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });

        // Number parallax
        const num = card.querySelector(".project-num");
        if (num) {
          gsap.to(num, {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      });

      // Stack chips
      gsap.from(".stack-chip", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#07070f]" />
      <div className="absolute inset-0 grid-overlay opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-violet-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-cyan-500/8 blur-[100px] pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-inter text-[#606078] tracking-[0.3em] uppercase">
            05 / Projects
          </span>
          <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
        </div>

        {/* Title */}
        <div className="mb-16">
          <h2
            className="projects-title font-outfit font-black text-5xl md:text-7xl text-[#f0f0f8] leading-none"
            style={{ clipPath: "inset(0 0% 0 0)" }}
          >
            Featured
            <span className="gradient-text"> Work</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card-wrapper group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                clipPath: "inset(0 0 0% 0)",
                border: `1px solid ${project.color}22`,
                background: `linear-gradient(135deg, rgba(13,13,26,0.95) 0%, rgba(7,7,15,0.9) 100%)`,
              }}
            >
              {/* Project number (parallax) */}
              <div
                className="project-num absolute top-6 right-6 font-outfit font-black text-7xl pointer-events-none select-none"
                style={{
                  color: `${project.color}12`,
                  zIndex: 0,
                }}
              >
                {project.number}
              </div>

              {/* Color accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Tag */}
                <div className="mb-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-inter font-medium"
                    style={{
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                      color: project.color,
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-outfit font-bold text-2xl text-[#f0f0f8] mb-1 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p
                  className="font-outfit font-medium text-sm mb-4"
                  style={{ color: project.color }}
                >
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="font-inter text-sm text-[#a0a0b8] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full"
                        style={{ background: project.color }}
                      />
                      <span className="font-inter text-xs text-[#606078] leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div
                  className="h-px mb-6"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}30, transparent)`,
                  }}
                />

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, ti) => (
                    <span
                      key={ti}
                      className="stack-chip px-2.5 py-1 rounded-md text-xs font-inter"
                      style={{
                        background: "rgba(13,13,26,0.8)",
                        border: "1px solid rgba(26,26,46,1)",
                        color: "#a0a0b8",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/Abhinaya3107/Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-inter text-[#606078] hover:text-[#f0f0f8] transition-colors group/link"
                    aria-label="View on GitHub"
                  >
                    <FiGithub size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${project.color}08 0%, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
