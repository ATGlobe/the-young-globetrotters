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

  const volumeId = book.id;

  // Default challenges if not provided in BOOKS data
  const defaultQuizzes = {
    geography: {
      question: `Where is ${book.city} located?`,
      options: [book.country, "Somewhere else", "Far away", "Nearby"],
      correct: 0
    },
    culture: {
      question: `What is a famous landmark in ${book.city}?`,
      options: [book.landmarks[0] || "A famous building", "A park", "A museum", "A bridge"],
      correct: 0
    },
    food: {
      question: `What is a traditional food in ${book.city}?`,
      options: [book.recipe.name || "A local dish", "Pizza", "Burger", "Salad"],
      correct: 0
    }
  };

  const defaultGames = {
    crossword: {
      words: [
        { word: book.city.toUpperCase().replace(/\s/g, ''), clue: `The name of this city.`, orientation: 'across' as const },
        { word: book.country.toUpperCase().replace(/\s/g, ''), clue: `The country where ${book.city} is.`, orientation: 'across' as const },
        { word: (book.landmarks[0] || "LANDMARK").toUpperCase().replace(/\s/g, ''), clue: `A famous place here.`, orientation: 'across' as const }
      ]
    },
    rebus: [
      { emojis: "🌍✈️🎒", answer: book.city.toUpperCase() }
    ],
    scramble: [
      { letters: book.city.toUpperCase().split('').sort(() => Math.random() - 0.5).join(''), answer: book.city.toUpperCase() }
    ]
  };

  const quizzes = book.quizzes || vol?.quizzes || defaultQuizzes;
  const games = book.games || vol?.games || defaultGames;

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
            <Link to={`/activities`} className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all">
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
              <SimpleCrossword 
                words={games.crossword.words} 
                isCompleted={volumeProgress.games.crossword}
                onComplete={() => updateProgress(volumeId, 'games', 'crossword')}
              />
            </div>

            {/* Rebus */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-slate-900">Emoji Rebus</h3>
                {volumeProgress.games.rebus && <CheckCircle2 className="text-emerald-500" size={24} />}
              </div>
              <EmojiRebusGame 
                rebus={games.rebus}
                isCompleted={volumeProgress.games.rebus}
                onComplete={() => updateProgress(volumeId, 'games', 'rebus')}
              />
            </div>

            {/* Scramble */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-slate-900">Word Scramble</h3>
                {volumeProgress.games.scramble && <CheckCircle2 className="text-emerald-500" size={24} />}
              </div>
              <WordScrambleGame 
                scramble={games.scramble}
                isCompleted={volumeProgress.games.scramble}
                onComplete={() => updateProgress(volumeId, 'games', 'scramble')}
              />
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
            {Object.entries(quizzes).map(([key, quiz]) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityActivities;
