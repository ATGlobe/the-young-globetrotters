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
      options: ["Carbonara", "Lasagna", "Ramen", "Sushi"],
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
      options: ["Eiffel Tower", "CN Tower", "Tokyo Tower", "Big Ben"],
      answer: "Eiffel Tower"
    },
    food: {
      question: "Which bread is French?",
      options: ["Baguette", "Bagel", "Tortilla", "Naan"],
      answer: "Baguette"
    }
  },

  london: {
    geography: {
      question: "Which river flows through London?",
      options: ["Thames", "Severn", "Tyne", "Mersey"],
      answer: "Thames"
    },
    culture: {
      question: "What famous clock tower is in London?",
      options: ["Big Ben", "Eiffel Tower", "Colosseum", "Statue of Liberty"],
      answer: "Big Ben"
    },
    food: {
      question: "Which British dish includes fried fish and potatoes?",
      options: ["Fish and Chips", "Tacos", "Ramen", "Pizza"],
      answer: "Fish and Chips"
    }
  },

  barcelona: {
    geography: {
      question: "Barcelona is located in which region of Spain?",
      options: ["Catalonia", "Andalusia", "Galicia", "Madrid"],
      answer: "Catalonia"
    },
    culture: {
      question: "Which famous basilica is in Barcelona?",
      options: ["Sagrada Familia", "Notre Dame", "St Peter's", "Duomo"],
      answer: "Sagrada Familia"
    },
    food: {
      question: "Which Spanish dish often includes rice and seafood?",
      options: ["Paella", "Burger", "Sushi", "Curry"],
      answer: "Paella"
    }
  },

  amsterdam: {
    geography: {
      question: "Amsterdam is famous for its many...",
      options: ["Canals", "Volcanoes", "Deserts", "Glaciers"],
      answer: "Canals"
    },
    culture: {
      question: "Which vehicle is very common in Amsterdam?",
      options: ["Bicycle", "Camel", "Elephant", "Snowmobile"],
      answer: "Bicycle"
    },
    food: {
      question: "Which sweet Dutch treat is made with two thin waffles?",
      options: ["Stroopwafel", "Donut", "Croissant", "Brownie"],
      answer: "Stroopwafel"
    }
  },

  stockholm: {
    geography: {
      question: "Stockholm is built on many...",
      options: ["Islands", "Mountains", "Volcanoes", "Deserts"],
      answer: "Islands"
    },
    culture: {
      question: "Which Swedish furniture company is famous worldwide?",
      options: ["IKEA", "LEGO", "Samsung", "Sony"],
      answer: "IKEA"
    },
    food: {
      question: "Which Swedish dish uses small meatballs?",
      options: ["Swedish Meatballs", "Paella", "Sushi", "Tacos"],
      answer: "Swedish Meatballs"
    }
  },

  prague: {
    geography: {
      question: "Which river flows through Prague?",
      options: ["Vltava", "Danube", "Seine", "Thames"],
      answer: "Vltava"
    },
    culture: {
      question: "Prague is famous for its medieval...",
      options: ["Castle", "Pyramid", "Temple", "Pagoda"],
      answer: "Castle"
    },
    food: {
      question: "Which sweet pastry is popular in Prague?",
      options: ["Trdelník", "Croissant", "Donut", "Waffle"],
      answer: "Trdelník"
    }
  },

  athens: {
    geography: {
      question: "Athens is located in which country?",
      options: ["Greece", "Italy", "Spain", "Turkey"],
      answer: "Greece"
    },
    culture: {
      question: "Which ancient temple stands on the Acropolis?",
      options: ["Parthenon", "Colosseum", "Pantheon", "Temple of Heaven"],
      answer: "Parthenon"
    },
    food: {
      question: "Which Greek dish uses layers of eggplant and meat?",
      options: ["Moussaka", "Pizza", "Ramen", "Burger"],
      answer: "Moussaka"
    }
  },

  berlin: {
    geography: {
      question: "Berlin is the capital of which country?",
      options: ["Germany", "Austria", "Poland", "Switzerland"],
      answer: "Germany"
    },
    culture: {
      question: "Which famous wall once divided Berlin?",
      options: ["Berlin Wall", "Great Wall", "Hadrian's Wall", "Stone Wall"],
      answer: "Berlin Wall"
    },
    food: {
      question: "Which sausage snack is famous in Berlin?",
      options: ["Currywurst", "Hot Dog", "Bratwurst Soup", "Salami"],
      answer: "Currywurst"
    }
  },

  vienna: {
    geography: {
      question: "Vienna is the capital of...",
      options: ["Austria", "Hungary", "Germany", "Poland"],
      answer: "Austria"
    },
    culture: {
      question: "Vienna is famous for classical...",
      options: ["Music", "Surfing", "Volcanoes", "Safari"],
      answer: "Music"
    },
    food: {
      question: "Which famous cake comes from Vienna?",
      options: ["Sachertorte", "Cheesecake", "Brownie", "Cupcake"],
      answer: "Sachertorte"
    }
  },

  new_york: {
    geography: {
      question: "New York City is in which country?",
      options: ["USA", "Canada", "UK", "Mexico"],
      answer: "USA"
    },
    culture: {
      question: "Which statue stands in New York Harbor?",
      options: ["Statue of Liberty", "Christ the Redeemer", "Big Ben", "Colosseum"],
      answer: "Statue of Liberty"
    },
    food: {
      question: "Which street food is famous in New York?",
      options: ["Hot Dog", "Paella", "Ramen", "Tacos"],
      answer: "Hot Dog"
    }
  },

  miami: {
    geography: {
      question: "Miami is located in which U.S. state?",
      options: ["Florida", "California", "Texas", "Nevada"],
      answer: "Florida"
    },
    culture: {
      question: "Which colorful district in Miami celebrates Cuban culture?",
      options: ["Little Havana", "Brooklyn", "Queens", "Soho"],
      answer: "Little Havana"
    },
    food: {
      question: "Which famous dessert uses small Key limes?",
      options: ["Key Lime Pie", "Apple Pie", "Cheesecake", "Brownie"],
      answer: "Key Lime Pie"
    }
  },

  tokyo: {
    geography: {
      question: "Tokyo is the capital of...",
      options: ["Japan", "China", "South Korea", "Thailand"],
      answer: "Japan"
    },
    culture: {
      question: "Which spring flowers are famous in Japan?",
      options: ["Cherry Blossoms", "Tulips", "Roses", "Sunflowers"],
      answer: "Cherry Blossoms"
    },
    food: {
      question: "Which Japanese dish uses raw fish and rice?",
      options: ["Sushi", "Pizza", "Burger", "Tacos"],
      answer: "Sushi"
    }
  },

  sydney: {
    geography: {
      question: "Sydney is located in which country?",
      options: ["Australia", "New Zealand", "USA", "Canada"],
      answer: "Australia"
    },
    culture: {
      question: "Which famous building looks like giant shells?",
      options: ["Sydney Opera House", "Colosseum", "Louvre", "Big Ben"],
      answer: "Sydney Opera House"
    },
    food: {
      question: "Which sweet dessert is popular in Australia?",
      options: ["Pavlova", "Donut", "Brownie", "Cupcake"],
      answer: "Pavlova"
    }
  }

};

// Default fallback if city not yet added
export const getCityQuizzes = (cityId: string, cityName: string): CityQuizzes => {
  return QUIZZES[cityId] || {
    geography: {
      question: `Where is ${cityName} located?`,
      options: ["Europe", "Asia", "Africa", "America"],
      answer: "America"
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
