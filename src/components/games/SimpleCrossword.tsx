import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface CrosswordProps {
  words: { word: string; clue: string }[];
  onComplete: () => void;
  isCompleted: boolean;
}

export const SimpleCrossword: React.FC<CrosswordProps> = ({ words, onComplete, isCompleted }) => {
  const [inputs, setInputs] = useState<string[]>(words.map(() => ''));
  const [correctness, setCorrectness] = useState<boolean[]>(words.map(() => false));

  useEffect(() => {
    if (isCompleted) {
      setInputs(words.map(w => w.word));
      setCorrectness(words.map(() => true));
    }
  }, [isCompleted, words]);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value.toUpperCase();
    setInputs(newInputs);

    const isCorrect = newInputs[index] === words[index].word;
    const newCorrectness = [...correctness];
    newCorrectness[index] = isCorrect;
    setCorrectness(newCorrectness);

    if (newCorrectness.every(Boolean)) {
      onComplete();
    }
  };

  return (
    <div className="space-y-6">
      {words.map((w, i) => (
        <div key={i} className="space-y-2">
          <p className="text-sm font-bold text-slate-600">Clue: {w.clue}</p>
          <div className="flex gap-2">
            {w.word.split('').map((char, charIdx) => (
              <input
                key={charIdx}
                type="text"
                maxLength={1}
                value={inputs[i][charIdx] || ''}
                onChange={(e) => {
                  const val = e.target.value.toUpperCase();
                  const currentWordInput = inputs[i].split('');
                  currentWordInput[charIdx] = val;
                  handleInputChange(i, currentWordInput.join(''));
                }}
                disabled={isCompleted || correctness[i]}
                className={`w-10 h-10 text-center text-xl font-black rounded-lg border-2 transition-all ${
                  correctness[i] 
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-700' 
                    : 'bg-white border-slate-200 focus:border-orange-500'
                }`}
              />
            ))}
            {correctness[i] && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center">
                <CheckCircle2 className="text-emerald-500" size={20} />
              </motion.div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
