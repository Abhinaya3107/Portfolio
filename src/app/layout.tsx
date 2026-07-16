import type { Metadata } from "next";
import { Outfit, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});


export const metadata: Metadata = {
  title: "Abhinaya Angaitkar · AI Full-Stack Developer",
  description:
    "Portfolio of Abhinaya H. Angaitkar, an AI Full-Stack Developer building Generative AI, Agentic AI & RAG features with OpenAI, LangChain and Azure AI on top of C#, ASP.NET, React & Spring Boot. Shipped platforms for GITEX Asia & Godrej Aerospace.",
  keywords: [
    "Abhinaya Angaitkar",
    "AI Full Stack Developer",
    "Generative AI",
    "Agentic AI",
    "AI Agents",
    "OpenAI",
    "LangChain",
    "RAG",
    "LLM",
    "Azure AI",
    "React",
    "ASP.NET",
    "Java Spring Boot",
    "Pune",
    "CDAC",
  ],
  authors: [{ name: "Abhinaya H. Angaitkar" }],
  openGraph: {
    title: "Abhinaya Angaitkar · AI Full-Stack Developer",
    description:
      "AI Full-Stack Developer building Generative & Agentic AI, AI agents and RAG on production platforms. OpenAI, LangChain, Azure AI, React & .NET.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="bg-[#050508] text-[#f0f0f8] antialiased">
        <div className="scanline" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
