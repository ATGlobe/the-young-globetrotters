import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LOGO_URL, BRAND_NAME } from '../constants';
import { Menu, X, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { CookieBanner } from './CookieBanner';
import { LegalFooter } from './LegalFooter';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Books', path: '/books' },
    { name: 'Map', path: '/map' },
    { name: 'Activities', path: '/activities' },
    { name: 'Explorer Passport', path: '/passport' },
    { name: 'Shop', path: '/shop' },
    { name: 'For Teachers', path: '/teachers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO_URL} alt={BRAND_NAME} className="h-12 w-auto" referrerPolicy="no-referrer" />
              <span className="hidden text-xl font-bold tracking-tight lg:block">The Young Globetrotters</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="p-2 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 lg:hidden">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-medium text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-16 text-white bg-slate-900">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 mb-12 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img src={LOGO_URL} alt={BRAND_NAME} className="h-10 w-auto brightness-0 invert" referrerPolicy="no-referrer" />
              </Link>
              <p className="text-slate-400">
                Inspiring the next generation of global citizens through adventure, education, and culture.
              </p>
            </div>

            <div>
              <h4 className="mb-6 font-bold uppercase tracking-wider text-sm text-slate-500">Explore</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About the Brand</Link></li>
                <li><Link to="/books" className="hover:text-white transition-colors">Book Series</Link></li>
                <li><Link to="/activities" className="hover:text-white transition-colors">Kids Activities</Link></li>
                <li><Link to="/teachers" className="hover:text-white transition-colors">For Teachers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold uppercase tracking-wider text-sm text-slate-500">Shop & More</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link to="/shop" className="hover:text-white transition-colors">Official Store</Link></li>
                <li><Link to="/passport" className="hover:text-white transition-colors">Explorer Passport</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold uppercase tracking-wider text-sm text-slate-500">Follow the Adventure</h4>
              <div className="flex gap-4 mb-8">
                <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-pink-600 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-sky-500 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-red-600 transition-colors"><Youtube size={20} /></a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Axel & Tino – The Young Globetrotters. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
      <LegalFooter />
      <CookieBanner />
    </div>
  );
};

export default Layout;
