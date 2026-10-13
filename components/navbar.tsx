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
import Logo from "@/components/ui/logo";
import { Menu, Download, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";

const navigation = [
  { name: "About", href: "/" },
  { name: "Updates", href: "/news" },
  { name: "Publications", href: "/publications" },
  { name: "Projects", href: "/projects" },
  { name: "Teaching", href: "/teaching" },
  { name: "Skills", href: "/skills" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/yabetsebren", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/yabets-ebren", icon: Linkedin },
  { name: "Email", href: "mailto:yabets.ebren@student.montana.edu", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-foreground bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo size={64} className="h-16 w-16" />
            <div className="hidden sm:block leading-tight">
              <div className="font-heading font-semibold text-foreground">
                Yabets Ebren
              </div>
              <div className="text-xs text-muted-foreground">
                Grad Student & ML Researcher
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative border-2 border-transparent px-3 py-1 font-heading text-sm font-extrabold uppercase tracking-tight transition-colors hover:border-black hover:bg-[#FFE600] hover:text-black",
                    isActive && "border-black bg-[#FFE600] text-black"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden xl:flex items-center gap-1">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  className="border-2 border-transparent p-2 transition-colors hover:border-black hover:bg-[#FFE600] hover:text-black"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>

            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex hover-lift"
            >
              <a href={asset("/resume.pdf")} download>
                <Download className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
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
                        src={asset("/profile-photo.jpg?height=40&width=40")}
                        className="object-cover"
                        alt="Yabets Girma Ebren"
                      />
                      <AvatarFallback>YE</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-heading font-semibold text-foreground">
                        Yabets Girma Ebren
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Grad Student & ML Researcher
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
                            "flex items-center gap-3 font-heading text-2xl font-extrabold uppercase tracking-tight transition-colors hover:text-primary",
                            isActive && "text-primary"
                          )}
                        >
                          {item.name}
                          {isActive && (
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          )}
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="flex items-center gap-2">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target={
                          social.href.startsWith("mailto:")
                            ? undefined
                            : "_blank"
                        }
                        onClick={() => setIsOpen(false)}
                        className="border-2 border-black p-2.5 transition-colors hover:bg-[#FFE600]"
                      >
                        <social.icon className="h-4 w-4" />
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    ))}
                  </div>

                  <Button asChild className="hover-lift">
                    <a
                      href={asset("/resume.pdf")}
                      download
                      onClick={() => setIsOpen(false)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
