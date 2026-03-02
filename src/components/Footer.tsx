import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { LOGO_URL } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src={LOGO_URL} 
                alt="Axel & Tino Logo" 
                className="w-10 h-10 object-contain" 
              />
              <span className="text-xl font-bold text-slate-900 tracking-tight">Axel & Tino</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
              The Young Globetrotters is a global educational brand dedicated to travel-based storytelling, cultural discovery, and STEM-inspired aviation adventures for children.
            </p>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link to="/shop" className="hover:text-blue-600 transition-colors">All Volumes</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-blue-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold mb-6">Legal & Social</h3>
            <ul className="space-y-4 text-sm text-slate-500 mb-6">
              <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms</Link></li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Axel & Tino – The Young Globetrotters. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Educational Publishing</span>
            <span>Digital Adventures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
