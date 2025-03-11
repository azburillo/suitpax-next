"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { GradientText } from "@/app/components/ui/gradient-text"
import { Button } from "@/app/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ManifestoClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-teal-950 to-black text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GradientText className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Our Manifesto</GradientText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Redefining corporate travel management for the modern era
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 mb-6">
              At Suitpax, we envision a world where corporate travel is not just a necessity, but an opportunity for
              growth, innovation, and seamless experiences. We're committed to transforming the landscape of business
              travel, making it more efficient, sustainable, and enjoyable for everyone involved.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Simplify complex travel processes</li>
              <li>Empower travelers with cutting-edge technology</li>
              <li>Optimize costs without compromising quality</li>
              <li>Prioritize sustainability in every journey</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Suitpax Vision"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            We're dedicated to revolutionizing corporate travel management through innovation, sustainability, and
            unparalleled service. Join us in shaping the future of business travel.
          </p>
          <Link href="/enterprise" passHref>
            <Button variant="outline" className="group">
              Explore Enterprise Solutions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

