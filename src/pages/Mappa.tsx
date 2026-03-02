import { motion } from 'motion/react';
import WorldMap from '../components/WorldMap';
import Passport from '../components/Passport';
import { Globe, MapPin, Award, Compass } from 'lucide-react';
import { VOLUMES, LOGO_URL } from '../constants';
import { Link } from 'react-router-dom';

export default function Mappa() {
  return (
    <div className="bg-[#FFF9F0] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-black uppercase tracking-widest mb-6 shadow-xl shadow-blue-200"
          >
            <Compass className="w-4 h-4 mr-2 animate-spin-slow" />
            World Explorer Tracker
          </motion.div>
          <div className="flex flex-col items-center justify-center gap-6 mb-6">
            <div className="logo-container">
              <img 
                src={LOGO_URL} 
                alt="Axel & Tino Logo" 
                className="h-[120px] w-auto drop-shadow-2xl" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/logo.png';
                }}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Your Global Adventure</h1>
          </div>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Track your progress, earn badges, and complete your Explorer Passport as you travel the world with Axel and Tino!
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mb-20">
          <WorldMap />
        </div>

        {/* Passport Section */}
        <div className="mb-20">
          <Passport />
        </div>

        {/* Destinations Grid */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-slate-900 flex items-center">
              <MapPin className="w-8 h-8 mr-4 text-blue-600" />
              All Destinations
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <div className="w-3 h-3 bg-slate-200 rounded-full" />
                Locked
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                Explorer
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                Master
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {VOLUMES.map((volume) => (
              <Link
                key={volume.id}
                to={`/volume/${volume.id}`}
                className="group bg-white p-6 rounded-[32px] border border-slate-100 hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Globe className="w-6 h-6 text-slate-400 group-hover:text-white" />
                </div>
                <p className="text-sm font-black text-slate-900 group-hover:text-white transition-colors leading-tight">{volume.city}</p>
                <p className="text-[10px] text-slate-400 group-hover:text-blue-100 uppercase font-black tracking-widest mt-1 transition-colors">{volume.country}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
