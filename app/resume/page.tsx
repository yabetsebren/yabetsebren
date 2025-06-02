import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, MapPin, Calendar } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Resume</h1>
          <p className="text-muted-foreground">My professional experience and qualifications</p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Experience</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Senior Full Stack Developer</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <span>TechCorp Inc.</span>
                    <MapPin className="h-3 w-3" />
                    <span>San Francisco, CA</span>
                  </CardDescription>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>2022 - Present</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Led development of microservices architecture serving 1M+ users</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Collaborated with design team to improve user experience</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Docker</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Frontend Developer</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <span>StartupXYZ</span>
                    <MapPin className="h-3 w-3" />
                    <span>Remote</span>
                  </CardDescription>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>2020 - 2022</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Built responsive web applications using modern frameworks</li>
                <li>Optimized application performance and accessibility</li>
                <li>Integrated third-party APIs and payment systems</li>
                <li>Participated in agile development processes</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Vue.js</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">SCSS</Badge>
                <Badge variant="secondary">REST APIs</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <span>University of Technology</span>
                  <MapPin className="h-3 w-3" />
                  <span>Boston, MA</span>
                </CardDescription>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>2016 - 2020</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Graduated Magna Cum Laude with focus on Software Engineering and Web Technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Data Structures</Badge>
              <Badge variant="secondary">Algorithms</Badge>
              <Badge variant="secondary">Software Engineering</Badge>
              <Badge variant="secondary">Database Systems</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Skills</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Vue.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>SCSS</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Node.js</Badge>
                <Badge>Python</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Redis</Badge>
                <Badge>GraphQL</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DevOps & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>AWS</Badge>
                <Badge>Docker</Badge>
                <Badge>Kubernetes</Badge>
                <Badge>Git</Badge>
                <Badge>CI/CD</Badge>
                <Badge>Terraform</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Design & Other</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Figma</Badge>
                <Badge>Adobe XD</Badge>
                <Badge>UI/UX Design</Badge>
                <Badge>Agile</Badge>
                <Badge>Scrum</Badge>
                <Badge>Testing</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
