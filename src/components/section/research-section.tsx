"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import {
  BookOpen,
  Download,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  Cpu,
  FileText,
  CheckCircle2,
  UploadCloud,
  ImageIcon,
} from "lucide-react";
import { ResearchPaperModal } from "@/components/research-paper-modal";

export default function ResearchSection() {
  const [isPaperModalOpen, setIsPaperModalOpen] = useState(false);
  const paper = DATA.researchPublication;

  return (
    <section id="research" className="scroll-mt-16">
      <div className="flex flex-col gap-y-8">
        {/* Section Header */}
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Research &amp; Publications
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground editorial-justify max-w-3xl">
            Authored research treating synthetic media detection as an empirical systems challenge—combining transformer ensemble learning, deterministic decision fusion, and explainability heatmaps.
          </p>
        </div>

        {/* Pixel Truth Publication Card */}
        <div className="border border-border/80 bg-card rounded-2xl overflow-hidden shadow-sm hover:border-primary/40 transition-all duration-300">
          <div className="p-6 sm:p-8 space-y-6">
            {/* Header / Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1 text-xs">
                  Authored Research Paper
                </Badge>
                <Badge variant="outline" className="text-xs font-medium">
                  IEEE Format
                </Badge>
                <Badge variant="secondary" className="text-xs font-medium">
                  AI Image Forensics &amp; XAI
                </Badge>
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                Peer-Reviewed / Institutional Methodology
              </span>
            </div>

            {/* Title & Affiliation */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                <span className="font-editorial-italic font-serif font-normal">Pixel Truth:</span> Dual-Transformer Ensemble for Synthetic Image Forensics
              </h3>
              <p className="text-xs sm:text-sm text-primary font-semibold mt-1.5">
                {paper.author} • {paper.affiliation}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 editorial-justify leading-relaxed">
                {paper.summary}
              </p>
            </div>

            {/* Responsive Fig. 1 Architecture Diagram */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
                <span className="font-semibold text-foreground">Fig. 1: Full-Stack Client-Server Forensic Pipeline</span>
                <span className="italic font-editorial-italic">Composition-First System Architecture</span>
              </div>
              
              <div className="rounded-xl border border-border/80 overflow-hidden bg-black/60 p-2 sm:p-4">
                <img
                  src="/projects/pixeltruth-architecture.svg"
                  alt="Pixel Truth Dual-Transformer Architecture Workflow"
                  className="w-full h-auto object-contain rounded-lg max-h-[380px]"
                />
              </div>
            </div>

            {/* Structured Paper Highlights (from docx/paper) */}
            <div className="grid gap-3.5 sm:grid-cols-2 pt-2">
              {paper.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="editorial-justify">
                    <strong className="text-foreground">{h.title}:</strong> {h.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {paper.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-medium border border-border bg-muted/40 text-foreground px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Working Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
              <Button
                onClick={() => setIsPaperModalOpen(true)}
                className="gap-2 text-xs font-semibold"
                size="sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Read Research Paper
              </Button>
              <a
                href="/pixel-truth-paper.md"
                download="Pixel-Truth-Research-Paper.md"
              >
                <Button variant="outline" size="sm" className="gap-2 text-xs">
                  <Download className="w-3.5 h-3.5" />
                  Download Paper (.md)
                </Button>
              </a>
              <a
                href="https://github.com/Aditthan-07/Pixel-Truth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm" className="gap-2 text-xs">
                  <Github className="w-3.5 h-3.5" />
                  GitHub Repository
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Research Paper Interactive Modal */}
      <ResearchPaperModal
        isOpen={isPaperModalOpen}
        onClose={() => setIsPaperModalOpen(false)}
      />
    </section>
  );
}