"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Code2 } from "lucide-react";

export default function SkillsEducationSection() {
  return (
    <div className="flex flex-col gap-14">
      <section id="skills" className="scroll-mt-16">
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Technical Stack &amp; Core Competencies
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground editorial-justify max-w-3xl">
            An authentic builder toolkit spanning applied deep learning, cross-platform mobile prototyping, and modern deployment tools.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {DATA.skillCategories.map((cat) => (
              <div key={cat.title} className="p-6 rounded-2xl border border-border/80 bg-card shadow-xs">
                <h3 className="text-base font-bold text-foreground mb-3.5">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="text-xs font-medium border border-border/70 bg-muted/40 text-foreground px-3 py-1.5 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Academic Background (Enriched) */}
      <section id="education" className="scroll-mt-16">
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Academic Background
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground editorial-justify max-w-3xl">
            Rigorous undergraduate engineering curriculum in computer science and applied artificial intelligence at SKCT Coimbatore.
          </p>
          {DATA.education.map((edu) => (
            <div key={edu.school} className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card space-y-4">
              <h3 className="font-bold text-xl text-foreground">{edu.school}</h3>
              <div className="text-sm sm:text-base text-primary font-semibold">{edu.degree}</div>
              <div className="text-xs font-mono text-muted-foreground">{edu.start} – {edu.end} • {edu.grade}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Certifications & Proctored Coursework */}
      <section id="certifications" className="scroll-mt-16">
        <div className="flex flex-col gap-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Certifications &amp; Proctored Coursework
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {DATA.certifications.map((cert) => (
              <div key={cert.title} className="p-5 rounded-2xl border border-border/80 bg-card space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">{cert.issuer}</span>
                <h3 className="font-bold text-sm sm:text-base text-foreground leading-snug">{cert.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
