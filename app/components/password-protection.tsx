"use client"

import { useState } from "react"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaInstagram, FaXTwitter, FaLinkedin as FaLinkedinIcon, FaGithub, FaProductHunt } from "react-icons/fa6"
import { SiG2 } from "react-icons/si"
import Link from "next/link"
import type React from "react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { InfinitePartnersSlider } from "@/app/components/infinite-partners-slider"
import { Card, CardContent } from "@/app/components/ui/card"

interface PasswordProtectionProps {
  onAuthenticated: () => void
}

export function PasswordProtection({ onAuthenticated }: PasswordProtectionProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/verify-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      onAuthenticated()
    } else {
      setError("Incorrect password. Please try again.")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-[20px] p-4 overflow-y-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 to-black/40 pointer-events-none" />
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-2xl bg-gradient-to-br from-emerald-950/20 via-black/40 to-black/60 backdrop-blur-xl overflow-hidden relative border border-white/[0.09]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/[0.03] to-transparent pointer-events-none" />
          <div className="p-6 space-y-4 relative z-10">
            <motion.div
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Image
                src="https://cdn.brandfetch.io/idXcRAzuCF/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                alt="Suitpax"
                width={100}
                height={33}
                className="drop-shadow-lg"
                priority
              />

              <h2 className="text-base sm:text-lg font-semibold text-white/90 tracking-tighter text-center">
                The way you know travel is about to change. Forever.
              </h2>

              <Button
                variant="outline"
                className="mt-2 text-xs text-white/90 border-white/[0.08] hover:bg-emerald-950/20 hover:text-white transition-colors duration-300 backdrop-blur-sm"
                onClick={() => (window.location.href = "mailto:hello@suitpax.com")}
              >
                hello@suitpax.com
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Card className="bg-black/30 border-white/[0.08]">
                <CardContent className="p-4 sm:p-6">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="relative group">
                      <Input
                        type={showPassword ? "text" : "password"}
                        required
                        className="block w-full text-sm appearance-none rounded-lg border border-white/[0.08] bg-black/20 px-4 py-2 placeholder-white/40 shadow-sm focus:border-emerald-900/50 focus:outline-none focus:ring-1 focus:ring-emerald-700/50 text-white/90 backdrop-blur-xl"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="h-4 w-4 text-white/40 group-hover:text-emerald-950/90 transition-colors duration-300" />
                        ) : (
                          <EyeIcon className="h-4 w-4 text-white/40 group-hover:text-emerald-950/90 transition-colors duration-300" />
                        )}
                      </div>
                    </div>
                    {error && <p className="text-xs text-red-400/90">{error}</p>}
                    <p className="text-xs text-white/70 text-center">Request an exclusive password</p>
                    <div>
                      <Button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-lg border border-transparent bg-emerald-950/30 py-2 px-4 text-sm font-medium text-white/90 hover:bg-gray-400
                        hover:text-black focus:outline-none focus:ring-2 focus:ring-emerald-900/50 transition-all duration-300 backdrop-blur-xl shadow-md"
                      >
                        Run secret key
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              className="text-center text-xs text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="mb-2">Want to join our development team? Send your proposal to join the founding team!</p>

              <div className="mt-2 flex justify-center space-x-4">
                <Link
                  href="https://instagram.com/suitpax"
                  className="text-white/50 hover:text-emerald-700/90 transition-colors duration-300"
                >
                  <FaInstagram size={14} aria-label="Suitpax on Instagram" />
                </Link>
                <Link
                  href="https://x.com/suitpax"
                  className="text-white/50 hover:text-emerald-700/90 transition-colors duration-300"
                >
                  <FaXTwitter size={14} aria-label="Suitpax on X (Twitter)" />
                </Link>
                <Link
                  href="https://linkedin.com/company/suitpax"
                  className="text-white/50 hover:text-emerald-700/90 transition-colors duration-300"
                >
                  <FaLinkedinIcon size={14} aria-label="Suitpax on LinkedIn" />
                </Link>
                <Link
                  href="https://github.com/suitpax"
                  className="text-white/50 hover:text-emerald-700/90 transition-colors duration-300"
                >
                  <FaGithub size={14} aria-label="Suitpax on GitHub" />
                </Link>
                <Link
                  href="https://www.producthunt.com/products/suitpax-2"
                  className="text-white/50 hover:text-emerald-700/90 transition-colors duration-300"
                >
                  <FaProductHunt size={14} aria-label="Suitpax on Product Hunt" />
                </Link>
                <Link
                  href="https://www.g2.com/products/suitpax/reviews"
                  className="text-white/50 hover:text-emerald-700/90 transition-colors duration-300"
                >
                  <SiG2 size={14} aria-label="Suitpax on G2" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="w-full overflow-hidden mt-6"
            >
              <InfinitePartnersSlider />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

