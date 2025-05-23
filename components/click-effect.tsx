"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

type ClickRipple = {
  id: number
  x: number
  y: number
}

export default function ClickEffect() {
  const [ripples, setRipples] = useState<ClickRipple[]>([])

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }

      setRipples((prev) => [...prev, newRipple])

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 1000)
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <AnimatePresence>
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ opacity: 0.7, scale: 0 }}
          animate={{ opacity: 0, scale: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed pointer-events-none z-50 h-24 w-24 rounded-full border-2 border-primary"
          style={{
            left: ripple.x - 48,
            top: ripple.y - 48,
          }}
        />
      ))}
    </AnimatePresence>
  )
}
