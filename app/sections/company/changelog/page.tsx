"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Badge } from "@/app/components/ui/badge"

type Update = {
  date: string
  title: string
  description: string
  categories: Array<"Feature" | "Enhancement" | "Design" | "API" | "Security">
}

const updates: Update[] = [
  {
    date: "February 25, 2024",
    title: "AI-Powered Travel Recommendations",
    description:
      "Introducing our advanced AI system that learns from your travel preferences to suggest personalized itineraries and accommodations. The system now considers factors like previous bookings, preferred airlines, and seasonal preferences.",
    categories: ["Feature", "Enhancement"],
  },
  {
    date: "February 20, 2024",
    title: "Real-Time Flight Status Integration",
    description:
      "Enhanced our flight tracking system with real-time updates from major airlines worldwide. Get instant notifications about gate changes, delays, and boarding times.",
    categories: ["Feature", "API"],
  },
  {
    date: "February 15, 2024",
    title: "Corporate Travel Dashboard 2.0",
    description:
      "Complete overhaul of the corporate dashboard with new analytics features, expense tracking, and team management tools. Now includes custom report generation and department-specific travel policies.",
    categories: ["Enhancement", "Design"],
  },
  {
    date: "February 10, 2024",
    title: "Enhanced Security Protocols",
    description:
      "Implemented additional security measures including biometric authentication for sensitive operations and advanced encryption for payment processing.",
    categories: ["Security", "Enhancement"],
  },
  {
    date: "February 5, 2024",
    title: "Mobile App Redesign",
    description:
      "Major update to our mobile experience with a focus on speed and usability. New features include offline mode for travel documents and integrated passport scanner.",
    categories: ["Design", "Enhancement"],
  },
]

const categoryColors = {
  Feature: "bg-emerald-950 text-emerald-400 border-emerald-800",
  Enhancement: "bg-teal-950 text-teal-400 border-teal-800",
  Design: "bg-blue-950 text-blue-400 border-blue-800",
  API: "bg-indigo-950 text-indigo-400 border-indigo-800",
  Security: "bg-purple-950 text-purple-400 border-purple-800",
}

export default function Changelog() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log("Subscribed:", email)
    setEmail("")
  }

  return (
    <div className="relative min-h-screen w-full bg-black">
      <BackgroundBeams />
      <div className="relative mx-auto max-w-4xl px-4 py-20">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 border-emerald-800 text-emerald-400 bg-emerald-950/50">
            Changelog
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700">
              What&apos;s new?
            </span>
          </h1>
          <p className="mb-8 text-lg text-emerald-200">
            A rundown of the latest Suitpax feature releases, travel innovations, and platform improvements.
          </p>

          <form onSubmit={handleSubscribe} className="mx-auto mb-16 max-w-md space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-emerald-950/30 border-emerald-800 text-emerald-100 placeholder:text-emerald-500"
              required
            />
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-black font-semibold">
              Subscribe to updates
            </Button>
          </form>
        </div>

        <div className="space-y-16">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-b border-emerald-900 pb-16 last:border-0"
            >
              <div className="mb-4 text-sm text-emerald-500">{update.date}</div>
              <h2 className="mb-4 text-2xl font-bold text-emerald-200">{update.title}</h2>
              <div className="mb-4 flex flex-wrap gap-2">
                {update.categories.map((category) => (
                  <span
                    key={category}
                    className={`rounded-full px-3 py-1 text-xs font-medium border ${categoryColors[category]}`}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <p className="text-emerald-100">{update.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

