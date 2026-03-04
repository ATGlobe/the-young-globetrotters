import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
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
  Sparkles
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
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

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

  return (
    <div className="min-h-screen bg-orange-50/30">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-orange-500 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              The Great Golden <br />
              <span className="text-orange-200">Badge Challenge</span>
            </h1>
            <p className="text-xl text-orange-100 font-medium mb-10 max-w-lg leading-relaxed">
              Are you ready to prove your explorer skills? Join Foxy in a series of fun challenges and earn your virtual wings!
            </p>
            <button 
              onClick={() => document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-600 font-black px-10 py-5 rounded-full hover:bg-orange-50 transition-all shadow-xl hover:scale-105"
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
              src="https://ibb.co/qFBt5nSq" 
              alt="Activities Hero" 
              className="w-full h-auto rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-4 -right-4 bg-amber-400 p-6 rounded-full shadow-2xl animate-bounce">
              <Trophy className="w-10 h-10 text-orange-600" />
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
                  className="text-center space-y-12"
                >
                  <h2 className="text-4xl font-bold text-slate-800">Choose Your Category</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: 'Geography', icon: Globe, color: 'bg-blue-500' },
                      { name: 'Food', icon: Utensils, color: 'bg-emerald-500' },
                      { name: 'Aviation', icon: Plane, color: 'bg-sky-500' },
                      { name: 'Culture', icon: Music, color: 'bg-purple-500' }
                    ].map((cat) => (
                      <button 
                        key={cat.name}
                        onClick={() => startQuiz(cat.name)}
                        className="group flex flex-col items-center p-8 rounded-3xl border-2 border-slate-50 hover:border-orange-200 hover:bg-orange-50 transition-all"
                      >
                        <div className={`w-16 h-16 ${cat.color} text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <cat.icon className="w-8 h-8" />
                        </div>
                        <span className="font-bold text-slate-700">{cat.name}</span>
                      </button>
                    ))}
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
            {[
              { title: 'The Pilot Stretch', desc: 'Reach for the clouds! Stretch your arms high and "fly" around the room.', icon: Plane },
              { title: 'The Global Hop', desc: 'Imagine the floor is a map. Hop from "continent" to "continent"!', icon: Globe },
              { title: 'Chef\'s Dance', desc: 'Put on some global music and dance while you "stir" your imaginary pot.', icon: Utensils }
            ].map((act, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-orange-50 border border-orange-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:rotate-12 transition-transform">
                  <act.icon className="w-7 h-7 text-orange-600" />
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Plane, name: 'Airplane', desc: 'Fastest way to cross oceans.' },
            { icon: Train, name: 'Train', desc: 'Scenic routes through countries.' },
            { icon: Ship, name: 'Ship', desc: 'Exploring the vast blue seas.' },
            { icon: Car, name: 'Car', desc: 'Road trips and local discoveries.' },
            { icon: Bike, name: 'Bicycle', desc: 'Eco-friendly local exploration.' }
          ].map((method, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 text-center cursor-pointer hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-slate-800 mb-2">{method.name}</h4>
              <p className="text-xs text-slate-500">{method.desc}</p>
            </motion.div>
          ))}
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

      {/* Foxy's Corner – Everyone Can Shine */}
      <section className="py-24 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/foxy-axel-friend/800/800" 
                alt="Foxy and Axel" 
                className="rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-6 rounded-3xl shadow-xl text-white">
                <Heart className="w-10 h-10" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold uppercase tracking-widest">
                Foxy's Corner
              </div>
              <h2 className="text-4xl font-bold text-slate-800">Everyone Can Shine</h2>
              <p className="text-lg text-slate-600 leading-relaxed italic">
                "Sometimes Foxy looked up at Axel soaring through the clouds and felt a little small. 
                But Axel would always land and say, 'Foxy, your curiosity on the ground is just as important as my wings in the sky. 
                We all have our own way of exploring!'"
              </p>
              <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
                <h4 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  A Healthy Message About Inclusion
                </h4>
                <p className="text-orange-800 leading-relaxed">
                  Growth mindset means believing that we can all learn and grow at our own pace. 
                  Inclusion is about making sure everyone feels they belong, no matter how they explore. 
                  Just like Foxy, your unique talents are what make the adventure special!
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Reflect Together</h3>
              <div className="space-y-6">
                {[
                  "What is one thing you're proud of learning today?",
                  "How can we help a friend feel included in our games?",
                  "What makes your way of exploring unique?"
                ].map((q, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-500 font-bold shadow-sm">
                      {i + 1}
                    </div>
                    <p className="text-slate-700 font-medium">{q}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-orange-500 p-10 rounded-[32px] text-white relative overflow-hidden">
              <Sparkles className="absolute top-4 right-4 w-12 h-12 text-orange-300 opacity-50" />
              <h3 className="text-2xl font-bold mb-6">Design Your Own Badge</h3>
              <p className="mb-8 opacity-90">What values would your explorer badge represent? Here are some ideas to get you started:</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Courage', color: 'bg-orange-400' },
                  { name: 'Kindness', color: 'bg-orange-400' },
                  { name: 'Curiosity', color: 'bg-orange-400' },
                  { name: 'Creativity', color: 'bg-orange-400' }
                ].map((val) => (
                  <div key={val.name} className={`${val.color} p-4 rounded-2xl text-center font-bold border border-white/20`}>
                    {val.name}
                  </div>
                ))}
              </div>
              <button className="mt-10 w-full bg-white text-orange-600 font-black py-4 rounded-2xl hover:bg-orange-50 transition-all">
                DOWNLOAD TEMPLATE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
