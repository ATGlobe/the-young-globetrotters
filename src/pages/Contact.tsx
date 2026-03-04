import React from 'react';
import Hero from '../components/Hero';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero 
        title="Get in Touch"
        subtitle="Have questions about the series, school partnerships, or the official store? Our team is here to help you on your global journey."
        bgColor="bg-slate-900" // Professional Slate
        image="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/characters-lineup.png"
      />

      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-start gap-16 lg:flex-row">
            {/* Contact Information */}
            <div className="flex-1 w-full">
              <h2 className="mb-8 text-4xl font-bold text-slate-900">Contact Information</h2>
              <p className="mb-12 text-xl text-slate-600 leading-relaxed">
                Whether you're a parent, a teacher, or a potential partner, we'd love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-lg">Email Us</h4>
                    <p className="text-slate-600">hello@youngglobetrotters.com</p>
                    <p className="text-sm text-slate-400 mt-1">We respond within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-lg">Partnerships</h4>
                    <p className="text-slate-600">partners@youngglobetrotters.com</p>
                    <p className="text-sm text-slate-400 mt-1">For schools and international distribution.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-lg">Global Office</h4>
                    <p className="text-slate-600">123 Explorer Way, London, UK</p>
                    <p className="text-sm text-slate-400 mt-1">Our creative hub for global adventures.</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">Follow the Adventure</h4>
                <div className="flex gap-4">
                  {['Facebook', 'Instagram', 'Twitter', 'Youtube'].map((social) => (
                    <button key={social} className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 w-full p-10 bg-white rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10" />
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Email@example.com"
                      className="w-full px-6 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Subject</label>
                  <select className="w-full px-6 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>School Partnership</option>
                    <option>Shop Support</option>
                    <option>Book Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                
                <button className="w-full py-5 bg-blue-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Looking for quick answers?</h2>
          <p className="mb-10 text-lg text-slate-600">Check our frequently asked questions for parents and teachers.</p>
          <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
            Visit our Help Center <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
