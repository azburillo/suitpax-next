"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/app/lib/utils"

interface BackgroundPatternsProps {
  variant?: "light" | "dark" | "blue" | "purple" | "green"
  density?: "low" | "medium" | "high"
  className?: string
}

export function BackgroundPatterns({ variant = "light", density = "medium", className }: BackgroundPatternsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Define color schemes based on variant
  const getColors = () => {
    switch (variant) {
      case "dark":
        return {
          background: "#0f172a",
          primary: "#334155",
          secondary: "#1e293b",
          accent: "#475569",
        }
      case "blue":
        return {
          background: "#0c4a6e",
          primary: "#0ea5e9",
          secondary: "#0284c7",
          accent: "#38bdf8",
        }
      case "purple":
        return {
          background: "#581c87",
          primary: "#a855f7",
          secondary: "#9333ea",
          accent: "#c084fc",
        }
      case "green":
        return {
          background: "#064e3b",
          primary: "#10b981",
          secondary: "#059669",
          accent: "#34d399",
        }
      default:
        return {
          background: "#f8fafc",
          primary: "#e2e8f0",
          secondary: "#cbd5e1",
          accent: "#94a3b8",
        }
    }
  }

  // Define pattern density
  const getPatternCount = () => {
    switch (density) {
      case "low":
        return 50
      case "high":
        return 200
      default:
        return 100
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const colors = getColors()
    const patternCount = getPatternCount()

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw background
    ctx.fillStyle = colors.background
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw patterns
    const drawPatterns = () => {
      // Clear canvas
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw circles
      for (let i = 0; i < patternCount / 3; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 15 + 5

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent
        ctx.globalAlpha = Math.random() * 0.2 + 0.1
        ctx.fill()
      }

      // Draw squares
      for (let i = 0; i < patternCount / 3; i++) {
        const size = Math.random() * 20 + 10
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height

        ctx.beginPath()
        ctx.rect(x, y, size, size)
        ctx.fillStyle = i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent
        ctx.globalAlpha = Math.random() * 0.2 + 0.1
        ctx.fill()
      }

      // Draw triangles
      for (let i = 0; i < patternCount / 3; i++) {
        const size = Math.random() * 25 + 15
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height

        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + size, y)
        ctx.lineTo(x + size / 2, y - size)
        ctx.closePath()
        ctx.fillStyle = i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent
        ctx.globalAlpha = Math.random() * 0.2 + 0.1
        ctx.fill()
      }
    }

    drawPatterns()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [variant, density])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 w-full h-full", className)} style={{ opacity: 0.8 }} />
}

