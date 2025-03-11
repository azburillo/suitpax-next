"use client"
import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"

const ExpenseManagementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-teal-950 to-black">
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-950 via-teal-950 to-black opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-400 ring-1 ring-inset ring-teal-500/20">
                  Expense Management
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-medium tracking-tight text-white sm:text-6xl">
              Expense Management Solution
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Simplify and streamline your expense tracking and reporting process.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                Get Started
              </Button>
              <a href="#" className="text-sm font-medium leading-6 text-gray-300">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src="/placeholder.svg?height=600&width=900"
                alt="Expense Management Dashboard"
                width={900}
                height={600}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseManagementPage

