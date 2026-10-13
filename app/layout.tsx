import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Bricolage_Grotesque, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const bodyFont = Space_Grotesk({ subsets: ["latin"] });
const headingFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
});
const accentFont = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
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
          forcedTheme="light"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
