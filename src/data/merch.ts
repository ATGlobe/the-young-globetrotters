export interface Product {
  id: string;
  name: string;
  category: 'Tazze' | 'Cappelli' | 'Zaini' | 'Giochi' | 'Gadget' | 'Adesivi';
  price: number;
  image: string;
  description: string;
  tags: string[];
  character?: 'Axel' | 'Tino' | 'Chef' | 'Professor Gufo' | 'Foxy';
  badge?: 'Novità' | 'Più Venduto' | 'Offerta Speciale';
}

export const MERCH_PRODUCTS: Product[] = [
  // TAZZE
  {
    id: 'tazza-1',
    name: 'Tazza "I Sorvolo il Mondo" con Axel',
    category: 'Tazze',
    price: 14.99,
    image: 'https://picsum.photos/seed/axel-mug/600/600',
    description: 'Inizia la giornata volando alto con Axel! Questa tazza in ceramica di alta qualità presenta Axel il falco pilota mentre sorvola una mappa del mondo dettagliata.',
    tags: ['falco', 'aviazione', 'mappa'],
    character: 'Axel',
    badge: 'Più Venduto'
  },
  {
    id: 'tazza-2',
    name: 'Tazza "Lo Chef Consiglia" con Chef',
    category: 'Tazze',
    price: 14.99,
    image: 'https://picsum.photos/seed/chef-mug/600/600',
    description: 'Il segreto di una buona colazione? I consigli di Chef! Una tazza colorata con Chef che presenta la sua ricetta preferita di Parigi.',
    tags: ['cucina', 'ricette'],
    character: 'Chef'
  },
  {
    id: 'tazza-3',
    name: 'Tazza "La Lezione del Giorno" con Professor Gufo',
    category: 'Tazze',
    price: 14.99,
    image: 'https://picsum.photos/seed/owl-mug/600/600',
    description: 'Impara una nuova curiosità storica ogni mattina. Professor Gufo ti accompagna alla scoperta del Colosseo.',
    tags: ['storia', 'educazione'],
    character: 'Professor Gufo'
  },
  {
    id: 'tazza-4',
    name: 'Tazza "Foxy all\'Attacco"',
    category: 'Tazze',
    price: 14.99,
    image: 'https://picsum.photos/seed/foxy-mug/600/600',
    description: 'Divertimento assicurato con Foxy che insegue Axel sulla sua mongolfiera improvvisata.',
    tags: ['divertimento', 'avventura'],
    character: 'Foxy'
  },
  {
    id: 'tazza-5',
    name: 'Set Regalo "Le Città del Mondo"',
    category: 'Tazze',
    price: 49.99,
    image: 'https://picsum.photos/seed/mug-set/600/600',
    description: 'Il set definitivo per i veri collezionisti. 4 tazze esclusive con le illustrazioni delle città più belle.',
    tags: ['set regalo', 'collezione'],
    badge: 'Offerta Speciale'
  },
  // CAPPELLI
  {
    id: 'cappello-1',
    name: 'Berretto da Pilota "Axel"',
    category: 'Cappelli',
    price: 24.99,
    image: 'https://picsum.photos/seed/axel-cap/600/600',
    description: 'Diventa un vero pilota con il berretto ufficiale di Axel. Ali di falco ricamate in rilievo.',
    tags: ['pilota', 'accessori'],
    character: 'Axel',
    badge: 'Novità'
  },
  {
    id: 'cappello-2',
    name: 'Cappello da Cuoco di Chef',
    category: 'Cappelli',
    price: 22.99,
    image: 'https://picsum.photos/seed/chef-hat/600/600',
    description: 'Per i piccoli aspiranti chef. Cappello bianco classico con l\'allegro faccione di Chef.',
    tags: ['cucina', 'bambini'],
    character: 'Chef'
  },
  {
    id: 'cappello-3',
    name: 'Cappello da Esploratore "Tino"',
    category: 'Cappelli',
    price: 26.99,
    image: 'https://picsum.photos/seed/tino-hat/600/600',
    description: 'Perfetto per le gite all\'aperto. Stile safari con la scritta "I Love Street Food".',
    tags: ['esplorazione', 'outdoor'],
    character: 'Tino'
  },
  {
    id: 'cappello-4',
    name: 'Cappello da Professore "Gufo"',
    category: 'Cappelli',
    price: 28.99,
    image: 'https://picsum.photos/seed/owl-hat/600/600',
    description: 'Uno stile colto e raffinato in tweed, con una piccola spilla a forma di gufo.',
    tags: ['stile', 'vintage'],
    character: 'Professor Gufo'
  },
  // ZAINI
  {
    id: 'zaino-1',
    name: 'Zaino "Mappa del Mondo"',
    category: 'Zaini',
    price: 39.99,
    image: 'https://picsum.photos/seed/map-backpack/600/600',
    description: 'Porta tutto il mondo sulle tue spalle con questo zaino spazioso e resistente.',
    tags: ['scuola', 'viaggio'],
    badge: 'Più Venduto'
  },
  {
    id: 'zaino-2',
    name: 'Zaino "Aviazione" di Axel',
    category: 'Zaini',
    price: 44.99,
    image: 'https://picsum.photos/seed/axel-backpack/600/600',
    description: 'Design mimetico blu ispirato alla squadriglia di Axel. Ergonomico e leggero.',
    tags: ['tecnico', 'blu'],
    character: 'Axel'
  },
  {
    id: 'zaino-3',
    name: 'Zaino "Chef in Erba" di Tino',
    category: 'Zaini',
    price: 39.99,
    image: 'https://picsum.photos/seed/tino-backpack/600/600',
    description: 'Una fantasia deliziosa con tutti i cibi tipici scoperti da Tino nei suoi viaggi.',
    tags: ['cibo', 'colorato'],
    character: 'Tino'
  },
  {
    id: 'zaino-4',
    name: 'Zaino "Fuga di Foxy"',
    category: 'Zaini',
    price: 39.99,
    image: 'https://picsum.photos/seed/foxy-backpack/600/600',
    description: 'Zaino dinamico con Foxy che scappa sul suo iconico sidecar.',
    tags: ['azione', 'arancione'],
    character: 'Foxy'
  },
  // GIOCHI
  {
    id: 'gioco-1',
    name: 'Memory delle Città',
    category: 'Giochi',
    price: 19.99,
    image: 'https://picsum.photos/seed/memory-game/600/600',
    description: 'Allena la memoria scoprendo i monumenti più famosi del mondo.',
    tags: ['carte', 'educativo'],
    badge: 'Novità'
  },
  {
    id: 'gioco-2',
    name: 'Gioco dell\'Oca "Il Grande Viaggio"',
    category: 'Giochi',
    price: 29.99,
    image: 'https://picsum.photos/seed/goose-game/600/600',
    description: 'Un percorso emozionante attraverso i continenti con imprevisti divertenti.',
    tags: ['tavolo', 'famiglia']
  },
  {
    id: 'gioco-3',
    name: 'Puzzle "La Città dei Personaggi"',
    category: 'Giochi',
    price: 24.99,
    image: 'https://picsum.photos/seed/puzzle/600/600',
    description: '500 pezzi di pura avventura. Ricostruisci lo skyline con tutta la banda.',
    tags: ['puzzle', 'concentrazione']
  },
  {
    id: 'gioco-4',
    name: 'Carte da Poker Personalizzate',
    category: 'Giochi',
    price: 16.99,
    image: 'https://picsum.photos/seed/cards/600/600',
    description: 'Mazzo di carte da collezione con i personaggi nei panni dei semi.',
    tags: ['collezione', 'gioco']
  },
  // GADGET
  {
    id: 'gadget-1',
    name: 'Mappa del Mondo Interattiva',
    category: 'Gadget',
    price: 29.99,
    image: 'https://picsum.photos/seed/world-map/600/600',
    description: 'Un poster gigante da attaccare in camera con adesivi per segnare i viaggi.',
    tags: ['poster', 'interattivo'],
    badge: 'Più Venduto'
  },
  {
    id: 'gadget-2',
    name: 'Set di Segnalibri "50 Città"',
    category: 'Gadget',
    price: 24.99,
    image: 'https://picsum.photos/seed/bookmarks/600/600',
    description: 'Non perdere mai il segno con questi 50 segnalibri artistici.',
    tags: ['lettura', 'monumenti']
  },
  {
    id: 'gadget-3',
    name: 'Diario di Viaggio "I Falchi Esplorano"',
    category: 'Gadget',
    price: 14.99,
    image: 'https://picsum.photos/seed/journal/600/600',
    description: 'Il compagno perfetto per annotare ogni scoperta e incollare ricordi.',
    tags: ['scrittura', 'diario'],
    character: 'Axel'
  },
  // ADESIVI
  {
    id: 'adesivo-1',
    name: 'Adesivi "Emozioni di Foxy"',
    category: 'Adesivi',
    price: 9.99,
    image: 'https://picsum.photos/seed/foxy-stickers/600/600',
    description: 'Set di 10 adesivi con le espressioni più buffe di Foxy.',
    tags: ['set', 'buffo'],
    character: 'Foxy'
  },
  {
    id: 'adesivo-2',
    name: 'Adesivi "I Piatti di Chef"',
    category: 'Adesivi',
    price: 12.99,
    image: 'https://picsum.photos/seed/food-stickers/600/600',
    description: '20 adesivi deliziosi con i piatti tipici di tutto il mondo.',
    tags: ['cucina', 'colorato'],
    character: 'Chef'
  },
  {
    id: 'adesivo-3',
    name: 'Spilla "Ala d\'Aviazione"',
    category: 'Adesivi',
    price: 7.99,
    image: 'https://picsum.photos/seed/pin/600/600',
    description: 'Spilla metallica di alta qualità, identica a quella di Axel.',
    tags: ['metallo', 'collezione'],
    character: 'Axel'
  },
  {
    id: 'adesivo-4',
    name: 'Portachiavi "I 5 Amici"',
    category: 'Adesivi',
    price: 14.99,
    image: 'https://picsum.photos/seed/keychain/600/600',
    description: 'Porta sempre con te Axel, Tino, Chef, il Professore e Foxy.',
    tags: ['accessori', 'regalo']
  },
  {
    id: 'adesivo-5',
    name: 'Calzini "Squadriglia Falchi"',
    category: 'Adesivi',
    price: 11.99,
    image: 'https://picsum.photos/seed/socks/600/600',
    description: 'Calzini morbidi e colorati per piccoli esploratori instancabili.',
    tags: ['abbigliamento', 'colorato'],
    character: 'Axel'
  }
];
