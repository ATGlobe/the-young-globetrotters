import { motion } from 'motion/react';
import { 
  Globe, 
  BookOpen, 
  Utensils, 
  Plane, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Star,
  Download,
  Users,
  Sparkles,
  Landmark,
  Compass,
  GraduationCap,
  Map,
  ChevronRight,
  Monitor
} from 'lucide-react';
import { VOLUMES } from '../constants';
import { useEffect } from 'react';

export default function VolumeLanding() {
  const volume = VOLUMES[0]; // Volume 1 - Rome

  useEffect(() => {
    if (volume) {
      document.title = `${volume.city} for Kids – Educational Travel Ebook | Axel & Tino`;
    }
  }, [volume]);

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-56 bg-world-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                Volume 1 – The Eternal City
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Rome Comes to Life <br />
                <span className="text-blue-600">Through Adventure</span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
                Join Axel and Tino on a thrilling journey across the Eternal City — discovering ancient monuments, cultural traditions, and authentic Italian flavors.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={volume.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] transition-all"
                >
                  Buy Volume 1 Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#adventure"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white text-slate-700 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Explore the Adventure
                </a>
              </div>

              {/* Micro-conversion Elements */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  <Download className="w-5 h-5 text-emerald-500" />
                  Instant Download
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  Secure Checkout
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  <Monitor className="w-5 h-5 text-emerald-500" />
                  Tablet & Desktop
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-blue-100 border-8 border-white bg-slate-50">
                <img 
                  src={volume.cover} 
                  alt={`${volume.city} Ebook Cover Mockup`} 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400 rounded-full blur-[120px] opacity-20" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-400 rounded-full blur-[120px] opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. What Makes This Book Different */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Storytelling That Teaches</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              This is not just a story, but an educational journey designed to spark curiosity and build real-world knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Landmark, 
                title: "Explore Ancient Rome", 
                desc: "Discover the Colosseum, Pantheon, Roman Forum and St. Peter’s Dome through the eyes of our globetrotters.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              { 
                icon: Globe, 
                title: "Real Geography & Culture", 
                desc: "Learn about La Passeggiata, Roman traditions, and urban wildlife in their natural habitat.",
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              },
              { 
                icon: Utensils, 
                title: "Culinary Discovery", 
                desc: "Includes a real Spaghetti alla Carbonara recipe for family cooking time and cultural appreciation.",
                color: "text-orange-600",
                bg: "bg-orange-50"
              },
              { 
                icon: Plane, 
                title: "Aviation & STEM Elements", 
                desc: "Aerodynamic maneuvers, flight concepts, and curiosity-driven exploration of how we travel.",
                color: "text-sky-600",
                bg: "bg-sky-50"
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[32px] border border-slate-100 bg-white hover:shadow-xl hover:shadow-blue-100/30 transition-all group">
                <div className={`${item.bg} ${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Inside the Adventure */}
      <section id="adventure" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12">What Your Child Will Experience</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Sparkles, text: "Action-driven narrative with recurring villain Foxy" },
                  { icon: BookOpen, text: "Real historical facts integrated into the story" },
                  { icon: GraduationCap, text: "Cultural education without feeling like school" },
                  { icon: Utensils, text: "Chef’s Corner recipe section" },
                  { icon: Landmark, text: "Professor Owl’s cultural lessons" },
                  { icon: Map, text: "Travel packing guide for young explorers" },
                  { icon: ChevronRight, text: "Serial hook leading to Paris (Volume 2)" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-bold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl bg-blue-100 relative group">
                <img 
                  src="https://picsum.photos/seed/rome-experience/800/1000" 
                  alt="Adventure Experience" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-12">
                  <p className="text-white text-xl font-medium italic">
                    "Every corner of Rome tells a story of thousands of years..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Educational Value */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[64px] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">Built for Curious Young Minds</h2>
                <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                  The Young Globetrotters series is more than entertainment. It's a comprehensive educational tool that encourages geography learning, builds cultural awareness, and stimulates a lifelong curiosity about the world.
                </p>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    "Encourages geography learning",
                    "Builds cultural awareness",
                    "Stimulates curiosity about the world",
                    "Supports independent reading",
                    "Ideal for homeschool and travel preparation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="shrink-0 bg-blue-500/20 p-2 rounded-lg">
                        <CheckCircle2 className="w-6 h-6 text-blue-400" />
                      </div>
                      <span className="text-lg text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[40px] max-w-sm">
                  <ShieldCheck className="w-16 h-16 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Educational Excellence</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Our content is curated to ensure age-appropriateness while maintaining a high intellectual standard for young explorers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Details Box */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[48px] p-12 border border-slate-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Download className="w-32 h-32 text-blue-600" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Product Details</h3>
                <div className="space-y-4">
                  {[
                    { label: "Digital Format", value: "PDF" },
                    { label: "Reading Age", value: "6–11 years" },
                    { label: "Length", value: "Multi-chapter adventure" },
                    { label: "Language", value: "English" }
                  ].map((detail, i) => (
                    <div key={i} className="flex justify-between border-b border-slate-50 pb-2">
                      <span className="text-slate-500">{detail.label}</span>
                      <span className="font-bold text-slate-900">{detail.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  <p className="font-bold text-slate-900 mb-4">Includes:</p>
                  {[
                    "Full Illustrated Story",
                    "Cultural Facts Section",
                    "Chef's Corner Recipe",
                    "Travel Guide Section"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 flex flex-col justify-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Future Expansion</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We are constantly growing our educational universe.
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  Printable Activity Pack coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Parents & Young Explorers Love It</h2>
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Sarah M.", 
                role: "Parent & Educator", 
                text: "The historical accuracy combined with a fun story is exactly what I was looking for. My kids actually remember the facts!" 
              },
              { 
                name: "Robert K.", 
                role: "Homeschooling Dad", 
                text: "We used the Rome volume as part of our history curriculum. The recipe at the end was the perfect Friday activity." 
              },
              { 
                name: "Elena G.", 
                role: "Travel Enthusiast", 
                text: "A beautiful way to introduce my children to different cultures before we travel. They feel like they already know the city." 
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 hover:shadow-lg transition-all">
                <p className="text-lg text-slate-600 italic mb-8">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 left-0 w-full h-full bg-world-pattern opacity-10 pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
              Start the Journey in Rome Today
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto relative z-10">
              Give your child the gift of global curiosity. The adventure begins in the Eternal City.
            </p>
            <div className="relative z-10">
              <a
                href={volume.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-6 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl text-xl"
              >
                Get Volume 1 Now
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
