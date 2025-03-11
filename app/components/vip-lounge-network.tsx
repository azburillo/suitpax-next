"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRightIcon,
  GlobeAltIcon,
  StarIcon,
  CoffeeIcon,
  WifiIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline" // Imported from Heroicons
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { InteractiveGlobe } from "@/components/interactive-globe"

const benefits = [
  {
    icon: GlobeAltIcon,
    title: "Global Access",
    description: "119 premium lounges across 94 cities in 51 countries",
  },
  {
    icon: StarIcon,
    title: "VIP Treatment",
    description: "Priority access and personalized service",
  },
  {
    icon: CoffeeIcon,
    title: "Premium Amenities",
    description: "Gourmet dining and premium beverages",
  },
  {
    icon: WifiIcon,
    title: "Business Ready",
    description: "High-speed WiFi and private workspaces",
  },
  {
    icon: UserCircleIcon,
    title: "Refresh & Relax",
    description: "Shower suites and wellness facilities",
  },
  {
    icon: UserCircleIcon,
    title: "Rest Areas",
    description: "Quiet zones and sleeping pods",
  },
]

const BlinkingDot = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute w-2 h-2"
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
  >
    <div className="w-2 h-2 bg-[#93c572] rounded-full" />
    <motion.div
      className="absolute inset-0 bg-[#93c572] rounded-full"
      animate={{
        scale: [1, 3],
        opacity: [0.3, 0],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeOut",
      }}
    />
  </motion.div>
)

export function VIPLoungeNetwork() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,197,114,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-block px-4 py-2 rounded-full border border-[#93c572] mb-8"
            >
              <span className="text-[#93c572]">VIP Airport Access</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Your gateway to premium travel experiences
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access an exclusive network of airport lounges worldwide with our premium membership program.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4rMWotITg4S4ZiDn8Sr6q-FS01VID5vsNz5Sua8vAdjMZudMovag.jpeg"
                alt="VIP Lounge Interior"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-medium mb-2">Premium Lounges</h3>
                <p className="text-gray-200 text-sm">
                  Experience luxury and comfort in our carefully curated network of premium airport lounges.
                </p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative h-[300px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <InteractiveGlobe />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <GlobeAltIcon className="w-4 h-4 text-[#93c572]" />
                    <span>119 lounges • 94 cities • 51 countries</span>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <benefit.icon className="w-6 h-6 text-[#93c572] mb-3" />
                    <h3 className="text-white text-sm font-medium mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-xs">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button className="bg-[#93c572] text-black hover:bg-[#93c572]/90" asChild>
              <Link href="/membership">
                Explore Membership Benefits
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

