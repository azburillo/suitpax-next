"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const data = [
  { name: "Jan", total: 1300 },
  { name: "Feb", total: 800 },
  { name: "Mar", total: 1200 },
  { name: "Apr", total: 750 },
  { name: "May", total: 1600 },
  { name: "Jun", total: 1700 },
]

export function ChartComponent() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <Card className={isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"}>
      <CardHeader>
        <CardTitle className={isDark ? "text-white" : "text-gray-900"}>Travel Expenses</CardTitle>
        <CardDescription className={isDark ? "text-gray-400" : "text-gray-600"}>
          Your monthly travel spending
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} stroke={isDark ? "#333" : "#eee"} />
            <XAxis
              dataKey="name"
              stroke={isDark ? "#888888" : "#888888"}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke={isDark ? "#888888" : "#888888"}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
              dx={-10}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div
                      className={`p-2 rounded-md backdrop-blur-md ${
                        isDark
                          ? "bg-zinc-800/80 text-white border-zinc-700"
                          : "bg-white/80 text-gray-900 border-gray-200"
                      } shadow-lg border`}
                    >
                      <p className="font-semibold">{`$${payload[0].value}`}</p>
                      <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        {payload[0].payload.name}
                      </p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Bar
              dataKey="total"
              fill={isDark ? "#98FB98" : "#98FB98"}
              radius={[4, 4, 0, 0]}
              barSize={20}
              onMouseOver={(data, index) => {
                return {
                  fill: isDark ? "#7CCD7C" : "#7CCD7C",
                  transition: "fill 0.3s ease",
                }
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

