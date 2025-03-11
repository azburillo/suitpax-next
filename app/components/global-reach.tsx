"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Card } from "@/components/ui/card"
import Globe from "@/app/components/ui/alternative-globe"

export function GlobalReach() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-5">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl tracking-tighter font-medium  text-black mb-5"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Shaping the future of global airport solutions
          </motion.h2>
          <motion.p
            className="text-gray-500 text-sm mb-12"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Connecting you to every corner of the world.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-black border border-gray-200 rounded-2xl overflow-hidden">
            <div className="relative">
              <Globe className="w-full h-auto" />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

