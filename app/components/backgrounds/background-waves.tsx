"use client"

import { useEffect, useRef, useCallback } from "react"
import { cn } from "@/app/lib/utils"

interface BackgroundWavesProps {
  variant?: "light" | "dark" | "blue" | "purple" | "green"
  waveCount?: number
  speed?: "slow" | "medium" | "fast"
  amplitude?: "low" | "medium" | "high"
  className?: string
}

type Wave = {
  frequency: number
  amplitude: number
  speed: number
  phase: number
  color: string
}

export function BackgroundWaves({
  variant = "light",
  waveCount = 5,
  speed = "medium",
  amplitude = "medium",
  className,
}: BackgroundWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wavesRef = useRef<Wave[]>([])
  const animationRef = useRef<number>(0)

  // Define colors based on variant
  const getWaveColors = useCallback(() => {
    switch (variant) {
      case "dark":
        return [
          "rgba(51, 65, 85, 0.3)",
          "rgba(71, 85, 105, 0.3)",
          "rgba(100, 116, 139, 0.3)",
          "rgba(148, 163, 184, 0.3)",
          "rgba(203, 213, 225, 0.3)",
        ]
      case "blue":
        return [
          "rgba(14, 165, 233, 0.3)",
          "rgba(56, 189, 248, 0.3)",
          "rgba(125, 211, 252, 0.3)",
          "rgba(186, 230, 253, 0.3)",
          "rgba(224, 242, 254, 0.3)",
        ]
      case "purple":
        return [
          "rgba(147, 51, 234, 0.3)",
          "rgba(168, 85, 247, 0.3)",
          "rgba(192, 132, 252, 0.3)",
          "rgba(216, 180, 254, 0.3)",
          "rgba(233, 213, 255, 0.3)",
        ]
      case "green":
        return [
          "rgba(5, 150, 105, 0.3)",
          "rgba(16, 185, 129, 0.3)",
          "rgba(52, 211, 153, 0.3)",
          "rgba(110, 231, 183, 0.3)",
          "rgba(167, 243, 208, 0.3)",
        ]
      default:
        return [
          "rgba(148, 163, 184, 0.3)",
          "rgba(203, 213, 225, 0.3)",
          "rgba(226, 232, 240, 0.3)",
          "rgba(241, 245, 249, 0.3)",
          "rgba(248, 250, 252, 0.3)",
        ]
    }
  }, [variant])

  // Define speed factor based on speed prop
  const getSpeedFactor = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.0005
      case "fast":
        return 0.002
      default:
        return 0.001
    }
  }, [speed])

  // Define amplitude factor based on amplitude prop
  const getAmplitudeFactor = useCallback(() => {
    switch (amplitude) {
      case "low":
        return 0.5
      case "high":
        return 2
      default:
        return 1
    }
  }, [amplitude])

  // Initialize waves
  const initWaves = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const { height } = canvas.getBoundingClientRect()
    const colors = getWaveColors()
    const speedFactor = getSpeedFactor()
    const amplitudeFactor = getAmplitudeFactor()
    const waves: Wave[] = []

    for (let i = 0; i < waveCount; i++) {
      waves.push({
        frequency: 0.005 + Math.random() * 0.005,
        amplitude: (20 + Math.random() * 30) * amplitudeFactor,
        speed: (0.0005 + Math.random() * 0.001) * speedFactor,
        phase: Math.random() * Math.PI * 2,
        color: colors[i % colors.length],
      })
    }

    wavesRef.current = waves
  }, [getWaveColors, getSpeedFactor, getAmplitudeFactor, waveCount])

  // Draw waves
  const drawWaves = useCallback((time: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw each wave
    wavesRef.current.forEach((wave, index) => {
      ctx.beginPath()

      // Update phase based on time
      wave.phase += wave.speed

      // Start at the left edge
      ctx.moveTo(0, height / 2)

      // Draw wave path
      for (let x = 0; x < width; x++) {
        const y =
          height / 2 +
          Math.sin(x * wave.frequency + wave.phase) * wave.amplitude +
          (index * height) / (wavesRef.current.length * 2.5)

        ctx.lineTo(x, y)
      }

      // Complete the path to create a closed shape
      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()

      // Fill with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, wave.color)
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

      ctx.fillStyle = gradient
      ctx.fill()
    })
  }, [])

  // Animation loop
  const animate = useCallback(
    (time: number) => {
      drawWaves(time)
      animationRef.current = requestAnimationFrame(animate)
    },
    [drawWaves],
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

      // Reinitialize waves when canvas is resized
      initWaves()
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Start animation
    initWaves()
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [initWaves, animate])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 w-full h-full", className)} />
}

