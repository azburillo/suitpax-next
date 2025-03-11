export interface Airline {
  id: string;
  name: string;
  code: string;
  country: string;
  logo: string;
  alliance: 'Star Alliance' | 'Oneworld' | 'SkyTeam' | 'None';
  rating: number;
  routes: string[];
}

export const airlines: Airline[] = [
  {
    id: '1',
    name: 'Lufthansa',
    code: 'LH',
    country: 'Germany',
    logo: 'https://example.com/logos/lufthansa.png',
    alliance: 'Star Alliance',
    rating: 4.5,
    routes: ['Europe', 'North America', 'Asia', 'Africa']
  },
  {
    id: '2',
    name: 'Emirates',
    code: 'EK',
    country: 'United Arab Emirates',
    logo: 'https://example.com/logos/emirates.png',
    alliance: 'None',
    rating: 4.8,
    routes: ['Middle East', 'Europe', 'Asia', 'Africa', 'North America', 'South America']
  },
  {
    id: '3',
    name: 'Delta Air Lines',
    code: 'DL',
    country: 'United States',
    logo: 'https://example.com/logos/delta.png',
    alliance: 'SkyTeam',
    rating: 4.2,
    routes: ['North America', 'South America', 'Europe', 'Asia']
  }
];

