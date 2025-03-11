"use client"
import { motion } from "framer-motion"
import { BarChart, Plane, BedDouble, Car, Building2, Briefcase, Users, Settings, X } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export const MenuDashboard = ({ onClose }) => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
    >
      <div className="w-full max-w-md rounded-3xl bg-white dark:bg-zinc-900 p-8 ring-1 ring-zinc-900/5 dark:ring-zinc-800">
        <div className="flex flex-row-reverse items-center justify-between">
          <button
            onClick={onClose}
            className="rounded-md p-1 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
        </div>
        <nav className="mt-6">
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {[
              { icon: BarChart, label: "Dashboard", href: "/" },
              { icon: Plane, label: "Flights", href: "/flights" },
              { icon: BedDouble, label: "Stays", href: "/stays" },
              { icon: Car, label: "Transportation", href: "/transport" },
              { icon: Building2, label: "Business Travel", href: "/business" },
              { icon: Briefcase, label: "Expense Management", href: "/expenses" },
              { icon: Users, label: "Team", href: "/team" },
              { icon: Settings, label: "Settings", href: "/settings" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center py-3 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                  onClick={onClose}
                >
                  <item.icon className="mr-3 h-6 w-6" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  )
}

