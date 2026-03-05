import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import { VOLUMES } from '../data/volumes';
import { BOOKS } from '../data/books';
import { Award, Lock, CheckCircle2, Trophy, Star, MapPin } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

const ExplorerPassport: React.FC = () => {
  const { progress, calculateBadge } = useProgress();
  
  const completedVolumes = Object.keys(progress).filter(id => calculateBadge(id) === 'Gold');
  const totalVolumes = BOOKS.length;
  const progressPercentage = (completedVolumes.length / totalVolumes) * 100;

  const getRank = () => {
    const count = completedVolumes.length;
    if (count >= 20) return 'Global Ambassador';
    if (count >= 10) return 'World Traveler';
    if (count >= 5) return 'Junior Explorer';
    return 'New Globetrotter';
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero 
        title="Explorer Passport"
        subtitle="Collect stamps as you travel the world with Axel & Tino. Complete all activities in a city to earn your Gold Stamp!"
        bgColor="bg-[#FACC15]" // Gold
        image="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Axel__10_-removebg-preview.png"
      >
        <div className="flex items-center gap-6 mt-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black">{completedVolumes.length}</span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Gold Stamps</span>
          </div>
          <div className="w-px h-10 bg-white/30" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black">{totalVolumes}</span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Total Cities</span>
          </div>
        </div>
      </Hero>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl">
                <Trophy size={24} />
              </div>
              <div>
                <h4 className="font-black text-slate-900">Explorer Rank</h4>
                <p className="text-sm font-bold text-yellow-600 uppercase tracking-widest">{getRank()}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Star size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-slate-900">Journey Progress</h4>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mt-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-black text-slate-900">Total Activities</h4>
                <p className="text-sm text-slate-600 font-bold">
                  {Object.values(progress).reduce((acc, vol) => {
                    return acc + Object.values(vol.quiz).filter(Boolean).length + Object.values(vol.games).filter(Boolean).length;
                  }, 0)} Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passport Stamps Collection */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="mb-6 text-4xl font-black text-slate-900">Your Passport Stamps</h2>
            <p className="text-lg text-slate-600 font-medium">Earn a Gold Stamp for each city by completing all quizzes and games!</p>
          </div>

          <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {BOOKS.map((book) => {
              const vol = VOLUMES.find(v => v.slug === book.slug);
              const badge = vol ? calculateBadge(vol.id) : calculateBadge(book.id);
              const isGold = badge === 'Gold';
              
              return (
                <motion.div
                  key={book.id}
                  whileHover={isGold ? { scale: 1.05, rotate: 2 } : {}}
                  className={`relative aspect-[3/4] rounded-3xl flex flex-col items-center justify-center p-6 text-center transition-all overflow-hidden border-2 ${
                    isGold 
                      ? 'bg-white shadow-xl border-amber-400' 
                      : 'bg-slate-100 border-dashed border-slate-300 opacity-60 grayscale'
                  }`}
                >
                  {isGold ? (
                    <>
                      <div className="absolute top-4 right-4 text-amber-500">
                        <Award size={24} />
                      </div>
                      <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mb-4 border-4 border-amber-100 shadow-inner">
                        <img 
                          src={book.coverImage} 
                          alt={book.city} 
                          className="w-16 h-16 object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="text-lg font-black text-slate-900 leading-tight mb-1">{book.city}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{book.country}</p>
                      <div className="mt-4 px-3 py-1 bg-amber-400 text-white text-[10px] font-black rounded-full shadow-sm uppercase tracking-widest">
                        GOLD STAMP
                      </div>
                    </>
                  ) : (
                    <>
                      <Lock size={32} className="text-slate-300 mb-4" />
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{book.city}</h4>
                      <p className="text-[10px] font-bold text-slate-300 mt-2">LOCKED</p>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unlock Guide */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1">
              <h2 className="mb-12 text-4xl font-black">How to Earn Stamps</h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Pick a City', text: 'Select a city from the Map or Books section to start your adventure.' },
                  { step: '02', title: 'Complete Activities', text: 'Finish all 3 Quizzes and all 3 Games (Crossword, Rebus, Scramble).' },
                  { step: '03', title: 'Get Your Stamp', text: 'Once all 6 activities are done, your Gold Stamp will appear here!' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-2xl shadow-lg">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2">{item.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="p-12 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-md text-center">
                <img 
                  src="https://i.ibb.co/6Jw4BgMd/Generated-Image-March-03-2026-3-30-AM-removebg-preview.png" 
                  alt="Explorer Passport Illustration" 
                  className="w-full h-auto max-w-xs mx-auto drop-shadow-2xl mb-8"
                  referrerPolicy="no-referrer"
                />
                <p className="text-2xl font-medium italic text-slate-300">
                  "Your passport is a record of your curiosity. Fill it with stamps and become a true Global Citizen!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplorerPassport;
