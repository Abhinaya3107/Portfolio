"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import AICapabilities from "@/components/AICapabilities";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

// Dynamic import — no SSR for browser-only components
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      {/* ── Loader overlay — unmounted after animation completes ── */}
      {!loaderDone && (
        <Loader
          onComplete={() => setLoaderDone(true)}
        />
      )}

      {/* ── Main portfolio — always mounted (animates beneath loader) */}
      <main
        className="relative bg-[#050508] min-h-screen overflow-x-hidden"
        aria-hidden={!loaderDone}
      >
        <CustomCursor />
        <Header />
        <Hero />
        <About />
        <Skills />
        <AICapabilities />
        <Experience />
        <Projects />
        <Education />
        <Quote />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
