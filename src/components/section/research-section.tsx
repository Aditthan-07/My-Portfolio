"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function ResearchSection() {
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
            Authored research treating synthetic media detection as an empirical systems challenge.
          </p>
        </div>
        <div className="border border-border/80 bg-card rounded-2xl p-6 sm:p-8 space-y-4">
          <Badge className="bg-primary text-primary-foreground">Authored Research Paper</Badge>
          <h3 className="text-2xl font-bold">Pixel Truth: Dual-Transformer Ensemble for Synthetic Image Forensics</h3>
        </div>
      </div>
    </section>
  );
}
