import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Heart, Search, ExternalLink } from 'lucide-react';

const CATEGORIES = ['All', 'Mugs', 'Hats', 'Backpacks', 'Stickers', 'Gadgets', 'Toys'];

const PRODUCTS = [
  {
    id: 'm-1',
    name: 'Axel & Tino Adventure Mug',
    category: 'Mugs',
    image: '/assets/merch/m-1.png',
    description: 'Start your day with an adventure! High-quality ceramic mug.',
    storeLink: 'https://link-prodotto-pod'
  },
  {
    id: 'm-2',
    name: 'Professor Owl Wisdom Hat',
    category: 'Hats',
    image: '/assets/merch/m-2.png',
    description: 'Stay cool and wise with this adjustable baseball cap.',
    storeLink: 'https://link-prodotto-pod'
  },
  {
    id: 'm-3',
    name: 'Explorer Backpack',
    category: 'Backpacks',
    image: '/assets/merch/m-3.png',
    description: 'Durable backpack for all your world travels.',
    storeLink: 'https://link-prodotto-pod'
  },
  {
    id: 'm-4',
    name: 'Character Sticker Pack',
    category: 'Stickers',
    image: '/assets/merch/m-4.png',
    description: 'Set of 10 waterproof stickers featuring the whole team.',
    storeLink: 'https://link-prodotto-pod'
  },
  {
    id: 'm-5',
    name: 'Axel Pilot Keychain',
    category: 'Gadgets',
    image: '/assets/merch/m-5.png',
    description: 'Carry Axel with you wherever you go.',
    storeLink: 'https://link-prodotto-pod'
  },
  {
    id: 'm-6',
    name: 'Tino Foodie Mug',
    category: 'Mugs',
    image: '/assets/merch/m-6.png',
    description: 'Perfect for your favorite hot chocolate.',
    storeLink: 'https://link-prodotto-pod'
  },
  {
    id: 'm-7',
    name: 'Globetrotter Beanie',
    category: 'Hats',
    image: '/assets/merch/m-7.png',
    description: 'Keep warm during your winter adventures.',
    storeLink: 'https://link-prodotto-pod'
  },
  {
    id: 'm-8',
    name: 'Adventure Journal',
    category: 'Gadgets',
    image: '/assets/merch/m-8.png',
    description: 'Write down your own travel stories.',
    storeLink: 'https://link-prodotto-pod'
  },
  {
    id: 'p-1',
    name: 'Axel Plushie',
    category: 'Toys',
    image: '/assets/merch/p-1.png',
    description: 'Soft and cuddly Axel pilot plush. Perfect for little explorers.',
    storeLink: 'https://link-prodotto-pod'
  },
  {
    id: 'p-2',
    name: 'Tino Plushie',
    category: 'Toys',
    image: '/assets/merch/p-2.png',
    description: 'Dreamy Tino plush, ready for bedtime stories and snacks.',
    storeLink: 'https://link-prodotto-pod'
  },
  {
    id: 'p-3',
    name: 'Professor Owl Plushie',
    category: 'Toys',
    image: '/assets/merch/p-3.png',
    description: 'The wisest plushie in the collection. Soft and educational!',
    storeLink: 'https://link-prodotto-pod'
  }
];

export default function MerchShop() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FFF9F0] min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative bg-emerald-600 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white font-bold text-sm mb-6"
          >
            Official Merchandise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Young Globetrotters Merch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-2xl mx-auto font-medium"
          >
            Discover exclusive products featuring our characters.
          </motion.p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white p-6 rounded-[32px] shadow-xl shadow-emerald-900/5 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search merch..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105'
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info Block */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-slate-900 mb-4">Official Merchandise</h2>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              All purchases are handled securely by our trusted print-on-demand partner. 
              <br className="hidden md:block" />
              Orders, payments and shipping are processed externally.
            </p>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-50">
                <img
                  src={product.image || '/assets/merch/default.png'}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/merch/default.png';
                  }}
                />
                <div className="absolute top-4 right-4">
                  <button className="p-3 bg-white/90 backdrop-blur-md rounded-full text-slate-400 hover:text-red-500 shadow-sm transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-50">
                  <a
                    href={product.storeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-center shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    🛍 Buy on Official Store →
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <ShoppingBag className="w-10 h-10 text-slate-200" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No products found</h3>
            <p className="text-slate-500">Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

