"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Badge } from "@/app/components/ui/badge"

const data = [
  { name: "Jan", twitter: 400, linkedin: 240, facebook: 320 },
  { name: "Feb", twitter: 300, linkedin: 398, facebook: 280 },
  { name: "Mar", twitter: 200, linkedin: 420, facebook: 250 },
  { name: "Apr", twitter: 278, linkedin: 380, facebook: 390 },
  { name: "May", twitter: 189, linkedin: 480, facebook: 400 },
]

const locations = [
  { name: "United States", mrr: "$300K", growth: "+12%" },
  { name: "England", mrr: "$220K", growth: "+8%" },
  { name: "Argentina", mrr: "$180K", growth: "+15%" },
]

export function AnalyticsDashboard() {
  return (
    <Card className="w-full h-full backdrop-blur-md bg-white/10 border-0 overflow-hidden">
      <CardContent className="p-6 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 flex-1"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold tracking-tighter text-white">LTV by Channel</h3>
            <Badge variant="outline" className="backdrop-blur-sm text-white">
              Last 30 days
            </Badge>
          </div>

          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip />
                <Line type="monotone" dataKey="twitter" stroke="#1DA1F2" strokeWidth={2} />
                <Line type="monotone" dataKey="linkedin" stroke="#0A66C2" strokeWidth={2} />
                <Line type="monotone" dataKey="facebook" stroke="#1877F2" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tighter text-white">MRR by Location</h3>
            <div className="grid gap-4">
              {locations.map((location) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 backdrop-blur-lg"
                >
                  <span className="font-medium text-white">{location.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-zinc-400">{location.mrr}</span>
                    <Badge variant="success" className="text-xs">
                      {location.growth}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

