import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/src/components/ui/hover-card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <Avatar className="w-32 h-32 mx-auto mb-8">
          <AvatarImage src="/avatar.jpg" alt="Hasinthaka" />
          <AvatarFallback>HA</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold mb-4">Hasinthaka</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Full Stack Developer & Software Engineer
        </p>
        <div className="flex gap-4 justify-center">
          <Button>Contact Me</Button>
          <Button variant="outline">Download CV</Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link href={post.href} key={post.title}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <span>{post.date}</span>
                    •
                    <span>{post.readTime} min read</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <div className="flex gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">View All Posts</Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <HoverCard key={skill.name}>
              <HoverCardTrigger asChild>
                <Card className="cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-center">{skill.name}</CardTitle>
                  </CardHeader>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent>
                {skill.description}
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <Card>
          <CardHeader>
            <CardTitle>Let&apos;s Work Together</CardTitle>
            <CardDescription>
              Feel free to reach out for collaborations or just a friendly hello
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full md:w-auto">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

const projects = [
  {
    title: "Project 1",
    description: "Description of your first project",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Project 2",
    description: "Description of your second project",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project 3",
    description: "Description of your third project",
    technologies: ["Python", "Django", "PostgreSQL"],
  },
]

const skills = [
  {
    name: "Next.js",
    description: "Advanced proficiency in Next.js for building React applications",
  },
  {
    name: "TypeScript",
    description: "Strong TypeScript skills for type-safe development",
  },
  {
    name: "Node.js",
    description: "Backend development with Node.js and Express",
  },
  {
    name: "React",
    description: "Expert in React and its ecosystem",
  },
  // Add more skills as needed
]

const blogPosts = [
  {
    title: "Building a Modern Portfolio with Next.js and Shadcn",
    date: "March 2024",
    readTime: 5,
    excerpt: "Learn how to create a professional portfolio website using Next.js 14 and Shadcn UI components...",
    tags: ["Next.js", "React", "UI/UX"],
    href: "/blog/modern-portfolio",
  },
  {
    title: "The Future of Web Development in 2024",
    date: "March 2024",
    readTime: 7,
    excerpt: "Exploring the latest trends and technologies shaping the future of web development...",
    tags: ["Web Dev", "Trends", "Technology"],
    href: "/blog/future-web-dev",
  },
]
