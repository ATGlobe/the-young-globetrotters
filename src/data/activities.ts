import { Globe, Utensils, Plane, Music } from 'lucide-react';

export interface ActivityContent {
  id: string;
  title: string;
  heroImage: string;
  color: string;
  accentColor: string;
  icon: any;
  physicalActivity: {
    title: string;
    description: string;
  };
  quiz: {
    question: string;
    options: string[];
    correct: number;
  };
  creativeChallenge: {
    title: string;
    description: string;
  };
}

export const CATEGORY_ACTIVITIES: Record<string, ActivityContent> = {
  geography: {
    id: 'geography',
    title: 'Geography Explorer',
    heroImage: 'https://i.ibb.co/Fq6SVWrZ/Foxy-deltaplano.png',
    color: 'bg-blue-600',
    accentColor: 'text-blue-600',
    icon: Globe,
    physicalActivity: {
      title: 'The Global Hop',
      description: 'Imagine the floor is a map. Hop from "continent" to "continent"! Can you reach Australia in three hops?'
    },
    quiz: {
      question: 'Which city is known as the "Eternal City"?',
      options: ['Paris', 'Rome', 'Tokyo', 'Cairo'],
      correct: 1
    },
    creativeChallenge: {
      title: 'Map Your Room',
      description: 'Draw a map of your bedroom as if you were an explorer discovering it for the first time. Don\'t forget to mark the "Bed Mountains"!'
    }
  },
  food: {
    id: 'food',
    title: 'Culinary Detective',
    heroImage: 'https://i.ibb.co/20LYs180/Foxy-drive-Train.png',
    color: 'bg-emerald-600',
    accentColor: 'text-emerald-600',
    icon: Utensils,
    physicalActivity: {
      title: 'Chef\'s Dance',
      description: 'Put on some global music and dance while you "stir" your imaginary pot. Keep the rhythm while adding "spices"!'
    },
    quiz: {
      question: 'In which country did Sushi originate?',
      options: ['China', 'Japan', 'Italy', 'Mexico'],
      correct: 1
    },
    creativeChallenge: {
      title: 'Design a Menu',
      description: 'Create a menu for a restaurant that serves food from three different countries. What would you name your restaurant?'
    }
  },
  aviation: {
    id: 'aviation',
    title: 'Sky Captain',
    heroImage: 'https://i.ibb.co/nNkNGNCC/Foxy-drive-plane.png',
    color: 'bg-sky-600',
    accentColor: 'text-sky-600',
    icon: Plane,
    physicalActivity: {
      title: 'The Pilot Stretch',
      description: 'Reach for the clouds! Stretch your arms high and "fly" around the room. Lean left and right to navigate the winds.'
    },
    quiz: {
      question: 'Who were the brothers that made the first powered flight?',
      options: ['Warner Brothers', 'Wright Brothers', 'Smith Brothers', 'Jones Brothers'],
      correct: 1
    },
    creativeChallenge: {
      title: 'Paper Plane Prototype',
      description: 'Build the best paper plane you can. Test how far it flies and give it a cool name like "The Cloud Crusher".'
    }
  },
  culture: {
    id: 'culture',
    title: 'Culture Connector',
    heroImage: 'https://i.ibb.co/LDh11Dw6/Foxy-in-bici.png',
    color: 'bg-purple-600',
    accentColor: 'text-purple-600',
    icon: Music,
    physicalActivity: {
      title: 'Traditional Tempo',
      description: 'Clap along to a traditional song from another country. Can you match the beat with your feet?'
    },
    quiz: {
      question: 'What is the traditional dress of Japan called?',
      options: ['Sari', 'Kimono', 'Toga', 'Kilt'],
      correct: 1
    },
    creativeChallenge: {
      title: 'Greeting Card',
      description: 'Learn how to say "Hello" in three different languages and write them on a colorful card for a friend.'
    }
  }
};
