import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { VOLUMES } from '../data/volumes';
import { BOOKS } from '../data/books';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '../hooks/useProgress';
import { SimpleCrossword } from '../components/games/SimpleCrossword';
import { EmojiRebusGame } from '../components/games/EmojiRebusGame';
import { WordScrambleGame } from '../components/games/WordScrambleGame';
import { 
  Utensils, 
  Gamepad2, 
  Sparkles, 
  Trophy,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

const CityActivities: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const vol = VOLUMES.find(b => b.slug === city);
  const book = BOOKS.find(b => b.slug === city);
  const { progress, updateProgress, calculateBadge } = useProgress();

  if (!book) {
    return <Navigate to="/map" replace />;
  }

  const volumeId = vol?.id || book.id;

  const volumeProgress = progress[volumeId] || {
    quiz: { geography: false, culture: false, food: false },
    games: { crossword: false, rebus: false, scramble: false }
  };

  const badge = calculateBadge(volumeId);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <header className="bg-orange-500 text-white py-12 px-4 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link to={`/books/${book.slug}`} className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all">
              <ArrowLeft size={24} />
            </Link>
            <div>
              <h1 className="text-3xl font-black">{book.city} Activities</h1>
              <p className="font-bold opacity-90">Complete all challenges to earn your Gold Stamp!</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
              badge === 'Gold' ? 'bg-amber-400 border-amber-200' : 
              badge === 'Silver' ? 'bg-slate-300 border-slate-100' :
              badge === 'Bronze' ? 'bg-orange-300 border-orange-100' :
              'bg-white/20 border-white/10'
            }`}>
              <Trophy className={badge ? 'text-white' : 'text-white/30'} size={24} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest opacity-70">Current Badge</p>
              <p className="font-black">{badge || 'No Badge Yet'}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 mt-12">
        {/* Games Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
              <Gamepad2 size={24} />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Explorer Games</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Crossword */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-slate-900">Crossword</h3>
                {volumeProgress.games.crossword && <CheckCircle2 className="text-emerald-500" size={24} />}
              </div>
              {vol?.games?.crossword ? (
                <SimpleCrossword 
                  words={vol.games.crossword.words} 
                  isCompleted={volumeProgress.games.crossword}
                  onComplete={() => updateProgress(volumeId, 'games', 'crossword')}
                />
              ) : (
                <p className="text-slate-400 font-bold text-center py-10">Coming soon!</p>
              )}
            </div>

            {/* Rebus */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-slate-900">Emoji Rebus</h3>
                {volumeProgress.games.rebus && <CheckCircle2 className="text-emerald-500" size={24} />}
              </div>
              {vol?.games?.rebus ? (
                <EmojiRebusGame 
                  rebus={vol.games.rebus}
                  isCompleted={volumeProgress.games.rebus}
                  onComplete={() => updateProgress(volumeId, 'games', 'rebus')}
                />
              ) : (
                <p className="text-slate-400 font-bold text-center py-10">Coming soon!</p>
              )}
            </div>

            {/* Scramble */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-slate-900">Word Scramble</h3>
                {volumeProgress.games.scramble && <CheckCircle2 className="text-emerald-500" size={24} />}
              </div>
              {vol?.games?.scramble ? (
                <WordScrambleGame 
                  scramble={vol.games.scramble}
                  isCompleted={volumeProgress.games.scramble}
                  onComplete={() => updateProgress(volumeId, 'games', 'scramble')}
                />
              ) : (
                <p className="text-slate-400 font-bold text-center py-10">Coming soon!</p>
              )}
            </div>
          </div>
        </div>

        {/* Quizzes Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <Sparkles size={24} />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Knowledge Quizzes</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {vol?.quizzes ? Object.entries(vol.quizzes).map(([key, quiz]) => (
              <div key={key} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-black text-slate-900 capitalize">{key} Quiz</h4>
                  {volumeProgress.quiz[key as keyof typeof volumeProgress.quiz] && <CheckCircle2 className="text-emerald-500" size={20} />}
                </div>
                <p className="font-bold text-slate-700 mb-6">{quiz.question}</p>
                <div className="space-y-3">
                  {quiz.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (idx === quiz.correct) {
                          updateProgress(volumeId, 'quiz', key);
                        }
                      }}
                      disabled={volumeProgress.quiz[key as keyof typeof volumeProgress.quiz]}
                      className={`w-full p-4 text-left rounded-2xl border-2 font-bold transition-all ${
                        volumeProgress.quiz[key as keyof typeof volumeProgress.quiz] && idx === quiz.correct
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                          : 'bg-white border-slate-100 hover:border-orange-400'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )) : (
              <div className="col-span-full p-12 bg-white rounded-[2.5rem] border border-slate-100 text-center">
                <p className="text-slate-400 font-bold">Quizzes coming soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityActivities;
