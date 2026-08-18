import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CatFrame from "@/components/ui/cat-frame";
import CatTail from "@/components/ui/cat-tail";
import SectionTitle from "@/components/ui/section-title";
import PawDivider from "@/components/ui/paw-divider";
import HorizontalScroller from "@/components/ui/horizontal-scroller";
import LatestPostsCarousel from "@/components/latest-posts-carousel";
import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  PawPrint,
} from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/server-utils";

const skillCategories = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    label: "DevOps & Tools",
    skills: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD"],
  },
  {
    label: "Design & Process",
    skills: ["Figma", "UI/UX Design", "Agile", "Scrum", "Testing"],
  },
];

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl relative">
      {/* Hero Section */}
      <div className="mb-16 grid gap-6 md:grid-cols-[minmax(0,320px)_1fr] relative z-10">
        {/* Profile Card */}
        <div className="relative flex flex-col items-center text-center gap-4 rounded-2xl border bg-card p-8 animate-fade-in-up animate-stagger-1 hover-glow">
          <CatTail className="absolute -bottom-2 -right-3 h-16 w-10" />
          <CatFrame size={176} className="animate-scale-in">
            <Avatar className="h-full w-full ring-4 ring-primary/30 shadow-lg">
              <AvatarImage
                src="/profile-photo.jpg?height=176&width=176"
                className="object-cover"
                alt="Yabets Ebren"
              />
              <AvatarFallback className="text-3xl">YE</AvatarFallback>
            </Avatar>
          </CatFrame>

          <div>
            <h1 className="text-3xl font-bold text-foreground font-heading">
              Yabets Ebren
            </h1>
            <p className="text-muted-foreground">ML Researcher</p>
            <p className="text-muted-foreground text-m">
              Masters Student at MSU
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Open to new opportunities
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full hover-lift"
            >
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full hover-lift"
            >
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full hover-lift"
            >
              <Link href="mailto:john@example.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* About Me Card */}
        <div className="rounded-2xl border bg-card p-8 animate-fade-in-up animate-stagger-2 hover-glow">
          <SectionTitle className="text-2xl">About Me</SectionTitle>
          <p className="text-muted-foreground leading-relaxed">
            I am a machine learning researcher currently working at MSU's Computational Inteligence Lab (Advisor Dr. Neda Nazemi). My research foucses on causal inference, effective causal discovery, and application clinical ML. <br></br>  
          <br></br> I focus on the following </p>
        </div>
      </div>

      



      <PawDivider />

      {/* Recent Blog Posts */}
      <section className="mb-8 animate-fade-in animate-stagger-5 relative z-10">
        <SectionTitle className="text-2xl">Latest Posts</SectionTitle>
        <p className="text-muted-foreground mb-8">
          Posts, news, and announcements
        </p>

        <LatestPostsCarousel posts={posts} />
      </section>

      <PawDivider />

      {/* Featured Projects */}
      <section className="mb-8 relative z-10">
        <div className="animate-fade-in animate-stagger-5">
          <SectionTitle className="text-2xl">Featured Projects</SectionTitle>
          <p className="text-muted-foreground mb-8">
            A selection of my recent work and experiments
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="group hover-lift hover-glow animate-scale-in animate-stagger-6">
            <CardHeader>
              <div className="aspect-video bg-gradient-to-br from-zinc-900 via-purple-950 to-amber-600 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-white text-lg font-semibold">
                  Project Demo
                </div>
              </div>
              <CardTitle>E-Commerce Platform</CardTitle>
              <CardDescription>React • TypeScript • Node.js</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A full-stack e-commerce solution with modern UI/UX and robust
                backend architecture.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover-lift hover-glow animate-scale-in animate-stagger-6">
            <CardHeader>
              <div className="aspect-video bg-gradient-to-br from-violet-700 to-purple-950 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-white text-lg font-semibold">
                  AI Dashboard
                </div>
              </div>
              <CardTitle>AI Analytics Dashboard</CardTitle>
              <CardDescription>Next.js • Python • TensorFlow</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Real-time analytics dashboard powered by machine learning
                algorithms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <PawDivider />
            {/* Skills & Tools */}
      <section className="mb-8 relative z-10 animate-fade-in animate-stagger-5">
        <div className="flex items-center gap-2 mb-2">
          <PawPrint className="h-3 w-3 text-primary" />
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Skills & Tools
          </span>
        </div>
        <SectionTitle className="text-2xl">What I Work With</SectionTitle>

        <div className="rounded-2xl border bg-card p-8 hover-glow">
          {skillCategories.map((category, i) => (
            <div
              key={category.label}
              className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-4 ${
                i !== skillCategories.length - 1
                  ? "border-b border-border"
                  : ""
              } ${i === 0 ? "pt-0" : ""}`}
            >
              <span className="w-40 shrink-0 text-xs font-semibold tracking-wide text-primary uppercase">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <PawDivider/>

      {/* Teaching */}
      <section id="teaching" className="mb-8 relative z-10 scroll-mt-24">
        <div className="animate-fade-in animate-stagger-5">
          <SectionTitle className="text-2xl">Teaching</SectionTitle>
          <p className="text-muted-foreground mb-8">
            Courses I've taught or assisted with
          </p>
        </div>

        <HorizontalScroller>
          <Card className="group hover-lift hover-glow animate-scale-in animate-stagger-6 w-[320px] flex-shrink-0">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <CardTitle> Data Structures and Algorithms</CardTitle>
                  <CardDescription>
                    Teaching Assistant • Montana State University • Fall 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Led weekly lab sections and office hours, graded
                assignments, and helped students build intuition for core
                data structures and algorithms.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover-lift hover-glow animate-scale-in animate-stagger-6 w-[320px] flex-shrink-0">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <CardTitle>Human Computer Interaction</CardTitle>
                  <CardDescription>
                    Teaching Assistant • Montana State University • Spring 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Held a guest lecture introducing students to 
              </p>
            </CardContent>
          </Card>
          <Card className="group hover-lift hover-glow animate-scale-in animate-stagger-6 w-[320px] flex-shrink-0">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <CardTitle>Programming with C</CardTitle>
                  <CardDescription>
                    Teaching Assistant • Montana State University • Spring 2026
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Held a guest lecture introducing students to 
              </p>
            </CardContent>
          </Card>
          <Card className="group hover-lift hover-glow animate-scale-in animate-stagger-6 w-[320px] flex-shrink-0">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <CardTitle>Human Computer Interaction</CardTitle>
                  <CardDescription>
                    Teaching Assistant • Montana State University • Spring 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Held a guest lecture introducing students to 
              </p>
            </CardContent>
          </Card>
        </HorizontalScroller>
      </section>
    </div>
  );
}
