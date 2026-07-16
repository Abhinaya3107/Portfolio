"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-card", {
        x: -60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".edu-title", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.4,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".edu-tag", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "back.out(2)",
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
      id="education"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="section-padding relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-inter text-[#606078] tracking-[0.3em] uppercase">
            06 / Education
          </span>
          <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
        </div>

        <h2
          className="edu-title font-outfit font-black text-5xl md:text-6xl text-[#f0f0f8] leading-none mb-16"
          style={{ clipPath: "inset(0 0% 0 0)" }}
        >
          My <span className="gradient-text">Journey</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {education.map((edu, i) => (
            <div
              key={i}
              className="edu-card relative rounded-2xl p-8 overflow-hidden group"
              style={{
                border: i === 0
                  ? "1px solid rgba(124,58,237,0.2)"
                  : "1px solid rgba(6,182,212,0.15)",
                background: i === 0
                  ? "linear-gradient(135deg, rgba(124,58,237,0.07) 0%, rgba(13,13,26,0.95) 100%)"
                  : "linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(13,13,26,0.95) 100%)",
              }}
            >
              {/* Background icon */}
              <div className="absolute top-6 right-6 text-5xl opacity-10 pointer-events-none select-none">
                {edu.icon}
              </div>

              {/* Top color line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: i === 0
                    ? "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)"
                    : "linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)",
                }}
              />

              <div className="mb-2">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-inter"
                  style={{
                    background: i === 0 ? "rgba(124,58,237,0.12)" : "rgba(6,182,212,0.1)",
                    border: i === 0
                      ? "1px solid rgba(124,58,237,0.25)"
                      : "1px solid rgba(6,182,212,0.2)",
                    color: i === 0 ? "#a78bfa" : "#22d3ee",
                  }}
                >
                  {edu.period}
                </span>
              </div>

              <h3 className="font-outfit font-bold text-xl text-[#f0f0f8] mt-4 mb-2">
                {edu.degree}
              </h3>
              <p className="font-inter text-sm text-[#606078] mb-6 leading-relaxed">
                {edu.institution}
              </p>

              {edu.subjects.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {edu.subjects.map((subj) => (
                    <span
                      key={subj}
                      className="edu-tag px-2.5 py-1 rounded-md text-xs font-inter text-[#606078] border border-[#1a1a2e] bg-[#0d0d1a]"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              )}

              {/* Achievement highlight for CDAC */}
              {i === 0 && (
                <div className="mt-6 flex items-center gap-2 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <span className="text-lg">🏆</span>
                  <span className="font-inter text-xs text-emerald-400">
                    2nd Place · CDAC Inter-batch Hackathon
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
