import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

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
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {children}
        </div>
              </ThemeProvider>
      </body>
    </html>
  );
}
