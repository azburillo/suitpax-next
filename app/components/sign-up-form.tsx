"use client"

import { useState } from "react"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa6"
import Link from "next/link"
import type React from "react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { SparklesCore } from "@/app/components/ui/sparkles"

interface SignUpFormProps {
  onSignedUp: () => void
}

export function SignUpForm({ onSignedUp }: SignUpFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.")
      return
    }
    console.log("Registration data:", formData)
    onSignedUp()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-[12px] p-4">
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#fff"
        />
      </div>
      <div className="w-full max-w-md space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden relative border border-white/[0.08]"
          style={{
            background: "linear-gradient(145deg, rgba(0, 32, 0, 0.9), rgba(0, 16, 0, 0.9))",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.08] to-transparent pointer-events-none" />
          <div className="p-8 space-y-6 relative z-10">
            <motion.div
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Image
                src="https://cdn.brandfetch.io/idXcRAzuCF/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                alt="Suitpax"
                width={150}
                height={50}
                className="drop-shadow-lg"
                priority
              />
              <h2 className="text-4xl font-bold text-white tracking-tight text-center">Create your account</h2>
            </motion.div>

            <Button
              variant="secondary"
              className="w-full py-6 text-lg font-medium bg-white/10 hover:bg-white/15 text-white"
              onClick={() => console.log("Guest signup")}
            >
              Continue as Guest
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-white/60 bg-[rgba(0,16,0,0.9)]">or</span>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-1">Full name</label>
                <Input
                  type="text"
                  name="fullName"
                  required
                  className="block w-full rounded-lg border border-white/[0.08] bg-white/5 px-4 py-3 text-white placeholder-white/40 shadow-sm focus:border-emerald-500/50 focus:ring-emerald-500/50 text-lg"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-1">Email address</label>
                <Input
                  type="email"
                  name="email"
                  required
                  className="block w-full rounded-lg border border-white/[0.08] bg-white/5 px-4 py-3 text-white placeholder-white/40 shadow-sm focus:border-emerald-500/50 focus:ring-emerald-500/50 text-lg"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-white/60 mb-1">Password</label>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="block w-full rounded-lg border border-white/[0.08] bg-white/5 px-4 py-3 text-white placeholder-white/40 shadow-sm focus:border-emerald-500/50 focus:ring-emerald-500/50 text-lg"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-[34px] text-white/40 hover:text-white/60"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-white/60 mb-1">Confirm password</label>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  required
                  className="block w-full rounded-lg border border-white/[0.08] bg-white/5 px-4 py-3 text-white placeholder-white/40 shadow-sm focus:border-emerald-500/50 focus:ring-emerald-500/50 text-lg"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-[34px] text-white/40 hover:text-white/60"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
              {error && <p className="text-sm text-red-400/90">{error}</p>}
              <Button
                type="submit"
                className="w-full py-6 text-lg font-medium bg-emerald-600/80 hover:bg-emerald-600 text-white"
              >
                Create account
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-white/60 bg-[rgba(0,16,0,0.9)]">or</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full py-6 text-lg font-medium border-white/10 bg-white/5 hover:bg-white/10 text-white"
              onClick={() => console.log("GitHub signup")}
            >
              <FaGithub className="mr-2 h-5 w-5" />
              Sign up with GitHub
            </Button>

            <div className="text-center text-white/60">
              <p>
                Already have an account?{" "}
                <Link href="/sign-in" className="text-emerald-400 hover:text-emerald-300">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

