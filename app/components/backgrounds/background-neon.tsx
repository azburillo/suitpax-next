"use client"

import { useEffect, useRef, useCallback } from "react"
import { cn } from "@/app/lib/utils"

interface BackgroundNeonProps {
  variant?: "blue" | "purple" | "green" | "pink" | "cyan"
  density?: "low" | "medium" | "high"
  className?: string
}

type NeonLine = {
  startX: number
  startY: number
  endX: number
  endY: number
  width: number
  color: string
  glow: number
  life: number
  maxLife: number
}

export function BackgroundNeon({ variant = "blue", density = "medium", className }: BackgroundNeonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const linesRef = useRef<NeonLine[]>([])
  const animationRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  // Define colors based on variant
  const getNeonColors = useCallback(() => {
    switch (variant) {
      case "blue":
        return {
          primary: "#0ea5e9",
          secondary: "#38bdf8",
          glow: "#0284c7",
        }
      case "purple":
        return {
          primary: "#a855f7",
          secondary: "#c084fc",
          glow: "#9333ea",
        }
      case "green":
        return {
          primary: "#10b981",
          secondary: "#34d399",
          glow: "#059669",
        }
      case "pink":
        return {
          primary: "#ec4899",
          secondary: "#f472b6",
          glow: "#db2777",
        }
      case "cyan":
        return {
          primary: "#06b6d4",
          secondary: "#22d3ee",
          glow: "#0891b2",
        }
      default:
        return {
          primary: "#0ea5e9",
          secondary: "#38bdf8",
          glow: "#0284c7",
        }
    }
  }, [variant])

  // Define line count based on density
  const getLineCount = useCallback(() => {
    switch (density) {
      case "low":
        return 15
      case "high":
        return 60
      default:
        return 30
    }
  }, [density])

  // Create a new neon line
  const createNeonLine = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return null

    const { width, height } = canvas.getBoundingClientRect()
    const colors = getNeonColors()

    // Decide if line is horizontal or vertical
    const isHorizontal = Math.random() > 0.5

    // Create line with random properties
    const line: NeonLine = {
      startX: isHorizontal ? 0 : Math.random() * width,
      startY: isHorizontal ? Math.random() * height : 0,
      endX: isHorizontal ? width : Math.random() * width,
      endY: isHorizontal ? Math.random() * height : height,
      width: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? colors.primary : colors.secondary,
      glow: Math.random() * 10 + 5,
      life: 0,
      maxLife: Math.random() * 200 + 100,
    }

    return line
  }, [getNeonColors])

  // Initialize neon lines
  const initNeonLines = useCallback(() => {
    const lineCount = getLineCount()
    const lines: NeonLine[] = []

    for (let i = 0; i < lineCount; i++) {
      const line = createNeonLine()
      if (line) {
        lines.push(line)
      }
    }

    linesRef.current = lines
  }, [getLineCount, createNeonLine])

  // Update neon lines
  const updateNeonLines = useCallback(
    (deltaTime: number) => {
      linesRef.current = linesRef.current.map((line) => {
        // Update life
        line.life += deltaTime * 0.05

        // If line has reached its max life, create a new one
        if (line.life >= line.maxLife) {
          const newLine = createNeonLine()
          return newLine || line
        }

        return line
      })
    },
    [createNeonLine],
  )

  // Draw neon lines
  const drawNeonLines = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas
    const colors = getNeonColors()

    // Clear canvas with semi-transparent black for trail effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
    ctx.fillRect(0, 0, width, height)

    // Draw each neon line
    linesRef.current.forEach((line) => {
      // Calculate opacity based on life
      const lifeRatio = line.life / line.maxLife
      const opacity =
        lifeRatio < 0.2
          ? lifeRatio * 5 // Fade in
          : lifeRatio > 0.8
            ? (1 - lifeRatio) * 5 // Fade out
            : 1 // Full opacity

      // Draw glow
      ctx.beginPath()
      ctx.moveTo(line.startX, line.startY)
      ctx.lineTo(line.endX, line.endY)
      ctx.lineWidth = line.width + line.glow
      ctx.strokeStyle = `${colors.glow}${Math.floor(opacity * 40)}%)`
      ctx.shadowColor = line.color
      ctx.shadowBlur = line.glow
      ctx.stroke()

      // Draw line
      ctx.beginPath()
      ctx.moveTo(line.startX, line.startY)
      ctx.lineTo(line.endX, line.endY)
      ctx.lineWidth = line.width
      ctx.strokeStyle = `${line.color}${Math.floor(opacity * 100)}%)`
      ctx.stroke()

      // Reset shadow
      ctx.shadowBlur = 0
    })
  }, [getNeonColors])

  // Animation loop
  const animate = useCallback(
    (time: number) => {
      // Calculate delta time
      const deltaTime = time - lastTimeRef.current
      lastTimeRef.current = time

      updateNeonLines(deltaTime)
      drawNeonLines()
      animationRef.current = requestAnimationFrame(animate)
    },
    [updateNeonLines, drawNeonLines],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr

      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.scale(dpr, dpr)
      }

      // Reinitialize lines when canvas is resized
      initNeonLines()
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Start animation
    initNeonLines()
    lastTimeRef.current = performance.now()
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [initNeonLines, animate])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 w-full h-full", className)} />
}

