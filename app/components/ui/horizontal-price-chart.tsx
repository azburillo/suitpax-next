import type React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface PriceItem {
  label: string
  price: number
  color: string
}

interface HorizontalPriceChartProps {
  items: PriceItem[]
  total: number
}

export const HorizontalPriceChart: React.FC<HorizontalPriceChartProps> = ({ items, total }) => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const chartVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "100%", opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.div className="space-y-2" variants={chartVariants} initial="hidden" animate="visible">
      {items.map((item, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className={isDark ? "text-gray-400" : "text-gray-600"}>{item.label}</span>
            <span className="font-medium">${item.price.toLocaleString()}</span>
          </div>
          <motion.div className="h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700" variants={itemVariants}>
            <motion.div
              className="h-full rounded-full"
              style={{
                backgroundColor: item.color,
                width: `${(item.price / total) * 100}%`,
              }}
              initial={{ width: 0 }}
              animate={{ width: `${(item.price / total) * 100}%` }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          </motion.div>
        </div>
      ))}
      <div className="flex justify-between text-sm font-semibold mt-2">
        <span>Total</span>
        <span>${total.toLocaleString()}</span>
      </div>
    </motion.div>
  )
}

