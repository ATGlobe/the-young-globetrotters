import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { CITIES } from '../data/cities';
import { Lock, Download } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

const ExplorerPassport: React.FC = () => {
  const { isCityCompleted, getCompletedCitiesCount } = useProgress();
  
  const completedCount = getCompletedCitiesCount();
  const totalCities = 50;
  const isUnlocked = completedCount >= totalCities;

  useEffect(() => {
    if (isUnlocked) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isUnlocked]);

  const handleDownload = () => {
    if (isUnlocked) {
      // In a real app, this would be a real PDF link
      // window.location.href = "/downloads/axel-tino-passport.pdf";
      alert("Congratulations! Your Explorer Passport is ready for download. (This is a demo link)");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Section - Passport Guide with Tino */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#fff7ef] p-10 md:p-16 rounded-[3rem] shadow-xl border border-orange-100 flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-64 h-64 flex-shrink-0"
            >
              <img 
                src="https://i.ibb.co/hFYnggDk/Generated-Image-March-06-2026-12-57-AM-removebg-preview.png" 
                alt="Tino the explorer" 
                className="w-full h-full object-contain drop-shadow-2xl animate-float"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-black text-slate-900 mb-6">Become a Real Explorer!</h2>
              
              <div className="space-y-4 text-lg text-slate-700 font-medium leading-relaxed mb-8">
                <p>
                  Hi Explorer! I'm <strong>Tino</strong>. 🌍  
                  To unlock the <strong>Official Axel & Tino Explorer Passport</strong>,
                  you must travel the world and complete the activities in all the cities!
                </p>

                <p>Each city has fun games like:</p>
                <ul className="grid grid-cols-2 gap-2 text-sm font-bold text-blue-600">
                  <li className="flex items-center gap-2">🧩 Emoji Rebus</li>
                  <li className="flex items-center gap-2">🔤 Word Scramble</li>
                  <li className="flex items-center gap-2">✏️ Crosswords</li>
                  <li className="flex items-center gap-2">🧠 Knowledge Quizzes</li>
                </ul>

                <p>
                  Every time you complete a city, you earn a <strong>Passport Badge</strong>.  
                  Collect all <strong>50 badges</strong> to unlock the official passport!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-orange-100">
                  <span className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Your Progress</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-orange-600">{completedCount}</span>
                    <span className="text-xl font-bold text-slate-300">/ 50 badges</span>
                  </div>
                </div>

                <button 
                  onClick={handleDownload}
                  className={`px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-lg flex items-center gap-3 ${
                    isUnlocked 
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-105 cursor-pointer' 
                      : 'bg-orange-500 text-white opacity-80 cursor-not-allowed'
                  }`}
                >
                  {isUnlocked ? (
                    <><Download size={24} /> 📥 Download the Explorer Passport</>
                  ) : (
                    <><Lock size={24} /> 🔒 Unlock the Passport</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passport Stamps Collection */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Your Passport Stamps</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Collect them all to become a Master Globetrotter!</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {CITIES.map((city) => {
              const completed = isCityCompleted(city.id);
              const level = city.level;
              
              return (
                <motion.div
                  key={city.id}
                  whileHover={completed ? { scale: 1.05, rotate: 2 } : {}}
                  className={`passport-card ${completed ? 'completed' : 'locked'}`}
                >
                  {completed ? (
                    <>
                      <img 
                        src="https://i.ibb.co/zT7ywV3J/Spilla-D-Aviatore-Alata-removebg-preview.png" 
                        alt="Explorer Badge" 
                        className={`badge-img badge-${level}`}
                        referrerPolicy="no-referrer"
                      />
                      <h3 className="text-lg font-black text-slate-900 mb-1">{city.name}</h3>
                      <span className={`text-[10px] font-black uppercase tracking-widest opacity-60`}>
                        Level: {level}
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                        <Lock size={24} className="text-slate-300" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{city.name}</h3>
                      <span className="text-[10px] font-black text-slate-300 mt-2">LOCKED</span>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Celebration Overlay */}
      {isUnlocked && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
        >
          <motion.div 
            initial={{ scale: 0.5, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-md p-12 rounded-[4rem] shadow-2xl border-4 border-emerald-500 text-center"
          >
            <h2 className="text-6xl font-black text-emerald-600 mb-4">🎉 CONGRATULATIONS!</h2>
            <p className="text-2xl font-bold text-slate-700">You completed the Axel & Tino World Journey!</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ExplorerPassport;

