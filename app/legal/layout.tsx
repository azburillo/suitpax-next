import type { PropsWithChildren } from "react"

export default function LegalLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">{children}</div>
    </div>
  )
}

