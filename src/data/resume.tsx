export const DATA = {
  projects: [
    {
    },
    {id: "spiderverse",
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
    },
    {id: "slither-king",
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
    },
    {id: "rag-cli",
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
    },
    {id: "aura",
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
    },
    {id: "finsight-ai",
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
    },
  ],
  name: "Aditthan J K",
  initials: "AJK",
  url: "https://aditthan.dev",
  location: "Madurai / Coimbatore, Tamil Nadu, India",
  phone: "(+91) 9486244484",
  email: "aditthanjeganathan067@gmail.com",
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
  
  positioningPill: "Applied AI & Product Builder • Built for AI, Wired for Business",
  avatarUrl: "/images/aditthan.jpg",
  contact: {
    email: "aditthanjeganathan067@gmail.com",
    tel: "+919486244484",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aditthan-07",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditthan-j-k",
      },
      email: {
        name: "Send Email",
        url: "mailto:aditthanjeganathan067@gmail.com",
      },
    },
  },
  description:
    "Pre-Final Year Computer Science (AI & ML) student at SKCT. Builder focused on rapid prototyping, practical AI integration, and clean, high-performance interfaces—building at the intersection of applied machine learning and product execution.",
};
