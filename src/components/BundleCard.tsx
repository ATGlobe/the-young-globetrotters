import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BundleCardProps {
  title: string;
  description: string;
  covers: string[];
  price?: string;
  link: string;
}

export default function BundleCard({ title, description, covers, price, link }: BundleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[48px] p-8 md:p-12 border border-slate-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-8">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-3 h-3 mr-2" />
          Starter Pack
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-64 md:h-80 flex items-center justify-center">
          {covers.map((cover, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, rotate: 0 }}
              whileHover={{ 
                x: (i - 1) * 60, 
                rotate: (i - 1) * 10,
                zIndex: 10 + i
              }}
              className="absolute w-40 md:w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 transition-all duration-500"
              style={{ 
                zIndex: 5 + i,
                transform: `translateX(${(i - 1) * 30}px) rotate(${(i - 1) * 5}deg)`
              }}
            >
              <img 
                src={cover} 
                alt={`Volume ${i + 1} Cover`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col">
          <h3 className="text-3xl font-black text-slate-900 mb-4">
            {title}
          </h3>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            {description}
          </p>

          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Volumes 1, 2, and 3 Included
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Instant Digital Download
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Bonus Activity Pack
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              to={link}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] transition-all"
            >
              Get the Starter Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            {price && (
              <div className="text-2xl font-black text-slate-900">
                {price}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
