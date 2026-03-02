export const citiesData: Record<string, {
  name: string;
  country: string;
  monument: {
    name: string;
    image: string;
    caption: string;
    history: string;
  };
  dish: {
    name: string;
    image: string;
    description: string;
    ingredients: string[];
    steps: string[];
  };
}> = {
  "rome": {
    name: "Rome",
    country: "Italy",
    monument: {
      name: "Colosseum",
      image: "/assets/monuments/rome-colosseum.png",
      caption: "The Colosseum – The Flavian Amphitheatre",
      history: "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum."
    },
    dish: {
      name: "Pasta alla Carbonara",
      image: "/assets/kitchen/rome-carbonara.png",
      description: "Carbonara is an Italian pasta dish from Rome made with egg, hard cheese, cured pork, and black pepper.",
      ingredients: ["Spaghetti", "Guanciale", "Eggs", "Pecorino Romano", "Black Pepper"],
      steps: ["Boil pasta", "Fry guanciale", "Mix eggs and cheese", "Combine all with pasta water"]
    }
  },
  "paris": {
    name: "Paris",
    country: "France",
    monument: {
      name: "Eiffel Tower",
      image: "/assets/monuments/paris-eiffel.png",
      caption: "The Eiffel Tower – Symbol of Paris",
      history: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France."
    },
    dish: {
      name: "Crepes Suzette",
      image: "/assets/kitchen/paris-crepes.png",
      description: "Crêpes Suzette is a French dessert consisting of crêpes with beurre Suzette.",
      ingredients: ["Flour", "Eggs", "Milk", "Orange Juice", "Sugar"],
      steps: ["Make batter", "Cook crepes", "Prepare orange sauce", "Flambe and serve"]
    }
  },
  "london": {
    name: "London",
    country: "United Kingdom",
    monument: {
      name: "Big Ben",
      image: "/assets/monuments/london-big-ben.png",
      caption: "Big Ben – The Great Bell",
      history: "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster in London."
    },
    dish: {
      name: "Scones with Jam",
      image: "/assets/kitchen/london-scones.png",
      description: "A scone is a traditional British baked good, usually made of either wheat or oatmeal with baking powder.",
      ingredients: ["Flour", "Butter", "Milk", "Sugar", "Clotted Cream", "Jam"],
      steps: ["Mix dry ingredients", "Rub in butter", "Add milk", "Bake until golden"]
    }
  },
  "barcelona": {
    name: "Barcelona",
    country: "Spain",
    monument: {
      name: "Sagrada Família",
      image: "/assets/monuments/barcelona-sagrada-familia.jpg",
      caption: "Sagrada Família – Gaudí's Masterpiece",
      history: "The Basílica i Temple Expiatori de la Sagrada Família is a large unfinished Roman Catholic minor basilica in Barcelona."
    },
    dish: {
      name: "Spanish Paella",
      image: "/assets/kitchen/barcelona-paella.jpg",
      description: "Paella is a Spanish rice dish that originally came from Valencia.",
      ingredients: ["Rice", "Saffron", "Vegetables", "Seafood or Meat"],
      steps: ["Sauté ingredients", "Add rice and broth", "Simmer without stirring", "Rest before serving"]
    }
  },
  "amsterdam": {
    name: "Amsterdam",
    country: "Netherlands",
    monument: {
      name: "Canal Ring",
      image: "/assets/monuments/amsterdam-canals.jpg",
      caption: "Amsterdam Canals – The Venice of the North",
      history: "The 17th-century Canal Ring Area of Amsterdam inside the Singelgracht is a UNESCO World Heritage site."
    },
    dish: {
      name: "Dutch Stroopwafels",
      image: "/assets/kitchen/amsterdam-stroopwafels.jpg",
      description: "A stroopwafel is a wafer cookie made from two thin layers of baked dough joined by a caramel filling.",
      ingredients: ["Flour", "Butter", "Sugar", "Yeast", "Cinnamon", "Syrup"],
      steps: ["Make dough", "Bake waffles", "Split while hot", "Fill with syrup"]
    }
  },
  "stockholm": {
    name: "Stockholm",
    country: "Sweden",
    monument: {
      name: "Gamla Stan",
      image: "/assets/monuments/stockholm-gamla-stan.jpg",
      caption: "Gamla Stan – The Old Town",
      history: "Gamla stan, until 1980 officially Staden mellan broarna, is the old town of Stockholm, Sweden."
    },
    dish: {
      name: "Swedish Meatballs",
      image: "/assets/kitchen/stockholm-meatballs.jpg",
      description: "Köttbullar are Swedish meatballs, traditionally served with gravy, boiled potatoes, and lingonberry jam.",
      ingredients: ["Ground Meat", "Breadcrumbs", "Onion", "Cream", "Allspice"],
      steps: ["Mix ingredients", "Form balls", "Fry until brown", "Make cream sauce"]
    }
  },
  "prague": {
    name: "Prague",
    country: "Czech Republic",
    monument: {
      name: "Charles Bridge",
      image: "/assets/monuments/prague-charles-bridge.jpg",
      caption: "Charles Bridge – Historic Crossing",
      history: "Charles Bridge is a medieval stone arch bridge that crosses the Vltava river in Prague, Czech Republic."
    },
    dish: {
      name: "Trdelník Pastry",
      image: "/assets/kitchen/prague-trdelnik.jpg",
      description: "Trdelník is a kind of spit cake. It is made from rolled dough that is wrapped around a stick, then grilled.",
      ingredients: ["Flour", "Yeast", "Milk", "Sugar", "Cinnamon", "Walnuts"],
      steps: ["Prepare dough", "Wrap around spit", "Grill over coals", "Roll in sugar and nuts"]
    }
  },
  "athens": {
    name: "Athens",
    country: "Greece",
    monument: {
      name: "Parthenon",
      image: "/assets/monuments/athens-parthenon.jpg",
      caption: "The Parthenon – Temple of Athena",
      history: "The Parthenon is a former temple on the Athenian Acropolis, Greece, dedicated to the goddess Athena."
    },
    dish: {
      name: "Greek Moussaka",
      image: "/assets/kitchen/athens-moussaka.jpg",
      description: "Moussaka is an eggplant- or potato-based dish, often including ground meat, in the Levant, Middle East, and Balkans.",
      ingredients: ["Eggplant", "Potatoes", "Ground Lamb", "Tomato Sauce", "Béchamel"],
      steps: ["Layer vegetables", "Add meat sauce", "Top with béchamel", "Bake until golden"]
    }
  },
  "berlin": {
    name: "Berlin",
    country: "Germany",
    monument: {
      name: "Brandenburg Gate",
      image: "/assets/monuments/berlin-brandenburg-gate.jpg",
      caption: "Brandenburg Gate – Symbol of Unity",
      history: "The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II."
    },
    dish: {
      name: "Currywurst",
      image: "/assets/kitchen/berlin-currywurst.jpg",
      description: "Currywurst is a fast food dish of German origin consisting of steamed, then fried pork sausage.",
      ingredients: ["Sausage", "Ketchup", "Curry Powder", "Worcestershire Sauce"],
      steps: ["Fry sausage", "Slice into pieces", "Top with curry ketchup", "Dust with curry powder"]
    }
  },
  "vienna": {
    name: "Vienna",
    country: "Austria",
    monument: {
      name: "Schönbrunn Palace",
      image: "/assets/monuments/vienna-schonbrunn.jpg",
      caption: "Schönbrunn Palace – Imperial Residence",
      history: "Schönbrunn Palace was the main summer residence of the Habsburg rulers, located in Hietzing, Vienna."
    },
    dish: {
      name: "Sachertorte",
      image: "/assets/kitchen/vienna-sachertorte.jpg",
      description: "Sachertorte is a chocolate cake, or torte of Austrian origin, invented by Franz Sacher in 1832.",
      ingredients: ["Chocolate", "Butter", "Eggs", "Sugar", "Apricot Jam"],
      steps: ["Bake chocolate cake", "Slice and fill with jam", "Coat with chocolate glaze", "Serve with whipped cream"]
    }
  },
  "lisbon": {
    name: "Lisbon",
    country: "Portugal",
    monument: {
      name: "Belém Tower",
      image: "/assets/monuments/lisbon-belem-tower.jpg",
      caption: "Belém Tower – Gateway to the World",
      history: "Belém Tower is a 16th-century fortification located in Lisbon that served as a ceremonial gateway to Lisbon."
    },
    dish: {
      name: "Pastéis de Nata",
      image: "/assets/kitchen/lisbon-pasteis-de-nata.jpg",
      description: "Pastel de nata is a Portuguese egg custard tart pastry, optionally dusted with cinnamon.",
      ingredients: ["Puff Pastry", "Milk", "Sugar", "Egg Yolks", "Cinnamon"],
      steps: ["Line molds with pastry", "Make custard", "Fill and bake at high heat", "Dust with cinnamon"]
    }
  },
  "dublin": {
    name: "Dublin",
    country: "Ireland",
    monument: {
      name: "Trinity College",
      image: "/assets/monuments/dublin-trinity-college.jpg",
      caption: "Trinity College – Historic University",
      history: "Trinity College, officially the College of the Holy and Undivided Trinity of Queen Elizabeth near Dublin."
    },
    dish: {
      name: "Irish Soda Bread",
      image: "/assets/kitchen/dublin-soda-bread.jpg",
      description: "Soda bread is a variety of quick bread in which sodium bicarbonate is used as a leavening agent.",
      ingredients: ["Flour", "Baking Soda", "Buttermilk", "Salt"],
      steps: ["Mix dry ingredients", "Add buttermilk", "Shape into loaf", "Bake until hollow sound"]
    }
  },
  "edinburgh": {
    name: "Edinburgh",
    country: "Scotland",
    monument: {
      name: "Edinburgh Castle",
      image: "/assets/monuments/edinburgh-castle.jpg",
      caption: "Edinburgh Castle – Fortress on the Rock",
      history: "Edinburgh Castle is a historic fortress which dominates the skyline of Edinburgh, Scotland, from its position on Castle Rock."
    },
    dish: {
      name: "Shortbread Cookies",
      image: "/assets/kitchen/edinburgh-shortbread.jpg",
      description: "Shortbread is a traditional Scottish biscuit usually made from one part white sugar, two parts butter, and three parts flour.",
      ingredients: ["Butter", "Sugar", "Flour", "Salt"],
      steps: ["Cream butter and sugar", "Add flour", "Press into pan", "Bake and cut into fingers"]
    }
  },
  "budapest": {
    name: "Budapest",
    country: "Hungary",
    monument: {
      name: "Parliament Building",
      image: "/assets/monuments/budapest-parliament.jpg",
      caption: "Hungarian Parliament – Gothic Revival",
      history: "The Parliament of Hungary is the seat of the National Assembly of Hungary, one of Europe's oldest legislative buildings."
    },
    dish: {
      name: "Hungarian Goulash",
      image: "/assets/kitchen/budapest-goulash.jpg",
      description: "Goulash is a soup or stew of meat and vegetables seasoned with paprika and other spices.",
      ingredients: ["Beef", "Onions", "Paprika", "Potatoes", "Carrots"],
      steps: ["Sauté onions", "Brown meat", "Add spices and water", "Simmer with vegetables"]
    }
  },
  "copenhagen": {
    name: "Copenhagen",
    country: "Denmark",
    monument: {
      name: "Little Mermaid",
      image: "/assets/monuments/copenhagen-little-mermaid.jpg",
      caption: "The Little Mermaid – Fairytale Icon",
      history: "The Little Mermaid is a bronze statue by Edvard Eriksen, depicting a mermaid becoming human."
    },
    dish: {
      name: "Danish Smørrebrød",
      image: "/assets/kitchen/copenhagen-smorrebrod.jpg",
      description: "Smørrebrød is a traditional Danish open-faced sandwich that usually consists of a piece of buttered rye bread.",
      ingredients: ["Rye Bread", "Butter", "Cold Cuts", "Fish", "Cheese", "Garnish"],
      steps: ["Butter the bread", "Add main topping", "Add garnish", "Arrange artistically"]
    }
  },
  "oslo": {
    name: "Oslo",
    country: "Norway",
    monument: {
      name: "Viking Ship Museum",
      image: "/assets/monuments/oslo-viking-ship.jpg",
      caption: "Viking Ship Museum – Maritime Heritage",
      history: "The Viking Ship Museum is located at Bygdøy in Oslo, Norway. It is part of the Museum of Cultural History."
    },
    dish: {
      name: "Norwegian Waffles",
      image: "/assets/kitchen/oslo-waffles.jpg",
      description: "Norwegian waffles are heart-shaped and often served with brown cheese or sour cream and jam.",
      ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Cardamom"],
      steps: ["Make batter", "Let rest", "Cook in heart iron", "Serve with toppings"]
    }
  },
  "helsinki": {
    name: "Helsinki",
    country: "Finland",
    monument: {
      name: "Helsinki Cathedral",
      image: "/assets/monuments/helsinki-cathedral.jpg",
      caption: "Helsinki Cathedral – Neoclassical Landmark",
      history: "Helsinki Cathedral is the Finnish Evangelical Lutheran cathedral of the Diocese of Helsinki."
    },
    dish: {
      name: "Karelian Pies",
      image: "/assets/kitchen/helsinki-karelian-pies.jpg",
      description: "Karelian pasties are traditional Finnish pasties with a thin rye crust and a rice porridge filling.",
      ingredients: ["Rye Flour", "Rice", "Milk", "Butter"],
      steps: ["Make rice porridge", "Prepare rye crust", "Fill and crimp", "Bake and brush with butter"]
    }
  },
  "reykjavik": {
    name: "Reykjavik",
    country: "Iceland",
    monument: {
      name: "Hallgrímskirkja",
      image: "/assets/monuments/reykjavik-hallgrimskirkja.jpg",
      caption: "Hallgrímskirkja – Basalt Column Inspiration",
      history: "Hallgrímskirkja is a Lutheran parish church in Reykjavík, Iceland. At 74.5 metres high, it is the largest church in Iceland."
    },
    dish: {
      name: "Icelandic Skyr with Berries",
      image: "/assets/kitchen/reykjavik-skyr.jpg",
      description: "Skyr is an Icelandic cultured dairy product. It has the consistency of strained yogurt but a milder flavor.",
      ingredients: ["Skyr", "Blueberries", "Honey", "Milk"],
      steps: ["Place skyr in bowl", "Add fresh berries", "Drizzle with honey", "Add a splash of milk"]
    }
  },
  "istanbul": {
    name: "Istanbul",
    country: "Turkey",
    monument: {
      name: "Hagia Sophia",
      image: "/assets/monuments/istanbul-hagia-sophia.jpg",
      caption: "Hagia Sophia – Architectural Marvel",
      history: "Hagia Sophia is a monument of Byzantine architecture in Istanbul, Turkey."
    },
    dish: {
      name: "Turkish Baklava",
      image: "/assets/kitchen/istanbul-baklava.jpg",
      description: "Baklava is a layered pastry dessert made of filo pastry, filled with chopped nuts, and sweetened with syrup or honey.",
      ingredients: ["Filo Dough", "Pistachios", "Butter", "Sugar", "Lemon Juice"],
      steps: ["Layer filo and butter", "Add nut filling", "Cut into diamonds", "Bake and pour syrup"]
    }
  },
  "saint-petersburg": {
    name: "Saint Petersburg",
    country: "Russia",
    monument: {
      name: "Hermitage Museum",
      image: "/assets/monuments/st-petersburg-hermitage.jpg",
      caption: "The Hermitage – Imperial Art",
      history: "The State Hermitage Museum is a museum of art and culture in Saint Petersburg, Russia."
    },
    dish: {
      name: "Russian Blini",
      image: "/assets/kitchen/st-petersburg-blini.jpg",
      description: "Blini are traditional Russian pancakes, often served with sour cream, caviar, or jam.",
      ingredients: ["Flour", "Yeast", "Milk", "Eggs", "Butter"],
      steps: ["Prepare yeast batter", "Let rise", "Fry thin pancakes", "Serve with sweet or savory sides"]
    }
  },
  "new-york": {
    name: "New York",
    country: "USA",
    monument: {
      name: "Statue of Liberty",
      image: "/assets/monuments/new-york-statue-of-liberty.jpg",
      caption: "Statue of Liberty – Beacon of Hope",
      history: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor."
    },
    dish: {
      name: "New York Cheesecake",
      image: "/assets/kitchen/new-york-cheesecake.jpg",
      description: "New York-style cheesecake is known for its rich, dense, and creamy texture.",
      ingredients: ["Cream Cheese", "Graham Crackers", "Sugar", "Eggs", "Sour Cream"],
      steps: ["Make crust", "Beat cream cheese", "Add eggs and cream", "Bake in water bath"]
    }
  },
  "toronto": {
    name: "Toronto",
    country: "Canada",
    monument: {
      name: "CN Tower",
      image: "/assets/monuments/toronto-cn-tower.jpg",
      caption: "CN Tower – Skyline Icon",
      history: "The CN Tower is a 553.3 m-high concrete communications and observation tower in downtown Toronto."
    },
    dish: {
      name: "Poutine",
      image: "/assets/kitchen/toronto-poutine.jpg",
      description: "Poutine is a dish of french fries and cheese curds topped with a brown gravy.",
      ingredients: ["French Fries", "Cheese Curds", "Brown Gravy"],
      steps: ["Fry potatoes", "Add fresh cheese curds", "Pour hot gravy over", "Serve immediately"]
    }
  },
  "chicago": {
    name: "Chicago",
    country: "USA",
    monument: {
      name: "Cloud Gate",
      image: "/assets/monuments/chicago-cloud-gate.jpg",
      caption: "Cloud Gate – The Bean",
      history: "Cloud Gate is a public sculpture by Indian-born British artist Anish Kapoor, that is the centerpiece of AT&T Plaza."
    },
    dish: {
      name: "Deep Dish Pizza",
      image: "/assets/kitchen/chicago-deep-dish.jpg",
      description: "Chicago-style pizza is pizza prepared according to several different styles developed in Chicago.",
      ingredients: ["Cornmeal Dough", "Mozzarella", "Sausage", "Chunky Tomato Sauce"],
      steps: ["Press dough into pan", "Layer cheese first", "Add toppings", "Top with tomato sauce and bake"]
    }
  },
  "rio-de-janeiro": {
    name: "Rio de Janeiro",
    country: "Brazil",
    monument: {
      name: "Christ the Redeemer",
      image: "/assets/monuments/rio-christ-the-redeemer.jpg",
      caption: "Christ the Redeemer – Art Deco Colossus",
      history: "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil."
    },
    dish: {
      name: "Pão de Queijo",
      image: "/assets/kitchen/rio-pao-de-queijo.jpg",
      description: "Pão de queijo or Brazilian cheese bread is a small, baked cheese roll or cheese bun.",
      ingredients: ["Tapioca Flour", "Cheese", "Milk", "Oil", "Eggs"],
      steps: ["Boil milk and oil", "Mix with flour", "Add eggs and cheese", "Bake until puffed"]
    }
  },
  "mexico-city": {
    name: "Mexico City",
    country: "Mexico",
    monument: {
      name: "Zócalo",
      image: "/assets/monuments/mexico-city-zocalo.jpg",
      caption: "Zócalo – Main Square",
      history: "The Zócalo is the common name of the main square in central Mexico City."
    },
    dish: {
      name: "Tacos al Pastor",
      image: "/assets/kitchen/mexico-city-tacos.jpg",
      description: "Tacos al pastor is a taco made with spit-grilled pork.",
      ingredients: ["Pork", "Achiote", "Pineapple", "Corn Tortillas", "Cilantro"],
      steps: ["Marinate pork", "Grill on spit", "Slice into tortillas", "Top with pineapple and onion"]
    }
  },
  "patagonia": {
    name: "Patagonia",
    country: "Argentina/Chile",
    monument: {
      name: "Perito Moreno Glacier",
      image: "/assets/monuments/patagonia-glacier.jpg",
      caption: "Perito Moreno – Ice Giant",
      history: "The Perito Moreno Glacier is a glacier located in the Los Glaciares National Park in southwest Santa Cruz Province, Argentina."
    },
    dish: {
      name: "Argentine Empanadas",
      image: "/assets/kitchen/patagonia-empanadas.jpg",
      description: "An empanada is a type of baked or fried turnover consisting of pastry and filling.",
      ingredients: ["Flour", "Beef", "Onions", "Olives", "Spices"],
      steps: ["Make dough", "Prepare filling", "Fold and crimp", "Bake or fry"]
    }
  },
  "machu-picchu": {
    name: "Machu Picchu",
    country: "Peru",
    monument: {
      name: "Inca Ruins",
      image: "/assets/monuments/machu-picchu-ruins.jpg",
      caption: "Machu Picchu – Lost City of the Incas",
      history: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru."
    },
    dish: {
      name: "Peruvian Ceviche",
      image: "/assets/kitchen/machu-picchu-ceviche.jpg",
      description: "Ceviche is a South American seafood dish that originated in Peru, typically made from fresh raw fish cured in fresh citrus juices.",
      ingredients: ["Raw Fish", "Lime Juice", "Red Onion", "Chili Peppers", "Cilantro"],
      steps: ["Cut fish into cubes", "Marinate in lime juice", "Add onions and chilies", "Serve with sweet potato"]
    }
  },
  "miami": {
    name: "Miami",
    country: "USA",
    monument: {
      name: "Art Deco District",
      image: "/assets/monuments/miami-art-deco.jpg",
      caption: "Art Deco District – Neon Nights",
      history: "The Miami Beach Architectural District is a U.S. historic district located in the South Beach neighborhood of Miami Beach."
    },
    dish: {
      name: "Key Lime Pie",
      image: "/assets/kitchen/miami-key-lime-pie.jpg",
      description: "Key lime pie is an American dessert pie made of Key lime juice, egg yolks, and sweetened condensed milk.",
      ingredients: ["Key Lime Juice", "Condensed Milk", "Graham Cracker Crust", "Egg Yolks"],
      steps: ["Make crust", "Whisk filling", "Pour and bake", "Chill before serving"]
    }
  },
  "vancouver": {
    name: "Vancouver",
    country: "Canada",
    monument: {
      name: "Capilano Suspension Bridge",
      image: "/assets/monuments/vancouver-capilano-bridge.jpg",
      caption: "Capilano Bridge – Treetop Adventure",
      history: "The Capilano Suspension Bridge is a simple suspension bridge crossing the Capilano River in the District of North Vancouver."
    },
    dish: {
      name: "Nanaimo Bars",
      image: "/assets/kitchen/vancouver-nanaimo-bars.jpg",
      description: "The Nanaimo bar is a dessert item of Canadian origin. It is a no-bake dessert bar that consists of three layers.",
      ingredients: ["Chocolate", "Graham Crumbs", "Custard Powder", "Coconut", "Walnuts"],
      steps: ["Make base layer", "Prepare custard middle", "Top with chocolate", "Cut into squares"]
    }
  },
  "san-francisco": {
    name: "San Francisco",
    country: "USA",
    monument: {
      name: "Golden Gate Bridge",
      image: "/assets/monuments/san-francisco-golden-gate.jpg",
      caption: "Golden Gate Bridge – International Orange",
      history: "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean."
    },
    dish: {
      name: "Sourdough Bread",
      image: "/assets/kitchen/san-francisco-sourdough.jpg",
      description: "Sourdough bread is made by the fermentation of dough using naturally occurring lactobacilli and yeast.",
      ingredients: ["Flour", "Water", "Salt", "Sourdough Starter"],
      steps: ["Mix dough", "Long fermentation", "Shape and score", "Bake in steam"]
    }
  },
  "tokyo": {
    name: "Tokyo",
    country: "Japan",
    monument: {
      name: "Tokyo Tower",
      image: "/assets/monuments/tokyo-tower.jpg",
      caption: "Tokyo Tower – Eiffel-inspired",
      history: "Tokyo Tower is a communications and observation tower in the Shiba-koen district of Minato, Tokyo, Japan."
    },
    dish: {
      name: "Fun Onigiri",
      image: "/assets/kitchen/tokyo-onigiri.jpg",
      description: "Onigiri, also known as omusubi, nigirimeshi, or rice ball, is a Japanese food made from white rice formed into triangular or cylindrical shapes.",
      ingredients: ["Short-grain Rice", "Nori", "Salt", "Fillings (Tuna, Salmon)"],
      steps: ["Cook rice", "Shape with wet hands", "Add filling", "Wrap with nori"]
    }
  },
  "kyoto": {
    name: "Kyoto",
    country: "Japan",
    monument: {
      name: "Kinkaku-ji",
      image: "/assets/monuments/kyoto-kinkakuji.jpg",
      caption: "Golden Pavilion – Zen Splendor",
      history: "Kinkaku-ji, officially named Rokuon-ji, is a Zen Buddhist temple in Kyoto, Japan."
    },
    dish: {
      name: "Matcha Green Tea Cookies",
      image: "/assets/kitchen/kyoto-matcha-cookies.jpg",
      description: "Matcha cookies are Japanese-style cookies flavored with high-quality green tea powder.",
      ingredients: ["Flour", "Matcha Powder", "Butter", "Sugar", "White Chocolate"],
      steps: ["Cream butter", "Sift dry ingredients", "Combine and chill", "Bake until set"]
    }
  },
  "bali": {
    name: "Bali",
    country: "Indonesia",
    monument: {
      name: "Uluwatu Temple",
      image: "/assets/monuments/bali-temple.jpg",
      caption: "Uluwatu Temple – Cliffside Sanctuary",
      history: "Uluwatu Temple is a Balinese Hindu sea temple located in Uluwatu."
    },
    dish: {
      name: "Nasi Goreng",
      image: "/assets/kitchen/bali-nasi-goreng.jpg",
      description: "Nasi goreng is a Southeast Asian fried rice dish, usually cooked with pieces of meat and vegetables.",
      ingredients: ["Rice", "Kecap Manis", "Shrimp Paste", "Garlic", "Egg"],
      steps: ["Fry aromatics", "Add rice and sauce", "Stir fry at high heat", "Top with fried egg"]
    }
  },
  "sydney": {
    name: "Sydney",
    country: "Australia",
    monument: {
      name: "Sydney Opera House",
      image: "/assets/monuments/sydney-opera-house.jpg",
      caption: "Sydney Opera House – Modern Masterpiece",
      history: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the foreshore of Sydney Harbour."
    },
    dish: {
      name: "Lamingtons",
      image: "/assets/kitchen/sydney-lamingtons.jpg",
      description: "A lamington is an Australian cake made from squares of butter cake or sponge cake coated in an outer layer of chocolate sauce and rolled in desiccated coconut.",
      ingredients: ["Sponge Cake", "Chocolate Icing", "Coconut"],
      steps: ["Bake sponge", "Cut into squares", "Dip in chocolate", "Roll in coconut"]
    }
  },
  "auckland": {
    name: "Auckland",
    country: "New Zealand",
    monument: {
      name: "Sky Tower",
      image: "/assets/monuments/auckland-sky-tower.jpg",
      caption: "Sky Tower – Southern Hemisphere Peak",
      history: "The Sky Tower is a telecommunications and observation tower in Auckland, New Zealand. It is 328 metres tall."
    },
    dish: {
      name: "Pavlova",
      image: "/assets/kitchen/auckland-pavlova.jpg",
      description: "Pavlova is a meringue-based dessert named after the Russian ballerina Anna Pavlova.",
      ingredients: ["Egg Whites", "Sugar", "Cornstarch", "Whipped Cream", "Fruit"],
      steps: ["Whisk meringue", "Bake low and slow", "Cool in oven", "Top with cream and fruit"]
    }
  },
  "singapore": {
    name: "Singapore",
    country: "Singapore",
    monument: {
      name: "Merlion",
      image: "/assets/monuments/singapore-merlion.jpg",
      caption: "The Merlion – Mythical Guardian",
      history: "The Merlion is the official mascot of Singapore, depicted as a mythical creature with a lion's head and the body of a fish."
    },
    dish: {
      name: "Chicken Rice",
      image: "/assets/kitchen/singapore-chicken-rice.jpg",
      description: "Hainanese chicken rice is a dish of poached chicken and seasoned rice, served with chilli sauce and usually with cucumber garnishes.",
      ingredients: ["Chicken", "Rice", "Ginger", "Pandan Leaves", "Chili Sauce"],
      steps: ["Poach chicken", "Cook rice in broth", "Prepare ginger chili", "Serve with cucumber"]
    }
  },
  "seoul": {
    name: "Seoul",
    country: "South Korea",
    monument: {
      name: "Gyeongbokgung Palace",
      image: "/assets/monuments/seoul-gyeongbokgung.jpg",
      caption: "Gyeongbokgung – Great Blessing Palace",
      history: "Gyeongbokgung was the main royal palace of the Joseon dynasty. Built in 1395, it is located in northern Seoul."
    },
    dish: {
      name: "Bibimbap",
      image: "/assets/kitchen/seoul-bibimbap.jpg",
      description: "Bibimbap is a Korean rice dish. The term 'bibim' means mixing and 'bap' refers to cooked rice.",
      ingredients: ["Rice", "Sautéed Vegetables", "Gochujang", "Beef", "Egg"],
      steps: ["Prepare vegetables", "Cook rice", "Arrange in bowl", "Mix with spicy sauce"]
    }
  },
  "hong-kong": {
    name: "Hong Kong",
    country: "China",
    monument: {
      name: "Victoria Peak",
      image: "/assets/monuments/hong-kong-victoria-peak.jpg",
      caption: "Victoria Peak – Skyline View",
      history: "Victoria Peak is a mountain in the western half of Hong Kong Island. It is also known as Mount Austin, and locally as The Peak."
    },
    dish: {
      name: "Dim Sum",
      image: "/assets/kitchen/hong-kong-dim-sum.jpg",
      description: "Dim sum is a large range of small Chinese dishes that are traditionally enjoyed in restaurants for brunch.",
      ingredients: ["Dough", "Shrimp", "Pork", "Tea"],
      steps: ["Prepare fillings", "Wrap in dough", "Steam in baskets", "Serve with tea"]
    }
  },
  "mumbai": {
    name: "Mumbai",
    country: "India",
    monument: {
      name: "Gateway of India",
      image: "/assets/monuments/mumbai-gateway.jpg",
      caption: "Gateway of India – Arch of Triumph",
      history: "The Gateway of India is an arch-monument built during the 20th century in Bombay, India."
    },
    dish: {
      name: "Vada Pav",
      image: "/assets/kitchen/mumbai-vada-pav.jpg",
      description: "Vada pav is a savory snack from the Indian state of Maharashtra. It consists of a deep fried potato dumpling placed inside a bread bun.",
      ingredients: ["Potatoes", "Gram Flour", "Bread Bun", "Chutney"],
      steps: ["Make potato filling", "Coat in batter", "Deep fry", "Serve in bun with chutney"]
    }
  },
  "dubai": {
    name: "Dubai",
    country: "UAE",
    monument: {
      name: "Burj Khalifa",
      image: "/assets/monuments/dubai-burj-khalifa.jpg",
      caption: "Burj Khalifa – Sky's the Limit",
      history: "The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. With a total height of 829.8 m, it is the tallest structure in the world."
    },
    dish: {
      name: "Luqaimat",
      image: "/assets/kitchen/dubai-luqaimat.jpg",
      description: "Luqaimat are sweet dumplings that are crunchy on the outside and soft on the inside, drizzled with date syrup.",
      ingredients: ["Flour", "Yeast", "Saffron", "Date Syrup", "Sesame Seeds"],
      steps: ["Make batter", "Let ferment", "Deep fry balls", "Drizzle with syrup"]
    }
  },
  "north-pole": {
    name: "North Pole",
    country: "Arctic",
    monument: {
      name: "Arctic Ice",
      image: "/assets/monuments/north-pole-ice.jpg",
      caption: "The Arctic – Frozen Frontier",
      history: "The North Pole is the northernmost point on Earth, lying diametrically opposite the South Pole."
    },
    dish: {
      name: "Hot Chocolate with Marshmallows",
      image: "/assets/kitchen/north-pole-hot-chocolate.jpg",
      description: "A warm and comforting drink made with cocoa and topped with fluffy marshmallows.",
      ingredients: ["Cocoa Powder", "Milk", "Sugar", "Marshmallows"],
      steps: ["Heat milk", "Whisk in cocoa", "Sweeten to taste", "Top with marshmallows"]
    }
  },
  "antarctic": {
    name: "Antarctic",
    country: "Antarctica",
    monument: {
      name: "Icebergs",
      image: "/assets/monuments/antarctic-icebergs.jpg",
      caption: "Antarctica – The White Continent",
      history: "Antarctica is Earth's southernmost continent. It contains the geographic South Pole."
    },
    dish: {
      name: "Pemmican Bars",
      image: "/assets/kitchen/antarctic-pemmican.jpg",
      description: "Pemmican is a concentrated mixture of fat and protein used as a nutritious food by explorers.",
      ingredients: ["Dried Meat", "Tallow", "Dried Berries"],
      steps: ["Grind meat", "Melt fat", "Mix and press", "Cool and cut"]
    }
  },
  "sahara": {
    name: "Sahara",
    country: "Africa",
    monument: {
      name: "Sand Dunes",
      image: "/assets/monuments/sahara-dunes.jpg",
      caption: "The Sahara – Sea of Sand",
      history: "The Sahara is a desert on the African continent. With an area of 9,200,000 square kilometres, it is the largest hot desert in the world."
    },
    dish: {
      name: "Couscous with Vegetables",
      image: "/assets/kitchen/sahara-couscous.jpg",
      description: "Couscous is a North African dish of small steamed granules of rolled durum wheat semolina.",
      ingredients: ["Couscous", "Chickpeas", "Carrots", "Zucchini", "Spices"],
      steps: ["Steam couscous", "Stew vegetables", "Fluff with fork", "Serve together"]
    }
  },
  "outback": {
    name: "Outback",
    country: "Australia",
    monument: {
      name: "Uluru",
      image: "/assets/monuments/outback-uluru.jpg",
      caption: "Uluru – Sacred Rock",
      history: "Uluru, also known as Ayers Rock, is a large sandstone rock formation in the southern part of the Northern Territory in central Australia."
    },
    dish: {
      name: "Damper Bread",
      image: "/assets/kitchen/outback-damper.jpg",
      description: "Damper is a traditional Australian soda bread, historically prepared by swagmen, drovers, and other travelers.",
      ingredients: ["Flour", "Water", "Salt", "Butter"],
      steps: ["Mix ingredients", "Knead lightly", "Bake in coals", "Eat with golden syrup"]
    }
  },
  "amazon": {
    name: "Amazon",
    country: "South America",
    monument: {
      name: "Rainforest",
      image: "/assets/monuments/amazon-rainforest.jpg",
      caption: "The Amazon – Green Lungs",
      history: "The Amazon rainforest is a moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin."
    },
    dish: {
      name: "Açaí Bowl",
      image: "/assets/kitchen/amazon-acai.jpg",
      description: "Açaí na tigela is a Brazilian dessert from Pará and Amazonas, made with the frozen and mashed fruit of the açaí palm.",
      ingredients: ["Açaí Pulp", "Banana", "Granola", "Guarana Syrup"],
      steps: ["Blend frozen pulp", "Pour into bowl", "Top with granola", "Add sliced fruit"]
    }
  },
  "hawaii": {
    name: "Hawaii",
    country: "USA",
    monument: {
      name: "Volcanoes",
      image: "/assets/monuments/hawaii-volcano.jpg",
      caption: "Hawaii Volcanoes – Fiery Birth",
      history: "Hawaiʻi Volcanoes National Park is an American national park located in the U.S. state of Hawaii on the island of Hawaii."
    },
    dish: {
      name: "Poke Bowl",
      image: "/assets/kitchen/hawaii-poke.jpg",
      description: "Poke is diced raw fish served either as an appetizer or a main course and is one of the main dishes of Native Hawaiian cuisine.",
      ingredients: ["Raw Tuna", "Soy Sauce", "Sesame Oil", "Rice", "Seaweed"],
      steps: ["Cube fish", "Marinate", "Serve over rice", "Top with scallions"]
    }
  },
  "madagascar": {
    name: "Madagascar",
    country: "Madagascar",
    monument: {
      name: "Baobab Trees",
      image: "/assets/monuments/madagascar-baobab.jpg",
      caption: "Avenue of the Baobabs – Ancient Giants",
      history: "The Avenue of the Baobabs is a prominent group of Grandidier's baobabs lining the dirt road between Morondava and Belon'i Tsiribihina."
    },
    dish: {
      name: "Romazava",
      image: "/assets/kitchen/madagascar-romazava.jpg",
      description: "Romazava is the national dish of Madagascar, a meat stew with greens.",
      ingredients: ["Beef", "Pork", "Leafy Greens", "Ginger", "Tomato"],
      steps: ["Brown meat", "Add water and ginger", "Simmer until tender", "Add greens at the end"]
    }
  },
  "galápagos": {
    name: "Galápagos",
    country: "Ecuador",
    monument: {
      name: "Giant Tortoise",
      image: "/assets/monuments/galapagos-tortoise.jpg",
      caption: "Galápagos Tortoise – Living History",
      history: "The Galápagos tortoise or Galápagos giant tortoise is a species of very large tortoise in the genus Chelonoidis."
    },
    dish: {
      name: "Encebollado",
      image: "/assets/kitchen/galapagos-encebollado.jpg",
      description: "Encebollado is a fish soup from Ecuador, regarded as a national dish.",
      ingredients: ["Tuna", "Yuca", "Red Onion", "Cilantro", "Spices"],
      steps: ["Boil yuca", "Cook fish in broth", "Make onion pickle", "Combine and serve hot"]
    }
  },
  "easter-island": {
    name: "Easter Island",
    country: "Chile",
    monument: {
      name: "Moai Statues",
      image: "/assets/monuments/easter-island-moai.jpg",
      caption: "Moai – Silent Sentinels",
      history: "Moai are monolithic human figures carved by the Rapa Nui people on Easter Island in eastern Polynesia."
    },
    dish: {
      name: "Umu Rapa Nui",
      image: "/assets/kitchen/easter-island-umu.jpg",
      description: "Umu Rapa Nui is a traditional Rapa Nui meal cooked in an underground oven.",
      ingredients: ["Fish", "Sweet Potato", "Taro", "Banana Leaves"],
      steps: ["Heat stones in pit", "Wrap food in leaves", "Place in pit", "Cover and steam for hours"]
    }
  },
  "santorini": {
    name: "Santorini",
    country: "Greece",
    monument: {
      name: "Blue Domes",
      image: "/assets/monuments/santorini-blue-domes.jpg",
      caption: "Oia Blue Domes – Aegean Gem",
      history: "The blue-domed churches of Oia are among the most photographed landmarks in Greece."
    },
    dish: {
      name: "Tomato Fritters",
      image: "/assets/kitchen/santorini-fritters.jpg",
      description: "Tomatokeftedes are traditional tomato fritters from Santorini, made with local cherry tomatoes.",
      ingredients: ["Cherry Tomatoes", "Onions", "Mint", "Flour", "Feta"],
      steps: ["Crush tomatoes", "Mix with aromatics", "Add flour to bind", "Fry until crispy"]
    }
  }
};
