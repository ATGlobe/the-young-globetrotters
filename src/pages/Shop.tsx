import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { MERCH } from '../data/merch';
import { ExternalLink, ShoppingBag, Tag } from 'lucide-react';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Apparel', 'School & Travel', 'Accessories', 'Collectibles'];
  
  const filteredProducts = activeCategory === 'All' 
    ? MERCH 
    : MERCH.filter(p => p.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero 
        title="Official Brand Store"
        subtitle="Bring the adventure home with our curated collection of Young Globetrotters gear. High-quality apparel and accessories for every explorer."
        bgColor="bg-[#16A34A]" // Green
        image="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Generated_Image_February_09__2026_-_12_51AM-removebg-preview.png"
      >
        <div className="flex items-center gap-2 mt-8 px-4 py-2 bg-white/10 rounded-full w-fit backdrop-blur-sm border border-white/20">
          <Tag size={16} />
          <span className="text-sm font-medium">Official Print-on-Demand Partner Store</span>
        </div>
      </Hero>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-slate-100 sticky top-20 z-40">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-green-600 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-slate-50 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900 shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{product.name}</h3>
                  <p className="mb-6 text-sm text-slate-600 line-clamp-2 flex-grow">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                    <a 
                      href="#" // In a real app, this would be the external store link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-green-600 transition-colors"
                    >
                      Buy Official <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-green-50 rounded-[3rem] border border-green-100 text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <ShoppingBag size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Quality Guaranteed</h3>
            <p className="max-w-2xl mx-auto text-slate-600">
              All our products are fulfilled by professional print-on-demand partners to ensure the highest quality and worldwide shipping. Your purchase directly supports the creation of new educational adventures!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
