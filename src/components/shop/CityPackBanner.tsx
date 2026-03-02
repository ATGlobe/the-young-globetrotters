import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShoppingCart, ArrowRight, Star, Heart } from 'lucide-react';

interface CityPackBannerProps {
  onAddToCart: () => void;
}

export default function CityPackBanner({ onAddToCart }: CityPackBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-emerald-600 rounded-[64px] shadow-2xl shadow-emerald-100 mb-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 p-12 lg:p-24">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white font-black text-sm uppercase tracking-widest">
            <Sparkles className="w-4 h-4 mr-2" />
            Offerta Speciale
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            City Pack <br />
            <span className="text-yellow-300">Parigi</span>
          </h2>
          
          <p className="text-xl text-emerald-50 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            La collezione completa dedicata alla città dell'amore. Include tazza, adesivi, puzzle e segnalibro esclusivi.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <div className="flex flex-col">
              <span className="text-emerald-200 line-through text-lg font-bold">€64.99</span>
              <span className="text-5xl font-black text-white">€49.99</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onAddToCart}
              className="bg-white text-emerald-600 px-10 py-6 rounded-3xl font-black text-xl flex items-center gap-4 shadow-2xl shadow-emerald-900/20 transition-all"
            >
              <ShoppingCart className="w-6 h-6" />
              Prendi il Pack
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
            <div className="flex items-center gap-2 text-emerald-100 text-sm font-bold">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              Risparmi €15
            </div>
            <div className="flex items-center gap-2 text-emerald-100 text-sm font-bold">
              <Heart className="w-4 h-4 text-red-300 fill-red-300" />
              Edizione Limitata
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 w-48 h-48 bg-white rounded-[40px] shadow-2xl p-6 rotate-12 z-20"
            >
              <img src="https://picsum.photos/seed/paris-mug/300/300" alt="Tazza Parigi" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 w-56 h-56 bg-white rounded-[40px] shadow-2xl p-6 -rotate-12 z-20"
            >
              <img src="https://picsum.photos/seed/paris-puzzle/300/300" alt="Puzzle Parigi" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
            </motion.div>

            <div className="absolute inset-0 bg-white/10 rounded-[80px] backdrop-blur-3xl border border-white/20 -rotate-6" />
            <div className="absolute inset-0 bg-emerald-500/20 rounded-[80px] rotate-6" />
            
            <img
              src="https://picsum.photos/seed/paris-pack/600/600"
              alt="City Pack Parigi"
              className="relative z-10 w-full h-full object-cover rounded-[80px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
