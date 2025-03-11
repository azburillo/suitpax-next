"use client"

import React from "react"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BarsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean
}

export const BarsButton = React.forwardRef<HTMLButtonElement, BarsButtonProps>(
  ({ isOpen, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn(
          "text-white hover:bg-transparent text-1xl h-8 w-8 bg-transparent hover:bg-gray-100/10 transition-colors",
          className,
        )}
        {...props}
      >
        {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-8 w-8 md:h-10 md:w-10" />}
      </Button>
    )
  },
)
BarsButton.displayName = "BarsButton"

