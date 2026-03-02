import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import { progressApi } from '../lib/api';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct_answer: number;
}

interface QuizPlayerProps {
  quiz: {
    id: string;
    title: string;
    city: string;
    questions: Question[];
    is_free?: boolean;
  };
  onClose: () => void;
}

export default function QuizPlayer({ quiz, onClose }: QuizPlayerProps) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(index);
    const correct = index === quiz.questions[currentStep].correct_answer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  const handleNext = async () => {
    if (currentStep < quiz.questions.length - 1) {
      setCurrentStep(s => s + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      // Quiz finished
      const finalScore = score + (isCorrect ? 1 : 0);
      const threshold = quiz.questions.length * 0.6; // 60% threshold for free mode
      
      if (finalScore >= threshold) {
        try {
          if (quiz.is_free) {
            await progressApi.completeFreeQuiz(quiz.city, finalScore);
          } else {
            await progressApi.completeQuiz(quiz.city, finalScore);
          }
        } catch (err) {
          console.error('Failed to track quiz completion', err);
        }
      }
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  if (showResult) {
    const finalScore = score;
    const isPass = finalScore >= quiz.questions.length * 0.6;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[48px] text-center max-w-lg w-full shadow-2xl"
      >
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 ${isPass ? 'bg-yellow-100' : 'bg-slate-100'}`}>
          {isPass ? <Trophy className="w-12 h-12 text-yellow-600" /> : <RotateCcw className="w-12 h-12 text-slate-400" />}
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-4">{isPass ? 'Great Job!' : 'Keep Practicing!'}</h2>
        <p className="text-slate-500 mb-8 text-lg">
          You scored <span className="font-black text-blue-600">{finalScore}</span> out of <span className="font-black text-slate-900">{quiz.questions.length}</span>
        </p>

        {isPass && quiz.is_free && (
          <div className="bg-blue-50 p-6 rounded-3xl mb-8 border-2 border-blue-100">
            <p className="text-blue-600 font-black text-sm uppercase tracking-widest mb-2">Badge Unlocked!</p>
            <p className="text-slate-900 font-bold">You earned the Basic Explorer badge for {quiz.city}!</p>
          </div>
        )}
        
        <div className="flex flex-col gap-4">
          {quiz.is_free && (
            <Link
              to="/shop"
              className="w-full py-5 bg-yellow-400 text-yellow-900 font-black rounded-2xl hover:bg-yellow-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-yellow-100"
            >
              <ShoppingCart className="w-6 h-6" />
              Get Full Ebook for {quiz.city}
            </Link>
          )}
          <div className="flex gap-4">
            <button
              onClick={resetQuiz}
              className="flex-1 py-4 bg-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all"
            >
              Finish
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = quiz.questions[currentStep];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[48px] overflow-hidden max-w-2xl w-full shadow-2xl border border-slate-100"
    >
      {/* Progress Bar */}
      <div className="h-2 bg-slate-100 w-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / quiz.questions.length) * 100}%` }}
          className="h-full bg-blue-600"
        />
      </div>

      <div className="p-12">
        <div className="flex justify-between items-center mb-10">
          <span className="text-xs font-black text-blue-600 uppercase tracking-widest">
            Question {currentStep + 1} of {quiz.questions.length}
          </span>
          <span className="text-xs font-bold text-slate-400">
            Score: {score}
          </span>
        </div>

        <h3 className="text-3xl font-black text-slate-900 mb-10 leading-tight">
          {currentQuestion.question}
        </h3>

        <div className="space-y-4 mb-10">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrectOption = index === currentQuestion.correct_answer;
            
            let bgClass = 'bg-slate-50 border-slate-100 hover:border-blue-200 hover:bg-blue-50';
            if (selectedOption !== null) {
              if (isCorrectOption) bgClass = 'bg-emerald-50 border-emerald-200 text-emerald-900';
              else if (isSelected) bgClass = 'bg-red-50 border-red-200 text-red-900';
              else bgClass = 'bg-slate-50 border-slate-100 opacity-50';
            }

            return (
              <button
                key={index}
                disabled={selectedOption !== null}
                onClick={() => handleOptionSelect(index)}
                className={`w-full p-6 rounded-2xl border-2 text-left font-bold transition-all flex items-center justify-between group ${bgClass}`}
              >
                {option}
                {selectedOption !== null && isCorrectOption && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                {selectedOption !== null && isSelected && !isCorrectOption && <XCircle className="w-6 h-6 text-red-500" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedOption !== null && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleNext}
              className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
            >
              {currentStep === quiz.questions.length - 1 ? 'See Results' : 'Next Question'}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
