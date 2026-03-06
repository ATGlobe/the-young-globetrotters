import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import { CITIES } from '../data/cities';
import { Award, Lock, CheckCircle2, Trophy, Star, MapPin, Globe, Wind } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

const ExplorerPassport: React.FC = () => {
  const { progress, isCityCompleted, getCityBadge, getCompletedCitiesCount, checkPassportLevel } = useProgress();
  
  const completedCount = getCompletedCitiesCount();
  const totalCities = 50;
  const progressPercentage = (completedCount / totalCities) * 100;

  const LEVELS = [
    { name: "Junior Explorer", count: 5, icon: <Award size={24} />, color: "text-orange-700", bg: "bg-orange-100" },
    { name: "Adventurer", count: 15, icon: <Star size={24} />, color: "text-slate-500", bg: "bg-slate-100" },
    { name: "Navigator", count: 30, icon: <Trophy size={24} />, color: "text-amber-600", bg: "bg-amber-100" },
    { name: "Master Globetrotter", count: 50, icon: <Globe size={24} />, color: "text-purple-600", bg: "bg-purple-100" },
  ];

  const getRankInfo = () => {
    if (completedCount >= 50) return { name: "Master Globetrotter", color: "text-purple-600", bg: "bg-purple-100" };
    if (completedCount >= 30) return { name: "Navigator", color: "text-amber-600", bg: "bg-amber-100" };
    if (completedCount >= 15) return { name: "Adventurer", color: "text-slate-500", bg: "bg-slate-100" };
    if (completedCount >= 5) return { name: "Junior Explorer", color: "text-orange-700", bg: "bg-orange-100" };
    return { name: "Beginner Explorer", color: "text-slate-400", bg: "bg-slate-50" };
  };

  const rank = getRankInfo();

  const WingedBadge = ({ level, cityName }: { level: string, cityName: string }) => {
    const colors: Record<string, string> = {
      bronze: 'text-orange-700',
      silver: 'text-slate-400',
      gold: 'text-amber-500',
      platinum: 'text-blue-400',
      diamond: 'text-cyan-400'
    };

    return (
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center mb-2">
          <Wind className={`absolute -left-6 ${colors[level]} opacity-50`} size={32} />
          <Award className={`${colors[level]}`} size={48} />
          <Wind className={`absolute -right-6 scale-x-[-1] ${colors[level]} opacity-50`} size={32} />
        </div>
        <span className={`text-[10px] font-black uppercase tracking-widest ${colors[level]}`}>
          {cityName} EXPLORER
        </span>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero 
        title="Explorer Passport"
        subtitle="Collect stamps as you travel the world with Axel & Tino. Complete all activities in a city to earn your Winged Badge!"
        bgColor="bg-[#FACC15]" // Gold
        image="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Axel__10_-removebg-preview.png"
      >
        <div className="flex items-center gap-6 mt-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black">{completedCount}</span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Badges Earned</span>
          </div>
          <div className="w-px h-10 bg-white/30" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black">{totalCities}</span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Total Cities</span>
          </div>
        </div>
      </Hero>

      {/* Tino Explanation Card */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-12 gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <img 
                src="https://i.ibb.co/hFYnggDk/Generated-Image-March-06-2026-12-57-AM-removebg-preview.png" 
                alt="Tino the Explorer" 
                className="w-full h-full object-contain drop-shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-black text-slate-900 mb-4">Your Journey Progress</h2>
              <p className="text-lg text-slate-600 font-medium mb-8">
                Hello explorer! I'm Tino. To earn the official Axel & Tino Explorer Passport, you need to visit all 50 cities and complete every challenge. 
                Collect all 50 Winged Badges to unlock your printable certificate!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-black text-slate-900">Current Rank: {rank.name}</span>
                    <span className="text-sm font-black text-blue-600">{completedCount} / 50</span>
                  </div>
                  <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                    />
                  </div>
                </div>
                
                <button 
                  disabled={completedCount < 50}
                  className={`px-8 py-4 rounded-2xl font-black transition-all shadow-lg flex items-center gap-2 ${
                    completedCount >= 50 
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-105' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {completedCount >= 50 ? 'Download Certificate' : 'Locked'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badge Levels Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            {LEVELS.map((level) => {
              const isUnlocked = completedCount >= level.count;
              return (
                <div 
                  key={level.name}
                  className={`flex items-center gap-4 p-6 rounded-2xl border transition-all ${
                    isUnlocked 
                      ? `${level.bg} border-${level.color.split('-')[1]}-200 shadow-sm` 
                      : 'bg-slate-50 border-slate-100 opacity-60'
                  }`}
                >
                  <div className={`p-3 rounded-xl bg-white shadow-sm ${isUnlocked ? level.color : 'text-slate-300'}`}>
                    {isUnlocked ? level.icon : <Lock size={24} />}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900">{level.name}</h4>
                    <p className={`text-xs font-bold uppercase tracking-widest ${isUnlocked ? level.color : 'text-slate-400'}`}>
                      {isUnlocked ? 'Unlocked!' : `${level.count} Cities Needed`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Passport Stamps Collection */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="mb-6 text-4xl font-black text-slate-900">Your Passport Badges</h2>
            <p className="text-lg text-slate-600 font-medium">Earn a Winged Badge for each city by completing all quizzes and games!</p>
          </div>

          <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {CITIES.map((city) => {
              const isCompleted = isCityCompleted(city.id);
              const level = city.level;
              
              return (
                <motion.div
                  key={city.id}
                  whileHover={isCompleted ? { scale: 1.05, rotate: 2 } : {}}
                  className={`relative aspect-[3/4] rounded-3xl flex flex-col items-center justify-center p-6 text-center transition-all overflow-hidden border-2 ${
                    isCompleted 
                      ? 'bg-white shadow-xl border-amber-400' 
                      : 'bg-slate-100 border-dashed border-slate-300 opacity-60 grayscale'
                  }`}
                >
                  {isCompleted ? (
                    <>
                      <WingedBadge level={level} cityName={city.name} />
                      <div className="mt-6 px-3 py-1 bg-amber-400 text-white text-[10px] font-black rounded-full shadow-sm uppercase tracking-widest">
                        COMPLETED
                      </div>
                    </>
                  ) : (
                    <>
                      <Lock size={32} className="text-slate-300 mb-4" />
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{city.name}</h4>
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
              <h2 className="mb-12 text-4xl font-black">How to Earn Badges</h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Pick a City', text: 'Select a city from the Map or Books section to start your adventure.' },
                  { step: '02', title: 'Complete Activities', text: 'Finish all 3 Quizzes and all 3 Games (Crossword, Rebus, Scramble).' },
                  { step: '03', title: 'Get Your Badge', text: 'Once all 6 activities are done, your Winged Badge will appear here!' },
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

