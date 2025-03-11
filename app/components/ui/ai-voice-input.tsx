"use client"

import { Mic } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/app/lib/utils"
import { motion } from "framer-motion"

interface AIVoiceInputProps {
  onStart?: () => void
  onStop?: (duration: number) => void
  visualizerBars?: number
  demoMode?: boolean
  demoInterval?: number
  className?: string
}

export function AIVoiceInput({
  onStart,
  onStop,
  visualizerBars = 48,
  demoMode = false,
  demoInterval = 3000,
  className,
}: AIVoiceInputProps) {
  const [submitted, setSubmitted] = useState(false)
  const [time, setTime] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [isDemo, setIsDemo] = useState(demoMode)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (submitted) {
      onStart?.()
      intervalId = setInterval(() => {
        setTime((t) => t + 1)
      }, 1000)
    } else if (time > 0) {
      onStop?.(time)
      setTime(0)
    }

    return () => clearInterval(intervalId)
  }, [submitted, time, onStart, onStop])

  useEffect(() => {
    if (!isDemo) return

    let timeoutId: NodeJS.Timeout
    const runAnimation = () => {
      setSubmitted(true)
      timeoutId = setTimeout(() => {
        setSubmitted(false)
        timeoutId = setTimeout(runAnimation, 1000)
      }, demoInterval)
    }

    const initialTimeout = setTimeout(runAnimation, 100)
    return () => {
      clearTimeout(timeoutId)
      clearTimeout(initialTimeout)
    }
  }, [isDemo, demoInterval])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleClick = () => {
    if (isDemo) {
      setIsDemo(false)
      setSubmitted(false)
    } else {
      setSubmitted((prev) => !prev)
    }
  }

  return (
    <motion.div
      className={cn(
        "w-full max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 space-y-4">
        <motion.h2
          className="text-2xl font-bold text-gray-800 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          AI Voice Assistant
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Speak your commands or questions. I'm here to help!
        </motion.p>
        <div className="flex flex-col items-center space-y-4">
          <button
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center transition-colors",
              submitted
                ? "bg-emerald-500"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-emerald-100 dark:hover:bg-emerald-900",
            )}
            type="button"
            onClick={handleClick}
          >
            {submitted ? (
              <motion.div
                className="w-6 h-6 rounded-sm bg-white"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            ) : (
              <Mic className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
          <span
            className={cn(
              "font-mono text-sm transition-opacity duration-300",
              submitted ? "text-emerald-500" : "text-gray-400",
            )}
          >
            {formatTime(time)}
          </span>
          <div className="h-4 w-64 flex items-center justify-center gap-0.5">
            {[...Array(visualizerBars)].map((_, i) => (
              <motion.div
                key={i}
                className={cn("w-0.5 rounded-full", submitted ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600")}
                initial={{ height: "20%" }}
                animate={{ height: submitted ? `${20 + Math.random() * 80}%` : "20%" }}
                transition={{ duration: 0.5, repeat: submitted ? Number.POSITIVE_INFINITY : 0, repeatType: "reverse" }}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{submitted ? "Listening..." : "Click to speak"}</p>
        </div>
      </div>
    </motion.div>
  )
}

