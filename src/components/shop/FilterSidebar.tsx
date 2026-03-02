import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, Search, ChevronDown, Star, Euro } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  search: string;
  onSearchChange: (val: string) => void;
  selectedCharacter: string;
  onCharacterChange: (val: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (val: [number, number]) => void;
}

const characters = ['Tutti', 'Axel', 'Tino', 'Chef', 'Professor Gufo', 'Foxy'];

export default function FilterSidebar({
  isOpen,
  onClose,
  search,
  onSearchChange,
  selectedCharacter,
  onCharacterChange,
  priceRange,
  onPriceRangeChange
}: FilterSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-sm lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 z-[120] h-full w-full max-w-xs bg-white shadow-2xl flex flex-col lg:relative lg:z-0 lg:translate-x-0 lg:shadow-none lg:bg-transparent lg:max-w-none"
          >
            {/* Header (Mobile) */}
            <div className="p-8 border-b border-slate-100 flex items-center justify-between lg:hidden">
              <div className="flex items-center gap-3">
                <Filter className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-black text-slate-900">Filtri</h2>
              </div>
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-900">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-8 space-y-10">
              {/* Search */}
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <Search className="w-4 h-4 text-blue-600" />
                  Cerca Prodotto
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nome o tag..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-4 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-sm font-medium"
                  />
                </div>
              </div>

              {/* Character */}
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Personaggio
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {characters.map((char) => (
                    <button
                      key={char}
                      onClick={() => onCharacterChange(char)}
                      className={`px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                        selectedCharacter === char
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100'
                          : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      {char}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <Euro className="w-4 h-4 text-emerald-500" />
                  Prezzo Massimo
                </h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => onPriceRangeChange([0, parseInt(e.target.value)])}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs font-black text-slate-400">
                    <span>€0</span>
                    <span className="text-blue-600">Fino a €{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Reset Button (Mobile) */}
              <button
                onClick={() => {
                  onSearchChange('');
                  onCharacterChange('Tutti');
                  onPriceRangeChange([0, 100]);
                }}
                className="w-full py-4 rounded-2xl border border-dashed border-slate-200 text-slate-400 text-xs font-bold hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                Resetta Filtri
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
