import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    title: "How to Teach Geography to Kids Through Storytelling",
    excerpt: "Discover why stories are the most powerful tool for helping children remember world facts and cultures.",
    image: "/assets/blog/post-1.png",
    date: "Feb 24, 2026",
    author: "Professor Owl",
    category: "Education"
  },
  {
    id: 2,
    title: "5 Traditional Recipes You Can Cook with Your Children",
    excerpt: "Chef shares his favorite kid-friendly recipes from our latest volumes in Rome, Paris, and Tokyo.",
    image: "/assets/blog/post-2.png",
    date: "Feb 20, 2026",
    author: "Chef",
    category: "Recipes"
  },
  {
    id: 3,
    title: "The Importance of Cultural Empathy in Early Childhood",
    excerpt: "Why exposing children to diverse worldviews early on is crucial for their development as global citizens.",
    image: "/assets/blog/post-3.png",
    date: "Feb 15, 2026",
    author: "Axel",
    category: "Parenting"
  }
];

export default function Blog() {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Explorer's Blog</h1>
            <p className="text-slate-500">Educational tips, recipes, and stories for parents and teachers.</p>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.image || '/assets/blog/default.png'} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/blog/default.png';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-slate-500 text-sm mb-8 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center text-blue-600 font-bold text-sm hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-24 bg-white p-12 md:p-20 rounded-[64px] border border-slate-100 shadow-sm text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Never miss an adventure!</h2>
            <p className="text-slate-500 mb-10">Subscribe to our newsletter and get the latest educational content and exclusive discounts.</p>
            
            <form className="flex flex-col sm:row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="bg-blue-600 text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
