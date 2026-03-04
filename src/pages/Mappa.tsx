import { motion } from 'motion/react';
import WorldMap from '../components/WorldMap';
import Passport from '../components/Passport';
import { Globe, Compass } from 'lucide-react';
import { BOOKS } from '../data/books';
import { Link } from 'react-router-dom';

export default function Mappa() {
  return (
    <div className="bg-[#FFF9F0] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-black uppercase tracking-widest mb-6"
          >
            <Compass className="w-4 h-4 mr-2" />
            World Explorer Tracker
          </motion.div>

          <h1 className="text-5xl font-black text-slate-900">
            Your Global Adventure
          </h1>

          <p className="text-lg text-slate-500 mt-4">
            Explore every city with Axel & Tino and track your progress.
          </p>
        </div>

        {/* WORLD MAP SECTION */}
        <section className="py-16 bg-white rounded-[40px] mb-20 shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Interactive World Map
              </h2>
              <p className="text-slate-500">
                Click on the cities to explore Axel & Tino’s journey.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 shadow-inner">
              <WorldMap />
            </div>

          </div>
        </section>

        <div className="mb-20">
          <Passport />
        </div>

        <div>
          <h2 className="text-3xl font-black mb-8">All Destinations</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {BOOKS.map((volume) => (
              <Link
                key={volume.id}
                to={`/books/${volume.slug}`}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <Globe className="w-6 h-6 mb-3 text-blue-600" />
                <p className="font-bold">{volume.city}</p>
                <p className="text-xs text-slate-400 uppercase">
                  {volume.country}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
