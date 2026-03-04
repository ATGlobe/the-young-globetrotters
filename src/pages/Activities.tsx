import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { BOOKS } from '../data/books';
import { ACTIVITIES } from '../data/activities';
import { Search, Filter, Download, Play, Palette, Puzzle, ArrowRight } from 'lucide-react';

const Activities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState('All');

  const activityTypes = ['All', 'Quiz', 'Printable', 'Coloring', 'Games'];

  const filteredActivities = ACTIVITIES.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         activity.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeType === 'All' || activity.type === activeType;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Quiz': return <Play size={18} />;
      case 'Printable': return <Download size={18} />;
      case 'Coloring': return <Palette size={18} />;
      case 'Games': return <Puzzle size={18} />;
      default: return <ArrowRight size={18} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero 
        title="Explorer Activities"
        subtitle="Fun and educational activities for every city. Test your knowledge with quizzes, download printables, and enjoy games inspired by Axel & Tino's adventures."
        bgColor="bg-[#F97316]" // Orange
        image="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Foxy_2-removebg-preview.png"
      >
        <div className="relative max-w-md mt-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="Search activities or cities..."
            className="w-full py-4 pl-12 pr-4 text-slate-900 bg-white rounded-xl focus:ring-2 focus:ring-orange-400 outline-none shadow-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Hero>

      {/* Filter Bar */}
      <section className="py-12 bg-white border-b border-slate-100 sticky top-20 z-40">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 mr-4 text-slate-400 font-bold uppercase text-xs tracking-widest">
              <Filter size={14} />
              <span>Filter by type</span>
            </div>
            {activityTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeType === type 
                    ? 'bg-orange-600 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          {filteredActivities.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredActivities.map((activity) => (
                <motion.div
                  key={activity.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="aspect-video overflow-hidden bg-slate-100 relative">
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-orange-600 shadow-sm flex items-center gap-2">
                      {getTypeIcon(activity.type)}
                      {activity.type}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <span>{activity.city}</span>
                    </div>
                    <h3 className="mb-6 text-2xl font-bold text-slate-900">{activity.title}</h3>
                    <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
                      {activity.type === 'Quiz' ? 'Start Quiz' : 'Download Now'}
                      {getTypeIcon(activity.type)}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">No activities found</h3>
              <p className="text-slate-600">Try searching for a different city or activity type.</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveType('All'); }}
                className="mt-6 text-orange-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Teacher Resource CTA */}
          <div className="mt-20 p-12 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[100px] -z-10" />
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-6">Are you a Teacher?</h3>
                <p className="text-lg text-slate-400 mb-8">
                  We have dedicated resources, lesson plans, and classroom activities designed to help you integrate Axel & Tino's adventures into your curriculum.
                </p>
                <button className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg">
                  Visit Teachers Section
                </button>
              </div>
              <div className="flex-1">
                <img 
                  src="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Il_gufo_maestro_dell-removebg-preview.png" 
                  alt="Professor Owl" 
                  className="w-full h-auto max-w-xs mx-auto drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
