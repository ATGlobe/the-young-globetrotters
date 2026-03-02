import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane, User, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuthStore } from '../store/authStore';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import AuthModal from './AuthModal';
import { LOGO_URL } from '../constants';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const { user, isAuthenticated } = useAuthStore();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={LOGO_URL} 
                alt="Axel & Tino Logo" 
                className="w-12 h-12 object-contain" 
              />
              <span className="text-2xl font-bold text-slate-900 font-sans tracking-tight">
                Axel & Tino
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Ebooks', href: '/ebooks' },
              { name: 'Shop', href: '/shop' },
              { name: 'Characters', href: '/characters' },
              { name: 'Map', href: '/map' },
              { name: 'Activities', href: '/activities' },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === link.href ? "text-blue-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 ml-4">
              {isAuthenticated ? (
                <Link to="/account" className="flex items-center gap-2 p-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <User className="w-6 h-6" />
                  <span className="text-sm font-bold hidden lg:inline">{user?.name}</span>
                </Link>
              ) : (
                <button 
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-100 transition-all"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-blue-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Ebooks', href: '/ebooks' },
                { name: 'Shop', href: '/shop' },
                { name: 'Characters', href: '/characters' },
                { name: 'Map', href: '/map' },
                { name: 'Activities', href: '/activities' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/account"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
              >
                My Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </nav>
  );
}
