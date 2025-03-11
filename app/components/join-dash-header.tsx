"use client"

import { useState } from "react"

export function JoinDashHeader() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="flex flex-col items-center mb-8">
      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-800/10 mb-2">
        Next-gen travel stack
      </span>
      <h2 className="text-2xl font-semibold text-black tracking-tighter text-center mb-4">
        The travel powerhouse – experience travel like never before
      </h2>
      <div className="relative w-auto">
        <div
          className={`absolute -inset-0.5 bg-emerald-700 rounded-lg blur opacity-75 transition duration-1000 ${isFocused ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}
        ></div>
        <div className="relative">
          <input
            type="text"
            value="app.suitpax.com/dash"
            readOnly
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="block w-[240px] rounded-md border-0 py-3 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 text-sm leading-6 bg-white shadow-sm transition-all duration-300 ease-in-out"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500 sm:text-sm">🔗</span>
          </div>
        </div>
      </div>
    </div>
  )
}

