import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Globe, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About The Young Globetrotters
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Empowering the next generation of world citizens through adventure, culture, and education.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                "The Young Globetrotters" is more than just a book series; it's a gateway to the world. Our mission is to inspire curiosity and respect for different cultures in children aged 6 to 12. 
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Each volume is a carefully crafted journey that combines thrilling adventures with real historical facts, local traditions, and educational activities. We believe that by learning about the world, children develop empathy and a global perspective.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Cultural Awareness</h4>
                    <p className="text-sm text-slate-500">Exploring traditions from 50 cities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Educational Value</h4>
                    <p className="text-sm text-slate-500">History, geography, and language.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[92%] aspect-square rounded-[64px] overflow-hidden shadow-2xl bg-slate-50 flex items-center justify-center">
                <img 
                  src="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/c12aa910220d1c4f82ba6d004c1537ff2af25f49/sezione%20about.jpg" 
                  alt="Our Mission" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-100 p-2 rounded-full text-red-600">
                    <Heart className="w-6 h-6 fill-current" />
                  </div>
                  <span className="font-bold text-slate-900">Loved by Parents</span>
                </div>
                <p className="text-sm text-slate-500">"The perfect blend of fun and learning. My kids can't wait for the next city!"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We are committed to providing high-quality educational content that kids actually enjoy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertly Written",
                desc: "Stories developed with educators to ensure age-appropriate learning.",
                icon: ShieldCheck,
                color: "text-blue-600",
                bg: "bg-blue-100"
              },
              {
                title: "Interactive Content",
                desc: "Recipes, history snippets, and printable activities in every volume.",
                icon: BookOpen,
                color: "text-emerald-600",
                bg: "bg-emerald-100"
              },
              {
                title: "Global Community",
                desc: "Join thousands of young explorers from all over the world.",
                icon: Globe,
                color: "text-purple-600",
                bg: "bg-purple-100"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm"
              >
                <div className={`${value.bg} ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
