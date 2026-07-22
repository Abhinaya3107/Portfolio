// src/lib/data.ts
// All portfolio content based on Abhinaya H. Angaitkar's resume

export const personalInfo = {
  name: "Abhinaya H. Angaitkar",
  firstName: "Abhinaya",
  role: "AI Full-Stack Developer",
  tagline:
    "Engineering intelligent, production-grade platforms, from full-stack systems to Generative & Agentic AI.",
  email: "abhinayaangaitkar0731@gmail.com",
  phone: "+91 9960068651",
  location: "Pune, Maharashtra",
  linkedin: "https://linkedin.com/in/abhinaya-angaitkar-43720021a",
  github: "https://github.com/Abhinaya3107",
  resumeUrl: "/Abhinaya_Angaitkar_Resume.pdf",
  summary:
    "AI Full-Stack Developer with PG-DAC (CDAC) in Advanced Computing. I build production-grade platforms and layer intelligent capabilities on top of them: Generative AI features, autonomous AI agents, and Retrieval-Augmented Generation (RAG) pipelines powered by OpenAI and Azure AI Search. Comfortable across the whole stack (C#, ASP.NET, Java, Spring Boot, React, Python, REST APIs, and cloud), now applied to shipping real, LLM-powered products.",
};
 
export const skills = {
  "AI & Generative AI": [
    { name: "OpenAI / LLM APIs", level: 88 },
    { name: "Generative AI", level: 85 },
    { name: "Agentic AI & AI Agents", level: 82 },
    { name: "RAG & Vector Search", level: 84 },
    { name: "LangChain", level: 80 },
    { name: "Prompt Engineering", level: 88 },
  ],
  "Languages & Frameworks": [
    { name: "C# & ASP.NET", level: 90 },
    { name: "Java & Spring Boot", level: 85 },
    { name: "React.js / JavaScript", level: 88 },
    { name: "Python & Django", level: 75 },
    { name: "HTML / CSS", level: 95 },
  ],
  "APIs & Databases": [
    { name: "REST APIs & Web APIs", level: 92 },
    { name: "Entity Framework", level: 85 },
    { name: "MySQL / SQL Server", level: 88 },
  ],
  "Cloud & DevOps": [
    { name: "Azure & Azure AI Search", level: 80 },
    { name: "Docker & Microservices", level: 78 },
    { name: "Git / GitHub", level: 92 },
    { name: "Agile / SDLC", level: 90 },
  ],
  "Tools": [
    { name: "Jira", level: 85 },
    { name: "Azure DevOps", level: 80 },
    { name: "Postman", level: 90 },
    { name: "Selenium", level: 70 },
  ],
};

export const skillPills = [
  "OpenAI", "GPT-4o", "Generative AI", "Agentic AI", "AI Agents",
  "LangChain", "RAG", "Vector DB", "Hugging Face", "Prompt Engineering",
  "LLM Integration", "Azure OpenAI", "Semantic Search",
  "C#", "ASP.NET", "Java", "Spring Boot", "React.js",
  "JavaScript", "TypeScript", "Python", "Django", "HTML/CSS",
  "REST APIs", "Entity Framework", "SQL Server", "MySQL",
  "Azure", "Azure AI Search", "Docker", "Microservices",
  "Git", "GitHub", "Agile", "SDLC", "Jira", "Azure DevOps",
  "Postman", "Selenium", "OOP", "DSA", "JPA/Hibernate",
];

// AI capabilities showcased in the dedicated "Intelligence Layer" section
export const aiCapabilities = [
  {
    id: "genai",
    title: "Generative AI",
    tagline: "LLM-powered product features",
    description:
      "Integrating large language models into real products: text generation, summarization, classification and conversational UX with streaming responses and function calling.",
    tags: ["OpenAI GPT-4o", "Azure OpenAI", "Streaming", "Function Calling"],
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.28)",
  },
  {
    id: "agents",
    title: "Agentic AI & AI Agents",
    tagline: "Autonomous, tool-using workflows",
    description:
      "Designing AI agents that reason, plan and act, using tool calling and multi-step (ReAct-style) loops to automate workflows that go beyond a single prompt.",
    tags: ["Tool Use", "Multi-Agent", "ReAct Loops", "Automation"],
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.28)",
  },
  {
    id: "rag",
    title: "RAG & Semantic Search",
    tagline: "Grounded, cited answers",
    description:
      "Building Retrieval-Augmented Generation pipelines with chunking, embeddings and vector search (Azure AI Search) so models answer from your data with accurate citations.",
    tags: ["Vector Embeddings", "Azure AI Search", "Chunking", "Retrieval"],
    color: "#10b981",
    glow: "rgba(16,185,129,0.24)",
  },
  {
    id: "fullstack-ai",
    title: "AI Full-Stack Integration",
    tagline: "From model to production UI",
    description:
      "Shipping AI end-to-end: Python/FastAPI & .NET services behind React/Next.js interfaces, with prompt versioning plus cost and latency optimization.",
    tags: ["FastAPI", "Next.js", "Streaming UI", "Cost & Latency"],
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.24)",
  },
];

