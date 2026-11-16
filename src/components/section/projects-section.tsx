import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { Code2 } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-16">
      <div className="flex min-h-0 flex-col gap-y-8">
        {/* Section Header */}
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Projects
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground editorial-justify max-w-3xl">
            Applied software, offline intelligence tools, mobile prototypes, and interactive engines. Designed with an emphasis on local data sovereignty, performance, and pragmatic user value.
          </p>
        </div>

        {/* 2-Column Desktop Grid for 6 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full auto-rows-fr">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.id}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                title={project.title}
                badge={project.badge}
                description={project.description}
                technologies={project.technologies}
                links={project.links}
                image={project.image}
                video={project.video}
                visualSlotLabel={project.visualSlotLabel}
                visualSlotHint={project.visualSlotHint}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}