import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Heart, Search, ExternalLink, Sparkles } from 'lucide-react';

const MERCH_PRODUCTS = [
  {
    id: 'merch-1',
    name: 'Official T-Shirt',
    description: 'High-quality cotton t-shirt featuring Axel & Tino.',
    image: 'https://picsum.photos/seed/tshirt/600/600',
  },
  {
    id: 'merch-2',
    name: 'Adventure Hoodie',
    description: 'Warm and cozy hoodie for young explorers.',
    image: 'https://picsum.photos/seed/hoodie/600/600',
  },
  {
    id: 'merch-3',
    name: 'Globetrotter Mug',
    description: 'Start your morning with a world of adventure.',
    image: 'https://picsum.photos/seed/mug/600/600',
  },
  {
    id: 'merch-4',
    name: 'Travel Poster',
    description: 'Beautifully illustrated poster of the Eternal City.',
    image: 'https://picsum.photos/seed/poster/600/600',
  },
  {
    id: 'merch-5',
    name: 'Character Stickers',
    description: 'Waterproof stickers of the whole gang.',
    image: 'https://picsum.photos/seed/stickers/600/600',
  },
  {
    id: 'merch-6',
    name: 'Explorer Tote Bag',
    description: 'Carry your books and gear in style.',
    image: 'https://picsum.photos/seed/tote/600/600',
  }
];

export default function MerchShop() {
  return (
    <div className="bg-[#FFF9F0] min-h-screen pb-20">
      {/* Section 1: Hero */}
      <div className="relative bg-emerald-600 pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white font-bold text-sm mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Coming Soon
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Official Globetrotters Merchandise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-2xl mx-auto font-medium"
          >
            Bring the adventure home with our exclusive collection of gear for young explorers.
          </motion.p>
        </div>
      </div>

      {/* Section 2: Product Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MERCH_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg">
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-8 pt-8 border-t border-slate-50">
                  <button
                    disabled
                    className="w-full bg-slate-100 text-slate-400 py-5 rounded-2xl font-bold text-center cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Not Available Yet
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Block */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <div className="bg-emerald-50 p-12 rounded-[48px] border border-emerald-100">
            <ShoppingBag className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-black text-slate-900 mb-4">Print-on-Demand Integration</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We are currently setting up our official store with a trusted print-on-demand partner. 
              Soon you'll be able to order high-quality merchandise delivered directly to your door.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


