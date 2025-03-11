"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function PartnersPage() {
  return (
    <div className="bg-white">
      <header className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Partners background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl" {...fadeIn}>
            Suitpax Partner Program
          </motion.h1>
          <motion.p className="mt-6 text-xl text-teal-100 max-w-3xl" {...fadeIn}>
            Join forces with the leading travel management platform and unlock new opportunities for growth.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button asChild size="lg">
              <Link
                href="https://dash.partnerstack.com/invite/d9b4d9d2382a45abb75a3581cd05755a"
                className="bg-white text-emerald-600 hover:bg-emerald-50"
              >
                Become a Partner
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <section className="mb-20">
          <motion.h2 className="text-3xl font-bold mb-8 text-center text-gray-900" {...fadeIn}>
            Why Partner with Suitpax?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expand Your Reach", description: "Access our global customer base and grow your business" },
              {
                title: "Innovative Solutions",
                description: "Offer cutting-edge travel management technology to your clients",
              },
              { title: "Dedicated Support", description: "Get personalized assistance from our partner success team" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <motion.h2 className="text-3xl font-bold mb-8 text-center text-gray-900" {...fadeIn}>
            Our Partnership Types
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Referral Partners",
                description: "Introduce your clients to Suitpax and earn commissions on successful referrals.",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                title: "Technology Partners",
                description: "Integrate your solutions with Suitpax to create powerful, combined offerings.",
                image: "/placeholder.svg?height=200&width=200",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          className="bg-gradient-to-r from-emerald-500 to-teal-600 p-8 rounded-lg text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-teal-100">Join our partner program today and let's grow together!</p>
          <Button asChild size="lg">
            <Link
              href="https://dash.partnerstack.com/invite/d9b4d9d2382a45abb75a3581cd05755a"
              className="bg-white text-emerald-600 hover:bg-emerald-50"
            >
              Apply Now
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.section>
      </main>
    </div>
  )
}

