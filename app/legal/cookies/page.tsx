import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

export const metadata = {
  title: "Suitpax - Cookie Policy",
  description: "Cookie Policy for Suitpax",
}

export default function Cookies() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Cookie Policy</h1>
          <Tabs defaultValue="/legal/cookies" className="w-full max-w-md">
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-10">
            <h2 className="text-2xl font-semibold text-black mb-6">About Our Cookies</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 font-medium">
              Suitpax uses cookies to secure and monitor its platform in order to provide our customers with the best
              possible user experience. This document outlines our use of cookies and your rights relating to them.
            </p>
            <p className="text-gray-700 text-sm mb-0">
              By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-black mb-4">What are Cookies?</h3>
              <p className="text-gray-700 text-sm">
                A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your
                computer if you agree. Cookies contain information that is transferred to your computer's hard drive.
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-black text-sm mb-2">Key Points:</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Cookies are small text files</li>
                  <li>• They help websites remember your preferences</li>
                  <li>• They improve your browsing experience</li>
                  <li>• They can be managed in your browser settings</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-black mb-4">How We Use Cookies</h3>
              <p className="text-gray-700 text-sm mb-4">
                We use cookies to distinguish you from other users and collect information, which may include Personal
                Data. This helps us to provide you with a good experience when you browse our website and use our
                product, as well as to improve our sites.
              </p>
              <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                <span className="text-xs text-blue-800 font-medium">Learn more about managing cookies</span>
                <Button variant="ghost" size="sm" className="text-blue-700 hover:bg-blue-100 p-1 h-auto">
                  Settings
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-10">
            <h3 className="text-xl font-semibold text-black mb-6">Types of Cookies We Use</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h4 className="font-semibold text-black mb-3">1. Strictly Necessary Cookies</h4>
                <p className="text-sm text-gray-700 mb-3">
                  These cookies are essential for you to browse the website and use its features, such as accessing
                  secure areas of the site. Without these cookies, services you have asked for cannot be provided.
                </p>
                <div className="flex items-center">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Always Active
                  </span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-6">
                <h4 className="font-semibold text-black mb-3">2. Analytical/Performance Cookies</h4>
                <p className="text-sm text-gray-700 mb-3">
                  These cookies allow us to recognize and count the number of visitors and to see how visitors move
                  around our website when they are using it. This helps us to improve the way our website works, for
                  example, by ensuring that users are finding what they are looking for easily.
                </p>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Customizable
                  </span>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-6">
                <h4 className="font-semibold text-black mb-3">3. Functionality Cookies</h4>
                <p className="text-sm text-gray-700 mb-3">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be
                  set by us or by third-party providers whose services we have added to our pages.
                </p>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Customizable
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-3">4. Targeting Cookies</h4>
                <p className="text-sm text-gray-700 mb-3">
                  These cookies record your visit to our website, the pages you have visited and the links you have
                  followed. We will use this information to make our website and the advertising displayed on it more
                  relevant to your interests.
                </p>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Customizable
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-10">
            <h3 className="text-xl font-semibold text-black mb-6">Managing Your Cookie Preferences</h3>
            <p className="text-sm text-gray-700 mb-6">
              Most web browsers allow some control of most cookies through the browser settings. To find out more about
              cookies, including how to see what cookies have been set, visit{" "}
              <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline">
                www.allaboutcookies.org
              </a>
              .
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-2 text-sm">
                  Find out how to manage cookies on popular browsers:
                </h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>
                    •{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Microsoft Edge
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Safari
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-black mb-2 text-sm">
                  To opt out of being tracked by Google Analytics:
                </h4>
                <p className="text-xs text-gray-700">
                  You can download and install the{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  .
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-700">
              Please note that if you choose to refuse cookies, you may not be able to use some portions of our Service.
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-blue-50 rounded-xl shadow-sm border border-blue-100 p-8">
            <h3 className="text-xl font-semibold text-black mb-4">Cookie Preferences</h3>
            <p className="text-gray-700 text-base mb-4">
              You can customize your cookie preferences at any time. Your choices will be saved for this browser and
              device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Manage Cookie Settings</Button>
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Accept All Cookies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

