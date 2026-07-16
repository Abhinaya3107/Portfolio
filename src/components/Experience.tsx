"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title clip
      gsap.from(".exp-title-clip", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.4,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Timeline line grows
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
        },
      });

      // Dots pop in
      gsap.from(".timeline-dot", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
        },
      });

      // Bullet points
      gsap.from(".exp-bullet", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
        },
      });

      // Sticky left panel GSAP pin
      ScrollTrigger.create({
        trigger: timelineRef.current,
        pin: leftPanelRef.current,
        start: "top 120px",
        end: "bottom bottom",
        pinSpacing: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="section-padding relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-inter text-[#606078] tracking-[0.3em] uppercase">
            04 / Experience
          </span>
          <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left sticky panel */}
          <div ref={leftPanelRef} className="lg:col-span-2 self-start">
            <h2
              className="exp-title-clip font-outfit font-black text-5xl md:text-6xl text-[#f0f0f8] leading-none mb-6"
              style={{ clipPath: "inset(0 0% 0 0)" }}
            >
              Work
              <br />
              <span className="gradient-text">History</span>
            </h2>
            <p className="font-inter text-[#606078] text-base leading-relaxed max-w-sm">
              Professional experience building real-world, production-ready
              applications for international clients across multiple industries.
            </p>

            {/* Currently badge */}
            <div
              className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-inter font-medium">
                Currently at Wingsbi
              </span>
            </div>
          </div>

          {/* Right timeline */}
          <div ref={timelineRef} className="lg:col-span-3 relative">
            {/* Vertical line */}
            <div className="timeline-line absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/40 to-transparent" />

            <div className="space-y-16 pl-8">
              {experience.map((exp, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div
                    className="timeline-dot absolute -left-8 top-1 w-3 h-3 rounded-full border-2 border-violet-500 bg-[#050508]"
                    style={{ boxShadow: "0 0 12px rgba(124,58,237,0.6)" }}
                  />

                  {/* Card */}
                  <div
                    className="glass-card rounded-2xl p-8 relative group hover:border-violet-500/30 transition-all duration-500"
                    style={{
                      border: "1px solid rgba(124,58,237,0.12)",
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(6,182,212,0.04) 100%)",
                    }}
                  >
                    {/* Top meta */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-outfit font-bold text-xl text-[#f0f0f8] mb-1">
                          {exp.role}
                        </h3>
                        <p className="font-outfit font-semibold text-lg gradient-text">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className="inline-block px-3 py-1.5 rounded-full text-xs font-inter font-medium border"
                          style={{
                            borderColor: "rgba(124,58,237,0.3)",
                            background: "rgba(124,58,237,0.1)",
                            color: "#a78bfa",
                          }}
                        >
                          {exp.period}
                        </span>
                        <p className="text-xs text-[#606078] mt-1 font-inter">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-violet-500/20 to-transparent mb-6" />

                    {/* Bullets */}
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="exp-bullet flex gap-3 items-start"
                        >
                          <span
                            className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ background: exp.color }}
                          />
                          <span className="font-inter text-sm text-[#a0a0b8] leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[#1a1a2e]">
                      {["C#", "ASP.NET", "React", "Azure AI Search", "SQL Server", "Docker"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-xs font-inter text-[#606078] border border-[#1a1a2e] bg-[#0d0d1a]"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Future node */}
              <div className="relative">
                <div
                  className="absolute -left-8 top-1 w-3 h-3 rounded-full border-2 border-[#1a1a2e] bg-[#050508] animate-pulse"
                />
                <p className="font-inter text-sm text-[#606078] pl-2">
                  The journey continues...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
