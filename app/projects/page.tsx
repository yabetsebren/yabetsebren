import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
        <p className="text-muted-foreground">A collection of my work, experiments, and open source contributions</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Featured Project */}
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <div className="aspect-video bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative text-white text-center">
                <div className="text-2xl font-bold mb-2">E-Commerce Platform</div>
                <div className="text-sm opacity-90">Full-stack application</div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">Modern E-Commerce Platform</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3 w-3" />
                  <span>Dec 2024</span>
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="https://example.com" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              A comprehensive e-commerce solution built with Next.js and Node.js. Features include user authentication,
              payment processing, inventory management, and real-time analytics. Deployed on AWS with CI/CD pipeline and
              monitoring.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Node.js</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>Stripe</Badge>
              <Badge>AWS</Badge>
              <Badge>Docker</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Regular Projects */}
        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-white text-lg font-semibold">AI Chat</div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>AI Chat Application</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3 w-3" />
                  <span>Nov 2024</span>
                </CardDescription>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://example.com" target="_blank">
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Real-time chat application with AI integration using OpenAI API. Features include message history, typing
              indicators, and custom AI personalities.
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs">
                React
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Socket.io
              </Badge>
              <Badge variant="secondary" className="text-xs">
                OpenAI
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-white text-lg font-semibold">Dashboard</div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3 w-3" />
                  <span>Oct 2024</span>
                </CardDescription>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://example.com" target="_blank">
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Interactive dashboard for data visualization with real-time updates, custom charts, and export
              functionality.
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs">
                Vue.js
              </Badge>
              <Badge variant="secondary" className="text-xs">
                D3.js
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Python
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-white text-lg font-semibold">Mobile App</div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3 w-3" />
                  <span>Sep 2024</span>
                </CardDescription>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Cross-platform mobile app for task management with offline support, push notifications, and team
              collaboration features.
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs">
                React Native
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Firebase
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Redux
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-white text-lg font-semibold">API</div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>RESTful API Service</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3 w-3" />
                  <span>Aug 2024</span>
                </CardDescription>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://example.com" target="_blank">
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Scalable API service with authentication, rate limiting, comprehensive documentation, and monitoring.
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs">
                Node.js
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Express
              </Badge>
              <Badge variant="secondary" className="text-xs">
                MongoDB
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="aspect-video bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-white text-lg font-semibold">CLI Tool</div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Development CLI Tool</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3 w-3" />
                  <span>Jul 2024</span>
                </CardDescription>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Command-line tool for automating development workflows, project scaffolding, and deployment processes.
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs">
                Go
              </Badge>
              <Badge variant="secondary" className="text-xs">
                CLI
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Docker
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
