import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface QuizProps {
  question: string;
  options: string[];
  correct: number;
  color: string;
  accentColor: string;
  onComplete: () => void;
}

export const InteractiveQuiz: React.FC<QuizProps> = ({
  question,
  options,
  correct,
  color,
  accentColor,
  onComplete,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (index: number) => {
    if (isCorrect) return;
    setSelectedOption(index);
    const correctSelection = index === correct;
    setIsCorrect(correctSelection);
    if (correctSelection) {
      onComplete();
    }
  };

  const resetQuiz = () => {
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col h-full"
    >
      <div className={`w-14 h-14 ${color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
        <Trophy size={28} />
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-slate-900">2. Quick Quiz</h3>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {isCorrect ? '1/1 Completed' : '0/1 Progress'}
        </span>
      </div>

      <div className="flex-grow">
        <p className="text-lg font-bold text-slate-800 mb-6">{question}</p>
        <div className="space-y-3">
          {options.map((option, i) => (
            <button
              key={i}
              disabled={isCorrect === true}
              onClick={() => handleAnswer(i)}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all font-bold flex items-center justify-between ${
                selectedOption === null
                  ? 'border-slate-100 hover:border-slate-300 text-slate-700'
                  : i === correct
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                    : selectedOption === i
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-slate-100 text-slate-300'
              }`}
            >
              {option}
              {selectedOption !== null && i === correct && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <CheckCircle2 size={20} />
                </motion.div>
              )}
              {selectedOption === i && i !== correct && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <XCircle size={20} />
                </motion.div>
              )}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {isCorrect === true && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center"
            >
              <p className="text-emerald-700 font-bold flex items-center justify-center gap-2">
                <Trophy size={18} />
                Excellent, Explorer! You got it!
              </p>
            </motion.div>
          )}
          {isCorrect === false && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-50 rounded-2xl border border-red-100 text-center"
            >
              <p className="text-red-700 font-bold mb-2">Try again, Explorer!</p>
              <button
                onClick={resetQuiz}
                className="text-sm font-bold text-slate-600 flex items-center justify-center gap-2 mx-auto hover:text-slate-900"
              >
                <RotateCcw size={14} />
                Reset Quiz
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
