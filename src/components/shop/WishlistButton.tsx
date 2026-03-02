import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface WishlistButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  className?: string;
}

export default function WishlistButton({ isFavorite, onToggle, className = "" }: WishlistButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className={`p-3 rounded-full backdrop-blur-md transition-all ${
        isFavorite 
          ? 'bg-red-500 text-white shadow-lg shadow-red-200' 
          : 'bg-white/80 text-slate-400 hover:text-red-500 hover:bg-white shadow-sm'
      } ${className}`}
      aria-label={isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
    >
      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
    </motion.button>
  );
}
