import React from 'react';
import Hero from '../components/Hero';
import { GraduationCap, BookOpen, Globe, Utensils, Plane, Download, CheckCircle2, Users, School } from 'lucide-react';

const ForTeachers: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero 
        title="For Educators"
        subtitle="Professional resources and educational philosophy for the classroom. Position the Young Globetrotters series as structured educational content."
        bgColor="bg-[#1E3A8A]" // Navy
        image="https://i.ibb.co/ycBYt9HR/Generated-Image-March-03-2026-3-31-PM.png"
      />

      {/* Educational Philosophy */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-4xl font-bold text-slate-900 text-center">Educational Philosophy</h2>
            <p className="mb-12 text-xl text-slate-600 leading-relaxed text-center">
              The Axel & Tino series is built on a cross-disciplinary educational framework that integrates geography, history, wildlife, and culture into a cohesive narrative structure.
            </p>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 mb-6 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <BookOpen size={24} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">Structured Storytelling</h3>
                <p className="text-slate-600 leading-relaxed">
                  The repeatable format of our books helps children build reading confidence and provides a predictable framework for learning complex global concepts.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 mb-6 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Globe size={24} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">Global Citizenship</h3>
                <p className="text-slate-600 leading-relaxed">
                  We focus on fostering empathy and global awareness, preparing students to navigate and respect a diverse international landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <img 
              src="https://i.ibb.co/8L2Rrhpm/Generated-Image-March-03-2026-3-31-PM-1.png"
              alt="Teacher Fox"
              className="teacher-fox mx-auto mb-8 block max-w-[260px]"
            />
            <h2 className="text-4xl font-bold text-slate-900">Learning Objectives</h2>
          </div>
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="flex-1">
              <p className="mb-10 text-lg text-slate-600">
                Our curriculum-aligned objectives ensure that every adventure contributes to a student's academic and personal growth:
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Geography & Spatial Awareness', text: 'Identifying cities, countries, and landmarks on a global scale.' },
                  { title: 'Historical Context', text: 'Understanding the key events and figures that shaped world cities.' },
                  { title: 'Biological Diversity', text: 'Learning about unique wildlife and ecosystems in different regions.' },
                  { title: 'Cultural Competency', text: 'Recognizing and respecting diverse traditions, languages, and foods.' },
                  { title: 'Critical Thinking', text: 'Analyzing Foxy\'s transport methods and problem-solving with Axel & Tino.' },
                ].map((obj, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="text-emerald-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{obj.title}</h4>
                      <p className="text-slate-600">{obj.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="p-12 bg-white rounded-[3rem] shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Download className="text-blue-600" />
                  Teacher Resources
                </h3>
                <div className="space-y-4">
                  {[
                    'Lesson Plan: Introduction to Rome',
                    'Classroom Activity: Global Food Map',
                    'Printable: Wildlife Identification Guide',
                    'Teacher Guide: Using Axel & Tino in Class',
                    'Cross-Disciplinary Project Ideas',
                  ].map((resource, i) => (
                    <button key={i} className="w-full p-4 flex items-center justify-between bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all text-left font-medium">
                      {resource}
                      <Download size={18} />
                    </button>
                  ))}
                </div>
                <div className="mt-10 pt-10 border-t border-slate-100">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl text-blue-800">
                    <School size={24} />
                    <p className="text-sm font-medium">Interested in a school partnership? Contact our educational team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Use Ideas */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-slate-900">Classroom Use Ideas</h2>
            <p className="text-lg text-slate-600">Creative ways to bring the Young Globetrotters into your daily teaching.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: <Users />, title: 'Group Projects', text: 'Assign different cities to student groups for research and presentation.' },
              { icon: <Utensils />, title: 'Culture Days', text: 'Use the recipes in the books to host a multicultural food tasting event.' },
              { icon: <Plane />, title: 'Virtual Travel', text: 'Track Axel & Tino\'s journey on a large classroom world map.' },
            ].map((idea, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 text-blue-600 shadow-sm">
                  {idea.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{idea.title}</h4>
                <p className="text-slate-600 leading-relaxed">{idea.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold">Empower Your Students</h2>
          <p className="max-w-2xl mx-auto mb-12 text-xl text-slate-400">
            Join our network of educators who are using Axel & Tino to build a more globally aware and curious generation.
          </p>
          <button className="px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg">
            Request Educational Sample
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForTeachers;
