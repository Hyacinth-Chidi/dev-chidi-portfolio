"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  githubUrl: string
  liveUrl: string
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      description:
        "Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "Firebase", "Redux"],
      category: "mobile",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 3,
      title: "Real Estate Dashboard",
      description: "Interactive dashboard for real estate agents to manage listings, clients, and analytics.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "Supabase"],
      category: "web",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 4,
      title: "Food Delivery App",
      description: "Mobile app for ordering food from local restaurants with real-time order tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Flutter", "Firebase", "Google Maps API"],
      category: "mobile",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Custom portfolio website with animations and interactive elements.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Framer Motion", "Three.js"],
      category: "web",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "Express", "Socket.io"],
      category: "web",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across web and mobile development, showcasing my skills and expertise in creating
            impactful digital solutions.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>
                All Projects
              </TabsTrigger>
              <TabsTrigger value="web" onClick={() => setActiveCategory("web")}>
                Web Development
              </TabsTrigger>
              <TabsTrigger value="mobile" onClick={() => setActiveCategory("mobile")}>
                Mobile Apps
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="web" className="mt-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
    >
      <Card className="overflow-hidden group h-full flex flex-col">
        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-foreground p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub Repository</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-foreground p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ExternalLink size={20} />
              <span className="sr-only">Live Demo</span>
            </a>
          </div>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
