"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { BookOpen } from "lucide-react";

export default function ResearchSection() {
  const paper = DATA.researchPublication;

  return (
    <section id="research" className="scroll-mt-16">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Research &amp; Publications
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground editorial-justify max-w-3xl">
            Authored research treating synthetic media detection as an empirical systems challenge—combining transformer ensemble learning and explainability heatmaps.
          </p>
        </div>
        <div className="border border-border/80 bg-card rounded-2xl overflow-hidden shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-5">
            <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1 text-xs">Authored Research Paper</Badge>
            <Badge variant="outline" className="text-xs font-medium">IEEE Format</Badge>
            <Badge variant="secondary" className="text-xs font-medium">AI Image Forensics</Badge>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Pixel Truth: Dual-Transformer Ensemble for Synthetic Image Forensics
            </h3>
            <p className="text-xs sm:text-sm text-primary font-semibold mt-1.5">{paper.author} • {paper.affiliation}</p>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 editorial-justify leading-relaxed">{paper.summary}</p>
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
        </div>
      </div>
    </section>
  );
}
