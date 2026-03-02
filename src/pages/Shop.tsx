import React from 'react';
import { motion } from 'motion/react';
import { VOLUMES } from '../constants';
import VolumeCard from '../components/VolumeCard';
import BundleCard from '../components/BundleCard';
import { Search, Filter, X } from 'lucide-react';

export default function Shop() {
  const [search, setSearch] = React.useState('');
  const [selectedCountry, setSelectedCountry] = React.useState('All');

  const countries = ['All', ...new Set(VOLUMES.map(v => v.country))].sort();

  const filteredVolumes = VOLUMES.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase()) || 
                         v.city.toLowerCase().includes(search.toLowerCase()) ||
                         v.country.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = selectedCountry === 'All' || v.country === selectedCountry;
    return matchesSearch && matchesCountry;
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
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative flex-grow max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by city, country or title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
            />
            {search && (
              <button 
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <div className="relative min-w-[200px]">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full pl-10 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer text-slate-700 font-medium"
            >
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Bundle Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Start with the First 3 Adventures</h2>
          <BundleCard 
            title="The European Starter Collection"
            description="Join Axel & Tino on their first three legendary journeys through Rome, Paris, and London. The perfect introduction to the Young Globetrotters universe."
            covers={[
              VOLUMES[0].cover,
              VOLUMES[1].cover,
              VOLUMES[2].cover
            ]}
            price="$24.99"
            link="/volume/1"
          />
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

      </div>
    </div>
  );
}
