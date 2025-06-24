import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/server-utils";
import JaguarBackground from "@/components/ui/jaguar-background";

export default async function HomePage() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 2); // Get the 2 most recent posts

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl relative">
      {/* Jaguar Skin Background */}
      <JaguarBackground variant="primary" />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl animate-float-delayed opacity-30"></div>
      </div>

      {/* Hero Section */}
      <div className="mb-16 animate-fade-in-up relative z-10">
        <div className="flex items-center gap-4 mb-6 animate-stagger-1">
          <Avatar className="h-16 w-16 animate-scale-in">
            <AvatarImage
              src="/profile-photo.jpg?height=64&width=64"
              className="object-cover"
              alt="Yabets Ebren"
            />
            <AvatarFallback>YE</AvatarFallback>
          </Avatar>
          <div className="animate-slide-in-right animate-stagger-2">
            <h1 className="text-3xl font-bold text-foreground">Yabets Ebren</h1>
            <p className="text-muted-foreground">
              Graduate Student & Researcher
            </p>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-6 max-w-2xl animate-fade-in animate-stagger-3">
          Creating interactive and immersive software with a focus on detail and
          utilizing cutting-edge design techniques.
        </p>

        <div className="flex gap-4 animate-fade-in animate-stagger-4">
          <Button variant="ghost" size="icon" asChild className="hover-lift">
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover-lift">
            <Link href="https://github.com" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover-lift">
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover-lift">
            <Link href="mailto:john@example.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Recent Blog Posts */}
      <section className="mb-16 animate-fade-in animate-stagger-5 relative z-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Latest Posts
        </h2>
        <p className="text-muted-foreground mb-8">
          Thoughts on development, design, and technology
        </p>

        <div className="space-y-6">
          {recentPosts.map((post, index) => (
            <article
              key={post.id}
              className="border-l-4 border-primary pl-6 animate-slide-in-left animate-stagger-6"
            >
              <Link href={`/news/${post.id}`} className="group">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {post.category || "Blog"} • {post.date}
                </p>
                <p className="text-muted-foreground">{post.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-16 relative z-10">
        <div className="animate-fade-in animate-stagger-5">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mb-8">
            A selection of my recent work and experiments
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="group hover-lift hover-glow animate-scale-in animate-stagger-6">
            <CardHeader>
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
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
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
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
    </div>
  );
}
