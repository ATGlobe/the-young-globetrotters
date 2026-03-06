import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Star, Award, X, MapPin } from 'lucide-react';

interface CityCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  cityName: string;
}

export const CityCompletionModal: React.FC<CityCompletionModalProps> = ({ isOpen, onClose, cityName }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl overflow-hidden text-center p-12"
          >
            {/* Confetti-like background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ 
                    y: [0, 400], 
                    opacity: [0, 1, 0],
                    x: Math.random() * 400 - 200,
                    rotate: Math.random() * 360
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2, 
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                  className={`absolute top-0 left-1/2 w-3 h-3 rounded-full ${
                    ['bg-amber-400', 'bg-blue-500', 'bg-red-500', 'bg-emerald-500'][i % 4]
                  }`}
                />
              ))}
            </div>

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all z-10"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
              className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8 border-8 border-amber-50 shadow-xl"
            >
              <Trophy size={64} className="text-amber-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-4xl font-black text-slate-900 mb-4">Congratulations!</h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="text-blue-600" size={24} />
                <span className="text-2xl font-black text-blue-600 uppercase tracking-widest">{cityName}</span>
              </div>
              <p className="text-xl text-slate-600 font-medium mb-10 leading-relaxed">
                You've completed all activities and earned your <span className="text-amber-500 font-black">Gold Stamp</span> for this city!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              <button
                onClick={onClose}
                className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl text-xl hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1"
              >
                Awesome!
              </button>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Check your Explorer Passport for progress
              </p>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
