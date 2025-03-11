export interface Stay {
  id: string;
  name: string;
  type: 'hotel' | 'resort' | 'apartment' | 'villa';
  address: string;
  city: string;
  country: string;
  rating: number;
  price: number;
  currency: string;
  amenities: string[];
  imageUrl: string;
}

export const stays: Stay[] = [
  {
    id: '1',
    name: 'Grand Luxury Hotel',
    type: 'hotel',
    address: '123 Main Street',
    city: 'New York',
    country: 'United States',
    rating: 4.7,
    price: 350,
    currency: 'USD',
    amenities: ['Free Wi-Fi', 'Swimming Pool', 'Spa', 'Fitness Center', 'Restaurant'],
    imageUrl: 'https://example.com/images/grand-luxury-hotel.jpg'
  },
  {
    id: '2',
    name: 'Beachfront Paradise Resort',
    type: 'resort',
    address: 'Coral Bay',
    city: 'Phuket',
    country: 'Thailand',
    rating: 4.9,
    price: 500,
    currency: 'USD',
    amenities: ['Private Beach', 'Multiple Pools', 'Water Sports', 'All-Inclusive', 'Kids Club'],
    imageUrl: 'https://example.com/images/beachfront-paradise-resort.jpg'
  },
  {
    id: '3',
    name: 'City Center Apartments',
    type: 'apartment',
    address: '45 High Street',
    city: 'London',
    country: 'United Kingdom',
    rating: 4.5,
    price: 200,
    currency: 'GBP',
    amenities: ['Fully Equipped Kitchen', 'Washer/Dryer', 'City View', 'Concierge Service'],
    imageUrl: 'https://example.com/images/city-center-apartments.jpg'
  }
];

