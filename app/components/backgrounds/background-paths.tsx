"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { cn } from "@/app/lib/utils"

interface BackgroundPathsProps {
  variant?: "light" | "dark" | "blue" | "purple" | "green"
  density?: "low" | "medium" | "high"
  className?: string
}

export function BackgroundPaths({ variant = "light", density = "medium", className }: BackgroundPathsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [paths, setPaths] = useState<any[]>([])

  // Define color schemes based on variant
  const getColors = useCallback(() => {
    switch (variant) {
      case "dark":
        return {
          background: "#0f172a",
          path: "#334155",
        }
      case "blue":
        return {
          background: "#0c4a6e",
          path: "#0ea5e9",
        }
      case "purple":
        return {
          background: "#581c87",
          path: "#a855f7",
        }
      case "green":
        return {
          background: "#064e3b",
          path: "#10b981",
        }
      default:
        return {
          background: "#f8fafc",
          path: "#94a3b8",
        }
    }
  }, [variant])

  // Define path count based on density
  const getPathCount = useCallback(() => {
    switch (density) {
      case "low":
        return 5
      case "high":
        return 15
      default:
        return 10
    }
  }, [density])

  // Generate random paths
  const generatePaths = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return []

    const { width, height } = canvas.getBoundingClientRect()
    const pathCount = getPathCount()
    const newPaths = []

    for (let i = 0; i < pathCount; i++) {
      const points = []
      const pointCount = Math.floor(Math.random() * 5) + 3

      // Generate random points for the path
      for (let j = 0; j < pointCount; j++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          controlX: Math.random() * width,
          controlY: Math.random() * height,
        })
      }

      newPaths.push({
        points,
        progress: 0,
        speed: Math.random() * 0.001 + 0.0005,
        width: Math.random() * 2 + 1,
      })
    }

    return newPaths
  }, [getPathCount])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

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

    // Initialize paths
    setPaths(generatePaths())

    // Animation loop
    let animationFrameId: number
    const colors = getColors()

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw paths
      setPaths((prevPaths) =>
        prevPaths.map((path) => {
          // Update progress
          const newProgress = path.progress + path.speed

          // Draw path
          ctx.beginPath()
          ctx.strokeStyle = colors.path
          ctx.lineWidth = path.width
          ctx.globalAlpha = 0.5

          const currentProgress = Math.min(newProgress, 1)

          // Draw only up to the current progress
          if (path.points.length > 0) {
            const startPoint = path.points[0]
            ctx.moveTo(startPoint.x, startPoint.y)

            for (let i = 1; i < path.points.length * currentProgress; i++) {
              const point = path.points[Math.floor(i)]
              const nextPoint = path.points[Math.min(Math.floor(i) + 1, path.points.length - 1)]

              // If we're at the last segment that should be drawn based on progress
              if (i === Math.floor(path.points.length * currentProgress)) {
                const partialProgress = (path.points.length * currentProgress) % 1
                const partialX = point.x + (nextPoint.x - point.x) * partialProgress
                const partialY = point.y + (nextPoint.y - point.y) * partialProgress

                ctx.quadraticCurveTo(point.controlX, point.controlY, partialX, partialY)
              } else {
                ctx.quadraticCurveTo(point.controlX, point.controlY, nextPoint.x, nextPoint.y)
              }
            }
          }

          ctx.stroke()

          // Reset path if it's complete
          if (newProgress > 1.2) {
            return {
              ...path,
              progress: 0,
              points: generatePaths()[0].points,
            }
          }

          return {
            ...path,
            progress: newProgress,
          }
        }),
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [generatePaths, getColors])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 w-full h-full", className)} />
}

