"use client"

import React from "react"
import { cn } from "@/app/lib/utils"

export const BackgroundDots = React.memo(({ className }: { className?: string }) => {
  return (
    <div className={cn("fixed inset-0 z-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-white dark:bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-black dark:to-black opacity-60" />
    </div>
  )
})

BackgroundDots.displayName = "BackgroundDots"

