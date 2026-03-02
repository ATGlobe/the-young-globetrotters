import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Marco R.',
    city: 'Milano',
    text: 'La tazza di Axel è bellissima! Mio figlio non vede l\'ora di fare colazione per guardare la mappa del mondo.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=marco'
  },
  {
    id: 2,
    name: 'Elena V.',
    city: 'Roma',
    text: 'Lo zaino di Tino è di ottima qualità. La stampa è vivace e resistente. Spedizione velocissima!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=elena'
  },
  {
    id: 3,
    name: 'Luca B.',
    city: 'Torino',
    text: 'Il puzzle delle città è stato un regalo perfetto per il compleanno. Ci abbiamo giocato tutti insieme.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=luca'
  }
];

export default function ReviewsCarousel() {
  const [index, setIndex] = React.useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="relative bg-white rounded-[64px] p-12 lg:p-24 shadow-sm border border-slate-100 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-blue-600" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <Quote className="w-16 h-16 text-blue-100 mb-10" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-10"
          >
            <div className="flex justify-center gap-1 text-yellow-400">
              {[...Array(reviews[index].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            
            <p className="text-2xl lg:text-4xl font-bold text-slate-900 leading-tight italic">
              "{reviews[index].text}"
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <img
                src={reviews[index].avatar}
                alt={reviews[index].name}
                className="w-20 h-20 rounded-full border-4 border-blue-50 shadow-xl"
              />
              <div>
                <h4 className="text-xl font-black text-slate-900">{reviews[index].name}</h4>
                <p className="text-blue-600 font-bold text-sm">{reviews[index].city}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-16">
          <button
            onClick={prev}
            className="p-4 rounded-full border border-slate-200 text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-blue-600' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-4 rounded-full border border-slate-200 text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
