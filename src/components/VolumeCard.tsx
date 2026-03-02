import { Link } from 'react-router-dom';
import { Volume } from '../types';
import { MapPin, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

interface VolumeCardProps {
  volume: Volume;
}

export default function VolumeCard({ volume }: VolumeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
    >
      <Link 
        to={volume.id === 1 ? "/landing/volume-1" : `/volume/${volume.id}`}
        className="block relative aspect-[3/4] overflow-hidden"
      >
        <img
          src={volume.cover || '/assets/covers/default.png'}
          alt={volume.title}
          className="ebook-cover w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/covers/default.png';
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-blue-600 uppercase tracking-wider shadow-sm">
            <MapPin className="w-3 h-3 mr-1" />
            {volume.city}
          </span>
        </div>
        {volume.isNew && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
              New
            </span>
          </div>
        )}
      </Link>

      <div className="p-6">
        <Link to={volume.id === 1 ? "/landing/volume-1" : `/volume/${volume.id}`} className="block group/title">
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover/title:text-blue-600 transition-colors">
            {volume.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 line-clamp-2 mb-6">
          {volume.description}
        </p>

        <div className="flex flex-col gap-3 pt-4 border-t border-slate-50">
          <a
            href={volume.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-center shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
          >
            Buy Now
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <Link
            to={volume.id === 1 ? "/landing/volume-1" : `/volume/${volume.id}`}
            className="w-full text-center text-[#FE8900] text-sm font-semibold hover:text-[#FE5500] transition-all duration-200 group/adventure flex items-center justify-center gap-1"
          >
            ✨ Scopri l’avventura 
            <span className="transition-transform duration-200 group-hover/adventure:translate-x-[3px]">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
