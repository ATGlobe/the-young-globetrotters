import { Globe, Utensils, Plane, Music, Camera, Landmark, TreePine, Sparkles } from 'lucide-react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface Volume {
  id: string;
  slug: string;
  city: string;
  country: string;
  category: 'city' | 'nature' | 'special';
  coordinates: { lat: number; lng: number };
  purchaseLink?: string;
  price: string;
  image: string;
  description: string;
  quizzes: {
    geography: QuizQuestion;
    culture: QuizQuestion;
    food: QuizQuestion;
  };
  games: {
    crossword: {
      words: { word: string; clue: string; orientation: 'across' }[];
    };
    rebus: { emojis: string; answer: string }[];
    scramble: { letters: string; answer: string }[];
  };
}

export const VOLUMES: Volume[] = [
  {
    id: "vol01-rome",
    slug: "rome",
    city: "Rome",
    country: "Italy",
    category: "city",
    coordinates: { lat: 41.9028, lng: 12.4964 },
    purchaseLink: "https://atglobe.gumroad.com/l/ygwux",
    price: "€4.99",
    image: "https://picsum.photos/seed/rome/800/1000",
    description: "Discover the Eternal City with Foxy and Axel! Explore the Colosseum, toss a coin in the Trevi Fountain, and learn about the ancient Romans.",
    quizzes: {
      geography: {
        question: "Which river flows through Rome?",
        options: ["Tiber", "Arno", "Po", "Danube"],
        correct: 0
      },
      culture: {
        question: "What is the name of the famous ancient amphitheater in Rome?",
        options: ["Parthenon", "Colosseum", "Pantheon", "Forum"],
        correct: 1
      },
      food: {
        question: "Which of these is a famous Roman pasta dish?",
        options: ["Pesto", "Carbonara", "Lasagna", "Tortellini"],
        correct: 1
      }
    },
    games: {
      crossword: {
        words: [
          { word: "COLOSSEUM", clue: "The giant ancient arena.", orientation: 'across' },
          { word: "TIBER", clue: "The river of Rome.", orientation: 'across' },
          { word: "PIZZA", clue: "A favorite Italian food.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🏛️🏟️🇮🇹", answer: "ROME" }
      ],
      scramble: [
        { letters: "EMOR", answer: "ROME" }
      ]
    }
  },
  {
    id: "vol02-paris",
    slug: "paris",
    city: "Paris",
    country: "France",
    category: "city",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    purchaseLink: "https://atglobe.gumroad.com/l/ubkihu",
    price: "€4.99",
    image: "https://picsum.photos/seed/paris/800/1000",
    description: "Visit the City of Light! See the Eiffel Tower, explore the Louvre museum, and enjoy a delicious croissant by the Seine.",
    quizzes: {
      geography: {
        question: "Which river flows through Paris?",
        options: ["Rhine", "Seine", "Loire", "Rhone"],
        correct: 1
      },
      culture: {
        question: "What is the most famous museum in Paris?",
        options: ["British Museum", "Prado", "Louvre", "Uffizi"],
        correct: 2
      },
      food: {
        question: "What is a popular French crescent-shaped pastry?",
        options: ["Bagel", "Croissant", "Donut", "Muffin"],
        correct: 1
      }
    },
    games: {
      crossword: {
        words: [
          { word: "EIFFEL", clue: "The famous iron tower.", orientation: 'across' },
          { word: "LOUVRE", clue: "A giant art museum.", orientation: 'across' },
          { word: "SEINE", clue: "The river in Paris.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🗼🥐🎨", answer: "PARIS" }
      ],
      scramble: [
        { letters: "SIPAR", answer: "PARIS" }
      ]
    }
  },
  {
    id: "vol03-london",
    slug: "london",
    city: "London",
    country: "United Kingdom",
    category: "city",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    purchaseLink: "https://atglobe.gumroad.com/l/thdmy",
    price: "€4.99",
    image: "https://picsum.photos/seed/london/800/1000",
    description: "Explore the historic streets of London! See Big Ben, cross Tower Bridge, and watch the Changing of the Guard at Buckingham Palace.",
    quizzes: {
      geography: {
        question: "Which river flows through London?",
        options: ["Thames", "Mersey", "Severn", "Trent"],
        correct: 0
      },
      culture: {
        question: "What is the name of the famous clock tower in London?",
        options: ["Big Ben", "Eiffel Tower", "Leaning Tower", "Empire State"],
        correct: 0
      },
      food: {
        question: "What is a traditional British meal often eaten on Fridays?",
        options: ["Pizza", "Fish and Chips", "Tacos", "Sushi"],
        correct: 1
      }
    },
    games: {
      crossword: {
        words: [
          { word: "THAMES", clue: "The river of London.", orientation: 'across' },
          { word: "BEN", clue: "The nickname of the big clock.", orientation: 'across' },
          { word: "BUS", clue: "A red double-decker vehicle.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🎡💂‍♂️☕", answer: "LONDON" }
      ],
      scramble: [
        { letters: "NODNOL", answer: "LONDON" }
      ]
    }
  },
  {
    id: "vol04-barcelona",
    slug: "barcelona",
    city: "Barcelona",
    country: "Spain",
    category: "city",
    coordinates: { lat: 41.3851, lng: 2.1734 },
    purchaseLink: "https://atglobe.gumroad.com/l/the-young-globetrotters-barcelona",
    price: "€4.99",
    image: "https://picsum.photos/seed/barcelona/800/1000",
    description: "Experience the vibrant culture of Barcelona! Marvel at Gaudí's Sagrada Família, walk down Las Ramblas, and enjoy tapas by the Mediterranean.",
    quizzes: {
      geography: {
        question: "Barcelona is located on the coast of which sea?",
        options: ["Red Sea", "Mediterranean Sea", "Black Sea", "Caspian Sea"],
        correct: 1
      },
      culture: {
        question: "Who was the famous architect of the Sagrada Família?",
        options: ["Picasso", "Dalí", "Gaudí", "Miró"],
        correct: 2
      },
      food: {
        question: "What is a famous Spanish rice dish from this region?",
        options: ["Risotto", "Paella", "Biryani", "Pilaf"],
        correct: 1
      }
    },
    games: {
      crossword: {
        words: [
          { word: "GAUDI", clue: "The famous architect.", orientation: 'across' },
          { word: "TAPAS", clue: "Small Spanish snacks.", orientation: 'across' },
          { word: "BEACH", clue: "Where you swim in Barcelona.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "⛪🥘☀️", answer: "BARCELONA" }
      ],
      scramble: [
        { letters: "CELABRONA", answer: "BARCELONA" }
      ]
    }
  },
  {
    id: "vol05-amsterdam",
    slug: "amsterdam",
    city: "Amsterdam",
    country: "Netherlands",
    category: "city",
    coordinates: { lat: 52.3676, lng: 4.9041 },
    purchaseLink: "https://atglobe.gumroad.com/l/the-young-globetrotters-amsterdam",
    price: "€4.99",
    image: "https://picsum.photos/seed/amsterdam/800/1000",
    description: "Cycle through the charming canals of Amsterdam! Visit the Anne Frank House, see the windmills, and admire the colorful tulips.",
    quizzes: {
      geography: {
        question: "Amsterdam is famous for its many what?",
        options: ["Mountains", "Canals", "Deserts", "Volcanoes"],
        correct: 1
      },
      culture: {
        question: "What is a common way people get around Amsterdam?",
        options: ["Subway", "Bicycle", "Helicopter", "Camel"],
        correct: 1
      },
      food: {
        question: "What are famous Dutch mini pancakes called?",
        options: ["Crepes", "Poffertjes", "Waffles", "Blinis"],
        correct: 1
      }
    },
    games: {
      crossword: {
        words: [
          { word: "CANAL", clue: "A water path in the city.", orientation: 'across' },
          { word: "BIKE", clue: "How people travel here.", orientation: 'across' },
          { word: "TULIP", clue: "A famous Dutch flower.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🚲🌷🧀", answer: "AMSTERDAM" }
      ],
      scramble: [
        { letters: "DAMRETSMA", answer: "AMSTERDAM" }
      ]
    }
  },
  {
    id: "vol06-stockholm",
    slug: "stockholm",
    city: "Stockholm",
    country: "Sweden",
    category: "city",
    coordinates: { lat: 59.3293, lng: 18.0686 },
    purchaseLink: "https://atglobe.gumroad.com/l/the-young-globetrotters-stockholm",
    price: "€4.99",
    image: "https://picsum.photos/seed/stockholm/800/1000",
    description: "Explore the beautiful archipelago of Stockholm! Visit Gamla Stan (Old Town), see the Vasa Museum, and enjoy a Swedish fika.",
    quizzes: {
      geography: {
        question: "Stockholm is built on how many islands?",
        options: ["1", "7", "14", "50"],
        correct: 2
      },
      culture: {
        question: "What is the name of the historic Old Town in Stockholm?",
        options: ["Gamla Stan", "Nyhavn", "Plaka", "Alfama"],
        correct: 0
      },
      food: {
        question: "What is a famous Swedish meat dish?",
        options: ["Meatballs", "Schnitzel", "Steak", "Burger"],
        correct: 0
      }
    },
    games: {
      crossword: {
        words: [
          { word: "ISLAND", clue: "Stockholm is built on many.", orientation: 'across' },
          { word: "VASA", clue: "The famous sunken ship.", orientation: 'across' },
          { word: "FIKA", clue: "A Swedish coffee break.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🇸🇪❄️🚢", answer: "STOCKHOLM" }
      ],
      scramble: [
        { letters: "HOLMSTOCK", answer: "STOCKHOLM" }
      ]
    }
  },
  {
    id: "vol07-prague",
    slug: "prague",
    city: "Prague",
    country: "Czech Republic",
    category: "city",
    coordinates: { lat: 50.0755, lng: 14.4378 },
    purchaseLink: "https://atglobe.gumroad.com/l/the-young-globetrotters-prague",
    price: "€4.99",
    image: "https://picsum.photos/seed/prague/800/1000",
    description: "Step into a fairytale in Prague! Walk across Charles Bridge, explore Prague Castle, and watch the Astronomical Clock strike the hour.",
    quizzes: {
      geography: {
        question: "Which river flows through Prague?",
        options: ["Danube", "Vltava", "Elbe", "Oder"],
        correct: 1
      },
      culture: {
        question: "What is the name of the famous bridge with many statues?",
        options: ["London Bridge", "Charles Bridge", "Golden Gate", "Rialto"],
        correct: 1
      },
      food: {
        question: "What is a popular sweet pastry in Prague?",
        options: ["Trdelník", "Baklava", "Cannoli", "Eclair"],
        correct: 0
      }
    },
    games: {
      crossword: {
        words: [
          { word: "CASTLE", clue: "The big building on the hill.", orientation: 'across' },
          { word: "CLOCK", clue: "It shows the stars and time.", orientation: 'across' },
          { word: "BRIDGE", clue: "The stone path over the river.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🏰🌉🇨🇿", answer: "PRAGUE" }
      ],
      scramble: [
        { letters: "GUEPRA", answer: "PRAGUE" }
      ]
    }
  },
  {
    id: "vol08-athens",
    slug: "athens",
    city: "Athens",
    country: "Greece",
    category: "city",
    coordinates: { lat: 37.9838, lng: 23.7275 },
    purchaseLink: "https://atglobe.gumroad.com/l/jlpsxh",
    price: "€4.99",
    image: "https://picsum.photos/seed/athens/800/1000",
    description: "Travel back in time to ancient Athens! Climb the Acropolis to see the Parthenon, explore the Plaka district, and learn about Greek mythology.",
    quizzes: {
      geography: {
        question: "Athens is the capital of which country?",
        options: ["Italy", "Greece", "Turkey", "Egypt"],
        correct: 1
      },
      culture: {
        question: "What is the name of the ancient temple on the Acropolis?",
        options: ["Parthenon", "Pantheon", "Colosseum", "Pyramid"],
        correct: 0
      },
      food: {
        question: "What is a famous Greek dip made with yogurt and cucumber?",
        options: ["Hummus", "Tzatziki", "Guacamole", "Salsa"],
        correct: 1
      }
    },
    games: {
      crossword: {
        words: [
          { word: "GREECE", clue: "The country of Athens.", orientation: 'across' },
          { word: "TEMPLE", clue: "An ancient holy building.", orientation: 'across' },
          { word: "OLIVE", clue: "A small fruit from here.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🏛️🇬🇷🏺", answer: "ATHENS" }
      ],
      scramble: [
        { letters: "THENSA", answer: "ATHENS" }
      ]
    }
  },
  {
    id: "vol09-berlin",
    slug: "berlin",
    city: "Berlin",
    country: "Germany",
    category: "city",
    coordinates: { lat: 52.5200, lng: 13.4050 },
    purchaseLink: "https://atglobe.gumroad.com/l/the-young-globetrotters-berlin",
    price: "€4.99",
    image: "https://picsum.photos/seed/berlin/800/1000",
    description: "Discover the history and creativity of Berlin! See the Brandenburg Gate, visit Museum Island, and learn about the Berlin Wall.",
    quizzes: {
      geography: {
        question: "Berlin is the capital of which country?",
        options: ["Austria", "Germany", "Poland", "Belgium"],
        correct: 1
      },
      culture: {
        question: "What is the name of the famous gate in Berlin?",
        options: ["Golden Gate", "Brandenburg Gate", "Lion Gate", "India Gate"],
        correct: 1
      },
      food: {
        question: "What is a popular street food in Berlin?",
        options: ["Currywurst", "Taco", "Sushi", "Pizza"],
        correct: 0
      }
    },
    games: {
      crossword: {
        words: [
          { word: "WALL", clue: "It used to divide the city.", orientation: 'across' },
          { word: "GATE", clue: "The Brandenburg landmark.", orientation: 'across' },
          { word: "BEAR", clue: "The symbol of Berlin.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🇩🇪🥨🐻", answer: "BERLIN" }
      ],
      scramble: [
        { letters: "LINBER", answer: "BERLIN" }
      ]
    }
  },
  {
    id: "vol10-vienna",
    slug: "vienna",
    city: "Vienna",
    country: "Austria",
    category: "city",
    coordinates: { lat: 48.2082, lng: 16.3738 },
    purchaseLink: "https://atglobe.gumroad.com/l/the-young-globetrotters-vienna",
    price: "€4.99",
    image: "https://picsum.photos/seed/vienna/800/1000",
    description: "Enjoy the elegance of Vienna! Visit Schönbrunn Palace, listen to classical music, and taste the famous Sachertorte cake.",
    quizzes: {
      geography: {
        question: "Which river flows through Vienna?",
        options: ["Rhine", "Danube", "Elbe", "Seine"],
        correct: 1
      },
      culture: {
        question: "Vienna is famous for which type of music?",
        options: ["Jazz", "Classical", "Rock", "Reggae"],
        correct: 1
      },
      food: {
        question: "What is a famous chocolate cake from Vienna?",
        options: ["Cheesecake", "Sachertorte", "Brownie", "Tiramisu"],
        correct: 1
      }
    },
    games: {
      crossword: {
        words: [
          { word: "PALACE", clue: "A grand royal home.", orientation: 'across' },
          { word: "MUSIC", clue: "Vienna is the city of this.", orientation: 'across' },
          { word: "CAKE", clue: "Sachertorte is a type of.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🇦🇹🎻🍰", answer: "VIENNA" }
      ],
      scramble: [
        { letters: "NAVIEN", answer: "VIENNA" }
      ]
    }
  },
  {
    id: "vol11-lisbon",
    slug: "lisbon",
    city: "Lisbon",
    country: "Portugal",
    category: "city",
    coordinates: { lat: 38.7223, lng: -9.1393 },
    purchaseLink: "https://atglobe.gumroad.com/l/rxddr",
    price: "€4.99",
    image: "https://picsum.photos/seed/lisbon/800/1000",
    description: "Explore the sunny hills of Lisbon! Ride the yellow trams, visit Belém Tower, and enjoy a Pastel de Nata custard tart.",
    quizzes: {
      geography: {
        question: "Lisbon is located on the coast of which ocean?",
        options: ["Pacific", "Indian", "Atlantic", "Arctic"],
        correct: 2
      },
      culture: {
        question: "What is the name of the famous yellow transport in Lisbon?",
        options: ["Bus", "Tram", "Subway", "Gondola"],
        correct: 1
      },
      food: {
        question: "What is a famous Portuguese custard tart?",
        options: ["Pastel de Nata", "Baklava", "Cannoli", "Eclair"],
        correct: 0
      }
    },
    games: {
      crossword: {
        words: [
          { word: "TRAM", clue: "The yellow hill climber.", orientation: 'across' },
          { word: "TOWER", clue: "The Belém landmark.", orientation: 'across' },
          { word: "OCEAN", clue: "Lisbon is by the Atlantic.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🇵🇹🚋🥧", answer: "LISBON" }
      ],
      scramble: [
        { letters: "BONLIS", answer: "LISBON" }
      ]
    }
  },
  {
    id: "vol12-dublin",
    slug: "dublin",
    city: "Dublin",
    country: "Ireland",
    category: "city",
    coordinates: { lat: 53.3498, lng: -6.2603 },
    purchaseLink: "https://atglobe.gumroad.com/l/the-young-globetrotters-dublin",
    price: "€4.99",
    image: "https://picsum.photos/seed/dublin/800/1000",
    description: "Discover the magic of Dublin! Visit Trinity College, explore Phoenix Park, and learn about Irish folklore and leprechauns.",
    quizzes: {
      geography: {
        question: "Ireland is often called the what Isle?",
        options: ["Blue", "Emerald", "Golden", "Silver"],
        correct: 1
      },
      culture: {
        question: "What is a famous mythical creature from Irish folklore?",
        options: ["Dragon", "Leprechaun", "Unicorn", "Mermaid"],
        correct: 1
      },
      food: {
        question: "What is a traditional Irish potato dish?",
        options: ["Colcannon", "Pasta", "Rice", "Taco"],
        correct: 0
      }
    },
    games: {
      crossword: {
        words: [
          { word: "GREEN", clue: "The color of Ireland.", orientation: 'across' },
          { word: "HARP", clue: "A musical symbol of Ireland.", orientation: 'across' },
          { word: "BOOK", clue: "The Book of Kells is here.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🇮🇪🍀🏰", answer: "DUBLIN" }
      ],
      scramble: [
        { letters: "LINDUB", answer: "DUBLIN" }
      ]
    }
  },
  {
    id: "vol13-edinburgh",
    slug: "edinburgh",
    city: "Edinburgh",
    country: "Scotland",
    category: "city",
    coordinates: { lat: 55.9533, lng: -3.1883 },
    purchaseLink: "https://atglobe.gumroad.com/l/the-young-globetrotters-edinburgh",
    price: "€4.99",
    image: "https://picsum.photos/seed/edinburgh/800/1000",
    description: "Explore the historic capital of Scotland! Visit Edinburgh Castle, walk the Royal Mile, and learn about the Loch Ness Monster.",
    quizzes: {
      geography: {
        question: "Edinburgh is the capital of which country?",
        options: ["Wales", "Scotland", "England", "Ireland"],
        correct: 1
      },
      culture: {
        question: "What is the name of the famous castle in the city center?",
        options: ["Edinburgh Castle", "Windsor Castle", "Stirling Castle", "Balmoral"],
        correct: 0
      },
      food: {
        question: "What is a traditional Scottish savory pudding?",
        options: ["Haggis", "Pizza", "Sushi", "Taco"],
        correct: 0
      }
    },
    games: {
      crossword: {
        words: [
          { word: "CASTLE", clue: "The big fort on the rock.", orientation: 'across' },
          { word: "KILT", clue: "Traditional Scottish skirt.", orientation: 'across' },
          { word: "PIPES", clue: "Bagpipes make loud music.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🏴󠁧󠁢󠁳󠁣󠁴󠁿🏰🐉", answer: "EDINBURGH" }
      ],
      scramble: [
        { letters: "BURGHEDIN", answer: "EDINBURGH" }
      ]
    }
  },
  {
    id: "vol14-santorini",
    slug: "santorini",
    city: "Santorini",
    country: "Greece",
    category: "nature",
    coordinates: { lat: 36.3932, lng: 25.4615 },
    price: "€4.99",
    image: "https://picsum.photos/seed/santorini/800/1000",
    description: "See the blue domes and white houses of Santorini! Learn about volcanoes and enjoy the sunset over the Aegean Sea.",
    quizzes: {
      geography: {
        question: "Santorini is part of which island group?",
        options: ["Cyclades", "Ionian", "Dodecanese", "Sporades"],
        correct: 0
      },
      culture: {
        question: "What color are the famous church domes in Santorini?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correct: 1
      },
      food: {
        question: "What is a famous Greek salad ingredient?",
        options: ["Feta Cheese", "Cheddar", "Mozzarella", "Parmesan"],
        correct: 0
      }
    },
    games: {
      crossword: {
        words: [
          { word: "BLUE", clue: "The color of the domes.", orientation: 'across' },
          { word: "ISLAND", clue: "Santorini is a Greek.", orientation: 'across' },
          { word: "SEA", clue: "The Aegean is a.", orientation: 'across' }
        ]
      },
      rebus: [
        { emojis: "🇬🇷⛪🌊", answer: "SANTORINI" }
      ],
      scramble: [
        { letters: "TORINISAN", answer: "SANTORINI" }
      ]
    }
  }
];
