import { getStatsData } from "@/lib/stats"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export async function StatsSection() {
  const stats = await getStatsData()
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <section className="border-t">
      <div
        className={cn(
          "container mx-auto grid gap-4 px-4 py-16 sm:grid-cols-2 md:grid-cols-4",
          isDark ? "bg-zinc-900" : "bg-white",
        )}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`text-3xl font-bold ${isDark ? "text-white" : "text-black"}`}>{stat.value}</div>
            <div className={`mt-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

