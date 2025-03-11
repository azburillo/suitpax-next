"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the submission, like sending to an API
    console.log("Email submitted:", email)
    // Reset the form
    setEmail("")
  }

  return (
    <div className="w-full py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-gray-200 rounded-lg">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-gray-600 mb-6">
            Smart travel ecosystem.
            <br />
            Perfectly aligned management.
          </h2>

          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-200 h-12 px-4 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-gray-950 text-white rounded-lg h-12 transition-all duration-300 hover:shadow-lg hover:gray-900/60 hover:scale-[1.02]"
              >
                Send me a demo
              </Button>

              <div className="flex justify-between items-center pt-4 px-2 text-xs text-gray-400">
                <span className="flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Interactive dashboard
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  AI-powered insights
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Premium features
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

