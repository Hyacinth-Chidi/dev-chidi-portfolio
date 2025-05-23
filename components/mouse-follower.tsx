"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-is-mobile"

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    // Only run on client and non-mobile devices
    if (typeof window === "undefined" || isMobile) return

    // Show the follower after a short delay (prevents initial animation from top-left)
    const timer = setTimeout(() => setIsVisible(true), 500)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      clearTimeout(timer)
    }
  }, [isMobile])

  if (!isVisible || isMobile) return null

  return (
    <>
      {/* Main follower - larger, slower */}
      <motion.div
        className="fixed pointer-events-none z-50 h-32 w-32 rounded-full bg-primary/10 mix-blend-screen"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Secondary follower - smaller, faster */}
      <motion.div
        className="fixed pointer-events-none z-50 h-6 w-6 rounded-full bg-primary/40 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 300,
          mass: 0.2,
        }}
      />
    </>
  )
}
