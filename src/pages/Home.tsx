import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Plane, ArrowRight, BookOpen, GraduationCap, Star, Globe, ShieldCheck, Zap } from 'lucide-react';
import { VOLUMES, CHARACTERS, LOGO_URL } from '../constants';
import VolumeCard from '../components/VolumeCard';

export default function Home() {
  const latestVolumes = VOLUMES.filter(v => v.isLatest).slice(0, 3);
  const featuredCharacters = CHARACTERS.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <img src={LOGO_URL} alt="Axel & Tino Logo" className="w-20 h-20 object-contain drop-shadow-xl" />
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
                  <Globe className="w-4 h-4 mr-2" />
                  50 Cities, 50 Adventures
                </div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Fly around the world with <span className="text-blue-600">Axel & Tino</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                The ebook series that transforms every city into a special mission. History, cooking, and adventure for young explorers aged 6 to 12.
              </p>
              <div className="flex flex-col sm:row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all"
                >
                  Discover the Volumes
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/characters"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-slate-700 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Meet the Team
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-blue-200 border-8 border-white">
                <img
                  src="/assets/covers/personaggi.png"
                  alt="The Young Globetrotters Characters"
                  className="hero-image w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/covers/default.png';
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-20" />
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-blue-50"
              >
                <Plane className="w-8 h-8 text-blue-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why choose The Young Globetrotters?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">An innovative educational method that combines the pleasure of reading with the discovery of the world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: BookOpen, title: "Educational", desc: "Each volume includes history and culture snippets curated by Professor Owl.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: GraduationCap, title: "Learning", desc: "Activity sheets, coloring pages, and games to reinforce concepts.", color: "text-emerald-500", bg: "bg-emerald-50" },
              { icon: Zap, title: "Instant", desc: "Purchase and download your ebook instantly in PDF, EPUB or MOBI.", color: "text-yellow-500", bg: "bg-yellow-50" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[32px] border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all text-center"
              >
                <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Meet the Team</h2>
              <p className="text-slate-500">The characters who will accompany your children on every adventure.</p>
            </div>
            <Link to="/characters" className="text-blue-600 font-bold flex items-center hover:underline">
              View all characters <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCharacters.map((char, i) => (
              <motion.div
                key={char.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white p-6 rounded-[32px] shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-transparent">
                  <img src={char.image} alt={char.name} className="character-img w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{char.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-4">{char.role}</p>
                <p className="text-sm text-slate-500 line-clamp-2">{char.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Volumes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Latest Published Volumes</h2>
              <p className="text-slate-500">The new destinations of Axel and Tino are waiting for you.</p>
            </div>
            <Link to="/shop" className="text-blue-600 font-bold flex items-center hover:underline">
              Go to shop <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestVolumes.map((volume) => (
              <VolumeCard key={volume.id} volume={volume} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">What parents say</h2>
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Marco R.", role: "Dad of Sofia (8 years old)", text: "My daughter loves Axel! Thanks to these ebooks she learned so much about Paris before our trip." },
              { name: "Elena V.", role: "Teacher", text: "The educational sheets are very well made. I often use them in class for geography lessons." },
              { name: "Giulia M.", role: "Mom of Leo (6 years old)", text: "Chef's recipes are our fixed Saturday appointment. Fun and educational!" }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white"
              >
                <p className="italic mb-6 text-lg">"{review.text}"</p>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-blue-200">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <Plane className="w-32 h-32 text-blue-500 rotate-12" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
              Ready for the next mission?
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto relative z-10">
              Join thousands of families exploring the world with us. Start your collection today!
            </p>
            <div className="flex flex-col sm:row justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
              <Link
                to="/shop"
                className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20"
              >
                Go to Shop
              </Link>
              <Link
                to="/account"
                className="px-10 py-5 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/10"
              >
                Access User Area
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
