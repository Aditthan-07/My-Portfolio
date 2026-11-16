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
          </div>
        </section>
      </div>
    </main>
  );
}
