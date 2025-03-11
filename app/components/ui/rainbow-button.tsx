"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/app/lib/utils"
import Link from "next/link"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

const rainbowButtonVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-black hover:bg-black/80",
        outline: "bg-transparent hover:bg-black/5",
      },
      size: {
        default: "h-10 px-4 py-2", // Reduced from h-12 px-6 py-3
        sm: "h-8 px-3", // Reduced from h-9 px-4
        lg: "h-12 px-6", // Reduced from h-14 px-8
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof rainbowButtonVariants> {
  asChild?: boolean
  href?: string
}

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, variant, size, asChild = false, href, children, ...props }, ref) => {
    const Comp = asChild ? motion.button : href ? Link : motion.button

    return (
      <Comp
        className={cn(
          "group relative inline-flex items-center justify-center",
          rainbowButtonVariants({ variant, size, className }),
        )}
        ref={ref as any}
        href={href}
        {...props}
      >
        {/* Gradient border container */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, #00ffcc, #3366ff, #032416, #e4e5e6, #00ffcc)",
            backgroundSize: "300% 100%",
            padding: "2px", // Reduced border width from 2px to 1px
          }}
          animate={{
            backgroundPosition: ["0% 0%", "150% 0%"],
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {/* Inner background to create border effect */}
          <div className="h-full w-full rounded-full bg-black" />
        </motion.div>

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2 text-sm text-white">{children}</span>
      </Comp>
    )
  },
)
RainbowButton.displayName = "RainbowButton"

export { RainbowButton, rainbowButtonVariants }

