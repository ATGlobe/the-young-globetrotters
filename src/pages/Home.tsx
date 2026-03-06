import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CHARACTERS } from '../constants';
import { BOOKS } from '../data/books';
import Hero from '../components/Hero';
import BookCard from '../components/BookCard';
import { Modal } from '../components/Modal';
import { Globe, BookOpen, Utensils, Plane, ArrowRight, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  const featuredBooks = BOOKS.slice(0, 3);
  const [selectedCharacter, setSelectedCharacter] = useState<typeof CHARACTERS[0] | null>(null);

  return (
    <div className="overflow-hidden">

      {/* Hero Section */}
      <Hero 
        title="Inspiring the Next Generation of Global Citizens"
        subtitle="Axel & Tino – The Young Globetrotters is an international book series that combines travel, culture, and structured educational storytelling for children aged 7–12."
        bgColor="bg-blue-600"
        image="/images/foxy-blu-plane.jpg"
        showButtons={true}
      />

      {/* Characters Image under Hero */}
      <div className="bg-blue-600 pb-16 flex justify-center">
        <img
          src="https://i.ibb.co/b5V3sLsj/personaggi-removebg-preview.png"
          alt="Axel & Tino characters"
          className="w-[360px] md:w-[480px] lg:w-[560px] drop-shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* What Makes It Different */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-slate-900">What Makes It Different?</h2>
            <p className="text-lg text-slate-600">A structured educational ecosystem designed to foster curiosity and global awareness.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Globe className="text-blue-600" />, title: 'Global Awareness', text: 'Introducing children to diverse cultures, history, and geography through storytelling.' },
              { icon: <BookOpen className="text-orange-600" />, title: 'Structured Learning', text: 'A repeatable format that builds confidence and reinforces educational themes.' },
              { icon: <Utensils className="text-red-600" />, title: 'Culinary Traditions', text: 'Exploring the world through its flavors with authentic local recipes in every book.' },
              { icon: <Plane className="text-sky-500" />, title: 'Aviation Themes', text: 'Subtle introduction to aviation and the excitement of travel and exploration.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-slate-50 flex items-center justify-center">
                  {feature.icon}
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Globetrotters */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">

          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-slate-900">Meet the Globetrotters</h2>
            <p className="text-lg text-slate-600">
              The characters that bring every adventure to life. Click on them to learn more!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {CHARACTERS.map((char) => (
              <motion.div
                key={char.id}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedCharacter(char)}
                className="group relative flex flex-col items-center text-center cursor-pointer"
              >

                <div className={`w-full aspect-square rounded-3xl mb-6 overflow-hidden ${char.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                  <img 
                    src={char.image} 
                    alt={char.name} 
                    className="w-full h-full object-contain p-4 drop-shadow-md group-hover:scale-110 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-900">{char.name}</h3>

                <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3">
                  {char.role}
                </p>

                <p className="text-slate-600 text-sm line-clamp-2">
                  {char.description}
                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Modal */}
      <Modal isOpen={!!selectedCharacter} onClose={() => setSelectedCharacter(null)}>
        {selectedCharacter && (

          <div className="flex flex-col md:flex-row">

            <div className={`w-full md:w-1/2 aspect-square flex items-center justify-center p-12 ${selectedCharacter.color} bg-opacity-10`}>
              <img 
                src={selectedCharacter.image} 
                alt={selectedCharacter.name} 
                className="w-full h-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 block">
                {selectedCharacter.role}
              </span>

              <h3 className="text-4xl font-black text-slate-900 mb-6">
                {selectedCharacter.name}
              </h3>

              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                {selectedCharacter.description}
              </p>

              <button 
                onClick={() => setSelectedCharacter(null)}
                className="mt-auto w-full py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-blue-600 transition-all shadow-lg"
              >
                Close
              </button>

            </div>

          </div>

        )}
      </Modal>

      {/* Featured Adventures */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">

          <div className="flex items-end justify-between mb-16">

            <div className="max-w-2xl">
              <h2 className="mb-6 text-4xl font-bold text-slate-900">
                Featured Adventures
              </h2>

              <p className="text-lg text-slate-600">
                Start your journey with our latest city explorations.
              </p>
            </div>

            <Link to="/books" className="hidden lg:flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
              View All Books <ArrowRight size={20} />
            </Link>

          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
