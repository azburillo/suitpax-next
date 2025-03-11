import { faker } from "@faker-js/faker"

// Mock data for the booking engine

export interface City {
  id: number
  name: string
  country: string
}

export interface Airport {
  id: number
  name: string
  code: string
  cityId: number
}

export interface Airline {
  id: number
  name: string
  code: string
}

export interface Flight {
  id: number
  airline: Airline
  flightNumber: string
  fromAirport: Airport
  toAirport: Airport
  departureDate: string
  price: number
  seatsAvailable: number
  gate: string
  terminal: string
}

export interface Hotel {
  id: number
  name: string
  cityId: number
  rating: number
  price: number
}

export interface VIPLounge {
  id: number
  name: string
  airportId: number
  features: string[]
}

export interface TravelPackage {
  id: number
  flight: Flight
  hotel: Hotel
  lounge: VIPLounge
  totalPrice: number
  savings: number
}

// Sample data
export const cities: City[] = [
  { id: 1, name: "New York", country: "USA" },
  { id: 2, name: "London", country: "UK" },
  { id: 3, name: "Tokyo", country: "Japan" },
  { id: 4, name: "Paris", country: "France" },
  { id: 5, name: "Sydney", country: "Australia" },
]

export const airports: Airport[] = [
  { id: 1, name: "John F. Kennedy International Airport", code: "JFK", cityId: 1 },
  { id: 2, name: "Heathrow Airport", code: "LHR", cityId: 2 },
  { id: 3, name: "Narita International Airport", code: "NRT", cityId: 3 },
  { id: 4, name: "Charles de Gaulle Airport", code: "CDG", cityId: 4 },
  { id: 5, name: "Sydney Airport", code: "SYD", cityId: 5 },
]

export const airlines: Airline[] = [
  { id: 1, name: "American Airlines", code: "AA" },
  { id: 2, name: "British Airways", code: "BA" },
  { id: 3, name: "Japan Airlines", code: "JL" },
  { id: 4, name: "Air France", code: "AF" },
  { id: 5, name: "Qantas", code: "QF" },
]

export const flights: Flight[] = [
  {
    id: 1,
    airline: airlines[0],
    flightNumber: "AA100",
    fromAirport: airports[0],
    toAirport: airports[1],
    departureDate: "2025-06-15T10:00:00Z",
    price: 500,
    seatsAvailable: 150,
    gate: "A1",
    terminal: "1",
  },
  {
    id: 2,
    airline: airlines[1],
    flightNumber: "BA200",
    fromAirport: airports[1],
    toAirport: airports[2],
    departureDate: "2025-06-16T14:30:00Z",
    price: 750,
    seatsAvailable: 100,
    gate: "B2",
    terminal: "2",
  },
  {
    id: 3,
    airline: airlines[2],
    flightNumber: "JL300",
    fromAirport: airports[2],
    toAirport: airports[3],
    departureDate: "2025-06-17T09:15:00Z",
    price: 600,
    seatsAvailable: 200,
    gate: "C3",
    terminal: "3",
  },
  {
    id: 4,
    airline: airlines[3],
    flightNumber: "AF400",
    fromAirport: airports[3],
    toAirport: airports[4],
    departureDate: "2025-06-18T16:45:00Z",
    price: 800,
    seatsAvailable: 80,
    gate: "D4",
    terminal: "4",
  },
  {
    id: 5,
    airline: airlines[4],
    flightNumber: "QF500",
    fromAirport: airports[4],
    toAirport: airports[0],
    departureDate: "2025-06-19T22:00:00Z",
    price: 950,
    seatsAvailable: 120,
    gate: "E5",
    terminal: "5",
  },
]

export const hotels: Hotel[] = [
  { id: 1, name: "Luxury Plaza Hotel", cityId: 1, rating: 5, price: 300 },
  { id: 2, name: "Cozy Inn London", cityId: 2, rating: 4, price: 200 },
  { id: 3, name: "Tokyo Skyline Hotel", cityId: 3, rating: 5, price: 350 },
  { id: 4, name: "Parisian Elegance Resort", cityId: 4, rating: 4, price: 250 },
  { id: 5, name: "Sydney Harbor View Hotel", cityId: 5, rating: 4, price: 280 },
]

export const vipLounges: VIPLounge[] = [
  {
    id: 1,
    name: "Skyline Lounge",
    airportId: 1,
    features: ["Free Wi-Fi", "Complimentary drinks", "Shower facilities"],
  },
  {
    id: 2,
    name: "Royal Retreat",
    airportId: 2,
    features: ["Gourmet meals", "Spa services", "Private meeting rooms"],
  },
  {
    id: 3,
    name: "Zen Garden Lounge",
    airportId: 3,
    features: ["Japanese garden", "Sushi bar", "Massage chairs"],
  },
  {
    id: 4,
    name: "Parisian Parlor",
    airportId: 4,
    features: ["French cuisine", "Wine tasting", "Art exhibitions"],
  },
  {
    id: 5,
    name: "Outback Oasis",
    airportId: 5,
    features: ["Aussie BBQ", "Virtual reality experiences", "Sleeping pods"],
  },
]

