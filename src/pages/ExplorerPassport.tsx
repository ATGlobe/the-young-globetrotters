import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { VOLUMES } from '../constants';
import { Award, Lock, CheckCircle2, Trophy, Star } from 'lucide-react';
import { usePassport } from '../hooks/usePassport';

const ExplorerPassport: React.FC = () => {
  const { passport, isUnlocked, getRank, getNextRankThreshold, totalVolumes } = usePassport();
  const unlockedCount = passport.purchasedVolumes.length;
  const rank = getRank();
  const nextThreshold = getNextRankThreshold();
  const progress = (unlockedCount / totalVolumes) * 100;

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero 
        title="Explorer Passport"
        subtitle="Collect badges as you travel the world with Axel & Tino. Complete quizzes to unlock new achievements and track your progress as a Young Globetrotter."
        bgColor="bg-[#FACC15]" // Gold
        image="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Axel__10_-removebg-preview.png"
      >
        <div className="flex items-center gap-6 mt-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{unlockedCount}</span>
            <span className="text-sm font-medium uppercase tracking-wider opacity-80">Badges</span>
          </div>
          <div className="w-px h-10 bg-white/30" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{totalVolumes}</span>
            <span className="text-sm font-medium uppercase tracking-wider opacity-80">Total Cities</span>
          </div>
        </div>
      </Hero>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl">
                <Trophy size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Rank</h4>
                <p className="text-sm text-slate-600 font-bold text-yellow-600">{rank}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Star size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900">Next Level</h4>
                <p className="text-sm text-slate-600 mb-2">{nextThreshold - unlockedCount} more badges needed</p>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(unlockedCount / nextThreshold) * 100}%` }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Quizzes Done</h4>
                <p className="text-sm text-slate-600">{passport.completedQuizzes.length} Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badge Collection */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-slate-900">Your Badge Collection</h2>
            <p className="text-lg text-slate-600">Complete the city quizzes in the Activities section to unlock these beautiful digital badges.</p>
          </div>

          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {VOLUMES.map((book) => {
              const unlocked = isUnlocked(parseInt(book.id));
              return (
                <motion.div
                  key={book.id}
                  whileHover={unlocked ? { scale: 1.05, rotate: 2 } : {}}
                  className={`relative aspect-square rounded-full flex flex-col items-center justify-center p-6 text-center transition-all ${
                    unlocked 
                      ? 'bg-white shadow-xl border-4 border-yellow-400' 
                      : 'bg-slate-200 opacity-50 border-4 border-dashed border-slate-300 grayscale'
                  }`}
                >
                  {unlocked ? (
                    <>
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1 rounded-full shadow-lg"
                      >
                        <CheckCircle2 size={16} />
                      </motion.div>
                      <Award size={48} className="text-yellow-500 mb-2" />
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-tighter">{book.city}</span>
                    </>
                  ) : (
                    <>
                      <Lock size={32} className="text-slate-400 mb-2" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{book.city}</span>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Unlock */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1">
              <h2 className="mb-8 text-4xl font-bold">How to Unlock Badges</h2>
              <div className="space-y-8">
                {[
                  { step: '1', title: 'Read the Book', text: 'Learn all about the city, its landmarks, and culture.' },
                  { step: '2', title: 'Take the Quiz', text: 'Head to the Activities section and test your knowledge.' },
                  { step: '3', title: 'Earn Your Badge', text: 'Get a perfect score to unlock the city badge for your passport!' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-slate-900">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                <img 
                  src="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Il_gufo_maestro_dell-removebg-preview.png" 
                  alt="Professor Owl" 
                  className="w-full h-auto max-w-xs mx-auto drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-8 text-center">
                  <p className="text-xl italic text-slate-300">"Every badge you earn represents a new culture you've understood and a new part of the world you've explored!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplorerPassport;
