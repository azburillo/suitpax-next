"use client"
import { motion } from "framer-motion"
import { ChartBarIcon } from "@heroicons/react/24/outline"
import { RainbowButton } from "@/app/components/ui/rainbow-button"
import { CountdownTimer } from "@/app/components/marketing/countdown-timer"
import { useTheme } from "next-themes"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import { DashMockup } from "@/app/components/marketing/dash-mockup"
import Link from "next/link"

export default function Hero() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const targetDate = new Date("2025-10-01T12:00:00Z")

  return (
    <section className="relative overflow-hidden bg-black min-h-screen">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Botón "Schedule a call" - reduced bottom margin */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-4 sm:mb-6 relative flex justify-center">
              <motion.div className="relative" initial="initial" animate="animate" whileHover="hover">
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                  variants={{
                    initial: { opacity: 0, scale: 0.95 },
                    animate: { opacity: 1, scale: 1 },
                  }}
                />
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300 to-emerald-950 blur-sm"
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 0.7 },
                    hover: { opacity: 1 },
                  }}
                />
                <RainbowButton
                  href="https://cal.com/suitpax/alberto-zurano"
                  className="relative inline-flex items-center rounded-full h-auto px-3 py-1.5 text-xs sm:text-sm font-medium text-black transition-all duration-200"
                >
                  <ChartBarIcon className="h-4 w-4 mr-2" />
                  <span className="mr-2">We've raised $2M pre-seed</span>
                </RainbowButton>
              </motion.div>
            </div>
          </motion.div>

          <div className="max-w-full">
            {/* Título principal - increased text size */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-medium mb-5 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 tracking-tighter py-1 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Where travel
              <br />
              meets intelligence
            </motion.h1>

            {/* Subtítulo - adjusted spacing */}
            <motion.p className="text-medium text-xs sm:text-xl text-gray-400 mb-7 max-w-2xl mx-auto">
              Your AI-powered travel stack. Streamline expenses, unlock premium lounges, book smart flights, and manage
              corporate cards—all in one sleek platform for modern business travelers.
            </motion.p>

            {/* Botones de acción y contador */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Botón "Talk to Sales" */}
              <Link
                href="mailto:hello@suitpax.com"
                className="inline-flex items-center justify-center px-5 py-2 border border-gray-200/20
                bg-transparent text-sm font-medium rounded-lg text-white hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                Talk to sales
              </Link>
              {/* Contador regresivo */}
              <CountdownTimer targetDate={targetDate} />
            </motion.div>
          </div>
        </div>

        {/* Vista previa de la plataforma */}
        <DashMockup />
      </div>
      {/* Añadir un divisor visual */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-950/20 to-transparent"></div>
    </section>
  )
}

