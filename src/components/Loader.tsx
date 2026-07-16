"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const greetings = [
  { word: "नमस्कार",  lang: "Marathi",  romanized: "Namaskar" },
  { word: "नमस्ते",    lang: "Hindi",    romanized: "Namaste"  },
  { word: "Hello",    lang: "English",  romanized: null       },
  { word: "こんにちは", lang: "Japanese", romanized: "Konnichiwa"},
];

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const wordRef       = useRef<HTMLDivElement>(null);
  const langRef       = useRef<HTMLParagraphElement>(null);
  const romanRef      = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const container  = containerRef.current!;
    const wordEl     = wordRef.current!;
    const langEl     = langRef.current!;
    const romanEl    = romanRef.current!;

    // Stop the browser from restoring a previous scroll position (mobile reload)
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Pin the page to the top and prevent scroll while loading
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          // Ensure the hero is shown from the very top once the loader clears
          window.scrollTo(0, 0);
          onComplete();
        },
      });

      // ── INITIAL STATE ─────────────────────────────────────────
      gsap.set(wordEl, { yPercent: 110, opacity: 0 });
      gsap.set([langEl, romanEl], { opacity: 0, y: 12 });

      // Entrance of container
      tl.from(container, { opacity: 0, duration: 0.4, ease: "power2.out" });

      // ── LOOP THROUGH EACH GREETING ────────────────────────────
      greetings.forEach((g, i) => {
        const isLast = i === greetings.length - 1;

        tl
          // Set text content instantly
          .call(() => {
            wordEl.textContent = g.word;
            langEl.textContent = g.lang.toUpperCase();
            if (romanEl) romanEl.textContent = g.romanized ?? "";
          })
          // Word rises in — VERY FAST
          .to(
            wordEl,
            { yPercent: 0, opacity: 1, duration: 0.25, ease: "expo.out" },
            i === 0 ? "+=0.1" : "+=0"
          )
          // Meta fades in
          .to([langEl, romanEl], {
            opacity: 1, y: 0,
            duration: 0.15, ease: "power2.out", stagger: 0.03,
          }, "<+0.1")
          // Hold duration — minimal
          .to({}, { duration: isLast ? 0.15 : 0.15 });

        // Add exit animations ONLY if it's not the last word
        if (!isLast) {
          tl
            // Word exits up — VERY FAST
            .to(wordEl, {
              yPercent: -120, opacity: 0, duration: 0.2, ease: "power2.in",
            })
            // Meta fades out
            .to([langEl, romanEl], {
              opacity: 0, y: -8, duration: 0.15, ease: "power2.in",
            }, "<+0.05")
            // Reset positions for next word
            .set(wordEl, { yPercent: 120, opacity: 0 })
            .set([langEl, romanEl], { opacity: 0, y: 12 });
        }
      });

      // ── EXIT ANIMATION ──────────────────────────────────────
      tl
        .to(wordEl, {
          scale: 1.04,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        })
        .to([langEl, romanEl], {
          opacity: 0, duration: 0.1, ease: "power2.in",
        }, "<")
        .to(container, {
          yPercent: -100,
          duration: 0.5,
          ease: "expo.inOut",
        }, "<+0.05");
    }, container);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="loader-container fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#050508" }}
      aria-label="Loading portfolio"
      role="status"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(124,58,237,0.10) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/8  blur-[100px] pointer-events-none" />

      {/* ── PROGRESS BAR (top edge instead of bottom logic) ── */}

      {/* ── MAIN GREETING WORD ──────────────────────────────────────── */}
      <div className="relative flex flex-col items-center gap-4 sm:gap-5 text-center px-6">

        {/* Word wrapper — massive horizontal and vertical padding for Devnagari system font fallbacks */}
        <div className="overflow-hidden px-24 py-16 -mx-24 -my-16">
          <div
            ref={wordRef}
            className="loader-word select-none leading-none"
            style={{
              /* Cormorant Garamond — elegant, italic, curved, editorial */
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(4rem, 14vw, 11rem)",
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #f0f0f8 0%, #c4b5fd 45%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(124,58,237,0.3))",
            }}
          >
            नमस्ते
          </div>
        </div>

        {/* Language label */}
        <div className="flex flex-col items-center gap-1">
          <p
            ref={langRef}
            className="font-inter text-[10px] sm:text-xs text-[#606078] tracking-[0.4em] uppercase"
          >
            MARATHI
          </p>
          <p
            ref={romanRef}
            className="font-inter text-[10px] sm:text-xs text-violet-400/60 tracking-widest italic"
          >
            Namaste
          </p>
        </div>
      </div>

    </div>
  );
}
