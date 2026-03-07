import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { CITIES } from '../data/cities';
import EducationModal from '../components/EducationModal';
import { activityEducation } from '../data/activitiesEducation';
import { travelEducation } from '../data/travelEducation';
import { 
  Globe, 
  Utensils, 
  Plane, 
  Music, 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  RotateCcw,
  Bike,
  Train,
  Ship,
  Car,
  Heart,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Wind,
  Award
} from 'lucide-react';

interface Question {
  id: number;
  category: string;
  text: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    id: 1,
    category: 'Geography',
    text: 'Which city is known as the "Eternal City"?',
    options: ['Paris', 'Rome', 'Tokyo', 'Cairo'],
    correct: 1
  },
  {
    id: 2,
    category: 'Food',
    text: 'In which country did Sushi originate?',
    options: ['China', 'Japan', 'Italy', 'Mexico'],
    correct: 1
  },
  {
    id: 3,
    category: 'Aviation',
    text: 'Who were the brothers that made the first powered flight?',
    options: ['Warner Brothers', 'Wright Brothers', 'Smith Brothers', 'Jones Brothers'],
    correct: 1
  },
  {
    id: 4,
    category: 'Culture',
    text: 'What is the traditional dress of Japan called?',
    options: ['Sari', 'Kimono', 'Toga', 'Kilt'],
    correct: 1
  }
];

