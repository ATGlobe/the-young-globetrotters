import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOOKS } from '../data/books';
import Hero from '../components/Hero';
import BookCard from '../components/BookCard';
import { Search, Globe, Filter } from 'lucide-react';

const Books: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');

  const countries = ['All', ...Array.from(new Set(BOOKS.map(b => b.country)))].sort();

  const filteredBooks = BOOKS.filter(book => {
    const matchesSearch = 
      book.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = selectedCountry === 'All' || book.country === selectedCountry;
    
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero 
        title="Our Global Adventures"
        subtitle="Explore the world city by city with Axel & Tino. Each book is a structured educational journey into culture, history, and culinary traditions."
        bgColor="bg-[#22C55E]" // Green as per user request earlier
        image="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Axel__10_-removebg-preview.png"
      >
        <div className="flex flex-col md:flex-row gap-4 mt-8 max-w-2xl">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search by city or country..."
              className="w-full py-4 pl-12 pr-4 text-slate-900 bg-white rounded-2xl focus:ring-2 focus:ring-green-400 outline-none shadow-xl border-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative min-w-[180px]">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full py-4 pl-12 pr-8 text-slate-900 bg-white rounded-2xl focus:ring-2 focus:ring-green-400 outline-none shadow-xl border-none appearance-none font-bold"
            >
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>
      </Hero>

      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Available Volumes</h2>
              <p className="text-slate-500 mt-1">Showing {filteredBooks.length} educational adventures</p>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredBooks.length > 0 ? (
              <motion.div 
                layout
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-200"
              >
                <div className="inline-flex p-6 bg-slate-50 rounded-full mb-6">
                  <Globe className="text-slate-300" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">No adventures found</h3>
                <p className="text-slate-600 max-w-md mx-auto">We haven't reached that destination yet! Try searching for another city or clear your filters.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCountry('All');
                  }}
                  className="mt-8 px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-100"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Books;
