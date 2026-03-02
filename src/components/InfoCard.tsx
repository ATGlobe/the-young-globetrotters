import React from 'react';
import { motion } from 'motion/react';

interface InfoCardProps {
  title: string;
  image: string;
  backgroundColor: string;
  content: string;
  buttonText?: string;
  onButtonClick?: () => void;
  textColor?: string;
  isDark?: boolean;
}

export default function InfoCard({ 
  title, 
  image, 
  backgroundColor, 
  content, 
  buttonText, 
  onButtonClick,
  textColor = 'text-slate-900',
  isDark = false
}: InfoCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${backgroundColor} rounded-[40px] p-8 md:p-10 shadow-xl border border-white/10 relative overflow-hidden flex flex-col h-full`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-6 mb-6">
          <div className="shrink-0">
            <img 
              src={image} 
              alt={title}
              className="w-20 h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : textColor}`}>
            {title}
          </h3>
        </div>
        
        <div className="flex-grow">
          <p className={`text-lg leading-relaxed italic mb-8 ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
            "{content}"
          </p>
        </div>

        {buttonText && (
          <div className="mt-auto">
            <button
              onClick={onButtonClick}
              className={`px-8 py-3 rounded-2xl font-bold transition-all shadow-lg ${
                isDark 
                  ? 'bg-white text-slate-900 hover:bg-slate-100' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100'
              }`}
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
