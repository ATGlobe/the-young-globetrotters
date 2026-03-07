export interface City {
  id: string;
  volume: number;
  name: string;
  level: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
  country: string;
  continent: string;
  coordinates: { lat: number; lng: number };
  category: 'city' | 'nature' | 'special';
}

export const CITIES: City[] = [
  { id: "rome", volume: 1, name: "Rome", level: "bronze", country: "Italy", continent: "Europe", coordinates: { lat: 41.9028, lng: 12.4964 }, category: 'city' },
  { id: "paris", volume: 2, name: "Paris", level: "bronze", country: "France", continent: "Europe", coordinates: { lat: 48.8566, lng: 2.3522 }, category: 'city' },
  { id: "london", volume: 3, name: "London", level: "bronze", country: "UK", continent: "Europe", coordinates: { lat: 51.5074, lng: -0.1278 }, category: 'city' },
  { id: "barcelona", volume: 4, name: "Barcelona", level: "bronze", country: "Spain", continent: "Europe", coordinates: { lat: 41.3851, lng: 2.1734 }, category: 'city' },
  { id: "amsterdam", volume: 5, name: "Amsterdam", level: "bronze", country: "Netherlands", continent: "Europe", coordinates: { lat: 52.3676, lng: 4.9041 }, category: 'city' },
  { id: "stockholm", volume: 6, name: "Stockholm", level: "bronze", country: "Sweden", continent: "Europe", coordinates: { lat: 59.3293, lng: 18.0686 }, category: 'city' },
  { id: "prague", volume: 7, name: "Prague", level: "bronze", country: "Czech Republic", continent: "Europe", coordinates: { lat: 50.0755, lng: 14.4378 }, category: 'city' },
  { id: "athens", volume: 8, name: "Athens", level: "bronze", country: "Greece", continent: "Europe", coordinates: { lat: 37.9838, lng: 23.7275 }, category: 'city' },
  { id: "berlin", volume: 9, name: "Berlin", level: "bronze", country: "Germany", continent: "Europe", coordinates: { lat: 52.5200, lng: 13.4050 }, category: 'city' },
  { id: "vienna", volume: 10, name: "Vienna", level: "bronze", country: "Austria", continent: "Europe", coordinates: { lat: 48.2082, lng: 16.3738 }, category: 'city' },

  { id: "lisbon", volume: 11, name: "Lisbon", level: "silver", country: "Portugal", continent: "Europe", coordinates: { lat: 38.7223, lng: -9.1393 }, category: 'city' },
  { id: "dublin", volume: 12, name: "Dublin", level: "silver", country: "Ireland", continent: "Europe", coordinates: { lat: 53.3498, lng: -6.2603 }, category: 'city' },
  { id: "edinburgh", volume: 13, name: "Edinburgh", level: "silver", country: "Scotland", continent: "Europe", coordinates: { lat: 55.9533, lng: -3.1883 }, category: 'city' },
  { id: "budapest", volume: 14, name: "Budapest", level: "silver", country: "Hungary", continent: "Europe", coordinates: { lat: 47.4979, lng: 19.0402 }, category: 'city' },
  { id: "copenhagen", volume: 15, name: "Copenhagen", level: "silver", country: "Denmark", continent: "Europe", coordinates: { lat: 55.6761, lng: 12.5683 }, category: 'city' },
  { id: "oslo", volume: 16, name: "Oslo", level: "silver", country: "Norway", continent: "Europe", coordinates: { lat: 59.9139, lng: 10.7522 }, category: 'city' },
  { id: "helsinki", volume: 17, name: "Helsinki", level: "silver", country: "Finland", continent: "Europe", coordinates: { lat: 60.1699, lng: 24.9384 }, category: 'city' },
  { id: "reykjavik", volume: 18, name: "Reykjavik", level: "silver", country: "Iceland", continent: "Europe", coordinates: { lat: 64.1466, lng: -21.9426 }, category: 'nature' },
  { id: "istanbul", volume: 19, name: "Istanbul", level: "silver", country: "Turkey", continent: "Europe/Asia", coordinates: { lat: 41.0082, lng: 28.9784 }, category: 'city' },
  { id: "saintpetersburg", volume: 20, name: "Saint Petersburg", level: "silver", country: "Russia", continent: "Europe", coordinates: { lat: 59.9343, lng: 30.3351 }, category: 'city' },

  { id: "newyork", volume: 21, name: "New York", level: "gold", country: "USA", continent: "North America", coordinates: { lat: 40.7128, lng: -74.0060 }, category: 'city' },
  { id: "toronto", volume: 22, name: "Toronto", level: "gold", country: "Canada", continent: "North America", coordinates: { lat: 43.6532, lng: -79.3832 }, category: 'city' },
  { id: "chicago", volume: 23, name: "Chicago", level: "gold", country: "USA", continent: "North America", coordinates: { lat: 41.8781, lng: -87.6298 }, category: 'city' },
  { id: "rio", volume: 24, name: "Rio de Janeiro", level: "gold", country: "Brazil", continent: "South America", coordinates: { lat: -22.9068, lng: -43.1729 }, category: 'city' },
  { id: "mexicocity", volume: 25, name: "Mexico City", level: "gold", country: "Mexico", continent: "North America", coordinates: { lat: 19.4326, lng: -99.1332 }, category: 'city' },
  { id: "patagonia", volume: 26, name: "Patagonia", level: "gold", country: "Argentina/Chile", continent: "South America", coordinates: { lat: -41.8101, lng: -68.9063 }, category: 'nature' },
  { id: "machupicchu", volume: 27, name: "Machu Picchu", level: "gold", country: "Peru", continent: "South America", coordinates: { lat: -13.1631, lng: -72.5450 }, category: 'special' },
  { id: "miami", volume: 28, name: "Miami", level: "gold", country: "USA", continent: "North America", coordinates: { lat: 25.7617, lng: -80.1918 }, category: 'city' },
  { id: "vancouver", volume: 29, name: "Vancouver", level: "gold", country: "Canada", continent: "North America", coordinates: { lat: 49.2827, lng: -123.1207 }, category: 'city' },
  { id: "sanfrancisco", volume: 30, name: "San Francisco", level: "gold", country: "USA", continent: "North America", coordinates: { lat: 37.7749, lng: -122.4194 }, category: 'city' },

  { id: "tokyo", volume: 31, name: "Tokyo", level: "platinum", country: "Japan", continent: "Asia", coordinates: { lat: 35.6762, lng: 139.6503 }, category: 'city' },
  { id: "kyoto", volume: 32, name: "Kyoto", level: "platinum", country: "Japan", continent: "Asia", coordinates: { lat: 35.0116, lng: 135.7681 }, category: 'city' },
  { id: "bali", volume: 33, name: "Bali", level: "platinum", country: "Indonesia", continent: "Asia", coordinates: { lat: -8.4095, lng: 115.1889 }, category: 'nature' },
  { id: "sydney", volume: 34, name: "Sydney", level: "platinum", country: "Australia", continent: "Oceania", coordinates: { lat: -33.8688, lng: 151.2093 }, category: 'city' },
  { id: "auckland", volume: 35, name: "Auckland", level: "platinum", country: "New Zealand", continent: "Oceania", coordinates: { lat: -36.8485, lng: 174.7633 }, category: 'city' },
  { id: "singapore", volume: 36, name: "Singapore", level: "platinum", country: "Singapore", continent: "Asia", coordinates: { lat: 1.3521, lng: 103.8198 }, category: 'city' },
  { id: "seoul", volume: 37, name: "Seoul", level: "platinum", country: "South Korea", continent: "Asia", coordinates: { lat: 37.5665, lng: 126.9780 }, category: 'city' },
  { id: "hongkong", volume: 38, name: "Hong Kong", level: "platinum", country: "China", continent: "Asia", coordinates: { lat: 22.3193, lng: 114.1694 }, category: 'city' },
  { id: "mumbai", volume: 39, name: "Mumbai", level: "platinum", country: "India", continent: "Asia", coordinates: { lat: 19.0760, lng: 72.8777 }, category: 'city' },
  { id: "dubai", volume: 40, name: "Dubai", level: "platinum", country: "UAE", continent: "Asia", coordinates: { lat: 25.2048, lng: 55.2708 }, category: 'city' },

  { id: "northpole", volume: 41, name: "North Pole", level: "diamond", country: "Arctic", continent: "Arctic", coordinates: { lat: 90.0, lng: 0.0 }, category: 'special' },
  { id: "antarctica", volume: 42, name: "Antarctica", level: "diamond", country: "Antarctica", continent: "Antarctica", coordinates: { lat: -82.8628, lng: 135.0 }, category: 'nature' },
  { id: "sahara", volume: 43, name: "Sahara", level: "diamond", country: "Africa", continent: "Africa", coordinates: { lat: 23.4162, lng: 25.6628 }, category: 'nature' },
  { id: "outback", volume: 44, name: "Australian Outback", level: "diamond", country: "Australia", continent: "Oceania", coordinates: { lat: -25.0, lng: 133.0 }, category: 'nature' },
  { id: "amazon", volume: 45, name: "Amazon Rainforest", level: "diamond", country: "South America", continent: "South America", coordinates: { lat: -3.4653, lng: -62.2159 }, category: 'nature' },
  { id: "hawaii", volume: 46, name: "Hawaii", level: "diamond", country: "USA", continent: "Oceania", coordinates: { lat: 19.8968, lng: -155.5828 }, category: 'nature' },
  { id: "madagascar", volume: 47, name: "Madagascar", level: "diamond", country: "Madagascar", continent: "Africa", coordinates: { lat: -18.7669, lng: 46.8691 }, category: 'nature' },
  { id: "galapagos", volume: 48, name: "Galápagos", level: "diamond", country: "Ecuador", continent: "South America", coordinates: { lat: -0.6, lng: -90.5 }, category: 'nature' },
  { id: "easterisland", volume: 49, name: "Easter Island", level: "diamond", country: "Chile", continent: "Oceania", coordinates: { lat: -27.1127, lng: -109.3497 }, category: 'special' },
  { id: "santorini", volume: 50, name: "Santorini", level: "diamond", country: "Greece", continent: "Europe", coordinates: { lat: 36.3932, lng: 25.4615 }, category: 'city' }
];

