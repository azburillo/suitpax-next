"use client"

import type * as React from "react"
import { useState, useCallback } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  src?: string
  className?: string
}

export function CopyButton({ value, src, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(value)
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [value])

  return (
    <button
      className={cn(
        "relative z-20 inline-flex h-6 w-6 items-center justify-center rounded-md border bg-background text-sm font-medium transition-all hover:bg-muted focus:outline-none",
        className,
      )}
      onClick={onCopy}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
    </button>
  )
}

