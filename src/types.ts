export type Character = {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  color: string;
};

export type Book = {
  id: string;
  slug: string;
  title: string;
  city: string;
  country: string;
  cover: string;
  intro: string;
  landmarks: string[];
  wildlife: string[];
  culturalFacts: string[];
  recipe: {
    name: string;
    description: string;
    image: string;
  };
  foxyTransport: string;
  learningFocus: string[];
  gumroadUrl: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type Quiz = {
  id: string;
  title: string;
  city: string;
  questions: QuizQuestion[];
};

export type Badge = {
  citySlug: string;
  name: string;
  image: string;
  unlocked: boolean;
};

export type Product = {
  id: string;
  name: string;
  category: 'Apparel' | 'School & Travel' | 'Accessories' | 'Collectibles';
  price: number;
  image: string;
  storeUrl: string;
  description: string;
};

export type Activity = {
  id: string;
  title: string;
  type: 'Quiz' | 'Printable' | 'Coloring' | 'Games';
  city: string;
  image: string;
  description: string;
  fileUrl?: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type Purchase = {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'completed' | 'pending' | 'failed';
};
