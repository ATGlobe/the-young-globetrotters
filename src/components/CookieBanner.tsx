import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('young-globetrotters-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (type: 'all' | 'essential') => {
    localStorage.setItem('young-globetrotters-cookie-consent', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 z-[9999]"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="text-orange-600" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">Cookie Consent</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                We use cookies to improve your experience. By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/cookie-policy" className="text-orange-600 underline">Cookie Policy</Link>.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleConsent('all')}
              className="w-full py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg"
            >
              Accept All
            </button>
            <button
              onClick={() => handleConsent('essential')}
              className="w-full py-3 bg-slate-50 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-all"
            >
              Essential Only
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
