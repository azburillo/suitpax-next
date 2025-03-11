"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { SiIntercom, SiSlack, SiZendesk, SiFigma, SiAsana } from "react-icons/si"
import { Building2, Loader2 } from "lucide-react"

const IntegrationIcon = ({ icon: Icon, delay = 0 }: { icon: any; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
    className="w-14 h-14 rounded-xl bg-black border border-emerald-900/20 flex items-center justify-center relative"
  >
    <Icon className="w-6 h-6 text-white/70" />
    <motion.div
      className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-emerald-500"
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ delay: delay + 0.2, duration: 1, repeat: Number.POSITIVE_INFINITY }}
    />
  </motion.div>
)

export function IntegrationFlow() {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,197,114,0.05),transparent_50%)]" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Seamlessly integrate with your existing workflow
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Suitpax connects with the tools you already use, so you can create requests directly from your support
              platform, email client, or shared Slack channels.
            </p>
            <p className="text-gray-500">
              Coming soon: <span className="text-white">Salesforce</span> and{" "}
              <span className="text-white">Hubspot</span> integrations
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-5 gap-4 mb-12">
              <IntegrationIcon icon={SiIntercom} delay={0} />
              <IntegrationIcon icon={SiSlack} delay={0.1} />
              <IntegrationIcon icon={SiZendesk} delay={0.2} />
              <IntegrationIcon icon={SiFigma} delay={0.3} />
              <IntegrationIcon icon={SiAsana} delay={0.4} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <Card className="bg-black border border-emerald-900/20 p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <SiIntercom className="w-6 h-6 text-white/70" />
                  <div className="text-gray-400">
                    Intercom <span className="text-gray-600">•</span> support@suitpax.com
                  </div>
                </div>
                <p className="text-white text-lg">
                  We need a comprehensive analysis of travel patterns across all airline partners in a single dashboard
                </p>
              </Card>

              <div className="flex items-center gap-4 mb-8 ml-4">
                <div className="w-12 h-12 rounded-full bg-black border border-emerald-900/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white/70" />
                </div>
                <div className="text-white">
                  ACME Airlines <span className="text-gray-600">New Request</span>
                </div>
              </div>

              <Card className="bg-black border border-emerald-900/20 p-6">
                <div className="flex items-center gap-3">
                  <Loader2 className="w-5 h-5 text-emerald-500 animate-spin" />
                  <div className="text-gray-400 font-mono">AIR-247</div>
                  <div className="text-white">Airline partnership analytics dashboard</div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <blockquote className="text-2xl font-light text-white italic">
              "Suitpax Requests bridges the gap between our product and go-to-market teams, making collaboration
              seamless and efficient."
            </blockquote>
            <cite className="text-gray-400 mt-4 block">- Sarah Chen, Product Manager at AirlineX</cite>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

