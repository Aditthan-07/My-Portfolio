"use client";

import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  return (
    <div id="contact" className="space-y-12 scroll-mt-16">
      {/* Contact Card */}
      <div className="border border-border/80 rounded-2xl p-6 sm:p-10 relative bg-card overflow-hidden">
        {/* Background Subtle Grid */}
        <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-2xl overflow-hidden pointer-events-none">
          <FlickeringGrid
            className="h-full w-full opacity-40 dark:opacity-20"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>

        <div className="relative flex flex-col items-center gap-6 text-center max-w-2xl mx-auto">
          <Badge variant="outline" className="px-3 py-1 text-xs font-semibold bg-background/80 backdrop-blur-sm">
            Open to Opportunities &amp; Collaborations
          </Badge>

          <div className="space-y-2.5">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Let&apos;s Connect &amp; Build
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed editorial-justify max-w-xl mx-auto">
              I am open to software engineering internships, collaborative product builds, and technical discussions around Applied AI, mobile apps, and intelligent system architectures. Reach out anytime!
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full text-left pt-2">
            <a
              href={`mailto:${DATA.contact.email}`}
              className="flex items-center gap-3.5 p-4 rounded-xl border border-border/80 bg-background/70 hover:border-primary/50 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">Email</div>
                <div className="text-xs sm:text-sm font-medium text-foreground truncate">{DATA.contact.email}</div>
              </div>
            </a>

            <a
              href="tel:+919486244484"
              className="flex items-center gap-3.5 p-4 rounded-xl border border-border/80 bg-background/70 hover:border-primary/50 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">Phone</div>
                <div className="text-xs sm:text-sm font-medium text-foreground truncate">{DATA.contact.tel}</div>
              </div>
            </a>

            <a
              href={DATA.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-xl border border-border/80 bg-background/70 hover:border-primary/50 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">Location</div>
                <div className="text-xs sm:text-sm font-medium text-foreground truncate">Madurai &amp; Coimbatore, TN, India</div>
              </div>
            </a>

            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-xl border border-border/80 bg-background/70 hover:border-primary/50 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">LinkedIn</div>
                <div className="text-xs sm:text-sm font-medium text-foreground truncate">in/aditthan-jk</div>
              </div>
            </a>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a href={`mailto:${DATA.contact.email}`}>
              <Button size="sm" className="gap-2 text-xs font-semibold px-4 h-9">
                <Mail className="w-3.5 h-3.5" />
                Send Email Message
              </Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="gap-2 text-xs px-4 h-9">
                <FileText className="w-3.5 h-3.5" />
                View Resume (PDF)
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </Button>
            </a>
            <a href="/resume.pdf" download="Aditthan-J-K-Resume.pdf">
              <Button size="sm" variant="ghost" className="gap-2 text-xs px-4 h-9">
                <Download className="w-3.5 h-3.5" />
                Download
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* STRICT MINIMAL FOOTER: ONLY "Designed and engineered by Aditthan J K" */}
      <footer className="w-full text-center py-6 border-t border-border/50">
        <p className="text-xs sm:text-sm text-muted-foreground font-medium">
          Designed and engineered by Aditthan J K
        </p>
      </footer>
    </div>
  );
}