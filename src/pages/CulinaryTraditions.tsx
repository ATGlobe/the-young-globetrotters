import { motion } from 'motion/react';
import { recipes } from '../data/recipes';
import { Link } from 'react-router-dom';
import { ChefHat, Utensils, Globe } from 'lucide-react';

export default function CulinaryTraditions() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-emerald-600">
        <div className="absolute inset-0 opacity-20">
          {/* Image removed */}
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ChefHat className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              The Global Explorer <span className="text-emerald-200">Cookbook</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 font-medium max-w-2xl mx-auto">
              Discovering the world's diverse cultures through the universal language of food.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-stone-800">A Taste of Adventure</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Food is more than just sustenance; it's a window into the soul of a nation. 
              Our Global Explorer Cookbook brings you authentic recipes from every corner of the globe, 
              carefully selected to help young explorers understand the traditions, history, and 
              flavors that make each culture unique.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <Utensils className="w-5 h-5" />
                <span>Authentic Recipes</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <Globe className="w-5 h-5" />
                <span>Global Flavors</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <motion.img 
              src="https://picsum.photos/seed/chef1/600/800" 
              alt="Chef 1" 
              className="absolute top-0 left-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-xl z-20 border-4 border-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              referrerPolicy="no-referrer"
            />
            <motion.img 
              src="https://picsum.photos/seed/chef2/600/800" 
              alt="Chef 2" 
              className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-xl z-10 border-4 border-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Recipe Grid Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Recipes from Around the World</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Start your culinary journey with these traditional dishes. Each one tells a story of its homeland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <motion.div 
                key={recipe.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {recipe.country}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-4">{recipe.title}</h3>
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Key Ingredients</h4>
                    <ul className="flex flex-wrap gap-2">
                      {recipe.ingredients.map((ing, i) => (
                        <li key={i} className="bg-stone-100 text-stone-600 px-3 py-1 rounded-lg text-sm">
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-stone-500 text-sm italic mb-6">
                    "Full preparation available inside the adventure ebook."
                  </p>
                  <Link 
                    to={`/books/${recipe.bookSlug}`}
                    className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-colors"
                  >
                    Discover the Book
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-emerald-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Hungry for More?</h2>
          <p className="text-xl text-emerald-100 mb-10">
            Join Axel, Tino, and Foxy on their global adventures and unlock the full cookbook in every city!
          </p>
          <Link 
            to="/books"
            className="inline-block bg-white text-emerald-900 font-black px-10 py-5 rounded-full hover:bg-emerald-50 transition-colors text-lg"
          >
            Explore All Books
          </Link>
        </div>
      </section>
    </div>
  );
}
