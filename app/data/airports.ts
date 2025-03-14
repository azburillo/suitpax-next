export interface Airport {
  id: string
  name: string
  code: string
  city: string
  country: string
  lat: number
  lng: number
}

// Airports data with coordinates, matching the structure of cities.json
export const airports: Airport[] = [
  {
    name: "Hartsfield–Jackson Atlanta International Airport",
    code: "ATL",
    city: "Atlanta",
    country: "United States",
    lat: 33.6407,
    lng: -84.4277,
    id: "1",
  },
  {
    name: "Beijing Capital International Airport",
    code: "PEK",
    city: "Beijing",
    country: "China",
    lat: 40.0799,
    lng: 116.5889,
    id: "2",
  },
  {
    name: "Dubai International Airport",
    code: "DXB",
    city: "Dubai",
    country: "United Arab Emirates",
    lat: 25.2528,
    lng: 55.3644,
    id: "3",
  },
  {
    name: "Los Angeles International Airport",
    code: "LAX",
    city: "Los Angeles",
    country: "United States",
    lat: 33.9416,
    lng: -118.4085,
    id: "4",
  },
  {
    name: "Tokyo Haneda Airport",
    code: "HND",
    city: "Tokyo",
    country: "Japan",
    lat: 35.5523,
    lng: 139.7797,
    id: "5",
  },
  {
    name: "O'Hare International Airport",
    code: "ORD",
    city: "Chicago",
    country: "United States",
    lat: 41.9786,
    lng: -87.9048,
    id: "6",
  },
  {
    name: "London Heathrow Airport",
    code: "LHR",
    city: "London",
    country: "United Kingdom",
    lat: 51.4706,
    lng: -0.4619,
    id: "7",
  },
  {
    name: "Shanghai Pudong International Airport",
    code: "PVG",
    city: "Shanghai",
    country: "China",
    lat: 31.1434,
    lng: 121.805,
    id: "8",
  },
  {
    name: "Charles de Gaulle Airport",
    code: "CDG",
    city: "Paris",
    country: "France",
    lat: 49.0128,
    lng: 2.55,
    id: "9",
  },
  {
    name: "Dallas/Fort Worth International Airport",
    code: "DFW",
    city: "Dallas-Fort Worth",
    country: "United States",
    lat: 32.8968,
    lng: -97.038,
    id: "10",
  },
  {
    name: "Amsterdam Airport Schiphol",
    code: "AMS",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.3086,
    lng: 4.7639,
    id: "11",
  },
  {
    name: "Istanbul Airport",
    code: "IST",
    city: "Istanbul",
    country: "Turkey",
    lat: 41.2753,
    lng: 28.7515,
    id: "12",
  },
  {
    name: "Indira Gandhi International Airport",
    code: "DEL",
    city: "Delhi",
    country: "India",
    lat: 28.5562,
    lng: 77.0999,
    id: "13",
  },
  {
    name: "Guangzhou Baiyun International Airport",
    code: "CAN",
    city: "Guangzhou",
    country: "China",
    lat: 23.3924,
    lng: 113.2988,
    id: "14",
  },
  {
    name: "Frankfurt Airport",
    code: "FRA",
    city: "Frankfurt",
    country: "Germany",
    lat: 50.0379,
    lng: 8.5622,
    id: "15",
  },
  {
    name: "Soekarno-Hatta International Airport",
    code: "CGK",
    city: "Jakarta",
    country: "Indonesia",
    lat: -6.1256,
    lng: 106.6559,
    id: "16",
  },
  {
    name: "Singapore Changi Airport",
    code: "SIN",
    city: "Singapore",
    country: "Singapore",
    lat: 1.3592,
    lng: 103.9894,
    id: "17",
  },
  {
    name: "Denver International Airport",
    code: "DEN",
    city: "Denver",
    country: "United States",
    lat: 39.8617,
    lng: -104.6731,
    id: "18",
  },
  {
    name: "Suvarnabhumi Airport",
    code: "BKK",
    city: "Bangkok",
    country: "Thailand",
    lat: 13.6811,
    lng: 100.7473,
    id: "19",
  },
  {
    name: "John F. Kennedy International Airport",
    code: "JFK",
    city: "New York",
    country: "United States",
    lat: 40.6398,
    lng: -73.7789,
    id: "20",
  },
  {
    name: "Adolfo Suárez Madrid–Barajas Airport",
    code: "MAD",
    city: "Madrid",
    country: "Spain",
    lat: 40.4936,
    lng: -3.5668,
    id: "21",
  },
  {
    name: "Barcelona-El Prat Airport",
    code: "BCN",
    city: "Barcelona",
    country: "Spain",
    lat: 41.2971,
    lng: 2.0785,
    id: "22",
  },
  {
    name: "Rome-Fiumicino International Airport",
    code: "FCO",
    city: "Rome",
    country: "Italy",
    lat: 41.8045,
    lng: 12.2508,
    id: "23",
  },
  {
    name: "Lisbon Airport",
    code: "LIS",
    city: "Lisbon",
    country: "Portugal",
    lat: 38.7742,
    lng: -9.1342,
    id: "24",
  },
  {
    name: "Athens International Airport",
    code: "ATH",
    city: "Athens",
    country: "Greece",
    lat: 37.9364,
    lng: 23.947,
    id: "25",
  },
  {
    name: "Vienna International Airport",
    code: "VIE",
    city: "Vienna",
    country: "Austria",
    lat: 48.1103,
    lng: 16.5697,
    id: "26",
  },
  {
    name: "Zurich Airport",
    code: "ZRH",
    city: "Zurich",
    country: "Switzerland",
    lat: 47.4647,
    lng: 8.5492,
    id: "27",
  },
  {
    name: "Moscow Domodedovo Airport",
    code: "DME",
    city: "Moscow",
    country: "Russia",
    lat: 55.4086,
    lng: 37.9061,
    id: "28",
  },
  {
    name: "Istanbul Sabiha Gökçen International Airport",
    code: "SAW",
    city: "Istanbul",
    country: "Turkey",
    lat: 40.8983,
    lng: 29.3092,
    id: "29",
  },
  {
    name: "Dubai World Central",
    code: "DWC",
    city: "Dubai",
    country: "United Arab Emirates",
    lat: 24.9294,
    lng: 55.1689,
    id: "30",
  },
  {
    id: "31",
    name: "Berlin Brandenburg Airport",
    code: "BER",
    city: "Berlin",
    country: "Germany",
    lat: 52.36,
    lng: 13.5,
  },
  {
    id: "32",
    name: "Cairo International Airport",
    code: "CAI",
    city: "Cairo",
    country: "Egypt",
    lat: 30.11,
    lng: 31.41,
  },
  {
    id: "33",
    name: "Cape Town International Airport",
    code: "CPT",
    city: "Cape Town",
    country: "South Africa",
    lat: -33.97,
    lng: 18.6,
  },
  {
    id: "34",
    name: "Dublin Airport",
    code: "DUB",
    city: "Dublin",
    country: "Ireland",
    lat: 53.42,
    lng: -6.27,
  },
  {
    id: "35",
    name: "Hong Kong International Airport",
    code: "HKG",
    city: "Hong Kong",
    country: "China",
    lat: 22.31,
    lng: 113.91,
  },
  {
    id: "36",
    name: "Johannesburg International Airport",
    code: "JNB",
    city: "Johannesburg",
    country: "South Africa",
    lat: -26.14,
    lng: 28.24,
  },
  {
    id: "37",
    name: "Kuala Lumpur International Airport",
    code: "KUL",
    city: "Kuala Lumpur",
    country: "Malaysia",
    lat: 2.74,
    lng: 101.71,
  },
  {
    id: "38",
    name: "Melbourne Airport",
    code: "MEL",
    city: "Melbourne",
    country: "Australia",
    lat: -37.67,
    lng: 144.84,
  },
  {
    id: "39",
    name: "Mexico City International Airport",
    code: "MEX",
    city: "Mexico City",
    country: "Mexico",
    lat: 19.44,
    lng: -99.07,
  },
  {
    id: "40",
    name: "Moscow Sheremetyevo International Airport",
    code: "SVO",
    city: "Moscow",
    country: "Russia",
    lat: 55.97,
    lng: 37.41,
  },
  {
    id: "41",
    name: "Indira Gandhi International Airport",
    code: "DEL",
    city: "New Delhi",
    country: "India",
    lat: 28.56,
    lng: 77.1,
  },
  {
    id: "42",
    name: "Soekarno-Hatta International Airport",
    code: "CGK",
    city: "Jakarta",
    country: "Indonesia",
    lat: -6.13,
    lng: 106.66,
  },
  {
    id: "43",
    name: "Ninoy Aquino International Airport",
    code: "MNL",
    city: "Manila",
    country: "Philippines",
    lat: 14.51,
    lng: 121.02,
  },
  {
    id: "44",
    name: "Noi Bai International Airport",
    code: "HAN",
    city: "Hanoi",
    country: "Vietnam",
    lat: 21.22,
    lng: 105.8,
  },
  {
    id: "45",
    name: "Taoyuan International Airport",
    code: "TPE",
    city: "Taipei",
    country: "Taiwan",
    lat: 25.08,
    lng: 121.23,
  },
  {
    id: "46",
    name: "Kansai International Airport",
    code: "KIX",
    city: "Osaka",
    country: "Japan",
    lat: 34.43,
    lng: 135.24,
  },
  {
    id: "47",
    name: "São Paulo/Guarulhos International Airport",
    code: "GRU",
    city: "São Paulo",
    country: "Brazil",
    lat: -23.43,
    lng: -46.47,
  },
  {
    id: "48",
    name: "Rio de Janeiro/Galeão International Airport",
    code: "GIG",
    city: "Rio de Janeiro",
    country: "Brazil",
    lat: -22.81,
    lng: -43.25,
  },
  {
    id: "49",
    name: "Toronto Pearson International Airport",
    code: "YYZ",
    city: "Toronto",
    country: "Canada",
    lat: 43.68,
    lng: -79.62,
  },
  {
    id: "50",
    name: "Vancouver International Airport",
    code: "YVR",
    city: "Vancouver",
    country: "Canada",
    lat: 49.19,
    lng: -123.18,
  },
  {
    id: "51",
    name: "San Francisco International Airport",
    code: "SFO",
    city: "San Francisco",
    country: "United States",
    lat: 37.61897222222222,
    lng: -122.37488888888889,
  },
  {
    id: "52",
    name: "Amsterdam Airport Schiphol",
    code: "AMS",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.30805555555555,
    lng: 4.764166666666667,
  },
  {
    id: "53",
    name: "Suvarnabhumi Airport",
    code: "BKK",
    city: "Bangkok",
    country: "Thailand",
    lat: 13.69,
    lng: 100.75,
  },
  {
    id: "54",
    name: "Dubai International Airport",
    code: "DXB",
    city: "Dubai",
    country: "United Arab Emirates",
    lat: 25.2528,
    lng: 55.3644,
  },
  {
    id: "55",
    name: "Singapore Changi Airport",
    code: "SIN",
    city: "Singapore",
    country: "Singapore",
    lat: 1.350189,
    lng: 103.994433,
  },
  {
    id: "56",
    name: "Indira Gandhi International Airport",
    code: "DEL",
    city: "Delhi",
    country: "India",
    lat: 28.556162,
    lng: 77.099958,
  },
  {
    id: "57",
    name: "Barcelona-El Prat Airport",
    code: "BCN",
    city: "Barcelona",
    country: "Spain",
    lat: 41.2971,
    lng: 2.0785,
  },
  {
    id: "58",
    name: "Málaga-Costa del Sol Airport",
    code: "AGP",
    city: "Málaga",
    country: "Spain",
    lat: 36.6749,
    lng: -4.4991,
  },
]

