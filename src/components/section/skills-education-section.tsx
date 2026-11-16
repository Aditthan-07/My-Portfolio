"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import {
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  BookMarked,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function SkillsEducationSection() {
  return (
    <div className="flex flex-col gap-14">
      {/* 1. Categorized Technical Skills */}
      <section id="skills" className="scroll-mt-16">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Technical Stack &amp; Core Competencies
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground editorial-justify max-w-3xl">
              An authentic builder toolkit spanning applied deep learning, cross-platform mobile prototyping, AI-assisted development workflows, and modern deployment tools.
            </p>
          </BlurFade>

          <div className="grid gap-4 sm:grid-cols-2">
            {DATA.skillCategories.map((cat, idx) => (
              <BlurFade
                key={cat.title}
                delay={BLUR_FADE_DELAY * 8 + idx * 0.05}
                className="h-full"
              >
                <div className="p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/40 shadow-xs transition-all h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-3.5 flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-primary rounded-full inline-block" />
                      {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium border border-border/70 bg-muted/40 text-foreground px-3 py-1.5 rounded-lg hover:border-primary/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Academic Background (Enriched) */}
      <section id="education" className="scroll-mt-16">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Academic Background
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground editorial-justify max-w-3xl">
              Rigorous undergraduate engineering curriculum in computer science and applied artificial intelligence at SKCT Coimbatore.
            </p>
          </BlurFade>

          {DATA.education.map((edu, index) => (
            <BlurFade
              key={edu.school}
              delay={BLUR_FADE_DELAY * 10 + index * 0.05}
            >
              <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card hover:border-primary/40 shadow-xs transition-all space-y-6">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-bold text-xl text-foreground">
                        {edu.school}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {edu.location}
                      </Badge>
                    </div>
                    <div className="text-sm sm:text-base text-primary font-semibold mt-1">
                      {edu.degree}
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xs font-mono text-muted-foreground">
                      {edu.start} – {edu.end}
                    </div>
                    <div className="inline-block px-3 py-1 mt-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {edu.grade}
                    </div>
                  </div>
                </div>

                {/* Core Coursework Tags */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <BookMarked className="w-3.5 h-3.5 text-primary" />
                    <span>Core Coursework:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coreCoursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-medium border border-border/60 bg-muted/30 text-foreground px-2.5 py-1 rounded-md"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Achievements */}
                <div className="space-y-2.5 pt-1 border-t border-border/40">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Key Academic Achievements &amp; Projects:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {edu.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="editorial-justify">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* 3. Certifications & Proctored Coursework */}
      <section id="certifications" className="scroll-mt-16">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Certifications &amp; Proctored Coursework
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground editorial-justify max-w-3xl">
              Proctored certifications evaluating transformer foundations, large language models, data analysis, and algorithmic problem-solving.
            </p>
          </BlurFade>

          <div className="grid gap-4 sm:grid-cols-3">
            {DATA.certifications.map((cert, index) => (
              <BlurFade
                key={cert.title}
                delay={BLUR_FADE_DELAY * 12 + index * 0.05}
                className="h-full"
              >
                <div className="p-5 rounded-2xl border border-border/80 bg-card hover:border-primary/40 shadow-xs transition-all h-full flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {cert.period}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-foreground leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed editorial-justify">
                      {cert.description}
                    </p>
                  </div>
                  <Badge variant="secondary" className="w-fit text-[11px] font-medium">
                    {cert.type}
                  </Badge>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Focus Areas & What Drives Me */}
      <section id="focus" className="scroll-mt-16">
        <div className="flex flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Focus Areas &amp; What Drives Me
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground editorial-justify max-w-3xl">
              Grounded in my core philosophy: <span className="font-editorial-italic font-serif font-medium text-foreground">&ldquo;Built for AI, Wired for Business.&rdquo;</span> Bridging rigorous technical execution with real product value.
            </p>
          </BlurFade>

          <div className="grid gap-4 sm:grid-cols-2">
            {DATA.focusAreas.map((item, index) => (
              <BlurFade
                key={item.title}
                delay={BLUR_FADE_DELAY * 14 + index * 0.05}
                className="h-full"
              >
                <div className="p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/40 shadow-xs transition-all h-full flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed editorial-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}