export type Character = {
  id: string;
  name: string;
  role: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  image: string;
};

export type EbookFormat = 'PDF' | 'DOCX' | 'MOBI' | 'EPUB';

export type Volume = {
  id: number;
  title: string;
  city: string;
  country: string;
  coordinates: [number, number]; // [longitude, latitude]
  cover: string;
  description: string;
  recipeName: string;
  historySnippet: string;
  curiosity: string;
  buyLink: string;
  isLatest?: boolean;
  isNew?: boolean;
  monumentImage: string;
  kitchenImage: string;
};

export type CartItem = {
  id: string | number;
  type: 'digital' | 'educational' | 'merch';
  quantity: number;
  price: number;
  title?: string;
  image?: string;
};

export type Purchase = {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  downloadLinks: { [key: string]: string };
};
