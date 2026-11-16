import Navbar from "@/components/navbar";
import { TopHeader } from "@/components/top-header";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Applied AI & Product Builder`,
    template: `%s | ${DATA.name}`,
  },
  description: `${DATA.name} — Applied AI & Product Builder. Pre-Final Year CSE (AI & ML) at SKCT. Practical deep learning systems, mobile applications, and synthetic media forensics research.`,
  openGraph: {
    title: `${DATA.name} | Applied AI & Product Builder`,
    description: `${DATA.name} — Applied AI & Product Builder. Built for AI, Wired for Business.`,
    url: DATA.url,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | Applied AI & Product Builder`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative selection:bg-primary/20 selection:text-foreground"
        )}
      >
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
            <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
