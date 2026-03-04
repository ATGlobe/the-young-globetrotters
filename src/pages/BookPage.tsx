import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BOOKS } from '../data/books';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { usePassport } from '../hooks/usePassport';
import { unlockVolume } from '../data/passportStore';
import { 
  MapPin, 
  Bird, 
  Info, 
  Utensils, 
  Plane, 
  GraduationCap, 
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  Lock
} from 'lucide-react';

const BookPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const book = BOOKS.find(b => b.slug === city);
  const { isUnlocked } = usePassport();

  if (!book) {
    return <Navigate to="/books" replace />;
  }

  const unlocked = isUnlocked(parseInt(book.id));

  const handleUnlock = () => {
    unlockVolume(parseInt(book.id));
  };

  return (
    <div className="bg-white min-h-screen">
      <Hero 
        title={book.title}
        subtitle={`${book.city}, ${book.country}`}
        bgColor="bg-blue-900"
        image={book.coverImage}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          {!unlocked ? (
            <button 
              onClick={handleUnlock}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-xl hover:bg-slate-50 transition-all shadow-lg"
            >
              Unlock Adventure <Lock size={18} />
            </button>
          ) : (
            <div className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-emerald-600 bg-white rounded-xl shadow-lg">
              Adventure Unlocked <CheckCircle2 size={18} />
            </div>
          )}
          <a 
            href={book.externalLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all"
          >
            Buy Official Book <ExternalLink size={18} />
          </a>
        </div>
      </Hero>

      {/* Introduction */}
      <section className="py-20 border-b border-slate-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Adventure Overview</h2>
            <p className="text-xl leading-relaxed text-slate-600">{book.description}</p>
          </div>
        </div>
      </section>

      {/* Landmarks & Wildlife */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Landmarks */}
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <MapPin size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Landmarks to Explore</h3>
              </div>
              <ul className="space-y-4">
                {book.landmarks.map((landmark, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-slate-700">
                    <CheckCircle2 className="text-blue-500" size={20} />
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wildlife */}
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <Bird size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Local Wildlife</h3>
              </div>
              <ul className="space-y-4">
                {book.wildlife.map((animal, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-slate-700">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                    {animal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Facts */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                  <Info size={28} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Cultural Facts</h3>
              </div>
              <div className="space-y-6">
                {book.culturalFacts.map((fact, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-lg text-slate-700 leading-relaxed">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <img 
                src="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Il_gufo_maestro_dell-removebg-preview.png" 
                alt="Professor Owl" 
                className="w-full h-auto max-w-sm mx-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Highlight */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1">
              <div className="relative">
                <img 
                  src={book.recipe.image} 
                  alt={book.recipe.name} 
                  className="w-full aspect-video object-cover rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-full flex items-center justify-center p-4 shadow-xl">
                  <img 
                    src="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Progetto_senza_titolo__1_-removebg-preview.png" 
                    alt="Chef" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-red-600/20 text-red-500 rounded-2xl">
                  <Utensils size={28} />
                </div>
                <h3 className="text-3xl font-bold">Chef's Special Recipe</h3>
              </div>
              <h4 className="text-4xl font-bold mb-6 text-red-500">{book.recipe.name}</h4>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">{book.recipe.description}</p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="italic text-slate-300">"In every city we visit, I find the best ingredients to teach you how to prepare a typical local dish!" — Chef</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foxy's Transport */}
      <section className="py-24 bg-orange-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
                  <Plane size={28} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Foxy's Transport</h3>
              </div>
              <div className="p-8 bg-white rounded-3xl border-2 border-orange-200 shadow-sm">
                <p className="text-2xl font-medium text-slate-800 leading-relaxed italic">
                  "{book.foxyTransport}"
                </p>
              </div>
              <p className="mt-8 text-lg text-slate-600">
                Foxy is always trying to steal Axel's golden aviator badge, but his complicated plans and absurd vehicles never quite work out!
              </p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <img 
                src="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Foxy_2-removebg-preview.png" 
                alt="Foxy" 
                className="w-full h-auto max-w-sm mx-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Focus */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto p-12 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10" />
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-blue-600 rounded-2xl mb-8">
                <GraduationCap size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Learning Focus Summary</h3>
              <p className="text-lg text-slate-400 mb-12 max-w-2xl">
                This adventure is designed to help children develop key skills and knowledge in the following areas:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {book.learningFocus.map((focus, i) => (
                  <span key={i} className="px-6 py-3 bg-white/10 rounded-full font-bold text-blue-400 border border-white/10">
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold">Start the {book.city} Adventure Today</h2>
          <p className="max-w-2xl mx-auto mb-12 text-xl opacity-90">
            Get the full book and join Axel & Tino on their journey through {book.city}.
          </p>
          <a 
            href={book.externalLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-12 py-5 text-xl font-bold text-blue-600 bg-white rounded-2xl hover:bg-slate-50 transition-all shadow-2xl hover:-translate-y-1"
          >
            Buy on Gumroad <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default BookPage;
