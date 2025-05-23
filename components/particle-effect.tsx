"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useIsMobile } from "@/hooks/use-is-mobile"

type Particle = {
  id: number
  x: number
  y: number
  size: number
  color: string
  direction: { x: number; y: number }
}

export default function ParticleEffect() {
  const [particles, setParticles] = useState<Particle[]>([])
  const isMobile = useIsMobile()

  useEffect(() => {
    // Only run on client and non-mobile devices
    if (typeof window === "undefined" || isMobile) return

    const handleClick = (e: MouseEvent) => {
      const colors = ["#00bcd4", "#9c27b0", "#4caf50", "#ff9800", "#e91e63"]
      const newParticles: Particle[] = []

      // Create multiple particles per click
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12
        const speed = 2 + Math.random() * 3

        newParticles.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          size: 5 + Math.random() * 10,
          color: colors[Math.floor(Math.random() * colors.length)],
          direction: {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed,
          },
        })
      }

      setParticles((prev) => [...prev, ...newParticles])

      // Remove particles after animation completes
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)))
      }, 1000)
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <AnimatePresence>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 1,
            scale: 1,
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            opacity: 0,
            scale: 0,
            x: particle.x + particle.direction.x * 100,
            y: particle.y + particle.direction.y * 100,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed pointer-events-none z-50 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
        />
      ))}
    </AnimatePresence>
  )
}
