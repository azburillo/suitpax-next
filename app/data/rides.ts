export interface Ride {
  id: string;
  type: 'airport-transfer' | 'city-tour' | 'inter-city';
  name: string;
  description: string;
  price: number;
  currency: string;
  capacity: number;
  vehicleType: string;
  imageUrl: string;
}

export const rides: Ride[] = [
  {
    id: '1',
    type: 'airport-transfer',
    name: 'Express Airport Shuttle',
    description: 'Fast and comfortable transfer from the airport to your hotel',
    price: 25,
    currency: 'USD',
    capacity: 8,
    vehicleType: 'Minivan',
    imageUrl: 'https://example.com/images/express-shuttle.jpg'
  },
  {
    id: '2',
    type: 'city-tour',
    name: 'City Highlights Tour',
    description: 'Explore the main attractions of the city in a luxury vehicle',
    price: 75,
    currency: 'USD',
    capacity: 4,
    vehicleType: 'Sedan',
    imageUrl: 'https://example.com/images/city-tour.jpg'
  },
  {
    id: '3',
    type: 'inter-city',
    name: 'Intercity Premium Transfer',
    description: 'Comfortable ride between major cities with onboard amenities',
    price: 150,
    currency: 'USD',
    capacity: 3,
    vehicleType: 'Executive Car',
    imageUrl: 'https://example.com/images/intercity-transfer.jpg'
  }
];

