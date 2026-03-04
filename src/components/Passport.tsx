import React from 'react';
import { Award, CheckCircle2, Trophy } from 'lucide-react';
import { BOOKS } from '../data/books';

const Passport: React.FC = () => {
  // Mock unlocked badges
  const unlockedCount = 2;

  return (
    <div className="bg-slate-900 rounded-3xl p-12 text-white shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-yellow-500 text-slate-900 text-xs font-black uppercase tracking-widest mb-4">
              Explorer Status
            </div>
            <h3 className="text-4xl font-black">Your Digital Passport</h3>
            <p className="text-slate-400 mt-2">Track your global achievements and collected badges.</p>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center min-w-[120px]">
              <Trophy className="mx-auto mb-2 text-yellow-500" size={24} />
              <div className="text-2xl font-black">{unlockedCount}</div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Badges</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center min-w-[120px]">
              <Award className="mx-auto mb-2 text-blue-400" size={24} />
              <div className="text-2xl font-black">{BOOKS.length}</div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Goal</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4">
          {BOOKS.slice(0, 20).map((book, i) => (
            <div 
              key={book.id}
              className={`aspect-square rounded-full flex items-center justify-center border-2 transition-all ${
                i < unlockedCount 
                  ? 'bg-yellow-500 border-yellow-400 text-slate-900 shadow-[0_0_15px_rgba(234,179,8,0.4)]' 
                  : 'bg-white/5 border-white/10 text-white/20'
              }`}
            >
              {i < unlockedCount ? (
                <CheckCircle2 size={20} />
              ) : (
                <span className="text-[10px] font-bold">{i + 1}</span>
              )}
            </div>
          ))}
          <div className="aspect-square rounded-full flex items-center justify-center bg-white/5 border-white/10 border-2 border-dashed text-white/20">
            <span className="text-[10px] font-bold">...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passport;
