import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { TopHeader } from "@/components/top-header";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://aditthan.dev"),
  title: {
    default: "Aditthan J K | Applied AI & Product Builder",
    template: "%s | Aditthan J K",
  },
  description: "Aditthan J K — Applied AI & Product Builder. Pre-Final Year CSE (AI & ML) at SKCT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased relative")}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <TopHeader />
            <div className="absolute inset-0 top-0 left-0 right-0 h-[140px] overflow-hidden z-0 pointer-events-none">
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
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {children}
        </div>
                        </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
