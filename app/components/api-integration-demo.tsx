"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Terminal, Code2, Braces, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/app/lib/utils"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
}

const CodeSnippet = ({ children }: { children: React.ReactNode }) => (
  <motion.pre
    variants={scaleIn}
    initial="initial"
    animate="animate"
    exit="exit"
    className="bg-[#111111] rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto"
  >
    <code>{children}</code>
  </motion.pre>
)

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ElementType
  title: string
  description: string
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ scale: 1.02 }}
    className="relative group"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 0.3 }}
      className="absolute -inset-px bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur group-hover:opacity-30 transition-opacity"
    />
    <div className="relative bg-black p-4 sm:p-6 rounded-lg border border-emerald-800/20">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mb-3 sm:mb-4" />
      </motion.div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-500">{description}</p>
    </div>
  </motion.div>
)

export function APIIntegrationDemo() {
  const [activeTab, setActiveTab] = useState<"rest" | "node" | "python">("rest")

  const codeExamples = {
    rest: `curl -X POST https://api.suitpax.com/v1/bookings \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "flight_number": "AA123",
    "passenger": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }'`,
    node: `import { SuitpaxClient } from '@suitpax/node';

const client = new SuitpaxClient('YOUR_API_KEY');

const booking = await client.bookings.create({
  flight_number: 'AA123',
  passenger: {
    name: 'John Doe',
    email: 'john@example.com'
  }
});`,
    python: `from suitpax import Client

client = Client('YOUR_API_KEY')

booking = client.bookings.create(
    flight_number='AA123',
    passenger={
        'name': 'John Doe',
        'email': 'john@example.com'
    }
)`,
  }

  return (
    <section className="relative py-16 sm:py-24 bg-black overflow-hidden">
      {/* Background gradient with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,197,114,0.1),transparent_50%)]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-200 mb-3 sm:mb-4">
              Powerful API for Travel Integration
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
              Build custom travel solutions with our comprehensive API. Integrate bookings, manage itineraries, and
              automate workflows with ease.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center"
          >
            <Button
              variant="outline"
              className="text-xs sm:text-sm border-gray-800 text-gray-400 hover:bg-gray-800/50"
              onClick={() => window.open("/docs", "_blank")}
            >
              View Documentation
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button
              variant="outline"
              className="text-xs sm:text-sm border-gray-800 text-gray-400 hover:bg-gray-800/50"
              onClick={() => window.open("/api-reference", "_blank")}
            >
              API Reference
              <Terminal className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16">
          <FeatureCard
            icon={Terminal}
            title="RESTful API"
            description="Modern REST API with predictable resource-oriented URLs and standard HTTP response codes."
            delay={0.1}
          />
          <FeatureCard
            icon={Code2}
            title="Native SDKs"
            description="Official client libraries in multiple languages for seamless integration."
            delay={0.2}
          />
          <FeatureCard
            icon={Braces}
            title="Webhooks"
            description="Real-time notifications for important events in your travel ecosystem."
            delay={0.3}
          />
        </div>

        <motion.div
          variants={scaleIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute -inset-px bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg blur"
          />
          <div className="relative bg-black rounded-lg border border-emerald-800/20 overflow-hidden">
            <div className="flex border-b border-emerald-800/20">
              {(["rest", "node", "python"] as const).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors",
                    activeTab === tab ? "text-emerald-400 bg-emerald-950/30" : "text-gray-400 hover:text-emerald-400",
                  )}
                >
                  {tab.toUpperCase()}
                </motion.button>
              ))}
            </div>
            <div className="p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <CodeSnippet key={activeTab}>{codeExamples[activeTab]}</CodeSnippet>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {[
            { number: "99.99%", label: "Uptime SLA" },
            { number: "<100ms", label: "Average Response Time" },
            { number: "24/7", label: "Developer Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-xl sm:text-3xl font-bold text-gray-300 mb-1 sm:mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

