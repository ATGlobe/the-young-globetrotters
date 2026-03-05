import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { VOLUMES } from '../data/volumes';
import { BOOKS } from '../data/books';
import { citiesData } from '../data/citiesData';
import { motion } from 'motion/react';
import { 
  Globe, 
  Utensils, 
  Plane, 
  GraduationCap, 
  ExternalLink,
  ArrowLeft,
  Gamepad2,
  ShieldCheck,
  History,
  BookOpen,
  FileText,
  Download,
  Lightbulb
} from 'lucide-react';

const BookPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const book = BOOKS.find(b => b.slug === city);
  const vol = VOLUMES.find(v => v.slug === city);
  const cityInfo = city ? citiesData[city.toLowerCase()] : null;

  if (!book) {
    return <Navigate to="/map" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* 1️⃣ COVER SECTION */}
      <section className="relative bg-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/map" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold mb-12 transition-all">
            <ArrowLeft size={20} /> Back to Map
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
              >
                Axel & Tino in {book.city}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl lg:text-2xl font-medium opacity-90 max-w-2xl mb-8"
              >
                Explore history, food and adventure in the {book.city === 'Rome' ? 'Eternal City' : 'beautiful city of ' + book.city}.
              </motion.p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold">
                  <FileText size={16} /> PDF
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold">
                  <Download size={16} /> EPUB
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold">
                  <Globe size={16} /> Digital Download
                </div>
              </div>

              <p className="text-lg opacity-80 max-w-xl mb-10">
                {book.description}
              </p>

              {book.externalLink ? (
                <a 
                  href={book.externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl hover:-translate-y-1"
                >
                  Buy the Ebook <ExternalLink size={24} />
                </a>
              ) : (
                <div className="inline-block px-10 py-5 bg-white/5 border-2 border-white/10 rounded-2xl font-black text-xl text-white/30">
                  Coming Soon
                </div>
              )}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              className="flex-shrink-0 w-full max-w-[350px] aspect-[3/4] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white/20"
            >
              <img 
                src={book.coverImage} 
                alt={book.city} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ STORY DESCRIPTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">The Adventure Begins</h2>
            </div>
            <p className="text-2xl leading-relaxed text-slate-600 font-medium italic mb-8">
              Join Axel and Tino as they land in {book.city}!
            </p>
            <p className="text-lg leading-relaxed text-slate-500">
              Axel and Tino arrive in {book.city}, a city full of wonders. 
              Professor Owl explains the local landmarks and history, 
              while Chef prepares a delicious traditional dish. 
              But Foxy is already planning a new attempt to steal Axel's golden aviator badge!
              In this adventure, children will discover the magic of {book.city} through the eyes of our young globetrotters.
            </p>
          </div>
        </div>
      </section>

      {/* 3️⃣ IN THE KITCHEN WITH CHEF */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <Utensils size={24} />
                </div>
                <h2 className="text-3xl font-black text-slate-900">In the Kitchen with Chef</h2>
              </div>
              
              {cityInfo ? (
                <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{cityInfo.dish.name}</h3>
                  <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                    {cityInfo.dish.description}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Ingredients</h4>
                      <ul className="grid grid-cols-2 gap-3">
                        {cityInfo.dish.ingredients.map((ing, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700 font-bold">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 text-center">
                  <p className="text-slate-400 font-bold">Recipe coming soon!</p>
                </div>
              )}
            </div>
            
            <div className="flex-1 w-full max-w-md">
              <img 
                src="https://i.ibb.co/C35LtMmm/Chat-GPT-Image-5-mar-2026-16-22-15-removebg-preview.png" 
                alt="Chef" 
                className="w-full h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ PROFESSOR OWL CORNER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-3xl font-black text-slate-900">Professor Owl Corner</h2>
              </div>
              
              {cityInfo ? (
                <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                    <Lightbulb className="text-amber-400" /> Did you know?
                  </h3>
                  <p className="text-xl leading-relaxed text-slate-300 font-medium">
                    {cityInfo.monument.history}
                  </p>
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                      Featured Landmark: {cityInfo.monument.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl text-center">
                  <p className="text-slate-500 font-bold">Fun facts coming soon!</p>
                </div>
              )}
            </div>
            
            <div className="flex-1 w-full max-w-md">
              <img 
                src="https://i.ibb.co/q3CbWNLP/Generated-Image-March-05-2026-4-06-PM.png" 
                alt="Professor Owl" 
                className="w-full h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ UNLOCK YOUR PASSPORT BADGE SECTION */}
      <section className="py-24 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Unlock Your Passport Badge</h2>
            <p className="text-xl md:text-2xl font-medium opacity-90 mb-12 max-w-2xl mx-auto">
              Ready to earn your city stamp? Complete the quizzes and games for this city to unlock your badge in the Explorer Passport.
            </p>
            
            <Link 
              to={`/activities/${city?.toLowerCase()}`}
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-orange-600 rounded-2xl font-black text-2xl hover:bg-orange-50 transition-all shadow-2xl hover:-translate-y-1"
            >
              <Gamepad2 size={28} /> Start Activities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookPage;
;
