"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline"
import { useStore } from "@/app/store/useStore"
import { BarsButton } from "@/app/components/ui/bars-button"
import { useTheme } from "next-themes"
import { Navigation } from "@/app/components/marketing/navigation"

interface HeaderProps {
  onMenuToggle: () => void
}

export function Header({ onMenuToggle }: HeaderProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const { user, logout } = useStore()

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10"
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="container mx-auto flex h-14 items-center px-4 sm:px-6 lg:px-8"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="font-bold text-white flex items-center">
          <Image src="/suitpax-cloud-logo.svg" alt="Suitpax" width={170} height={35} priority className="h-7 w-auto" />
        </Link>
        <div className="hidden lg:flex ml-8">
          <Navigation />
        </div>
        <div className="flex items-center justify-end flex-1 ml-4 w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <Button
              className="bg-white/10 text-white hover:bg-white/20 rounded-md px-2 py-1.5 text-sm sm:text-sm md:text-base h-7 sm:h-8 md:h-10 lg:h-7 backdrop-blur-lg border border-white/20"
              asChild
            >
              {user.isLoggedIn ? (
                <span onClick={logout} className="flex items-center">
                  <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                  {user.name}
                </span>
              ) : (
                <Link href="/auth/sign-up" className="flex items-center">
                  Get started
                </Link>
              )}
            </Button>
          </div>
        </div>
        <BarsButton
          onClick={onMenuToggle}
          className="ml-4 lg:hidden bg-white/10 text-white hover:bg-white/20 backdrop-blur-lg border border-white/20"
        />
      </motion.div>
    </motion.header>
  )
}

