import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Plane, Navigation, History, Globe, ShieldCheck } from 'lucide-react';

export default function AviationThemes() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 opacity-40">
          {/* Image removed */}
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-8">
              {/* Image removed */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-400 text-blue-900 px-6 py-2 rounded-full font-black shadow-lg flex items-center gap-2 animate-pulse">
                <ShieldCheck className="w-5 h-5" />
                GOLDEN WING BADGE
              </div>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
              Flying Beyond <span className="text-amber-400">Borders</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-3xl mx-auto leading-relaxed">
              Join Axel on a journey through the skies, where courage meets exploration and every flight tells a story of connection.
            </p>
          </motion.div>
        </div>
        
        {/* Subtle Golden Shimmer Effect */}
        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%) rotate(45deg); }
            100% { transform: translateX(200%) rotate(45deg); }
          }
          .shimmer-badge::after {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: shimmer 3s infinite;
          }
        `}</style>
      </section>

      {/* The Golden Wing Badge Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-amber-100 rounded-[40px] overflow-hidden shadow-2xl relative shimmer-badge">
              <img 
                src="https://picsum.photos/seed/badge-detail/800/800" 
                alt="Golden Wing Badge" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
              <Plane className="w-16 h-16 text-amber-400" />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-blue-900 leading-tight">
              The Symbol of <br />
              <span className="text-amber-500 underline decoration-blue-900 underline-offset-8">Courage & Curiosity</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The Golden Wing Badge isn't just a piece of metal; it's a promise to explore the world with an open heart and a sharp mind. 
              Axel wears it proudly as he navigates through different cultures, reminding us that while borders may exist on maps, 
              the sky connects us all.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <span className="block text-3xl font-bold text-blue-900 mb-1">50+</span>
                <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Cities Visited</span>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <span className="block text-3xl font-bold text-blue-900 mb-1">10k+</span>
                <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Flight Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Highlights */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Aviation Learning</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">Master the basics of flight and global exploration with Axel's expert guides.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Navigation, title: 'Navigation & Geography', desc: 'Learn how pilots use maps, stars, and technology to find their way across continents.' },
              { icon: History, title: 'History of Flight', desc: 'From the Wright brothers to modern jets, discover how humans conquered the skies.' },
              { icon: Globe, title: 'Cultural Connections', desc: 'Explore how aviation brings people together and makes our world feel like one big neighborhood.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="bg-blue-800/50 p-10 rounded-[32px] border border-blue-700 hover:bg-blue-800 transition-colors group"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                  <item.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Axel Gallery */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Axel in Action</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-square rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
              <img 
                src={`https://picsum.photos/seed/axel-gallery-${i}/600/600`} 
                alt={`Axel Gallery ${i}`} 
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-amber-400 text-blue-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-black mb-8">Ready for Takeoff?</h2>
          <p className="text-xl font-medium mb-12 opacity-80">
            The world is waiting for you. Start your adventure today with our collection of global explorer books.
          </p>
          <Link 
            to="/books"
            className="inline-flex items-center gap-3 bg-blue-900 text-white font-black px-12 py-6 rounded-full hover:bg-blue-800 transition-all hover:scale-105 shadow-xl"
          >
            <Plane className="w-6 h-6" />
            EXPLORE THE BOOKS
          </Link>
        </div>
      </section>
    </div>
  );
}
