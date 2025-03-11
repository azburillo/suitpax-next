"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, Bars3Icon, EllipsisVerticalIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const MetricCard = ({
  value,
  label,
  color = "emerald",
}: {
  value: string
  label: string
  color?: "emerald" | "orange"
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative overflow-hidden rounded-3xl bg-[#001F1B] p-8 h-full"
  >
    <div className="relative z-10">
      <motion.h3 className={`text-6xl font-bold mb-4 ${color === "emerald" ? "text-emerald-400" : "text-orange-500"}`}>
        {value}
      </motion.h3>
      <motion.p className={`text-2xl ${color === "emerald" ? "text-emerald-400" : "text-orange-500"}`}>
        {label}
      </motion.p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
  </motion.div>
)

const TestimonialCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative overflow-hidden rounded-3xl bg-[#1A0F00] p-8 h-full"
  >
    <div className="relative z-10">
      <h3 className="text-4xl text-orange-500 mb-8">These two are on the same platform</h3>
      <div className="flex items-center gap-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-23-07-37-18-472_com.android.chrome.jpg-bekxIVjEWtVi0y7qI5qqZanhfpBlrM.jpeg"
          alt="Collin Steele"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <p className="text-2xl text-orange-500">Collin Steele</p>
          <p className="text-xl text-orange-400">CEO of Predictable Revenue</p>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
  </motion.div>
)

export function SalesMetrics() {
  return (
    <section className="min-h-screen bg-[#0C0C0C] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center py-4 mb-8">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-lg">
              <Bars3Icon className="w-6 h-6" />
            </button>
            <h1 className="text-xl">Sales Intelligence and Engagement Platform</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Get a demo
            </Button>
            <button className="p-2 hover:bg-white/10 rounded-lg">
              <EllipsisVerticalIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <TestimonialCard />
          <div className="grid gap-6">
            <MetricCard value="64%" label="cost savings" />
            <MetricCard value="400%" label="more phone numbers" />
            <MetricCard value="50%" label="increased data quality" />
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button
            variant="outline"
            className="text-white border-white/20 hover:bg-white/10 text-lg rounded-full px-8 py-6"
          >
            Read more customer stories
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

