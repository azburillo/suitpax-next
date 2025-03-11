"use client"

import type React from "react"
import { useEffect } from "react"
import Intercom from "@intercom/messenger-js-sdk"

interface User {
  id: string
  name: string
  email: string
  createdAt: number
}

interface IntercomProviderProps {
  children: React.ReactNode
  user?: User
}

export function IntercomProvider({ children, user }: IntercomProviderProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Intercom({
        app_id: "t7e59vcn",
        ...(user && {
          user_id: user.id,
          name: user.name,
          email: user.email,
          created_at: user.createdAt,
        }),
      })
    }

    return () => {
      if (typeof window !== "undefined" && (window as any).Intercom) {
        ;(window as any).Intercom("shutdown")
      }
    }
  }, [user])

  return <>{children}</>
}

