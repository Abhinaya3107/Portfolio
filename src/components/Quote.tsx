"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quote text word-by-word reveal
      gsap.from(".quote-word", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Animated underline
      gsap.from(".quote-line", {
        scaleX: 0,
        duration: 1.2,
        ease: "expo.out",
        transformOrigin: "left",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Parallax glow
      gsap.to(".quote-glow", {
        y: -30,
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

  const quoteWords = personalInfo.quote.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#07070f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Background glow */}
      <div className="quote-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-violet-700/10 blur-[120px] pointer-events-none" />

      <div className="section-padding relative z-10 text-center max-w-4xl mx-auto">
        {/* Opening quote mark */}
        <div
          className="font-outfit font-black text-[8rem] leading-none mb-0 select-none"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(6,182,212,0.3))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
          }}
        >
          &ldquo;
        </div>

        <blockquote className="font-outfit font-bold text-2xl md:text-4xl text-[#f0f0f8] leading-relaxed -mt-8 mb-6">
          {quoteWords.map((word, i) => (
            <span key={i} className="quote-word inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
        </blockquote>

        {/* Underline */}
        <div className="flex justify-center mb-6">
          <div
            className="quote-line h-0.5 w-32 rounded-full"
            style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }}
          />
        </div>

        <p className="font-inter text-sm text-[#606078] tracking-widest uppercase">
          Abhinaya Angaitkar
        </p>
      </div>
    </section>
  );
}
