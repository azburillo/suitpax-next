import type { City } from "@/app/data/mock-data"

export const filterDestinations = (destinations: City[], searchTerm: string): City[] => {
  if (!searchTerm) {
    return destinations
  }

  const lowerCaseSearchTerm = searchTerm.toLowerCase()
  return destinations.filter((destination) => {
    return (
      destination.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      destination.country.toLowerCase().includes(lowerCaseSearchTerm)
    )
  })
}

export const paginateDestinations = (
  destinations: City[],
  currentPage: number,
  destinationsPerPage: number,
): City[] => {
  const indexOfLastDestination = currentPage * destinationsPerPage
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage
  return destinations.slice(indexOfFirstDestination, indexOfLastDestination)
}

