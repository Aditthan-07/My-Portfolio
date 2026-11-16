import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import ContactSection from "@/components/section/contact-section";
import ResearchSection from "@/components/section/research-section";
import ProjectsSection from "@/components/section/projects-section";
import SkillsEducationSection from "@/components/section/skills-education-section";
import { WelcomeScreen } from "@/components/welcome-screen";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Download,
  ExternalLink,
  Sparkles,
  User,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col relative">
      {/* 0. Dedicated Full-Viewport Welcome Screen (100dvh) */}
      <WelcomeScreen />

      {/* Main Portfolio Content — Smoothly Revealed on Scroll */}
      <div className="pt-10 sm:pt-16 pb-28 sm:pb-36 flex flex-col gap-16 sm:gap-24">
        {/* 1. Hero & Career Brand Statement */}
        <section id="hero" className="scroll-mt-20">
          <div className="w-full space-y-6">
            {/* Authentic Institution-Agnostic Career Positioning Pill */}
            <BlurFade delay={BLUR_FADE_DELAY} duration={0.55} yOffset={24} inView={true}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-semibold tracking-tight shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>{DATA.positioningPill}</span>
              </div>
            </BlurFade>

            <div className="gap-8 flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
              <div className="gap-3.5 flex flex-col flex-1">
                <BlurFade
                  delay={BLUR_FADE_DELAY * 2}
                  duration={0.55}
                  yOffset={24}
                  inView={true}
                >
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground text-balance leading-[1.1]">
                    Hi, I&apos;m Aditthan!
                  </h1>
                </BlurFade>

                <BlurFade
                  delay={BLUR_FADE_DELAY * 3}
                  duration={0.55}
                  yOffset={24}
                  inView={true}
                >
                  <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-[680px] editorial-justify">
                    {DATA.description}
                  </p>
                </BlurFade>

                {/* Quick Links & Resume Actions */}
                <BlurFade
                  delay={BLUR_FADE_DELAY * 4}
                  duration={0.55}
                  yOffset={24}
                  inView={true}
                >
                  <div className="flex flex-wrap items-center gap-2.5 pt-3">
                    <a
                      href={DATA.contact.social.GitHub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="gap-1.5 text-xs h-9 px-3.5">
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </Button>
                    </a>

                    <a
                      href={DATA.contact.social.LinkedIn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="gap-1.5 text-xs h-9 px-3.5">
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn
                      </Button>
                    </a>

                    <a href={`mailto:${DATA.contact.email}`}>
                      <Button size="sm" variant="outline" className="gap-1.5 text-xs h-9 px-3.5">
                        <Mail className="w-3.5 h-3.5" />
                        Email
                      </Button>
                    </a>

                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-1.5 text-xs font-semibold h-9 px-3.5">
                        <FileText className="w-3.5 h-3.5" />
                        View Resume
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </Button>
                    </a>

                    <a href="/resume.pdf" download="Aditthan-J-K-Resume.pdf">
                      <Button size="sm" variant="ghost" className="gap-1.5 text-xs h-9 px-3">
                        <Download className="w-3.5 h-3.5" />
                        Download
                      </Button>
                    </a>
                  </div>
                </BlurFade>
              </div>

              {/* Profile Avatar */}
              <BlurFade
                delay={BLUR_FADE_DELAY * 2}
                duration={0.55}
                yOffset={24}
                inView={true}
                className="shrink-0"
              >
                <Avatar className="w-36 h-36 md:w-44 md:h-44 aspect-square rounded-2xl border border-border/60 shadow-sm overflow-hidden bg-muted/30">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-cover object-top brightness-105 contrast-105"
                  />
                  <AvatarFallback className="font-bold text-2xl">{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* 2. About Me */}
        <section id="about" className="scroll-mt-20">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 2} duration={0.55} yOffset={24} inView={true}>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  About Me
                </h2>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3} duration={0.55} yOffset={24} inView={true}>
              <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card hover:border-primary/40 shadow-xs transition-all text-sm sm:text-base text-muted-foreground space-y-4 leading-relaxed">
                <p className="editorial-justify">
                  I am a <strong className="text-foreground">Pre-Final Year undergraduate</strong> in Computer Science &amp; Engineering (AI &amp; ML) at Sri Krishna College of Technology (SKCT), Coimbatore, maintaining a cumulative GPA of <strong className="text-foreground">8.03 / 10.0</strong>.
                </p>
                <p className="editorial-justify">
                  My work spans <strong className="text-foreground">Applied AI, rapid product prototyping, mobile applications, and interactive web builds</strong>, paired with strong product and business intuition. Rather than confining myself to abstract research or isolated code, I focus on building functional systems from scratch—integrating transformer models, local vector databases, and responsive mobile interfaces into live, usable tools that deliver genuine user impact.
                </p>
                <p className="editorial-justify">
                  Author of an IEEE-format research paper on <span className="font-editorial-italic font-serif text-foreground font-medium">&ldquo;Pixel Truth: A Dual-Transformer Ensemble for Detecting AI-Generated Images&rdquo;</span>, exploring multi-model vision architectures and explainability. I combine rigorous technical foundations with an agile, vibe-coding workflow to take product ideas from napkin concept to working prototype fast. I am actively seeking software engineering and applied AI internship opportunities where I can build and scale meaningful products.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* 3. Research & Publications (Pixel Truth Spotlight) */}
        <BlurFade delay={BLUR_FADE_DELAY * 2} duration={0.55} yOffset={24} inView={true}>
          <ResearchSection />
        </BlurFade>

        {/* 4. Projects (Unified 2-Column Desktop Grid for 6 Projects) */}
        <BlurFade delay={BLUR_FADE_DELAY * 2} duration={0.55} yOffset={24} inView={true}>
          <ProjectsSection />
        </BlurFade>

        {/* 5. Education, Categorized Technical Stack & Coursework */}
        <BlurFade delay={BLUR_FADE_DELAY * 2} duration={0.55} yOffset={24} inView={true}>
          <SkillsEducationSection />
        </BlurFade>

        {/* 6. Contact & Minimal Footer */}
        <BlurFade delay={BLUR_FADE_DELAY * 2} duration={0.55} yOffset={24} inView={true}>
          <ContactSection />
        </BlurFade>
      </div>
    </main>
  );
}