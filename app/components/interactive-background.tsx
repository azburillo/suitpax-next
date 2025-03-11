"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/app/lib/utils"
import { BackgroundGrid } from "@/app/components/backgrounds/background-grid"

interface InteractiveBackgroundProps {
  className?: string
  variant?: "light" | "dark"
  density?: "low" | "medium" | "high"
  showUiElements?: boolean
}

export const InteractiveBackground = ({
  className,
  variant = "light",
  density = "medium",
  showUiElements = true,
}: InteractiveBackgroundProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // UI Elements for the background
  const uiElements = [
    {
      type: "card",
      content: "Flight Booking",
      position: { x: "10%", y: "20%" },
      size: { width: 150, height: 80 },
      delay: 0.2,
    },
    {
      type: "card",
      content: "Hotel Reservations",
      position: { x: "75%", y: "15%" },
      size: { width: 160, height: 90 },
      delay: 0.5,
    },
    {
      type: "pill",
      content: "AI Travel Assistant",
      position: { x: "20%", y: "70%" },
      size: { width: 140, height: 36 },
      delay: 0.8,
    },
    {
      type: "pill",
      content: "Instant Booking",
      position: { x: "65%", y: "75%" },
      size: { width: 130, height: 36 },
      delay: 1.1,
    },
    {
      type: "stat",
      content: "98% Customer Satisfaction",
      position: { x: "40%", y: "40%" },
      size: { width: 180, height: 70 },
      delay: 1.4,
    },
    {
      type: "dashboard",
      content: "Travel Analytics",
      position: { x: "85%", y: "60%" },
      size: { width: 200, height: 120 },
      delay: 1.7,
    },
    // Nuevas mini Cards
    {
      type: "pill",
      content: "VIP Lounge Access",
      position: { x: "30%", y: "25%" },
      size: { width: 150, height: 36 },
      delay: 2.0,
    },
    {
      type: "card",
      content: "Car Rentals",
      position: { x: "55%", y: "30%" },
      size: { width: 140, height: 80 },
      delay: 2.3,
    },
    {
      type: "stat",
      content: "24/7 Support",
      position: { x: "15%", y: "45%" },
      size: { width: 160, height: 70 },
      delay: 2.6,
    },
    {
      type: "dashboard",
      content: "Expense Tracking",
      position: { x: "70%", y: "50%" },
      size: { width: 180, height: 110 },
      delay: 2.9,
    },
    {
      type: "pill",
      content: "Flight Status Updates",
      position: { x: "45%", y: "85%" },
      size: { width: 160, height: 36 },
      delay: 3.2,
    },
    {
      type: "card",
      content: "Travel Insurance",
      position: { x: "25%", y: "55%" },
      size: { width: 150, height: 80 },
      delay: 3.5,
    },
  ]

  // Generate grid points based on density
  const getGridPoints = () => {
    const pointCounts = {
      low: 20,
      medium: 40,
      high: 80,
    }

    const count = pointCounts[density]
    const points = []

    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 2,
      })
    }

    return points
  }

  const gridPoints = getGridPoints()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    containerRef.current.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  // Calculate distance from mouse for parallax effect
  const getTransform = (x: string, y: string) => {
    if (dimensions.width === 0) return "none"

    const xPercent = Number.parseFloat(x) / 100
    const yPercent = Number.parseFloat(y) / 100

    const elementX = dimensions.width * xPercent
    const elementY = dimensions.height * yPercent

    const deltaX = mousePosition.x - elementX
    const deltaY = mousePosition.y - elementY

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const maxDistance = Math.sqrt(dimensions.width * dimensions.width + dimensions.height * dimensions.height) / 2

    const factor = Math.min(distance / maxDistance, 1) * 10

    return `translate(${-deltaX / factor}px, ${-deltaY / factor}px)`
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full overflow-hidden",
        variant === "dark" ? "bg-gray-950" : "bg-gray-50",
        className,
      )}
    >
      <BackgroundGrid variant={variant} density={density} />

      {/* UI Elements */}
      {showUiElements && (
        <div ref={ref} className="absolute inset-0">
          <AnimatePresence>
            {uiElements.map((element, index) => (
              <motion.div
                key={`ui-${index}`}
                className={cn(
                  "absolute rounded-lg shadow-lg backdrop-blur-sm",
                  element.type === "pill" ? "rounded-full flex items-center justify-center" : "p-4",
                  variant === "dark"
                    ? "bg-gray-800/70 text-white border border-gray-700"
                    : "bg-white/70 text-gray-800 border border-gray-200",
                )}
                style={{
                  left: element.position.x,
                  top: element.position.y,
                  width: element.size.width,
                  height: element.size.height,
                  transform: getTransform(element.position.x as string, element.position.y as string),
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: element.delay,
                    },
                  },
                }}
                exit={{ opacity: 0, y: -20 }}
              >
                {element.type === "dashboard" ? (
                  <div className="h-full flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs font-medium">{element.content}</div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-end">
                      <div className="w-full h-[60%] flex items-end space-x-1">
                        <div className="w-1/5 h-[30%] bg-emerald-500/70 rounded-t"></div>
                        <div className="w-1/5 h-[80%] bg-emerald-500/70 rounded-t"></div>
                        <div className="w-1/5 h-[60%] bg-emerald-500/70 rounded-t"></div>
                        <div className="w-1/5 h-[90%] bg-emerald-500/70 rounded-t"></div>
                        <div className="w-1/5 h-[40%] bg-emerald-500/70 rounded-t"></div>
                      </div>
                    </div>
                  </div>
                ) : element.type === "stat" ? (
                  <div className="h-full flex flex-col justify-center items-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-center">Customer Satisfaction</div>
                  </div>
                ) : element.type === "pill" ? (
                  <div className="text-xs font-medium px-4">{element.content}</div>
                ) : (
                  <div className="h-full flex flex-col">
                    <div className="text-xs font-medium mb-2">{element.content}</div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-emerald-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

export default React.memo(InteractiveBackground)

