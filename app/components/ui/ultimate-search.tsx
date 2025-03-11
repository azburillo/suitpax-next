"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Search } from "lucide-react"

export function UltimateSearch() {
  const [input, setInput] = useState("")
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search submitted:", input)
    setInput("")
  }

  return (
    <div className="flex items-center bg-background border border-input rounded-full overflow-hidden">
      <form onSubmit={handleSubmit} className="flex items-center">
        <Input
          type="text"
          placeholder="Type something"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-none bg-transparent focus:ring-0 text-xs w-40 sm:w-60 px-2 py-2"
        />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                `0 0 0 2px ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                `0 0 0 4px ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
                `0 0 0 2px ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="relative rounded-full text-muted-foreground hover:text-foreground"
          >
            <Search className="h-4 w-4" />
          </Button>
        </motion.div>
      </form>
    </div>
  )
}

