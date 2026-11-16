"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  ExternalLink,
  X,
  BookOpen,
  CheckCircle2,
  Layers,
  Code,
  Share2,
} from "lucide-react";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function ResearchPaperModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden text-foreground animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary text-primary-foreground">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                  Academic Research Paper
                </span>
                <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                  AI Forensics &amp; XAI
                </Badge>
              </div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight">
                Pixel Truth: A Dual-Transformer Ensemble for Detecting AI-Generated Images
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/pixel-truth-paper.md"
              download="Pixel-Truth-Research-Paper.md"
              className="hidden sm:inline-flex"
            >
              <Button size="sm" variant="outline" className="gap-1.5 text-xs">
                <Download className="w-3.5 h-3.5" />
                Download Paper (.md)
              </Button>
            </a>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full w-8 h-8"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Paper Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 font-sans leading-relaxed text-sm md:text-base">
          {/* Authors & Affiliation */}
          <div className="p-4 rounded-xl bg-muted/40 border border-border/60">
            <div className="text-sm font-medium">
              <strong className="text-foreground">Author:</strong> Aditthan J K
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Department of Computer Science and Engineering (AI &amp; ML), Sri Krishna College of Technology (SKCT)
            </div>
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border/40 text-xs text-muted-foreground">
              <span><strong>Keywords:</strong> AI-generated image detection, Vision Transformer (ViT), Swin Transformer, Ensemble Learning, Explainable AI (XAI), Saliency Map, Grad-CAM, Image Forensics, Flask, Transfer Learning.</span>
            </div>
          </div>

          {/* Abstract */}
          <section className="space-y-3">
            <h3 className="text-base font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <span className="w-1.5 h-4 bg-primary rounded-full inline-block" />
              Abstract
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The ability of a person to distinguish a synthetic picture from a real one just by looking at it has become increasingly compromised by diffusion and GAN advances, posing major implications for misinformation, digital forensics, and general trust. In this paper, <strong>PixelTruth</strong> is introduced: a full-stack digital forensics application that analyzes an uploaded image to determine whether it is a true camera photograph or a machine-made image, presenting a visual saliency heatmap to explain the decision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Instead of training a monolithic detector on a narrow distribution, the system pairs two independently pre-trained checkpoints: the first, <code className="text-xs px-1.5 py-0.5 bg-muted rounded">umm-maybe/AI-image-detector</code>, is a Vision Transformer (ViT) trained on early GAN and VQGAN+CLIP imagery; the second, <code className="text-xs px-1.5 py-0.5 bg-muted rounded">Organika/sdxl-detector</code>, is a Swin Transformer fine-tuned specifically for Stable Diffusion XL output. Their predictions are unified via majority-plus-confidence-averaging fusion. An input-gradient saliency module then maps the pixel-level regions that most affected the classification, served through a stateless Flask REST API microservice pipeline.
            </p>
          </section>

          {/* Architecture Diagram */}
          <section className="space-y-3">
            <h3 className="text-base font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <span className="w-1.5 h-4 bg-primary rounded-full inline-block" />
              System Architecture &amp; Ensemble Pipeline
            </h3>
            <div className="rounded-xl border border-border overflow-hidden bg-black/40 p-2">
              <img
                src="/projects/pixeltruth-architecture.svg"
                alt="Pixel Truth Dual-Transformer Architecture"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center italic">
              Figure 1: Dual-Transformer Ensemble and Gradient Saliency Workflow in PixelTruth.
            </p>
          </section>

          {/* Key Contributions */}
          <section className="space-y-3">
            <h3 className="text-base font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <span className="w-1.5 h-4 bg-primary rounded-full inline-block" />
              Core Research Contributions
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="p-4 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  1. Dual-Architecture Ensemble
                </div>
                <p className="text-xs text-muted-foreground">
                  Fuses patch-based ViT self-attention with hierarchical shifted-window Swin Transformer representations to span both GAN and modern diffusion artifact domains.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  2. Deterministic Fusion Rule
                </div>
                <p className="text-xs text-muted-foreground">
                  Simple, hand-traceable majority voting with confidence-score averaging tie-breaker without requiring joint re-training.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  3. Input-Gradient Saliency
                </div>
                <p className="text-xs text-muted-foreground">
                  Computes pixel-importance maps based on gradients with respect to the top-scoring class score, exposing visual evidence to non-specialists.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  4. Stateless Forensic Security
                </div>
                <p className="text-xs text-muted-foreground">
                  In-memory buffer processing where no uploaded images are written to persistent storage, preserving evidentiary confidentiality.
                </p>
              </div>
            </div>
          </section>

          {/* Mathematical Formulation */}
          <section className="space-y-3">
            <h3 className="text-base font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <span className="w-1.5 h-4 bg-primary rounded-full inline-block" />
              Mathematical Formulation &amp; Fusion Algorithm
            </h3>
            <p className="text-muted-foreground">
              Let <code className="text-xs px-1 bg-muted rounded">s_i^AI</code> and <code className="text-xs px-1 bg-muted rounded">s_i^real</code> be the normalized confidences of the AI-Generated and Real-Image buckets for each model <code className="text-xs px-1 bg-muted rounded">m_i \in M</code>:
            </p>
            <div className="p-4 rounded-xl bg-muted/30 border border-border font-mono text-xs md:text-sm space-y-2">
              <div className="text-foreground">
                S_&#123;AI&#125; = \sum_i s_i^&#123;AI&#125;, \quad S_&#123;real&#125; = \sum_i s_i^&#123;real&#125;
              </div>
              <div className="text-foreground">
                \bar&#123;A&#125;_&#123;AI&#125; = \frac&#123;S_&#123;AI&#125;&#125;&#123;|M|&#125;, \quad \bar&#123;A&#125;_&#123;real&#125; = \frac&#123;S_&#123;real&#125;&#125;&#123;|M|&#125;
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Vote counts are incremented whenever a model passes the 0.5 threshold. In case of disagreement between the two models, the average confidence breaks the tie with synthetic precedence on equal scoring.
            </p>
          </section>

          {/* Honest Appraisal & Future Work */}
          <section className="space-y-3">
            <h3 className="text-base font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <span className="w-1.5 h-4 bg-primary rounded-full inline-block" />
              Critical Evaluation &amp; Real-World Generalization
            </h3>
            <p className="text-muted-foreground editorial-justify leading-relaxed">
              The paper provides an honest, empirical assessment of current synthetic media detection challenges. High-frequency forensic artifact detectors experience noticeable degradation under lossy JPEG re-compression, social media transcoding, and resizing operations. Furthermore, the paper explicitly documents that the explainability module operates as an input-pixel-gradient saliency map rather than feature-layer Grad-CAM, producing fine-grained pixel-level sensitivity distributions.
            </p>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs md:text-sm text-foreground">
              <strong>Research Impact:</strong> Demonstrates a rigorous grasp of transformer self-attention, empirical ensemble evaluation, explainable machine learning (XAI), and stateless microservice deployment—providing a solid benchmark for synthetic media forensics and multi-model vision architectures.
            </div>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-6 border-t border-border bg-muted/20 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground">
            Aditthan J K • SKCT CSE (AI &amp; ML) • <a href="https://github.com/Aditthan-07/Pixel-Truth" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">github.com/Aditthan-07/Pixel-Truth</a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Aditthan-07/Pixel-Truth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline" className="gap-1.5 text-xs">
                <Code className="w-3.5 h-3.5" />
                View Code on GitHub
              </Button>
            </a>
            <a
              href="/pixel-truth-paper.md"
              download="Pixel-Truth-Research-Paper.md"
            >
              <Button size="sm" className="gap-1.5 text-xs">
                <Download className="w-3.5 h-3.5" />
                Download Full Paper
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}