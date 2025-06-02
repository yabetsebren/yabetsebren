import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">News & Blog</h1>
        <p className="text-muted-foreground">Thoughts on development, design, and technology trends</p>
      </div>

      {/* Featured Post */}
      <Card className="mb-8">
        <CardHeader>
          <div className="aspect-video bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative text-white text-center">
              <div className="text-xl font-bold mb-2">Featured Article</div>
              <div className="text-sm opacity-90">Latest insights</div>
            </div>
          </div>
          <Badge className="w-fit mb-2">Featured</Badge>
          <CardTitle className="text-xl">The Future of Web Development: Trends to Watch in 2025</CardTitle>
          <CardDescription className="flex items-center gap-4 mt-2">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Dec 20, 2024
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />8 min read
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            As we approach 2025, the web development landscape continues to evolve at a rapid pace. From AI-powered
            development tools to new frameworks and paradigms, let's explore the trends that will shape how we build for
            the web in the coming year.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Web Development</Badge>
              <Badge variant="secondary">Technology</Badge>
              <Badge variant="secondary">AI</Badge>
            </div>
            <Button variant="outline" asChild>
              <Link href="/news/future-web-development-2025">
                Read More
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <Badge className="w-fit mb-2" variant="outline">
              Tutorial
            </Badge>
            <CardTitle className="group-hover:text-primary transition-colors">
              Building Scalable React Applications with TypeScript
            </CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Dec 15, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                12 min read
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Learn best practices for structuring large React applications with TypeScript. We'll cover project
              organization, type safety, and performance optimization techniques.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">
                  React
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Architecture
                </Badge>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/news/scalable-react-typescript">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <Badge className="w-fit mb-2" variant="outline">
              Opinion
            </Badge>
            <CardTitle className="group-hover:text-primary transition-colors">
              Why I Switched from REST to GraphQL
            </CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Dec 8, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />6 min read
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              My journey from REST APIs to GraphQL and the benefits I discovered along the way. Real-world examples and
              performance comparisons included.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">
                  GraphQL
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  API Design
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Performance
                </Badge>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/news/rest-to-graphql">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <Badge className="w-fit mb-2" variant="outline">
              Guide
            </Badge>
            <CardTitle className="group-hover:text-primary transition-colors">
              Deploying Next.js Apps to AWS with Docker
            </CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Nov 28, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                15 min read
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Step-by-step guide to containerizing and deploying Next.js applications on AWS. Includes CI/CD setup and
              monitoring configuration.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  AWS
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Docker
                </Badge>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/news/nextjs-aws-docker">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <Badge className="w-fit mb-2" variant="outline">
              Review
            </Badge>
            <CardTitle className="group-hover:text-primary transition-colors">My Developer Setup for 2024</CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Nov 15, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                10 min read
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              A comprehensive look at my development environment, tools, and workflow optimizations that help me stay
              productive and efficient.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">
                  Productivity
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Tools
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Workflow
                </Badge>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/news/developer-setup-2024">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <Badge className="w-fit mb-2" variant="outline">
              Deep Dive
            </Badge>
            <CardTitle className="group-hover:text-primary transition-colors">
              Understanding React Server Components
            </CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Oct 30, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                18 min read
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              An in-depth exploration of React Server Components, their benefits, limitations, and practical
              implementation strategies for modern web applications.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">
                  React
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  SSR
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Performance
                </Badge>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/news/react-server-components">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <Badge className="w-fit mb-2" variant="outline">
              News
            </Badge>
            <CardTitle className="group-hover:text-primary transition-colors">
              What's New in JavaScript ES2024
            </CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Oct 12, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />8 min read
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Exploring the latest features and improvements in JavaScript ES2024, with practical examples and browser
              support information.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  ES2024
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Features
                </Badge>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/news/javascript-es2024">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
