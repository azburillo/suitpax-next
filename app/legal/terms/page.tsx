import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

export const metadata = {
  title: "Suitpax - Terms of Service",
  description: "Terms of Service for Suitpax",
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2 border-gray-200 text-gray-700 hover:bg-gray-50">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Terms of Service</h1>
          <Tabs defaultValue="/legal/terms" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-5 bg-gray-100">
              <TabsTrigger value="/legal/terms" className="data-[state=active]:bg-white" href="/legal/terms">
                Terms
              </TabsTrigger>
              <TabsTrigger value="/legal/privacy" className="data-[state=active]:bg-white" href="/legal/privacy">
                Privacy
              </TabsTrigger>
              <TabsTrigger value="/legal/cookies" className="data-[state=active]:bg-white" href="/legal/cookies">
                Cookies
              </TabsTrigger>
              <TabsTrigger value="/legal/compliance" className="data-[state=active]:bg-white" href="/legal/compliance">
                Compliance
              </TabsTrigger>
              <TabsTrigger value="/legal/ai-policy" className="data-[state=active]:bg-white" href="/legal/ai-policy">
                AI Policy
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-12 text-center font-medium">
          Effective Date: February 4, 2025
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              title: "1. Acceptance of Terms",
              content:
                'By accessing or using the Suitpax websites, mobile applications, and other online services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Services.',
            },
            {
              title: "2. Description of Services",
              content:
                "Suitpax provides an AI-powered travel management platform that allows users to search, book, and manage travel arrangements, including flights, accommodations, transportation, and other travel-related services.",
            },
            {
              title: "3. User Accounts",
              content:
                "To access certain features of the Services, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating your account and to keep your information updated.",
            },
            {
              title: "4. Use of Services",
              content:
                "You agree to use the Services only for lawful purposes and in accordance with these Terms. You may not use the Services in any way that could damage, disable, overburden, or impair the Services or interfere with any other party's use and enjoyment of the Services.",
            },
            {
              title: "5. Bookings and Payments",
              content:
                "When you make a booking through the Services, you agree to the terms and conditions of the relevant third-party provider, such as airlines, hotels, and transportation companies. You are responsible for all payments and fees associated with your bookings. Suitpax facilitates the booking process but is not responsible for the provision of the travel services themselves.",
            },
            {
              title: "6. Intellectual Property",
              content:
                "The Services and their content, including but not limited to text, graphics, logos, images, and software, are the property of Suitpax and are protected by copyright and other intellectual property laws. You may not use the Services or their content for any commercial purpose without the express written consent of Suitpax.",
            },
            {
              title: "7. Disclaimer of Warranties",
              content:
                'The Services are provided "as is" without any warranties, express or implied. Suitpax does not guarantee the accuracy, completeness, or reliability of any information provided through the Services.',
            },
            {
              title: "8. Limitation of Liability",
              content:
                "Suitpax shall not be liable for any damages arising from your use of the Services, including but not limited to direct, indirect, incidental, consequential, or punitive damages.",
            },
            {
              title: "9. Indemnification",
              content:
                "You agree to indemnify and hold Suitpax harmless from any claims, damages, or expenses arising from your use of the Services or your violation of these Terms.",
            },
            {
              title: "10. Governing Law",
              content: "These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction].",
            },
            {
              title: "11. Changes to Terms",
              content:
                "Suitpax reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting to the Services. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.",
            },
            {
              title: "12. Contact Us",
              content: "If you have questions about these Terms, please contact us at legal@suitpax.com.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 transition-all hover:shadow-md"
            >
              <h2 className="mb-4 text-xl font-semibold text-black">{section.title}</h2>
              <p className="text-gray-700 text-sm md:text-base">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-blue-50 rounded-xl shadow-sm border border-blue-100 p-8">
          <h3 className="text-xl font-semibold text-black mb-4">Need Help?</h3>
          <p className="text-gray-700 text-base mb-4">
            If you have any questions about our Terms of Service or need assistance, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Contact Support</Button>
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              View FAQs
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

