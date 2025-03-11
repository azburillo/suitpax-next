"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import { TextCardSection } from "@/app/components/text-card-section"
import { RainbowButton } from "@/app/components/ui/rainbow-button"
import { BackgroundGrid } from "@/app/components/backgrounds/background-grid"

export default function WhySuitpaxPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black min-h-[80vh]">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8 min-h-[80vh] flex flex-col justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why leading travel companies choose Suitpax
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              The intelligent platform that transforms travel operations with AI-powered solutions, seamless
              integration, and unprecedented efficiency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <RainbowButton href="mailto:hello@suitpax.com" className="px-6 py-3 text-base font-medium rounded-lg">
                Talk to our team
              </RainbowButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold text-primary mb-2">97%</p>
                <p className="text-gray-600">Customer satisfaction rate</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold text-primary mb-2">30%</p>
                <p className="text-gray-600">Average operational cost savings</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold text-primary mb-2">500+</p>
                <p className="text-gray-600">Global integration partners</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Screenshot */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Suitpax difference</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our intelligent platform streamlines travel operations and delivers exceptional experiences
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl bg-gray-900/30 p-2 backdrop-blur-sm ring-1 ring-white/10">
                <Image
                  src="https://api.microlink.io/?url=https%3A%2F%2Fsuitpax.com%2Fenterprise&screenshot=true&embed=screenshot.url"
                  alt="Suitpax Platform"
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-2xl ring-1 ring-gray-300/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 z-0 opacity-50">
          <BackgroundGrid variant="light" density="medium" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Suitpax is the intelligent choice</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform delivers unmatched value through innovation, integration, and intelligence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:gap-12">
              <TextCardSection
                title="AI-Powered Travel Solutions"
                content="Suitpax leverages cutting-edge artificial intelligence to transform travel operations. Our AI algorithms optimize booking processes, predict travel disruptions, and provide personalized recommendations, resulting in smarter decisions and significant time savings for travel managers and travelers alike."
                className="mb-8"
              />

              <TextCardSection
                title="Seamless Integration Ecosystem"
                content="With over 500 global integration partners, Suitpax connects effortlessly with your existing tech stack. Our platform unifies disparate systems into a cohesive ecosystem, eliminating data silos and creating a single source of truth for all travel operations, from booking to expense management."
                className="mb-8"
              />

              <TextCardSection
                title="Unparalleled Operational Efficiency"
                content="Suitpax customers report an average 30% reduction in operational costs. Our platform automates routine tasks, streamlines approval workflows, and provides real-time visibility into travel spending, allowing your team to focus on strategic initiatives rather than administrative burdens."
                className="mb-8"
              />

              <TextCardSection
                title="Enhanced Traveler Experience"
                content="From intuitive booking interfaces to 24/7 AI-powered support, Suitpax prioritizes the traveler experience at every touchpoint. Our platform's personalization capabilities ensure that each traveler receives tailored recommendations and support, leading to higher satisfaction rates and improved productivity."
                className="mb-8"
              />

              <TextCardSection
                title="Comprehensive Data Analytics"
                content="Gain unprecedented insights into your travel program with Suitpax's advanced analytics. Our platform transforms complex travel data into actionable intelligence, enabling data-driven decisions that optimize spending, improve policy compliance, and enhance traveler safety and satisfaction."
                className="mb-8"
              />

              <TextCardSection
                title="Enterprise-Grade Security"
                content="Suitpax maintains the highest standards of data security and privacy. Our platform is built with enterprise-grade security protocols, regular security audits, and compliance with global regulations, ensuring that your sensitive travel data remains protected at all times."
                className="mb-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What our customers say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from travel leaders who have transformed their operations with Suitpax
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-6">
                  "Implementing Suitpax has been transformative for our travel program. We've reduced booking time by
                  65% and achieved significant cost savings through better visibility and control. The AI-powered
                  recommendations have been particularly valuable for our frequent travelers."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Travel Manager, Global Tech Inc.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-6">
                  "The integration capabilities of Suitpax are unmatched. We were able to connect our existing HR,
                  expense, and accounting systems seamlessly, creating a unified workflow that has eliminated countless
                  hours of manual work and reduced errors by over 90%."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Michael Chen</p>
                    <p className="text-sm text-gray-500">CTO, Innovate Partners</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to transform your travel operations?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join the leading travel companies that trust Suitpax to power their travel programs
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <RainbowButton href="mailto:hello@suitpax.com" className="px-6 py-3 text-base font-medium rounded-lg">
                Schedule a demo
              </RainbowButton>
              <Link
                href="/pricing"
                className="px-6 py-3 text-base font-medium rounded-lg border border-white text-white hover:bg-white hover:text-black transition-all duration-200"
              >
                View pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

