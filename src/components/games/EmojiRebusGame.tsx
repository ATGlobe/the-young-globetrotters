import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, RotateCcw } from 'lucide-react';

interface RebusProps {
  rebus: { emojis: string; answer: string }[];
  onComplete: () => void;
  isCompleted: boolean;
}

export const EmojiRebusGame: React.FC<RebusProps> = ({ rebus, onComplete, isCompleted }) => {
  const [input, setInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (isCompleted) {
      setInput(rebus[0].answer);
      setIsCorrect(true);
    }
  }, [isCompleted, rebus]);

  const handleCheck = () => {
    if (input.toUpperCase() === rebus[0].answer.toUpperCase()) {
      setIsCorrect(true);
      onComplete();
    }
  };

  return (
    <div className="space-y-6 text-center">
      <div className="text-6xl mb-8 p-8 bg-orange-50 rounded-3xl border-2 border-orange-100 shadow-inner">
        {rebus[0].emojis}
      </div>
      <div className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isCompleted || isCorrect}
          placeholder="What's the answer, Explorer?"
          className={`w-full p-4 text-center text-xl font-black rounded-2xl border-2 transition-all ${
            isCorrect 
              ? 'bg-emerald-50 border-emerald-500 text-emerald-700' 
              : 'bg-white border-slate-200 focus:border-orange-500'
          }`}
        />
        <AnimatePresence>
          {!isCorrect && !isCompleted && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={handleCheck}
              className="w-full py-4 bg-orange-500 text-white font-black rounded-2xl hover:bg-orange-600 transition-all shadow-lg"
            >
              CHECK ANSWER
            </motion.button>
          )}
          {(isCorrect || isCompleted) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-700 font-bold flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={20} />
              Excellent! You solved the rebus!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
