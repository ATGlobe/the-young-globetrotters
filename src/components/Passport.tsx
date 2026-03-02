import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Map as MapIcon, 
  CheckCircle2, 
  Lock, 
  Star, 
  Globe,
  Loader2,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { progressApi } from '../lib/api';
import { useAuthStore } from '../store/authStore';
import { VOLUMES } from '../constants';

export default function Passport() {
  const { user, isAuthenticated } = useAuthStore();
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!isAuthenticated) return;
    const fetchProgress = async () => {
      try {
        const res = await progressApi.get();
        setData(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProgress();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center mb-8">
          <Lock className="w-10 h-10 text-blue-600" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">Explorer Passport Locked</h2>
        <p className="text-slate-500 max-w-md mb-8">Sign in to start your world adventure and track your progress across the globe!</p>
        <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-200">Sign In to Start</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    );
  }

  const completedCities = data.progress.filter((p: any) => p.completed_at).length;
  const totalCities = VOLUMES.length;
  const progressPercent = (completedCities / totalCities) * 100;

  return (
    <div className="bg-white rounded-[48px] shadow-2xl overflow-hidden border border-blue-50">
      {/* Passport Header */}
      <div className="bg-blue-600 p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Globe className="w-64 h-64 translate-x-1/4 -translate-y-1/4" />
        </div>
        
        <div className="relative z-10 flex flex-col md:row items-center gap-8">
          <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-[32px] flex items-center justify-center border-2 border-white/30">
            <Award className="w-16 h-16" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black mb-2">Explorer Passport</h2>
            <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">Official Document of {user?.name}</p>
          </div>
          <div className="md:ml-auto text-center md:text-right">
            <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-2">Global Progress</p>
            <p className="text-5xl font-black">{completedCities}<span className="text-blue-300 text-2xl">/{totalCities}</span></p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 relative h-4 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            className="absolute inset-0 bg-yellow-400"
          />
        </div>
      </div>

      <div className="p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Badges Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              Earned Badges
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {data.badges.map((badge: any) => (
                <motion.div
                  key={badge.id}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-blue-100 relative group"
                >
                  <Award className="w-8 h-8 text-blue-600" />
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-[8px] font-black px-2 py-1 rounded-full text-yellow-900 shadow-sm">
                    {badge.city}
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                    {badge.city} Explorer
                  </div>
                </motion.div>
              ))}
              {data.badges.length === 0 && (
                <div className="col-span-3 py-12 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                  <p className="text-slate-400 text-sm font-bold">No badges yet.<br/>Start exploring!</p>
                </div>
              )}
            </div>
          </div>

          {/* City Progress List */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <MapIcon className="w-6 h-6 text-blue-600" />
              City Missions
            </h3>
            <div className="space-y-4">
              {VOLUMES.slice(0, 5).map((vol) => {
                const progress = data.progress.find((p: any) => p.city === vol.city);
                const isCompleted = progress?.completed_at;
                
                return (
                  <div key={vol.id} className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${isCompleted ? 'bg-yellow-100 text-yellow-600' : 'bg-white text-slate-300'}`}>
                      {isCompleted ? <Star className="w-8 h-8 fill-yellow-600" /> : <Globe className="w-8 h-8" />}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <h4 className="font-black text-slate-900">{vol.city}</h4>
                        {isCompleted ? (
                          <span className="bg-yellow-400 text-yellow-900 text-[8px] font-black px-2 py-0.5 rounded-full uppercase">Master</span>
                        ) : progress?.free_quiz_completed ? (
                          <span className="bg-blue-100 text-blue-600 text-[8px] font-black px-2 py-0.5 rounded-full uppercase">Explorer</span>
                        ) : (
                          <span className="bg-slate-100 text-slate-400 text-[8px] font-black px-2 py-0.5 rounded-full uppercase">Locked</span>
                        )}
                      </div>
                      <div className="flex gap-4 mt-2">
                        <div className={`flex items-center gap-1 text-[10px] font-black uppercase ${progress?.free_quiz_completed ? 'text-blue-600' : 'text-slate-300'}`}>
                          <Star className={`w-3 h-3 ${progress?.free_quiz_completed ? 'fill-blue-600' : ''}`} /> Free Quiz {progress?.free_score > 0 && `(${progress.free_score}/5)`}
                        </div>
                        <div className={`flex items-center gap-1 text-[10px] font-black uppercase ${progress?.ebook_purchased ? 'text-emerald-600' : 'text-slate-300'}`}>
                          <CheckCircle2 className="w-3 h-3" /> Ebook
                        </div>
                        <div className={`flex items-center gap-1 text-[10px] font-black uppercase ${progress?.quiz_completed ? 'text-emerald-600' : 'text-slate-300'}`}>
                          <CheckCircle2 className="w-3 h-3" /> Master Quiz {progress?.premium_score > 0 && `(${progress.premium_score})`}
                        </div>
                        <div className={`flex items-center gap-1 text-[10px] font-black uppercase ${progress?.activity_downloaded ? 'text-emerald-600' : 'text-slate-300'}`}>
                          <CheckCircle2 className="w-3 h-3" /> Activity
                        </div>
                      </div>
                    </div>
                    <Link to={`/volume/${vol.id}`} className="p-3 bg-white rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
