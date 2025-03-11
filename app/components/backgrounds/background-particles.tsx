"use client"

import { useEffect, useRef, useCallback } from "react"
import { cn } from "@/app/lib/utils"

interface BackgroundParticlesProps {
  variant?: "light" | "dark" | "blue" | "purple" | "green"
  density?: "low" | "medium" | "high"
  speed?: "slow" | "medium" | "fast"
  className?: string
}

type Particle = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function BackgroundParticles({
  variant = "light",
  density = "medium",
  speed = "medium",
  className,
}: BackgroundParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  // Define color based on variant
  const getParticleColor = useCallback(() => {
    switch (variant) {
      case "dark":
        return "rgba(255, 255, 255, "
      case "blue":
        return "rgba(56, 189, 248, "
      case "purple":
        return "rgba(192, 132, 252, "
      case "green":
        return "rgba(52, 211, 153, "
      default:
        return "rgba(148, 163, 184, "
    }
  }, [variant])

  // Define particle count based on density
  const getParticleCount = useCallback(() => {
    switch (density) {
      case "low":
        return 50
      case "high":
        return 200
      default:
        return 100
    }
  }, [density])

  // Define speed factor based on speed prop
  const getSpeedFactor = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.5
      case "fast":
        return 2
      default:
        return 1
    }
  }, [speed])

  // Initialize particles
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const { width, height } = canvas.getBoundingClientRect()
    const count = getParticleCount()
    const particles: Particle[] = []

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * getSpeedFactor(),
        speedY: (Math.random() - 0.5) * getSpeedFactor(),
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    particlesRef.current = particles
  }, [getParticleCount, getSpeedFactor])

  // Update particles position
  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const { width, height } = canvas.getBoundingClientRect()

    particlesRef.current.forEach((particle) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Bounce off edges
      if (particle.x < 0 || particle.x > width) {
        particle.speedX *= -1
      }

      if (particle.y < 0 || particle.y > height) {
        particle.speedY *= -1
      }
    })
  }, [])

  // Draw particles
  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas
    const particleColor = getParticleColor()

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw each particle
    particlesRef.current.forEach((particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `${particleColor}${particle.opacity})`
      ctx.fill()
    })
  }, [getParticleColor])

  // Animation loop
  const animate = useCallback(() => {
    updateParticles()
    drawParticles()
    animationRef.current = requestAnimationFrame(animate)
  }, [updateParticles, drawParticles])

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

      // Reinitialize particles when canvas is resized
      initParticles()
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Start animation
    initParticles()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [initParticles, animate])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 w-full h-full", className)} />
}