export const experience = [
  {
    company: "Wingsbi",
    role: "Software Developer",
    period: "04/2026 – Present",
    location: "Pune, Maharashtra",
    type: "Full-time",
    color: "#7c3aed",
    bullets: [
      "Developed and maintained C#, ASP.NET & React-based web applications for international clients (Dubai, Godrej Aerospace).",
      "Built AI-powered features using Azure AI Search and LLM APIs, including semantic matching, intelligent search and Retrieval-Augmented Generation over platform data.",
      "Integrated Azure AI Search for intelligent startup-investor matching in the XpoMatchEvents platform.",
      "Performed QA testing, debugging and performance optimization; participated in code reviews with Agile/SDLC workflows.",
      "Worked with REST APIs, SQL Server, Microservices, Docker, and Git version control.",
    ],
  },
];

export const projects = [
  {
    title: "XpoMatchEvents",
    subtitle: "AI-Powered Startup Meeting Platform",
    description:
      "Built a full-stack meeting management platform for GITEX Asia, connecting startups and investors at the world's largest tech event. Integrated Azure AI Search for intelligent, semantic startup-investor matching and discovery.",
    stack: ["C#", "ASP.NET", "React.js", "Azure AI Search", "REST APIs", "SQL Server"],
    bullets: [
      "Startup registration & investor tracking workflows",
      "Automated meeting scheduling system",
      "Azure AI powered intelligent semantic matching",
      "Functional & regression QA testing",
    ],
    tag: "International Client · GITEX Asia · Dubai",
    color: "#7c3aed",
    gradient: "from-violet-900/30 to-violet-800/10",
    number: "01",
  },
  {
    title: "Godrej Aerospace",
    subtitle: "PreCheck Management System",
    description:
      "Developed a component pre-check and QC management system for Godrej Aerospace's assembly operations. Managed end-to-end component tracking through pre-check, quality control, and assembly stages.",
    stack: ["C#", "ASP.NET", "React.js", "SQL Server", "REST APIs"],
    bullets: [
      "End-to-end component lifecycle tracking",
      "QC status updates & inspection report generation",
      "Validation checklists for quality control",
      "Role-based access control for QC engineers & managers",
    ],
    tag: "Godrej Aerospace · Defense & Manufacturing",
    color: "#06b6d4",
    gradient: "from-cyan-900/30 to-cyan-800/10",
    number: "02",
  },
  {
    title: "Event Management System",
    subtitle: "Full-Stack Web App",
    description:
      "Full-stack app for managing events with JWT authentication and event booking workflows. Created vendor supply tracking using RESTful APIs and MySQL with JPA/Hibernate.",
    stack: ["Java", "Spring Boot", "React.js", "MySQL", "JPA/Hibernate"],
    bullets: [
      "JWT-based authentication & authorization",
      "Event creation & booking workflows",
      "Vendor supply tracking APIs",
      "RESTful API design with Spring Boot",
    ],
    tag: "Personal Project",
    color: "#f59e0b",
    gradient: "from-yellow-900/30 to-amber-800/10",
    number: "03",
  },
  {
    title: "Cricket Tournament App",
    subtitle: "Hackathon Winner · 2nd Place",
    description:
      "Full-stack tournament manager with team registration, match scheduling, and live scoring. Won 2nd place in inter-batch CDAC hackathon, chosen from multiple competing teams.",
    stack: ["Java", "Spring Boot", "ReactJS", "MySQL"],
    bullets: [
      "Team registration & management system",
      "Match scheduling & live score updates",
      "Tournament bracket & standings tracker",
      "🏆 2nd Place · CDAC Inter-batch Hackathon",
    ],
    tag: "CDAC Hackathon · 2nd Place 🏆",
    color: "#10b981",
    gradient: "from-emerald-900/30 to-emerald-800/10",
    number: "04",
  },
];

export const education = [
  {
    degree: "PG-DAC (CDAC)",
    institution: "Sunbeam Institute of Information Technology, Hinjewadi, Pune",
    period: "02/2025 – 08/2025",
    subjects: [
      "Core Java", "DSA", "OS", "DBMS", "Computer Networks",
      "Spring Boot", "React", "HTML/CSS/JS", "GIT", "Agile", "SDLC",
    ],
    icon: "🎓",
  },
  {
    degree: "B.E. – Mechanical Engineering",
    institution: "SGBAU University, Amravati",
    period: "01/2020 – 01/2023",
    subjects: [],
    icon: "⚙️",
  },
];
