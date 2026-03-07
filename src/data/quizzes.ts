export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface CityQuizzes {
  geography: QuizQuestion;
  culture: QuizQuestion;
  food: QuizQuestion;
}

export const QUIZZES: Record<string, CityQuizzes> = {
  rome: {
    geography: {
      question: "Which river flows through Rome?",
      options: ["Tiber", "Po", "Danube", "Arno"],
      answer: "Tiber"
    },
    culture: {
      question: "What is the famous Roman amphitheater?",
      options: ["Pantheon", "Colosseum", "Forum", "Acropolis"],
      answer: "Colosseum"
    },
    food: {
      question: "Which pasta dish is Roman?",
      options: ["Carbonara", "Ramen", "Sushi", "Paella"],
      answer: "Carbonara"
    }
  },
  paris: {
    geography: {
      question: "What river flows through Paris?",
      options: ["Seine", "Thames", "Danube", "Rhine"],
      answer: "Seine"
    },
    culture: {
      question: "What famous tower is in Paris?",
      options: ["Eiffel Tower", "CN Tower", "Tokyo Tower", "Space Needle"],
      answer: "Eiffel Tower"
    },
    food: {
      question: "Which bread is French?",
      options: ["Baguette", "Bagel", "Tortilla", "Naan"],
      answer: "Baguette"
    }
  }
  // Add more cities as needed...
};

// Helper to get quizzes for any city (with defaults)
export const getCityQuizzes = (cityId: string, cityName: string): CityQuizzes => {
  return QUIZZES[cityId] || {
    geography: {
      question: `Where is ${cityName} located?`,
      options: ["Europe", "Asia", "Africa", "America"],
      answer: "Europe"
    },
    culture: {
      question: `What is a famous landmark in ${cityName}?`,
      options: ["A famous building", "A park", "A museum", "A bridge"],
      answer: "A famous building"
    },
    food: {
      question: `What is a traditional food in ${cityName}?`,
      options: ["A local dish", "Pizza", "Burger", "Salad"],
      answer: "A local dish"
    }
  };
};
