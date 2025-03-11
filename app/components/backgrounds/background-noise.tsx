"use client"

import React from "react"
import { cn } from "@/app/lib/utils"

export const BackgroundNoise = React.memo(({ className }: { className?: string }) => {
  return (
    <div className={cn("fixed inset-0 z-0", className)}>
      <div className="absolute inset-0 bg-white dark:bg-black" />
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-black dark:to-black opacity-60" />
    </div>
  )
})

BackgroundNoise.displayName = "BackgroundNoise"

