"use client"

import React from "react"
import { cn } from "@/app/lib/utils"

export const BackgroundGradient = React.memo(({ className }: { className?: string }) => {
  return (
    <div className={cn("fixed inset-0 z-0", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-emerald-950 dark:via-gray-900 dark:to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_100%)]" />
    </div>
  )
})

BackgroundGradient.displayName = "BackgroundGradient"

