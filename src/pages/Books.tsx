import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BOOKS } from '../data/books';
import Hero from '../components/Hero';
import { Search, Globe, ArrowRight } from 'lucide-react';

const Books: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = BOOKS.filter(book => 
    book.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero 
        title="Our Global Adventures"
        subtitle="Explore the world city by city with Axel & Tino. Each book is a structured educational journey into culture, history, and culinary traditions."
        bgColor="bg-[#1E3A8A]" // Navy
        image="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Axel__10_-removebg-preview.png"
      >
        <div className="relative max-w-md mt-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="Search by city or country..."
            className="w-full py-4 pl-12 pr-4 text-slate-900 bg-white rounded-xl focus:ring-2 focus:ring-blue-400 outline-none shadow-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Hero>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          {filteredBooks.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredBooks.map((book) => (
                <motion.div
                  key={book.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <Link to={`/books/${book.slug}`} className="block">
                    <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                      <img 
                        src={book.cover} 
                        alt={book.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-xs font-bold text-blue-600 uppercase tracking-wider">
                        <Globe size={12} />
                        <span>{book.city}, {book.country}</span>
                      </div>
                      <h3 className="mb-4 text-xl font-bold text-slate-900 line-clamp-1">{book.title}</h3>
                      <p className="mb-6 text-sm text-slate-600 line-clamp-2">{book.intro}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          View Adventure
                        </span>
                        <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">No adventures found</h3>
              <p className="text-slate-600">Try searching for a different city or country.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-6 text-blue-600 font-bold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Books;
