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

export default async function HomePage() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 2); // Get the 2 most recent posts

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src="/placeholder.svg?height=64&width=64"
              alt="Yabets Ebren"
            />
            <AvatarFallback>YE</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Yabets Ebren</h1>
            <p className="text-muted-foreground">
              Graduate Student & Researcher
            </p>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
          Creating interactive and immersive software with a focus on detail and
          utilizing cutting-edge design techniques.
        </p>

        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:john@example.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Recent Blog Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Latest Posts
        </h2>
        <p className="text-muted-foreground mb-8">
          Thoughts on development, design, and technology
        </p>

        <div className="space-y-6">
          {recentPosts.map((post) => (
            <article key={post.id} className="border-l-4 border-primary pl-6">
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
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground mb-8">
          A selection of my recent work and experiments
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="group hover:shadow-lg transition-shadow">
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

          <Card className="group hover:shadow-lg transition-shadow">
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
