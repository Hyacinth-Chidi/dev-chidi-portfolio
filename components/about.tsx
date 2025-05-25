"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, BookOpen, Briefcase, GraduationCap, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, experience, and what drives me as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/30 to-secondary/20 blur-xl"></div>
              <div className="relative rounded-xl overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src="/AboutMex.png?height=600&width=600"
                  alt="Dev Chidi"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="story" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="story">My Story</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>

              <TabsContent value="story" className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">My Journey</h3>
                    <p className="text-muted-foreground">
                      I'm Dev Chidi, a passionate web and mobile developer with over 5 years of experience creating
                      digital solutions that solve real-world problems. My journey in tech began when I built my first
                      website at 16, and I've been hooked ever since.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">My Approach</h3>
                    <p className="text-muted-foreground">
                      I believe in creating technology that enhances human experiences. My development philosophy
                      centers around clean code, user-centric design, and continuous learning. I'm passionate about
                      staying at the forefront of technology trends and implementing best practices in all my projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">My Mission</h3>
                    <p className="text-muted-foreground">
                      My goal is to leverage technology to create meaningful digital experiences that drive business
                      growth and user satisfaction. I'm committed to delivering high-quality, scalable, and maintainable
                      solutions that exceed client expectations.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button>Download My Resume</Button>
                </div>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <div className="relative border-l-2 border-primary/30 pl-6">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
                    </div>
                    <p className="text-primary font-medium">TechNova Solutions • 2021 - Present</p>
                    <p className="text-muted-foreground mt-2">
                      Led the frontend development of multiple web applications using React and Next.js. Implemented
                      responsive designs, optimized performance, and mentored junior developers.
                    </p>
                  </div>
                </div>

                <div className="relative border-l-2 border-primary/30 pl-6">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <h3 className="text-lg font-semibold">Mobile App Developer</h3>
                    </div>
                    <p className="text-primary font-medium">AppWorks Inc. • 2019 - 2021</p>
                    <p className="text-muted-foreground mt-2">
                      Developed cross-platform mobile applications using React Native and Flutter. Collaborated with
                      design and backend teams to deliver seamless user experiences.
                    </p>
                  </div>
                </div>

                <div className="relative border-l-2 border-primary/30 pl-6">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <h3 className="text-lg font-semibold">Web Developer</h3>
                    </div>
                    <p className="text-primary font-medium">Digital Creations • 2018 - 2019</p>
                    <p className="text-muted-foreground mt-2">
                      Built responsive websites and web applications for various clients using HTML, CSS, JavaScript,
                      and PHP. Implemented SEO best practices and performance optimizations.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <div className="relative border-l-2 border-primary/30 pl-6">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <h3 className="text-lg font-semibold">Master of Computer Science</h3>
                    </div>
                    <p className="text-primary font-medium">Tech University • 2016 - 2018</p>
                    <p className="text-muted-foreground mt-2">
                      Specialized in Software Engineering with a focus on web and mobile application development.
                      Graduated with honors.
                    </p>
                  </div>
                </div>

                <div className="relative border-l-2 border-primary/30 pl-6">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                    </div>
                    <p className="text-primary font-medium">State University • 2012 - 2016</p>
                    <p className="text-muted-foreground mt-2">
                      Completed coursework in programming, algorithms, data structures, and software development
                      methodologies.
                    </p>
                  </div>
                </div>

                <div className="relative border-l-2 border-primary/30 pl-6">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="h-4 w-4 text-primary" />
                      <h3 className="text-lg font-semibold">Certifications</h3>
                    </div>
                    <p className="text-primary font-medium">Various • 2017 - Present</p>
                    <ul className="text-muted-foreground mt-2 list-disc list-inside">
                      <li>AWS Certified Developer</li>
                      <li>Google Cloud Professional Developer</li>
                      <li>React Native Specialist</li>
                      <li>Advanced JavaScript Development</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
