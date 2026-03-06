// src/data/quizzes.ts

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
        clue: "The classic Roman pasta dish Chef makes, using eggs and cheese (no cream!).",
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
      options: ["You will return to Rome", "You will have good luck", "You will find treasure", "You will meet a friend"],
      answer: "You will return to Rome"
    },
    food: {
      question: "What is the main cheese used in Spaghetti alla Carbonara?",
      options: ["Pecorino Romano", "Parmesan", "Mozzarella", "Ricotta"],
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
        clue: "A classic French pancake that Chef makes, often filled with chocolate or cheese.",
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
      options: ["The Seine", "The Thames", "The Danube", "The Rhine"],
      answer: "The Seine"
    },
    culture: {
      question: "What polite French word should you always say when entering a shop?",
      options: ["Bonjour", "Merci", "Bonsoir", "Salut"],
      answer: "Bonjour"
    },
    food: {
      question: "According to Chef's recipe, what is the key to making a classic French crêpe batter smooth?",
      options: ["Whisking constantly", "Adding more flour", "Using cold milk", "Letting it rest"],
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
        clue: "The famous clock tower (and bell) where the brothers perched.",
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
      options: ["The Thames", "The Severn", "The Tyne", "The Avon"],
      answer: "The Thames"
    },
    culture: {
      question: "What is the name of the traditional afternoon meal with tiny sandwiches and scones?",
      options: ["Afternoon Tea", "High Tea", "Sunday Roast", "Fish and Chips"],
      answer: "Afternoon Tea"
    },
    food: {
      question: "What condiment is traditionally sprinkled on Fish and Chips?",
      options: ["Malt vinegar", "Ketchup", "Mayonnaise", "Brown sauce"],
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
        clue: "The famous, still-unfinished basilica designed by Antoni Gaudí.",
        answer: "SAGRADA FAMILIA"
      },
      {
        clue: "The simple Catalan snack of bread rubbed with tomato and olive oil.",
        answer: "PA AMB TOMAQUET"
      }
    ],
    rebus: {
      emoji: "🦎 + 🎨 + 🏞️",
      answer: "PARK GÜELL"
    },
    scramble: {
      word: "DIAGUA",
      answer: "GAUDI"
    },
    geography: {
      question: "Barcelona is located on the coast of which sea?",
      options: ["Mediterranean Sea", "Atlantic Ocean", "Baltic Sea", "North Sea"],
      answer: "Mediterranean Sea"
    },
    culture: {
      question: "What are the incredible human towers built in Catalonia called?",
      options: ["Castells", "Torres", "Human pyramids", "Stack towers"],
      answer: "Castells"
    },
    food: {
      question: "What is the key ingredient rubbed on the bread for Pa amb Tomàquet?",
      options: ["Ripe tomato", "Garlic", "Olive oil", "Cheese"],
      answer: "Ripe tomato"
    }
  },

  amsterdam: {
    crossword: [
      {
        clue: "The name of this Dutch city, famous for its canals.",
        answer: "AMSTERDAM"
      },
      {
        clue: "The large, flat Dutch pancake that Chef made for Axel and Tino.",
        answer: "PANNENKOEKEN"
      },
      {
        clue: "What did Foxy crash into after trying to grab Axel's pin with a grabber arm?",
        answer: "TULIPS"
      }
    ],
    rebus: {
      emoji: "🚲 + 🌷 + 💧",
      answer: "AMSTERDAM"
    },
    scramble: {
      word: "LANACA",
      answer: "CANAL"
    },
    geography: {
      question: "Amsterdam is famous for its ring of _______, a UNESCO World Heritage site.",
      options: ["Canals", "Windmills", "Bridges", "Bicycles"],
      answer: "Canals"
    },
    culture: {
      question: "What is the main mode of transportation in Amsterdam, with more bikes than people?",
      options: ["Bicycles", "Trams", "Cars", "Boats"],
      answer: "Bicycles"
    },
    food: {
      question: "A Pannenkoek can be served with either sweet or _______ toppings.",
      options: ["Savory", "Spicy", "Sour", "Bitter"],
      answer: "Savory"
    }
  },

  stockholm: {
    crossword: [
      {
        clue: "The name of this capital city, built on 14 islands.",
        answer: "STOCKHOLM"
      },
      {
        clue: "The 17th-century warship that sank on its maiden voyage and is now in a museum.",
        answer: "VASA"
      },
      {
        clue: "The Swedish meatballs that Tino was so excited to eat.",
        answer: "KOTTBULLAR"
      }
    ],
    rebus: {
      emoji: "🏰 + 🚢 + 🏝️",
      answer: "STOCKHOLM"
    },
    scramble: {
      word: "KIFA",
      answer: "FIKA"
    },
    geography: {
      question: "Stockholm is often called the 'Venice of the ______'.",
      options: ["North", "South", "East", "West"],
      answer: "North"
    },
    culture: {
      question: "What is the name of the Swedish tradition of taking a break for coffee and a pastry?",
      options: ["Fika", "Lagom", "Mys", "Smörgåsbord"],
      answer: "Fika"
    },
    food: {
      question: "What sweet berry jam is traditionally served with Swedish meatballs?",
      options: ["Lingonberry", "Strawberry", "Raspberry", "Blueberry"],
      answer: "Lingonberry"
    }
  },

  prague: {
    crossword: [
      {
        clue: "The name of this beautiful Czech city.",
        answer: "PRAGUE"
      },
      {
        clue: "The famous bridge lined with 30 baroque statues.",
        answer: "CHARLES BRIDGE"
      },
      {
        clue: "The sweet, chimney-shaped pastry that Tino loved.",
        answer: "TRDELNIK"
      }
    ],
    rebus: {
      emoji: "🕰️ + 🐉 + 🏰",
      answer: "PRAGUE"
    },
    scramble: {
      word: "LOCOCK",
      answer: "CLOCK"
    },
    geography: {
      question: "What river does the famous Charles Bridge cross in Prague?",
      options: ["The Vltava", "The Danube", "The Elbe", "The Moldau"],
      answer: "The Vltava"
    },
    culture: {
      question: "What appears in the windows of the Astronomical Clock every hour?",
      options: ["The Twelve Apostles", "Dancing skeletons", "A rooster", "The Virgin Mary"],
      answer: "The Twelve Apostles"
    },
    food: {
      question: "Trdelník is often topped with a mix of sugar and what spice?",
      options: ["Cinnamon", "Nutmeg", "Cardamom", "Ginger"],
      answer: "Cinnamon"
    }
  },

  athens: {
    crossword: [
      {
        clue: "The name of this ancient Greek capital.",
        answer: "ATHENS"
      },
      {
        clue: "The ancient citadel high above the city, home to the Parthenon.",
        answer: "ACROPOLIS"
      },
      {
        clue: "The cool, creamy yogurt and cucumber dip Chef made for the falcons.",
        answer: "TZATZIKI"
      }
    ],
    rebus: {
      emoji: "🏛️ + 🦉 + ⛰️",
      answer: "ACROPOLIS"
    },
    scramble: {
      word: "PARTYNOHE",
      answer: "PARTHENON"
    },
    geography: {
      question: "Athens is named after Athena, the goddess of what?",
      options: ["Wisdom", "War", "Love", "Harvest"],
      answer: "Wisdom"
    },
    culture: {
      question: "The Greek tradition of hospitality, 'friend to a stranger', is called what?",
      options: ["Philoxenia", "Xenia", "Agapi", "Kefi"],
      answer: "Philoxenia"
    },
    food: {
      question: "What key ingredient is squeezed out of the grated cucumber for tzatziki?",
      options: ["Water", "Juice", "Pulp", "Seeds"],
      answer: "Water"
    }
  },

  berlin: {
    crossword: [
      {
        clue: "The name of this German capital.",
        answer: "BERLIN"
      },
      {
        clue: "The famous gate that is a symbol of a reunited Germany.",
        answer: "BRANDENBURG"
      },
      {
        clue: "The legendary street food of sausage with curry ketchup.",
        answer: "CURRYWURST"
      }
    ],
    rebus: {
      emoji: "🐻 + 🚪 + 🍺",
      answer: "BERLIN"
    },
    scramble: {
      word: "LLAW",
      answer: "WALL"
    },
    geography: {
      question: "The Reichstag building is the home of which German body?",
      options: ["The Parliament", "The President", "The Courts", "The Museum"],
      answer: "The Parliament"
    },
    culture: {
      question: "What is the name of the beloved East German traffic light man?",
      options: ["Ampelmann", "Ostmann", "Berliner", "Ampel"],
      answer: "Ampelmann"
    },
    food: {
      question: "What special powder is sprinkled on top of Currywurst for the finishing touch?",
      options: ["Curry powder", "Paprika", "Cayenne pepper", "Turmeric"],
      answer: "Curry powder"
    }
  },

  vienna: {
    crossword: [
      {
        clue: "The name of this Austrian capital, the 'City of Music'.",
        answer: "VIENNA"
      },
      {
        clue: "The famous chocolate cake with a layer of apricot jam.",
        answer: "SACHERTORTE"
      },
      {
        clue: "The famous palace where Mozart once played a concert as a child.",
        answer: "SCHÖNBRUNN"
      }
    ],
    rebus: {
      emoji: "🎵 + 🍰 + 🎻",
      answer: "VIENNA"
    },
    scramble: {
      word: "WALTZ",
      answer: "WALTZ"
    },
    geography: {
      question: "Vienna's coffee house culture is recognized by which organization?",
      options: ["UNESCO", "EU", "WHO", "UN"],
      answer: "UNESCO"
    },
    culture: {
      question: "Famous composer Wolfgang Amadeus _______ played in Schönbrunn Palace as a child.",
      options: ["Mozart", "Beethoven", "Bach", "Strauss"],
      answer: "Mozart"
    },
    food: {
      question: "What kind of jam is the secret filling in a Sachertorte?",
      options: ["Apricot", "Raspberry", "Strawberry", "Plum"],
      answer: "Apricot"
    }
  },

  lisbon: {
    crossword: [
      {
        clue: "The name of this sunny Portuguese capital.",
        answer: "LISBON"
      },
      {
        clue: "The famous tower that looks like it's made of lace, guarding the river.",
        answer: "BELEM"
      },
      {
        clue: "The delicious little custard tarts that Tino couldn't stop eating.",
        answer: "PASTEIS DE NATA"
      }
    ],
    rebus: {
      emoji: "🚋 + 🥧 + 🌊",
      answer: "LISBON"
    },
    scramble: {
      word: "RMAT",
      answer: "TRAM"
    },
    geography: {
      question: "Lisbon is located on the estuary of which river?",
      options: ["The Tagus", "The Douro", "The Guadiana", "The Minho"],
      answer: "The Tagus"
    },
    culture: {
      question: "What is the deeply emotional, traditional music of Lisbon called?",
      options: ["Fado", "Samba", "Tango", "Flamenco"],
      answer: "Fado"
    },
    food: {
      question: "What spice is traditionally sprinkled on top of Pastéis de Nata?",
      options: ["Cinnamon", "Nutmeg", "Vanilla", "Cardamom"],
      answer: "Cinnamon"
    }
  },

  dublin: {
    crossword: [
      {
        clue: "The name of this lively Irish capital.",
        answer: "DUBLIN"
      },
      {
        clue: "The historic, blackened cathedral named after Ireland's patron saint.",
        answer: "ST. PATRICK'S"
      },
      {
        clue: "Chef's hearty, crusty quick bread that doesn't use yeast.",
        answer: "SODA BREAD"
      }
    ],
    rebus: {
      emoji: "🍀 + ☘️ + 🎻",
      answer: "DUBLIN"
    },
    scramble: {
      word: "FIAF",
      answer: "FAIR"
    },
    geography: {
      question: "Dublin is divided by which river?",
      options: ["The River Liffey", "The Shannon", "The Lee", "The Boyne"],
      answer: "The River Liffey"
    },
    culture: {
      question: "What do the Irish call a fun, lively conversation or session of music?",
      options: ["Craic", "Ceili", "Shenanigans", "Blarney"],
      answer: "Craic"
    },
    food: {
      question: "Why do you cut a deep 'X' on top of a loaf of soda bread before baking?",
      options: ["To let the fairies out", "To help it rise", "For decoration", "To release steam"],
      answer: "To let the fairies out"
    }
  },

  edinburgh: {
    crossword: [
      {
        clue: "The name of this historic Scottish capital.",
        answer: "EDINBURGH"
      },
      {
        clue: "The famous castle perched on an extinct volcano.",
        answer: "EDINBURGH CASTLE"
      },
      {
        clue: "The buttery, crumbly Scottish cookie that Chef made.",
        answer: "SHORTBREAD"
      }
    ],
    rebus: {
      emoji: "🏰 + ⛰️ + 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      answer: "EDINBURGH CASTLE"
    },
    scramble: {
      word: "OLTC",
      answer: "TOLT"
    },
    geography: {
      question: "Edinburgh Castle is built on top of what?",
      options: ["An extinct volcano", "A hill", "A cliff", "An island"],
      answer: "An extinct volcano"
    },
    culture: {
      question: "What sound is heard from the castle every day at 1:00 PM, except Sundays?",
      options: ["A cannon", "A bell", "A bagpipe", "A horn"],
      answer: "A cannon"
    },
    food: {
      question: "What is the main ingredient that makes shortbread so buttery and crumbly?",
      options: ["Butter", "Sugar", "Flour", "Eggs"],
      answer: "Butter"
    }
  },

  budapest: {
    crossword: [
      {
        clue: "The name of this Hungarian capital, split by the Danube.",
        answer: "BUDAPEST"
      },
      {
        clue: "The stunning Parliament building has 365 of these.",
        answer: "SPIRES"
      },
      {
        clue: "The rich, beefy stew flavored with sweet paprika.",
        answer: "GOULASH"
      }
    ],
    rebus: {
      emoji: "🌉 + 💧 + 🏛️",
      answer: "BUDAPEST"
    },
    scramble: {
      word: "TUBAD",
      answer: "DANUBE"
    },
    geography: {
      question: "Budapest is often called the 'Pearl of the ______'.",
      options: ["Danube", "Europe", "East", "Hungary"],
      answer: "Danube"
    },
    culture: {
      question: "What do locals sometimes play on floating boards while relaxing in the thermal baths?",
      options: ["Chess", "Cards", "Backgammon", "Checkers"],
      answer: "Chess"
    },
    food: {
      question: "What gives Hungarian Goulash its characteristic red color and flavor?",
      options: ["Paprika", "Tomato", "Red pepper", "Chili"],
      answer: "Paprika"
    }
  },

  copenhagen: {
    crossword: [
      {
        clue: "The name of this cozy Danish capital.",
        answer: "COPENHAGEN"
      },
      {
        clue: "The famous statue inspired by a Hans Christian Andersen fairytale.",
        answer: "THE LITTLE MERMAID"
      },
      {
        clue: "The famous Danish open-faced sandwich.",
        answer: "SMORREBROD"
      }
    ],
    rebus: {
      emoji: "🧜‍♀️ + 🏰 + 🚲",
      answer: "COPENHAGEN"
    },
    scramble: {
      word: "YGEGH",
      answer: "HYGGE"
    },
    geography: {
      question: "Copenhagen is located on the islands of Zealand and _______?",
      options: ["Amager", "Fyn", "Bornholm", "Lolland"],
      answer: "Amager"
    },
    culture: {
      question: "What is the Danish word for creating a warm, cozy atmosphere?",
      options: ["Hygge", "Lagom", "Gemütlichkeit", "Koselig"],
      answer: "Hygge"
    },
    food: {
      question: "What type of dense, dark bread is the base for a traditional Smørrebrød?",
      options: ["Rye bread", "White bread", "Sourdough", "Whole wheat"],
      answer: "Rye bread"
    }
  },

  oslo: {
    crossword: [
      {
        clue: "The name of this Norwegian capital, a 'Green Capital'.",
        answer: "OSLO"
      },
      {
        clue: "The famous sculpture park with over 200 statues by Gustav Vigeland.",
        answer: "VIGELAND"
      },
      {
        clue: "The heart-shaped Norwegian waffles that Chef made.",
        answer: "HJERTEVAFLER"
      }
    ],
    rebus: {
      emoji: "🏔️ + 🛶 + 🌲",
      answer: "OSLO"
    },
    scramble: {
      word: "JOLSFOR",
      answer: "FJORD"
    },
    geography: {
      question: "Oslo is located at the head of which fjord?",
      options: ["Oslofjord", "Sognefjord", "Hardangerfjord", "Geirangerfjord"],
      answer: "Oslofjord"
    },
    culture: {
      question: "What is the Norwegian tradition of spending time outdoors called?",
      options: ["Friluftsliv", "Koselig", "Hygge", "Lagom"],
      answer: "Friluftsliv"
    },
    food: {
      question: "What spice gives Norwegian waffles their special flavor?",
      options: ["Cardamom", "Cinnamon", "Nutmeg", "Ginger"],
      answer: "Cardamom"
    }
  },

  helsinki: {
    crossword: [
      {
        clue: "The name of this Finnish capital, the 'Daughter of the Baltic'.",
        answer: "HELSINKI"
      },
      {
        clue: "The famous church carved directly into solid granite.",
        answer: "ROCK CHURCH"
      },
      {
        clue: "The traditional Finnish pastries with a rye crust and rice porridge filling.",
        answer: "KARELIAN PASTIES"
      }
    ],
    rebus: {
      emoji: "⛪ + 🪨 + 🎶",
      answer: "ROCK CHURCH"
    },
    scramble: {
      word: "NUAS",
      answer: "SAUNA"
    },
    geography: {
      question: "Helsinki is located on the shore of which gulf?",
      options: ["Gulf of Finland", "Gulf of Bothnia", "Gulf of Riga", "Baltic Sea"],
      answer: "Gulf of Finland"
    },
    culture: {
      question: "Roughly how many saunas are there in Finland?",
      options: ["Over 3 million", "Over 1 million", "Over 5 million", "Over 10 million"],
      answer: "Over 3 million"
    },
    food: {
      question: "Karelian pasties are traditionally served with a topping of what?",
      options: ["Egg butter", "Cheese", "Jam", "Sour cream"],
      answer: "Egg butter"
    }
  },

  reykjavik: {
    crossword: [
      {
        clue: "The name of this Icelandic capital, the world's northernmost.",
        answer: "REYKJAVIK"
      },
      {
        clue: "The magnificent, towering church that looks like a giant organ made of basalt columns.",
        answer: "HALLGRIMSKIRKJA"
      },
      {
        clue: "The hearty Icelandic fish stew that warmed the falcons up.",
        answer: "PLOKKFISKUR"
      }
    ],
    rebus: {
      emoji: "🌋 + ♨️ + ❄️",
      answer: "REYKJAVIK"
    },
    scramble: {
      word: "RALUORA",
      answer: "AURORA"
    },
    geography: {
      question: "Iceland is known as the land of fire and ______.",
      options: ["Ice", "Snow", "Volcanoes", "Geysers"],
      answer: "Ice"
    },
    culture: {
      question: "What are the elves and hidden people of Icelandic folklore called?",
      options: ["Huldufólk", "Trolls", "Elves", "Hidden people"],
      answer: "Huldufólk"
    },
    food: {
      question: "What type of meat makes the famous Icelandic hot dog (pylsur) special?",
      options: ["Lamb", "Beef", "Pork", "Chicken"],
      answer: "Lamb"
    }
  },

  istanbul: {
    crossword: [
      {
        clue: "The name of this Turkish city that spans two continents.",
        answer: "ISTANBUL"
      },
      {
        clue: "The ancient church with a massive dome, later a mosque and museum.",
        answer: "HAGIA SOPHIA"
      },
      {
        clue: "The sweet, flaky pastry made of thin dough and nuts, drenched in honey.",
        answer: "BAKLAVA"
      }
    ],
    rebus: {
      emoji: "🌉 + 🇪🇺 + 🇦🇸",
      answer: "ISTANBUL"
    },
    scramble: {
      word: "ZARAAB",
      answer: "BAZAAR"
    },
    geography: {
      question: "Istanbul is the only city in the world built on two continents. Which ones?",
      options: ["Europe and Asia", "Europe and Africa", "Asia and Africa", "Europe and Australia"],
      answer: "Europe and Asia"
    },
    culture: {
      question: "What is served in small, tulip-shaped glasses as a sign of friendship?",
      options: ["Turkish tea", "Turkish coffee", "Ayran", "Sherbet"],
      answer: "Turkish tea"
    },
    food: {
      question: "Baklava is made of phyllo dough, nuts, and sweetened with what?",
      options: ["Honey syrup", "Sugar syrup", "Chocolate", "Cream"],
      answer: "Honey syrup"
    }
  },

  "saint-petersburg": {
    crossword: [
      {
        clue: "The name of this grand Russian city, founded by Tsar Peter the Great.",
        answer: "SAINT PETERSBURG"
      },
      {
        clue: "The famous museum located inside the mint-green Winter Palace.",
        answer: "HERMITAGE"
      },
      {
        clue: "The traditional thin Russian pancakes that Chef made.",
        answer: "BLINI"
      }
    ],
    rebus: {
      emoji: "👑 + 🏛️ + ❄️",
      answer: "SAINT PETERSBURG"
    },
    scramble: {
      word: "VENAE",
      answer: "NEVA"
    },
    geography: {
      question: "Saint Petersburg is built on the delta of which river?",
      options: ["The Neva", "The Volga", "The Dnieper", "The Don"],
      answer: "The Neva"
    },
    culture: {
      question: "What is the name of the phenomenon where the sun barely sets during summer?",
      options: ["White Nights", "Midnight Sun", "Polar Day", "Summer Solstice"],
      answer: "White Nights"
    },
    food: {
      question: "Blini are often served with savory toppings like smoked salmon or sweet toppings like ______.",
      options: ["Jam", "Cheese", "Meat", "Vegetables"],
      answer: "Jam"
    }
  },

  "new-york": {
    crossword: [
      {
        clue: "The name of this massive US city, the 'Big Apple'.",
        answer: "NEW YORK"
      },
      {
        clue: "The green heart of Manhattan, a giant rectangle of nature.",
        answer: "CENTRAL PARK"
      },
      {
        clue: "Chef's famous rich, creamy baked dessert.",
        answer: "CHEESECAKE"
      }
    ],
    rebus: {
      emoji: "🗽 + 🍎 + 🚕",
      answer: "NEW YORK"
    },
    scramble: {
      word: "YARBROAD",
      answer: "BROADWAY"
    },
    geography: {
      question: "New York is divided into five ______.",
      options: ["Boroughs", "Districts", "Counties", "Wards"],
      answer: "Boroughs"
    },
    culture: {
      question: "What is the name of the famous statue in the harbor, a gift from France?",
      options: ["Statue of Liberty", "Liberty Statue", "Freedom Statue", "Lady Liberty"],
      answer: "Statue of Liberty"
    },
    food: {
      question: "A true New York-style cheesecake is known for being what?",
      options: ["Rich and creamy", "Light and fluffy", "Dense and heavy", "No-bake"],
      answer: "Rich and creamy"
    }
  },

  toronto: {
    crossword: [
      {
        clue: "The name of this Canadian city on Lake Ontario.",
        answer: "TORONTO"
      },
      {
        clue: "The iconic tower, once the tallest free-standing structure in the world.",
        answer: "CN TOWER"
      },
      {
        clue: "The classic Canadian dish of fries with cheese curds and gravy.",
        answer: "POUTINE"
      }
    ],
    rebus: {
      emoji: "🗼 + 🍁 + 🏒",
      answer: "TORONTO"
    },
    scramble: {
      word: "NOORATC",
      answer: "TORONTO"
    },
    geography: {
      question: "Toronto is located on the shore of which Great Lake?",
      options: ["Lake Ontario", "Lake Erie", "Lake Huron", "Lake Michigan"],
      answer: "Lake Ontario"
    },
    culture: {
      question: "What is Canada's beloved national winter sport?",
      options: ["Hockey", "Lacrosse", "Curling", "Skiing"],
      answer: "Hockey"
    },
    food: {
      question: "What makes the cheese curds in poutine 'squeak'?",
      options: ["They are fresh", "They are old", "They are processed", "They are melted"],
      answer: "They are fresh"
    }
  },

  chicago: {
    crossword: [
      {
        clue: "The name of this US city, known as the 'Windy City'.",
        answer: "CHICAGO"
      },
      {
        clue: "The famous, shiny, reflective sculpture in Millennium Park.",
        answer: "CLOUD GATE"
      },
      {
        clue: "The famous pizza style with a thick crust and toppings in reverse order.",
        answer: "DEEP DISH PIZZA"
      }
    ],
    rebus: {
      emoji: "🌬️ + 🏙️ + 🍕",
      answer: "CHICAGO"
    },
    scramble: {
      word: "NABE",
      answer: "BEAN"
    },
    geography: {
      question: "Chicago sits on the shore of which Great Lake?",
      options: ["Lake Michigan", "Lake Huron", "Lake Superior", "Lake Erie"],
      answer: "Lake Michigan"
    },
    culture: {
      question: "What topping is strictly forbidden on a true Chicago-style hot dog?",
      options: ["Ketchup", "Mustard", "Onions", "Relish"],
      answer: "Ketchup"
    },
    food: {
      question: "In a deep dish pizza, which ingredient is often layered directly on top of the dough, under the sauce?",
      options: ["Cheese", "Meat", "Vegetables", "Pepperoni"],
      answer: "Cheese"
    }
  },

  "rio-de-janeiro": {
    crossword: [
      {
        clue: "The name of this vibrant Brazilian city, the 'Marvelous City'.",
        answer: "RIO DE JANEIRO"
      },
      {
        clue: "The giant statue of Christ with arms outstretched over the city.",
        answer: "CHRIST THE REDEEMER"
      },
      {
        clue: "The delicious, chewy, gluten-free cheese bread that Chef made.",
        answer: "PAO DE QUEIJO"
      }
    ],
    rebus: {
      emoji: "⛰️ + ✝️ + 🏖️",
      answer: "CHRIST THE REDEEMER"
    },
    scramble: {
      word: "AMABS",
      answer: "SAMBA"
    },
    geography: {
      question: "Rio's famous Sugarloaf Mountain is called ______ in Portuguese.",
      options: ["Pão de Açúcar", "Corcovado", "Cristo Redentor", "Morro Dois Irmãos"],
      answer: "Pão de Açúcar"
    },
    culture: {
      question: "What is the name of the famous pre-Lenten festival with samba parades?",
      options: ["Carnival", "Festival", "Parade", "Celebration"],
      answer: "Carnival"
    },
    food: {
      question: "Pão de Queijo is made with flour from what vegetable?",
      options: ["Tapioca", "Cassava", "Yuca", "Manioc"],
      answer: "Tapioca"
    }
  },

  "mexico-city": {
    crossword: [
      {
        clue: "The name of this huge Mexican capital.",
        answer: "MEXICO CITY"
      },
      {
        clue: "The massive ancient city with the Pyramid of the Sun, just outside the city.",
        answer: "TEOTIHUACAN"
      },
      {
        clue: "The sweet and savory pork tacos with pineapple that Chef made.",
        answer: "TACOS AL PASTOR"
      }
    ],
    rebus: {
      emoji: "🇲🇽 + 💀 + 🌮",
      answer: "MEXICO CITY"
    },
    scramble: {
      word: "AOLTM",
      answer: "MOATL"
    },
    geography: {
      question: "Mexico City was built on the site of the ancient Aztec capital, ______.",
      options: ["Tenochtitlan", "Teotihuacan", "Chichen Itza", "Tikal"],
      answer: "Tenochtitlan"
    },
    culture: {
      question: "What is the joyful holiday in early November for remembering loved ones?",
      options: ["Dia de los Muertos", "Day of the Dead", "All Saints Day", "Halloween"],
      answer: "Dia de
