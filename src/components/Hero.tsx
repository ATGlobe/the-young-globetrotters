import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, BookOpen } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
  image?: string;
  showButtons?: boolean;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  bgColor = 'bg-blue-600', 
  image, 
  showButtons = false,
  children 
}) => {
  return (
    <section className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24 ${bgColor} text-white`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-50" />
        <div className="absolute inset-0 opacity-10" />
        
        {/* Animated blobs for modern look */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-black/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                {subtitle}
              </p>
            )}

            {showButtons && (
              <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                <Link 
                  to="/map" 
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <Globe className="group-hover:rotate-12 transition-transform" />
                  Explore the Map
                </Link>
                <Link 
                  to="/books" 
                  className="group flex items-center gap-3 px-8 py-4 bg-blue-700 text-white border-2 border-white/20 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <BookOpen className="group-hover:scale-110 transition-transform" />
                  Discover Books
                </Link>
              </div>
            )}

            {children && (
              <div className="mt-8">
                {children}
              </div>
            )}
          </motion.div>

          {/* image prop removed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
