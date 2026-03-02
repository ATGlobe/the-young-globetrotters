import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { VOLUMES } from '../constants';
import { 
  MapPin, 
  Utensils, 
  History, 
  Lightbulb, 
  ShoppingCart, 
  ArrowLeft,
  FileText,
  Compass,
  X
} from 'lucide-react';
import { quizApi, progressApi } from '../lib/api';
import { useAuthStore } from '../store/authStore';
import AuthModal from '../components/AuthModal';
import QuizPlayer from '../components/QuizPlayer';
import { AnimatePresence } from 'motion/react';
import { citiesData } from '../data/citiesData';

export default function VolumeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const volume = VOLUMES.find(v => v.id === Number(id));
  
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [activeQuiz, setActiveQuiz] = React.useState<any>(null);
  const [userProgress, setUserProgress] = React.useState<any>(null);
  const [showRecipeModal, setShowRecipeModal] = React.useState(false);
  const { isAuthenticated } = useAuthStore();

  const purchaseRef = React.useRef<HTMLDivElement>(null);

  const cityId = volume?.city.toLowerCase().replace(/\s+/g, '-');
  const cityInfo = cityId ? citiesData[cityId] : null;

  React.useEffect(() => {
    if (isAuthenticated && volume) {
      progressApi.get().then(res => {
        const cityProgress = res.progress.find((p: any) => p.city === volume.city);
        setUserProgress(cityProgress);
      });
    }
  }, [isAuthenticated, volume]);

  if (!volume) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Volume not found</h2>
          <Link to="/shop" className="text-blue-600 hover:underline">Back to shop</Link>
        </div>
      </div>
    );
  }

  const handleFreeExploration = async () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    try {
      const quizzes = await quizApi.getAll({ city: volume.city, is_free: true });
      if (quizzes.length > 0) {
        const fullQuiz = await quizApi.getById(quizzes[0].id);
        setActiveQuiz(fullQuiz);
      } else {
        alert('Free exploration quiz not available for this city yet!');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to load free exploration');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs & Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Go back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="sticky top-32">
              <a 
                href={volume.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[48px] overflow-hidden shadow-2xl shadow-blue-100 border-8 border-slate-50 aspect-[3/4] hover:scale-[1.02] transition-transform"
              >
                <img
                  src={volume.cover}
                  alt={volume.title}
                  className="ebook-cover w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </a>
              
              {/* Floating Badges */}
              <div className="absolute top-8 left-8">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-900">{volume.city}, {volume.country}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {volume.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {volume.description}
              </p>
            </div>

            {/* Buy Now Button */}
            <div className="pt-4" id="purchase-section" ref={purchaseRef}>
              <a
                href={volume.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
              >
                <ShoppingCart className="w-6 h-6 mr-3" />
                Buy Now
              </a>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Typical Recipe</h4>
                  <p className="text-sm text-slate-500">{volume.recipeName}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-50 p-3 rounded-2xl text-purple-600">
                  <History className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">History Section</h4>
                  <p className="text-sm text-slate-500">Curated by History Owl</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-50 p-3 rounded-2xl text-yellow-600">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Curiosity</h4>
                  <p className="text-sm text-slate-500">Secrets of the city</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Multi-format</h4>
                  <p className="text-sm text-slate-500">PDF, EPUB, MOBI, DOCX</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Sections */}
        <div className="mt-32 space-y-24">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">What you'll find in this volume</h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed">
                <p>{volume.description}</p>
                <p className="mt-4">Together with Axel and Tino, children will explore the most famous monuments of {volume.city}, learning local history in a fun and interactive way. History Owl will provide cultural insights, while the Chef will reveal the secrets of traditional cuisine.</p>
              </div>
              
              <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden min-h-[200px]">
                {/* Background Illustration of the Monument */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={volume.monumentImage || `/assets/monuments/default.png`} 
                    alt={`${volume.city} Monument`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/monuments/default.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-900/70" />
                </div>

                <div className="relative z-10 flex flex-col md:row items-center gap-8">
                  <div className="shrink-0 flex flex-col items-center">
                    <img 
                      src="/assets/characters/professor-owl.png"
                      alt="Professor Owl Icon"
                      className="w-[90px] h-auto mb-4"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Professor Owl Corner</h3>
                    <p className="text-slate-200 leading-relaxed italic">"{volume.historySnippet}"</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-[40px] p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <Utensils className="w-6 h-6 mr-2" />
                  In the kitchen with Chef
                </h3>
                <button 
                  onClick={() => setShowRecipeModal(true)}
                  className="w-full aspect-video rounded-2xl overflow-hidden mb-6 group/recipe relative"
                >
                  <img 
                    src={volume.kitchenImage || `/assets/kitchen/default.png`} 
                    alt={volume.recipeName} 
                    className="w-full h-full object-cover group-hover/recipe:scale-110 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/kitchen/default.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover/recipe:bg-blue-900/20 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl font-bold text-blue-600 opacity-0 group-hover/recipe:opacity-100 transition-opacity transform translate-y-2 group-hover/recipe:translate-y-0">
                      View Recipe
                    </div>
                  </div>
                </button>
                <h4 className="font-bold text-blue-800 mb-2">{volume.recipeName}</h4>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Learn how to prepare this typical dish with a simplified recipe suitable for children and their parents!
                </p>
              </div>

              <div className="bg-yellow-50 rounded-[40px] p-8">
                <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2" />
                  Did you know?
                </h3>
                <p className="text-yellow-800 leading-relaxed italic">
                  {volume.curiosity}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <AnimatePresence>
        {showRecipeModal && cityInfo && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRecipeModal(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowRecipeModal(false)}
                className="absolute top-6 right-6 z-20 p-2 bg-white/90 backdrop-blur-md rounded-full text-slate-400 hover:text-slate-900 shadow-sm transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header Image */}
              <div className="relative h-48 sm:h-64 shrink-0">
                <img 
                  src={volume.kitchenImage || `/assets/kitchen/default.png`} 
                  alt={cityInfo.dish.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/kitchen/default.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg mb-2 inline-block">
                    {volume.city} Recipe
                  </span>
                  <h2 className="text-3xl font-black text-slate-900">{cityInfo.dish.name}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="space-y-8">
                  {/* Ingredients */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <div className="w-2 h-6 bg-blue-500 rounded-full" />
                      Ingredients
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cityInfo.dish.ingredients.map((ing, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                          <div className="w-1.5 h-1.5 bg-blue-200 rounded-full shrink-0" />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preparation */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <div className="w-2 h-6 bg-emerald-500 rounded-full" />
                      Preparation
                    </h3>
                    <div className="space-y-4">
                      {cityInfo.dish.steps.map((step, idx) => (
                        <div key={idx} className="flex gap-4">
                          <span className="shrink-0 w-8 h-8 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-black text-sm">
                            {idx + 1}
                          </span>
                          <p className="text-slate-600 leading-relaxed pt-1 font-medium">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="pt-8 border-t border-slate-100 text-center">
                    <p className="text-slate-500 text-sm mb-6 font-medium">
                      Discover more cultural secrets inside the full ebook.
                    </p>
                    <button
                      onClick={() => {
                        setShowRecipeModal(false);
                        purchaseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        // Optional: highlight effect
                        const el = document.getElementById('purchase-section');
                        if (el) {
                          el.classList.add('ring-4', 'ring-blue-100', 'transition-all');
                          setTimeout(() => el.classList.remove('ring-4', 'ring-blue-100'), 2000);
                        }
                      }}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                    >
                      <Compass className="w-5 h-5" />
                      Explore the full adventure
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      <AnimatePresence>
        {activeQuiz && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveQuiz(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <QuizPlayer quiz={activeQuiz} onClose={() => setActiveQuiz(null)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
