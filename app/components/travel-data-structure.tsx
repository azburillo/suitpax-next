"use client"
import { Card } from "@/app/components/ui/card"
import { Briefcase, Building2, MapPin, User, Users } from "lucide-react"

export function TravelDataStructure() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <div className="rounded-3xl bg-white shadow-md border p-8 relative overflow-hidden">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            A travel management system for any business.{" "}
            <span className="text-gray-600 font-normal">
              Easily track trips, expenses and travel data to match your corporate structure.
            </span>
          </h2>
        </div>

        {/* Dotted background pattern */}
        <div className="absolute inset-0 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#F0F0F0" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* Data structure visualization */}
        <div className="relative z-10">
          {/* Company card at the top */}
          <div className="flex justify-center mb-8">
            <Card className="w-64 px-4 py-3 shadow-sm border flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-md">
                <Building2 className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Corporation</p>
                <p className="text-sm text-gray-500">2,150 Records</p>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Standard</span>
            </Card>
          </div>

          {/* Connecting line */}
          <div className="h-10 w-px bg-gray-200 mx-auto mb-2"></div>

          {/* Second row with two cards */}
          <div className="flex justify-center gap-32 mb-8">
            <div className="flex flex-col items-center">
              <Card className="w-64 px-4 py-3 shadow-sm border flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-md">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Team</p>
                  <p className="text-sm text-gray-500">1,324 Records</p>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Custom</span>
              </Card>
              <div className="h-10 w-px bg-gray-200 mt-2"></div>
            </div>

            <div className="flex flex-col items-center">
              <Card className="w-64 px-4 py-3 shadow-sm border flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-md">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Trip</p>
                  <p className="text-sm text-gray-500">953 Records</p>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Custom</span>
              </Card>
              <div className="h-10 w-px bg-gray-200 mt-2"></div>
            </div>
          </div>

          {/* Third row with single card */}
          <div className="flex justify-start ml-[25%] mb-8">
            <div className="flex flex-col items-center">
              <Card className="w-64 px-4 py-3 shadow-sm border flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-md">
                  <User className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Traveler</p>
                  <p className="text-sm text-gray-500">864 Records</p>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Custom</span>
              </Card>
              <div className="h-10 w-px bg-gray-200 mt-2"></div>
            </div>
          </div>

          {/* Fourth row with single card */}
          <div className="flex justify-center mb-4">
            <Card className="w-64 px-4 py-3 shadow-sm border flex items-center gap-3">
              <div className="bg-cyan-100 p-2 rounded-md">
                <Users className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Passenger</p>
                <p className="text-sm text-gray-500">612 Records</p>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Standard</span>
            </Card>
          </div>

          {/* Connecting lines - horizontal */}
          <div className="absolute top-[43%] left-[32%] w-[36%] h-px bg-gray-200"></div>
          <div className="absolute top-[60%] left-[32%] w-[18%] h-px bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}

