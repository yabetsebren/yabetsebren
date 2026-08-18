import type React from "react";
import type { Metadata } from "next";
import { Spectral, Cinzel, Special_Elite } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import CatEyesBackground from "@/components/ui/cat-eyes-background";

// Gothic, sharp, and legible: Cinzel's inscriptional caps carry the drama in
// headings, Spectral is a serif purpose-built for on-screen reading in body
// copy, and Special Elite's distressed typewriter strokes give labels and
// metadata an old case-file edge.
const bodyFont = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const headingFont = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-heading",
});
const accentFont = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Yabets Ebren - Graduate Student & Researcher",
  description: "Portfolio website showcasing my work and personal opinions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bodyFont.className} ${headingFont.variable} ${accentFont.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background flex flex-col">
            <CatEyesBackground />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
