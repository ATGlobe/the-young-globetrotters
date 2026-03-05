import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data/blog';
import { Calendar, User, ArrowLeft, Tag, Share2 } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <header className="relative h-[60vh] min-h-[400px] flex items-end pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-bold mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Blog
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1 bg-emerald-500 text-white text-xs font-black rounded-full uppercase tracking-widest">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-8 text-white/80 font-bold">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-emerald-600 prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Share this story</span>
                <div className="flex gap-2">
                  <button className="p-3 bg-slate-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-all text-slate-400">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
              <Link 
                to="/blog" 
                className="text-sm font-black text-emerald-600 uppercase tracking-widest hover:underline"
              >
                More Stories
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
