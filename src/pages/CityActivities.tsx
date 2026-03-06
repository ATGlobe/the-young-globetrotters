import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CITIES } from '../data/cities';
import { getCityGames } from '../data/games';
import { getCityQuizzes } from '../data/quizzes';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '../hooks/useProgress';
import { SimpleCrossword } from '../components/games/SimpleCrossword';
import { EmojiRebusGame } from '../components/games/EmojiRebusGame';
import { WordScrambleGame } from '../components/games/WordScrambleGame';
import { CityCompletionModal } from '../components/CityCompletionModal';
import { 
  Utensils, 
  Gamepad2, 
  Sparkles, 
  Trophy,
  ArrowLeft,
  CheckCircle2,
  Award,
  Wind
} from 'lucide-react';

const CityActivities: React.FC = () => {
  const { city: cityId } = useParams<{ city: string }>();
  const city = CITIES.find(c => c.id === cityId);
  const { progress, updateProgress, getCityBadge, isCityCompleted } = useProgress();
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);

  useEffect(() => {
    if (cityId && isCityCompleted(cityId) && !hasShownModal) {
      setShowCompletionModal(true);
      setHasShownModal(true);
    }
  }, [progress, cityId, isCityCompleted, hasShownModal]);

  if (!city) {
    return <Navigate to="/map" replace />;
  }

  const gamesData = getCityGames(city.id);
  const quizzesData = getCityQuizzes(city.id, city.name);

  // Adapt games data for components
  const adaptedGames = {
    crossword: {
      words: gamesData.crossword.map(w => ({ word: w.answer, clue: w.clue, orientation: 'across' as const }))
    },
    rebus: [
      { emojis: gamesData.emoji, answer: gamesData.emojiAnswer }
    ],
    scramble: [
      { letters: gamesData.scramble, answer: gamesData.scrambleAnswer }
    ]
  };

  // Adapt quiz data for component
  const adaptedQuizzes = {
    geography: {
      question: quizzesData.geography.question,
      options: quizzesData.geography.options,
      correct: quizzesData.geography.options.indexOf(quizzesData.geography.answer)
    },
    culture: {
      question: quizzesData.culture.question,
      options: quizzesData.culture.options,
      correct: quizzesData.culture.options.indexOf(quizzesData.culture.answer)
    },
    food: {
      question: quizzesData.food.question,
      options: quizzesData.food.options,
      correct: quizzesData.food.options.indexOf(quizzesData.food.answer)
    }
  };

  const cityProgress = progress[city.id] || {
    quiz: { geography: false, culture: false, food: false },
    games: { crossword: false, rebus: false, scramble: false }
  };

  const badgeLevel = getCityBadge(city.id);

  const WingedBadgeIcon = ({ level }: { level: string }) => {
    const colors: Record<string, string> = {
      bronze: 'text-orange-700',
      silver: 'text-slate-400',
      gold: 'text-amber-500',
      platinum: 'text-blue-400',
      diamond: 'text-cyan-400'
    };

    return (
      <div className="relative flex items-center justify-center">
        <Wind className={`absolute -left-4 ${colors[level]} opacity-50`} size={16} />
        <Award className={`${colors[level]}`} size={24} />
        <Wind className={`absolute -right-4 scale-x-[-1] ${colors[level]} opacity-50`} size={16} />
      </div>
    );
  };

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
              <h1 className="text-3xl font-black">{city.name} Activities</h1>
              <p className="font-bold opacity-90">Complete all challenges to earn your Winged Badge!</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
              badgeLevel ? 'bg-white border-white/20' : 'bg-white/20 border-white/10'
            }`}>
              {badgeLevel ? <WingedBadgeIcon level={badgeLevel} /> : <Trophy className="text-white/30" size={24} />}
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest opacity-70">Current Badge</p>
              <p className="font-black">{badgeLevel ? `${city.name} Explorer` : 'No Badge Yet'}</p>
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
                {cityProgress.games.crossword && <CheckCircle2 className="text-emerald-500" size={24} />}
              </div>
              <SimpleCrossword 
                words={adaptedGames.crossword.words} 
                isCompleted={cityProgress.games.crossword}
                onComplete={() => updateProgress(city.id, 'games', 'crossword')}
              />
            </div>

            {/* Rebus */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-slate-900">Emoji Rebus</h3>
                {cityProgress.games.rebus && <CheckCircle2 className="text-emerald-500" size={24} />}
              </div>
              <EmojiRebusGame 
                rebus={adaptedGames.rebus}
                isCompleted={cityProgress.games.rebus}
                onComplete={() => updateProgress(city.id, 'games', 'rebus')}
              />
            </div>

            {/* Scramble */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-slate-900">Word Scramble</h3>
                {cityProgress.games.scramble && <CheckCircle2 className="text-emerald-500" size={24} />}
              </div>
              <WordScrambleGame 
                scramble={adaptedGames.scramble}
                isCompleted={cityProgress.games.scramble}
                onComplete={() => updateProgress(city.id, 'games', 'scramble')}
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
            {Object.entries(adaptedQuizzes).map(([key, quiz]) => (
              <div key={key} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-black text-slate-900 capitalize">{key} Quiz</h4>
                  {cityProgress.quiz[key as keyof typeof cityProgress.quiz] && <CheckCircle2 className="text-emerald-500" size={20} />}
                </div>
                <p className="font-bold text-slate-700 mb-6">{quiz.question}</p>
                <div className="space-y-3">
                  {quiz.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (idx === quiz.correct) {
                          updateProgress(city.id, 'quiz', key);
                        }
                      }}
                      disabled={cityProgress.quiz[key as keyof typeof cityProgress.quiz]}
                      className={`w-full p-4 text-left rounded-2xl border-2 font-bold transition-all ${
                        cityProgress.quiz[key as keyof typeof cityProgress.quiz] && idx === quiz.correct
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

      <CityCompletionModal 
        isOpen={showCompletionModal} 
        onClose={() => setShowCompletionModal(false)} 
        cityName={city.name} 
      />
    </div>
  );
};

export default CityActivities;

