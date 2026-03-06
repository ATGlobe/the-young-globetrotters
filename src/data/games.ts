export interface CrosswordClue {
  clue: string;
  answer: string;
}

export interface QuizQuestion {
  question: string;
  answer: string;
}

export interface GameData {
  emoji: string;
  emojiAnswer: string;

  scramble: string;
  scrambleAnswer: string;

  crossword: CrosswordClue[];

  geography: QuizQuestion;
  culture: QuizQuestion;
  food: QuizQuestion;
}
rome: {
emoji: "🏛️👑🦁",
emojiAnswer: "COLOSSEUM",

scramble: "RIFUOTN",
scrambleAnswer: "FOUNTAIN",

crossword: [
{ clue: "The name of the city where you can toss a coin in the Trevi Fountain.", answer: "ROME" },
{ clue: "The ancient amphitheater where Foxy tried to grab Axel's pin.", answer: "COLOSSEUM" },
{ clue: "Classic Roman pasta dish with eggs and cheese.", answer: "CARBONARA" }
],

geography: {
question: "The Tiber River flows through which Italian city?",
answer: "ROME"
},

culture: {
question: "What happens if you toss a coin in the Trevi Fountain?",
answer: "YOU WILL RETURN TO ROME"
},

food: {
question: "What cheese is used in Spaghetti alla Carbonara?",
answer: "PECORINO ROMANO"
}
},

paris: {
emoji: "🗼🥐🎨",
emojiAnswer: "EIFFEL TOWER",

scramble: "VROUEL",
scrambleAnswer: "LOUVRE",

crossword: [
{ clue: "The City of Light.", answer: "PARIS" },
{ clue: "Famous iron tower.", answer: "EIFFEL" },
{ clue: "Classic French pancake.", answer: "CREPE" }
],

geography: {
question: "What river flows through Paris?",
answer: "SEINE"
},

culture: {
question: "What word should you say when entering a French shop?",
answer: "BONJOUR"
},

food: {
question: "What is key to smooth crepe batter?",
answer: "WHISKING CONSTANTLY"
}
},

london: {
emoji: "👑🏰🚇",
emojiAnswer: "BUCKINGHAM PALACE",

scramble: "MESATH",
scrambleAnswer: "THAMES",

crossword: [
{ clue: "Capital city on the River Thames.", answer: "LONDON" },
{ clue: "Famous clock tower.", answer: "BIG BEN" },
{ clue: "Traditional British dish of battered fish.", answer: "FISH AND CHIPS" }
],

geography: {
question: "London is located on which river?",
answer: "THAMES"
},

culture: {
question: "What is the traditional British afternoon meal with tea and scones?",
answer: "AFTERNOON TEA"
},

food: {
question: "What condiment is traditionally sprinkled on Fish and Chips?",
answer: "MALT VINEGAR"
}
},

barcelona: {
emoji: "🦎🎨🏞️",
emojiAnswer: "PARK GUELL",

scramble: "DIAGUA",
scrambleAnswer: "GAUDI",

crossword: [
{ clue: "Vibrant Spanish city.", answer: "BARCELONA" },
{ clue: "Gaudi's unfinished basilica.", answer: "SAGRADA FAMILIA" },
{ clue: "Catalan snack with tomato bread.", answer: "PA AMB TOMAQUET" }
],

geography: {
question: "Barcelona is on the coast of which sea?",
answer: "MEDITERRANEAN SEA"
},

culture: {
question: "What are the human towers built in Catalonia called?",
answer: "CASTELLS"
},

food: {
question: "What ingredient is rubbed on bread for Pa amb Tomaquet?",
answer: "TOMATO"
}
},

amsterdam: {
emoji: "🚲🌷💧",
emojiAnswer: "AMSTERDAM",

scramble: "LANACA",
scrambleAnswer: "CANAL",

crossword: [
{ clue: "Dutch city famous for canals.", answer: "AMSTERDAM" },
{ clue: "Large Dutch pancake.", answer: "PANNENKOEKEN" },
{ clue: "Flowers Foxy crashed into.", answer: "TULIPS" }
],

geography: {
question: "Amsterdam is famous for its ring of what?",
answer: "CANALS"
},

culture: {
question: "Main transportation in Amsterdam?",
answer: "BICYCLES"
},

food: {
question: "Pannenkoeken can be sweet or what?",
answer: "SAVORY"
}
},

stockholm: {
emoji: "🏰🚢🏝️",
emojiAnswer: "STOCKHOLM",

scramble: "KIFA",
scrambleAnswer: "FIKA",

crossword: [
{ clue: "Capital built on 14 islands.", answer: "STOCKHOLM" },
{ clue: "Famous sunken warship museum.", answer: "VASA" },
{ clue: "Swedish meatballs.", answer: "KOTTBULLAR" }
],

geography: {
question: "Stockholm is the Venice of the ____.",
answer: "NORTH"
},

culture: {
question: "Swedish coffee break tradition?",
answer: "FIKA"
},

food: {
question: "Jam served with Swedish meatballs?",
answer: "LINGONBERRY"
}
}

}
