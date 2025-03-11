"use client"

import { motion } from "framer-motion"
import { BorderTrail } from "@/app/components/ui/border-trail"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function BorderTrailSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-zinc-800 dark:text-zinc-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Innovative Border Trail Technology
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          <BorderTrailCard1 />
          <BorderTrailCard2 />
          <BorderTrailTextarea />
        </div>
      </div>
    </section>
  )
}

function BorderTrailCard1() {
  return (
    <div className="relative flex h-[200px] w-[300px] flex-col items-center justify-center rounded-md bg-zinc-200 px-5 py-2 dark:bg-zinc-900">
      <BorderTrail
        style={{
          boxShadow:
            "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
        }}
        size={100}
      />
      <div
        className="flex h-full animate-pulse flex-col items-start justify-center space-y-2"
        role="status"
        aria-label="Loading..."
      >
        <div className="h-1 w-4 rounded-[4px] bg-zinc-600"></div>
        <div className="h-1 w-10 rounded-[4px] bg-zinc-600"></div>
        <div className="h-1 w-12 rounded-[4px] bg-zinc-600"></div>
        <div className="h-1 w-12 rounded-[4px] bg-zinc-600"></div>
        <div className="h-1 w-12 rounded-[4px] bg-zinc-600"></div>
      </div>
    </div>
  )
}

function BorderTrailCard2() {
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const handleAnimationComplete = () => {
    setIsLoading(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  const handleLoad = () => {
    setIsLoading(true)
    setIsVisible(true)
  }

  return (
    <div className="relative h-[200px] w-[300px] rounded-md border border-zinc-300/40 bg-zinc-100 px-4 py-3 dark:border-zinc-700/40 dark:bg-zinc-900">
      {isVisible && (
        <BorderTrail
          className={cn(
            "bg-gradient-to-l from-green-300 via-green-500 to-green-300 transition-opacity duration-300 dark:from-green-700/30 dark:via-green-500 dark:to-green-700/30",
            isLoading ? "opacity-100" : "opacity-0",
          )}
          size={120}
          transition={{
            ease: [0, 0.5, 0.8, 0.5],
            duration: 4,
            repeat: 2,
          }}
          onAnimationComplete={handleAnimationComplete}
        />
      )}
      <div className="flex h-full flex-col items-end justify-end">
        <button
          className="relative ml-1 flex h-8 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-white px-2 text-sm text-zinc-500 focus-visible:ring-2 active:scale-[0.96] dark:border-zinc-50/10"
          type="button"
          aria-label="Load"
          onClick={handleLoad}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

function BorderTrailTextarea() {
  return (
    <div className="relative h-[160px] w-[260px] overflow-hidden rounded-md border border-zinc-950/10 bg-white text-zinc-700 outline-none dark:border-zinc-50/20 dark:bg-zinc-950 dark:text-zinc-300">
      <textarea className="h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none" />
      <BorderTrail
        className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
        size={120}
      />
    </div>
  )
}

