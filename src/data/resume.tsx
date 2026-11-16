export const DATA = {
  projects: [],
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
