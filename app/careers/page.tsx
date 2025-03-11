'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Card } from '@/app/components/ui/card'
import { ArrowRight, Building2, Users2, Rocket, Globe2 } from 'lucide-react'
import { useTheme } from 'next-themes'

const benefits = [
  {
    icon: Globe2,
    title: 'Global Impact',
    description: 'Shape the future of travel technology and make a difference worldwide',
  },
  {
    icon: Users2,
    title: 'Diverse Team',
    description: 'Join a multicultural team of passionate innovators',
  },
  {
    icon: Rocket,
    title: 'Fast Growth',
    description: 'Be part of a rapidly expanding travel tech company',
  },
  {
    icon: Building2,
    title: 'Modern Workplace',
    description: 'Flexible work arrangements and cutting-edge tools',
  },
]

export default function CareersPage() {
  useTheme()

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-2xl font-medium mb-4 text-emerald-950 tracking-tighter">
              Build the future of travel. Apply today.
            </h1>
            <p className="text-gray-600 text-sm">
              We're building the future of travel technology. Join our team of innovators, dreamers,
              and doers in revolutionizing how the world travels.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-5 bg-emerald-950 text-emerald-300">
                  <div className="flex flex-col items-center justify-center text-center">
                    <benefit.icon className="w-6 h-6 mb-3 sm:mb-4" />
                    <h3 className="text-xl font-semibold mb-2 sm:mb-3 tracking-tighter">
                      {benefit.title}
                    </h3>
                    <p className="tracking-tight text-base text-emerald-300/80">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Job Listings Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-8 bg-emerald-950 text-emerald-300 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 sm:mb-6 tracking-tighter">Current Openings</h2>
              <p className="text-emerald-300/80 mb-6 sm:mb-8 tracking-tight">
                We're always looking for talented individuals to join our team. Check out our
                current openings on Wellfound and be a part of our journey in transforming the
                travel industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-emerald-900/50 rounded-lg">
                  <div>
                    <h3 className="font-medium">Engineering</h3>
                    <p className="text-sm text-emerald-300/60">Multiple Positions Available</p>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div className="flex items-center justify-between p-4 bg-emerald-900/50 rounded-lg">
                  <div>
                    <h3 className="font-medium">Product & Design</h3>
                    <p className="text-sm text-emerald-300/60">Multiple Positions Available</p>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div className="flex items-center justify-between p-4 bg-emerald-900/50 rounded-lg">
                  <div>
                    <h3 className="font-medium">Business Development</h3>
                    <p className="text-sm text-emerald-300/60">Multiple Positions Available</p>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button
                  asChild
                  variant="secondary"
                  className="bg-emerald-300 text-emerald-950 hover:bg-emerald-200"
                >
                  <Link
                    href="https://wellfound.com/company/suitpax-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    See All Positions on Wellfound
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
