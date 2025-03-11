import { useState, useCallback } from "react"

export function SuitpaxAIVoice() {
  const [recordings, setRecordings] = useState<{ duration: number; timestamp: Date }[]>([])

  const handleStop = useCallback((duration: number) => {
    setRecordings((prev) => [...prev.slice(-4), { duration, timestamp: new Date() }])
  }, [])

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {/* Replaced AIVoiceInput with placeholder */}
        <div>Voice recording placeholder</div>
      </div>
    </div>
  )
}

