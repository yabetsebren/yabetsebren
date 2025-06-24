import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAllPosts, PostMeta } from "@/lib/server-utils";
import JaguarBackground from "@/components/ui/jaguar-background";

export default async function NewsPage() {
  const posts: PostMeta[] = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl relative">
      {/* Jaguar Skin Background */}
      <JaguarBackground variant="primary" />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="mb-8 animate-fade-in-up relative z-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">News & Blog</h1>
        <p className="text-muted-foreground">
          Thoughts on development, design, and technology trends
        </p>
      </div>

      {/* Featured Post */}
      <Card className="mb-8 hover-lift hover-glow animate-fade-in-up animate-stagger-1 relative z-10">
        <CardHeader>
          <div className="aspect-video bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative text-white text-center">
              <div className="text-xl font-bold mb-2">Featured Article</div>
              <div className="text-sm opacity-90">Latest insights</div>
            </div>
          </div>
          <Badge className="w-fit mb-2">Featured</Badge>
          <CardTitle className="text-xl">
            React Best Practices and Patterns for 2024
          </CardTitle>
          <CardDescription className="flex items-center gap-4 mt-2">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Dec 15, 2024
            </span>
            <span className="flex items-center gap-1">
              {/* <Clock className="h-3 w-3" />8 min read */}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Discover the latest React best practices, patterns, and techniques
            that will make your applications more maintainable, performant, and
            scalable. From component design to state management strategies.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">Best Practices</Badge>
            </div>
            <Button variant="outline" asChild className="hover-lift">
              <Link href="/news/react-best-practices-2024">
                Read More
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 relative z-10">
        {posts.map((post, index) => (
          <Card
            key={post.id}
            className={`group hover-lift hover-glow animate-scale-in animate-stagger-${
              index + 2
            }`}
          >
            <CardHeader>
              <Badge className="w-fit mb-2" variant="outline">
                Blog
              </Badge>
              <CardTitle className="group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover-lift"
                >
                  <Link href={`/news/${post.id}`}>
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12 animate-fade-in animate-stagger-6 relative z-10">
        <Button variant="outline" size="lg" className="hover-lift">
          Load More Articles
        </Button>
      </div>
    </div>
  );
}