export const travelPackages: TravelPackage[] = [
  {
    id: 1,
    flight: flights[0],
    hotel: hotels[1],
    lounge: vipLounges[0],
    totalPrice: 950,
    savings: 100,
  },
  {
    id: 2,
    flight: flights[1],
    hotel: hotels[2],
    lounge: vipLounges[1],
    totalPrice: 1200,
    savings: 150,
  },
  {
    id: 3,
    flight: flights[2],
    hotel: hotels[3],
    lounge: vipLounges[2],
    totalPrice: 1100,
    savings: 120,
  },
  {
    id: 4,
    flight: flights[3],
    hotel: hotels[4],
    lounge: vipLounges[3],
    totalPrice: 1300,
    savings: 180,
  },
  {
    id: 5,
    flight: flights[4],
    hotel: hotels[0],
    lounge: vipLounges[4],
    totalPrice: 1500,
    savings: 200,
  },
]

// Define the structure of a destination
export interface Destination {
  id: number
  name: string
  country: string
  image: string
  description: string
  highlights: string[]
  rating: number
  tags: string[]
  bestTimeToVisit: string
  localDish: string
  continent?: "Europe" | "Asia" | "North America" // Add continent property
}

// Helper function to generate a random date within a range
const getRandomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const generateFlights = (numFlights: number): Flight[] => {
  const flights: Flight[] = []
  for (let i = 0; i < numFlights; i++) {
    const fromAirport = faker.helpers.arrayElement(airports)
    const toAirport = faker.helpers.arrayElement(airports.filter((airport) => airport.cityId !== fromAirport.cityId))
    const departureDate = getRandomDate(new Date(), new Date(2026, 0, 1)).toISOString()
    const price = Number.parseFloat(faker.commerce.price(200, 1500))
    const seatsAvailable = faker.number.int({ min: 50, max: 250 })
    const gate = faker.helpers.arrayElement(["A", "B", "C", "D", "E"]) + faker.number.int({ min: 1, max: 20 })
    const terminal = faker.number.int({ min: 1, max: 5 }).toString()

    flights.push({
      id: faker.database.mongodbObjectId(),
      airline: faker.helpers.arrayElement(airlines),
      flightNumber: faker.airline.flightNumber(),
      fromAirport,
      toAirport,
      departureDate,
      price,
      seatsAvailable,
      gate,
      terminal,
    })
  }
  return flights
}

const generateHotels = (numHotels: number): Hotel[] => {
  const hotels: Hotel[] = []
  for (let i = 0; i < numHotels; i++) {
    const city = faker.helpers.arrayElement(cities)
    hotels.push({
      id: faker.database.mongodbObjectId(),
      name: faker.company.name(),
      cityId: city.id,
      rating: faker.number.float({ min: 2, max: 5, precision: 0.1 }),
      price: Number.parseFloat(faker.commerce.price(50, 500)),
    })
  }
  return hotels
}

const generateAirlines = (numAirlines: number): Airline[] => {
  const airlines: Airline[] = []
  for (let i = 0; i < numAirlines; i++) {
    airlines.push({
      id: faker.database.mongodbObjectId(),
      name: faker.company.name(),
      code: faker.airline.code(),
    })
  }
  return airlines
}

const generateVipLounges = (numLounges: number): VIPLounge[] => {
  const lounges: VIPLounge[] = []
  for (let i = 0; i < numLounges; i++) {
    const airport = faker.helpers.arrayElement(airports)
    lounges.push({
      id: faker.database.mongodbObjectId(),
      name: faker.company.name(),
      airportId: airport.id,
      features: faker.helpers.arrayElements(
        [
          "Free Wi-Fi",
          "Complimentary drinks",
          "Shower facilities",
          "Gourmet meals",
          "Spa services",
          "Private meeting rooms",
          "Japanese garden",
          "Sushi bar",
          "Massage chairs",
          "French cuisine",
          "Wine tasting",
          "Art exhibitions",
          "Aussie BBQ",
          "Virtual reality experiences",
          "Sleeping pods",
        ],
        { min: 2, max: 5 },
      ),
    })
  }
  return lounges
}

const generateTravelPackages = (numPackages: number): TravelPackage[] => {
  const packages: TravelPackage[] = []
  for (let i = 0; i < numPackages; i++) {
    const flight = faker.helpers.arrayElement(flights)
    const hotel = faker.helpers.arrayElement(hotels.filter((hotel) => hotel.cityId === flight.toAirport.cityId))
    const lounge = faker.helpers.arrayElement(vipLounges.filter((lounge) => lounge.airportId === flight.fromAirport.id))
    const totalPrice = flight.price + hotel.price + faker.number.int({ min: 50, max: 200 })
    const savings = faker.number.int({ min: 50, max: 200 })
    packages.push({
      id: faker.database.mongodbObjectId(),
      flight,
      hotel,
      lounge,
      totalPrice,
      savings,
    })
  }
  return packages
}

export const airlines = generateAirlines(10)
export const flights = generateFlights(20)
export const hotels = generateHotels(15)
export const vipLounges = generateVipLounges(10)
export const travelPackages = generateTravelPackages(10)

// Data for European destinations, categorized by country
export const europeanDestinations: { [key: string]: Destination[] } = {
  /* ... */
} // Add data from user's attachment

// Data for Asian destinations, categorized by country
export const asianDestinations: { [key: string]: Destination[] } = {
  /* ... */
} // Add data from user's attachment

// Data for US destinations, categorized by region
export const usDestinations: { [key: string]: Destination[] } = {
  /* ... */
} // Add data from user's attachment

