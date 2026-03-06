import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CITIES } from '../data/cities';
import { citiesData } from '../data/citiesData';
import { Link } from 'react-router-dom';
import { Search, Globe, MapPin, History, Music, GraduationCap, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export default function GlobalAwareness() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCityId, setExpandedCityId] = useState<string | null>(null);

  const filteredCities = CITIES.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.continent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const continents = Array.from(new Set(CITIES.map(c => c.continent)));

  return (
    <div className="min-h-screen bg-indigo-50/30">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-indigo-900 overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-10 border-8 border-indigo-800 shadow-2xl">
              <GraduationCap className="w-16 h-16 text-indigo-900" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight">
              Discovering the <span className="text-amber-400">World</span> Together
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 font-medium max-w-3xl mx-auto leading-relaxed">
              Join Professor Owl on a global expedition to explore the rich tapestry of culture, history, and geography across 50 magnificent cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-indigo-900">A World of Knowledge</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Global awareness is more than just knowing where a country is on a map. 
              It's about understanding the people, the stories, and the traditions that make our planet so diverse. 
              Professor Owl has carefully curated these insights to help young minds become true global citizens.
            </p>
            <div className="flex gap-6">
              <div className="flex-1 p-6 bg-white rounded-3xl shadow-sm border border-indigo-100">
                <Globe className="w-8 h-8 text-indigo-600 mb-4" />
                <h4 className="font-bold text-indigo-900 mb-2">50 Cities</h4>
                <p className="text-sm text-slate-500">Carefully selected global hubs.</p>
              </div>
              <div className="flex-1 p-6 bg-white rounded-3xl shadow-sm border border-indigo-100">
                <History className="w-8 h-8 text-amber-500 mb-4" />
                <h4 className="font-bold text-indigo-900 mb-2">Rich History</h4>
                <p className="text-sm text-slate-500">Centuries of stories to tell.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <motion.img 
              src="https://picsum.photos/seed/owl1/600/800" 
              alt="Owl 1" 
              className="rounded-3xl shadow-xl border-4 border-white"
              whileHover={{ scale: 1.05 }}
              referrerPolicy="no-referrer"
            />
            <motion.img 
              src="https://picsum.photos/seed/owl2/600/800" 
              alt="Owl 2" 
              className="rounded-3xl shadow-xl border-4 border-white mt-12"
              whileHover={{ scale: 1.05 }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <h2 className="text-4xl font-bold text-indigo-900">Explore the Cities</h2>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search city, country or continent..." 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-16">
            {continents.map(continent => {
              const continentCities = filteredCities.filter(c => c.continent === continent);
              if (continentCities.length === 0) return null;

              return (
                <div key={continent} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-black text-indigo-900 uppercase tracking-widest">{continent}</h3>
                    <div className="flex-1 h-px bg-indigo-100"></div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {continentCities.map(city => {
                      const info = citiesData[city.id];
                      return (
                        <div key={city.id} className="group">
                          <motion.button 
                            onClick={() => setExpandedCityId(expandedCityId === city.id ? null : city.id)}
                            className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 flex items-center justify-between ${
                              expandedCityId === city.id 
                              ? 'bg-indigo-900 border-indigo-900 text-white shadow-xl' 
                              : 'bg-white border-slate-100 hover:border-indigo-200 hover:shadow-lg text-indigo-900'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${expandedCityId === city.id ? 'bg-indigo-800' : 'bg-indigo-50'}`}>
                                <MapPin className={`w-6 h-6 ${expandedCityId === city.id ? 'text-amber-400' : 'text-indigo-600'}`} />
                              </div>
                              <div>
                                <h4 className="font-bold text-lg">{city.name}</h4>
                                <p className={`text-sm ${expandedCityId === city.id ? 'text-indigo-300' : 'text-slate-500'}`}>{city.country}</p>
                              </div>
                            </div>
                            {expandedCityId === city.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                          </motion.button>

                          <AnimatePresence>
                            {expandedCityId === city.id && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="p-8 bg-indigo-50 rounded-b-[32px] border-x border-b border-indigo-100 -mt-8 pt-16 space-y-8">
                                  <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                      <div className="flex gap-4">
                                        <Globe className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                                        <div>
                                          <h5 className="font-bold text-indigo-900 mb-1">Geography</h5>
                                          <p className="text-sm text-slate-600 leading-relaxed">
                                            {info ? info.monument.history : `Explore the geography of ${city.name} in our educational books.`}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex gap-4">
                                        <History className="w-6 h-6 text-amber-500 flex-shrink-0" />
                                        <div>
                                          <h5 className="font-bold text-indigo-900 mb-1">History</h5>
                                          <p className="text-sm text-slate-600 leading-relaxed">
                                            {info ? info.monument.history : `Discover the rich history of ${city.name} with Axel and Tino.`}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex gap-4">
                                        <Music className="w-6 h-6 text-purple-500 flex-shrink-0" />
                                        <div>
                                          <h5 className="font-bold text-indigo-900 mb-1">Culture</h5>
                                          <p className="text-sm text-slate-600 leading-relaxed">
                                            {info ? info.dish.description : `Learn about the unique culture and traditions of ${city.name}.`}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="relative">
                                      <img 
                                        src={info ? info.monument.image : `https://picsum.photos/seed/${city.id}/600/400`} 
                                        alt={city.name} 
                                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                                        referrerPolicy="no-referrer"
                                      />
                                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white p-2 rounded-2xl shadow-xl border border-indigo-100">
                                        <img src="https://picsum.photos/seed/owl-mini/100/100" alt="Owl" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                                      </div>
                                    </div>
                                  </div>
                                  <Link 
                                    to={`/books/${city.id}`}
                                    className="flex items-center justify-center gap-3 w-full bg-indigo-900 text-white font-black py-5 rounded-2xl hover:bg-indigo-800 transition-colors"
                                  >
                                    Go to {city.name} Adventure
                                    <ArrowRight className="w-5 h-5" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">The World is Your Classroom</h2>
          <p className="text-xl text-indigo-200 mb-10">
            Expand your horizons and discover the incredible stories waiting in every corner of the globe.
          </p>
          <Link 
            to="/books"
            className="inline-block bg-amber-400 text-indigo-900 font-black px-12 py-5 rounded-full hover:bg-amber-300 transition-all shadow-xl hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}

