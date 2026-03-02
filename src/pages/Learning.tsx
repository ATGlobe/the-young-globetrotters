import React from 'react';
import { motion } from 'motion/react';
import { Download, Printer, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Learning() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-emerald-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold text-white mb-6">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Bonus Educational Content
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Learn and Play with Every Adventure
              </h1>
              <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
                Our "Learning Activities" edition includes printable packs designed to turn every ebook into a complete educational experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/shop" 
                  className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-emerald-50 transition-all"
                >
                  Explore Volumes
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[48px] border border-white/20">
                <img 
                  src="/assets/learning-activities.png" 
                  alt="Educational activities" 
                  className="rounded-[32px] shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/covers/default.png';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What's inside the Activity Pack?</h2>
            <p className="text-slate-500">Each pack is customized for the specific city and volume.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Coloring Pages",
                desc: "Beautiful illustrations of monuments and characters to color.",
                icon: Printer
              },
              {
                title: "Geography Quizzes",
                desc: "Fun challenges to test what they've learned about the city.",
                icon: CheckCircle2
              },
              {
                title: "Word Searches",
                desc: "Vocabulary games related to local culture and food.",
                icon: Star
              },
              {
                title: "Recipe Cards",
                desc: "Chef's recipes in a printable format for the kitchen.",
                icon: Download
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-[40px] border border-slate-100"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 shadow-sm">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start the journey?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Choose the "Ebook + Activities" version of any volume to get the full educational pack.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center px-10 py-5 bg-emerald-500 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20"
          >
            Go to Shop
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
