import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Star, Check, Truck, ShieldCheck, Leaf } from 'lucide-react';
import { Product } from '../../data/merch';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-5xl rounded-[48px] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-50 p-3 bg-white/80 backdrop-blur-sm rounded-full text-slate-900 hover:bg-white hover:text-red-500 transition-all shadow-xl"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left: Image */}
          <div className="w-full lg:w-1/2 bg-slate-50 relative aspect-square lg:aspect-auto overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {product.badge && (
              <div className="absolute top-8 left-8">
                <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                  {product.badge}
                </span>
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-1/2 p-10 lg:p-16 overflow-y-auto">
            <div className="space-y-8">
              <div>
                <span className="text-blue-600 text-sm font-black uppercase tracking-widest mb-3 block">
                  {product.category}
                </span>
                <h2 className="text-4xl font-black text-slate-900 leading-tight mb-4">
                  {product.name}
                </h2>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-slate-900">
                    €{product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-slate-400 text-xs font-bold ml-2">(12 recensioni)</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {product.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, text: 'Garanzia di Qualità', color: 'text-emerald-500' },
                  { icon: Leaf, text: 'Stampa Eco-friendly', color: 'text-emerald-500' },
                  { icon: Truck, text: 'Spedizione Rapida', color: 'text-blue-500' },
                  { icon: Check, text: 'Reso Entro 30 Giorni', color: 'text-blue-500' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-sm font-bold text-slate-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="bg-slate-100 text-slate-500 px-4 py-1.5 rounded-full text-xs font-bold">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="pt-8 border-t border-slate-100">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 shadow-2xl shadow-blue-100 transition-all"
                >
                  <ShoppingCart className="w-6 h-6" />
                  Aggiungi al Carrello
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
