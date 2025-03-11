"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export interface CursorPosition {
  top: string | number
  left: string | number
}

export interface AnimatedCursorProps {
  positions: CursorPosition[]
  color?: string
  size?: number
  duration?: number
  delay?: number
  loop?: boolean
  className?: string
  onPositionChange?: (index: number) => void
}

export function AnimatedCursor({
  positions,
  color = "silver",
  size = 6,
  duration = 1.5,
  delay = 2,
  loop = true,
  className = "",
  onPositionChange,
}: AnimatedCursorProps) {
  const cursorControls = useAnimation()

  // Determine color values based on the color prop
  const getColorValues = () => {
    const colorMap: Record<string, { bg: string; shadow: string; border: string }> = {
      emerald: {
        bg: "rgba(16,185,129,0.3)",
        shadow: "rgba(16,185,129,0.2)",
        border: "#10b981",
      },
      blue: {
        bg: "rgba(59,130,246,0.3)",
        shadow: "rgba(59,130,246,0.2)",
        border: "#3b82f6",
      },
      amber: {
        bg: "rgba(245,158,11,0.3)",
        shadow: "rgba(245,158,11,0.2)",
        border: "#f59e0b",
      },
      white: {
        bg: "rgba(255,255,255,0.3)",
        shadow: "rgba(255,255,255,0.2)",
        border: "#ffffff",
      },
      silver: {
        bg: "rgba(226,232,240,0.4)",
        shadow: "rgba(226,232,240,0.6)",
        border: "#e2e8f0",
      },
    }

    return colorMap[color] || colorMap.silver
  }

  const { bg, shadow, border } = getColorValues()

  useEffect(() => {
    let isMounted = true

    const animateCursor = async () => {
      if (positions.length === 0) return

      do {
        for (let i = 0; i < positions.length; i++) {
          if (!isMounted) return

          // Move cursor to position with a more natural motion
          await cursorControls.start({
            top: positions[i].top,
            left: positions[i].left,
            scale: 1.2,
            transition: {
              duration,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              damping: 15,
            },
          })

          // Notify position change if callback provided
          if (onPositionChange) {
            onPositionChange(i)
          }

          // Wait before moving to next position
          await new Promise((resolve) => setTimeout(resolve, delay * 1000))

          // Scale down cursor with a slight pulse effect
          await cursorControls.start({
            scale: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          })
        }
      } while (loop && isMounted)
    }

    animateCursor()

    return () => {
      isMounted = false
      cursorControls.stop()
    }
  }, [cursorControls, positions, duration, delay, loop, onPositionChange])

  return (
    <motion.div
      className={`absolute z-20 rounded-full border-2 pointer-events-none ${className}`}
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
        borderColor: border,
        background: `radial-gradient(circle, ${bg} 0%, ${bg.replace(/[\d.]+\)$/, "0.1)")} 70%)`,
        boxShadow: `0 0 15px 5px ${shadow}`,
      }}
      animate={cursorControls}
      initial={{ top: positions[0]?.top || "50%", left: positions[0]?.left || "50%", scale: 1 }}
    />
  )
}

// Helper function to create cursor animation controls and positions
export function useCursorAnimation() {
  return useAnimation()
}

