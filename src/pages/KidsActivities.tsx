import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Gamepad2, 
  Brain, 
  Download, 
  Search, 
  Star,
  Globe,
  MapPin,
  BookOpen,
  ChevronRight,
  Sparkles,
  Clapperboard
} from 'lucide-react';
import { ACTIVITIES, Activity } from '../data/activitiesData';

const CATEGORIES = [
  { id: 'all', name: 'All Activities', icon: Star },
  { id: 'Coloring Page', name: 'Coloring Pages', icon: Palette },
  { id: 'Quiz', name: 'Quizzes', icon: Brain },
  { id: 'Game', name: 'Games', icon: Gamepad2 },
  { id: 'Comic', name: 'Comics', icon: Clapperboard },
];

const CONTINENTS = [
  'Europe',
  'North America',
  'South America',
  'Asia',
  'Oceania',
  'Nature & Extreme Worlds'
];

export default function KidsActivities() {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredActivities = ACTIVITIES.filter(activity => {
    const matchesCategory = activeCategory === 'all' || activity.type === activeCategory;
    const matchesSearch = activity.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         activity.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activitiesByContinent = CONTINENTS.reduce((acc, continent) => {
    const continentActivities = filteredActivities.filter(a => a.continent === continent);
    if (continentActivities.length > 0) {
      acc[continent] = continentActivities;
    }
    return acc;
  }, {} as Record<string, Activity[]>);

  return (
    <div className="bg-[#FFF9F0] min-h-screen pb-20 font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 to-amber-500 pt-24 pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-300 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white font-bold text-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-200" />
            Educational Travel Platform for Kids
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Explore, Play & Learn <br /> Around the World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-orange-50 max-w-2xl mx-auto font-medium"
          >
            Fun educational activities inspired by the 50 cities of The Young Globetrotters series.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        {/* Search & Filter Bar */}
        <div className="bg-white p-6 rounded-[40px] shadow-2xl shadow-orange-900/10 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by city or activity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 rounded-3xl border border-slate-100 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-lg font-medium"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-200 scale-105'
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  <cat.icon className="w-5 h-5" />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Continent Sections */}
        <div className="space-y-24">
          <AnimatePresence mode="popLayout">
            {Object.entries(activitiesByContinent).map(([continent, continentActivities], sectionIdx) => (
              <motion.section
                key={continent}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIdx * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-orange-100 rounded-2xl">
                    <Globe className="w-8 h-8 text-orange-600" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">{continent}</h2>
                  <div className="flex-grow h-[2px] bg-slate-100 ml-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {continentActivities.map((activity, i) => (
                    <motion.div
                      key={activity.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: i * 0.05 }}
                      className="group bg-white rounded-[48px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col"
                    >
                      {/* Card Header Image */}
                      <div className="relative h-64 overflow-hidden bg-slate-100">
                        <img
                          src={activity.image}
                          alt={activity.city}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                          <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl text-[11px] font-black uppercase tracking-widest text-orange-600 shadow-sm flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            {activity.city}
                          </span>
                          <span className="bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[11px] font-black uppercase tracking-widest text-white shadow-sm">
                            Vol. {activity.volume}
                          </span>
                        </div>
                        <div className="absolute bottom-6 right-6">
                          <div className="bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-sm">
                            {activity.type === 'Coloring Page' && <Palette className="w-6 h-6 text-orange-500" />}
                            {activity.type === 'Quiz' && <Brain className="w-6 h-6 text-orange-500" />}
                            {activity.type === 'Game' && <Gamepad2 className="w-6 h-6 text-orange-500" />}
                            {activity.type === 'Comic' && <Clapperboard className="w-6 h-6 text-orange-500" />}
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-10 flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                            activity.difficulty === 'Easy' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                          }`}>
                            {activity.difficulty}
                          </span>
                          <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                            Age: {activity.ageRange}
                          </span>
                        </div>

                        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-orange-500 transition-colors leading-tight">
                          {activity.city} Adventure
                        </h3>
                        
                        <p className="text-slate-500 text-base mb-8 font-medium leading-relaxed">
                          {activity.tagline}
                        </p>

                        {activity.didYouKnow && (
                          <div className="mb-8 p-5 bg-orange-50 rounded-3xl border border-orange-100/50">
                            <p className="text-[10px] uppercase font-black text-orange-400 tracking-widest mb-2 flex items-center gap-2">
                              <BookOpen className="w-3 h-3" />
                              Did you know?
                            </p>
                            <p className="text-sm text-orange-900 font-bold leading-snug italic">
                              "{activity.didYouKnow}"
                            </p>
                          </div>
                        )}

                        <div className="mt-auto">
                          <a
                            href={activity.downloadUrl}
                            className="w-full flex items-center justify-center gap-3 py-5 bg-slate-900 text-white font-bold rounded-[24px] hover:bg-orange-500 transition-all group/btn shadow-lg shadow-slate-200 hover:shadow-orange-200"
                          >
                            <Download className="w-5 h-5" />
                            Download Printable PDF
                            <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {Object.keys(activitiesByContinent).length === 0 && (
          <div className="text-center py-32">
            <div className="bg-white w-32 h-32 rounded-[40px] flex items-center justify-center mx-auto mb-8 shadow-sm">
              <Search className="w-12 h-12 text-slate-200" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-3">No activities found</h3>
            <p className="text-slate-500 text-lg">Try a different search or category.</p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 mt-32">
        <div className="bg-slate-900 rounded-[56px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Want more adventures?</h2>
            <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
              Join our newsletter to receive new activities, travel tips, and exclusive stories every month!
            </p>
            <button className="bg-orange-500 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/20">
              Join the Explorers Club
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

