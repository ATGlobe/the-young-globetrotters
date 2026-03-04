import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, ShoppingCart } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        <img 
          src={book.cover} 
          alt={book.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-blue-600 uppercase tracking-widest">
          <Globe size={14} />
          <span>{book.city}, {book.country}</span>
        </div>
        
        <h3 className="mb-3 text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
          {book.title}
        </h3>
        
        <p className="mb-6 text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {book.intro}
        </p>

        {/* Actions */}
        <div className="mt-auto space-y-3">
          <Link 
            to={`/books/${book.slug}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
          >
            View Details <ArrowRight size={16} />
          </Link>
          
          <a 
            href={book.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all"
          >
            Buy Now <ShoppingCart size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
