import React from 'react';
import { motion } from 'motion/react';
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
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <p className="text-white text-sm font-medium leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {book.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4 text-xs font-black text-blue-600 uppercase tracking-[0.2em]">
          <Globe size={14} />
          <span>{book.city}, {book.country}</span>
        </div>
        
        <h3 className="mb-4 text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
          {book.title}
        </h3>
        
        <p className="mb-8 text-slate-600 line-clamp-2 leading-relaxed text-sm">
          {book.description}
        </p>

        {/* Actions */}
        <div className="mt-auto space-y-3">
          <Link 
            to={`/books/${book.slug}`}
            className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
          >
            View Details <ArrowRight size={16} />
          </Link>
          
          {book.externalLink ? (
            <a 
              href={book.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl font-bold text-sm hover:bg-blue-50 transition-all"
            >
              Buy Now <ShoppingCart size={16} />
            </a>
          ) : (
            <div className="flex items-center justify-center gap-2 w-full py-4 bg-slate-50 text-slate-400 border-2 border-slate-100 rounded-2xl font-bold text-sm cursor-not-allowed">
              Ebook Coming Soon
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
