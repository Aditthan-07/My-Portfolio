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
    </div>
  );
}
