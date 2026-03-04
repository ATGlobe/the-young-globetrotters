import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Lightbulb, ChevronDown, Save, Check } from 'lucide-react';

interface CreativeProps {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  category: string;
  onComplete: () => void;
}

export const CreativeChallenge: React.FC<CreativeProps> = ({
  title,
  description,
  color,
  accentColor,
  category,
  onComplete,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [idea, setIdea] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedIdea = localStorage.getItem(`foxy-idea-${category}`);
    if (savedIdea) {
      setIdea(savedIdea);
      setIsSaved(true);
      onComplete();
    }
  }, [category, onComplete]);

  const handleSave = () => {
    if (!idea.trim()) return;
    localStorage.setItem(`foxy-idea-${category}`, idea);
    setIsSaved(true);
    onComplete();
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 flex flex-col h-full"
    >
      <div className={`w-14 h-14 ${color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
        <Sparkles size={28} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Creative Challenge</h3>
      <h4 className={`text-xl font-bold ${accentColor} mb-4`}>{title}</h4>
      <p className="text-slate-600 leading-relaxed mb-8">
        {description}
      </p>

      <div className="mt-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-4 px-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between font-bold text-slate-700 hover:bg-slate-100 transition-all"
        >
          <span className="flex items-center gap-2">
            <Lightbulb size={18} className="text-amber-500" />
            Write Your Idea
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="What's your creative idea, Explorer?"
                  className="w-full h-32 p-4 rounded-2xl border-2 border-slate-100 focus:border-amber-400 focus:ring-0 transition-all resize-none font-medium text-slate-700"
                />
                <button
                  onClick={handleSave}
                  disabled={!idea.trim()}
                  className={`w-full py-4 rounded-2xl ${
                    isSaved ? 'bg-emerald-500' : 'bg-amber-500'
                  } text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md disabled:opacity-50`}
                >
                  {isSaved ? (
                    <>
                      <Check size={18} />
                      Idea Saved!
                    </>
                  ) : (
                    <>
                      <Save size={18} />
                      Save My Idea
                    </>
                  )}
                </button>
                {isSaved && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-xs font-bold text-emerald-600"
                  >
                    Your idea is safe in your Explorer Journal!
                  </motion.p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
