import { motion } from 'motion/react';
import { CHARACTERS } from '../constants';
import { Plane, Search, Utensils, BookOpen, Ghost, Star } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Plane,
  Search,
  Utensils,
  BookOpen,
  Ghost
};

export default function Characters() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Meet the Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            A close-knit team ready to help you discover the secrets of every city in the world.
          </motion.p>
        </div>

        <div className="space-y-24">
          {CHARACTERS.map((char, i) => {
            const Icon = iconMap[char.icon];
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={char.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2">
                  <div className={`relative rounded-[48px] overflow-hidden aspect-square shadow-2xl ${char.color} p-10 flex items-center justify-center`}>
                    <img
                      src={char.image || '/assets/characters/default.png'}
                      alt={char.name}
                      className="w-full h-full object-contain block relative z-10"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/characters/default.png';
                      }}
                    />
                    <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-xl z-20">
                      <Icon className={`w-8 h-8 ${char.color.replace('bg-', 'text-')}`} />
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-600 shadow-sm">
                    <Star className="w-4 h-4 mr-2 text-yellow-500 fill-yellow-500" />
                    {char.role}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{char.name}</h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    {char.longDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2">Strength</h4>
                      <p className="text-sm text-slate-500">Always ready for action and discovery.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2">Loves</h4>
                      <p className="text-sm text-slate-500">Traveling and meeting new friends.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
