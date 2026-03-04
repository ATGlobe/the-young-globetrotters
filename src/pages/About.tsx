import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { CHARACTERS } from '../constants';
import { Globe, BookOpen, Utensils, Plane, GraduationCap, Heart, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero 
        title="Our Story & Vision"
        subtitle="Axel & Tino – The Young Globetrotters is more than just a book series. It's the foundation of a future international educational publishing brand."
        bgColor="bg-[#2563EB]" // Blue
        image="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/Axel__10_-removebg-preview.png"
      />

      {/* Brand Vision */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1">
              <h2 className="mb-8 text-4xl font-bold text-slate-900">The Foundation of a Global Brand</h2>
              <p className="mb-6 text-xl text-slate-600 leading-relaxed">
                Our mission is to inspire the next generation of global citizens through adventure, education, and culture. We believe that by introducing children to the diversity of our world, we can foster curiosity, empathy, and a lifelong love for learning.
              </p>
              <p className="mb-10 text-xl text-slate-600 leading-relaxed">
                The brand combines travel, geography, wildlife, culinary traditions, and introductory aviation themes into a structured storytelling format that children aged 7–12 find both engaging and educational.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { icon: <Heart className="text-red-500" />, title: 'Warm & Inspiring', text: 'Stories that touch the heart and spark the imagination.' },
                  { icon: <ShieldCheck className="text-emerald-500" />, title: 'Structured & Safe', text: 'Consistent formats that provide a safe learning environment.' },
                  { icon: <Zap className="text-yellow-500" />, title: 'Dynamic & Fun', text: 'Engaging characters and exciting adventures in every city.' },
                  { icon: <GraduationCap className="text-blue-500" />, title: 'Educational First', text: 'Every book is designed with clear learning objectives.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="p-12 bg-blue-50 rounded-[3rem] border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/50 blur-[100px] -z-10" />
                <img 
                  src="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/Il_gufo_maestro_dell-removebg-preview.png" 
                  alt="Professor Owl" 
                  className="w-full h-auto max-w-xs mx-auto drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-8 text-center">
                  <p className="text-xl font-medium text-blue-900 italic">"Education is the most powerful weapon which you can use to change the world."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Characters */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="mb-6 text-4xl font-bold text-slate-900">Meet the Team</h2>
            <p className="text-lg text-slate-600">The characters that bring our educational vision to life in every city.</p>
          </div>
          <div className="space-y-24">
            {CHARACTERS.map((char, i) => (
              <motion.div
                key={char.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center gap-12 lg:flex-row ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className={`aspect-square rounded-[3rem] overflow-hidden ${char.color} bg-opacity-10 flex items-center justify-center p-12`}>
                    <img 
                      src={char.image} 
                      alt={char.name} 
                      className="w-full h-full object-contain drop-shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 block">{char.role}</span>
                  <h3 className="mb-6 text-4xl font-bold text-slate-900">{char.name}</h3>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">{char.description}</p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-medium text-slate-700 shadow-sm">
                      Core Character
                    </div>
                    <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-medium text-slate-700 shadow-sm">
                      Educational Role
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="mb-6 text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg text-slate-400">The principles that guide our publishing brand and educational philosophy.</p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { icon: <Globe className="text-blue-500" />, title: 'Global Citizenship', text: 'We believe in a world without borders where every child feels at home everywhere.' },
              { icon: <BookOpen className="text-orange-500" />, title: 'Educational Integrity', text: 'Every story is vetted for accuracy and educational value by experts.' },
              { icon: <Utensils className="text-red-500" />, title: 'Cultural Respect', text: 'We celebrate diversity and promote respect for all cultures and traditions.' },
              { icon: <Plane className="text-sky-500" />, title: 'Exploration Spirit', text: 'We encourage curiosity and the courage to explore the unknown.' },
              { icon: <GraduationCap className="text-emerald-500" />, title: 'Lifelong Learning', text: 'We aim to spark a passion for learning that lasts a lifetime.' },
              { icon: <Heart className="text-pink-500" />, title: 'Empathy & Kindness', text: 'Our stories promote kindness and understanding toward all living beings.' },
            ].map((value, i) => (
              <div key={i} className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 mb-8 rounded-2xl bg-white/5 flex items-center justify-center">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
