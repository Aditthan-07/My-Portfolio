"use client";

import { useEffect, useState } from "react";
import { DATA } from "@/data/resume";
import { ArrowUp } from "lucide-react";

export function TopHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Fade in smoothly once the visitor scrolls past the welcome screen and Hero section
      const threshold = window.innerHeight ? window.innerHeight * 0.85 : 600;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-all duration-300 ease-out ${
        scrolled
          ? "opacity-100 translate-y-0 pointer-events-auto shadow-xs"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 h-14 flex items-center justify-between">
        {/* Left: Stylized Name with Smooth Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 text-left cursor-pointer transition-colors focus:outline-hidden"
          title="Back to Top"
        >
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
            {DATA.name}
          </span>
          <ArrowUp className="w-3.5 h-3.5 text-muted-foreground opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
        </button>

        {/* Right: Subtle Status Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-tight shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Internships</span>
        </div>
      </div>
    </header>
  );
}
