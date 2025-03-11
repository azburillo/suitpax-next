import { TravelDataStructure } from "./travel-data-structure"

export default function DataStructureDemo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Structured Travel Management</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our powerful data structure allows you to track and manage your entire travel ecosystem in one place.
          </p>
        </div>

        <TravelDataStructure />

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            SuitPax gives you complete visibility into your business travel with customizable objects that adapt to your
            company's unique structure.
          </p>
        </div>
      </div>
    </section>
  )
}

