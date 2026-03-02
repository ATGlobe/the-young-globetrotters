import React from 'react';
import { motion } from 'motion/react';
import { VOLUMES } from '../constants';
import VolumeCard from '../components/VolumeCard';
import { Search, Filter, Book, GraduationCap } from 'lucide-react';

export default function Shop() {
  const [search, setSearch] = React.useState('');

  const filteredVolumes = VOLUMES.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase()) || 
                         v.city.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">All Volumes</h1>
          <p className="text-slate-600">Explore our collection of 50 adventures around the world.</p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by city or title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredVolumes.length > 0 ? (
            filteredVolumes.map((volume) => (
              <VolumeCard key={volume.id} volume={volume} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="bg-white p-12 rounded-[40px] border border-dashed border-slate-300 inline-block">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">No volumes found</h3>
                <p className="text-slate-500">Try changing your search terms.</p>
              </div>
            </div>
          )}
        </div>

        {/* Info Categories */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-600 rounded-[40px] p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Ebooks</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Perfect for reading on tablets, smartphones, or ereaders. Formats available: PDF, DOCX, MOBI, EPUB.
              </p>
              <ul className="space-y-3 text-sm text-blue-50">
                <li className="flex items-center">• Immediate download</li>
                <li className="flex items-center">• Compatible with all devices</li>
                <li className="flex items-center">• High-quality illustrations</li>
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <Book className="w-64 h-64" />
            </div>
          </div>

          <div className="bg-emerald-600 rounded-[40px] p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ebook + Learning Activities</h3>
              <p className="text-emerald-100 mb-6 leading-relaxed">
                The complete learning package. Includes the ebook and a set of printable activities.
              </p>
              <ul className="space-y-3 text-sm text-emerald-50">
                <li className="flex items-center">• Printable PDF with activities</li>
                <li className="flex items-center">• Original coloring pages</li>
                <li className="flex items-center">• Spaces for writing and reflection</li>
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <GraduationCap className="w-64 h-64" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
