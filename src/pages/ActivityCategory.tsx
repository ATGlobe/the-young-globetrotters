import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORY_ACTIVITIES } from '../data/activities';
import Hero from '../components/Hero';
import { CheckCircle2, XCircle, RotateCcw, ArrowLeft, Trophy, Sparkles, Lightbulb, Heart } from 'lucide-react';

export default function ActivityCategory() {
  const { category } = useParams<{ category: string }>();
  const activity = category ? CATEGORY_ACTIVITIES[category] : null;

  const [quizState, setQuizState] = useState<'question' | 'result'>('question');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  if (!activity) {
    return <Navigate to="/activities" replace />;
  }

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    setTimeout(() => {
      setQuizState('result');
    }, 1000);
  };

  const resetQuiz = () => {
    setQuizState('question');
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero 
        title={activity.title}
        subtitle={`Explore the world through ${category}! Let's learn, move, and create together.`}
        bgColor={activity.color}
        image={activity.heroImage}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <Link 
          to="/activities" 
          className="inline-flex items-center gap-2 text-slate-500 font-bold mb-12 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to All Activities
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Physical Activity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col"
          >
            <div className={`w-14 h-14 ${activity.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
              <activity.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Get Moving!</h3>
            <h4 className={`text-xl font-bold ${activity.accentColor} mb-4`}>{activity.physicalActivity.title}</h4>
            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
              {activity.physicalActivity.description}
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
              <Heart className="text-red-500" size={20} />
              <span className="text-sm font-bold text-slate-700">Stay active, stay healthy!</span>
            </div>
          </motion.div>

          {/* Quiz */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col"
          >
            <div className={`w-14 h-14 ${activity.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
              <Trophy size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Quick Quiz</h3>
            
            <div className="flex-grow">
              <AnimatePresence mode="wait">
                {quizState === 'question' ? (
                  <motion.div
                    key="question"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <p className="text-lg font-bold text-slate-800 mb-6">{activity.quiz.question}</p>
                    <div className="space-y-3">
                      {activity.quiz.options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => selectedOption === null && handleAnswer(i)}
                          className={`w-full p-4 text-left rounded-xl border-2 transition-all font-bold flex items-center justify-between ${
                            selectedOption === null
                              ? 'border-slate-100 hover:border-slate-300 text-slate-700'
                              : i === activity.quiz.correct
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                                : selectedOption === i
                                  ? 'border-red-500 bg-red-50 text-red-700'
                                  : 'border-slate-100 text-slate-300'
                          }`}
                        >
                          {option}
                          {selectedOption !== null && i === activity.quiz.correct && <CheckCircle2 size={20} />}
                          {selectedOption === i && i !== activity.quiz.correct && <XCircle size={20} />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Trophy className="text-amber-500" size={40} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Great Job!</h4>
                    <p className="text-slate-600 mb-8">You're becoming a real expert!</p>
                    <button
                      onClick={resetQuiz}
                      className="inline-flex items-center gap-2 text-slate-900 font-bold hover:gap-3 transition-all"
                    >
                      <RotateCcw size={18} />
                      Try Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Creative Challenge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col"
          >
            <div className={`w-14 h-14 ${activity.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
              <Sparkles size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Creative Challenge</h3>
            <h4 className={`text-xl font-bold ${activity.accentColor} mb-4`}>{activity.creativeChallenge.title}</h4>
            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
              {activity.creativeChallenge.description}
            </p>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-center gap-3">
              <Lightbulb className="text-amber-500" size={20} />
              <span className="text-sm font-bold text-amber-800">Use your imagination!</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Foxy's Growth Journey (Mini Version) */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            Foxy's Growth Journey
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Badge</h2>
          <p className="text-lg text-slate-600 leading-relaxed italic mb-8">
            "Foxy once thought that only the Golden Winged Badge could make him a real explorer. 
            But as he traveled with Axel, he realized that every time he was brave enough to try a new food, 
            curious enough to ask a question, or kind enough to help a friend, he was already wearing a badge in his heart."
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-3 bg-slate-50 rounded-2xl text-slate-700 font-bold text-sm">Brave</div>
            <div className="px-6 py-3 bg-slate-50 rounded-2xl text-slate-700 font-bold text-sm">Curious</div>
            <div className="px-6 py-3 bg-slate-50 rounded-2xl text-slate-700 font-bold text-sm">Kind</div>
          </div>
        </div>
      </section>
    </div>
  );
}
