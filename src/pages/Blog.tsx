import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import { BLOG_POSTS } from '../data/blog';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero 
        title="The Explorer's Blog"
        subtitle="Travel tips, educational insights, and stories from our global adventures."
        bgColor="bg-emerald-600"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all"
            >
              <Link to={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-black text-emerald-600 flex items-center gap-2 shadow-sm">
                  <Tag size={14} />
                  {post.category}
                </div>
              </Link>
              <div className="p-10">
                <div className="flex items-center gap-6 text-slate-400 text-sm font-bold mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-emerald-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-emerald-600 font-black hover:gap-4 transition-all"
                >
                  Read More <ArrowRight size={20} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
