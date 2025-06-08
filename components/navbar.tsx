"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import Logo from "@/components/ui/logo";
import { Menu } from "lucide-react";
import { cn } from "@/lib/cn";

const navigation = [
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "News/Blog", href: "/news" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size={64} className="h-16 w-16" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="text-lg font-semibold mb-6">
                  Navigation Menu
                </SheetTitle>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="Profile"
                      />
                      <AvatarFallback>YE</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">
                        Yabets Ebren
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Graduate Student & Researcher
                      </div>
                    </div>
                  </div>

                  <nav className="flex flex-col gap-4">
                    {navigation.map((item) => {
                      const isActive =
                        pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href));

                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-3 text-lg font-medium transition-colors hover:text-foreground",
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.name}
                          {isActive && (
                            <div className="h-2 w-2 rounded-full bg-emerald-500" />
                          )}
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
