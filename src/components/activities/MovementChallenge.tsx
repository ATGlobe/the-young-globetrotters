import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Play, Timer, Trophy } from 'lucide-react';

interface MovementProps {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  icon: any;
  onComplete: () => void;
}

export const MovementChallenge: React.FC<MovementProps> = ({
  title,
  description,
  color,
  accentColor,
  icon: Icon,
  onComplete,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(20);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && !isFinished) {
      setIsFinished(true);
      setIsActive(false);
      onComplete();
    }
    return () => clearInterval(interval);
  }, [isActive, timer, isFinished, onComplete]);

  const startChallenge = () => {
    setIsActive(true);
    setTimer(20);
    setIsFinished(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col h-full transition-all"
    >
      <div className={`w-14 h-14 ${color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Get Moving!</h3>
      <h4 className={`text-xl font-bold ${accentColor} mb-4`}>{title}</h4>
      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <div className="space-y-4">
        {!isActive && !isFinished && (
          <button
            onClick={startChallenge}
            className={`w-full py-4 rounded-2xl ${color} text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md`}
          >
            <Play size={18} fill="currentColor" />
            Start Challenge
          </button>
        )}

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Timer size={16} />
                  Time Remaining
                </span>
                <span className={`text-2xl font-black ${accentColor}`}>
                  {timer}s
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: `${(timer / 20) * 100}%` }}
                  transition={{ duration: 1, ease: 'linear' }}
                  className={`h-full ${color}`}
                />
              </div>
              <p className="mt-4 text-sm text-slate-500 italic text-center">
                Keep moving like Foxy!
              </p>
            </motion.div>
          )}

          {isFinished && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 text-center"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block mb-2"
              >
                <Trophy className="text-emerald-500" size={32} />
              </motion.div>
              <p className="text-emerald-700 font-bold">Movement Completed!</p>
              <button
                onClick={startChallenge}
                className="mt-2 text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                Restart?
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {!isActive && !isFinished && (
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
            <Heart className="text-red-500" size={20} />
            <span className="text-sm font-bold text-slate-700">Stay active, stay healthy!</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
