import { Book } from '../types';

export const BOOKS: Book[] = [
  {
    id: '1',
    slug: 'rome',
    title: 'Adventure in the Eternal City',
    city: 'Rome',
    country: 'Italy',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/vol.1%20Rome.jpg',
    description: 'Discover the Colosseum and the secrets of ancient gladiators with Axel and Tino.',
    landmarks: ['Colosseum', 'Trevi Fountain', 'Vatican Museums'],
    wildlife: ['Peregrine Falcons', 'Roman Cats'],
    culturalFacts: ['The Roman Empire', 'Gladiators'],
    recipe: {
      name: 'Pasta alla Carbonara',
      description: 'A classic Roman pasta dish with eggs, cheese, and guanciale.',
      image: 'https://picsum.photos/seed/carbonara/600/400'
    },
    foxyTransport: 'Vespa Scooter',
    learningFocus: ['History', 'Architecture'],
    externalLink: 'https://tuosito.com/rome',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    category: 'city',
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
    id: '2',
    slug: 'paris',
    title: 'Adventure in the City of Light',
    city: 'Paris',
    country: 'France',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.2%20Paris.jpg',
    description: 'An adventure between the Eiffel Tower and the scent of freshly baked croissants.',
    landmarks: ['Eiffel Tower', 'Louvre Museum', 'Notre Dame'],
    wildlife: ['Falcons of Notre Dame', 'Seine River Fish'],
    culturalFacts: ['French Revolution', 'Impressionist Art'],
    recipe: {
      name: 'Crepes Suzette',
      description: 'Sweet crepes with a delicious orange sauce.',
      image: 'https://picsum.photos/seed/crepes/600/400'
    },
    foxyTransport: 'Hot Air Balloon',
    learningFocus: ['Art', 'History'],
    externalLink: 'https://tuosito.com/paris',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    category: 'city',
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
    id: '3',
    slug: 'london',
    title: 'Adventure in the Global Metropolis',
    city: 'London',
    country: 'United Kingdom',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.3%20London.jpg',
    description: 'Solve a mystery between Big Ben and the Tower Bridge.',
    landmarks: ['Big Ben', 'Tower Bridge', 'London Eye'],
    wildlife: ['Tower Ravens', 'Thames Swans'],
    culturalFacts: ['The British Monarchy', 'Shakespeare'],
    recipe: {
      name: 'Scones with Jam',
      description: 'Traditional British tea-time treats.',
      image: 'https://picsum.photos/seed/scones/600/400'
    },
    foxyTransport: 'Double-Decker Bus',
    learningFocus: ['Culture', 'Geography'],
    externalLink: 'https://tuosito.com/london',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    category: 'city',
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
    id: '4',
    slug: 'barcelona',
    title: 'Adventure in the Vibrant Catalan City',
    city: 'Barcelona',
    country: 'Spain',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.4%20Barcelona.jpg',
    description: 'Explore the colorful world of Gaudí and the lively Las Ramblas.',
    landmarks: ['Sagrada Família', 'Park Güell', 'Las Ramblas'],
    wildlife: ['Mediterranean Gulls', 'Monk Parakeets'],
    culturalFacts: ['Antoni Gaudí', 'Catalan Traditions'],
    recipe: {
      name: 'Spanish Paella',
      description: 'A famous rice dish from the coast of Spain.',
      image: 'https://picsum.photos/seed/paella/600/400'
    },
    foxyTransport: 'Skateboard',
    learningFocus: ['Architecture', 'Art'],
    externalLink: 'https://tuosito.com/barcelona',
    coordinates: { lat: 41.3851, lng: 2.1734 },
    category: 'city',
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
    id: '5',
    slug: 'amsterdam',
    title: 'Adventure in the City of Canals',
    city: 'Amsterdam',
    country: 'Netherlands',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.5%20Amsterdam.jpg',
    description: 'Bike along the canals and discover the house of Anne Frank.',
    landmarks: ['Canal Ring', 'Anne Frank House', 'Rijksmuseum'],
    wildlife: ['Canal Herons', 'Dutch Rabbits'],
    culturalFacts: ['The Golden Age', 'Bicycle Culture'],
    recipe: {
      name: 'Dutch Stroopwafels',
      description: 'Thin waffle cookies with caramel syrup.',
      image: 'https://picsum.photos/seed/stroopwafel/600/400'
    },
    foxyTransport: 'Bicycle',
    learningFocus: ['Engineering', 'History'],
    externalLink: 'https://tuosito.com/amsterdam',
    coordinates: { lat: 52.3676, lng: 4.9041 },
    category: 'city',
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
    id: '6',
    slug: 'stockholm',
    title: 'Adventure in the Venice of the North',
    city: 'Stockholm',
    country: 'Sweden',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.6%20Stockholm.jpg',
    description: 'Explore the archipelago and the historic Gamla Stan.',
    landmarks: ['Vasa Museum', 'Gamla Stan', 'Royal Palace'],
    wildlife: ['Baltic Seals', 'Arctic Terns'],
    culturalFacts: ['Viking Heritage', 'Nobel Prize'],
    recipe: {
      name: 'Swedish Meatballs',
      description: 'Classic meatballs served with lingonberry jam.',
      image: 'https://picsum.photos/seed/meatballs/600/400'
    },
    foxyTransport: 'Speedboat',
    learningFocus: ['History', 'Geography'],
    externalLink: 'https://tuosito.com/stockholm',
    coordinates: { lat: 59.3293, lng: 18.0686 },
    category: 'city',
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
    id: '7',
    slug: 'prague',
    title: 'Adventure in the City of a Hundred Spires',
    city: 'Prague',
    country: 'Czech Republic',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.7%20Prague.jpg',
    description: 'Cross the Charles Bridge and visit the largest ancient castle in the world.',
    landmarks: ['Charles Bridge', 'Prague Castle', 'Astronomical Clock'],
    wildlife: ['Vltava Swans', 'Bohemian Deer'],
    culturalFacts: ['Legends of the Golem', 'Medieval History'],
    recipe: {
      name: 'Trdelník Pastry',
      description: 'A sweet spit cake topped with sugar and walnuts.',
      image: 'https://picsum.photos/seed/trdelnik/600/400'
    },
    foxyTransport: 'Vintage Car',
    learningFocus: ['History', 'Legends'],
    externalLink: 'https://tuosito.com/prague',
    coordinates: { lat: 50.0755, lng: 14.4378 },
    category: 'city',
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
    id: '8',
    slug: 'athens',
    title: 'Adventure in the Cradle of Civilization',
    city: 'Athens',
    country: 'Greece',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.8%20Athens.jpg',
    description: 'Climb the Acropolis and learn about the ancient Greek gods.',
    landmarks: ['Acropolis', 'Parthenon', 'Plaka District'],
    wildlife: ['Greek Tortoises', 'Cicadas'],
    culturalFacts: ['Birth of Democracy', 'Greek Mythology'],
    recipe: {
      name: 'Greek Moussaka',
      description: 'A layered eggplant and meat dish.',
      image: 'https://picsum.photos/seed/moussaka/600/400'
    },
    foxyTransport: 'Chariot',
    learningFocus: ['History', 'Philosophy'],
    externalLink: 'https://tuosito.com/athens',
    coordinates: { lat: 37.9838, lng: 23.7275 },
    category: 'city',
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
    id: '9',
    slug: 'berlin',
    title: 'Adventure in the City of Freedom',
    city: 'Berlin',
    country: 'Germany',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.9%20Berlin.jpg',
    description: 'See the remains of the Berlin Wall and the Brandenburg Gate.',
    landmarks: ['Brandenburg Gate', 'Berlin Wall', 'Reichstag'],
    wildlife: ['Berlin Bears', 'Urban Foxes'],
    culturalFacts: ['Reunification', 'Modern Art'],
    recipe: {
      name: 'Currywurst',
      description: 'Steamed, then fried pork sausage with curry ketchup.',
      image: 'https://picsum.photos/seed/currywurst/600/400'
    },
    foxyTransport: 'Trabant Car',
    learningFocus: ['History', 'Politics'],
    externalLink: 'https://tuosito.com/berlin',
    coordinates: { lat: 52.5200, lng: 13.4050 },
    category: 'city',
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
    id: '10',
    slug: 'vienna',
    title: 'Adventure in the City of Music',
    city: 'Vienna',
    country: 'Austria',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.10%20Vienna.jpg',
    description: 'Visit the Schönbrunn Palace and listen to the music of Mozart.',
    landmarks: ['Schönbrunn Palace', 'St. Stephen\'s Cathedral', 'Prater'],
    wildlife: ['Lipizzaner Horses', 'Danube Beavers'],
    culturalFacts: ['Classical Music', 'Coffee House Culture'],
    recipe: {
      name: 'Sachertorte',
      description: 'A famous chocolate cake with apricot jam.',
      image: 'https://picsum.photos/seed/sachertorte/600/400'
    },
    foxyTransport: 'Horse Carriage',
    learningFocus: ['Music', 'History'],
    externalLink: 'https://tuosito.com/vienna',
    coordinates: { lat: 48.2082, lng: 16.3738 },
    category: 'city',
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
    id: '11',
    slug: 'lisbon',
    title: 'Adventure in the City of Explorers',
    city: 'Lisbon',
    country: 'Portugal',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.11%20Lisbon.jpg',
    description: 'Ride the yellow trams and discover the Belém Tower.',
    landmarks: ['Belém Tower', 'Jerónimos Monastery', 'Alfama'],
    wildlife: ['Atlantic Dolphins', 'Iberian Lynx'],
    culturalFacts: ['Age of Discovery', 'Fado Music'],
    recipe: {
      name: 'Pastéis de Nata',
      description: 'Traditional Portuguese custard tarts.',
      image: 'https://picsum.photos/seed/pasteis/600/400'
    },
    foxyTransport: 'Yellow Tram',
    learningFocus: ['History', 'Exploration'],
    externalLink: 'https://tuosito.com/lisbon',
    coordinates: { lat: 38.7223, lng: -9.1393 },
    category: 'city',
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
    id: '12',
    slug: 'dublin',
    title: 'Adventure in the Fair City',
    city: 'Dublin',
    country: 'Ireland',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.12%20Dublin.jpg',
    description: 'Explore the Trinity College library and the green Phoenix Park.',
    landmarks: ['Trinity College', 'Phoenix Park', 'Dublin Castle'],
    wildlife: ['Fallow Deer', 'Irish Hares'],
    culturalFacts: ['Book of Kells', 'Celtic Mythology'],
    recipe: {
      name: 'Irish Soda Bread',
      description: 'A quick bread made with baking soda.',
      image: 'https://picsum.photos/seed/sodabread/600/400'
    },
    foxyTransport: 'Bicycle',
    learningFocus: ['Literature', 'History'],
    externalLink: 'https://tuosito.com/dublin',
    coordinates: { lat: 53.3498, lng: -6.2603 },
    category: 'city',
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
    id: '13',
    slug: 'edinburgh',
    title: 'Adventure in the Historic Capital',
    city: 'Edinburgh',
    country: 'Scotland',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.13%20Edinburgh.jpg',
    description: 'Visit the Edinburgh Castle and walk the Royal Mile.',
    landmarks: ['Edinburgh Castle', 'Royal Mile', 'Arthur\'s Seat'],
    wildlife: ['Highland Cows', 'Puffins'],
    culturalFacts: ['Scottish Clans', 'Harry Potter Inspiration'],
    recipe: {
      name: 'Shortbread Cookies',
      description: 'Buttery Scottish biscuits.',
      image: 'https://picsum.photos/seed/shortbread/600/400'
    },
    foxyTransport: 'Steam Train',
    learningFocus: ['History', 'Geology'],
    externalLink: 'https://tuosito.com/edinburgh',
    coordinates: { lat: 55.9533, lng: -3.1883 },
    category: 'city',
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
    id: '14',
    slug: 'budapest',
    title: 'Adventure in the Pearl of the Danube',
    city: 'Budapest',
    country: 'Hungary',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.14%20Budapest.jpg',
    description: 'Relax in the thermal baths and see the Parliament building.',
    landmarks: ['Hungarian Parliament', 'Chain Bridge', 'Buda Castle'],
    wildlife: ['Danube Fish', 'Hungarian Grey Cattle'],
    culturalFacts: ['Thermal Bath Tradition', 'Invention of Rubik\'s Cube'],
    recipe: {
      name: 'Hungarian Goulash',
      description: 'A hearty meat and vegetable stew.',
      image: 'https://picsum.photos/seed/goulash/600/400'
    },
    foxyTransport: 'River Boat',
    learningFocus: ['History', 'Architecture'],
    externalLink: 'https://tuosito.com/budapest',
    coordinates: { lat: 47.4979, lng: 19.0402 },
    category: 'city'
  },
  {
    id: '15',
    slug: 'copenhagen',
    title: 'Adventure in the City of Fairytales',
    city: 'Copenhagen',
    country: 'Denmark',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.15%20Copenhagen.jpg',
    description: 'Meet the Little Mermaid and have fun at Tivoli Gardens.',
    landmarks: ['Little Mermaid Statue', 'Tivoli Gardens', 'Nyhavn'],
    wildlife: ['Danish Mute Swans', 'Red Squirrels'],
    culturalFacts: ['Hans Christian Andersen', 'Hygge Concept'],
    recipe: {
      name: 'Danish Smørrebrød',
      description: 'Traditional open-faced sandwiches.',
      image: 'https://picsum.photos/seed/smorrebrod/600/400'
    },
    foxyTransport: 'Cargo Bike',
    learningFocus: ['Literature', 'Design'],
    externalLink: 'https://tuosito.com/copenhagen',
    coordinates: { lat: 55.6761, lng: 12.5683 },
    category: 'city'
  },
  {
    id: '16',
    slug: 'oslo',
    title: 'Adventure in the Green Capital',
    city: 'Oslo',
    country: 'Norway',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.16%20Oslo.jpg',
    description: 'Visit the Viking Ship Museum and the Vigeland Park.',
    landmarks: ['Viking Ship Museum', 'Vigeland Park', 'Opera House'],
    wildlife: ['Moose', 'Norwegian Forest Cats'],
    culturalFacts: ['Viking History', 'Nobel Peace Prize'],
    recipe: {
      name: 'Norwegian Waffles',
      description: 'Heart-shaped waffles served with brown cheese.',
      image: 'https://picsum.photos/seed/waffles/600/400'
    },
    foxyTransport: 'Electric Car',
    learningFocus: ['History', 'Environment'],
    externalLink: 'https://tuosito.com/oslo',
    coordinates: { lat: 59.9139, lng: 10.7522 },
    category: 'city'
  },
  {
    id: '17',
    slug: 'helsinki',
    title: 'Adventure in the Daughter of the Baltic',
    city: 'Helsinki',
    country: 'Finland',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.17%20Helsinki.jpg',
    description: 'Explore the Suomenlinna fortress and the Market Square.',
    landmarks: ['Suomenlinna', 'Helsinki Cathedral', 'Market Square'],
    wildlife: ['Saimaa Ringed Seals', 'Reindeer'],
    culturalFacts: ['Finnish Design', 'Sauna Culture'],
    recipe: {
      name: 'Karelian Pies',
      description: 'Traditional rye crust pies with rice porridge.',
      image: 'https://picsum.photos/seed/karelian/600/400'
    },
    foxyTransport: 'Icebreaker Ship',
    learningFocus: ['Design', 'History'],
    externalLink: 'https://tuosito.com/helsinki',
    coordinates: { lat: 60.1699, lng: 24.9384 },
    category: 'city'
  },
  {
    id: '18',
    slug: 'reykjavik',
    title: 'Adventure in the Geothermal City',
    city: 'Reykjavik',
    country: 'Iceland',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.18%20Reykjavik.jpg',
    description: 'See the Northern Lights and the Hallgrímskirkja church.',
    landmarks: ['Hallgrímskirkja', 'Blue Lagoon', 'Harpa Concert Hall'],
    wildlife: ['Puffins', 'Arctic Foxes'],
    culturalFacts: ['Volcanic Origins', 'Icelandic Sagas'],
    recipe: {
      name: 'Icelandic Skyr with Berries',
      description: 'A thick and creamy Icelandic dairy product.',
      image: 'https://picsum.photos/seed/skyr/600/400'
    },
    foxyTransport: '4x4 Jeep',
    learningFocus: ['Geology', 'Nature'],
    externalLink: 'https://tuosito.com/reykjavik',
    coordinates: { lat: 64.1466, -21.9426 },
    category: 'city'
  },
  {
    id: '19',
    slug: 'istanbul',
    title: 'Adventure at the Crossroads of Continents',
    city: 'Istanbul',
    country: 'Turkey',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.19%20Istanbul.jpg',
    description: 'Visit the Hagia Sophia and the Grand Bazaar.',
    landmarks: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar'],
    wildlife: ['Istanbul Street Cats', 'Bosphorus Dolphins'],
    culturalFacts: ['Byzantine Empire', 'Ottoman Empire'],
    recipe: {
      name: 'Turkish Baklava',
      description: 'Sweet pastry made of layers of filo filled with nuts.',
      image: 'https://picsum.photos/seed/baklava/600/400'
    },
    foxyTransport: 'Ferry',
    learningFocus: ['History', 'Geography'],
    externalLink: 'https://tuosito.com/istanbul',
    coordinates: { lat: 41.0082, lng: 28.9784 },
    category: 'city'
  },
  {
    id: '20',
    slug: 'saint-petersburg',
    title: 'Adventure in the Imperial City',
    city: 'Saint Petersburg',
    country: 'Russia',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.20%20Saint%20Petersburg.jpg',
    description: 'Explore the Hermitage Museum and the Peter and Paul Fortress.',
    landmarks: ['Hermitage Museum', 'Church of the Savior on Spilled Blood', 'Peterhof Palace'],
    wildlife: ['Siberian Tigers', 'Hermitage Cats'],
    culturalFacts: ['Reign of the Tsars', 'White Nights'],
    recipe: {
      name: 'Russian Blini',
      description: 'Thin pancakes served with various fillings.',
      image: 'https://picsum.photos/seed/blini/600/400'
    },
    foxyTransport: 'Troika Sled',
    learningFocus: ['Art', 'History'],
    externalLink: 'https://tuosito.com/saint-petersburg',
    coordinates: { lat: 59.9343, lng: 30.3351 },
    category: 'city'
  },
  {
    id: '21',
    slug: 'new-york',
    title: 'Adventure in the Big Apple',
    city: 'New York',
    country: 'USA',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.21%20New%20York.jpg',
    description: 'The city that never sleeps, from Central Park to Times Square.',
    landmarks: ['Statue of Liberty', 'Empire State Building', 'Central Park'],
    wildlife: ['Central Park Raccoons', 'Peregrine Falcons'],
    culturalFacts: ['Ellis Island', 'Broadway'],
    recipe: {
      name: 'New York Cheesecake',
      description: 'A rich and creamy chocolate-free cake.',
      image: 'https://picsum.photos/seed/cheesecake/600/400'
    },
    foxyTransport: 'Yellow Taxi',
    learningFocus: ['History', 'Urbanization'],
    externalLink: 'https://tuosito.com/new-york',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    category: 'city'
  },
  {
    id: '22',
    slug: 'toronto',
    title: 'Adventure in the Dynamic Metropolis',
    city: 'Toronto',
    country: 'Canada',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.22%20Toronto.jpg',
    description: 'Climb the CN Tower and explore the Distillery District.',
    landmarks: ['CN Tower', 'Royal Ontario Museum', 'Distillery District'],
    wildlife: ['Canada Geese', 'Black Squirrels'],
    culturalFacts: ['Multiculturalism', 'Indigenous History'],
    recipe: {
      name: 'Poutine',
      description: 'French fries and cheese curds topped with brown gravy.',
      image: 'https://picsum.photos/seed/poutine/600/400'
    },
    foxyTransport: 'Streetcar',
    learningFocus: ['Geography', 'Culture'],
    externalLink: 'https://tuosito.com/toronto',
    coordinates: { lat: 43.6532, lng: -79.3832 },
    category: 'city'
  },
  {
    id: '23',
    slug: 'chicago',
    title: 'Adventure in the Windy City',
    city: 'Chicago',
    country: 'USA',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.23%20Chicago.jpg',
    description: 'See the "Bean" in Millennium Park and visit the Navy Pier.',
    landmarks: ['Millennium Park', 'Willis Tower', 'Navy Pier'],
    wildlife: ['Lake Michigan Perch', 'Coyotes'],
    culturalFacts: ['Great Chicago Fire', 'Modern Architecture'],
    recipe: {
      name: 'Deep Dish Pizza',
      description: 'A thick pizza with high edges and lots of cheese.',
      image: 'https://picsum.photos/seed/deepdish/600/400'
    },
    foxyTransport: 'L-Train',
    learningFocus: ['Architecture', 'History'],
    externalLink: 'https://tuosito.com/chicago',
    coordinates: { lat: 41.8781, lng: -87.6298 },
    category: 'city'
  },
  {
    id: '24',
    slug: 'rio-de-janeiro',
    title: 'Adventure in the Marvelous City',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.24%20Rio%20de%20Janeiro%20(1).jpg',
    description: 'Visit Christ the Redeemer and relax on Copacabana beach.',
    landmarks: ['Christ the Redeemer', 'Sugarloaf Mountain', 'Copacabana'],
    wildlife: ['Toucans', 'Marmosets'],
    culturalFacts: ['Carnival', 'Samba Music'],
    recipe: {
      name: 'Pão de Queijo',
      description: 'Brazilian cheese bread balls.',
      image: 'https://picsum.photos/seed/paodequeijo/600/400'
    },
    foxyTransport: 'Hang Glider',
    learningFocus: ['Culture', 'Geography'],
    externalLink: 'https://tuosito.com/rio-de-janeiro',
    coordinates: { lat: -22.9068, lng: -43.1729 },
    category: 'city'
  },
  {
    id: '25',
    slug: 'mexico-city',
    title: 'Adventure in the Heart of Mexico',
    city: 'Mexico City',
    country: 'Mexico',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.25%20Mexico%20City.jpg',
    description: 'Explore the ancient Aztec ruins and the colorful Xochimilco canals.',
    landmarks: ['Zócalo', 'Teotihuacan Pyramids', 'Xochimilco'],
    wildlife: ['Axolotls', 'Monarch Butterflies'],
    culturalFacts: ['Aztec Empire', 'Day of the Dead'],
    recipe: {
      name: 'Tacos al Pastor',
      description: 'Tacos made with spit-grilled pork.',
      image: 'https://picsum.photos/seed/tacos/600/400'
    },
    foxyTransport: 'Trajinera Boat',
    learningFocus: ['History', 'Archaeology'],
    externalLink: 'https://tuosito.com/mexico-city',
    coordinates: { lat: 19.4326, lng: -99.1332 },
    category: 'city'
  },
  {
    id: '26',
    slug: 'patagonia',
    title: 'Adventure in the Untamed Wilderness',
    city: 'Patagonia',
    country: 'Argentina/Chile',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.26%20Patagonia.jpg',
    description: 'See the Perito Moreno Glacier and the peaks of Torres del Paine.',
    landmarks: ['Perito Moreno Glacier', 'Torres del Paine', 'Fitz Roy'],
    wildlife: ['Guanacos', 'Andean Condors'],
    culturalFacts: ['Gaucho Culture', 'Glacial Geology'],
    recipe: {
      name: 'Argentine Empanadas',
      description: 'Baked or fried pastry turnovers filled with meat.',
      image: 'https://picsum.photos/seed/empanadas/600/400'
    },
    foxyTransport: 'Horse',
    learningFocus: ['Geology', 'Wildlife'],
    externalLink: 'https://tuosito.com/patagonia',
    coordinates: { lat: -50.3200, lng: -72.3300 },
    category: 'nature'
  },
  {
    id: '27',
    slug: 'machu-picchu',
    title: 'Adventure in the Lost City of the Incas',
    city: 'Machu Picchu',
    country: 'Peru',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.27%20Machu%20Picchu.jpg',
    description: 'Hike the Inca Trail and discover the secrets of the Andes.',
    landmarks: ['Machu Picchu Ruins', 'Sacred Valley', 'Cusco'],
    wildlife: ['Llamas', 'Spectacled Bears'],
    culturalFacts: ['Inca Empire', 'Quechua Language'],
    recipe: {
      name: 'Peruvian Ceviche',
      description: 'Fresh raw fish cured in citrus juices.',
      image: 'https://picsum.photos/seed/ceviche/600/400'
    },
    foxyTransport: 'Llama',
    learningFocus: ['History', 'Archaeology'],
    externalLink: 'https://tuosito.com/machu-picchu',
    coordinates: { lat: -13.1631, lng: -72.5450 },
    category: 'special'
  },
  {
    id: '28',
    slug: 'miami',
    title: 'Adventure in the Magic City',
    city: 'Miami',
    country: 'USA',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.28%20Miami.jpg',
    description: 'Enjoy the Art Deco district and the Everglades National Park.',
    landmarks: ['South Beach', 'Art Deco District', 'Everglades'],
    wildlife: ['Alligators', 'Manatees'],
    culturalFacts: ['Cuban Influence', 'Art Deco Architecture'],
    recipe: {
      name: 'Key Lime Pie',
      description: 'A sweet and tart dessert made with lime juice.',
      image: 'https://picsum.photos/seed/keylime/600/400'
    },
    foxyTransport: 'Airboat',
    learningFocus: ['Environment', 'Architecture'],
    externalLink: 'https://tuosito.com/miami',
    coordinates: { lat: 25.7617, lng: -80.1918 },
    category: 'city'
  },
  {
    id: '29',
    slug: 'vancouver',
    title: 'Adventure in the Gateway to the Pacific',
    city: 'Vancouver',
    country: 'Canada',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.29%20Vancouver.jpg',
    description: 'Walk across the Capilano Suspension Bridge and explore Stanley Park.',
    landmarks: ['Stanley Park', 'Capilano Suspension Bridge', 'Granville Island'],
    wildlife: ['Orcas', 'Bald Eagles'],
    culturalFacts: ['First Nations History', 'Pacific Gateway'],
    recipe: {
      name: 'Nanaimo Bars',
      description: 'A no-bake dessert bar with custard and chocolate.',
      image: 'https://picsum.photos/seed/nanaimo/600/400'
    },
    foxyTransport: 'Seaplane',
    learningFocus: ['Geography', 'Nature'],
    externalLink: 'https://tuosito.com/vancouver',
    coordinates: { lat: 49.2827, lng: -123.1207 },
    category: 'city'
  },
  {
    id: '30',
    slug: 'san-francisco',
    title: 'Adventure in the City by the Bay',
    city: 'San Francisco',
    country: 'USA',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.30%20San%20Francisco.jpg',
    description: 'Cross the Golden Gate Bridge and ride the historic cable cars.',
    landmarks: ['Golden Gate Bridge', 'Alcatraz Island', 'Fisherman\'s Wharf'],
    wildlife: ['Sea Lions', 'Monarch Butterflies'],
    culturalFacts: ['Gold Rush', 'Tech Revolution'],
    recipe: {
      name: 'Sourdough Bread',
      description: 'Bread made by the fermentation of dough.',
      image: 'https://picsum.photos/seed/sourdough/600/400'
    },
    foxyTransport: 'Cable Car',
    learningFocus: ['History', 'Technology'],
    externalLink: 'https://tuosito.com/san-francisco',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    category: 'city'
  },
  {
    id: '31',
    slug: 'tokyo',
    title: 'Adventure in the Neon Metropolis',
    city: 'Tokyo',
    country: 'Japan',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.31%20Tokyo.jpg',
    description: 'Between bright skyscrapers, ancient temples, and futuristic robots.',
    landmarks: ['Shibuya Crossing', 'Tokyo Tower', 'Senso-ji Temple'],
    wildlife: ['Japanese Macaques', 'Koi Fish'],
    culturalFacts: ['Samurai Culture', 'Anime & Manga'],
    recipe: {
      name: 'Fun Onigiri',
      description: 'Rice balls shaped like characters.',
      image: 'https://picsum.photos/seed/onigiri/600/400'
    },
    foxyTransport: 'Bullet Train',
    learningFocus: ['Technology', 'Tradition'],
    externalLink: 'https://tuosito.com/tokyo',
    coordinates: { lat: 35.6762, lng: 139.6503 },
    category: 'city'
  },
  {
    id: '32',
    slug: 'kyoto',
    title: 'Adventure in the Ancient Capital',
    city: 'Kyoto',
    country: 'Japan',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.32%20Kyoto.jpg',
    description: 'Visit the Golden Pavilion and the Fushimi Inari Shrine.',
    landmarks: ['Kinkaku-ji', 'Fushimi Inari Shrine', 'Gion District'],
    wildlife: ['Japanese Cranes', 'Sika Deer'],
    culturalFacts: ['Geisha Tradition', 'Tea Ceremony'],
    recipe: {
      name: 'Matcha Green Tea Cookies',
      description: 'Cookies flavored with powdered green tea.',
      image: 'https://picsum.photos/seed/matcha/600/400'
    },
    foxyTransport: 'Rickshaw',
    learningFocus: ['History', 'Culture'],
    externalLink: 'https://tuosito.com/kyoto',
    coordinates: { lat: 35.0116, lng: 135.7681 },
    category: 'city'
  },
  {
    id: '33',
    slug: 'bali',
    title: 'Adventure in the Island of the Gods',
    city: 'Bali',
    country: 'Indonesia',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.33%20Bali.jpg',
    description: 'Explore the rice terraces and the beautiful beaches of Uluwatu.',
    landmarks: ['Uluwatu Temple', 'Tegalalang Rice Terrace', 'Ubud Monkey Forest'],
    wildlife: ['Manta Rays', 'Balinese Monkeys'],
    culturalFacts: ['Balinese Hinduism', 'Traditional Dance'],
    recipe: {
      name: 'Nasi Goreng',
      description: 'Indonesian fried rice with meat and vegetables.',
      image: 'https://picsum.photos/seed/nasigoreng/600/400'
    },
    foxyTransport: 'Scooter',
    learningFocus: ['Culture', 'Environment'],
    externalLink: 'https://tuosito.com/bali',
    coordinates: { lat: -8.3405, lng: 115.0920 },
    category: 'nature'
  },
  {
    id: '34',
    slug: 'sydney',
    title: 'Adventure in the Harbour City',
    city: 'Sydney',
    country: 'Australia',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.34%20Sydney.jpg',
    description: 'See the Sydney Opera House and climb the Harbour Bridge.',
    landmarks: ['Sydney Opera House', 'Harbour Bridge', 'Bondi Beach'],
    wildlife: ['Kangaroos', 'Koalas'],
    culturalFacts: ['Aboriginal Heritage', 'First Settlers'],
    recipe: {
      name: 'Lamingtons',
      description: 'Sponge cake coated in chocolate and coconut.',
      image: 'https://picsum.photos/seed/lamingtons/600/400'
    },
    foxyTransport: 'Surfboard',
    learningFocus: ['History', 'Geography'],
    externalLink: 'https://tuosito.com/sydney',
    coordinates: { lat: -33.8688, lng: 151.2093 },
    category: 'city'
  },
  {
    id: '35',
    slug: 'auckland',
    title: 'Adventure in the City of Sails',
    city: 'Auckland',
    country: 'New Zealand',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.35%20Auckland.jpg',
    description: 'Visit the Sky Tower and explore the volcanic cones.',
    landmarks: ['Sky Tower', 'Mount Eden', 'Waiheke Island'],
    wildlife: ['Kiwi Birds', 'Tuatara'],
    culturalFacts: ['Maori Culture', 'Pacific Exploration'],
    recipe: {
      name: 'Pavlova',
      description: 'A meringue-based dessert with fruit.',
      image: 'https://picsum.photos/seed/pavlova/600/400'
    },
    foxyTransport: 'Sailboat',
    learningFocus: ['Geology', 'Culture'],
    externalLink: 'https://tuosito.com/auckland',
    coordinates: { lat: -36.8485, lng: 174.7633 },
    category: 'city'
  },
  {
    id: '36',
    slug: 'singapore',
    title: 'Adventure in the Garden City',
    city: 'Singapore',
    country: 'Singapore',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Vol.36%20Singapore%20.jpg',
    description: 'See the Supertrees at Gardens by the Bay and the Merlion.',
    landmarks: ['Gardens by the Bay', 'Marina Bay Sands', 'Merlion Park'],
    wildlife: ['Otters', 'Hornbills'],
    culturalFacts: ['Multicultural Society', 'Trading History'],
    recipe: {
      name: 'Chicken Rice',
      description: 'Poached chicken and seasoned rice.',
      image: 'https://picsum.photos/seed/chickenrice/600/400'
    },
    foxyTransport: 'Cable Car',
    learningFocus: ['Urban Planning', 'Culture'],
    externalLink: 'https://tuosito.com/singapore',
    coordinates: { lat: 1.3521, lng: 103.8198 },
    category: 'city'
  },
  {
    id: '37',
    slug: 'seoul',
    title: 'Adventure in the Dynamic Capital',
    city: 'Seoul',
    country: 'South Korea',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.37%20Seoul.jpg',
    description: 'Visit the Gyeongbokgung Palace and the N Seoul Tower.',
    landmarks: ['Gyeongbokgung Palace', 'N Seoul Tower', 'Bukchon Hanok Village'],
    wildlife: ['Korean Magpies', 'Water Deer'],
    culturalFacts: ['Joseon Dynasty', 'K-Pop Phenomenon'],
    recipe: {
      name: 'Bibimbap',
      description: 'Mixed rice with vegetables and meat.',
      image: 'https://picsum.photos/seed/bibimbap/600/400'
    },
    foxyTransport: 'Subway',
    learningFocus: ['History', 'Technology'],
    externalLink: 'https://tuosito.com/seoul',
    coordinates: { lat: 37.5665, lng: 126.9780 },
    category: 'city'
  },
  {
    id: '38',
    slug: 'hong-kong',
    title: 'Adventure in the Pearl of the Orient',
    city: 'Hong Kong',
    country: 'China',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.38%20Hong%20Kong.jpg',
    description: 'Ride the Star Ferry and take the peak tram for a great view.',
    landmarks: ['Victoria Peak', 'Star Ferry', 'Big Buddha'],
    wildlife: ['Pink Dolphins', 'Black-faced Spoonbills'],
    culturalFacts: ['British Colony History', 'Cantonese Culture'],
    recipe: {
      name: 'Dim Sum',
      description: 'A large range of small Cantonese dishes.',
      image: 'https://picsum.photos/seed/dimsum/600/400'
    },
    foxyTransport: 'Peak Tram',
    learningFocus: ['Geography', 'History'],
    externalLink: 'https://tuosito.com/hong-kong',
    coordinates: { lat: 22.3193, lng: 114.1694 },
    category: 'city'
  },
  {
    id: '39',
    slug: 'mumbai',
    title: 'Adventure in the City of Dreams',
    city: 'Mumbai',
    country: 'India',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.39%20Mumbai.jpg',
    description: 'See the Gateway of India and explore the Elephanta Caves.',
    landmarks: ['Gateway of India', 'Marine Drive', 'Elephanta Caves'],
    wildlife: ['Leopards of Sanjay Gandhi Park', 'Flamingos'],
    culturalFacts: ['Bollywood', 'British Raj History'],
    recipe: {
      name: 'Vada Pav',
      description: 'A vegetarian fast food dish native to Maharashtra.',
      image: 'https://picsum.photos/seed/vadapav/600/400'
    },
    foxyTransport: 'Auto Rickshaw',
    learningFocus: ['Culture', 'History'],
    externalLink: 'https://tuosito.com/mumbai',
    coordinates: { lat: 19.0760, lng: 72.8777 },
    category: 'city'
  },
  {
    id: '40',
    slug: 'dubai',
    title: 'Adventure in the Futuristic Oasis',
    city: 'Dubai',
    country: 'UAE',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Vol.40%20Dubai%20.jpg',
    description: 'Climb the Burj Khalifa and visit the Palm Jumeirah.',
    landmarks: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall'],
    wildlife: ['Arabian Oryx', 'Falcons'],
    culturalFacts: ['Pearl Diving History', 'Rapid Modernization'],
    recipe: {
      name: 'Luqaimat',
      description: 'Sweet fried dough balls.',
      image: 'https://picsum.photos/seed/luqaimat/600/400'
    },
    foxyTransport: 'Supercar',
    learningFocus: ['Technology', 'Geography'],
    externalLink: 'https://tuosito.com/dubai',
    coordinates: { lat: 25.2048, lng: 55.2708 },
    category: 'city'
  },
  {
    id: '41',
    slug: 'north-pole',
    title: 'Adventure in the Top of the World',
    city: 'North Pole',
    country: 'Arctic',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.41%20North%20Pole.jpg',
    description: 'Meet the polar bears and see the endless ice.',
    landmarks: ['Magnetic North Pole', 'Ice Floes'],
    wildlife: ['Polar Bears', 'Arctic Wolves'],
    culturalFacts: ['Arctic Exploration', 'Climate Science'],
    recipe: {
      name: 'Hot Chocolate with Marshmallows',
      description: 'A warm drink for the coldest place on Earth.',
      image: 'https://picsum.photos/seed/hotchocolate/600/400'
    },
    foxyTransport: 'Dog Sled',
    learningFocus: ['Science', 'Environment'],
    externalLink: 'https://tuosito.com/north-pole',
    coordinates: { lat: 90.0000, lng: 0.0000 },
    category: 'nature'
  },
  {
    id: '42',
    slug: 'antarctic',
    title: 'Adventure in the Frozen Continent',
    city: 'Antarctic',
    country: 'Antarctica',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.42%20Antarctic.jpg',
    description: 'See the penguins and the massive icebergs.',
    landmarks: ['South Pole', 'McMurdo Station'],
    wildlife: ['Emperor Penguins', 'Weddell Seals'],
    culturalFacts: ['Scientific Cooperation', 'Heroic Age of Exploration'],
    recipe: {
      name: 'Pemmican Bars',
      description: 'A concentrated mixture of fat and protein used by explorers.',
      image: 'https://picsum.photos/seed/pemmican/600/400'
    },
    foxyTransport: 'Snowmobile',
    learningFocus: ['Science', 'History'],
    externalLink: 'https://tuosito.com/antarctic',
    coordinates: { lat: -90.0000, lng: 0.0000 },
    category: 'nature'
  },
  {
    id: '43',
    slug: 'sahara',
    title: 'Adventure in the Vast Desert Sea',
    city: 'Sahara',
    country: 'Africa',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.43%20Sahara.jpg',
    description: 'Ride a camel across the sand dunes and see the oases.',
    landmarks: ['Sand Dunes', 'Oasis', 'Ancient Trade Routes'],
    wildlife: ['Fennec Foxes', 'Dromedary Camels'],
    culturalFacts: ['Tuareg People', 'Trans-Saharan Trade'],
    recipe: {
      name: 'Couscous with Vegetables',
      description: 'A staple North African dish.',
      image: 'https://picsum.photos/seed/couscous/600/400'
    },
    foxyTransport: 'Camel',
    learningFocus: ['Geography', 'Culture'],
    externalLink: 'https://tuosito.com/sahara',
    coordinates: { lat: 23.4162, lng: 25.6628 },
    category: 'nature'
  },
  {
    id: '44',
    slug: 'outback',
    title: 'Adventure in the Rugged Heartland',
    city: 'Outback',
    country: 'Australia',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.44%20Outback.jpg',
    description: 'See Uluru and the unique wildlife of the desert.',
    landmarks: ['Uluru', 'Kata Tjuta', 'Alice Springs'],
    wildlife: ['Red Kangaroos', 'Thorny Devils'],
    culturalFacts: ['Aboriginal Dreamtime', 'Survival Skills'],
    recipe: {
      name: 'Damper Bread',
      description: 'Traditional Australian soda bread.',
      image: 'https://picsum.photos/seed/damper/600/400'
    },
    foxyTransport: 'Off-Road Truck',
    learningFocus: ['Culture', 'Nature'],
    externalLink: 'https://tuosito.com/outback',
    coordinates: { lat: -23.6980, lng: 133.8807 },
    category: 'nature'
  },
  {
    id: '45',
    slug: 'amazon',
    title: 'Adventure in the Earth\'s Green Lungs',
    city: 'Amazon',
    country: 'South America',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.45%20The%20Amazon%20Rainforest.jpg',
    description: 'Explore the jungle and see the colorful macaws.',
    landmarks: ['Amazon River', 'Rainforest Canopy'],
    wildlife: ['Jaguars', 'Macaws'],
    culturalFacts: ['Indigenous Tribes', 'Biodiversity'],
    recipe: {
      name: 'Açaí Bowl',
      description: 'A dish made of frozen and mashed açaí palm fruit.',
      image: 'https://picsum.photos/seed/acai/600/400'
    },
    foxyTransport: 'Canoe',
    learningFocus: ['Environment', 'Biology'],
    externalLink: 'https://tuosito.com/amazon',
    coordinates: { lat: -3.4653, lng: -62.2159 },
    category: 'nature'
  },
  {
    id: '46',
    slug: 'hawaii',
    title: 'Adventure in the Aloha State',
    city: 'Hawaii',
    country: 'USA',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.46%20Hawaii.jpg',
    description: 'See the volcanoes and learn to surf on the big waves.',
    landmarks: ['Diamond Head', 'Pearl Harbor', 'Volcanoes National Park'],
    wildlife: ['Humpback Whales', 'Green Sea Turtles'],
    culturalFacts: ['Hula Dance', 'Hawaiian Kingdom'],
    recipe: {
      name: 'Poke Bowl',
      description: 'Diced raw fish served as an appetizer or main course.',
      image: 'https://picsum.photos/seed/poke/600/400'
    },
    foxyTransport: 'Outrigger Canoe',
    learningFocus: ['Geology', 'Culture'],
    externalLink: 'https://tuosito.com/hawaii',
    coordinates: { lat: 19.8968, lng: -155.5828 },
    category: 'nature'
  },
  {
    id: '47',
    slug: 'madagascar',
    title: 'Adventure in the Island of Unique Wonders',
    city: 'Madagascar',
    country: 'Madagascar',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.47%20Madagascar.jpg',
    description: 'See the lemurs and the giant baobab trees.',
    landmarks: ['Avenue of the Baobabs', 'Tsingy de Bemaraha'],
    wildlife: ['Lemurs', 'Chameleons'],
    culturalFacts: ['Malagasy Traditions', 'Pirate History'],
    recipe: {
      name: 'Romazava',
      description: 'A meat stew with green leafy vegetables.',
      image: 'https://picsum.photos/seed/romazava/600/400'
    },
    foxyTransport: 'Zebu Cart',
    learningFocus: ['Biology', 'History'],
    externalLink: 'https://tuosito.com/madagascar',
    coordinates: { lat: -18.7669, lng: 46.8691 },
    category: 'nature'
  },
  {
    id: '48',
    slug: 'galapagos',
    title: 'Adventure in Darwin\'s Living Laboratory',
    city: 'Galápagos',
    country: 'Ecuador',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.48%20Gal%C3%A1pagos.jpg',
    description: 'Meet the giant tortoises and the marine iguanas.',
    landmarks: ['Tortuga Bay', 'Charles Darwin Research Station'],
    wildlife: ['Giant Tortoises', 'Marine Iguanas'],
    culturalFacts: ['Theory of Evolution', 'Conservation'],
    recipe: {
      name: 'Encebollado',
      description: 'A fish soup from Ecuador.',
      image: 'https://picsum.photos/seed/encebollado/600/400'
    },
    foxyTransport: 'Submarine',
    learningFocus: ['Science', 'Environment'],
    externalLink: 'https://tuosito.com/galapagos',
    coordinates: { lat: -0.8293, lng: -90.9821 },
    category: 'nature'
  },
  {
    id: '49',
    slug: 'easter-island',
    title: 'Adventure in Mysterious Rapa Nui',
    city: 'Easter Island',
    country: 'Chile',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.49%20Easter%20Island.jpg',
    description: 'See the giant Moai statues and learn about the Rapa Nui culture.',
    landmarks: ['Moai Statues', 'Rano Raraku', 'Anakena Beach'],
    wildlife: ['Seabirds', 'Rapa Nui Horses'],
    culturalFacts: ['Moai Construction', 'Birdman Cult'],
    recipe: {
      name: 'Umu Rapa Nui',
      description: 'Food cooked in an underground oven.',
      image: 'https://picsum.photos/seed/umu/600/400'
    },
    foxyTransport: 'Raft',
    learningFocus: ['Archaeology', 'Culture'],
    externalLink: 'https://tuosito.com/easter-island',
    coordinates: { lat: -27.1127, lng: -109.3497 },
    category: 'special'
  },
  {
    id: '50',
    slug: 'santorini',
    title: 'Adventure in the Jewel of the Aegean',
    city: 'Santorini',
    country: 'Greece',
    coverImage: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.50%20Santorini.jpg',
    description: 'See the white houses with blue domes and the beautiful sunset.',
    landmarks: ['Oia Village', 'Caldera', 'Akrotiri'],
    wildlife: ['Mediterranean Monk Seals', 'Donkeys'],
    culturalFacts: ['Volcanic Eruption History', 'Legend of Atlantis'],
    recipe: {
      name: 'Tomato Fritters',
      description: 'Traditional Santorini appetizers.',
      image: 'https://picsum.photos/seed/tomatofritters/600/400'
    },
    foxyTransport: 'Donkey',
    learningFocus: ['Geology', 'History'],
    externalLink: 'https://tuosito.com/santorini',
    coordinates: { lat: 36.3932, lng: 25.4615 },
    category: 'nature',
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
