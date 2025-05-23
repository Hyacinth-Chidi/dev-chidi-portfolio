"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    console.log("CursorEffects mounted")

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleClick = (e: MouseEvent) => {
      const newClick = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }
      setClicks((prev) => [...prev, newClick])

      // Remove click effect after animation completes
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== newClick.id))
      }, 1000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <>
      {/* Mouse follower */}
      <motion.div
        className="fixed pointer-events-none z-50 h-8 w-8 rounded-full bg-primary/30 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
      />

      {/* Click effects */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 0.7, scale: 0 }}
            animate={{ opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed pointer-events-none z-50 h-16 w-16 rounded-full border-2 border-primary"
            style={{
              left: click.x - 32,
              top: click.y - 32,
            }}
          />
        ))}
      </AnimatePresence>
    </>
  )
}
