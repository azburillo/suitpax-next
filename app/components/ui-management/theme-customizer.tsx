"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"
import { Moon, Sun } from "lucide-react"

const themes = [
  { name: "Light", color: "#F8FAFC" },
  { name: "Rose", color: "#FFE4E6" },
  { name: "Blue", color: "#DBEAFE" },
  { name: "Green", color: "#DCFCE7" },
  { name: "Dark", color: "#020617" },
]

export function ThemeCustomizer() {
  return (
    <Card className="overflow-hidden backdrop-blur-lg bg-white/10 border-0 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 flex-1"
        >
          <div>
            <h3 className="text-2xl font-bold tracking-tighter text-white">Theming</h3>
            <p className="text-sm text-zinc-400">Easily customize the look and feel with flexible design options.</p>
          </div>

          <div className="flex gap-4 flex-wrap">
            {themes.map((theme, index) => (
              <motion.button
                key={theme.name}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className="w-12 h-12 rounded-full border-2 border-white/20 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: theme.color }}
                >
                  {theme.name === "Dark" && <Moon className="w-6 h-6 m-2.5 text-white" />}
                  {theme.name === "Light" && <Sun className="w-6 h-6 m-2.5 text-black" />}
                </div>
                <span className="absolute top-14 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {theme.name}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

