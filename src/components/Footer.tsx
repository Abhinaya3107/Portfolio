"use client";

import { personalInfo } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a1a2e] bg-[#050508]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div>
            <p className="font-outfit font-bold text-lg gradient-text mb-1">
              Abhinaya Angaitkar
            </p>
            <p className="font-inter text-xs text-[#606078]">
              © {new Date().getFullYear()} · AI Full-Stack Developer · Pune, India
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
              {
                icon: FiLinkedin,
                href: personalInfo.linkedin,
                label: "LinkedIn",
              },
              {
                icon: FiMail,
                href: `mailto:${personalInfo.email}`,
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-[#1a1a2e] flex items-center justify-center text-[#606078] hover:text-violet-400 hover:border-violet-500/40 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Built with */}
          <div className="text-center md:text-right">
            <p className="font-inter text-xs text-[#606078]">
              Built with{" "} ❤️ by Abhinaya Angaitkar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
