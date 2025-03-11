import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

export const metadata = {
  title: "Suitpax - AI Policy",
  description: "Artificial Intelligence Policy for Suitpax",
}

export default function AIPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">AI Policy</h1>
          <Tabs defaultValue="/legal/ai-policy" className="w-full max-w-md">
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
            <h2 className="text-2xl font-semibold text-black mb-6">Introduction to Suitpax AI</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 font-medium">
              At Suitpax, we leverage artificial intelligence (AI) to enhance your travel experience, streamline booking
              processes, and provide personalized recommendations. This policy outlines how we develop, deploy, and use
              AI technologies within our platform, and the principles we follow to ensure responsible and ethical AI
              use.
            </p>
            <p className="text-gray-700 text-base mb-6">
              Our AI systems are designed to assist, not replace, human decision-making. We believe in augmenting human
              capabilities with AI to deliver superior travel management solutions while maintaining transparency and
              user control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Our AI Principles</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold">
                    1
                  </span>
                  <span className="text-gray-700 text-sm">
                    <span className="font-semibold">Human-Centered Design:</span> Our AI is designed to enhance human
                    capabilities, not replace them.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold">
                    2
                  </span>
                  <span className="text-gray-700 text-sm">
                    <span className="font-semibold">Transparency:</span> We are clear about when and how AI is being
                    used in our services.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold">
                    3
                  </span>
                  <span className="text-gray-700 text-sm">
                    <span className="font-semibold">Privacy:</span> We respect user privacy in all AI applications and
                    data processing.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold">
                    4
                  </span>
                  <span className="text-gray-700 text-sm">
                    <span className="font-semibold">Fairness:</span> We strive to identify and mitigate bias in our AI
                    systems.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-black mb-4">AI Applications at Suitpax</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold">
                    ✓
                  </span>
                  <span className="text-gray-700 text-sm">
                    <span className="font-semibold">Personalized Travel Recommendations</span> based on your preferences
                    and past bookings
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold">
                    ✓
                  </span>
                  <span className="text-gray-700 text-sm">
                    <span className="font-semibold">Intelligent Price Prediction</span> to help you book at the optimal
                    time
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold">
                    ✓
                  </span>
                  <span className="text-gray-700 text-sm">
                    <span className="font-semibold">Natural Language Processing</span> for our travel assistant chatbot
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold">
                    ✓
                  </span>
                  <span className="text-gray-700 text-sm">
                    <span className="font-semibold">Automated Expense Categorization</span> for business travel
                    management
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-black mb-4">Data Usage in AI</h3>
              <p className="text-gray-700 text-base mb-4">
                Our AI systems are trained on various data sources, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
                <li>Anonymized booking and search data</li>
                <li>Public travel information and schedules</li>
                <li>User preferences (with explicit consent)</li>
                <li>Industry trends and pricing patterns</li>
              </ul>
              <p className="text-gray-700 text-base">
                We implement strict data governance practices to ensure that personal information is protected. All data
                used for AI training is anonymized and aggregated where possible, and we do not share your personal data
                with third parties without your explicit consent.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-black mb-4">User Control and Choices</h3>
              <p className="text-gray-700 text-base mb-4">
                We believe in giving users control over their AI experience. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
                <li>Opt out of personalized AI recommendations in your account settings</li>
                <li>Request explanation of AI-driven decisions that affect your experience</li>
                <li>Provide feedback on AI recommendations to improve their relevance</li>
                <li>Access and delete your data used for AI personalization</li>
              </ul>
              <p className="text-gray-700 text-base">
                To manage your AI preferences, visit the "Privacy & AI Settings" section in your Suitpax account
                dashboard.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-black mb-4">AI Development and Testing</h3>
              <p className="text-gray-700 text-base mb-6">
                Our AI development process follows rigorous standards to ensure quality, fairness, and reliability:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Development</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Diverse development teams</li>
                    <li>• Ethical guidelines for all AI projects</li>
                    <li>• Regular bias assessments</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Testing</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Comprehensive testing protocols</li>
                    <li>• User feedback incorporation</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 text-base">
                We continuously monitor our AI systems for accuracy, fairness, and potential unintended consequences,
                making improvements based on real-world performance and user feedback.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-black mb-4">Compliance and Governance</h3>
              <p className="text-gray-700 text-base mb-4">
                Our AI practices comply with relevant regulations and industry standards, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
                <li>GDPR and other applicable privacy regulations</li>
                <li>Industry-specific AI ethics guidelines</li>
                <li>Internal AI governance framework and review processes</li>
              </ul>
              <p className="text-gray-700 text-base">
                We have established an AI Ethics Committee that reviews our AI applications and provides guidance on
                responsible AI development and deployment.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-black mb-4">Future of AI at Suitpax</h3>
              <p className="text-gray-700 text-base mb-4">As AI technology evolves, we are committed to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
                <li>Continuously improving our AI capabilities to better serve your travel needs</li>
                <li>Maintaining transparency about new AI features and applications</li>
                <li>Adapting to emerging best practices and regulations in AI ethics</li>
                <li>Engaging with the broader AI ethics community to advance responsible AI use</li>
              </ul>
              <p className="text-gray-700 text-base">
                We believe that AI has tremendous potential to transform travel management, and we are committed to
                harnessing this potential responsibly and ethically.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl shadow-sm border border-blue-100 p-8">
              <h3 className="text-xl font-semibold text-black mb-4">Contact Us About AI</h3>
              <p className="text-gray-700 text-base mb-4">
                If you have questions, concerns, or feedback about our AI practices, please contact us:
              </p>
              <ul className="text-gray-700 text-base space-y-2">
                <li>
                  <span className="font-semibold">Email:</span> ai-ethics@suitpax.com
                </li>
                <li>
                  <span className="font-semibold">Form:</span>{" "}
                  <Link href="/contact" className="text-blue-600 hover:underline">
                    Contact Form
                  </Link>
                </li>
                <li>
                  <span className="font-semibold">Mail:</span> Suitpax AI Ethics Office, 123 Innovation Drive, San
                  Francisco, CA 94105
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>This AI Policy was last updated on February 4, 2025.</p>
            <p className="mt-2">
              Suitpax is committed to responsible AI use and will update this policy as our AI capabilities evolve.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

