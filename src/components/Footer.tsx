import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { LOGO_URL } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src={LOGO_URL} 
                alt="Axel & Tino Logo" 
                className="w-10 h-10 object-contain" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/logo.png';
                }}
              />
              <span className="text-xl font-bold text-white">Young Globetrotters</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Discover the world with Axel and Tino! A series of educational ebooks set in the most beautiful cities on the planet.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop" className="hover:text-blue-400 transition-colors">All Volumes</Link></li>
              <li><Link to="/merch" className="hover:text-blue-400 transition-colors">Merch Shop</Link></li>
              <li><Link to="/characters" className="hover:text-blue-400 transition-colors">Characters</Link></li>
              <li><Link to="/map" className="hover:text-blue-400 transition-colors">Interactive Map</Link></li>
              <li><Link to="/learning" className="hover:text-blue-400 transition-colors">Learning Activities</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Explorer's Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-pink-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-blue-400 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4" />
              <span>info@youngglobetrotters.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} The Young Globetrotters. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Modern design for little explorers.</p>
        </div>
      </div>
    </footer>
  );
}
