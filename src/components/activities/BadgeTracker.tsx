import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, CheckCircle2, Star, Sparkles } from 'lucide-react';

interface BadgeTrackerProps {
  quizDone: boolean;
  moveDone: boolean;
  creativeDone: boolean;
}

export const BadgeTracker: React.FC<BadgeTrackerProps> = ({
  quizDone,
  moveDone,
  creativeDone,
}) => {
  const allDone = quizDone && moveDone && creativeDone;

  return (
    <section className="bg-white py-20 border-t border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
          Explorer Progress
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Track Your Adventure</h2>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex flex-col items-center gap-3">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all ${
              quizDone ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-slate-50 border-slate-200 text-slate-300'
            }`}>
              <Trophy size={28} />
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${quizDone ? 'text-emerald-600' : 'text-slate-400'}`}>
              Quiz
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all ${
              moveDone ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-slate-50 border-slate-200 text-slate-300'
            }`}>
              <Star size={28} />
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${moveDone ? 'text-emerald-600' : 'text-slate-400'}`}>
              Movement
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all ${
              creativeDone ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-slate-50 border-slate-200 text-slate-300'
            }`}>
              <Sparkles size={28} />
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${creativeDone ? 'text-emerald-600' : 'text-slate-400'}`}>
              Creative
            </span>
          </div>
        </div>

        <AnimatePresence>
          {allDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="bg-amber-50 rounded-[40px] p-12 border-4 border-amber-400 relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl -z-10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl -z-10"
              />

              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-white"
                >
                  <Trophy className="text-white" size={48} />
                </motion.div>
                <h3 className="text-4xl font-black text-amber-900 mb-4">Foxy earned his Growth Badge!</h3>
                <p className="text-xl text-amber-800 font-medium mb-8">
                  You've shown bravery, curiosity, and kindness. You're a true Explorer!
                </p>
                <div className="flex justify-center gap-2">
                  <CheckCircle2 className="text-amber-600" />
                  <span className="text-amber-900 font-bold uppercase tracking-widest text-sm">Badge Unlocked</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!allDone && (
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
            <p className="text-slate-500 font-medium">
              Complete all three challenges to earn your Growth Badge!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
