export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface CityQuizzes {
  geography: QuizQuestion;
  culture: QuizQuestion;
  food: QuizQuestion;
}

export const QUIZZES: Record<string, CityQuizzes> = {

  rome: {
    geography: {
      question: "The Tiber River flows through which Italian city?",
      options: ["Rome", "Milan", "Florence", "Venice"],
      correct: 0
    },
    culture: {
      question: "According to legend, what happens if you toss a coin into the Trevi Fountain?",
      options: [
        "You will return to Rome",
        "You will become rich",
        "You will find treasure",
        "You will meet the Pope"
      ],
      correct: 0
    },
    food: {
      question: "What cheese is used in the original Spaghetti alla Carbonara?",
      options: [
        "Pecorino Romano",
        "Parmesan",
        "Mozzarella",
        "Ricotta"
      ],
      correct: 0
    }
  },

  paris: {
    geography: {
      question: "What river flows through Paris?",
      options: ["The Seine", "The Thames", "The Rhine", "The Danube"],
      correct: 0
    },
    culture: {
      question: "What polite word should you say when entering a shop in France?",
      options: ["Bonjour", "Merci", "Salut", "Bonsoir"],
      correct: 0
    },
    food: {
      question: "What tool helps make crêpe batter smooth?",
      options: [
        "A whisk",
        "A spoon",
        "A fork",
        "A spatula"
      ],
      correct: 0
    }
  },

  london: {
    geography: {
      question: "London is located on which river?",
      options: [
        "The Thames",
        "The Seine",
        "The Danube",
        "The Rhine"
      ],
      correct: 0
    },
    culture: {
      question: "What is the traditional British afternoon meal with tea and pastries called?",
      options: [
        "Afternoon Tea",
        "Royal Lunch",
        "Tea Break",
        "London Snack"
      ],
      correct: 0
    },
    food: {
      question: "What condiment is traditionally sprinkled on Fish and Chips?",
      options: [
        "Malt vinegar",
        "Ketchup",
        "Mayonnaise",
        "Soy sauce"
      ],
      correct: 0
    }
  },

  barcelona: {
    geography: {
      question: "Barcelona sits on the coast of which sea?",
      options: [
        "Mediterranean Sea",
        "Atlantic Ocean",
        "Baltic Sea",
        "Black Sea"
      ],
      correct: 0
    },
    culture: {
      question: "What are the human towers built during Catalan festivals called?",
      options: [
        "Castells",
        "Torres",
        "Pilares",
        "Escalas"
      ],
      correct: 0
    },
    food: {
      question: "Pa amb Tomàquet is bread rubbed with what ingredient?",
      options: [
        "Tomato",
        "Garlic",
        "Cheese",
        "Butter"
      ],
      correct: 0
    }
  },

  miami: {
    geography: {
      question: "Miami is located on the coast of which ocean?",
      options: [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean",
        "Arctic Ocean"
      ],
      correct: 0
    },
    culture: {
      question: "Miami's famous Cuban neighborhood is called?",
      options: [
        "Little Havana",
        "South Beach",
        "Brickell",
        "Downtown"
      ],
      correct: 0
    },
    food: {
      question: "What ingredient makes Key Lime Pie creamy?",
      options: [
        "Sweetened condensed milk",
        "Cream cheese",
        "Butter",
        "Yogurt"
      ],
      correct: 0
    }
  }

};

export const getCityQuizzes = (cityId: string, cityName: string): CityQuizzes => {

  if (QUIZZES[cityId]) {
    return QUIZZES[cityId];
  }

  return {
    geography: {
      question: `Where is ${cityName} located?`,
      options: [
        "Europe",
        "Asia",
        "Africa",
        "America"
      ],
      correct: 3
    },
    culture: {
      question: `What is something famous in ${cityName}?`,
      options: [
        "A famous building",
        "A park",
        "A museum",
        "A bridge"
      ],
      correct: 0
    },
    food: {
      question: `What kind of food could you try in ${cityName}?`,
      options: [
        "A local dish",
        "Pizza",
        "Burger",
        "Salad"
      ],
      correct: 0
    }
  };
};
