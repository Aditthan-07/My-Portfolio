import { Icons } from "@/components/icons";
import {
  HomeIcon,
  BookOpen,
  FileText,
  Mail,
  GraduationCap,
  Award,
  ExternalLink,
  Github,
  Linkedin,
  Download,
  Smartphone,
  Terminal,
  Cpu,
  Layers,
  Code2,
  Gamepad2,
  Sparkles,
} from "lucide-react";

export const DATA = {
  name: "Aditthan J K",
  initials: "AJK",
  url: "https://aditthanjk.vercel.app",
  location: "Madurai / Coimbatore, Tamil Nadu, India",
  locationLink: "https://www.google.com/maps/place/Madurai,+Tamil+Nadu",
  phone: "(+91) 9486244484",
  email: "aditthanjeganathan067@gmail.com",
  positioningPill: "Applied AI & Product Builder • Built for AI, Wired for Business",
  description:
    "Pre-Final Year Computer Science (AI & ML) student at SKCT. Builder focused on rapid prototyping, practical AI integration, and clean, high-performance interfaces—building at the intersection of applied machine learning and product execution.",
  avatarUrl: "/images/aditthan.jpg",
  
  // Categorized Technical Stack
  skillCategories: [
    {
      title: "AI, Machine Learning & Research",
      skills: [
        "Python",
        "PyTorch",
        "Hugging Face",
        "Scikit-Learn",
        "LangChain",
        "ChromaDB",
        "Explainable AI (Grad-CAM)",
      ],
    },
    {
      title: "App & Web Prototyping",
      skills: [
        "React Native",
        "Expo",
        "HTML5 / CSS3",
        "JavaScript",
        "FastAPI",
        "Streamlit",
      ],
    },
    {
      title: "Product & AI-Assisted Workflow",
      skills: [
        "AI-Assisted Development (Vibe Coding)",
        "Prompt Engineering",
        "Rapid MVP Prototyping",
        "UI/UX Design",
        "REST API Integration",
      ],
    },
    {
      title: "Developer Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Vercel",
        "Netlify",
        "EAS Build",
      ],
    },
  ],

  navbar: [
    { href: "/#hero", icon: HomeIcon, label: "Home" },
    { href: "/#about", icon: FileText, label: "About" },
    { href: "/#research", icon: BookOpen, label: "Research" },
    { href: "/#projects", icon: Code2, label: "Projects" },
    { href: "/#education", icon: GraduationCap, label: "Education" },
    { href: "/resume.pdf", icon: Download, label: "Resume PDF" },
  ],

  contact: {
    email: "aditthanjeganathan067@gmail.com",
    tel: "(+91) 9486244484",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aditthan-07",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditthan-jk/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aditthanjeganathan067@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  // Dedicated Research & Publications: Pixel Truth
  researchPublication: {
    id: "pixel-truth",
    title: "Pixel Truth: Dual-Transformer Ensemble for Synthetic Image Forensics",
    type: "Research Paper & Forensic Microservice",
    author: "Aditthan J K",
    affiliation: "Department of CSE (AI/ML), Sri Krishna College of Technology (SKCT)",
    headline:
      "A composition-first forensic architecture ensembling GAN-era Vision Transformers with Stable Diffusion XL Swin Transformers, resolved via deterministic vote-and-average fusion with gradient-saliency explainability.",
    summary:
      "Addressing the generalization gap in synthetic media forensics where single-generator detectors degrade across evolving model families. PixelTruth treats detection as a composition-first systems challenge by fusing two pre-trained Hugging Face checkpoints—umm-maybe/AI-image-detector (ViT covering GAN and VQGAN+CLIP imagery) and Organika/sdxl-detector (Swin Transformer fine-tuned on SDXL). Predictions are unified through a hand-traceable Vote-and-Average Ensemble Fusion rule combining majority voting at 0.5 threshold with confidence-score averaging tie-breaking. To demystify model verdicts, an input-gradient saliency module computes pixel-level sensitivity heatmaps overlaid on images, all served through a stateless Flask REST API (POST /predict) with zero on-disk image persistence.",
    highlights: [
      {
        title: "Composition-First Ensemble",
        desc: "Fuses patch-based ViT self-attention with hierarchical shifted-window Swin representations, spanning both GAN artifacts and modern latent diffusion signatures without requiring joint re-training.",
      },
      {
        title: "Deterministic Fusion Rule",
        desc: "Transparent Vote-and-Average algorithm formulating cumulative scores (S_AI, S_real) and average confidences (A_bar_AI, A_bar_real) with synthetic precedence on equal scoring.",
      },
      {
        title: "Input-Gradient Saliency Heatmaps",
        desc: "Generates fine-grained pixel-importance maps highlighting manipulated facial, edge, or texture regions to provide human-verifiable evidence for non-specialist investigators.",
      },
      {
        title: "Stateless Forensic Architecture",
        desc: "Processes uploaded image streams entirely in-memory via Flask REST endpoints (POST /predict), ensuring zero persistent disk retention and strict forensic privacy.",
      },
      {
        title: "Candid Limitations & Analysis",
        desc: "Formally documents sensitivity to lossy JPEG compression and rigorously distinguishes input-gradient saliency from coarse feature-layer Grad-CAM.",
      },
    ],
    technologies: [
      "Python 3.11",
      "PyTorch",
      "Vision Transformer (ViT)",
      "Swin Transformer",
      "Hugging Face Transformers",
      "Flask REST API",
      "Input-Gradient Saliency",
      "Ensemble Learning",
    ],
    links: [
      {
        type: "Read Research Paper",
        action: "modal",
        isPrimary: true,
      },
      {
        type: "Download Paper (.md)",
        href: "/pixel-truth-paper.md",
        download: "Pixel-Truth-Research-Paper.md",
        isPrimary: false,
      },
      {
        type: "GitHub Repository",
        href: "https://github.com/Aditthan-07/Pixel-Truth",
        isPrimary: false,
      },
    ],
  },

  // Unified 6 Projects Grid (NO Timelines / Dates)
  projects: [
    {
      id: "finsight-ai",
      title: "FinSight AI — Personal Solvency & ML Wealth Engine",
      badge: "Mobile Prototype (WIP)",
      video: "/projects/finsight-ai.mp4",
      image: "/projects/finsight-ai.png",
      description:
        "A personal wealth management and solvency intelligence platform built for Indian capital markets. Features an offline 5-axis personal solvency audit evaluating debt-to-income, credit health, and emergency reserves without cloud exposure. Uses a trained Scikit-Learn Random Forest model to map user risk tolerance to tailored equity baskets with real-time NIFTY 50 market benchmarks.",
      technologies: [
        "React Native",
        "Expo SDK 51",
        "FastAPI",
        "Scikit-Learn",
        "TypeScript",
        "Python 3.11",
        "yfinance",
      ],
      links: [
        {
          type: "GitHub Repo",
          href: "https://github.com/Aditthan-07/Investor_App",
        },
        {
          type: "Download Android APK",
          href: "https://github.com/Aditthan-07/Investor_App/releases/latest",
        },
      ],
      visualSlotLabel: "FinSight AI Mobile App Screenshot / Demo GIF",
      visualSlotHint: "Upload 1-2 mobile screenshots (e.g. 5-axis solvency radar, equity allocation basket)",
    },
    {
      id: "aura",
      title: "Aura — Local-First Habit & Task App",
      badge: "Mobile Application",
      video: "/projects/aura.mp4",
      image: "/projects/aura.jpg",
      description:
        "Mobile habit and routine tracking application built with React Native and Expo, engineered around local-first data sovereignty with zero required accounts and automated OS-level advance alarm notifications scheduled 30 minutes before time-bound commitments.",
      technologies: [
        "React Native",
        "Expo SDK",
        "AsyncStorage",
        "expo-notifications",
        "TypeScript",
      ],
      links: [
        {
          type: "GitHub Repo",
          href: "https://github.com/Aditthan-07/Aura",
        },
      ],
      visualSlotLabel: "Aura Today & Schedule Mobile Screenshot",
      visualSlotHint: "Upload mobile screen capture (Today's Agenda or Schedule alarm view)",
    },
    {
      id: "rag-cli",
      title: "RAG-CLI — Offline Semantic Document Retrieval",
      badge: "CLI & Vector Search",
      video: "/projects/rag-cli.mp4",
      description:
        "Terminal-based Retrieval-Augmented Generation system that ingests PDF and TXT files into a local ChromaDB vector store. Executes fast cosine similarity retrieval over local sentence-transformer embeddings without external cloud APIs, recurring token costs, or data leakage.",
      technologies: [
        "Python",
        "LangChain",
        "ChromaDB",
        "Sentence-Transformers",
        "Scikit-Learn",
      ],
      links: [
        {
          type: "GitHub Repo",
          href: "https://github.com/Aditthan-07/Rag-CLI",
        },
      ],
      visualSlotLabel: "RAG-CLI Terminal Query Walkthrough",
      visualSlotHint: "Upload terminal GIF or CLI screen capture showing ingestion and querying",
    },
    {
      id: "slither-king",
      title: "Slither King — Classic Arcade Game",
      badge: "Java Desktop Arcade",
      video: "/projects/slither-king.mp4",
      description:
        "Modernized desktop Snake arcade game built in Java with Swing. Implements clean Object-Oriented Architecture, modular game loop managers (movement, collision detection, tunable obstacle generation), and persistent high-score tracking across sessions.",
      technologies: [
        "Java",
        "Java Swing",
        "OOP Architecture",
        "State Persistence",
      ],
      links: [
        {
          type: "GitHub Repo",
          href: "https://github.com/Aditthan-07/SlitherKing.git",
        },
      ],
      visualSlotLabel: "Slither King Gameplay GIF / Screenshot",
      visualSlotHint: "Upload desktop gameplay recording or screenshot showing snake movement & obstacle generation",
    },
    {
      id: "spiderverse",
      title: "SpiderVerse — 2D Physics Web-Swinging Game",
      badge: "Interactive Canvas Engine",
      video: "/projects/spiderverse.mp4",
      description:
        "Physics-driven 2D web action game built entirely on native HTML5 Canvas API. Features realistic pendulum web-slinging kinematics, momentum conservation, enemy combat waves, and real-time Spider-Sense visual and audio warning cues.",
      technologies: [
        "HTML5 Canvas API",
        "JavaScript (ES6+)",
        "Web Audio API",
        "Physics Kinematics",
        "Netlify",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://city-slinger.netlify.app",
        },
        {
          type: "GitHub Repo",
          href: "https://github.com/Aditthan-07/Spiderverse",
        },
      ],
      visualSlotLabel: "SpiderVerse Gameplay GIF / Screenshot",
      visualSlotHint: "Upload web gameplay animation or canvas combat action screenshot",
    },
    {
      id: "csk-fan-hub",
      title: "CSK-Fan-Hub — Interactive Sports Fan Portal",
      badge: "Web Platform & Tribute",
      video: "/projects/csk-fan-hub.mp4",
      description:
        "Responsive tribute web portal for Chennai Super Kings fans, featuring legacy tournament milestones, dynamic category-filtered player rosters with statistics, player profile modals, and custom HTML5 multimedia playback controls.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Netlify",
        "Media APIs",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://chennai-super-kings-fan-hub.netlify.app",
        },
        {
          type: "GitHub Repo",
          href: "https://github.com/Aditthan-07/CSK-Fan-Hub",
        },
      ],
      visualSlotLabel: "CSK Fan Hub Web Portal Screenshot",
      visualSlotHint: "Upload roster gallery or interactive milestone showcase screenshot",
    },
  ],

  // Academic Education (Enriched)
  education: [
    {
      school: "Sri Krishna College of Technology (SKCT)",
      href: "https://skct.edu.in",
      degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering (AI & ML)",
      location: "Coimbatore, Tamil Nadu, India",
      start: "Aug 2024",
      end: "Mar 2028 (Expected)",
      grade: "Cumulative GPA: 8.03 / 10.0 (4th Semester)",
      coreCoursework: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Deep Learning",
        "Operating Systems",
        "Database Management Systems",
        "Object-Oriented Programming",
        "Linear Algebra & Probability",
      ],
      achievements: [
        "Authored IEEE-format research paper on Pixel Truth: A Dual-Transformer Ensemble for Synthetic Image Forensics.",
        "Built end-to-end applied AI systems, offline vector retrieval pipelines, and cross-platform mobile prototypes.",
        "Completed proctored IIT Madras NPTEL coursework in Large Language Models (transformer mathematics & inference pipelines).",
      ],
    },
  ],

  // Academic Coursework & Proctored Certifications
  certifications: [
    {
      title: "Introduction to Large Language Models (LLMs)",
      issuer: "NPTEL, IIT Madras",
      period: "Jan 2026 – Apr 2026",
      type: "Proctored Academic Certification",
      description:
        "Studied transformer mathematical foundations, attention mechanisms, prompt structuring, and practical LLM inference & fine-tuning pipelines.",
    },
    {
      title: "IBM Data Analyst Professional Certificate",
      issuer: "Coursera / IBM",
      period: "Feb 2025 – Dec 2025",
      type: "Professional Specialization",
      description:
        "Comprehensive training in Python, SQL, exploratory data analysis, and quantitative visualization with a completed capstone project.",
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Infosys Springboard",
      period: "Apr 2025",
      type: "Technical Certification",
      description:
        "Mastered fundamental data structures (arrays, linked lists, binary trees, graphs) and algorithmic problem-solving paradigms.",
    },
  ],

  // Focus Areas & What Drives Me (LinkedIn-aligned: Built for AI, Wired for Business)
  focusAreas: [
    {
      title: "Applied AI & Intelligent Products",
      desc: "Turning transformer models, LLMs, and ML pipelines into usable tools that solve practical problems.",
    },
    {
      title: "AI-Powered Rapid Prototyping",
      desc: "Combining strong product intuition with modern AI workflows to take ideas from concept to working prototype fast.",
    },
    {
      title: "Edge & Local-First Systems",
      desc: "Building privacy-preserving, offline-capable tools—from local ChromaDB RAG engines to on-device mobile apps.",
    },
    {
      title: "AI × Business & Product Strategy",
      desc: "Bridging technical execution with real-world user value, commercial viability, and thoughtful product design.",
    },
  ],
};