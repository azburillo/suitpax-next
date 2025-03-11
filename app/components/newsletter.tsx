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
    <div className="w-full bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-gray-600 mb-2">
            Smart travel ecosystem.<br />
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
              <Button type="submit" className="bg-gray-200 text-black rounded-lg hover:bg-gray-100 h-12">
                Send me a demo
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

