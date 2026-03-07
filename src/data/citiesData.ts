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
      history: "The Pantheon has a giant hole in its roof called the Oculus, which lets in sunlight and even rain. The Passeggiata is a lovely Italian tradition of taking a slow walk after dinner, and fast peregrine falcons love to build nests on Rome's ancient monuments."
    },
    dish: {
      name: "Spaghetti alla Carbonara",
      image: "/assets/kitchen/rome-carbonara.png",
      description: "Carbonara is a famous pasta dish from Rome that is loved by people all over the world. It is creamy and delicious, even though it doesn't use any cream at all!",
      ingredients: ["Spaghetti", "Eggs", "Pecorino Romano cheese", "Guanciale (cured pork)", "Black pepper"],
      steps: ["Boil pasta", "Whisk eggs and cheese", "Fry guanciale", "Combine all with pasta water"]
    }
  },
  "paris": {
    name: "Paris",
    country: "France",
    monument: {
      name: "Eiffel Tower",
      image: "/assets/monuments/paris-eiffel.png",
      caption: "The Eiffel Tower – Symbol of Paris",
      history: "Paris has a famous café culture where people love to sit outside and always remember to say 'Bonjour'. The Eiffel Tower was built for a big fair in 1889, and the city is home to urban wildlife like hedgehogs and clever foxes."
    },
    dish: {
      name: "Chef's Classic French Crêpes",
      image: "/assets/kitchen/paris-crepes.png",
      description: "Crêpes are very thin French pancakes that can be filled with sweet treats like chocolate or savory things like cheese. In Paris, you can find them being made at little stands all over the city!",
      ingredients: ["Flour", "Eggs", "Milk", "Butter", "Sugar"],
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
      history: "Afternoon Tea is a special British tradition where people enjoy tea and scones. Tower Bridge is a clever bridge that can lift up to let big ships pass, and you might even find seals swimming in the Thames river!"
    },
    dish: {
      name: "Traditional British Fish and Chips",
      image: "/assets/kitchen/london-fishchips.png",
      description: "Fish and Chips is the most famous meal in the UK, often enjoyed as a special treat on Fridays. It’s usually served with crispy battered fish and thick, fluffy potato chips!",
      ingredients: ["White fish", "Potatoes", "Flour", "Sparkling water", "Oil"],
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
      history: "In Barcelona, people build amazing human towers called Castells. The architect Antoni Gaudí designed buildings that look like fairy tales, and bright green Monk Parakeets live in the city's palm trees."
    },
    dish: {
      name: "Pa amb Tomàquet",
      image: "/assets/kitchen/barcelona-paella.jpg",
      description: "This is a simple and tasty Catalan snack made by rubbing fresh tomatoes onto toasted bread. It is a favorite way to start a meal in Barcelona!",
      ingredients: ["Crusty bread", "Ripe tomatoes", "Olive oil", "Garlic", "Salt"],
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
      history: "Amsterdam is famous for its bicycle culture and the orange celebrations of King's Day. The city's canals have 'dancing houses' that lean to the side, and Great Grey Herons are often seen by the water."
    },
    dish: {
      name: "Dutch Pannenkoeken",
      image: "/assets/kitchen/amsterdam-stroopwafels.jpg",
      description: "Dutch pancakes are larger and thinner than American pancakes but thicker than French crêpes. They are often topped with sweet syrup or even savory bacon!",
      ingredients: ["Flour", "Eggs", "Milk", "Salt", "Butter"],
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
      history: "The Swedish tradition of Fika is a special coffee and cake break. The Vasa is a giant 17th-century warship saved from the sea, and the forests nearby are home to giant moose and arctic foxes."
    },
    dish: {
      name: "Swedish Meatballs",
      image: "/assets/kitchen/stockholm-meatballs.jpg",
      description: "Swedish meatballs are small, round, and full of flavor. They are traditionally served with creamy gravy, potatoes, and sweet lingonberry jam!",
      ingredients: ["Ground meat", "Breadcrumbs", "Onion", "Cream", "Allspice"],
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
      history: "Prague has a long tradition of puppet making and beautiful marionettes. The Astronomical Clock is over 600 years old with moving figures, and wild boars hide in the thick forests near the city."
    },
    dish: {
      name: "Trdelník (Chimney Cake)",
      image: "/assets/kitchen/prague-trdelnik.jpg",
      description: "A Trdelník is a sweet pastry made from rolled dough that is grilled on a stick and covered in sugar and walnuts. It looks just like a little chimney!",
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
      history: "The Greek tradition of Philoxenia means 'friend to a stranger.' The Parthenon temple was built with clever optical illusions, and the Little Owl is still a famous symbol of wisdom in the city today."
    },
    dish: {
      name: "Tzatziki & Pita",
      image: "/assets/kitchen/athens-moussaka.jpg",
      description: "Tzatziki is a cool and refreshing dip made from yogurt and cucumbers. It is perfect for dipping warm pita bread into on a sunny day in Greece!",
      ingredients: ["Greek yogurt", "Cucumber", "Garlic", "Olive oil", "Fresh dill"],
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
      history: "Berlin has a special traffic light man called the Ampelmann. The Brandenburg Gate stands as a monument to unity and peace, and wild boars and raccoons sometimes wander into the city parks!"
    },
    dish: {
      name: "Currywurst",
      image: "/assets/kitchen/berlin-currywurst.jpg",
      description: "Currywurst is Berlin's most famous street food! It is a sliced sausage covered in a special spiced ketchup and dusted with curry powder.",
      ingredients: ["Pork sausage", "Ketchup", "Curry powder", "Worcestershire sauce", "Onion"],
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
      history: "Vienna is famous for its elegant coffee houses and delicious cakes. St. Stephen’s Cathedral has a roof made of 230,000 colorful tiles, and wild boars roam freely in the Lainzer Tiergarten reserve."
    },
    dish: {
      name: "Sachertorte",
      image: "/assets/kitchen/vienna-sachertorte.jpg",
      description: "The Sachertorte is a world-famous chocolate cake with a thin layer of apricot jam inside. It was invented in Vienna nearly 200 years ago!",
      ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Apricot jam"],
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
      history: "Lisbon is the home of Fado, a beautiful style of music that tells stories of the sea. The bright yellow Tram 28 rattles up and down the city's steepest hills, and you can spot pink flamingos in the Tagus River estuary."
    },
    dish: {
      name: "Pastéis de Nata",
      image: "/assets/kitchen/lisbon-pasteis-de-nata.jpg",
      description: "These are delicious Portuguese custard tarts with a crispy, flaky crust. They are best served warm with a little bit of cinnamon on top!",
      ingredients: ["Puff pastry", "Milk", "Sugar", "Egg yolks", "Cinnamon"],
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
      history: "Dublin is famous for its 'Craic'—fun and great conversation. The Ha'penny Bridge got its name from a half-penny toll, and Phoenix Park is home to a large herd of wild fallow deer."
    },
    dish: {
      name: "Traditional Irish Soda Bread",
      image: "/assets/kitchen/dublin-soda-bread.jpg",
      description: "Irish Soda Bread is a quick and easy bread that doesn't use yeast. It has a thick crust and is perfect with a bit of salty Irish butter!",
      ingredients: ["Flour", "Baking soda", "Buttermilk", "Salt"],
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
      history: "Every day at 1:00 PM, a giant cannon is fired from Edinburgh Castle. The castle is built on an extinct volcano, and nearby you might see adorable Puffins nesting on the rocky cliffs."
    },
    dish: {
      name: "Traditional Scottish Shortbread Cookies",
      image: "/assets/kitchen/edinburgh-shortbread.jpg",
      description: "Shortbread is a classic Scottish treat made with lots of butter. It is crumbly, sweet, and has been a favorite in Scotland for hundreds of years!",
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
      history: "Budapest is famous for thermal baths where people play chess while soaking. The Parliament building has 365 beautiful spires, and the Saker Falcon is the powerful national bird of Hungary."
    },
    dish: {
      name: "Hungarian Goulash",
      image: "/assets/kitchen/budapest-goulash.jpg",
      description: "Goulash is a hearty stew made with beef and vegetables. Its secret ingredient is Paprika, a bright red spice that gives it a wonderful flavor!",
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
      history: "The Danish word Hygge describes a feeling of coziness and contentment. The Little Mermaid statue was inspired by Hans Christian Andersen's stories, and the Mute Swan is the graceful national bird."
    },
    dish: {
      name: "Danish Smørrebrød",
      image: "/assets/kitchen/copenhagen-smorrebrod.jpg",
      description: "Smørrebrød are traditional Danish open-faced sandwiches. They start with dark rye bread and are piled high with colorful toppings like fish, eggs, or veggies!",
      ingredients: ["Rye bread", "Butter", "Cold cuts or fish", "Cucumber", "Radishes"],
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
      history: "Norwegians love Friluftsliv—living life in the open air. The Opera House looks like a giant white glacier rising from the water, and the Moose is known as the 'King of the Forest' in Norway."
    },
    dish: {
      name: "Norwegian Waffles",
      image: "/assets/kitchen/oslo-waffles.jpg",
      description: "Norwegian waffles are special because they are shaped like a bunch of hearts joined together. They are soft, sweet, and smell like delicious cardamom!",
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
      history: "Finland has over 3 million saunas! The Temppeliaukio Church was carved directly into a giant block of solid rock, and the rare Saimaa Ringed Seal lives in Finland's fresh water lakes."
    },
    dish: {
      name: "Karjalanpiirakka (Karelian Pasties)",
      image: "/assets/kitchen/helsinki-karelian-pies.jpg",
      description: "These are traditional Finnish pastries with a thin rye crust and a creamy rice filling. They are often topped with a mix of butter and chopped boiled eggs!",
      ingredients: ["Rye flour", "Rice", "Milk", "Butter", "Salt"],
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
      history: "Many people in Iceland believe in 'Hidden People' or elves. The Hallgrímskirkja church looks like volcanic basalt rock columns, and Iceland is one of the best places to see Atlantic Puffins."
    },
    dish: {
      name: "Chef's Cozy Plokkfiskur",
      image: "/assets/kitchen/reykjavik-skyr.jpg",
      description: "Plokkfiskur is a warm and comforting Icelandic fish stew made with white fish and potatoes. It’s the perfect meal for a chilly day in the North Atlantic!",
      ingredients: ["White fish (cod or haddock)", "Potatoes", "Milk", "Flour", "Butter"],
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
      history: "In Istanbul, people are very hospitable and serve hot tea in tulip-shaped glasses. Hagia Sophia has been a church, mosque, and museum, and you can see dolphins swimming in the Bosphorus strait."
    },
    dish: {
      name: "Baklava",
      image: "/assets/kitchen/istanbul-baklava.jpg",
      description: "Baklava is a sweet and crunchy pastry made of many thin layers of dough filled with chopped nuts and soaked in honey or syrup. It’s a real treat!",
      ingredients: ["Filo dough", "Pistachios or walnuts", "Butter", "Sugar", "Honey"],
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
      history: "In the summer, Saint Petersburg has 'White Nights' where the sky stays bright all night. The Hermitage Museum has over 3 million items, and the region is home to powerful brown bears and shy lynxes."
    },
    dish: {
      name: "Blini",
      image: "/assets/kitchen/st-petersburg-blini.jpg",
      description: "Blini are thin Russian pancakes that look like crêpes. They can be rolled up with sweet jam or savory fillings like sour cream and cheese!",
      ingredients: ["Flour", "Milk", "Eggs", "Butter", "Sugar"],
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
      history: "New York is known as 'The City That Never Sleeps' and has over 800 languages spoken! The Statue of Liberty was a gift from France, and you can see Peregrine Falcons nesting on the city's tall skyscrapers."
    },
    dish: {
      name: "New York Style Pizza",
      image: "/assets/kitchen/new-york-cheesecake.jpg",
      description: "New York pizza is famous for its large, thin, and foldable slices. It’s usually topped with a simple tomato sauce and lots of mozzarella cheese!",
      ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Oregano", "Olive oil"],
      steps: ["Stretch dough", "Spread sauce", "Add cheese", "Bake until bubbly"]
    }
  },
  "toronto": {
    name: "Toronto",
    country: "Canada",
    monument: {
      name: "CN Tower",
      image: "/assets/monuments/toronto-cn-tower.jpg",
      caption: "CN Tower – Skyline Icon",
      history: "Toronto is one of the most multicultural cities in the world, with people from everywhere! The CN Tower has a glass floor you can walk on, and the Beaver is the hardworking national animal of Canada."
    },
    dish: {
      name: "Poutine",
      image: "/assets/kitchen/toronto-poutine.jpg",
      description: "Poutine is Canada's most famous comfort food. It’s a plate of crispy French fries topped with squeaky cheese curds and warm, savory gravy!",
      ingredients: ["French fries", "Cheese curds", "Beef gravy"],
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
      history: "Chicago is called 'The Windy City' and is where the very first skyscraper was built. The Cloud Gate sculpture is made of 168 stainless steel plates, and the city's lakefront is a path for many migrating birds."
    },
    dish: {
      name: "Deep Dish Pizza",
      image: "/assets/kitchen/chicago-deep-dish.jpg",
      description: "Chicago Deep Dish pizza is more like a savory pie than a flat pizza. It has a high crust and is filled with layers of cheese and chunky tomato sauce!",
      ingredients: ["Cornmeal pizza dough", "Mozzarella cheese", "Chunky tomato sauce", "Italian sausage", "Parmesan"],
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
      history: "In Rio, people love to dance the Samba, especially during the giant Carnival parade. The Christ the Redeemer statue is one of the New Seven Wonders of the World, and colorful Toucans live in the nearby rainforest."
    },
    dish: {
      name: "Pão de Queijo (Cheese Bread)",
      image: "/assets/kitchen/rio-pao-de-queijo.jpg",
      description: "Pão de Queijo are small, chewy cheese rolls made with special tapioca flour. They are crunchy on the outside and soft and cheesy on the inside!",
      ingredients: ["Tapioca flour", "Cheese", "Milk", "Oil", "Eggs"],
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
      history: "Mexico City was built on top of an ancient Aztec city called Tenochtitlán. The Zócalo is one of the largest city squares in the world, and the city is famous for its bright orange Monarch Butterflies."
    },
    dish: {
      name: "Chef's Classic Tacos al Pastor",
      image: "/assets/kitchen/mexico-city-tacos.jpg",
      description: "Tacos al Pastor are a favorite street food in Mexico City. They are made with thinly sliced marinated pork and often topped with a piece of sweet pineapple!",
      ingredients: ["Pork", "Corn tortillas", "Pineapple", "Onion", "Cilantro"],
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
      history: "In Patagonia, people tell stories of giant explorers and ancient giants. The Perito Moreno Glacier is one of the few glaciers in the world that is still growing, and you can see wild Guanacos (like llamas) roaming the plains."
    },
    dish: {
      name: "Argentine Empanadas",
      image: "/assets/kitchen/patagonia-empanadas.jpg",
      description: "Empanadas are tasty little pastry pockets filled with meat or cheese. They are shaped like a half-moon and are perfect for a quick snack while exploring!",
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
      history: "The Inca people built Machu Picchu high in the mountains without using any wheels or iron tools! The stones fit together so perfectly that you can't even fit a piece of paper between them, and fluffy Llamas live all around the ruins."
    },
    dish: {
      name: "Peruvian Ceviche",
      image: "/assets/kitchen/machu-picchu-ceviche.jpg",
      description: "Ceviche is a fresh seafood dish where the fish is 'cooked' using only the juice of sour limes. It is served with sweet potatoes and crunchy corn!",
      ingredients: ["White fish", "Lime juice", "Red onion", "Chili peppers", "Cilantro"],
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
      history: "Miami is a very musical city where you can hear Latin rhythms like Salsa everywhere. The Art Deco buildings are painted in bright pastel colors like pink and blue, and you might see Manatees swimming in the warm coastal waters."
    },
    dish: {
      name: "Key Lime Pie",
      image: "/assets/kitchen/miami-key-lime-pie.jpg",
      description: "Key Lime Pie is a sweet and tangy dessert made from tiny, extra-sour limes that grow in Florida. It has a crunchy crust and is often topped with fluffy cream!",
      ingredients: ["Key lime juice", "Condensed milk", "Graham cracker crust", "Egg yolks"],
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
      history: "Vancouver is a city where you can see the mountains and the ocean at the same time. The totem poles tell stories of the First Nations people, and you might spot Orcas (Killer Whales) in the nearby waters."
    },
    dish: {
      name: "Nanaimo Bars",
      image: "/assets/kitchen/vancouver-nanaimo-bars.jpg",
      description: "Nanaimo bars are a sweet Canadian treat that you don't even have to bake! They have three layers: a crumbly base, a custard center, and a chocolate top.",
      ingredients: ["Graham cracker crumbs", "Coconut", "Custard powder", "Chocolate", "Butter"],
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
      history: "San Francisco is famous for its steep hills and historic cable cars that run on tracks. The Golden Gate Bridge is painted a special color called 'International Orange,' and wild parrots live on Telegraph Hill!"
    },
    dish: {
      name: "Sourdough Bread Bowl",
      image: "/assets/kitchen/san-francisco-sourdough.jpg",
      description: "San Francisco is world-famous for its tangy sourdough bread. It’s often served as a hollowed-out bowl filled with warm, creamy clam chowder!",
      ingredients: ["Sourdough starter", "Flour", "Water", "Salt"],
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
      history: "Tokyo is the largest city in the world and is famous for its bright neon lights and high-tech gadgets. The city has special 'Cat Cafés' where you can play with kittens, and you might see beautiful Koi fish swimming in temple ponds."
    },
    dish: {
      name: "Fun Onigiri (Rice Balls)",
      image: "/assets/kitchen/tokyo-onigiri.jpg",
      description: "Onigiri are tasty Japanese rice balls that are often shaped into triangles or even cute animals! They are wrapped in a piece of crunchy seaweed called Nori.",
      ingredients: ["Short-grain rice", "Nori (seaweed)", "Salt", "Tuna or salmon filling"],
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
      history: "Kyoto was the capital of Japan for over 1,000 years and is famous for its beautiful Zen gardens. The Kinkaku-ji temple is covered in real gold leaf, and you might see elegant cranes wading in the temple's quiet ponds."
    },
    dish: {
      name: "Matcha Green Tea Cookies",
      image: "/assets/kitchen/kyoto-matcha-cookies.jpg",
      description: "Matcha is a special green tea powder from Kyoto that is used in traditional tea ceremonies. These cookies are sweet, crunchy, and have a beautiful bright green color!",
      ingredients: ["Flour", "Matcha powder", "Butter", "Sugar", "White chocolate"],
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
      history: "Bali is known as the 'Island of the Gods' and is famous for its beautiful traditional dances. The Uluwatu Temple sits on a high cliff above the ocean, and cheeky Long-tailed Macaque monkeys live all around it!"
    },
    dish: {
      name: "Nasi Goreng (Fried Rice)",
      image: "/assets/kitchen/bali-nasi-goreng.jpg",
      description: "Nasi Goreng is Indonesia's most famous dish. It is a delicious fried rice cooked with sweet soy sauce and often served with a crispy fried egg on top!",
      ingredients: ["Rice", "Sweet soy sauce", "Garlic", "Shallots", "Egg"],
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
      history: "Sydney is famous for its beautiful harbor and the 'Great Barrier Reef' that starts further north. The Opera House roof looks like giant white sails, and you can see colorful Rainbow Lorikeets flying in the city parks."
    },
    dish: {
      name: "Lamingtons",
      image: "/assets/kitchen/sydney-lamingtons.jpg",
      description: "Lamingtons are a classic Australian treat. They are squares of fluffy sponge cake dipped in chocolate and rolled in crunchy coconut flakes!",
      ingredients: ["Sponge cake", "Chocolate icing", "Desiccated coconut"],
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
      history: "Auckland is built on a field of 53 dormant volcanoes! The Sky Tower is the tallest building in the Southern Hemisphere, and the Kiwi is a unique flightless bird that only lives in New Zealand."
    },
    dish: {
      name: "Pavlova",
      image: "/assets/kitchen/auckland-pavlova.jpg",
      description: "Pavlova is a light and fluffy meringue dessert that is crunchy on the outside and soft like a marshmallow on the inside. It’s usually topped with fresh fruit!",
      ingredients: ["Egg whites", "Sugar", "Cornstarch", "Whipped cream", "Fresh fruit"],
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
      history: "Singapore is a very green city filled with amazing 'Supertrees' and vertical gardens. The Merlion is a mythical creature with the head of a lion and the body of a fish, and the city is home to many wild Otters!"
    },
    dish: {
      name: "Hainanese Chicken Rice",
      image: "/assets/kitchen/singapore-chicken-rice.jpg",
      description: "Chicken Rice is often called the national dish of Singapore. It is simple but delicious, with tender chicken and rice cooked in a flavorful broth!",
      ingredients: ["Chicken", "Rice", "Ginger", "Pandan leaves", "Cucumber"],
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
      history: "Seoul is a city where ancient palaces stand right next to giant high-tech skyscrapers. Gyeongbokgung was the main palace of the kings, and the Siberian Tiger is a very important symbol in Korean culture."
    },
    dish: {
      name: "Bibimbap (Mixed Rice)",
      image: "/assets/kitchen/seoul-bibimbap.jpg",
      description: "Bibimbap is a colorful bowl of rice topped with many different sautéed vegetables and a fried egg. You mix it all together with a spicy sauce before eating!",
      ingredients: ["Rice", "Sautéed vegetables", "Gochujang (chili paste)", "Beef", "Egg"],
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
      history: "Hong Kong is a busy city with more skyscrapers than any other city in the world! You can ride a special steep tram to the top of Victoria Peak, and you might see pink dolphins in the sea nearby."
    },
    dish: {
      name: "Dim Sum",
      image: "/assets/kitchen/hong-kong-dim-sum.jpg",
      description: "Dim Sum are small, bite-sized dishes that are usually served in little bamboo steamer baskets. It’s a fun way to try many different things in one meal!",
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
      history: "Mumbai is the home of Bollywood, the biggest movie industry in the world! The Gateway of India was built to welcome visitors arriving by sea, and you can see many colorful tropical birds in the city's parks."
    },
    dish: {
      name: "Vada Pav (Indian Burger)",
      image: "/assets/kitchen/mumbai-vada-pav.jpg",
      description: "Vada Pav is Mumbai's favorite street food. It’s a spicy fried potato dumpling tucked inside a soft bread bun with tasty chutneys!",
      ingredients: ["Potatoes", "Gram flour", "Bread bun", "Spices", "Chutney"],
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
      history: "Dubai is a city built in the desert and is home to the tallest building in the world! The Burj Khalifa is so tall you can see the sunset twice, and you can see Arabian Gazelles roaming in the desert nearby."
    },
    dish: {
      name: "Luqaimat (Sweet Dumplings)",
      image: "/assets/kitchen/dubai-luqaimat.jpg",
      description: "Luqaimat are sweet, crunchy dumplings that are soft on the inside. They are drizzled with sticky date syrup and sprinkled with sesame seeds!",
      ingredients: ["Flour", "Yeast", "Saffron", "Date syrup", "Sesame seeds"],
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
      history: "The North Pole is a magical place covered in thick ice and snow all year round. It is the only place on Earth where you can find Polar Bears in the wild, and in the winter, the sky glows with the beautiful Northern Lights!"
    },
    dish: {
      name: "Chef's Cozy Hot Chocolate",
      image: "/assets/kitchen/north-pole-hot-chocolate.jpg",
      description: "A warm and comforting drink made with cocoa and topped with fluffy marshmallows. It’s the perfect way to warm up after a day of exploring the icy Arctic!",
      ingredients: ["Cocoa powder", "Milk", "Sugar", "Marshmallows"],
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
      history: "Antarctica is the coldest, windiest, and driest continent on Earth! It is home to thousands of Emperor Penguins, and you can see giant icebergs that are as big as whole cities floating in the ocean."
    },
    dish: {
      name: "Explorer's Energy Bars",
      image: "/assets/kitchen/antarctic-pemmican.jpg",
      description: "These energy bars are inspired by the food that brave explorers eat to stay strong in the cold. They are packed with protein and fruit to give you lots of energy!",
      ingredients: ["Oats", "Honey", "Dried berries", "Nuts", "Seeds"],
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
      history: "The Sahara is the largest hot desert in the world and is famous for its giant sand dunes. People use Camels to travel across the desert because they can go for a long time without water, and you might see a Fennec Fox with its giant ears!"
    },
    dish: {
      name: "Traditional Vegetable Couscous",
      image: "/assets/kitchen/sahara-couscous.jpg",
      description: "Couscous is a favorite dish in North Africa made from tiny grains of wheat. It is steamed until fluffy and served with lots of colorful vegetables and spices!",
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
      history: "The Outback is a giant, red desert that covers most of Australia. Uluru is a massive sandstone rock that changes color from orange to deep red at sunset, and you can see Red Kangaroos hopping across the dusty plains."
    },
    dish: {
      name: "Damper Bread",
      image: "/assets/kitchen/outback-damper.jpg",
      description: "Damper is a traditional Australian bread that was originally cooked in the hot coals of a campfire. It’s a simple and hearty bread that tastes great with a bit of butter and honey!",
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
      history: "The Amazon is the largest tropical rainforest in the world and produces 20% of the Earth's oxygen! It is home to millions of different animals, including the colorful Scarlet Macaw and the slow-moving Three-toed Sloth."
    },
    dish: {
      name: "Açaí Bowl",
      image: "/assets/kitchen/amazon-acai.jpg",
      description: "Açaí is a small purple berry that grows on palm trees in the Amazon. It is mashed into a thick, frozen smoothie and topped with crunchy granola and fresh tropical fruit!",
      ingredients: ["Açaí pulp", "Banana", "Granola", "Guarana syrup"],
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
      history: "Hawaii is a chain of islands in the middle of the Pacific Ocean that were all formed by volcanoes. You can see glowing lava flows and giant sea turtles swimming in the clear blue water, and everyone greets each other with 'Aloha!'"
    },
    dish: {
      name: "Poke Bowl",
      image: "/assets/kitchen/hawaii-poke.jpg",
      description: "Poke is a fresh Hawaiian dish made with bite-sized pieces of raw fish marinated in soy sauce and sesame oil. It’s served over warm rice with crunchy seaweed and vegetables!",
      ingredients: ["Raw tuna", "Soy sauce", "Sesame oil", "Rice", "Seaweed"],
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
      history: "Madagascar is a giant island where 90% of the animals can't be found anywhere else on Earth! The Baobab trees look like they were planted upside down with their roots in the air, and you can see many different kinds of Lemurs."
    },
    dish: {
      name: "Romazava (Beef Stew)",
      image: "/assets/kitchen/madagascar-romazava.jpg",
      description: "Romazava is the national dish of Madagascar. it’s a hearty stew made with meat and special green leaves that give it a unique and delicious flavor!",
      ingredients: ["Beef", "Leafy greens", "Ginger", "Tomato", "Garlic"],
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
      history: "The Galápagos Islands are famous for animals that aren't afraid of people at all! You can see giant tortoises that can live for over 150 years, and funny Blue-footed Boobies that do a special dance to show off their bright blue feet."
    },
    dish: {
      name: "Encebollado (Fish Soup)",
      image: "/assets/kitchen/galapagos-encebollado.jpg",
      description: "Encebollado is a flavorful fish soup that is a favorite in the Galápagos. It’s made with fresh tuna and yuca, and topped with lots of pickled red onions!",
      ingredients: ["Tuna", "Yuca", "Red onion", "Cilantro", "Spices"],
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
      history: "Easter Island is one of the most remote places in the world. It is famous for the Moai, giant stone statues with big heads that were carved by the Rapa Nui people hundreds of years ago to honor their ancestors."
    },
    dish: {
      name: "Umu Rapa Nui (Earth Oven Feast)",
      image: "/assets/kitchen/easter-island-umu.jpg",
      description: "Umu Rapa Nui is a traditional way of cooking a big feast in a hole in the ground! The food is wrapped in banana leaves and cooked slowly over hot stones.",
      ingredients: ["Fish", "Sweet potato", "Taro", "Banana leaves"],
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
      history: "Santorini is a beautiful island in Greece that was formed by a giant volcanic eruption. It is famous for its white houses with bright blue roofs that match the color of the sea, and you can see many friendly donkeys on the steep paths."
    },
    dish: {
      name: "Tomato Fritters (Tomatokeftedes)",
      image: "/assets/kitchen/santorini-fritters.jpg",
      description: "These fritters are made from special cherry tomatoes that grow in the volcanic soil of Santorini. They are mixed with fresh herbs and fried until they are golden and crispy!",
      ingredients: ["Cherry tomatoes", "Onions", "Fresh mint", "Flour", "Feta cheese"],
      steps: ["Crush tomatoes", "Mix with aromatics", "Add flour to bind", "Fry until crispy"]
    }
  }
};
