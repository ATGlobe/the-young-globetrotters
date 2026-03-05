import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { VOLUMES } from '../data/volumes';
import Hero from '../components/Hero';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '../hooks/useProgress';
import { SimpleCrossword } from '../components/games/SimpleCrossword';
import { EmojiRebusGame } from '../components/games/EmojiRebusGame';
import { WordScrambleGame } from '../components/games/WordScrambleGame';
import { 
  MapPin, 
  Utensils, 
  Plane, 
  GraduationCap, 
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  Trophy,
  Gamepad2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

const BookPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const book = VOLUMES.find(b => b.slug === city);
  const { progress, updateProgress, calculateBadge } = useProgress();

  if (!book) {
    return <Navigate to="/books" replace />;
  }

  const volumeProgress = progress[book.id] || {
    quiz: { geography: false, culture: false, food: false },
    games: { crossword: false, rebus: false, scramble: false }
  };

  const badge = calculateBadge(book.id);

  return (
    <div className="bg-white min-h-screen">
      <Hero 
        title={book.city}
        subtitle={`${book.city}, ${book.country}`}
        bgColor="bg-blue-900"
        image={book.image}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          {book.purchaseLink ? (
            <div className="flex flex-col items-center gap-2">
              <a 
                href={book.purchaseLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 text-xl font-black text-blue-600 bg-white rounded-2xl hover:bg-slate-50 transition-all shadow-2xl hover:-translate-y-1"
              >
                Get the Digital Book ({book.price}) <ExternalLink size={20} />
              </a>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={14} />
                Secure checkout powered by Gumroad
              </p>
            </div>
          ) : (
            <div className="px-10 py-5 text-xl font-black text-slate-400 bg-slate-100 rounded-2xl border-2 border-slate-200">
              Coming Soon
            </div>
          )}
        </div>
      </Hero>

      {/* Progress & Badge Section */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 ${
                badge === 'Gold' ? 'bg-amber-400 border-amber-200' : 
                badge === 'Silver' ? 'bg-slate-300 border-slate-100' :
                badge === 'Bronze' ? 'bg-orange-300 border-orange-100' :
                'bg-slate-50 border-slate-100'
              } shadow-lg`}>
                <Trophy className={badge ? 'text-white' : 'text-slate-200'} size={32} />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Adventure Progress</h3>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                  {badge ? `${badge} Badge Earned!` : 'Start your journey!'}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => {
                const completedCount = 
                  Object.values(volumeProgress.quiz).filter(Boolean).length + 
                  Object.values(volumeProgress.games).filter(Boolean).length;
                return (
                  <div 
                    key={i} 
                    className={`w-3 h-3 rounded-full ${i < completedCount ? 'bg-emerald-500' : 'bg-slate-100'}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-4xl font-black text-slate-900">Explore {book.city}</h2>
            <p className="text-xl leading-relaxed text-slate-600 font-medium">{book.description}</p>
          </div>
        </div>
      </section>

      {/* Interactive Games Section */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <Gamepad2 size={14} />
              Explorer Games
            </div>
            <h2 className="text-4xl font-black text-slate-900">Play & Learn</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Crossword */}
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Crossword</h3>
              </div>
              <SimpleCrossword 
                words={book.games.crossword.words} 
                isCompleted={volumeProgress.games.crossword}
                onComplete={() => updateProgress(book.id, 'games', 'crossword')}
              />
            </div>

            {/* Rebus */}
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl">
                  <Gamepad2 size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Emoji Rebus</h3>
              </div>
              <EmojiRebusGame 
                rebus={book.games.rebus}
                isCompleted={volumeProgress.games.rebus}
                onComplete={() => updateProgress(book.id, 'games', 'rebus')}
              />
            </div>

            {/* Scramble */}
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <Utensils size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Word Scramble</h3>
              </div>
              <WordScrambleGame 
                scramble={book.games.scramble}
                isCompleted={volumeProgress.games.scramble}
                onComplete={() => updateProgress(book.id, 'games', 'scramble')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quizzes Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900">Knowledge Check</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-4">Test what you've learned about {book.city}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(book.quizzes).map(([key, quiz]) => (
              <div key={key} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h4 className="text-xl font-black text-slate-900 mb-6 capitalize">{key} Quiz</h4>
                <p className="font-bold text-slate-700 mb-6">{quiz.question}</p>
                <div className="space-y-3">
                  {quiz.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (idx === quiz.correct) {
                          updateProgress(book.id, 'quiz', key);
                        }
                      }}
                      disabled={volumeProgress.quiz[key as keyof typeof volumeProgress.quiz]}
                      className={`w-full p-4 text-left rounded-2xl border-2 font-bold transition-all ${
                        volumeProgress.quiz[key as keyof typeof volumeProgress.quiz] && idx === quiz.correct
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                          : 'bg-white border-slate-200 hover:border-orange-400'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-8 text-4xl font-black lg:text-5xl">Ready for the Full Adventure?</h2>
          <p className="max-w-2xl mx-auto mb-12 text-xl font-medium opacity-90">
            Get the complete digital book of {book.city} and unlock all the secrets of this amazing place!
          </p>
          {book.purchaseLink && (
            <a 
              href={book.purchaseLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-6 text-2xl font-black text-blue-600 bg-white rounded-2xl hover:bg-slate-50 transition-all shadow-2xl hover:-translate-y-1"
            >
              Buy on Gumroad <ExternalLink size={24} />
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookPage;
;
