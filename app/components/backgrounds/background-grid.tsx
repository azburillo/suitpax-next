"use client"
import { motion } from "framer-motion"
import { cn } from "@/app/lib/utils"

interface BackgroundGridProps {
  className?: string
  variant?: "light" | "dark"
  density?: "low" | "medium" | "high"
}

export const BackgroundGrid = ({ className, variant = "light", density = "medium" }: BackgroundGridProps) => {
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

  return (
    <div className={cn("absolute inset-0 w-full h-full overflow-hidden", className)}>
      {/* Grid points */}
      {gridPoints.map((point, index) => (
        <motion.div
          key={`point-${index}`}
          className={cn("absolute rounded-full", variant === "dark" ? "bg-gray-700" : "bg-gray-300")}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: `${point.size}px`,
            height: `${point.size}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 3,
            delay: point.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke={variant === "dark" ? "rgba(75, 85, 99, 0.1)" : "rgba(209, 213, 219, 0.5)"}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  )
}

export default BackgroundGrid

