import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

export const metadata = {
  title: "Suitpax - Privacy Policy",
  description: "Privacy Policy for Suitpax",
}

export default function Privacy() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Privacy Policy</h1>
          <Tabs defaultValue="/legal/privacy" className="w-full max-w-md">
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
              <TabsTrigger
                value="/legal/modern-slavery"
                className="data-[state=active]:bg-white"
                href="/legal/modern-slavery"
              >
                Slavery
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-12 text-center font-medium">
          Effective Date: February 4, 2025
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-10">
            <h2 className="text-2xl font-semibold text-black mb-6">Your Privacy Matters</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 font-medium">
              At Suitpax, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our
              services.
            </p>
            <p className="text-gray-700 text-sm mb-0">
              We encourage you to read this policy carefully to understand our practices regarding your personal data.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {[
              {
                title: "1. Introduction",
                content:
                  'Suitpax ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information about you when you use our websites, mobile applications, and other online services (collectively, the "Services").',
              },
              {
                title: "2. Information We Collect",
                content:
                  "We collect several types of information from and about users of our Services, including personal information, non-personal information, and usage details.",
                details: [
                  "Personal Information: Name, email address, phone number, billing information, and travel preferences",
                  "Usage Data: How you interact with our platform, search history, and booking patterns",
                  "Device Information: IP address, browser type, device type, and operating system",
                  "Location Data: With your permission, we may collect precise location data to provide location-based services",
                ],
              },
              {
                title: "3. How We Use Your Information",
                content:
                  "We use the information we collect to provide and improve our Services, communicate with you, and for various other purposes as described in this policy.",
                details: [
                  "To process and manage your travel bookings",
                  "To personalize your experience and provide tailored recommendations",
                  "To communicate with you about your account, bookings, and our services",
                  "To improve our platform and develop new features",
                ],
              },
              {
                title: "4. Disclosure of Your Information",
                content:
                  "We may disclose your information to third parties in certain circumstances, such as to our service providers, for legal reasons, or with your consent.",
              },
              {
                title: "5. Data Security",
                content:
                  "We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.",
              },
              {
                title: "6. Changes to Our Privacy Policy",
                content:
                  "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
              },
              {
                title: "7. Contact Information",
                content:
                  "To ask questions or comment about this privacy policy and our privacy practices, contact us at privacy@suitpax.com.",
              },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 transition-all hover:shadow-md"
              >
                <h2 className="mb-4 text-xl font-semibold text-black">{section.title}</h2>
                <p className="text-gray-700 text-sm md:text-base mb-4">{section.content}</p>
                {section.details && (
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                    {section.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Your Privacy Rights</h3>
              <p className="text-gray-700 text-sm mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Right to access your personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Right to correct inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Right to request deletion of your data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Right to data portability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Right to object to certain processing</span>
                </li>
              </ul>
              <p className="text-sm text-gray-700 mt-4">
                To exercise these rights, please contact our Privacy Team at privacy@suitpax.com.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">International Data Transfers</h3>
              <p className="text-gray-700 text-sm mb-4">
                As a global travel platform, we may transfer your information to countries other than your own:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>We implement appropriate safeguards for international transfers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>We comply with applicable data transfer regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>We use standard contractual clauses where necessary</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>We ensure adequate protection for your data globally</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-blue-50 rounded-xl shadow-sm border border-blue-100 p-8">
            <h3 className="text-xl font-semibold text-black mb-4">Privacy Preferences</h3>
            <p className="text-gray-700 text-base mb-4">
              You can manage your privacy preferences and control how we use your data through your account settings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Manage Privacy Settings</Button>
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Contact Privacy Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

