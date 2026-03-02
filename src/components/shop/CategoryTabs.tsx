import React from 'react';
import { motion } from 'motion/react';
import { Coffee, GraduationCap, Backpack, Gamepad2, GraduationCap as GadgetIcon, Sticker } from 'lucide-react';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'Tutte', label: 'Tutte', icon: null },
  { id: 'Tazze', label: 'Tazze', icon: Coffee },
  { id: 'Cappelli', label: 'Cappelli', icon: GraduationCap },
  { id: 'Zaini', label: 'Zaini', icon: Backpack },
  { id: 'Giochi', label: 'Giochi', icon: Gamepad2 },
  { id: 'Gadget', label: 'Gadget', icon: GadgetIcon },
  { id: 'Adesivi', label: 'Adesivi', icon: Sticker },
];

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;

        return (
          <motion.button
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(cat.id)}
            className={`relative px-8 py-4 rounded-3xl font-bold text-sm flex items-center gap-3 transition-all ${
              isActive 
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' 
                : 'bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900 shadow-sm border border-slate-100'
            }`}
          >
            {Icon && <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />}
            {cat.label}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-600 rounded-3xl -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
