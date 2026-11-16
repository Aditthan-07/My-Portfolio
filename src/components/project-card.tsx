"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github, ExternalLink, Smartphone, UploadCloud, ImageIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LinkItem {
  type: string;
  href: string;
}

interface Props {
  title: string;
  badge?: string;
  description: string;
  technologies: readonly string[];
  links: readonly LinkItem[];
  image?: string;
  video?: string;
  visualSlotLabel?: string;
  visualSlotHint?: string;
  className?: string;
}

export function ProjectCard({
  title,
  badge,
  description,
  technologies,
  links,
  image,
  video,
  visualSlotLabel,
  visualSlotHint,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border/80 bg-card rounded-2xl overflow-hidden hover:border-primary/40 shadow-sm transition-all duration-300",
        className
      )}
    >
      {/* Visual Slot / Video / Screenshot Container */}
      <div className="relative w-full aspect-video bg-muted/30 border-b border-border/60 overflow-hidden flex flex-col items-center justify-center text-center group">
        {video ? (
          <div className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ) : image ? (
          <div className="w-full h-full flex items-center justify-center bg-black/40 dark:bg-black/60 p-4">
            <img
              src={image}
              alt={title}
              className="max-h-full max-w-full object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="w-full h-full border border-dashed border-border/80 rounded-xl bg-background/50 flex flex-col items-center justify-center p-4 space-y-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <UploadCloud className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <div className="text-xs font-semibold text-foreground">
                {visualSlotLabel || "Visual Pending — Upload Slot"}
              </div>
              <p className="text-[11px] text-muted-foreground max-w-xs leading-tight">
                {visualSlotHint || "Awaiting exact user-provided screenshot or GIF"}
              </p>
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground border border-border/60">
              Awaiting User File Drop-in
            </span>
          </div>
        )}

        {badge && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="text-[11px] font-medium bg-background/90 backdrop-blur-sm border shadow-xs">
              {badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="font-bold text-lg sm:text-xl text-foreground leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed editorial-justify">
            {description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium border border-border/80 bg-muted/40 text-foreground px-2 py-0.5 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border/60">
          {links.map((link, idx) => {
            const isApk = link.type.toLowerCase().includes("apk");
            const isDemo = link.type.toLowerCase().includes("demo");
            const isGit = link.type.toLowerCase().includes("git") || link.type.toLowerCase().includes("repo");

            return (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant={isApk || isDemo ? "default" : "outline"}
                  className="gap-1.5 text-xs h-8 px-3"
                >
                  {isGit && <Github className="w-3.5 h-3.5" />}
                  {isApk && <Smartphone className="w-3.5 h-3.5" />}
                  {isDemo && <ExternalLink className="w-3.5 h-3.5" />}
                  {link.type}
                </Button>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}