"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

export function WelcomeScreen() {
  const { scrollY } = useScroll();

  // Gentle fade-out and parallax-lift as the visitor scrolls the initial 400px
  const opacity = useTransform(scrollY, [0, 380], [1, 0]);
  const y = useTransform(scrollY, [0, 380], [0, -70]);
  const scale = useTransform(scrollY, [0, 380], [1, 0.96]);

  const handleScrollDown = () => {
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="h-dvh min-h-screen w-full flex flex-col justify-between items-center text-center select-none relative pt-12 pb-10 sm:pb-14">
      {/* Top spacer for optical centering */}
      <div className="h-6 w-full" />

      {/* Prominent Centered Welcome Statement */}
      <motion.div
        style={{ opacity, y, scale }}
        className="flex flex-col items-center justify-center max-w-4xl px-4 space-y-4 will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-3"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-foreground leading-[1.06]">
            Welcome to{" "}
            <span className="block sm:inline text-primary tracking-tight font-black underline decoration-primary/20 decoration-wavy underline-offset-8">
              My Portfolio
            </span>
          </h1>
        </motion.div>
      </motion.div>

      {/* Subtle Minimalist Scroll Cue */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-2.5 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer focus:outline-hidden"
          aria-label="Scroll to explore portfolio"
        >
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Scroll to explore
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-9 rounded-full border border-border/80 flex items-start justify-center p-1.5 shadow-2xs group-hover:border-primary/60 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground/60 -mt-1 group-hover:text-primary group-hover:translate-y-0.5 transition-all duration-300" />
        </button>
      </motion.div>
    </section>
  );
}
