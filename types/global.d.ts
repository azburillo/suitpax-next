export interface TeamMember {
  id: number
  name: string
  role: string
  country: string
  image: string
  stats: {
    intelligence: number
    speed: number
    accuracy: number
    learning: number
  }
  specialty: string
  achievements: string[]
}

export interface Testimonial {
  id: number
  company: string
  logo: string
  quote: string
  author: string
  position: string
  stats: string
}

export interface Card {
  category: string
  title: string
  description: string
  src: string
  content: string
}

export interface VIPLounge {
  id: string
  name: string
  city: string
  airportCode: string
  features: string[]
}

