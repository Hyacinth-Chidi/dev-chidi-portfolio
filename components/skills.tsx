"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Database, Figma, Globe, Layers, Smartphone, Sparkles, Zap } from "lucide-react"

type Skill = {
  name: string
  icon: React.ReactNode
  description: string
  technologies: string[]
}

export default function Skills() {
  const skills: Skill[] = [
    {
      name: "Frontend Development",
      icon: <Code className="h-8 w-8" />,
      description: "Creating responsive and interactive user interfaces with modern frameworks and libraries.",
      technologies: ["React", "Next.js", "Vue.js", "HTML5/CSS3", "JavaScript/TypeScript"],
    },
    {
      name: "Backend Development",
      icon: <Database className="h-8 w-8" />,
      description: "Building robust server-side applications and APIs to power web and mobile applications.",
      technologies: ["Node.js", "Express", "Python", "Django", "MongoDB", "PostgreSQL"],
    },
    {
      name: "Mobile App Development",
      icon: <Smartphone className="h-8 w-8" />,
      description: "Developing cross-platform mobile applications with native-like performance and experience.",
      technologies: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
    },
    {
      name: "UI/UX Design",
      icon: <Figma className="h-8 w-8" />,
      description: "Creating intuitive and visually appealing user interfaces and experiences.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping"],
    },
    {
      name: "DevOps & Deployment",
      icon: <Zap className="h-8 w-8" />,
      description: "Setting up CI/CD pipelines and deploying applications to various platforms.",
      technologies: ["Docker", "AWS", "Vercel", "Netlify", "GitHub Actions", "CI/CD"],
    },
    {
      name: "Web Performance",
      icon: <Sparkles className="h-8 w-8" />,
      description: "Optimizing web applications for speed, accessibility, and search engine visibility.",
      technologies: ["Lighthouse", "Web Vitals", "SEO", "Performance Optimization"],
    },
    {
      name: "Full-Stack Development",
      icon: <Layers className="h-8 w-8" />,
      description: "End-to-end development from database design to frontend implementation.",
      technologies: ["MERN Stack", "LAMP Stack", "JAMstack", "Serverless Architecture"],
    },
    {
      name: "Internationalization",
      icon: <Globe className="h-8 w-8" />,
      description: "Building applications that support multiple languages and regions.",
      technologies: ["i18n", "l10n", "RTL Support", "Cultural Adaptation"],
    },
  ]

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
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in a wide range of technologies and methodologies to deliver high-quality web and mobile
            solutions.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <div className="bg-card hover:bg-card/80 border rounded-lg p-6 h-full transition-colors group">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                  {skill.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                      +{skill.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
