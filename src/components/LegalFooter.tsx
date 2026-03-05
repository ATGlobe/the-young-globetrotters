import React from 'react';
import { Link } from 'react-router-dom';

export const LegalFooter = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Privacy Policy</Link>
          <Link to="/cookie-policy" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Cookie Policy</Link>
          <Link to="/terms-conditions" className="text-slate-400 hover:text-white transition-colors text-sm font-bold">Terms & Conditions</Link>
        </div>
        <p className="text-slate-500 text-xs font-medium">
          © {new Date().getFullYear()} The Young Globetrotters. All rights reserved. 
          Secure checkout powered by <a href="https://gumroad.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">Gumroad</a>.
        </p>
      </div>
    </footer>
  );
};