export default function Activities() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [educationModal, setEducationModal] = useState<{ title: string; content: string } | null>(null);

  const categoryEducation = {
    geography: {
      title: "Geography Explorer",
      content: `Geography helps us understand our planet! 🌍

In this challenge, young explorers discover where cities are located, how landscapes shape cultures, and how people live in different parts of the world.

Did you know?
Mountains, rivers, and oceans often influence where cities grow and how people travel.

Geography helps us answer questions like:
• Where is this city?
• What country is it in?
• What natural features surround it?

Fun Geography Facts:
🌍 Earth has 7 continents
🌊 Oceans cover about 70% of our planet
🏔 Mountains can affect weather and travel

Teacher Tip:
Ask students to locate the city on a map and identify one natural feature nearby.`
    },
    food: {
      title: "Food Around the World",
      content: `Food tells the story of a place! 🍲

Every city has special dishes that come from its history, climate, and traditions.

In this challenge, young travelers discover:
• Traditional recipes
• Local ingredients
• Food customs from different cultures

For example:
🍕 Italy is famous for pizza and pasta
🥐 France is known for croissants
🍫 Switzerland is famous for chocolate

Food Facts:
🌾 Many traditional foods come from local farms
🍜 Recipes often travel between countries
👨🍳 Cooking traditions are passed down through families

Teacher Tip:
Ask students to share their favorite family dish and research its origin.`
    },
    aviation: {
      title: "Aviation & Flight Adventures",
      content: `Humans have always dreamed of flying! ✈️

Aviation is the science and history of airplanes, pilots, and air travel.

In this challenge, explorers learn about:
• Early airplanes and famous pilots
• Military aviation and air defense
• How airports and airplanes work

Airplanes changed the world by making travel faster and connecting distant countries.

Did you know?
The Wright brothers built the first successful airplane in 1903!

Flight Facts:
✈️ Modern airplanes can fly over 900 km per hour
🛫 Airports help planes take off and land safely
🧭 Pilots use navigation systems to travel across the world

Teacher Tip:
Discuss how aviation has changed the way we connect with other cultures.`
    },
    culture: {
      title: "Culture & Traditions",
      content: `Culture is what makes every place unique! 🎭

It includes language, music, art, celebrations, and traditions.

In this challenge, explorers discover:
• Famous festivals
• Local music and art
• Historic traditions from different cities

Learning about culture helps us understand people from around the world and appreciate our differences.

Culture Facts:
🎭 Festivals celebrate history and traditions
🎵 Music styles are different around the world
🏛 Art and architecture tell stories about the past

Teacher Tip:
Encourage students to research a festival from a city they've visited in the books.`
    }
  };

  const startQuiz = (category: string) => {
    setActiveCategory(category);
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
  };

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === questions[currentQuestionIndex].correct;
    if (isCorrect) setScore(s => s + 1);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(i => i + 1);
        setSelectedOption(null);
      } else {
        setCurrentStep('results');
      }
    }, 1000);
  };

  const scrollToCategories = () => {
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-orange-50/30">
      <style>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .hover-bounce:hover {
          animation: subtle-bounce 0.6s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-orange-500 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              The Great Winged <br />
              <span className="text-orange-200">Badge Challenge</span>
            </h1>
            <p className="text-xl text-orange-100 font-medium mb-10 max-w-lg leading-relaxed">
              Are you ready to prove your explorer skills? Join Foxy in a series of fun challenges and earn your virtual wings!
            </p>
            <button 
              onClick={scrollToCategories}
              className="bg-white text-orange-600 font-black px-10 py-5 rounded-full hover:bg-orange-50 transition-all shadow-xl hover-bounce"
            >
              START CHALLENGE
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://i.ibb.co/Fq6SVWrZ/Foxy-deltaplano.png" 
              alt="Activities Hero" 
              className="w-full h-auto rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-4 -right-4 bg-amber-400 p-6 rounded-full shadow-2xl animate-bounce">
              <div className="relative flex items-center justify-center">
                <Wind className="absolute -left-6 text-orange-600 opacity-50" size={24} />
                <Award className="w-10 h-10 text-orange-600" />
                <Wind className="absolute -right-6 scale-x-[-1] text-orange-600 opacity-50" size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz-section" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-orange-100">
          <div className="p-12">
            <AnimatePresence mode="wait">
              {currentStep === 'intro' && (
                <motion.div 
                  key="intro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-16"
                >
                  <div className="text-center">
                    <h2 className="text-4xl font-black text-slate-800 mb-4">Choose Your Challenge</h2>
                    <p className="text-lg text-slate-500 font-medium">Select a category or a specific city to start your adventure!</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: 'Geography', icon: Globe, color: 'bg-blue-500', key: 'geography' },
                      { name: 'Food', icon: Utensils, color: 'bg-emerald-500', key: 'food' },
                      { name: 'Aviation', icon: Plane, color: 'bg-sky-500', key: 'aviation' },
                      { name: 'Culture', icon: Music, color: 'bg-purple-500', key: 'culture' }
                    ].map((cat) => (
                      <div key={cat.name} className="group relative">
                        <Link 
                          to={`/activities/${cat.key}`}
                          className="flex flex-col items-center p-8 rounded-3xl border-2 border-slate-50 hover:border-orange-200 hover:bg-orange-50 transition-all"
                        >
                          <div className={`w-16 h-16 ${cat.color} text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <cat.icon className="w-8 h-8" />
                          </div>
                          <span className="font-bold text-slate-700">{cat.name}</span>
                        </Link>
                        <button 
                          onClick={() => setEducationModal(categoryEducation[cat.key as keyof typeof categoryEducation])}
                          className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-orange-100 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-sm z-10"
                        >
                          <Lightbulb size={16} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="pt-12 border-t border-slate-100">
                    <h3 className="text-2xl font-black text-slate-800 mb-8 text-center">City Challenges</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                      {CITIES.map((city) => (
                        <Link 
                          key={city.id}
                          to={`/activities/${city.id}`}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-orange-500 hover:text-white transition-all text-center font-bold"
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 'quiz' && (
                <motion.div 
                  key="quiz"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="flex justify-between items-center mb-12">
                    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full font-bold text-sm uppercase tracking-widest">
                      {activeCategory}
                    </span>
                    <span className="text-slate-400 font-bold">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-10">
                    {questions[currentQuestionIndex].text}
                  </h3>
                  <div className="grid gap-4">
                    {questions[currentQuestionIndex].options.map((option, i) => (
                      <button 
                        key={i}
                        onClick={() => selectedOption === null && handleAnswer(i)}
                        className={`w-full p-6 text-left rounded-2xl border-2 transition-all flex items-center justify-between font-bold ${
                          selectedOption === null 
                          ? 'border-slate-100 hover:border-orange-500 hover:bg-orange-50 text-slate-700' 
                          : i === questions[currentQuestionIndex].correct 
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                            : selectedOption === i 
                              ? 'border-red-500 bg-red-50 text-red-700' 
                              : 'border-slate-100 text-slate-300'
                        }`}
                      >
                        {option}
                        {selectedOption !== null && i === questions[currentQuestionIndex].correct && <CheckCircle2 className="w-6 h-6" />}
                        {selectedOption === i && i !== questions[currentQuestionIndex].correct && <XCircle className="w-6 h-6" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 'results' && (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-8"
                >
                  <div className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-16 h-16 text-amber-500" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-800">Challenge Complete!</h2>
                  <p className="text-2xl text-slate-600">
                    You scored <span className="text-orange-600 font-black">{score}</span> out of <span className="font-bold">{questions.length}</span>
                  </p>
                  <div className="flex justify-center gap-4">
                    <button 
                      onClick={() => setCurrentStep('intro')}
                      className="flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-all"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Try Again
                    </button>
                    <Link 
                      to="/books"
                      className="bg-orange-500 text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-all"
                    >
                      Explore More
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Movement Activities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Movement Activities</h2>
            <p className="text-slate-500">Fun ways to stay active while exploring the world from home!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            { [
              { title: 'The Pilot Stretch', desc: 'Reach for the clouds! Stretch your arms high and "fly" around the room.', image: 'https://i.ibb.co/Fk1Qqwwj/Generated-Image-March-04-2026-4-50-PM-removebg-preview-1.png', key: 'pilotStretch' },
              { title: 'The Global Hop', desc: 'Imagine the floor is a map. Hop from "continent" to "continent"!', image: 'https://i.ibb.co/v42XC3xN/Generated-Image-March-04-2026-4-54-PM.png', key: 'globalHop' },
              { title: 'Chef\'s Dance', desc: 'Put on some global music and dance while you "stir" your imaginary pot.', image: 'https://i.ibb.co/pBPz1Tm5/Generated-Image-March-04-2026-4-55-PM-1.png', key: 'chefsDance' }
            ].map((act, i) => (
              <div 
                key={i} 
                className="p-8 rounded-[32px] bg-orange-50 border border-orange-100 hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => setEducationModal(activityEducation[act.key as keyof typeof activityEducation])}
              >
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:rotate-12 transition-transform overflow-hidden mx-auto">
                  <img 
                    src={act.image} 
                    alt={act.title} 
                    className="w-full h-full object-contain p-2"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{act.title}</h3>
                <p className="text-slate-600 leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Methods Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">How We Travel</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            { [
            { image: 'https://i.ibb.co/nNkNGNCC/Foxy-drive-plane.png', name: 'Airplane', desc: 'Fastest way to cross oceans.', key: 'airplane' },
            { image: 'https://i.ibb.co/20LYs180/Foxy-drive-Train.png', name: 'Train', desc: 'Scenic routes through countries.', key: 'train' },
            { image: 'https://i.ibb.co/dJgv6rwq/nave-blu-removebg-preview.png', name: 'Ship', desc: 'Exploring the vast blue seas.', key: 'ship' },
            { image: 'https://i.ibb.co/000hkZR/auto-blu-removebg-preview.png', name: 'Car', desc: 'Road trips and local discoveries.', key: 'car' },
            { image: 'https://i.ibb.co/LDh11Dw6/Foxy-in-bici.png', name: 'Bicycle', desc: 'Eco-friendly local exploration.', key: 'bicycle' }
          ].map((method, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setEducationModal(travelEducation[method.key as keyof typeof travelEducation])}
              className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 text-center cursor-pointer hover:shadow-md transition-all flex flex-col items-center"
            >
              <div className="w-40 h-40 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={method.image} 
                  alt={method.name} 
                  className="w-full h-full object-contain p-2"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">{method.name}</h4>
              <p className="text-xs text-slate-500">{method.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Foxy's Growth Journey */}
      <section className="py-24 bg-white border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold uppercase tracking-widest mb-8">
            Foxy's Growth Journey
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">The Real Badge of an Explorer</h2>
          <div className="space-y-8">
            <p className="text-xl text-slate-600 leading-relaxed italic">
              "Foxy looked at Axel's Golden Winged Aviation Badge and thought, 'I want to be a real explorer too!' 
              But Axel smiled and told him a secret: being a real explorer isn't just about the badge."
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Be Brave', icon: Heart, desc: 'Trying new things even when they feel a little scary.' },
                { title: 'Be Curious', icon: Lightbulb, desc: 'Asking questions and wanting to learn about the world.' },
                { title: 'Be Kind', icon: Sparkles, desc: 'Helping friends and respecting every culture we meet.' }
              ].map((val, i) => (
                <div key={i} className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <val.icon className="text-orange-500" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-sm text-slate-500">{val.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Foxy learned that every time he was brave, curious, or kind, he was already earning his wings. 
              Because the most important part of the journey is not where you go, but who you become along the way!
            </p>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Every Explorer Starts Small</h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Whether you're solving a quiz or dancing like a chef, every step you take brings you closer to understanding our beautiful world. Keep exploring, keep questioning, and keep growing!
          </p>
        </div>
      </section>
      <EducationModal 
        title={educationModal?.title || ''}
        content={educationModal?.content || ''}
        isOpen={!!educationModal}
        onClose={() => setEducationModal(null)}
      />
    </div>
  );
}

