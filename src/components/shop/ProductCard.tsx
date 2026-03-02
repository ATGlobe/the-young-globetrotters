import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Product } from '../../data/merch';
import WishlistButton from './WishlistButton';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function ProductCard({ 
  product, 
  onQuickView, 
  onAddToCart, 
  isFavorite, 
  onToggleFavorite 
}: ProductCardProps) {
  
  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case 'Novità': return 'bg-blue-500';
      case 'Più Venduto': return 'bg-emerald-500';
      case 'Offerta Speciale': return 'bg-orange-500';
      default: return 'bg-slate-900';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.badge && (
            <span className={`${getBadgeColor(product.badge)} text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg`}>
              {product.badge}
            </span>
          )}
          {product.character && (
            <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              {product.character}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <WishlistButton 
            isFavorite={isFavorite} 
            onToggle={() => onToggleFavorite(product.id)} 
          />
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onQuickView(product)}
            className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-xl"
          >
            <Eye className="w-4 h-4" />
            Anteprima
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-blue-600 text-xs font-black uppercase tracking-widest mb-2 block">
            {product.category}
          </span>
          <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-900">
              €{product.price.toFixed(2)}
            </span>
            <span className="text-[10px] text-slate-400 font-medium">IVA inclusa</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl shadow-lg shadow-blue-100 transition-colors"
            aria-label="Aggiungi al carrello"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
