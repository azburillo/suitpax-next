"use client"

import { useEffect } from "react"

export function useIntercom(appId: string) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Intercom) {
      window.Intercom("boot", { app_id: appId })
    }

    return () => {
      if (typeof window !== "undefined" && window.Intercom) {
        window.Intercom("shutdown")
      }
    }
  }, [appId])

  const update = (data: object) => {
    if (typeof window !== "undefined" && window.Intercom) {
      window.Intercom("update", data)
    }
  }

  return { update }
}

