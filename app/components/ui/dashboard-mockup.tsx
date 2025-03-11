"use client"

import { motion } from "framer-motion"
import { Plane, Car, BedDouble, Calendar, Bell, CreditCard, Menu, Search, Layout } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import Image from "next/image"
import { AnimatedCounter } from "@/app/components/ui/animated-counter"
import { ChartComponent } from "@/app/components/ui/chart-component"
import { HorizontalPriceChart } from "@/app/components/ui/horizontal-price-chart"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

const FlightBadge = ({ from, to }) => (
  <motion.div
    className="relative inline-flex items-center space-x-1 px-1 py-0.5 rounded-md text-[8px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-500"
    whileHover={{ scale: 1.05 }}
  >
    <motion.span
      className="absolute inset-0 rounded-md"
      animate={{
        boxShadow: [
          "0 0 0 1px rgba(16,185,129,0.1)",
          "0 0 0 2px rgba(16,185,129,0.1)",
          "0 0 0 1px rgba(16,185,129,0.1)",
        ],
      }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    />
    <span className="relative flex h-1 w-1 mr-1">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500"></span>
    </span>
    <span className="w-10 text-right">{from}</span>
    <Plane className="w-1.5 h-1.5 mx-0.5 transform rotate-90" />
    <span className="w-10 text-left">{to}</span>
  </motion.div>
)

const priceChartData = [
  { label: "Flights", price: 2500, color: "#10B981" },
  { label: "Accommodation", price: 1800, color: "#3B82F6" },
  { label: "Transportation", price: 500, color: "#F59E0B" },
  { label: "Meals & Entertainment", price: 700, color: "#EF4444" },
]

export function DashboardMockup() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-gray-900/50 p-4 hidden lg:block">
          <div className="flex items-center space-x-4 mb-6">
            <Image src="/suitpax-main-logo.svg" alt="Suitpax Logo" width={32} height={32} className="rounded-lg" />
            <span className="font-medium text-sm tracking-tighter text-white">Suitpax Travel</span>
          </div>
          <nav className="space-y-2">
            {[
              { label: "Overview", icon: Layout, active: true },
              { label: "Flights", icon: Plane },
              { label: "Hotels", icon: BedDouble },
              { label: "Transport", icon: Car },
              { label: "Expenses", icon: CreditCard },
            ].map((item) => (
              <Button key={item.label} variant={item.active ? "secondary" : "ghost"} className="w-full justify-start">
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-900/30 p-4 lg:p-6 overflow-y-auto">
          {/* Header */}
          <motion.header variants={itemVariants} className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search trips, bookings..."
                  className="pl-10 bg-white/10 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-gray-400" />
              </Button>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1732741355821-oo8gWX3NiQpzX0SN7BZqAEShDkTKaO.jpeg"
                alt="Profile avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </motion.header>

          {/* Dashboard Content */}
          <div className="space-y-6">
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Trips", value: 6, subtitle: "Last 30 days", icon: Plane },
                { title: "Upcoming Flights", value: 3, subtitle: "Next: BCN → JFK", icon: Calendar },
                { title: "Hotel Nights", value: 8, subtitle: "Last 30 days", icon: BedDouble },
                { title: "Travel Wallet", value: 2600, subtitle: "Last 30 days", icon: CreditCard, prefix: "$" },
              ].map((item) => (
                <motion.div key={item.title} variants={itemVariants}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-gray-200">{item.title}</CardTitle>
                      <item.icon className="h-4 w-4 text-emerald-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">
                        {item.prefix}
                        <AnimatedCounter end={item.value} />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{item.subtitle}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Travel Expenses</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartComponent />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Upcoming Travel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div variants={containerVariants} className="space-y-4">
                      {[
                        {
                          icon: Plane,
                          title: "BCN → NYC",
                          subtitle: "Business Class · AA2100",
                          date: "Jan 15",
                          time: "14:55",
                          badge: <FlightBadge from="Barcelona" to="New York" />,
                        },
                        {
                          icon: BedDouble,
                          title: "Four Seasons NYC",
                          subtitle: "Executive Suite · 2 nights",
                          date: "Jan 15-18",
                          time: "Check-in: 15:00",
                        },
                        {
                          icon: Car,
                          title: "Suitpax Ride",
                          subtitle: "Tesla Model Y",
                          date: "Jan 15",
                          time: "13:30",
                        },
                      ].map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="flex items-center space-x-4">
                          <div className="bg-emerald-500/20 rounded-full p-2">
                            <item.icon className="h-4 w-4 text-emerald-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{item.title}</p>
                            <p className="text-xs text-gray-400 truncate">{item.subtitle}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-white">{item.date}</p>
                            <p className="text-xs text-gray-400">{item.time}</p>
                          </div>
                          {item.badge && <div className="flex-shrink-0">{item.badge}</div>}
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Travel Wallet Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <HorizontalPriceChart
                    items={priceChartData}
                    total={priceChartData.reduce((sum, item) => sum + item.price, 0)}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

