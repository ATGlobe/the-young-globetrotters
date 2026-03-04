import { Book } from '../types';

export const BOOKS: Book[] = [
  {
    id: '1',
    slug: 'rome',
    title: 'Adventure in the Eternal City',
    city: 'Rome',
    country: 'Italy',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/vol.1%20Rome.jpg',
    intro: 'Discover the Colosseum and the secrets of ancient gladiators with Axel and Tino.',
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
    gumroadUrl: 'https://tuosito.com/rome'
  },
  {
    id: '2',
    slug: 'paris',
    title: 'Adventure in the City of Light',
    city: 'Paris',
    country: 'France',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.2%20Paris.jpg',
    intro: 'An adventure between the Eiffel Tower and the scent of freshly baked croissants.',
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
    gumroadUrl: 'https://tuosito.com/paris'
  },
  {
    id: '3',
    slug: 'london',
    title: 'Adventure in the Global Metropolis',
    city: 'London',
    country: 'United Kingdom',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.3%20London.jpg',
    intro: 'Solve a mystery between Big Ben and the Tower Bridge.',
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
    gumroadUrl: 'https://tuosito.com/london'
  },
  {
    id: '4',
    slug: 'barcelona',
    title: 'Adventure in the Vibrant Catalan City',
    city: 'Barcelona',
    country: 'Spain',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.4%20Barcelona.jpg',
    intro: 'Explore the colorful world of Gaudí and the lively Las Ramblas.',
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
    gumroadUrl: 'https://tuosito.com/barcelona'
  },
  {
    id: '5',
    slug: 'amsterdam',
    title: 'Adventure in the City of Canals',
    city: 'Amsterdam',
    country: 'Netherlands',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.5%20Amsterdam.jpg',
    intro: 'Bike along the canals and discover the house of Anne Frank.',
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
    gumroadUrl: 'https://tuosito.com/amsterdam'
  },
  {
    id: '6',
    slug: 'stockholm',
    title: 'Adventure in the Venice of the North',
    city: 'Stockholm',
    country: 'Sweden',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.6%20Stockholm.jpg',
    intro: 'Explore the archipelago and the historic Gamla Stan.',
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
    gumroadUrl: 'https://tuosito.com/stockholm'
  },
  {
    id: '7',
    slug: 'prague',
    title: 'Adventure in the City of a Hundred Spires',
    city: 'Prague',
    country: 'Czech Republic',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.7%20Prague.jpg',
    intro: 'Cross the Charles Bridge and visit the largest ancient castle in the world.',
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
    gumroadUrl: 'https://tuosito.com/prague'
  },
  {
    id: '8',
    slug: 'athens',
    title: 'Adventure in the Cradle of Civilization',
    city: 'Athens',
    country: 'Greece',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.8%20Athens.jpg',
    intro: 'Climb the Acropolis and learn about the ancient Greek gods.',
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
    gumroadUrl: 'https://tuosito.com/athens'
  },
  {
    id: '9',
    slug: 'berlin',
    title: 'Adventure in the City of Freedom',
    city: 'Berlin',
    country: 'Germany',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.9%20Berlin.jpg',
    intro: 'See the remains of the Berlin Wall and the Brandenburg Gate.',
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
    gumroadUrl: 'https://tuosito.com/berlin'
  },
  {
    id: '10',
    slug: 'vienna',
    title: 'Adventure in the City of Music',
    city: 'Vienna',
    country: 'Austria',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.10%20Vienna.jpg',
    intro: 'Visit the Schönbrunn Palace and listen to the music of Mozart.',
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
    gumroadUrl: 'https://tuosito.com/vienna'
  },
  {
    id: '11',
    slug: 'lisbon',
    title: 'Adventure in the City of Explorers',
    city: 'Lisbon',
    country: 'Portugal',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.11%20Lisbon.jpg',
    intro: 'Ride the yellow trams and discover the Belém Tower.',
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
    gumroadUrl: 'https://tuosito.com/lisbon'
  },
  {
    id: '12',
    slug: 'dublin',
    title: 'Adventure in the Fair City',
    city: 'Dublin',
    country: 'Ireland',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.12%20Dublin.jpg',
    intro: 'Explore the Trinity College library and the green Phoenix Park.',
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
    gumroadUrl: 'https://tuosito.com/dublin'
  },
  {
    id: '13',
    slug: 'edinburgh',
    title: 'Adventure in the Historic Capital',
    city: 'Edinburgh',
    country: 'Scotland',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.13%20Edinburgh.jpg',
    intro: 'Visit the Edinburgh Castle and walk the Royal Mile.',
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
    gumroadUrl: 'https://tuosito.com/edinburgh'
  },
  {
    id: '14',
    slug: 'budapest',
    title: 'Adventure in the Pearl of the Danube',
    city: 'Budapest',
    country: 'Hungary',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.14%20Budapest.jpg',
    intro: 'Relax in the thermal baths and see the Parliament building.',
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
    gumroadUrl: 'https://tuosito.com/budapest'
  },
  {
    id: '15',
    slug: 'copenhagen',
    title: 'Adventure in the City of Fairytales',
    city: 'Copenhagen',
    country: 'Denmark',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.15%20Copenhagen.jpg',
    intro: 'Meet the Little Mermaid and have fun at Tivoli Gardens.',
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
    gumroadUrl: 'https://tuosito.com/copenhagen'
  },
  {
    id: '16',
    slug: 'oslo',
    title: 'Adventure in the Green Capital',
    city: 'Oslo',
    country: 'Norway',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.16%20Oslo.jpg',
    intro: 'Visit the Viking Ship Museum and the Vigeland Park.',
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
    gumroadUrl: 'https://tuosito.com/oslo'
  },
  {
    id: '17',
    slug: 'helsinki',
    title: 'Adventure in the Daughter of the Baltic',
    city: 'Helsinki',
    country: 'Finland',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.17%20Helsinki.jpg',
    intro: 'Explore the Suomenlinna fortress and the Market Square.',
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
    gumroadUrl: 'https://tuosito.com/helsinki'
  },
  {
    id: '18',
    slug: 'reykjavik',
    title: 'Adventure in the Geothermal City',
    city: 'Reykjavik',
    country: 'Iceland',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.18%20Reykjavik.jpg',
    intro: 'See the Northern Lights and the Hallgrímskirkja church.',
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
    gumroadUrl: 'https://tuosito.com/reykjavik'
  },
  {
    id: '19',
    slug: 'istanbul',
    title: 'Adventure at the Crossroads of Continents',
    city: 'Istanbul',
    country: 'Turkey',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.19%20Istanbul.jpg',
    intro: 'Visit the Hagia Sophia and the Grand Bazaar.',
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
    gumroadUrl: 'https://tuosito.com/istanbul'
  },
  {
    id: '20',
    slug: 'saint-petersburg',
    title: 'Adventure in the Imperial City',
    city: 'Saint Petersburg',
    country: 'Russia',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.20%20Saint%20Petersburg.jpg',
    intro: 'Explore the Hermitage Museum and the Peter and Paul Fortress.',
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
    gumroadUrl: 'https://tuosito.com/saint-petersburg'
  },
  {
    id: '21',
    slug: 'new-york',
    title: 'Adventure in the Big Apple',
    city: 'New York',
    country: 'USA',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.21%20New%20York.jpg',
    intro: 'The city that never sleeps, from Central Park to Times Square.',
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
    gumroadUrl: 'https://tuosito.com/new-york'
  },
  {
    id: '22',
    slug: 'toronto',
    title: 'Adventure in the Dynamic Metropolis',
    city: 'Toronto',
    country: 'Canada',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.22%20Toronto.jpg',
    intro: 'Climb the CN Tower and explore the Distillery District.',
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
    gumroadUrl: 'https://tuosito.com/toronto'
  },
  {
    id: '23',
    slug: 'chicago',
    title: 'Adventure in the Windy City',
    city: 'Chicago',
    country: 'USA',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.23%20Chicago.jpg',
    intro: 'See the "Bean" in Millennium Park and visit the Navy Pier.',
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
    gumroadUrl: 'https://tuosito.com/chicago'
  },
  {
    id: '24',
    slug: 'rio-de-janeiro',
    title: 'Adventure in the Marvelous City',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.24%20Rio%20de%20Janeiro%20(1).jpg',
    intro: 'Visit Christ the Redeemer and relax on Copacabana beach.',
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
    gumroadUrl: 'https://tuosito.com/rio-de-janeiro'
  },
  {
    id: '25',
    slug: 'mexico-city',
    title: 'Adventure in the Heart of Mexico',
    city: 'Mexico City',
    country: 'Mexico',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.25%20Mexico%20City.jpg',
    intro: 'Explore the ancient Aztec ruins and the colorful Xochimilco canals.',
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
    gumroadUrl: 'https://tuosito.com/mexico-city'
  },
  {
    id: '26',
    slug: 'patagonia',
    title: 'Adventure in the Untamed Wilderness',
    city: 'Patagonia',
    country: 'Argentina/Chile',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.26%20Patagonia.jpg',
    intro: 'See the Perito Moreno Glacier and the peaks of Torres del Paine.',
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
    gumroadUrl: 'https://tuosito.com/patagonia'
  },
  {
    id: '27',
    slug: 'machu-picchu',
    title: 'Adventure in the Lost City of the Incas',
    city: 'Machu Picchu',
    country: 'Peru',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.27%20Machu%20Picchu.jpg',
    intro: 'Hike the Inca Trail and discover the secrets of the Andes.',
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
    gumroadUrl: 'https://tuosito.com/machu-picchu'
  },
  {
    id: '28',
    slug: 'miami',
    title: 'Adventure in the Magic City',
    city: 'Miami',
    country: 'USA',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.28%20Miami.jpg',
    intro: 'Enjoy the Art Deco district and the Everglades National Park.',
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
    gumroadUrl: 'https://tuosito.com/miami'
  },
  {
    id: '29',
    slug: 'vancouver',
    title: 'Adventure in the Gateway to the Pacific',
    city: 'Vancouver',
    country: 'Canada',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.29%20Vancouver.jpg',
    intro: 'Walk across the Capilano Suspension Bridge and explore Stanley Park.',
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
    gumroadUrl: 'https://tuosito.com/vancouver'
  },
  {
    id: '30',
    slug: 'san-francisco',
    title: 'Adventure in the City by the Bay',
    city: 'San Francisco',
    country: 'USA',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.30%20San%20Francisco.jpg',
    intro: 'Cross the Golden Gate Bridge and ride the historic cable cars.',
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
    gumroadUrl: 'https://tuosito.com/san-francisco'
  },
  {
    id: '31',
    slug: 'tokyo',
    title: 'Adventure in the Neon Metropolis',
    city: 'Tokyo',
    country: 'Japan',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.31%20Tokyo.jpg',
    intro: 'Between bright skyscrapers, ancient temples, and futuristic robots.',
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
    gumroadUrl: 'https://tuosito.com/tokyo'
  },
  {
    id: '32',
    slug: 'kyoto',
    title: 'Adventure in the Ancient Capital',
    city: 'Kyoto',
    country: 'Japan',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.32%20Kyoto.jpg',
    intro: 'Visit the Golden Pavilion and the Fushimi Inari Shrine.',
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
    gumroadUrl: 'https://tuosito.com/kyoto'
  },
  {
    id: '33',
    slug: 'bali',
    title: 'Adventure in the Island of the Gods',
    city: 'Bali',
    country: 'Indonesia',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.33%20Bali.jpg',
    intro: 'Explore the rice terraces and the beautiful beaches of Uluwatu.',
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
    gumroadUrl: 'https://tuosito.com/bali'
  },
  {
    id: '34',
    slug: 'sydney',
    title: 'Adventure in the Harbour City',
    city: 'Sydney',
    country: 'Australia',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.34%20Sydney.jpg',
    intro: 'See the Sydney Opera House and climb the Harbour Bridge.',
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
    gumroadUrl: 'https://tuosito.com/sydney'
  },
  {
    id: '35',
    slug: 'auckland',
    title: 'Adventure in the City of Sails',
    city: 'Auckland',
    country: 'New Zealand',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.35%20Auckland.jpg',
    intro: 'Visit the Sky Tower and explore the volcanic cones.',
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
    gumroadUrl: 'https://tuosito.com/auckland'
  },
  {
    id: '36',
    slug: 'singapore',
    title: 'Adventure in the Garden City',
    city: 'Singapore',
    country: 'Singapore',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Vol.36%20Singapore%20.jpg',
    intro: 'See the Supertrees at Gardens by the Bay and the Merlion.',
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
    gumroadUrl: 'https://tuosito.com/singapore'
  },
  {
    id: '37',
    slug: 'seoul',
    title: 'Adventure in the Dynamic Capital',
    city: 'Seoul',
    country: 'South Korea',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.37%20Seoul.jpg',
    intro: 'Visit the Gyeongbokgung Palace and the N Seoul Tower.',
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
    gumroadUrl: 'https://tuosito.com/seoul'
  },
  {
    id: '38',
    slug: 'hong-kong',
    title: 'Adventure in the Pearl of the Orient',
    city: 'Hong Kong',
    country: 'China',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.38%20Hong%20Kong.jpg',
    intro: 'Ride the Star Ferry and take the peak tram for a great view.',
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
    gumroadUrl: 'https://tuosito.com/hong-kong'
  },
  {
    id: '39',
    slug: 'mumbai',
    title: 'Adventure in the City of Dreams',
    city: 'Mumbai',
    country: 'India',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.39%20Mumbai.jpg',
    intro: 'See the Gateway of India and explore the Elephanta Caves.',
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
    gumroadUrl: 'https://tuosito.com/mumbai'
  },
  {
    id: '40',
    slug: 'dubai',
    title: 'Adventure in the Futuristic Oasis',
    city: 'Dubai',
    country: 'UAE',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Vol.40%20Dubai%20.jpg',
    intro: 'Climb the Burj Khalifa and visit the Palm Jumeirah.',
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
    gumroadUrl: 'https://tuosito.com/dubai'
  },
  {
    id: '41',
    slug: 'north-pole',
    title: 'Adventure in the Top of the World',
    city: 'North Pole',
    country: 'Arctic',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.41%20North%20Pole.jpg',
    intro: 'Meet the polar bears and see the endless ice.',
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
    gumroadUrl: 'https://tuosito.com/north-pole'
  },
  {
    id: '42',
    slug: 'antarctic',
    title: 'Adventure in the Frozen Continent',
    city: 'Antarctic',
    country: 'Antarctica',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.42%20Antarctic.jpg',
    intro: 'See the penguins and the massive icebergs.',
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
    gumroadUrl: 'https://tuosito.com/antarctic'
  },
  {
    id: '43',
    slug: 'sahara',
    title: 'Adventure in the Vast Desert Sea',
    city: 'Sahara',
    country: 'Africa',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.43%20Sahara.jpg',
    intro: 'Ride a camel across the sand dunes and see the oases.',
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
    gumroadUrl: 'https://tuosito.com/sahara'
  },
  {
    id: '44',
    slug: 'outback',
    title: 'Adventure in the Rugged Heartland',
    city: 'Outback',
    country: 'Australia',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.44%20Outback.jpg',
    intro: 'See Uluru and the unique wildlife of the desert.',
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
    gumroadUrl: 'https://tuosito.com/outback'
  },
  {
    id: '45',
    slug: 'amazon',
    title: 'Adventure in the Earth\'s Green Lungs',
    city: 'Amazon',
    country: 'South America',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.45%20The%20Amazon%20Rainforest.jpg',
    intro: 'Explore the jungle and see the colorful macaws.',
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
    gumroadUrl: 'https://tuosito.com/amazon'
  },
  {
    id: '46',
    slug: 'hawaii',
    title: 'Adventure in the Aloha State',
    city: 'Hawaii',
    country: 'USA',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.46%20Hawaii.jpg',
    intro: 'See the volcanoes and learn to surf on the big waves.',
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
    gumroadUrl: 'https://tuosito.com/hawaii'
  },
  {
    id: '47',
    slug: 'madagascar',
    title: 'Adventure in the Island of Unique Wonders',
    city: 'Madagascar',
    country: 'Madagascar',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.47%20Madagascar.jpg',
    intro: 'See the lemurs and the giant baobab trees.',
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
    gumroadUrl: 'https://tuosito.com/madagascar'
  },
  {
    id: '48',
    slug: 'galapagos',
    title: 'Adventure in Darwin\'s Living Laboratory',
    city: 'Galápagos',
    country: 'Ecuador',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.48%20Gal%C3%A1pagos.jpg',
    intro: 'Meet the giant tortoises and the marine iguanas.',
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
    gumroadUrl: 'https://tuosito.com/galapagos'
  },
  {
    id: '49',
    slug: 'easter-island',
    title: 'Adventure in Mysterious Rapa Nui',
    city: 'Easter Island',
    country: 'Chile',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.49%20Easter%20Island.jpg',
    intro: 'See the giant Moai statues and learn about the Rapa Nui culture.',
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
    gumroadUrl: 'https://tuosito.com/easter-island'
  },
  {
    id: '50',
    slug: 'santorini',
    title: 'Adventure in the Jewel of the Aegean',
    city: 'Santorini',
    country: 'Greece',
    cover: 'https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Vol.50%20Santorini.jpg',
    intro: 'See the white houses with blue domes and the beautiful sunset.',
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
    gumroadUrl: 'https://tuosito.com/santorini'
  }
];
