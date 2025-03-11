"use client"

import { Badge } from "@/app/components/ui/badge"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"
import { cn } from "@/app/lib/utils"
import {
  LayoutDashboard,
  Plane,
  Hotel,
  CreditCard,
  Settings,
  Bell,
  Search,
  Car,
  Calendar,
  Users,
  TrendingUp,
  BarChart,
} from "lucide-react"
import { Input } from "@/app/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { AnimatedSpan, Terminal, TypingAnimation } from "@/app/components/ui/terminal"

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Plane, label: "Flights" },
  { icon: Hotel, label: "Hotels" },
  { icon: Car, label: "Cars" },
  { icon: CreditCard, label: "Expenses" },
]

const miniCards = [
  { icon: Plane, label: "Book Flight", color: "bg-blue-500" },
  { icon: Hotel, label: "Reserve Hotel", color: "bg-green-500" },
  { icon: Car, label: "Rent Car", color: "bg-yellow-500" },
  { icon: Calendar, label: "Schedule", color: "bg-purple-500" },
  { icon: Users, label: "Team", color: "bg-pink-500" },
  { icon: CreditCard, label: "Expenses", color: "bg-indigo-500" },
  { icon: Settings, label: "Settings", color: "bg-gray-500" },
]

const companyLogos = [
  { name: "Airbnb", icon: "🏠" },
  { name: "Uber", icon: "🚗" },
  { name: "Lyft", icon: "🚕" },
  { name: "Expedia", icon: "✈️" },
]

const recentActivity = [
  { label: "Flight Booked", amount: "-$849", date: "Today" },
  { label: "Hotel Reserved", amount: "-$1,240", date: "Yesterday" },
  { label: "Expense Reimbursed", amount: "+$2,100", date: "2 days ago" },
]

export function DashboardPreview() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeNavItem, setActiveNavItem] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % miniCards.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-[360px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full bg-background rounded-xl border shadow-2xl overflow-hidden aspect-[3/4]"
      >
        <div className="flex h-full">
          {/* Sidebar */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 border-r bg-card flex flex-col items-center py-4"
          >
            <div className="space-y-4 flex flex-col items-center">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveNavItem(index)}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
                    index === activeNavItem
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <item.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col bg-background">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-b p-4 flex items-center justify-between"
            >
              <div className="relative w-full max-w-[200px]">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-8 py-1 text-xs" />
              </div>
              <div className="flex items-center gap-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-2 rounded-full hover:bg-accent"
                >
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full" />
                </motion.button>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </motion.div>
              </div>
            </motion.div>

            {/* Dashboard Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-lg font-semibold tracking-tight">Welcome back, John</h1>

                {/* Mini Cards */}
                <div className="grid grid-cols-3 gap-2">
                  <AnimatePresence>
                    {miniCards.map(
                      (card, index) =>
                        index === activeIndex && (
                          <motion.div
                            key={card.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Card className={cn("group hover:shadow-md transition-shadow", card.color)}>
                              <CardContent className="p-2 flex flex-col items-center justify-center text-white">
                                <card.icon className="w-6 h-6 mb-1" />
                                <p className="text-xs font-medium text-center">{card.label}</p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ),
                    )}
                  </AnimatePresence>
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium mb-2">Recent Activity</h3>
                    <div className="space-y-2">
                      {recentActivity.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * i }}
                          className="flex items-center justify-between text-sm"
                        >
                          <div>
                            <span className="text-muted-foreground">{item.label}</span>
                            <p className="text-xs text-gray-500">{item.date}</p>
                          </div>
                          <span className={item.amount.startsWith("+") ? "text-green-500" : "text-muted-foreground"}>
                            {item.amount}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Company Logos */}
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium mb-2">Travel Partners</h3>
                    <div className="flex justify-between items-center">
                      {companyLogos.map((company, index) => (
                        <motion.div
                          key={company.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          className="flex flex-col items-center"
                        >
                          <span className="text-2xl mb-1">{company.icon}</span>
                          <span className="text-xs text-muted-foreground">{company.name}</span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-3 py-1 px-2 bg-primary text-primary-foreground rounded text-xs font-medium"
                    >
                      Explore All Partners
                    </motion.button>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center">
                      <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
                      <p className="text-lg font-semibold">+15%</p>
                      <p className="text-xs text-muted-foreground">Bookings</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center">
                      <BarChart className="w-8 h-8 text-blue-500 mb-2" />
                      <p className="text-lg font-semibold">$12,450</p>
                      <p className="text-xs text-muted-foreground">Revenue</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function TerminalDemo() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="px-6 py-1.5 text-lg font-medium rounded-full">
          Why Suitpax?
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground">
          Give Your Travel Stack a
          <br />
          Clear Blueprint with Suitpax
        </h1>
      </div>

      <Terminal>
        <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Preflight checks.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Verifying framework. Found Next.js.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Validating Tailwind CSS.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Validating import alias.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Writing components.json.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Checking registry.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Updating tailwind.config.ts</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Updating app/globals.css</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Installing dependencies.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ Updated 1 file:</span>
          <span className="pl-2">- lib/utils.ts</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground">
          Success! Project initialization completed.
        </TypingAnimation>

        <TypingAnimation delay={7000} className="text-muted-foreground">
          You may now add components.
        </TypingAnimation>
      </Terminal>
    </div>
  )
}

