import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Trophy, ArrowRight, RotateCcw } from 'lucide-react';
import { Quiz } from '../types';
import confetti from 'canvas-confetti';

type QuizComponentProps = {
  quiz: Quiz;
  onComplete: (score: number) => void;
};

export default function QuizComponent({ quiz, onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      onComplete(score);
      if (score === quiz.questions.length) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[48px] p-12 lg:p-20 text-center shadow-xl border border-slate-100"
      >
        <div className="w-24 h-24 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-10">
          <Trophy className="w-12 h-12" />
        </div>
        <h3 className="text-4xl font-black text-slate-900 mb-6">Quiz Complete!</h3>
        <p className="text-2xl text-slate-500 mb-10 font-medium">
          You scored <span className="text-blue-600 font-black">{score}</span> out of <span className="text-slate-900 font-black">{quiz.questions.length}</span>
        </p>
        
        {score === quiz.questions.length ? (
          <div className="bg-emerald-50 text-emerald-700 p-8 rounded-3xl mb-12 font-bold text-lg">
            Amazing! You've earned the city badge for your Explorer Passport!
          </div>
        ) : (
          <div className="bg-blue-50 text-blue-700 p-8 rounded-3xl mb-12 font-bold text-lg">
            Great effort! Try again to get a perfect score and unlock your badge.
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={resetQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white text-slate-700 font-black text-lg border-2 border-slate-100 hover:bg-slate-50 transition-all gap-3"
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/passport'}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-blue-600 text-white font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all gap-3"
          >
            View Passport
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 flex items-center justify-between">
        <div className="text-sm font-black text-blue-600 uppercase tracking-widest">
          Question {currentQuestion + 1} of {quiz.questions.length}
        </div>
        <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-12 leading-tight">
        {question.question}
      </h3>

      <div className="grid grid-cols-1 gap-4 mb-12">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctAnswer;
          const isSelected = index === selectedOption;
          
          let stateStyles = 'border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50';
          if (isAnswered) {
            if (isCorrect) stateStyles = 'border-emerald-500 bg-emerald-50 text-emerald-900';
            else if (isSelected) stateStyles = 'border-rose-500 bg-rose-50 text-rose-900';
            else stateStyles = 'border-slate-100 bg-white opacity-50';
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
              className={`w-full p-8 rounded-3xl border-2 text-left text-xl font-bold transition-all flex items-center justify-between group ${stateStyles}`}
            >
              {option}
              {isAnswered && isCorrect && <CheckCircle2 className="w-8 h-8 text-emerald-500" />}
              {isAnswered && isSelected && !isCorrect && <XCircle className="w-8 h-8 text-rose-500" />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex justify-end"
          >
            <button
              onClick={handleNext}
              className="inline-flex items-center justify-center px-12 py-6 rounded-2xl bg-blue-600 text-white font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all gap-3"
            >
              {currentQuestion === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
