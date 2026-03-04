import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, PenTool, Utensils, CheckCircle, ArrowRight } from 'lucide-react';

export default function StructuredLearning() {
  const steps = [
    { icon: Search, title: 'Discover', desc: 'Explore new cultures and cities through engaging stories.', color: 'bg-blue-100 text-blue-600' },
    { icon: BookOpen, title: 'Learn', desc: 'Absorb key facts about geography, history, and traditions.', color: 'bg-indigo-100 text-indigo-600' },
    { icon: PenTool, title: 'Create', desc: 'Apply knowledge through creative activities and challenges.', color: 'bg-cyan-100 text-cyan-600' },
    { icon: Utensils, title: 'Taste', desc: 'Experience the culture firsthand with authentic recipes.', color: 'bg-sky-100 text-sky-600' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-sky-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-sky-900 mb-6 leading-tight">
              Learning <br />
              <span className="text-sky-500">Step by Step</span>
            </h1>
            <p className="text-xl text-sky-700 font-medium mb-10 max-w-lg leading-relaxed">
              Our structured methodology ensures that every adventure is a repeatable, 
              confidence-building journey for young explorers.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-sky-200 overflow-hidden">
                    {/* Image removed */}
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-sky-800">Joined by 5,000+ Explorers</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-sky-200 rounded-full absolute inset-0 blur-3xl opacity-30 animate-pulse"></div>
            {/* Image removed */}
            {/* Tino Character Detail */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-sky-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black text-sky-400 uppercase tracking-widest">Tino's Choice</p>
                <p className="text-lg font-bold text-sky-900">Structured Path</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Learning Journey */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">The Learning Journey</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">A consistent framework that makes learning predictable and fun.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className="relative p-8 rounded-3xl border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-sky-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center font-black text-slate-300">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Educational Value Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://picsum.photos/seed/confidence/800/600" 
              alt="Confidence in Learning" 
              className="rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl font-bold text-slate-800 leading-tight">Why Structure <br /><span className="text-sky-600">Builds Confidence</span></h2>
            <div className="space-y-6">
              {[
                { title: 'Repetition', desc: 'Consistent patterns help children feel familiar and safe in new environments.' },
                { title: 'Confidence', desc: 'Knowing what to expect allows children to focus on the joy of discovery.' },
                { title: 'Familiarity', desc: 'Tino\'s repeatable steps create a sense of mastery over complex global topics.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-sky-600 font-black">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tino Gallery */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Tino's Learning Moments</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div 
              key={i} 
              className="aspect-video rounded-3xl overflow-hidden shadow-md cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <img 
                src={`https://picsum.photos/seed/tino-gallery-${i}/800/450`} 
                alt={`Tino Gallery ${i}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-sky-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Start Your Structured Adventure</h2>
          <p className="text-xl text-sky-100 mb-10">
            Every book follows Tino's proven methodology. Pick a city and start learning today!
          </p>
          <Link 
            to="/books"
            className="inline-block bg-white text-sky-600 font-black px-12 py-5 rounded-full hover:bg-sky-50 transition-all shadow-xl hover:scale-105"
          >
            Browse the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
