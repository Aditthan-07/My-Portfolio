import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";
import { DATA } from "@/data/resume";
import { WelcomeScreen } from "@/components/welcome-screen";

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col relative">
      <WelcomeScreen />
      <div className="pt-10 sm:pt-16 pb-28 sm:pb-36 flex flex-col gap-16 sm:gap-24">
        {/* 1. Hero & Career Brand Statement */}
        <section id="hero" className="scroll-mt-20">
          <div className="w-full space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-semibold tracking-tight shadow-xs">
              <span>{DATA.positioningPill}</span>
            </div>

            <div className="gap-8 flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
              <div className="gap-3.5 flex flex-col flex-1">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground text-balance leading-[1.1]">
                  Hi, I&apos;m Aditthan!
                </h1>

                <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-[680px] editorial-justify">
                  {DATA.description}
                </p>

                <div className="flex flex-wrap items-center gap-2.5 pt-3">
                  <a href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="gap-1.5 text-xs h-9 px-3.5">
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </Button>
                  </a>
                  <a href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noopener noreferrer">
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
                </div>
              </div>

              {/* Profile Avatar */}
              <div className="shrink-0">
                <Avatar className="w-36 h-36 md:w-44 md:h-44 aspect-square rounded-2xl border border-border/60 shadow-sm overflow-hidden bg-muted/30">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-cover object-top brightness-105 contrast-105"
                  />
                  <AvatarFallback className="font-bold text-2xl">{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
