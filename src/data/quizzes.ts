export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface Crossword {
  clue: string;
  answer: string;
}

export interface Rebus {
  emoji: string;
  answer: string;
}

export interface Scramble {
  word: string;
  answer: string;
}

export interface CityGames {
  crossword: Crossword[];
  rebus: Rebus;
  scramble: Scramble;
  geography: QuizQuestion;
  culture: QuizQuestion;
  food: QuizQuestion;
}

export const CITY_GAMES: Record<string, CityGames> = {

  rome: {
    crossword: [
      {
        clue: "The name of the city where you can toss a coin in the Trevi Fountain.",
        answer: "ROME"
      },
      {
        clue: "The ancient amphitheater where Foxy tried to grab Axel's pin with a hang glider.",
        answer: "COLOSSEUM"
      },
      {
        clue: "The classic Roman pasta dish Chef makes, using eggs and cheese.",
        answer: "CARBONARA"
      }
    ],
    rebus: {
      emoji: "🏛️ + 👑 + 🦁",
      answer: "COLOSSEUM"
    },
    scramble: {
      word: "RIFUOTN",
      answer: "FOUNTAIN"
    },
    geography: {
      question: "The Tiber River flows through which Italian city?",
      options: ["Rome", "Milan", "Florence", "Naples"],
      answer: "Rome"
    },
    culture: {
      question: "According to legend, what happens if you toss a coin into the Trevi Fountain?",
      options: [
        "You will return to Rome",
        "You become lucky",
        "You meet a friend",
        "You become rich"
      ],
      answer: "You will return to Rome"
    },
    food: {
      question: "What is the main cheese used in Spaghetti alla Carbonara?",
      options: [
        "Pecorino Romano",
        "Parmesan",
        "Mozzarella",
        "Ricotta"
      ],
      answer: "Pecorino Romano"
    }
  },

  paris: {
    crossword: [
      {
        clue: "The name of this city, also known as the City of Light.",
        answer: "PARIS"
      },
      {
        clue: "The famous iron tower that Axel and Tino flew over.",
        answer: "EIFFEL"
      },
      {
        clue: "A classic French pancake often filled with chocolate or cheese.",
        answer: "CREPE"
      }
    ],
    rebus: {
      emoji: "🗼 + 🥐 + 🎨",
      answer: "EIFFEL TOWER"
    },
    scramble: {
      word: "VROUEL",
      answer: "LOUVRE"
    },
    geography: {
      question: "What is the name of the river that flows through Paris?",
      options: [
        "The Seine",
        "The Thames",
        "The Danube",
        "The Rhine"
      ],
      answer: "The Seine"
    },
    culture: {
      question: "What polite French word should you say when entering a shop?",
      options: [
        "Bonjour",
        "Merci",
        "Bonsoir",
        "Salut"
      ],
      answer: "Bonjour"
    },
    food: {
      question: "According to Chef's recipe, what is the key to making crêpe batter smooth?",
      options: [
        "Whisking constantly",
        "Adding cream",
        "Cooking slowly",
        "Using butter"
      ],
      answer: "Whisking constantly"
    }
  },

  london: {
    crossword: [
      {
        clue: "The name of this capital city, home to the River Thames.",
        answer: "LONDON"
      },
      {
        clue: "The famous clock tower where the brothers perched.",
        answer: "BIG BEN"
      },
      {
        clue: "The traditional British dish of battered fish and fried potatoes.",
        answer: "FISH AND CHIPS"
      }
    ],
    rebus: {
      emoji: "👑 + 🏰 + 🚇",
      answer: "BUCKINGHAM PALACE"
    },
    scramble: {
      word: "MESATH",
      answer: "THAMES"
    },
    geography: {
      question: "London is located on which river?",
      options: [
        "The Thames",
        "The Severn",
        "The Tyne",
        "The Avon"
      ],
      answer: "The Thames"
    },
    culture: {
      question: "What is the traditional British afternoon meal with tea and small sandwiches?",
      options: [
        "Afternoon Tea",
        "High Dinner",
        "Tea Lunch",
        "Royal Snack"
      ],
      answer: "Afternoon Tea"
    },
    food: {
      question: "What condiment is traditionally sprinkled on Fish and Chips?",
      options: [
        "Malt vinegar",
        "Ketchup",
        "Mustard",
        "Mayonnaise"
      ],
      answer: "Malt vinegar"
    }
  },

  barcelona: {
    crossword: [
      {
        clue: "The name of this vibrant Spanish city.",
        answer: "BARCELONA"
      },
      {
        clue: "The famous basilica designed by Antoni Gaudí.",
        answer: "SAGRADA FAMILIA"
      },
      {
        clue: "Catalan bread rubbed with tomato and olive oil.",
        answer: "PA AMB TOMAQUET"
      }
    ],
    rebus: {
      emoji: "🦎 + 🎨 + 🏞️",
      answer: "PARK GUELL"
    },
    scramble: {
      word: "DIAGUA",
      answer: "GAUDI"
    },
    geography: {
      question: "Barcelona is located on the coast of which sea?",
      options: [
        "Mediterranean Sea",
        "Atlantic Ocean",
        "Black Sea",
        "Baltic Sea"
      ],
      answer: "Mediterranean Sea"
    },
    culture: {
      question: "What are the famous human towers built in Catalonia called?",
      options: [
        "Castells",
        "Torres",
        "Human pyramids",
        "Stack towers"
      ],
      answer: "Castells"
    },
    food: {
      question: "What ingredient is rubbed on bread for Pa amb Tomàquet?",
      options: [
        "Ripe tomato",
        "Garlic",
        "Cheese",
        "Butter"
      ],
      answer: "Ripe tomato"
    }
  }

};
