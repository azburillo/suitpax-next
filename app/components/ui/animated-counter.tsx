"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation, type Variants } from "framer-motion"
import { useTheme } from "next-themes"

interface AnimatedCounterProps {
  end: number
  duration?: number
}

const counterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
}

export function AnimatedCounter({ end, duration = 4 }: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(0)
  const controls = useAnimation()
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const timer = setInterval(
      () => {
        setCount((prevCount) => {
          if (prevCount < end) {
            return Math.min(prevCount + Math.ceil(end / 100), end)
          }
          clearInterval(timer)
          return prevCount
        })
      },
      (duration * 1000) / 100,
    )

    controls.start("visible")

    return () => clearInterval(timer)
  }, [end, duration, controls])

  return (
    <motion.div
      variants={counterVariants}
      initial="hidden"
      animate={controls}
      className={`text-2xl font-bold ${isDark ? "text-gray-300" : "text-gray-600"}`}
    >
      {(count || 0).toLocaleString()}
    </motion.div>
  )
}

interface SectionCounterProps {
  title: string
  end: number
  subtitle: string
  icon: React.ElementType
}

export function SectionCounter({ title, end, subtitle, icon: Icon }: SectionCounterProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className={`p-4 rounded-lg ${isDark ? "bg-zinc-800" : "bg-gray-100"}`}>
      <h3 className={`text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{title}</h3>
      <div className="flex items-center justify-between">
        <AnimatedCounter end={end} />
        <Icon className={`w-6 h-6 ${isDark ? "text-gray-400" : "text-gray-600"}`} />
      </div>
      <p className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{subtitle}</p>
    </div>
  )
}

