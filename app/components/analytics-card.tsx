"use client"

import Image from "next/image"
import { teamMembers } from "@/app/data/team-members"
import { ArrowUpIcon, GlobeAltIcon, UserGroupIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/components/ui/card"

interface AnalyticsCardProps {
  size?: "sm" | "md" | "default" | "lg" | "xl" | "2xl" | "full"
}

export function AnalyticsCard({ size = "md" }: AnalyticsCardProps) {
  const activeMembers = teamMembers.slice(0, 5)

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 overflow-hidden shadow-lg" size={size}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">Analytics & Insights</CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
          Optimize your travel management and boost business performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
            <div className="flex items-center mb-2">
              <GlobeAltIcon className="h-4 w-4 text-blue-500 mr-2" />
              <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-200">Global Reach</h3>
            </div>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">120+</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Countries served</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
            <div className="flex items-center mb-2">
              <UserGroupIcon className="h-4 w-4 text-green-500 mr-2" />
              <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-200">User Base</h3>
            </div>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">1.2M+</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Active users</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
            <div className="flex items-center mb-2">
              <CurrencyDollarIcon className="h-4 w-4 text-yellow-500 mr-2" />
              <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-200">Cost Savings</h3>
            </div>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">30%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Avg. travel cost reduction</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 shadow-sm">
            <div className="flex items-center mb-2">
              <ArrowUpIcon className="h-4 w-4 text-red-500 mr-2" />
              <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-200">Efficiency Boost</h3>
            </div>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">45%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Booking efficiency increase</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-xs border-t border-gray-200 dark:border-gray-700">
        <div>
          <p className="text-gray-600 dark:text-gray-300 mb-1">Active team</p>
          <div className="flex -space-x-1 overflow-hidden">
            {activeMembers.map((member, index) => (
              <Image
                key={member.name}
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={24}
                height={24}
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800"
              />
            ))}
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-600 dark:text-gray-300 mb-1">Total bookings</p>
          <p className="text-base font-bold text-gray-800 dark:text-gray-100">24,521</p>
          <p className="text-xs text-green-500">
            <ArrowUpIcon className="inline h-3 w-3 mr-1" />
            12% increase
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}

