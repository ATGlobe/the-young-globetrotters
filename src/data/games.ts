export interface GameData {
  emoji: string;
  emojiAnswer: string;
  scramble: string;
  scrambleAnswer: string;
  crossword: { clue: string; answer: string }[];
}

export const GAMES: Record<string, GameData> = {
  rome: {
    emoji: "🏛️👑🇮🇹",
    emojiAnswer: "Rome",
    scramble: "EMOR",
    scrambleAnswer: "ROME",
    crossword: [
      { clue: "Ancient Roman arena", answer: "COLOSSEUM" },
      { clue: "River in Rome", answer: "TIBER" },
      { clue: "Roman pasta dish", answer: "CARBONARA" }
    ]
  },
  paris: {
    emoji: "🗼❤️🥖",
    emojiAnswer: "Paris",
    scramble: "IRPAS",
    scrambleAnswer: "PARIS",
    crossword: [
      { clue: "Famous tower", answer: "EIFFEL" },
      { clue: "River in Paris", answer: "SEINE" },
      { clue: "French bread", answer: "BAGUETTE" }
    ]
  },
  london: {
    emoji: "🎡👑☕",
    emojiAnswer: "London",
    scramble: "NODNOL",
    scrambleAnswer: "LONDON",
    crossword: [
      { clue: "Famous clock tower", answer: "BIGBEN" },
      { clue: "River in London", answer: "THAMES" },
      { clue: "London royal palace", answer: "BUCKINGHAM" }
    ]
  },
  barcelona: {
    emoji: "⛪🌊🇪🇸",
    emojiAnswer: "Barcelona",
    scramble: "LONABRACE",
    scrambleAnswer: "BARCELONA",
    crossword: [
      { clue: "Gaudi famous church", answer: "SAGRADA" },
      { clue: "Sea near Barcelona", answer: "MEDITERRANEAN" },
      { clue: "Spanish rice dish", answer: "PAELLA" }
    ]
  }
  // Add more cities as needed...
};

// Helper to get games for any city (with defaults)
export const getCityGames = (cityId: string): GameData => {
  return GAMES[cityId] || {
    emoji: "🌍✈️🎒",
    emojiAnswer: cityId.toUpperCase(),
    scramble: cityId.toUpperCase().split('').sort(() => Math.random() - 0.5).join(''),
    scrambleAnswer: cityId.toUpperCase(),
    crossword: [
      { clue: "The name of this city.", answer: cityId.toUpperCase() },
      { clue: "A place to visit.", answer: "LANDMARK" },
      { clue: "Something to eat.", answer: "FOOD" }
    ]
  };
};
