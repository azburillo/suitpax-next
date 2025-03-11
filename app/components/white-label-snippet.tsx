"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { useState } from "react"

export const WhiteLabelSnippet = () => {
  const [copied, setCopied] = useState(false)

  const codeSnippet = `// Initialize Suitpax White Label SDK
import { SuitpaxSDK } from '@suitpax/white-label';

const config = {
  apiKey: 'your_api_key',
  brandName: 'Your Travel Company',
  theme: {
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#6366F1'
  }
};

// Create your custom travel platform
const travelPlatform = new SuitpaxSDK(config);

// Initialize core services
await travelPlatform.initialize({
  services: {
    flights: true,
    hotels: true,
    carRentals: true,
    activities: true
  },
  customization: {
    logo: '/your-logo.png',
    fonts: {
      primary: 'Inter',
      secondary: 'Roboto'
    },
    layout: 'modern'
  }
});

// Start accepting bookings
travelPlatform.listen('booking', (reservation) => {
  console.log('New booking:', reservation);
});`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="w-full lg:w-3/4 mx-auto">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-gray-900 tracking-tighter">Build your travel platform</CardTitle>
          <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-gray-600 hover:text-gray-900">
            <Copy className="w-4 h-4 mr-2" />
            {copied ? "Copied!" : "Copy code"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <pre className="text-sm font-mono text-gray-700 whitespace-pre-wrap break-words">{codeSnippet}</pre>
      </CardContent>
    </Card>
  )
}

