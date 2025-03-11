"use client"

import Link from "next/link"

export const DevelopmentBadge = () => {
  return (
    <Link
      href="/development"
      className="px-2 py-1 text-xs font-medium rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-lime-200 hover:bg-white/20 transition-colors"
    >
      Development
    </Link>
  )
}

