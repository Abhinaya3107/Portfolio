"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aiCapabilities } from "@/lib/data";
import { TbBrain, TbRobot, TbVector, TbStack2 } from "react-icons/tb";
import type { IconType } from "react-icons";

gsap.registerPlugin(ScrollTrigger);

// Map capability id → icon (kept in the component so data.ts stays serialisable)
const iconMap: Record<string, IconType> = {
  genai: TbBrain,
  agents: TbRobot,
  rag: TbVector,
  "fullstack-ai": TbStack2,
};

// The mental model of how an AI request flows through the systems I build
const pipeline = [
  { label: "Prompt", color: "#a855f7" },
  { label: "Retrieve", color: "#06b6d4" },
  { label: "Reason", color: "#10b981" },
  { label: "Act", color: "#f59e0b" },
  { label: "Cite", color: "#c084fc" },
];

export default function AICapabilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ai-title", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.4,
        ease: "expo.inOut",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(".ai-pipeline-node", {
        y: 24,
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".ai-pipeline", start: "top 85%" },
      });

      gsap.from(".ai-pipeline-link", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".ai-pipeline", start: "top 85%" },
      });

      gsap.utils.toArray<HTMLElement>(".ai-card").forEach((card) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: card, start: "top 88%" },
        });
      });

      gsap.from(".ai-shimmer-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ai"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#08060f] to-[#050508]" />
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-fuchsia-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cyan-500/8 blur-[100px] pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-inter text-[#606078] tracking-[0.3em] uppercase">
            03 / AI
          </span>
          <div className="ai-shimmer-line flex-1 max-w-xs h-px bg-gradient-to-r from-fuchsia-500/50 to-transparent" />
        </div>

        {/* Title */}
        <div className="mb-14 max-w-3xl">
          <h2
            className="ai-title font-outfit font-black text-5xl md:text-7xl text-[#f0f0f8] leading-none mb-5"
            style={{ clipPath: "inset(0 0% 0 0)" }}
          >
            Intelligence
            <span className="gradient-text"> Layer</span>
          </h2>
          <p className="font-inter text-[#a0a0b8] text-base md:text-lg leading-relaxed">
            Beyond full-stack: I design and ship{" "}
            <span className="text-fuchsia-300 font-medium">Generative AI</span>,{" "}
            <span className="text-cyan-300 font-medium">Agentic AI</span> and{" "}
            <span className="text-emerald-300 font-medium">RAG</span> features,
            turning large language models into reliable, production-grade product experiences.
          </p>
        </div>

        {/* AI request pipeline */}
        <div className="ai-pipeline flex flex-wrap items-center gap-2 sm:gap-3 mb-16">
          {pipeline.map((node, i) => (
            <div key={node.label} className="flex items-center gap-2 sm:gap-3">
              <div
                className="ai-pipeline-node flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-sm"
                style={{
                  background: `${node.color}12`,
                  border: `1px solid ${node.color}40`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: node.color, boxShadow: `0 0 8px ${node.color}` }}
                />
                <span
                  className="font-inter text-xs sm:text-sm font-medium tracking-wide"
                  style={{ color: node.color }}
                >
                  {node.label}
                </span>
              </div>
              {i < pipeline.length - 1 && (
                <span
                  className="ai-pipeline-link block w-5 sm:w-8 h-px"
                  style={{
                    background: `linear-gradient(90deg, ${node.color}, ${pipeline[i + 1].color})`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {aiCapabilities.map((cap) => {
            const Icon = iconMap[cap.id] ?? TbBrain;
            return (
              <div
                key={cap.id}
                className="ai-card group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: `1px solid ${cap.color}22`,
                  background:
                    "linear-gradient(135deg, rgba(13,13,26,0.95) 0%, rgba(7,7,15,0.92) 100%)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 20% 0%, ${cap.glow} 0%, transparent 60%)`,
                  }}
                />
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${cap.color}, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${cap.color}14`,
                      border: `1px solid ${cap.color}33`,
                    }}
                  >
                    <Icon
                      size={26}
                      style={{ color: cap.color, filter: `drop-shadow(0 0 8px ${cap.color}55)` }}
                    />
                  </div>

                  {/* Title + tagline */}
                  <h3 className="font-outfit font-bold text-xl text-[#f0f0f8] mb-1">
                    {cap.title}
                  </h3>
                  <p
                    className="font-outfit font-medium text-sm mb-4"
                    style={{ color: cap.color }}
                  >
                    {cap.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-inter text-sm text-[#a0a0b8] leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-inter"
                        style={{
                          background: "rgba(13,13,26,0.8)",
                          border: "1px solid rgba(26,26,46,1)",
                          color: "#a0a0b8",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
