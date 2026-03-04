export interface Recipe {
  id: string;
  title: string;
  country: string;
  ingredients: string[];
  image: string;
  bookSlug: string;
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Authentic Italian Pasta',
    country: 'Italy',
    ingredients: ['Durum wheat semolina', 'Eggs', 'Salt', 'Water'],
    image: 'https://picsum.photos/seed/pasta/800/600',
    bookSlug: 'rome'
  },
  {
    id: '2',
    title: 'Traditional Sushi Rolls',
    country: 'Japan',
    ingredients: ['Sushi rice', 'Nori sheets', 'Fresh fish', 'Rice vinegar'],
    image: 'https://picsum.photos/seed/sushi/800/600',
    bookSlug: 'tokyo'
  },
  {
    id: '3',
    title: 'French Croissants',
    country: 'France',
    ingredients: ['Flour', 'Butter', 'Yeast', 'Milk', 'Sugar'],
    image: 'https://picsum.photos/seed/croissant/800/600',
    bookSlug: 'paris'
  },
  {
    id: '4',
    title: 'Mexican Tacos',
    country: 'Mexico',
    ingredients: ['Corn tortillas', 'Beef or Chicken', 'Cilantro', 'Onion', 'Lime'],
    image: 'https://picsum.photos/seed/tacos/800/600',
    bookSlug: 'mexico-city'
  }
];
