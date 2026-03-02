export interface Activity {
  id: string;
  city: string;
  volume: number;
  continent: 'Europe' | 'North America' | 'South America' | 'Asia' | 'Oceania' | 'Nature & Extreme Worlds';
  type: 'Coloring Page' | 'Quiz' | 'Game' | 'Comic';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ageRange: '6–9' | '8–12';
  tagline: string;
  didYouKnow?: string;
  image: string;
  downloadUrl: string;
}

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    city: 'Rome',
    volume: 1,
    continent: 'Europe',
    type: 'Coloring Page',
    difficulty: 'Easy',
    ageRange: '6–9',
    tagline: 'Color the Colosseum and explore the heart of Ancient Rome!',
    didYouKnow: 'The Colosseum could hold up to 50,000 spectators.',
    image: '/assets/activities/rome.png',
    downloadUrl: '#'
  },
  {
    id: '2',
    city: 'Paris',
    volume: 2,
    continent: 'Europe',
    type: 'Coloring Page',
    difficulty: 'Easy',
    ageRange: '6–9',
    tagline: 'Bring the Eiffel Tower to life with your colors!',
    didYouKnow: 'The Eiffel Tower grows taller in summer due to heat expansion.',
    image: '/assets/activities/paris.png',
    downloadUrl: '#'
  },
  {
    id: '3',
    city: 'London',
    volume: 3,
    continent: 'Europe',
    type: 'Coloring Page',
    difficulty: 'Easy',
    ageRange: '6–9',
    tagline: 'Color Big Ben and the iconic London skyline.',
    didYouKnow: 'Big Ben is actually the name of the bell, not the clock tower.',
    image: '/assets/activities/london.png',
    downloadUrl: '#'
  },
  {
    id: '4',
    city: 'Barcelona',
    volume: 4,
    continent: 'Europe',
    type: 'Coloring Page',
    difficulty: 'Easy',
    ageRange: '6–9',
    tagline: 'Discover Gaudí’s magical architecture through colors!',
    didYouKnow: 'The Sagrada Família has been under construction since 1882.',
    image: '/assets/activities/barcelona.png',
    downloadUrl: '#'
  },
  {
    id: '5',
    city: 'Amsterdam',
    volume: 5,
    continent: 'Europe',
    type: 'Coloring Page',
    difficulty: 'Easy',
    ageRange: '6–9',
    tagline: 'Color the canals and charming Dutch houses.',
    didYouKnow: 'Amsterdam has more bicycles than people.',
    image: '/assets/activities/amsterdam.png',
    downloadUrl: '#'
  },
  {
    id: '6',
    city: 'New York',
    volume: 21,
    continent: 'North America',
    type: 'Coloring Page',
    difficulty: 'Easy',
    ageRange: '6–9',
    tagline: 'Color the Statue of Liberty and the NYC skyline!',
    didYouKnow: 'The Statue of Liberty was a gift from France.',
    image: '/assets/activities/new-york.png',
    downloadUrl: '#'
  },
  {
    id: '7',
    city: 'Tokyo',
    volume: 31,
    continent: 'Asia',
    type: 'Coloring Page',
    difficulty: 'Medium',
    ageRange: '8–12',
    tagline: 'Explore modern Tokyo and ancient traditions with your colors.',
    didYouKnow: 'Tokyo is the largest metropolitan area in the world.',
    image: '/assets/activities/tokyo.png',
    downloadUrl: '#'
  },
  {
    id: '8',
    city: 'Sydney',
    volume: 34,
    continent: 'Oceania',
    type: 'Coloring Page',
    difficulty: 'Easy',
    ageRange: '6–9',
    tagline: 'Color the Sydney Opera House by the sea.',
    didYouKnow: 'The Opera House roof is made of over 1 million tiles.',
    image: '/assets/activities/sydney.png',
    downloadUrl: '#'
  },
  {
    id: '9',
    city: 'Rio de Janeiro',
    volume: 24,
    continent: 'South America',
    type: 'Coloring Page',
    difficulty: 'Easy',
    ageRange: '6–9',
    tagline: 'Color Christ the Redeemer overlooking Rio.',
    didYouKnow: 'The statue stands 30 meters tall.',
    image: '/assets/activities/rio-de-janeiro.png',
    downloadUrl: '#'
  },
  {
    id: '10',
    city: 'Santorini',
    volume: 50,
    continent: 'Europe',
    type: 'Coloring Page',
    difficulty: 'Easy',
    ageRange: '6–9',
    tagline: 'Color the blue domes and white houses of Santorini.',
    didYouKnow: 'Santorini was formed by a massive volcanic eruption.',
    image: '/assets/activities/santorini.png',
    downloadUrl: '#'
  }
];
