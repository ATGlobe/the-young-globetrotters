import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  ArrowRight, 
  BookOpen, 
  Globe, 
  Utensils, 
  ShieldCheck, 
  Mail,
  CheckCircle2,
  Compass,
  GraduationCap,
  Sparkles,
  Landmark,
  Heart,
  ShoppingBag
} from 'lucide-react';
import { VOLUMES, LOGO_URL } from '../constants';
import VolumeCard from '../components/VolumeCard';

export default function Home() {
  const featuredVolumes = VOLUMES.slice(0, 3);

  return (
    <div className="overflow-hidden bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-56 bg-world-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-8">
                <Globe className="w-4 h-4 mr-2" />
                Axel & Tino – The Young Globetrotters
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Explore the World. <br />
                <span className="text-blue-600">Learn Through Adventure.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
                Join Axel & Tino on educational journeys across the globe. Discover cities, culture, history, wildlife and culinary traditions — one adventure at a time.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/volume/1"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] transition-all"
                >
                  Start the Adventure in Rome
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/ebooks"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white text-slate-700 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Explore All 50 Destinations
                </Link>
              </div>
              <p className="mt-6 text-sm text-slate-500 font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                New destinations added regularly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0,
                y: [0, -15, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                x: { duration: 0.8, delay: 0.2 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[320px] lg:max-w-[540px] mt-12 lg:mt-0">
                <img 
                  src="https://drive.google.com/uc?export=view&id=1xMHWY9E4gBAEftORS9lu3C1Jd4xrSj_g" 
                  alt="Foxy on a blue airplane" 
                  className="w-full h-auto object-contain shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[40px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-blue-400 rounded-full blur-[140px] opacity-25 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. About the Series */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">What Are The Young Globetrotters?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                This is a global educational ebook series where each volume explores a real-world destination through storytelling, cultural insights, geography, history and fun missions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: "Real Cities", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: BookOpen, title: "Educational Content", color: "text-indigo-600", bg: "bg-indigo-50" },
                  { icon: Utensils, title: "Local Recipes", color: "text-orange-600", bg: "bg-orange-50" },
                  { icon: Plane, title: "Aviation & STEM", color: "text-sky-600", bg: "bg-sky-50" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 bg-slate-50/50">
                    <div className={`${item.bg} ${item.color} p-3 rounded-xl`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-slate-800">{item.title}</span>
                  </div>
                ))}
              </div>

              {/* Trust Signals Row */}
              <div className="pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: GraduationCap, label: "Educational Content" },
                  { icon: Landmark, label: "Real Cities" },
                  { icon: Globe, label: "Cultural Learning" },
                  { icon: Heart, label: "Family Friendly" }
                ].map((signal, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2 group">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <signal.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors">
                      {signal.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-[280px] lg:max-w-[420px] mt-8 lg:mt-0">
                <div className="rounded-[40px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.06)] border-8 border-white bg-blue-50/30">
                  <img 
                    src="https://raw.githubusercontent.com/ATGlobe/young-globetrotters-assets/main/covers/personaggi.png" 
                    alt="Axel & Tino Characters" 
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-blue-50 max-w-[240px] hidden lg:block">
                <p className="text-sm font-medium text-slate-600 italic">
                  "Our mission is to inspire the next generation of global citizens."
                </p>
                <p className="text-xs font-bold text-blue-600 mt-2">— Axel & Tino</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Volumes */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Featured Adventures</h2>
              <p className="text-slate-600">Start your collection with our most popular destinations.</p>
            </div>
            <Link to="/ebooks" className="text-blue-600 font-bold flex items-center hover:gap-2 transition-all">
              View All 50 Volumes <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVolumes.map((volume) => (
              <VolumeCard key={volume.id} volume={volume} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Shop Promotion Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-blue-600 rounded-[64px] p-12 lg:p-24 text-white overflow-hidden shadow-2xl shadow-blue-100"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white font-black text-sm uppercase tracking-widest">
                  <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
                  Official Merchandise
                </div>
                <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                  Bring the Adventure <br />
                  <span className="text-yellow-300">Home</span>
                </h2>
                <p className="text-xl text-blue-50 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  From Axel's pilot caps to Chef's recipe mugs, explore our exclusive collection of gear for young explorers.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                  <Link
                    to="/shop"
                    className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 shadow-xl hover:bg-blue-50 transition-all"
                  >
                    <ShoppingBag className="w-6 h-6" />
                    Visit the Shop
                  </Link>
                  <div className="flex items-center gap-2 text-blue-100 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    Worldwide Shipping
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 rotate-3"
                  >
                    <img src="https://picsum.photos/seed/mug/400/400" alt="Mug" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 -rotate-3 mt-12"
                  >
                    <img src="https://picsum.photos/seed/cap/400/400" alt="Cap" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. The Educational Ecosystem */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">More Than Books – A Growing Learning Universe</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are building a comprehensive educational ecosystem designed to support children's growth through diverse learning formats and interactive experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Printable Learning Activities", desc: "Hands-on exercises designed to reinforce concepts learned in the books.", icon: GraduationCap },
              { title: "Geography Worksheets", desc: "Detailed maps and data sheets for deep geographical exploration.", icon: Globe },
              { title: "Official Merchandise", desc: "Bring the adventure home with our exclusive collection of gear.", icon: ShoppingBag, link: "/shop" },
              { title: "Culinary Mini-Guides", desc: "Step-by-step recipes and food history from around the world.", icon: Utensils },
              { title: "STEM & Aviation Lessons", desc: "Science-based adventures focusing on flight, physics, and engineering.", icon: Plane },
              { title: "Premium Educational Bundles", desc: "Curated collections of resources for schools and home learning.", icon: Compass }
            ].map((item, i) => (
              <Link 
                key={i} 
                to={item.link || "#"}
                className="p-8 rounded-[32px] border border-slate-100 bg-white hover:shadow-xl hover:shadow-blue-100/30 transition-all group block"
              >
                <div className="bg-blue-50 text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trust Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Built for Curious Young Minds</h2>
              <div className="space-y-8">
                {[
                  { title: "Educational Value", desc: "Content aligned with geography and history curricula for ages 6–12." },
                  { title: "Cultural Awareness", desc: "Promoting empathy and understanding of global diversity." },
                  { title: "Safe & Age-Appropriate", desc: "Trustworthy storytelling designed specifically for young readers." },
                  { title: "Versatile Learning", desc: "Perfectly suited for home learning, homeschooling, and classroom use." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[48px] p-12 relative z-10">
                <ShieldCheck className="w-20 h-20 text-blue-200 mb-8" />
                <h3 className="text-3xl font-bold mb-6">A Brand Parents Trust</h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  "The Young Globetrotters series has been a game-changer for our family. It's rare to find content that is both genuinely educational and highly engaging for kids."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-400/30 flex items-center justify-center font-bold">SM</div>
                  <div>
                    <p className="font-bold">Sarah Mitchell</p>
                    <p className="text-sm text-blue-300">Educator & Parent</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
