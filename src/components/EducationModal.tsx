import React from "react";
import { X, Lightbulb, GraduationCap, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function EducationModal({ title, content, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm z-50 p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-2xl w-full shadow-2xl relative overflow-hidden border-8 border-orange-100"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 blur-2xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-full -ml-16 -mb-16 blur-2xl opacity-50" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-slate-100 text-slate-500 hover:bg-orange-100 hover:text-orange-600 rounded-full transition-all z-10"
          >
            <X size={24} />
          </button>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-orange-600 mb-8 leading-tight">
              {title}
            </h2>

            <div className="text-slate-700 whitespace-pre-line leading-relaxed text-lg font-medium mb-10">
              {content}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
              <div className="flex-1 flex items-center gap-4 p-4 bg-amber-50 rounded-2xl text-amber-800">
                <Lightbulb size={24} className="flex-shrink-0" />
                <p className="text-sm font-bold">Did you know? Check the facts above!</p>
              </div>
              <div className="flex-1 flex items-center gap-4 p-4 bg-blue-50 rounded-2xl text-blue-800">
                <GraduationCap size={24} className="flex-shrink-0" />
                <p className="text-sm font-bold">Teacher Tip: Discuss these facts in class!</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
