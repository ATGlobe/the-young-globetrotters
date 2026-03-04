export interface City {
  id: string;
  name: string;
  country: string;
  continent: 'Europe' | 'Asia' | 'North America' | 'South America' | 'Africa' | 'Oceania';
  geography: string;
  history: string;
  culture: string;
  image: string;
  bookSlug: string;
}

export const cities: City[] = [
  {
    id: '1',
    name: 'Rome',
    country: 'Italy',
    continent: 'Europe',
    geography: 'Located in the central-western portion of the Italian Peninsula, within Lazio, along the shores of the Tiber.',
    history: 'Founded in 753 BC, Rome is one of the oldest continuously occupied cities in Europe.',
    culture: 'Known for its stunning architecture, art, and being the center of the Roman Empire.',
    image: 'https://picsum.photos/seed/rome/800/600',
    bookSlug: 'rome'
  },
  {
    id: '2',
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    geography: 'Located on the eastern side of the main island Honshu, in the Kanto region.',
    history: 'Originally a small fishing village named Edo, it became the imperial capital in 1868.',
    culture: 'A unique blend of traditional temples and ultra-modern skyscrapers.',
    image: 'https://picsum.photos/seed/tokyo/800/600',
    bookSlug: 'tokyo'
  },
  {
    id: '3',
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    geography: 'Situated in north-central France, in a north-bending arc of the river Seine.',
    history: 'Founded in the 3rd century BC by a Celtic people called the Parisii.',
    culture: 'Global center for art, fashion, gastronomy and culture.',
    image: 'https://picsum.photos/seed/paris/800/600',
    bookSlug: 'paris'
  },
  {
    id: '4',
    name: 'New York City',
    country: 'USA',
    continent: 'North America',
    geography: 'Located at the southern tip of New York State, at the mouth of the Hudson River.',
    history: 'Settled by the Dutch in 1624 as New Amsterdam.',
    culture: 'Known as "The Big Apple", it is a global hub of finance, media, and entertainment.',
    image: 'https://picsum.photos/seed/nyc/800/600',
    bookSlug: 'new-york'
  },
  {
    id: '5',
    name: 'Cairo',
    country: 'Egypt',
    continent: 'Africa',
    geography: 'Located on the banks of the Nile River in northern Egypt.',
    history: 'Founded in 969 AD, near the ancient capital of Memphis.',
    culture: 'Famous for its ancient history, including the Giza pyramid complex.',
    image: 'https://picsum.photos/seed/cairo/800/600',
    bookSlug: 'cairo'
  }
];
