import React from 'react';
import { motion } from 'motion/react';
import { Lock, CheckCircle2 } from 'lucide-react';
import { Badge } from '../types';

type BadgeComponentProps = {
  badge: Badge;
};

export default function BadgeComponent({ badge }: BadgeComponentProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-6">
        <motion.div
          whileHover={badge.unlocked ? { scale: 1.1, rotate: 5 } : {}}
          className={`w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 ${
            badge.unlocked 
              ? 'bg-white shadow-xl shadow-gold/20 border-4 border-gold' 
              : 'bg-slate-100 border-4 border-slate-200 grayscale'
          }`}
        >
          {badge.unlocked ? (
            <img 
              src={badge.image} 
              alt={badge.name} 
              className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
              referrerPolicy="no-referrer"
            />
          ) : (
            <Lock className="w-10 h-10 lg:w-12 lg:h-12 text-slate-400" />
          )}
        </motion.div>
        
        {badge.unlocked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-20"
          >
            <CheckCircle2 className="w-6 h-6" />
          </motion.div>
        )}
      </div>
      
      <h4 className={`text-xl font-black mb-2 ${badge.unlocked ? 'text-slate-900' : 'text-slate-400'}`}>
        {badge.name}
      </h4>
      <p className={`text-sm font-bold uppercase tracking-widest ${badge.unlocked ? 'text-gold' : 'text-slate-300'}`}>
        {badge.unlocked ? 'Unlocked' : 'Locked'}
      </p>
    </div>
  );
}
