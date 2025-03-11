"use client"

import { Card } from "@/app/components/ui/card"
import { CalendarDays } from "lucide-react"

const stocks = [
  { symbol: "CART", name: "Maplebear Inc.", price: 36.22, change: -1.3, percent: -3.46 },
  { symbol: "NVDA", name: "NVIDIA Corporation", price: 903.5, change: 79.96, percent: 8.85 },
  { symbol: "AAPL", name: "Apple Inc.", price: 193.49, change: 11.33, percent: 6.22 },
  { symbol: "RDDT", name: "Reddit Inc.", price: 51.44, change: 5.15, percent: 11.13 },
  { symbol: "QQQ", name: "Invesco QQQ Trust", price: 422.58, change: 14.3, percent: 3.36 },
]

const earnings = [
  { symbol: "NVDA", report: "Q3 2023 earnings report" },
  { symbol: "MSFT", report: "Q3 2023 earnings report" },
  { symbol: "AAPL", report: "Q3 2023 earnings report" },
]

export function WatchlistPerformanceCard() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden bg-black/90 backdrop-blur-xl border-white/10">
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tighter">Watchlist performance</h2>
          <p className="text-sm text-gray-400 tracking-tighter leading-relaxed">
            Watchlist enthusiasts, tune your antennas: Microsoft usurps Apple's crown in market value, thanks to AI's
            siren call...
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/5">
            <div className="text-sm text-gray-400">S&P 500</div>
            <div className="text-2xl font-bold text-red-500">-0.07%</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5">
            <div className="text-sm text-gray-400">Your watchlist</div>
            <div className="text-2xl font-bold text-emerald-500">+2.16%</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-gray-400">Top movers</div>
          <div className="space-y-3">
            {stocks.map((stock) => (
              <div key={stock.symbol} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded bg-white/10" />
                  <div>
                    <div className="font-medium tracking-tighter">{stock.symbol}</div>
                    <div className="text-xs text-gray-400">{stock.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium tracking-tighter">${stock.price}</div>
                  <div className={`text-xs ${stock.change >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                    {stock.change >= 0 ? "+" : ""}
                    {stock.change} ({stock.percent}%)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">Earnings announcements</div>
            <div className="text-sm text-gray-400">3</div>
          </div>
          <div className="space-y-2">
            {earnings.map((earning, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-4 bg-violet-500 rounded" />
                  <div>
                    <div className="font-medium tracking-tighter">{earning.symbol}</div>
                    <div className="text-xs text-gray-400">{earning.report}</div>
                  </div>
                </div>
                <CalendarDays className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

